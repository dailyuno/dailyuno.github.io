---
title: Context API
date: 2022-01-10
---

## 콘텍스트 API가 필요한 이유

부모 컴포넌트에서 자식 컴포넌트에게 데이터를 전달하기 위해서는 `속성 이름={전달 데이터}` 속성 방식으로 넘겨야 하는데,
작은 프로젝트에서는 큰 어려움 없이 속성을 사용해서 전달이 가능하다.

다만 프로젝트의 규모가 커질 수록, 부모 컴포넌트에서 자식 컴포넌트간의 거리(깊이)가 멀어지게 되며 반복적으로 데이터 전달 코드를 작성해야 하는 문제가 발생한다.

### 컴포넌트 데이터 전달

특히 아래의 구조처럼 A 컴포넌트 가진 `count`라는 데이터를 D 컴포넌트가 사용하기 위해서는 `count` 데이터를 사용하지 않는 B, C 컴포넌트에게도 데이터를 전달해야 한다. 

이렇게 반복적으로 데이터 전달 코드를 작성할 뿐만 아니라, 중간에 코드가 변경될 경우 똑같이 데이터를 전달하는 컴포넌트까지 수정해야 하는 점을 생각한다면 우리는 더 나은 방법을 찾아야 한다.

```markdown
A Component (count 선언)
    B Component
        C Component
            D Component (count 사용)
```

### 기존 코드 문제점

콘텍스트 API를 사용하지 않고 작성한 코드로 `App`이 가진 데이터를 `PostTitle`와 `PostContent` 컴포넌트에게 전달하기 위해, 데이터를 직접적으로 사용하지 않는 `Post` 컴포넌트에게 의무적으로 데이터를 전달하는 문제가 있다.

```javascript
function App() {
  const [post] = useState({
    title: "1번 게시물 제목",
    content: "1번 게시물 본문",
  });

  return (
    <div>
      <Post title={post.title} content={post.content}></Post>
    </div>
  );
}

function Post({ title, content }) {
  return (
    <div>
      <PostTitle title={title}></PostTitle>
      <PostContent content={content}></PostContent>
    </div>
  );
}

function PostTitle({ title }) {
  return <h2>{title}</h2>;
}

function PostContent({ content }) {
  return <p>{content}</p>;
}
```

## 콘텍스트 API 시작하기 

반복적인 데이터 전달과 불필요한 코드 작성을 방지하기 위해서는 React에서 제공하는 콘텍스트 API를 사용하면 된다. 콘텍스트 API를 사용할 경우, `Post` 컴포넌트에 데이터를 전달하지 않고도 `PostTitle`와 `PostContent` 컴포넌트에 데이터를 전달할 수 있다.

### createContext
`createContext` 함수를 호출하여 콘텍스트 객체를 생성할 수 있으며, 객체 생성 이후 `Provider`와 `Consumer` 컴포넌트를 사용할 수 있다.

```javascript
/* createContext 구조 */
React.createContext(defaultValue);
```

### Provider & Consumer

부모 컴포넌트에서 `Provider`를 이용해서 전달할 데이터를 정하고, 자식 컴포넌트에서는 `Consumer`를 통해서 데이터를 받는다.
`Consumer` 컴포넌트는 데이터를 찾기 위해서 부모 컴포넌트로 한 단계씩 올라가면서 가장 가까이 있는 `Provider` 컴포넌트를 찾는다. 

최상위 컴포넌트에 도달하였는데도 `Provider` 컴포넌트가 없는 경우에는 콘텍스트 객체를 생성할 때 사용된 `defaultValue`를 사용한다. 

```javascript
const myContext = createContext(null);

/* Provider 사용 예시 */
<myContext.Provider value={전달하고자 하는 데이터}>
</myContext.Provider>

/* Consumer 사용 예시 */
<myContext.Consumer>
    {data => HTML 코드}
</myContext.Consumer>
```

### 콘텍스트 API 사용 코드

기존 코드의 문제점을 해결하기 위해, 콘텍스트 API를 사용한 코드로 반복적으로 자식 컴포넌트로 데이터를 전달하는 문제를 해결했다.

```javascript
const PostContext = createContext(null);

function App() {
  const [post] = useState({
    title: "1번 게시물 제목",
    content: "1번 게시물 본문",
  });

  return (
    <div>
      <PostContext.Provider value={post}>
        <Post></Post>
      </PostContext.Provider>
    </div>
  );
}

function Post() {
  return (
    <div>
      <PostTitle></PostTitle>
      <PostContent></PostContent>
    </div>
  );
}

function PostTitle() {
  return (
    <PostContext.Consumer>
      {({ title }) => <h2>{title}</h2>}
    </PostContext.Consumer>
  );
}

function PostContent() {
  return (
    <PostContext.Consumer>
      {({ content }) => <p>{content}</p>}
    </PostContext.Consumer>
  );
}
```

## 콘텍스트 API 문제점

`Provider` 컴포넌트의 데이터가 변경 될 경우, 하위에 존재하는 모든 `Consumer` 컴포넌트는 다시 렌더링 되고, 그 사이에 위치한 중간 컴포넌트까지 다시 렌더링이 발생한다.

