# useState
`useState` 훅을 사용하면 컴포넌트에서 상태값을 추가하고 변경할 수 있다.
증가/감소 버튼을 클릭하여 상태값을 변경하는 코드를 작성해보자.

`useState`는 아래와 같이 사용하는데, const [변수명, 변수 변경 함수명] = useState(변수 초기화값); 이라고 보면 된다. `useState`는 4개의 방식으로 사용할 수 있다고 보면 된다.

## useState - 상태 변경

`useState` 초기 값 설정하는 거와 동일하게 변경될 값을 넘기면 변경 된다.
일반 함수를 실행하는 것처럼 호출하면 된다.

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

## useState - 이전 상태 참조

아래 예제와 같이 이전 값을 참조하여, 값을 변경할 수 있다.

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

## useState - Array

Array 타입의 경우, Number/String과 다르게 고려해야 할 점들이 있다.
기존 Javascript에서 Array를 다루는 방식과는 다르게 push/pop/splice와 같은 메소드들을 사용해서 원본 배열을 변경할 수 없다.
아래 예제와 같이 원본 배열에 영향이 가지 않도록 ES6의 spread operator를 사용하여, 원본 배열 값을 카피해서 변경해야 한다.
물론 초기화 버튼이나 초기값 지정 버튼처럼 원본 배열 값을 카피하지 않고, 값을 지정할 수 있다.

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

## useState - Object

Object 타입은 Array 타입 처리 방식과 동일하다고 봐도 무방하다.
원본 배열 값을 카피하는 방식으로 상태 값을 변경한다.

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