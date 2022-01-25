---
title: 제너레이터
date: 2022-01-24
---

## 들어가며

이터러블 객체를 만들기 위해서는 `Symbol.iterator` 메소드를 가져야 한다. 
내장 이터러블이 아닌 경우, 이터레이션 프로토콜을 준수하여 이터러블을 구현하는 것은 여간 어려운 일이 아니다.

제너레이터 함수를 사용하면 상태 관리와 스코프에 대한 걱정 없이 간편하게 이터러블을 구현할 수 있다.

## 제너레이터 필요성

제너레이터는 동시성 프로그래밍을 가능하게 한다는 가장 큰 장점을 가진다.

일반적으로 자바스크립트에서는 함수가 실행되면 함수가 종료될 때까지 다른 코드의 실행은 불가능하다.
한 번 함수가 실행되면 에러가 발생하지 않는 이상은 함수가 종료될 때까지 코드가 실행된다고 볼 수 있다.
즉 함수를 호출하면 종료 전까지 제어할 수 있는 방법은 없다.

그러나 ES6부터는 제너레이터의 등장으로 함수가 종료되지 않아도 다른 코드를 실행할 수 있게 되었다.
특이하게도 제너레이터 함수는 임의로 멈추는 시점을 정해서 여러 번 나누어 실행할 수 있으며, 끝까지 함수를 실행할 필요가 없다.

ES6 이전 코드와 제너레이터의 비교를 통해 쉽게 이해해보자.
먼저 제너레이터를 사용하지 않고 작성한 코드를 알아보자.

```javascript
function exampleA() {
  console.log("exampleA 함수 시작");
  
  console.log("exampleA 함수 종료");
}

function exampleB() {
  console.log("exampleB 함수 호출");
}

exampleA();
// exampleA 함수 시작
// exampleA 함수 종료
exampleB();
// exampleB 함수 호출

// 위와 같이 함수를 호출했을 때, 아래와 같은 값을 얻을 수는 없다.
console.log("exampleA 함수 시작");
console.log("exampleB 함수 호출");
console.log("exampleA 함수 종료");
```

`exampleA` 함수에서는 함수의 시작과 종료를 콘솔로 출력하는데, 시작과 종료 사이에서는 함수 내부에서 다른 함수를 호출하는 것을 제외하고는 다른 함수의 개입은 불가능하다.
`exampleA` 함수의 종료 콘솔이 출력된 이후에 다른 함수의 호출이 가능하다는 뜻이다.

반면에 제너레이터 함수에서는 함수를 특정 시점에 멈출 수 있으며, 다른 함수를 호출할 수 있다.
제너레이터를 사용하면 다음과 같은 작업이 가능하다.

```javascript
function* exampleA() {
  console.log("exampleA 함수 시작");
  yield;

  console.log("exampleA 함수 종료");
  yield;
}

function exampleB() {
  console.log("exampleB 함수 호출");
}

const exampleIteratorA = exampleA();

exampleIteratorA.next(); // exampleA 함수 시작
exampleB(); // exampleB 함수 호출
exampleIteratorA.next(); // exampleA 함수 종료
```

물론 제너레이터가 함수를 멈추고 다른 함수를 호출할 수 있어서 좋은 것 같지만 어디서 사용하는지에 대한 의문이 들 수 있다.
대표적인 예로, 제너레이터는 React 프로그래밍을 할 때, API같은 비동기 처리를 위한 `redux-saga` 라이브러리에서 사용한다.

다음과 같이 `redux-saga`를 사용하기 위해서는 제너레이터에 대한 이해가 필요하다.

```javascript
function* fetchUsers() {
  while (true) {
    yield take(...);
    yield put(...);
    yield call(...);
    yield put(...);
  }
}
```

## 제너레이터 사용법

### 제너레이터 함수 만들기

제너레이터 함수를 만드는 방법은 간단하다.
일반 함수 `function` 키워드 혹은 함수 이름 앞에 `*`를 붙이면 제너레이터 함수가 된다.

다음과 같이 제너레이터 함수를 만들 수 있다.

```javascript
function* exampleGenerator() { ... }
function *exampleGenerator() { ... }
```

### 제너레이터 함수 사용하기

