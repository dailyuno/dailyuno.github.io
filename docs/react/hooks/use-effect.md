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

아래와 같이 두 번째 인자에 빈 배열을 넣을 경우, 컴포넌트가 마운트 될 때 한 번만 실행된다.

```javascript
useEffect(() => {
    console.log('created');
}, []);
```

### comonentDidUpdate
컴포넌트가 호출되어 다시 렌더링 될 때를 의미하며, 변경된 값들이 반영되고 난 이후를 의미한다.

두 번째 인자에 아무런 값을 넣지 않을 경우에 실행되는데, `componentDidMount`의 역할도 하게 된다.

```javascript
useEffect(() => {
    console.log('updated')
});
```

아래의 코드처럼 배열에 변수를 넣을 경우, 변수가 변경될 때만 실행 된다.
여러개의 변수를 넣을 수 있으며, 여전히 `componentDidMount`의 역할도 같이 한다고 보면 된다.

```javascript
useEffect(() => {
    console.log(`updated ${name}`)
}, [name]);
```

### componentWillUnmount
컴포넌트가 화면에서 사라지는 것을 의미하며, 주로 페이지가 바뀌거나 조건문을 통해 컴포넌트가 안 보이게 될 때에서 발생한다.

두 번째 인자에 빈 배열을 넣을 경우, 렌더링이 끝날 때 실행된다.

```javascript
useEffect(() => {
    return () => {
        console.log('unmount');
    };
}, []);
```