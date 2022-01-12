---
title: useCallback
date: 2022-01-11
---

## 들어가며

`useCallback` 함수는 `useMemo` 함수와 비슷한 Hook으로 사용법이 유사하다.

`useMemo`의 경우, 필터링 작업이라던지 컴포넌트의 DOM 요소들과 같이 결과값들을 재사용하고 싶을 때 사용하고, `useCallback`은 함수들을 재사용하고 싶을 때 사용한다.

React 컴포넌트가 렌더링 될 때마다 함수는 매번 새롭게 생성 되는데, 특정 상태값이 변경될 때만 함수를 생성하고 싶을 때 `useCallback`을 사용한다고 보면 된다.

### 기존 코드

```javascript
function App() {
  const [products, setProduct] = useState({
      /* products 데이터 */
  });
  const [minPrice] = useState(75000);

  const filterProducts = () => {
    setProduct((products) =>
      products.filter((product) => product.price >= minPrice)
    );
  }

  return (
    <div>
      {products.map(({ id, name, price }) => {
        return (
          <div key={id}>
            <div>아이디: {id}</div>
            <div>이름: {name}</div>
            <div>가격: {price}원</div>
          </div>
        );
      })}

      <button onClick={filterProducts}>
        필터링
      </button>
      <button onClick={() => setProduct(initialProducts)}>
        초기화
      </button>
    </div>
  );
}
```

### useCallback 사용 코드

`filterProducts` 함수를 `useCallback`을 사용해서, `minPrice`의 값이 변경될 경우에만 함수를 생성하도록 수정했다.
`minPrice` 값이 변경되지 않을 경우에는 컴포넌트가 다시 렌더링 된다고 하더라도 함수는 새롭게 생성되지 않고, 기존에 생성된 함수를 재사용 한다.

```javascript
const filterProducts = useCallback(() => {
  setProduct((products) =>
      products.filter((product) => product.price >= minPrice)
  );
}, [minPrice]);
```

## 주의점

`useCallback` 함수 안에서 사용하는 props 혹은 상태값이 있을 경우에는, 두 번째 인자인 의존성 배열에 넣어야 한다.
의존성 배열에 넣지 않을 경우, 함수 안에서 사용하는 값들이 최신 값을 참조하지 못 할 수 있다.

```javascript
useCallback(() => {
  /* numbers 사용 */
  setNumbers(numbers => numbers.filter(n => n % 2));
}, [numbers]); /* 의존성 배열에 numbers 추가 */
```

## 의문점

`useCallback` 함수의 경우, `useMemo`와는 달리 결과값을 저장하는게 아니라 함수 자체를 저장해서 반환하는데, 함수 자체가 엄청나게 복잡하고 긴 코드가 아닌 이상 저장하는게 의미가 있을지는 테스트를 통해 알아봐야 할 것 같다.

아무래도 함수를 저장하기 위해서는 `useCallback`을 호출하고 안에서 사용할 함수를 만들고, 의존성 배열까지 확인해야 하는데 오히려 유지보수나 가독성이 안 좋아질 것 같다는 생각이 든다.

그리고 일반 프로젝트에서는 `useCallback`을 사용해서 성능이 눈에 보일 정도로 달라진다던지 이런 효과는 없을 것 같아서, 크게 성능에 문제가 있지 않는 이상은 `useMemo` 함수와 함께 잘 사용하지 않을 것 같다.

해당 함수들이 `memoization`을 해놓으면서 발생하는 비용을 극복할 정도로 해당 함수를 사용해서 최적화가 되려면 특히 `useMemo`에서 매우 어렵고 복잡한 연산을 해야지만 체감할 수 있을 것 같다.

물론 애니메이션을 다루는 경우에는 필연적으로 반복적으로 렌더링 될 수 밖에 없어서, `useCallback`과 `useMemo`를 통해 성능 최적화를 진행해야 한다고 생각한다.