---
title: useSelector
date: 2022-01-18
---

## 들어가며

기존에는 컴포넌트에서 store의 상태값을 사용하기 위해서는 `connect` 함수의 `mapStateToProps`을 넘겨서 props를 사용하는 방식처럼 사용했다.

이제는 react-redux 7버전 이후로 나온 `useSelector` Hook을 사용해서, 손쉽게 store에 접근하고 상태값을 가지고 올 수 있게 됐다. 

`useSelector`는 `mapStateToProps`과 다른점은 다음과 같다.

- ownProps를 받지 않는다.
- 여러 번의 dispatch 작업이 있어도 한 번만 렌더링한다.
- 이전 값과 비교하여 동일할 경우, 렌더링을 하지 않는다.
- 동일성 검사가 엄격하다. (=== 방식)

## useSelector 알아보기

`useSelector`는 selector와 equalityFn 두 개의 인자를 받을 수 있다.

```javascript
useSelector(selector: Function, equalityFn?: Function);
```

selector는 `connect` 함수의 `mapStateToProps`의 기능과 유사하다.
다음과 같이 컴포넌트 안에서 쉽게 사용할 수 있다.

```javascript
import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector(state => state.users);
}
```

equalityFn는 필요한 경우 사용할 수 있으며, 렌더링 최적화를 위해 사용한다.
true를 반환할 경우, 렌더링을 진행하지 않고 false를 반환하면 렌더링한다.

```javascript
import { useSelector } from "react-redux";

function UserList() {
  const users = useSelector(
    (state) => state.users,
    (prev, next) => {
      ...
    }
  );
}
```

## useSelector 사용하기

selector는 컴포넌트가 렌더링 될 때마다 실행되며, dispatch 함수를 통해 action이 발생했을 경우에도 실행된다.

다음 코드를 실행해보면 `dispatch` 함수를 호출해 컴포넌트에서 사용하는 상태와 다른 상태를 변경하더라도, selector는 실행되며 "유저 가지고 오기"라는 문구가 콘솔에 출력된다.

```javascript
import { useSelector, useDispatch } from "react-redux";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    console.log("유저 가지고 오기");
    return state.users;
  });

  console.log("컴포넌트 렌더링");

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => dispatch({ type: "counter/increment" })}>
        증가
      </button>
    </div>
  );
}
```

다만 selector가 실행된다고 해서, 컴포넌트가 렌더링 되지는 않는다. 
selector를 사용해서 가지고 오는 상태에 변화가 있을 때만 렌더링 된다.

## selector 최적화 - 외부 선언

컴포넌트가 가진 상태를 변경했을 때 selector는 어떻게 되는지에 대해 알아보자.
다음은 버튼 클릭 시, count가 1이 증가하며, selector를 통해 가지고 오는 users 데이터와는 전혀 관계가 없다.

```javascript
function UserList() {
  const [count, setCount] = useState(0);
  const users = useSelector((state) => {
    console.log("유저 가지고 오기");
    return state.users;
  });

  console.log("컴포넌트 렌더링");

  return (
    <div>
      <h2>User List</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
    </div>
  );
}
```

당연하게도 count의 값이 변할 때, 컴포넌트는 다시 렌더링 되는데, 이 때 selector는 실행되며 같은 데이터를 반복해서 가지고 온다.

같은 데이터를 반복해서 가지고 오는 것을 방지하기 위해서는 아래와 같이 selector 코드를 외부에서 선언해줘야 한다.

```javascript
const getUsers = (state) => {
  console.log("유저 가지고 오기");
  return state.users;
};

function UserList() {
  const [count, setCount] = useState(0);
  const users = useSelector(getUsers);

  console.log("컴포넌트 렌더링");

  return (
    <div>
      <h2>User List</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}
```

이렇게 selector 코드를 외부로 분리할 경우, count의 값이 변경되더라도 selector는 실행되지 않는다.

## selector 최적화 - equalityFn 사용

## selector 최적화 - shallowEqual 사용