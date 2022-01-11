---
title: useMemo 사용법
date: 2022-01-11
---

## 들어가며
React 컴포넌트는 상태값이 변경될 때마다 다시 렌더링 되는데, 부모 컴포넌트가 렌더링 될 경우 자식 컴포넌트는 상태값 변경과 상관없이 다시 렌더링 된다.

이해를 돕기 위해 아래의 코드를 실행해보면 `App` 컴포넌트에서 `input`입력을 통해 `text` 값을 변경할 때마다 `App`, `Post`, `Comments` 컴포넌트 모두 Update 되었다는 console이 출력되는 것을 알 수 있다. 

`Comments` 컴포넌트의 경우, `text` 값을 사용하지 않기 때문에 바뀌는 데이터가 없음에도 불구하고, 다시 렌더링이 된다.

```javascript
function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("App Update");
  });

  return (
    <div>
      <Post text={text} />
      <input value={text} onInput={(e) => setText(e.target.value)} />
    </div>
  );
}

function Post({ text }) {
  useEffect(() => {
    console.log("Post Update");
  });

  return (
    <div>
      {text}
      <Comments />
    </div>
  );
}

function Comments() {
  useEffect(() => {
    console.log("Comments Update");
  });

  return <div>Comments</div>;
}
```

우리는 이러한 무의미한 렌더링을 방지하기 위해서는 React Hooks의 `useMemo`를 사용해야 한다.

`useMemo`는 연산된 값을 저장하고 재사용하는 함수로 무의미한 반복 연산을 방지할 수 있다. 주로 성능 최적화를 위해 사용 된다.

첫 번째 인자는 재사용이 될 데이터 정보를 넣고, 두 번째 인자에는 해당 데이터 정보에 관련 있는 변수들을 넣으면 된다. `useEffect`의 의존성 배열과 사용법은 동일하다.

```javascript
useMemo(함수, 의존성 배열);
```

## useMemo 사용하기

다음은 `useMemo` 함수를 사용해서 반복적인 렌더링을 방지한 코드인데, 실행해보면 여전히 `useEffect`의 console이 출력되는 것을 볼 수 있다. 
그 이유는 `useMemo`가 `Comments` 컴포넌트 자체의 정보를 저장한 것이 아닌 `useMemo` 첫 번째 인자로 넘겨진 함수 안에 정보를 저장하기 때문이다.

`useMemo` 함수 안에 정보들은 저장되어 재사용 되기 때문에 `App` 컴포넌트에서 `text`의 값이 변경되더라도 console은 출력되지 않는다.

```javascript
function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("App Update");
  });

  return (
    <div>
      <Post text={text} />
      <input value={text} onInput={(e) => setText(e.target.value)} />
    </div>
  );
}

function Post({ text }) {
  useEffect(() => {
    console.log("Post Update");
  });

  return (
    <div>
      {text}
      <Comments />
    </div>
  );
}

function Comments() {
  useEffect(() => {
    console.log("Comments Update");
  });

  return useMemo(() => {
    console.log("Comments Memo Update");

    return <div>Comments</div>;
  }, []);
}
```

이렇게 컴포넌트의 HTML를 저장하는 작업 뿐만 아니라 데이터 filter 작업을 할 때도 유용하게 사용할 수 있는데, 먼저 `useMemo`를 사용이 필요한 상황을 알아보자.

아래 코드를 보면 크게 문제 될 것이 없어 보이지만 `title`의 값이 변경 될 때마다 `numbers` 배열 filter 코드의 console이 계속 출력 되는 문제가 있다.

배열을 필터링하는데 연관이 있는 `numbers` 배열이나 `minNumber`의 변경이 있는게 아닌데도 불구하고, `NumberList`의 컴포넌트가 다시 렌더링 될 때마다 필터링 함수는 계속 호출된다.

```javascript
function App() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [title, setTitle] = useState("Title");

  useEffect(() => {
    console.log("App Update");
  });

  return (
    <div>
      <input value={title} onInput={(e) => setTitle(e.target.value)} />
      <NumberList numbers={numbers} title={title} />
    </div>
  );
}

function NumberList({ numbers, title }) {
  const [minNumber, setMinNumber] = useState(3);

  return (
    <div>
      <h2>{title}</h2>

      {numbers
        .filter((number) => {
            console.log("filter", number);
            return number >= minNumber;
        })
        .map((number) => {
          return <span key={number}>{number}</span>;
        })}

      <div>
        숫자 최소값
        <select
          onChange={(e) => {
            setMinNumber(e.target.value);
          }}
          value={minNumber}
        >
          {numbers.map((number) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
```

`NumberList` 컴포넌트가 렌더링 될 때마다 필터링하는 것을 방지하기 위해서는 아래 코드처럼 `useMemo`를 사용하면 된다. 
이제는 `title`의 값이 변경되더라도 필터링 작업은 최초 한 번만 진행되고 더 이상 console이 출력되지 않는다.

물론 아래 예제는 작은 배열의 필터링 작업인만큼 `useMemo` 함수의 필요성을 못 느낄 수도 있지만 배열의 크기가 커지고 필터링 코드가 복잡해질 수록 매번 필터링하는 것을 부담된다는 것을 알아야 한다.

```javascript
function App() {
  const [numbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [title, setTitle] = useState("Title");

  useEffect(() => {
    console.log("App Update");
  });

  return (
    <div>
      <NumberList numbers={numbers} title={title} />
      <input value={title} onInput={(e) => setTitle(e.target.value)} />
    </div>
  );
}

function NumberList({ numbers, title }) {
  const [minNumber, setMinNumber] = useState(3);

  const filterNumbers = useMemo(() => {
    return numbers.filter((number) => {
      console.log("filter", number);
      return number >= minNumber;
    });
  }, [numbers, minNumber]);

  return (
    <div>
      <h2>{title}</h2>

      {filterNumbers.map((number) => {
        return <span key={number}>{number}</span>;
      })}

      <div>
        숫자 최소값
        <select
          onChange={(e) => {
            setMinNumber(e.target.value);
          }}
          value={minNumber}
        >
          {numbers.map((number) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
```

## useMemo 주의점

이렇게 `useMemo`의 장점들만 보았을 때는 모든 컴포넌트에서 사용하면 좋을 것 같지만 `useMemo` 함수는 값을 저장하기 위한 작업이 별도로 필요하다. 

상태값이 자주 변경되는 컴포넌트의 경우에는 `useMemo`를 사용할 경우에는 오히려 성능이 떨어질 수도 있다. 그래서 모든 컴포넌트에서 사용하기 보다는 적절한 상황에서 사용해야 한다.

마지막으로 성능을 최적화하기 위한 코드는 복잡해지고 길어져서, 가독성이 떨어지는 문제가 생긴다. 
성능 이슈가 생길만큼의 연산이 필요할 때 사용하는 걸 권장한다.