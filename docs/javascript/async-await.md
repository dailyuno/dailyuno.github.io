---
title: Async & Await
date: 2022-01-13
---

## 들어가며

`Promise`를 사용해서 반복적인 callback 함수에서 벗어났지만 여전히 고질적인 문제가 발생한다.
`Promise`도 결과적으로는 `then`, `catch`, `finally`를 사용하면서 callback이 최소 1회는 사용된다는 점이다.

함수를 분리하고 최대한 작성을 잘 하더라도, 아래와 같은 코드가 작성되는 경우가 생길 수 있다.
물론 동시에 호출하는 경우에는 `Promise.all`을 사용할 수 있겠지만 호출한 값을 사용해서 또 함수를 호출해야 하는 상황이 발생한다면 어쩔 수 없다.

```javascript
/* 코드1 */
getUser().then((user) => {
  getPosts(user.id).then((posts) => {
      ...
  });
});

/* 코드2 */
getUser()
  .then((user) => {
    return getPosts(user);
  })
  .then((posts) => {
    console.log(posts);
  });
```

비동기 함수를 동기 함수로 사용하기 위해서, ES7에서 `async`와 `await`이 나오게 된다.
`async`와 `await`은 쉽고 간단하게 사용할 수 있다.

## async & await 시작하기

`async`는 함수를 선언할 때 `function` 앞에 사용하는데, 비동기 함수라고 표시한다고 보면 된다.
`async` 키워드가 붙은 함수의 `__proto__`를 확인해보면 `AsyncFunction`이라는 객체라는 것을 알 수 있다.

```javascript
async function example() {
    ...
}

const example = async () => {
    ...
};
```

`await`은 `async` 함수 내부에서만 사용할 수 있으며, `Promise`가 처리될 때까지 이후의 작업을 멈춰주는 역할을 한다. `resolve`를 통해 반환한 값을 사용할 수 있다.

```javascript
function timer(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(time);
      res();
    }, time);
  });
}

/* 기존 방식 */
function example1() {
  timer(1000);
  console.log("done");
}

/* async & await 방식 */
async function example2() {
  await timer(1000);
  console.log("done");
}
```

기존 방식은 done이라는 메시지가 콘솔에 출력된 이후에 비동기 함수 `timer`에 넘긴 값이 콘솔에 출력되는 구조였다.
하지만 `async`와 `await`을 사용하게 되면 비동기 함수 `timer`가 완료될 때까지 이후의 작업은 중지되며, 작업이 완료되면 `console.log("done")`가 실행된다.

직접 `example1`과 `example2` 함수를 사용해서, 어떻게 작동하는지 확인해보자.

## async & await 활용하기

실제 데이터를 가지고 온다고 가정하고, `async`와 `await`을 활용해서 어떻게 코드를 작성하는지 알아보자.
유저와 게시물 정보를 가지고 오는 API가 마땅히 없기 때문에 `setTimeout`을 활용해서, API를 호출한 것처럼 비동기 함수를 만들었다.

```javascript
function getUser() {
  const user = {
    id: "user1",
    name: "유저1",
    email: "user1@gmail.com",
    age: 20,
  };

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(user);
    }, 100);
  });
}

function getPosts(user_id) {
  const posts = [
    {user_id: "user1", name: "게시물1", content: "본문1"},
    {user_id: "user1", name: "게시물2", content: "본문2"},
  ];

  return new Promise((res, rej) => {
    setTimeout(() => {
      res(posts);
    }, 100);
  });
}
```

`getUser`는 사용자의 정보를 가지고 오는 함수고, `getPosts`는 사용자가 작성한 게시물을 가지고 오는 함수다.
실제 DB에서 가지고 오는 데이터는 아니다보니, `getPosts`에서 `user_id`를 받고 있지만 사용하지 않도록 설계했다.

이제 `async`와 `await`을 사용해서, 사용자와 게시물 정보를 가지고 올텐데, 앞서 설명했던 것처럼 간단하게 가지고 올 수 있다.

```javascript
async function init() {
  const user = await getUser();
  const posts = await getPosts(user.id);
}
```

기존 callback, `Promise` 방식과 비교해보면 `async`와 `await`을 사용하면 가독성과 유지보수 측면에서 좋다는 사실을 알 수 있다.

## async & await 주의점

마냥 좋을 것만 같은 `async`와  `await`에도 주의해야 하는 점들이 존재한다.
위 예제들은 이해를 돕기 위해 만든 함수를 사용하다보니, `reject`가 발생한다던지 반복문 사용이라던지 여러가지 상황이 발생하지 않았는데, 아래 예제들을 통해 주의해야하는 사항들을 알아보자.

### 에러 처리

실제 API 혹은 일부 함수를 사용하다 보면 예기치 못하게 오류가 발생할 수 있는데, `async`와 `await`만 가지고는 에러를 제어할 수 없다.