제너레이터 함수는 다른 함수와 호출 방법이 다르다.
예를 들어, 다음과 같이 넘긴 인자의 값을 더하는 `sum`이라는 함수가 있다고 가정해보자.

```javascript
function* sum(a, b) {
  return a + b;
}

console.log(sum(2, 8));
```

일반적인 함수라면 `sum(2,8)`을 호출하면 10이 반환될텐데, `sum {<suspended>}`라는 객체가 반환되는 것을 볼 수 있다.
제너레이터 함수를 사용하기 위해서는 이터레이터 객체를 만들고, next 메소드를 사용해야 값을 반환 받을 수 있다.

```javascript
function* sum(a, b) {
  return a + b;
}

const iterator = sum(2, 8);

console.log(iterator.next()); // {value: 10, done: true}
```

이터레이터 객체를 만드는 방법은 제너레이터 함수를 호출하고 변수/상수에 할당하면 된다.
next 메소드를 호출하면 현재 위치에서 다음 `yield`까지 실행하는데, `yield`가 없다면 함수가 종료될 때까지 실행한다.

### yield 사용하기

`yield`란 제너레이터에서 사용할 수 있는 키워드로 함수의 중간 반환 지점을 설정하는 역할을 한다.
함수를 일부만 실행하고, 다른 작업을 할 수 있도록 도와준다고 생각하면 된다.

다음은 제너레이터 함수에서 `yield`를 사용한 예제다.

```javascript
function* print() {
  console.log("print 함수 1번");
  yield;
  console.log("print 함수 2번");
  yield;
  console.log("print 함수 3번");
}

const iterator = print();
iterator.next(); // console.log("print 함수 1번") 실행
iterator.next(); // console.log("print 함수 2번") 실행
iterator.next(); // console.log("print 함수 3번") 실행
```

next 메소드를 호출하면 `yield`가 있는 공간까지만 실행되는 것을 알 수 있다.

### yield를 통해 값 반환하기

위 예제를 보면 함수의 코드 자체는 실행되더라도 반환되는 값은 `undefined`로 나오는 걸 볼 수 있다.
`undefined`가 아닌 값을 받기 위해서는 아래 예제처럼 `yield` 뒤에 반환될 값을 설정해줘야 한다.
반환될 값은 따로 제약이 없으며, 자유롭게 Object, Array, String, Number 등을 반환할 수 있다.

```javascript
function* print() {
  console.log("print 함수 1번");
  yield "1번";
  console.log("print 함수 2번");
  yield "2번";
  console.log("print 함수 3번");
  return "3번";
}

const iterator = print();
iterator.next(); // {value: "1번", done: false}
iterator.next(); // {value: "2번", done: false}
iterator.next(); // {value: "3번", done: true}
```

마지막 next 메소드에서는 `yield`를 생략하고 `return`을 통해 값을 반환할 수 있다.
제너레이터 함수가 종료될 때, `return` 문이 없는 경우에는 `return`문이 있다고 가정하고 `undefined`를 반환한다.

### yield에 값 넘기기

이터레이터 객체는 next 메소드를 통해 제너레이터 함수와 양방향 통신이 가능하다.
next 메소드에 인자를 넘기면 `yield` 문에서 받을 수 있으며, 사용할 수 있다.

```javascript
function* sum(one) {
  const two = one + (yield one);
  const three = two + (yield two);
  return three;
}

const iterator = sum(10); // 초기값 설정
iterator.next(); 
// 처음에는 아무 것도 넘기지 않는다.
// {value: 10, done: false}
iterator.next(20);
// yield에게 20을 넘기면 초기 값 10과 더한 값을 반환한다.
// {value: 30, done: false}

iterator.next(100);
// 이전에 연산 된 30에 100을 더한 값을 반환한다.
// {value: 130, done: true}
```

최초 next 메소드를 호출할 때는 아무런 데이터를 넘기지 않았는데, 그 이유는 멈춰진 `yield`만 next 메소드를 통해서 값을 받을 수 있다.
즉 최초 next 메소드 호출 시에는 멈춰진 `yield`가 없기에 값을 받을 대상이 없다라고 보면 된다.
언제나 제너레이터 함수는 인자를 넘기지 않고 next 메소드로 시작한다고 보면 된다.