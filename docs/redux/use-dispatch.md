---
title: useDispatch
date: 2022-01-20
---

## 들어가며

기존에는 스토어의 상태값을 변경하기 위해서는 `connect` 함수를 사용해서 컴포넌트가 `dispatch`를 사용할 수 있도록 하거나, `mapDispatchToProps`를 통해서, `dispatch`로 감싼 함수를 넘기는 방법을 사용했다.

`connect` 함수를 사용하면 매번 사용할 상태와 함수들을 설정해줘야 해서 불편했고, 이렇게 전달된 상태와 함수들은 부모 컴포넌트가 전달해준 props와 구분하기 어려웠다.

react-redux 7 이후로는 컨테이너 컴포넌트를 만들지 않고도 `useDispatch` 함수를 통해, 스토어의 내장 함수 `dispatch`를 쉽게 사용할 수 있다.

## useDispatch 알아보기

`useDispatch` 함수는 별도의 인자 값을 받지 않으며, `dispatch` 함수에 대해 참조할 수 있도록 값을 반환한다.

```javascript
import { useDispatch } from "react-redux";

const dispatch = useDispatch();
```

## useDispatch 사용하기

`useDispatch` 함수는 다음과 같이 사용할 수 있는데, 증가 버튼을 클릭하면 type이 `counter/increment`인 액션 객체로 리듀서를 호출하고 변경된 값이 스토어에 반영된다.

```javascript
const increment = () => ({
  type: "counter/increment",
});

function Counter() {
  const dispatch = useDispatch();

  const onIncrement = () => dispatch(increment());

  return (
    <div>
      <button onClick={onIncrement}>증가</button>
    </div>
  );
}
```

## 주의점

`useDispatch` 함수만 사용한다고 가정하면 `connect` 함수와 비교했을 때 단점은 없다고 봐도 무방하다.
하지만 스토어의 상태를 가지고 오기 위해서 `useSelector` 함수를 사용할텐데, `connect` 함수에 비해서는 신경 쓸 점들이 많아지게 된다.

예를 들어, 기존에는 신경 쓰지 않았던 컴포넌트 리렌더링 문제를 해결하기 위해, 추가 코드의 작성이 필요할 수 있다. 

최적화를 신경 써야 하는 점들을 고려하더라도 Redux Hooks의 기능들은 편리하며 코드를 쉽게 작성할 수 있어서 매력적이다.
타입스크립트를 사용한다면 `connect` 함수에서 어려웠던 인터페이스 작성들이 간단해지므로 `useSelector`와 `useDispatch`를 사용하는 것을 권장한다.