다음은 에러를 제어하는 예제로 기존 `init` 코드에서 크게 달라지는 것은 없다.
코드를 작성할 때, 에러가 생길 수 있는 상황을 고려해서 작성하길 권장한다.

```javascript
async function init() {
  try {
    const user = await getUser(true);
    const posts = await getPosts(user.id);
  } catch (e) {
    ...
  }
}
```

### 배열 처리

예를 들어, 화면에 이미지 여러 개를 드래그 & 드랍하고 그 이미지들을 화면에 보여줘야 하는 프로그램을 만들어야 한다고 생각해보자. 
드래그 & 드랍을 다루는 페이지는 아니다 보니, 해당 코드에 대한 내용은 생략한다.

이렇게 드래그 & 드랍을 통해, 이미지를 배열로 저장했다고 가정하고, 이미지를 로드하는 함수를 `Promise`로 만들어보자.
대부분 `loadImage`와 비슷한 형식의 함수를 작성했을텐데, 여기까지는 크게 주의할 점은 없다.

```javascript
/* 이미지 src에 사용할 주소 배열 */
const images = [
  ...
];

/* 이미지를 로드하는 함수 */
async function loadImage(source) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.src = source;
    img.onload = () => res(img);
    img.onerror = (err) => rej(err);
  });
}
```

우리는 배열을 `forEach`로 반복하면서, `loadImage`를 호출하고 다 완료될 경우, Done이라는 텍스트를 가진 `div`를 화면에 추가하고자 한다.

하지만 아래 코드를 실행할 경우, 어찌된 영문인지 모르겠지만 Done 텍스트가 화면 최상단에 보이고, 그 이후로 이미지가 보이는 것을 확인할 수 있다.

```javascript
async function init() {
  try {
    images.forEach(async (source) => {
      const img = await loadImage(source);
      document.body.appendChild(img);
    });

    const text = document.createElement("div");
    text.innerText = "Done";
    document.body.appendChild(text);
  } catch (e) {
    console.log(e);
  }
}
```

우리가 생각한 것과 다르게 작동한 이유는 `forEach`함수는 `async`와 `await`을 사용하더라도 처리를 기다려주지 않아서 생긴 문제다.
그럼 우리가 선택할 수 있는 다른 방안은 두 개로 볼 수 있다. 

#### 1. for문 사용

`for`문을 사용할 경우, 순차적으로 `loadImage` 함수가 실행되면서 원하는 화면을 볼 수 있다.
하지만 병렬로 처리되지 않아서, 용량이 큰 이미지가 존재하면 시간이 오래 걸리 수 있다.

```javascript
async function init() {
  try {
    for (let i = 0; i < images.length; i++) {
      const img = await loadImage(images[i]);
      document.body.appendChild(img);
    }

    const text = document.createElement("div");
    text.innerText = "Done";
    document.body.appendChild(text);
  } catch (e) {
    console.log(e);
  }
}
```

#### 2. Promise.all 사용

`Promise.all`는 비동기 함수들을 병렬로 처리 가능해서, `for`문을 사용했을 때의 문제점을 어느정도 보완할 수 있다.
순차적으로 호출이 필요한 `API` 같은 경우를 제외하고는 `Promise.all`을 사용해서, 병렬로 처리하는게 좋다고 본다.

```javascript
async function init() {
  try {
    const loadImages = await Promise.all(
      images.map((source) => loadImage(source))
    );

    loadImages.forEach((img) => {
      document.body.appendChild(img);
    });

    const text = document.createElement("div");
    text.innerText = "Done";
    document.body.appendChild(text);
  } catch (e) {
    console.log(e);
  }
}
```

### 키워드를 사용하지 않는 부모 함수

예를 들어, `example` 함수를 또 다른 함수인 `init` 내부에서 사용할 때 `await` 키워드를 사용하지 않은 경우, `example` 함수의 내부 로직은 동기로 작동하더라도 `init` 함수의 내부는 동기로 작동하지 않는다.

```javascript
function timer(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}

async function example() {
  console.log("example start");
  const result = await timer(1000);
  console.log(result);
  console.log("example end");
}

function init() {
  console.log("init start");
  example();
  console.log("init end");
}
```

실제로 `init` 함수를 실행해보면 `example` 함수의 처리를 기다리지 않고, 콘솔이 출력되는 것을 볼 수 있다.

`init` 함수가 동기로 작동하기 위해서는 `example` 함수에 `await`을 추가해야 한다. 아래 코드를 실행해보면 `example` 함수가 처리될 때까지 기다리고, 그 이후에 `"init end"` 콘솔이 출력된다.

```javascript
function timer(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
}

async function example() {
  console.log("example start");
  const result = await timer(1000);
  console.log(result);
  console.log("example end");
}

async function init() {
  console.log("init start");
  await example();
  console.log("init end");
}
```

항상 `async`와 `await`을 사용할 때는 예상치 못 한 오류가 발생하지 않도록 주의하며 코드를 작성하길 바란다.