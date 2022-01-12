---
title: useState
date: 2022-01-05
---

## 들어가며
`useState` 훅을 사용하면 컴포넌트에서 State 값을 추가하고 변경할 수 있다. 

클래스형 컴포넌트와 함수형 컴포넌트가 각각 어떤 차이가 있는지를 알아야, Hooks을 사용하는 이유에 대해서도 알 수 있다. State를 서로 어떻게 관리하는지에 대해 알아보자.

## State 초기화

클래스형 컴포넌트와 함수형 컴포넌트는 State 초기화부터 다른 방식으로 코드를 작성하게 된다. 

아래 코드를 보면 `useState`를 사용하지 않는게 더 편하다고 생각할 수 있으나, 데이터의 양이 많아질 수록 함수형 컴포넌트 방식이 좋다.

### 클래스형 컴포넌트

클래스형 컴포넌트에서는 `state`라는 변수 안에서 `Object` 형태로 데이터를 다루며, 두 가지 방법으로 State를 선언할 수 있다.

#### constructor 내부 선언 방식

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0
    };
  }
}
```

#### constructor 외부 선언 방식

```javascript
class App extends React.Component {
  state = { name: "", age: 0 };
}
```

### 함수형 컴포넌트

함수형 컴포넌트는 `useState`라는 React의 Hook 기능을 사용하여 State를 선언할 수 있다.
클래스형 컴포넌트와 다른 점은 `state` 안에 전부 선언하는 방식이 아니라, 일반 변수와 같이 개별적으로 선언할 수 있다는 점이다.

```javascript
function App() {
  const [name] = useState("");
  const [age] = useState(0);
}
```

## State 변경

클래스형 컴포넌트와 함수형 컴포넌트는 State를 변경하는 작업에서 큰 차이를 보인다. 먼저 클래스형 컴포넌트부터 State를 어떻게 변경하는지 알아보자.

### 클래스형 컴포넌트

클래스형 컴포넌트에서는 State 변경을 위해 `this.setState` 함수를 사용하는 것을 알 수 있다. `state` 내부에 있는 모든 값들은 `this.setState`를 통해서만 변경이 가능하다.

```javascript
class App extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
        >
          증가
        </button>
        <button
          onClick={() => this.setState((state) => ({ count: state.count - 1 }))}
        >
          감소
        </button>
      </div>
    );
  }
}
```

### 함수형 컴포넌트

함수형 컴포넌트는 클래스형 컴포넌트와 다르게 `useState` 함수를 통해, 아래와 같이 `setCount`라는 변수를 만든 것을 알 수 있다. `setCount`는 임의로 지은 이름이며, 사용자가 직접 이름을 지을 수 있다.

`setState`를 통해서만 State를 변경하는 클래스형 컴포넌트에 비해 독립적인 함수로 분리되었고, 간소화 되었다는 것을 알 수 있다.

```javascript
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}
```

## State 변경 방법

`useState`를 사용하여 State를 변경하는 방법에는 크게 4가지가 있다.

1. 초기화
2. 참조 변경
3. Array
4. Object

### 초기화

클래스형 컴포넌트와 비교하는 예제에서 본 것처럼 `useState` 초기 값을 설정하는 방식과 동일하게 변경될 값을 넘기면 변경 된다.

```javascript
function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input type="text" onInput={e => setName(e.target.value)} />
      <h2>이름: {name}</h2>
    </div>
  );
}
```

### 참조 변경

이전 값을 참조하여, 값을 변경할 수 있다.

```javascript
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(x => x + 1)}>증가</button>
      <button onClick={() => setCount(x => x - 1)}>감소</button>
    </div>
  );
}
```

### Array 방식

Array 타입의 경우, Number/String과 다르게 고려해야 할 점들이 있는데, 기존 Javascript에서 Array를 다루는 방식과는 다르게 push/pop/splice와 같은 메소드들을 사용해서 원본 배열을 변경할 수 없다.

원본 배열에 영향이 가지 않도록 ES6의 spread operator를 사용하여, 원본 배열 값을 카피해서 변경하거나, 값을 직접 지정하는 방식으로 변경할 수 있다.

```javascript
function App() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li>{user}</li>;
        })}
      </ul>

      <button onClick={() => setUsers([...users, `유저${users.length + 1}`])}>
        추가
      </button>
      <button onClick={() => setUsers([...users.slice(0, -1)])}>
        마지막 아이템 삭제
      </button>
      <button onClick={() => setUsers([])}>초기화</button>
      <button onClick={() => setUsers([1, 2, 3])}>초기값 지정</button>
    </div>
  );
}
```

### Object 방식

Object 타입은 Array 타입 처리 방식과 동일하다고 봐도 무방하다.
원본 배열 값을 카피하는 방식으로 State 값을 변경한다.

```javascript
function App() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const updateUserField = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="유저 이름"
        value={user.name}
        onChange={updateUserField}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={updateUserField}
      />

      <div>
        {user.name}
        <br />
        {user.password}
      </div>
    </div>
  );
}
```