다음은 콘텍스트 API를 사용하여 작성한 코드를 보기 쉽게 요약한 구조다. 
`useEffect` 함수를 사용해서 확인해보면 `App`에서 `Provider` 컴포넌트를 통해 전달하는 데이터가 변경될 경우, `Consumer` 컴포넌트를 사용하는 `PostTitle`과 `PostContent` 뿐만 아니라 중간에 위치한 `Post`도 다시 렌더링 되는 걸 확인할 수 있다.

```markdown
  App (Provider)
    Post
      PostTitle (Consumer)
      PostContent (Consumer)
```

### memo 사용

불필요한 컴포넌트 리렌더링을 방지하기 위해서는 `React.memo`를 사용하면 된다.
`Post` 컴포넌트의 코드만 `memo` 함수를 사용해서 작성할 경우, `Provider` 컴포넌트의 데이터가 변경되더라도 다시 렌더링 되지 않는 걸 볼 수 있다.

```javascript
const Post = memo(() => {
  return (
    <div>
      <PostTitle></PostTitle>
      <PostContent></PostContent>
    </div>
  );
});
```

## 콘텍스트 API 사용하기

콘텍스트 API를 실제 프로젝트에서 사용하기 위해서는 다양한 사용법을 알아야 한다. 먼저 여러 개의 `Provider`와 `Consumer`를 사용하는 방법을 알아보자.

### 콘텍스트 중첩 사용

`Provider`와 `Consumer`는 HTML 태그를 중첩하는 것처럼 동일하게 중첩하여 사용할 수 있다. 
N개의 `Provider`를 사용하여 데이터를 전달한 경우, 모든 데이터를 받기 위해서는 동일하게 N개의 `Consumer`를 사용해서 데이터를 받아야 한다.

```javascript
const UserContext = createContext(null);
const PostContext = createContext(null);

function App() {
  const [post] = useState({
    title: "번 게시물 제목",
    content: "번 게시물 본문",
    idx: 0,
  });

  const [user] = useState({
    name: "이름",
    age: 40,
  });

  return (
    <UserContext.Provider value={user}>
      <PostContext.Provider value={post}>
        <Post></Post>
      </PostContext.Provider>
    </UserContext.Provider>
  );
}

const Post = memo(() => {
  return (
    <div>
      <PostContent></PostContent>
    </div>
  );
});

function PostContent() {
  return (
    <UserContext.Consumer>
      {({ name, age }) => (
        <PostContext.Consumer>
          {({ idx, content }) => (
            <div>
              <p>{idx} {content}</p>
              <p>{name} - {age}</p>
            </div>
          )}
        </PostContext.Consumer>
      )}
    </UserContext.Consumer>
  );
}
```

### 콘텍스트 데이터 수정

`Provider`를 보유한 부모 컴포넌트에서 콘텍스트 데이터를 수정할 경우, 기존 state 변경 방식과 동일하게 수정하면 된다.

```javascript
function App() {
  const [post, setPost] = useState({
    title: "번 게시물 제목",
    content: "번 게시물 본문",
    idx: 0,
  });

  return (
    <div>
      <PostContext.Provider value={post}>
        <Post></Post>
      </PostContext.Provider>
      <button
        onClick={() =>
          setPost({ title: "제목", content: "본문", idx: post.idx + 1 })
        }
      >
        변경 버튼
      </button>
    </div>
  );
}
```

다만 자식 컴포넌트에서 콘텍스트 데이터를 수정해야 하는 경우에는 `Provider` 컴포넌트를 사용해서 데이터를 수정할 수 있도록 함수를 전달해야 한다.

```javascript
const SetPostContext = createContext(null);
const PostContext = createContext(null);

function App() {
  const [post, setPost] = useState({
    title: "번 게시물 제목",
    content: "번 게시물 본문",
    idx: 0,
  });

  return (
    <div>
      <SetPostContext.Provider value={setPost}>
        <PostContext.Provider value={post}>
          <Post></Post>
        </PostContext.Provider>
      </SetPostContext.Provider>
    </div>
  );
}
```

그리고 이렇게 전달한 함수는 `Consumer` 컴포넌트를 통해 받아서 데이터를 수정하면 된다.
`App` 컴포넌트에서 전달한 `setPost` 함수를 사용해서, 버튼을 클릭 시 `post`의 데이터를 변경한다.
이렇게 변경된 데이터는 화면에서 바뀌어 출력되는 것을 볼 수 있다.

```javascript
function PostContent() {
  return (
    <div>
      <SetPostContext.Consumer>
        {(setPost) => (
          <PostContext.Consumer>
            {({ idx, content }) => (
              <div>
                <p>{idx} {content}</p>
                <button
                  onClick={() =>
                    setPost({
                      title: "제목",
                      content: "본문",
                      idx: idx + 1,
                    })
                  }
                >
                  변경 버튼
                </button>
              </div>
            )}
          </PostContext.Consumer>
        )}
      </SetPostContext.Consumer>
    </div>
  );
}
```

## 콘텍스트 API 주의 사항

콘텍스트 API를 사용할 경우, 컴포넌트 재사용이 어려워지니 최대한 사용을 자제해야 한다.

부모 컴포넌트와 자식 컴포넌트 간의 거리가 크게 멀지 않은 경우에는 `props`를 직접 전달하는 방식으로 코드를 작성하고, `props`를 전달하는 코드가 여러 번 반복될 경우에 콘텍스트 API를 사용하는 것을 권장한다.