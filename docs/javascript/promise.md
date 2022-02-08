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

## Promise 처리 - 정적 메소드

`Promise` 인스턴스 메소드를 통해서 처리하는 방법을 설명했다. 
다만 여러 개의 `Promise` 객체를 다루기 위해서는 정적 메소드와 인스턴스 메소드를 함께 사용해서 처리해야 한다. 

`Promise`의 정적 메소드의 종류와 사용법을 알기 위해, `timer`라는 함수를 만들었다. 
원하는 시간을 인자로 넘길 경우, 해당 시간이 지난 이후에 호출 되는 함수로 아래 예제들에서 사용할 예정이다.

```javascript
function timer(time) {
  return new Promise((resolve, reject) => {
    if (time === 0) {
      reject(time);
    }

    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
```

### Promise.all

`Promise.all`은 배열에 있는 모든 함수가 성공적으로 완료되거나, 한 개의 함수가 실패할 때까지 대기한다.

성공적으로 완료했을 경우, `resolve`를 통해 반환된 값을 인자로 넘긴 배열 순서에 맞게 반환한다.

```javascript
Promise.all([timer(2000), timer(1000), timer(1500)])
  .then((res) => {
    console.log(res); // [2000, 1000, 1500]이 넘어온다.
  })
  .catch((err) => {
    console.log(err); // 작동하지 않는다.
  });
```

`timer` 함수는 0을 인자로 넘길 경우, `reject`를 호출하도록 설계 되어 있어서, 이 경우에는 `catch` 함수 안에서 0이 출력된다.

```javascript
Promise.all([timer(1000), timer(1500), timer(0)])
  .then((res) => {
    console.log(res); // 오류가 발생해서 작동하지 않는다.
  })
  .catch((err) => {
    console.log(err); // 0 출력
  });
```

### Promise.allSettled

`Promise.allSettled`는 배열에 있는 모든 함수가 처리 될 때까지 대기한다.

각각의 `Promise` 상태와 반환 값을 모아놓은 배열로 반환되는데, `then`을 통해서만 받을 수 있다.

```javascript
Promise.allSettled([timer(2000), timer(1000), timer(1500)])
  .then((res) => {
    console.log(res);
    /* 각각의 함수 상태와 반환 값이 넘어온다.
      [
        { status: "fulfilled", value: 2000 },
        { status: "fulfilled", value: 1000 },
        { status: "fulfilled", value: 1500 },
      ];
    */
  })
  .catch((err) => {
    console.log(err); // 작동하지 않는다.
  });
```

아래와 같이 `reject` 함수가 호출된 경우에도 `catch`를 통해서 받지 않는다. 
특이한 점은 `resolve` 함수로 반환 된 값은 `value`를 통해 넘어오며, `reject` 함수로 반환 된 값은 `reason`을 통해 넘어온다.

```javascript
Promise.allSettled([timer(1000), timer(1500), timer(0)])
  .then((res) => {
    console.log(res);
    /* 각각의 함수 상태와 반환 값이 넘어온다.
      [
        { status: "fulfilled", value: 1000 },
        { status: "fulfilled", value: 1500 },
        { status: "rejected", reason: 0 },
      ];
    */
  })
  .catch((err) => {
    console.log(err); // 작동하지 않는다.
  });
```

### Promise.any

`Promise.any`는 이행한 `Promise` 처리를 위한 함수로, 배열에 있는 함수 중 하나라도 이행하면 실행된다.

다른 예제와 동일하게 3개의 함수를 넘겼는데, `timer(1000)`이 먼저 완료해서, `then`에서 1000 값을 받게 된다. 만약 `timer(1000)`보다 더 빠르게 이행되는 함수가 있으면 해당 함수의 반환 값을 받게 된다.

```javascript
Promise.any([timer(2000), timer(1000), timer(1500)])
  .then((res) => {
    console.log(res); // 1000
  })
  .catch((err) => {
    console.log(err); // 작동하지 않는다.
  });
```

`timer(0)`이 먼저 완료 되었지만 거부 된 함수로 무시되고, 그 다음으로 먼저 이행 된 `timer(1000)`의 값을 받게 된다.

```javascript
Promise.any([timer(1000), timer(1500), timer(0)])
  .then((res) => {
    console.log(res); // 1000
  })
  .catch((err) => {
    console.log(err); // 작동하지 않는다.
  });
```

그렇다면 `Promise.any` 배열 안에 있는 모든 함수가 실패할 경우는 어떻게 될까? 

모든 함수가 `reject` 함수를 호출하도록 `timer(0)`으로만 배열을 채워서, 실행하자 `catch` 함수가 호출되며, 모든 `Promise`가 `reject` 되었다는 메시지를 받는다.

```javascript
Promise.any([timer(0), timer(0), timer(0)])
  .then((res) => {
    console.log(res); // 작동하지 않는다.
  })
  .catch((err) => {
    console.log(err); // AggregateError: All promises were rejected
  });
```

### Promise.race

`Promise.race`는 배열에 있는 함수들 중 하나라도 처리되면 실행된다.

아래의 경우, 모든 함수가 성공적으로 이행돼서 `Promise.any`와 동일하게 먼저 이행된 `timer(1000)`의 값을 `then`을 통해 받게 된다.

```javascript
Promise.race([timer(2000), timer(1000), timer(1500)])
  .then((res) => {
    console.log(res); // 1000
  })
  .catch((err) => {
    console.log(err); // 작동하지 않는다.
  });
```

`timer(0)` 함수가 실행되면서 다른 함수들보다 먼저 처리하는 `reject`를 호출해서 0의 값을 받게 된다.
`reject`로 반환 된 값은 `catch`를 통해 받을 수 있다.

```javascript
Promise.race([timer(1000), timer(1500), timer(0)])
  .then((res) => {
    console.log(res); // 작동하지 않는다.
  })
  .catch((err) => {
    console.log(err); // 0
  });
```

그렇다면 여기서 궁금한 점이 생기는데, `resolve`와 `reject`를 즉시 호출하는 함수를 각각 만들고, `Promise.race` 배열에 넣으면 어떻게 될까?

어찌된 영문인지는 모르겠으나, 즉시 실행해서인지 `then`과 `catch` 어떠한 곳에서도 값이 출력되지 않는 것을 확인할 수 있다.

```javascript
function resolveTimer() {
  return new Promise((resolve, reject) => {
    resolve("resolve timer");
  });
}

function rejectTimer() {
  return new Promise((resolve, reject) => {
    reject("reject timer");
  });
}

Promise.race([resolveTimer(), rejectTimer()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

즉시 실행되는게 문제일 수도 있어서, `setTimeout` 함수를 통해 동일한 시간을 설정해보았다.

```javascript
function resolveTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve timer");
    }, 1000);
  });
}

function rejectTimer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("reject timer");
    }, 1000);
  });
}

Promise.race([resolveTimer(), rejectTimer()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

`resolveTimer`의 값이 반환 되는 걸 알 수 있는데, 혹시 배열의 순서의 차이가 실행 시점을 다르게 만들 수도 있어서 순서를 변경했다.

```javascript
Promise.race([rejectTimer(), resolveTimer()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

배열 순서를 변경하니, `rejectTimer`의 값이 반환 되는 걸 알 수 있다. 
실제 `Promise.race` 사용 시, 이런 일이 발생할 일은 없겠지만 동시에 함수가 호출 될 수도 있으니, 우선 순위가 높은 함수를 배열의 앞에 위치하는게 좋을 것 같다.