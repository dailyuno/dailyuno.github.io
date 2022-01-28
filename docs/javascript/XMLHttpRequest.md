---
title: XMLHTTPRequest
date: 2022-01-28
---

## 들어가며

ES6 이전에는 API를 요청하거나, 다른 도메인의 데이터를 읽어들이기 위해, `XMLHttpRequest` (XHR)를 사용했다.
여기서 `XMLHttpRequest`는 서버와 비동기 통신을 하기 위해 필요한 객체이며, 데이터를 주고 받을 수 있다.

그럼 `XMLHttpRequest`는 왜 필요했을까?

예를 들어, 우리가 유튜브에서 영상을 본다고 가정해보자. 스크롤을 하단으로 내리면 짧게 로딩되는 애니메이션이 보이며, 동영상이 추가로 생겨나는 것을 볼 수 있다.

그렇다면 동영상을 더 보기위해서는 매번 페이지 이동 혹은 새로고침이 필요하다면 어떨까? 
사용자 입장에서는 답답함을 느끼고, 다른 플랫폼을 이용할지도 모른다.

이렇게 페이지의 새로고침이나 이동 없이도, 데이터를 불러와 화면을 변경하기 위해서 필요하다고 보면 된다.

## XHR 이해하기

그럼 `XMLHttpRequest`는 어떻게 사용할까?
크게 다음과 같은 작업으로 나눌 수 있다.

#### 1. XMLHttpRequest 객체 생성

다음과 같이 객체를 생성할 수 있으며, 객체 생성 시 인자는 넘기지 않는다.

```javascript
const req = new XMLHttpRequest();
```

#### 2. open 메소드

`open` 메소드를 통해, 서버로 보낼 요청의 형식을 지정할 수 있으며, 다음과 같은 구조를 가진다.

```javascript
req.open(method, url, async?);
```

`method`는 전달 방식 선택을 위한 인자이며, GET 방식과 POST 방식 둘 중 하나를 선택할 수 있다.
`url`은 요청할 서버의 주소를 넘기면 된다.
`async`를 통해 요청 전달 방식을 비동기와 동기로 선택할 수 있으며, 기본 값은 비동기로 `true`를 가진다.

#### 3. send 메소드

`send` 메소드를 사용해, 작성된 요청을 서버로 전달할 수 있으며 다음과 같은 구조를 가진다.

```javascript
req.send(body); // POST 방식
req.send(); // GET 방식
```

POST 방식과 GET 방식에 따라 `send` 메소드를 사용할 때 넘기는 인자가 달라진다.
GET 방식의 경우, 전달한 데이터가 없으므로 인자에 아무 것도 넘기지 않는다. 
POST 방식은 처리가 필요한 데이터를 넘기면 된다.

#### 4. 이벤트 등록

이렇게 객체 생성부터 `open`, `send` 메소드의 사용까지 끝마치면 성공적으로 요청이 완료되었는지 혹은 실패했는지 등에 대한 정보를 얻기 위해 이벤트 등록이 필요하다.
XHR에는 다양한 이벤트가 존재하며, 아래 XHR 이벤트 종류에서 다루겠다.

## XHR 이벤트 종류

XHR은 요청 시, 다음과 같은 이벤트들이 발생하며, 이벤트들을 통해 요청한 서버에서 반환한 데이터 혹은 에러를 얻을 수 있다.

### readystatechange

`XMLHttpRequest` 인스턴스의 `readyState` 값이 변경되었을 때 발생한다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("readystatechange", (e) => {
  // readyState에 따라 작업을 할 수 있다.
  if (req.readyState === 4) {
    ...
  }
});
```

`readyState`는 0부터 4까지 다섯 개의 값을 가진다.

상태|코드|설명
----|----|----|
UNSENT|0|XMLHttpRequest 객체가 생성 된 상태|
OPENED|1|open() 메소드가 호출된 상태|
HEADERS_RECEIVED|2|요청에 대한 응답이 도착한 상태
LOADING|3|요청한 데이터를 처리 중
DONE|4|요청한 데이터의 처리가 완료되었고, 응답 준비 완료인 상태

### abort 

요청이 취소 되었을 때 발생하며, 주로 XHR 요청 후 특정 시간이 지날 때 취소하여 이벤트가 발생하도록 한다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("abort", function (e) {
  ...
});

setTimeout(() => {
  req.abort();
}, 1000);
```

### error 

