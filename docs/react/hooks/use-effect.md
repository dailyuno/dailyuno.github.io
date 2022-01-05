---
title: useEffect 사용법
date: 2022-01-05
---

## 들어가며
`useEffect`는 부수 효과(side effects)를 처리하기 위한 함수이며, `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`와 같은 라이프 사이클 함수 역할을 할 수 있다.

16.8 이전 버전에서는 함수형 컴포넌트는 라이프 사이클에 접근할 수 없었는데, `useEffect`를 통해 라이프 사이클에 접근할 수 있게 되었다.

주로 `useEffect` 함수 내부에서는 API 호출하거나 EventListener를 등록하거나 해제하는 등의 역할을 한다.

## 라이프 사이클
React의 라이프 사이클은 크게 `Mounting`, `Updating`, `Unmounting`으로 나눌 수 있고, 아래와 같이 대표적인 3개의 라이프 사이클 함수가 존재한다.

- 컴포넌트가 화면에 추가 될 때: `componentDidMount`
- 컴포넌트가 다시 렌더링 될 때: `componentDidUpdate`
- 컴포넌트가 화면에서 사라질 때: `componentWillUnmount`

물론 React의 라이프 사이클은 좀 더 세부적으로 나뉘지만 `useEffect` Hook을 소개하는 페이지이니 생략하겠다.

### componentDidMount
컴포넌트가 처음 실행될 때를 의미하며, DOM에 추가되어 렌더링 된 상태를 의미한다.

useEffect는 두 개의 인자를 받는데, 첫 번째 인자는 콜백 함수를 받고 두 번째 인자는 상태의 변경을 감지할 배열을 받는다.

여기서 두 번째 인자를 의존성 배열이라 하며, 빈 배열 상태로 넣을 경우 컴포넌트가 마운트 될 때 한 번만 실행된다.

```javascript
useEffect(() => {
    console.log('created');
}, []);
```

### comonentDidUpdate
컴포넌트가 호출되어 다시 렌더링 될 때를 의미하며, 변경된 값들이 반영되고 난 이후를 의미한다.

의존성 배열이 없는 경우에 실행되는데, `componentDidMount`의 역할도 하게 된다.

```javascript
useEffect(() => {
    console.log('updated')
});
```

의존성 배열에 변수를 넣을 경우, 변수가 변경될 때만 실행 되며 여전히 `componentDidMount`의 역할도 같이 한다고 보면 된다.

꼭 필요한 경우를 제외하고는 의존성 배열에는 값을 넣을 필요가 없다. 값을 넣을 경우, 예상치 못 한 오류가 발생할 수 있어서 코드를 작성할 때 넣지 않는 방향으로 작성하는게 좋다.

```javascript
useEffect(() => {
    console.log(`updated ${name}`)
}, [name]);
```

### componentWillUnmount
컴포넌트가 화면에서 사라지는 것을 의미하며, 주로 페이지가 바뀌거나 조건문을 통해 컴포넌트가 안 보이게 될 때에서 발생한다.

의존성 배열이 빈 상태일 경우, 렌더링이 끝날 때 실행된다.

```javascript
useEffect(() => {
    return () => {
        console.log('unmount');
    };
}, []);
```

## 이벤트 처리

이제 `useEffect`을 사용하여 이벤트 처리하는 방법을 알아보자. 

아래의 코드는 컴포넌트가 생성될 때 wheel 이벤트가 등록되며, 컴포넌트가 사라지기 직전에 wheel 이벤트는 제거 된다. 등록된 이벤트는 제거하지 않으면 메모리 누수의 원인이 될 수 있어서, 컴포넌트가 사라질 때는 등록한 이벤트를 반드시 삭제해줘야 한다.

이렇게 등록된 wheel 이벤트는 사용자가 스크롤할 때, `onWheel` 함수를 호출해서 `count` 값을 1이 증가한 값으로 변경한다.

```javascript
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onWheel = () => {
      setCount((prev) => prev + 1);
    };

    window.addEventListener("wheel", onWheel);

    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div>
      <h2>화면 스크롤 수: {count}</h2>
    </div>
  );
}
```

## API 사용
먼저 API 사용에 앞서 `async` 함수는 Promise 객체를 반환하므로 부수 효과 함수가 될 수 없다는 사실을 알아야 한다. 이해하기 쉽도록 아래 코드를 실행해보면 `useEffect`에 전달하는 함수를 `async` 함수로 넘기게 될 경우, unmount 값은 출력이 되지 않는 걸 알 수 있다.

```javascript
function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(async () => {
    const products = await getProducts();
    setProducts(products);
    return () => {
        console.log("unmount")
    };
  }, []);

  return (
    <div>
      {products &&
        products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </div>
  );
}
```

우리는 unmount 값이 출력될 수 있도록 하기 위해서는 API를 호출하는 코드를 `useEffect` 내부에서 `async` 함수를 추가로 만들거나 외부로 분리해야 한다. 

다른 곳에서 사용이 필요하지 않을 경우, `useEffect` 내부에 작성하면 되고 재사용이 필요할 경우, 외부로 분리해서 사용하면 된다.

```javascript
function ProductList() {
  const [products, setProducts] = useState(null);

  async function fetchProducts() {
    const products = await getProducts();
    setProducts(products);
  }

  useEffect(() => {
    fetchProducts();

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      {products &&
        products.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </div>
  );
}
```