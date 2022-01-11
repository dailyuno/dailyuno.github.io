---
title: useRef 사용법
date: 2022-01-11
---

## 들어가며

React를 사용하여 프로젝트를 만들다 보면 직접 DOM 요소에 접근해야 할 일이 발생하기도 한다.
예를 들어, input 요소에 focus를 주거나 스크롤 위치 혹은 요소의 크기 등을 알아야 하는 경우가 있다.

특히 Video, Chart, Animation 등의 라이브러리를 사용할 경우, 직접 요소를 넘겨주거나 값을 지정해야 하는 경우가 있다.

이렇게 직접 DOM 요소에 접근해야 하는 상황이 올 때 React Hooks의 종류인 `useRef`를 사용한다.

클래스형 컴포넌트의 경우, `React.createRef`라는 함수를 사용해서 DOM 요소를 제어하는데 Hooks이 나온 이후로는 기존 코드로 작성된 프로젝트를 제외하고는 대부분 사용하지 않는다.

## useRef 알아보기

`useRef` 함수는 다른 Hooks들과 비교했을 때  쉽게 사용할 수 있다. `useRef` 초기값에 "테스트"라는 값을 넣으면 반환하는 객체는 다음과 같다.

```javascript
const exampleRef = useRef("테스트");

/* 반환 객체 */
{current: "테스트"}
```

이렇게 `useRef` 초기값은 current의 value값으로 지정되는데, DOM 요소에 ref 설정할 경우 덮어씌워지므로 따로 설정하지 않아도 무방하다.

`useRef` 함수는 ref 객체를 반환하는데, 해당 객체를 통해 DOM 요소에 접근할 수 있다.
반환 된 ref 객체를 변수에 저장하고, 접근하고자 하는 DOM 요소의 속성값 ref에 사용하면 된다.

```javascript
const 변수이름 = useRef(초기값);

<input type="text" ref={변수이름}>
```

## useRef 사용하기

DOM 요소를 제어할 때는 속성값 ref에 사용된 변수의 current를 사용해야 한다.
다음은 페이지가 로딩될 때, `input` 요소에 focus가 되도록 한 코드다. 

```javascript
function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}
```

`useRef`를 이벤트와 함께 사용하는 경우가 생길텐데, 기존 이벤트 처리 방식과 동일하다고 보면 된다.
버튼을 클릭 할 경우, `input` 요소에 포커스 된다.

```javascript
function App() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>input 포커스 버튼</button>
    </div>
  );
}
```

## useRef 주의점

특정 조건에서 DOM 요소가 보이는 경우에는 ref 객체가 존재하는지 확인을 해야 한다.
확인하지 않고 무작정 DOM 요소에 접근할 경우 에러가 발생한다.

아래 코드를 보면 `input` 요소는 초기에는 보이지 않는 상태인데, 이 때 `inputRef`의 current 값은 `undefined` 값이 된다.
Toggle 버튼을 클릭해서 `input` 요소가 보일 경우에만 `inputRef`의 current 값에 해당 요소가 할당되므로 주의해야 한다.

```javascript
function App() {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();

  return (
    <div>
      {visible && <input ref={inputRef} />}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        input 포커스 버튼
      </button>
      <button onClick={() => setVisible(!visible)}>input Toggle 버튼</button>
    </div>
  );
}
```

## 다른 컴포넌트에 useRef 사용하기

재사용성을 높이기 위해 Button, Input과 같은 경우 컴포넌트를 분리하는 경우가 많다. 
이렇다 보니 다른 컴포넌트 DOM 요소에 접근해야 하는 상황이 발생하는데, 다른 데이터를 넘겨줄 때와 동일한 방식으로 ref 요소를 넘길 경우 문제가 발생한다.

ref 요소는 props으로 분류 되지 않아서, `undefined`가 설정되고, ref가 아닌 다른 이름으로 넘겨야 한다.
하지만 ref가 아닌 다른 이름으로 설정하여 넘길 경우, 직관성이 떨어지게 된다.

```javascript
function App() {
  const inputRef = useRef();

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        input 포커스 버튼
      </button>
    </div>
  );
}

function Input({ ref }) {
  return <input ref={ref} />;
}
```

이 때 `React.forwardRef`를 사용하면 ref 요소를 처리할 수 있어서, 문제를 해결 할 수 있다.
props는 첫 번째 인자로 받고, ref 요소는 두 번째 인자로 받아서 사용할 수 있다.

```javascript
function App() {
  const inputRef = useRef();

  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        input 포커스 버튼
      </button>
    </div>
  );
}

const Input = forwardRef(({}, ref) => {
  return <input ref={ref} />;
});
```