요청에 오류가 발생했을 때 발생하며, 오류 내용을 확인할 수 있다. 주로 존재하지 않은 주소에 XHR 요청했을 때 오류가 발생하며, 서버에서 200이 아닌 status 값을 반환하더라도 이벤트는 발생하지 않는다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("error", (e) => {
  ...
});
```

### load

요청이 완료했을 때 발생하며, 반환한 값을 사용할 수 있다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("load", function(e) {
  // 요청한 URL이 반환한 값
  console.log(req.responseType);
  console.log(req.response);
  console.log(req.responseText);
});
```

요청을 통해 받아온 데이터는 `response`와 `responseText` 두 개의 프로퍼티로 사용할 수 있는데, 상황에 맞게 사용하면 된다.

먼저 `response`는 `responseType`에 맞게 데이터 형식을 변경한 값인데, `ArrayBuffer`, `Blob`, `json`, `text` 등의 형식으로 설정할 수 있다.

사용 방법은 다음과 같다.

```javascript
const req = new XMLHttpRequest();

req.responseType = "json";

req.addEventListener("load", function(e) {
  console.log(req.response); // json 형태
});
```

`responseText`는 `responseType`을 사용하고 싶지 않을 때 사용하면 되고, `responseType`이 text일 때와 같은 값을 가진다.

### loadstart

요청을 한 이후에 데이터를 가지고 오기 시작할 때 발생한다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("loadstart", function (e) {
  ...
});
```

### loadend

요청이 완료된 시점인 `load`, `abort`, `error` 이벤트 이후에 발생한다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("loadend", function (e) {
  ...
});
```

### progress

요청을 하여 데이터를 수신할 때 주기적으로 발생되며, 가지고 오는 데이터의 진행률을 알려주기 위해 사용한다.

```javascript
const req = new XMLHttpRequest();

req.addEventListener("progress", function(e) {
  // e.total => 받아올 데이터 크기
  // e.loaded => 현재 받아온 데이터 크기
  console.log(e.loaded / e.total * 100) // 현재 진행률
});
```

### timeout

요청 후, 시간이 초과되었을 때 이벤트가 발생한다. 
`XMLHttpRequest.timeout` 기본 값은 0으로 별도로 설정하지 않을 경우, `timeout` 이벤트는 발생하지 않으며,
서버에서 설정된 `timeout`에 의해, `error` 이벤트가 발생한다고 보면 된다.

```javascript
const req = new XMLHttpRequest();

req.timeout = 1000; // 1초를 의미한다.

req.addEventListener("timeout", function(e) {
  // 요청 후, 1초가 넘을 때까지 응답이 없는 경우 발생된다.
  ...
});
```

## XHR 사용하기

### GET 방식 - 데이터 받아오기

단순히 데이터를 받아오기 위한 GET 방식의 요청은 비교적 간단하다. 객체를 생성하고, 요청 방식을 GET으로 설정한 이후에 요청하고자 하는 서버로 전달해서 데이터를 받아오면 된다.

```javascript
const req = new XMLHttpRequest();

req.responseType = "json"; // json으로 받아올 경우

req.addEventListener('load', e => {
  console.log(req.response);
});

req.open("GET", url);
req.send();
```

`responseType`는 상황에 맞게 변경하거나 따로 설정하지 않고 `responseText`를 사용해도 무방하다.
예제에서는 `load` 이벤트만 처리했는데, 필요하다면 `progress`, `loadstart`와 같은 이벤트도 코드를 추가하여 처리가 가능하다.

GET 방식으로 요청할 때, 데이터를 보내야 할 필요가 있는데, 쿼리스트링 방식으로 전달이 가능하다.

```javascript
req.open("GET", `https://api-example.com/user?name=user1`);
```

### 헤더 설정하기

POST 방식을 통해, 서버에 데이터를 전송하기 이전에 알아둬야 하는 것이 있다.
바로 HTTP 요청 헤더를 설정하는 방법이다.
헤더를 통해 데이터를 어떠한 형식으로 넘길 것인지, API Key값이나 사용자 정보 등 원하는 데이터를 서버로 넘길 수 있다.

`setRequestHeader` 메소드는 key, value 형식으로 인자를 넘겨서 사용할 수 있으며, 여러 번 사용이 가능하다.

```javascript
req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.setRequestHeader("Authorization", token);
```

### POST 방식 - 데이터 전송하기

POST 방식은 GET 방식과 거의 유사하지만 다른 점들이 존재한다.
서버에서 데이터를 받을 수 있도록 `send` 메소드에 인자를 넘겨야 하며, `setRequestHeader` 메소드의 추가 사용이 필요할 수도 있다.

```javascript
const req = new XMLHttpRequest();

req.setRequestHeader("Content-Type", "application/json");

req.addEventListener('load', e => {
  console.log(req.response);
});

const user = {
  name: "홍길동",
  age: 20
};

req.open("POST", url);
req.send(JSON.stringify(user));
```