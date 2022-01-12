---
title: Promise
date: 2022-01-12
---

## 들어가며

`Javascript`를 사용하다 보면 `setTimeout`, `ajax`등의 비동기 처리를 해야 하는 상황이 생긴다.
주로 callback 방식으로 작성하다보니, 여러 개의 비동기 함수를 호출할 때 callback을 반복적으로 사용하게 되면 아래와 같은 코드로 만들어야 하는 경우가 있다.

```javascript
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {

    });
  });
});

getUsers(function() {
  getPosts(function() {
    getComments(function() {

    });
  });
});
```

이렇게 callback이 반복될 경우, 코드의 가독성은 떨어지고 유지보수가 어려워진다. 
이런 비동기 함수를 보다 효과적으로 처리하기 위해서 `Promise` 객체를 사용해야 한다.

## Promise 알아보기

`Promise`는 비동기 함수를 처리하기 위해 나온 ES6 문법이다.
함수의 연산을 직접 처리하는 역할은 하지 않고, 함수 실행에 대한 결과/실패를 처리하기 위한 객체라고 보면 된다.

아래 예시처럼 `new` 연산자를 통해 `Promise`를 생성해서 사용하고, `Promise`를 생성할 때 넘기는 인자 값은 `resolve`와 `reject`를 사용할 수 있도록 함수로 넘겨야 한다.

```javascript
// 할당 방식 (즉시 실행된다)
const examplePromise = new Promise((resolve, reject) => {
  ...
});

// Promise 반환 방식 (호출 시 실행된다)
function getUsers() {
  return new Promise((resolve, reject) => {
    ...
  });
}
```
이렇게 전달한 함수는 즉시 실행이 되며 `Promise` 메소드를 통해 처리할 수 있다. 

#### resolve & reject란?
`resolve`와 `reject`는 값을 반환할 때 사용하는 함수로 `Promise` 생성 시 넘기는 함수에서 사용할 수 있다.

- resolve: 작업 성공 시 호출한다.
- reject: 작업 실패 시 호출한다.

## Promise 상태

`Promise`는 대기, 이행, 거부의 상태로 구분 된다.

- 대기 (pending): 

초기 상태를 의미하며, `resolve`와 `reject`가 호출되지 않은 상태다.

- 이행 (fulfilled): 

성공적으로 함수의 작업이 완료된 것을 의미하며, `Promise`의 첫 번째 함수 `resolve`를 호출한 상태다.
`API`를 호출하고 데이터를 정상적으로 가지고 온 상태라고 볼 수 있다.

- 거부 (rejected): 

함수의 작업이 실패한 상태이며, `Promise`의 두 번째 함수를 `reject`를 호출한 상태다.
`API`를 호출했지만 데이터를 모종의 이유로 성공적으로 가지고 오지 못 한 상태라고 볼 수 있다.

## Promise 처리 - 인스턴스 메소드

`resolve`와 `reject`를 호출해서 반환한 값들을 어떻게 처리하는지 알아보자.

#### then 메소드

`Promise` 내부에 있는 로직이 정상적으로 완료되었을 때 호출하며, `then` 메소드를 사용해서 `resolve`로 반환한 값을 받을 수 있다.

```javascript
const examplePromise = new Promise((resolve, reject) => {
  resolve("success");
});

examplePromise.then(res => {
  console.log(res) // success 콘솔 출력
});
```

#### catch 메소드

`Promise` 내부에 있는 로직이 실패했을 때 호출하며, `catch` 메소드를 사용해서 `reject`로 반환한 값을 받을 수 있다.

```javascript
const examplePromise = new Promise((resolve, reject) => {
  reject("error");
});

examplePromise.catch(err => {
  console.log(err) // error 콘솔 출력
});
```

#### finally 메소드

`resolve`와 `reject`의 여부 관계없이 둘 중 어떠한 함수라도 호출 될 경우, 항상 `finally` 메소드는 호출된다.

```javascript
const examplePromise = new Promise((resolve, reject) => {
  resolve("success");
  reject("error");
});

examplePromise.finally(() => {
  console.log("finally 메소드")
});
```