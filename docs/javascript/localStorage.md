---
title: localStorage
date: 2018-04-13
---

## 들어가며

localStorage는 사용자의 브라우저에 데이터를 저장할 수 있는 방법 중 하나이다. 
sessionStorage와 사용법은 동일하다고 볼 수 있지만, 데이터의 만료시점이 없는 localStorage와 달리 sessionStorage는 페이지 세션이 종료되면 바로 사라진다.

## 데이터 추가

`setItem` 메소드를 통해, 데이터를 저장할 수 있다.
`key`와 `value` 두 개의 인자를 받으며, `key`는 고유한 값을 넣고 `value`에는 저장할 데이터를 넣으면 된다.

```javascript
// key 고유한 값
// value 저장할 데이터
localStorage.setItem(key, value);
```

다음과 같이 동일한 `key` 값으로 `setItem` 메소드를 호출한 경우, 나중에 호출된 `value` 값으로 저장된다.

```javascript
localStorage.setItem('name', 'user1');
localStorage.setItem('name', 'user2'); // user2가 저장 
```

`value`에는 숫자와 문자만 입력 가능하며, 배열/객체 등을 넘기는 경우 자동으로 변환되어 들어간다.

```javascript
localStorage.setItem('user', {}); // [object Object]
localStorage.setItem('user', [1, 2, 3]); // "1, 2, 3"
localStorage.setItem('user', true); // "true"
localStorage.setItem('user', null); // "null"
localStorage.setItem('user', undefined); // "undefined"
```

## 데이터 삭제

`removeItem` 메소드를 통해, 데이터들을 삭제할 수 있다.
localStorage에 데이터를 추가할 때 사용했던 `key` 값을 인자로 받는다.

```javascript
localStorage.removeItem(key);
```

## 데이터 가지고 오기

`getItem` 메소드를 통해, 데이터들을 가지고 올 수 있다.
localStorage에 데이터를 추가할 때 사용했던 `key` 값을 인자로 받는다. 
`key`에 해당하는 데이터가 없는 경우에는 `null`을 반환한다.

```javascript
localStorage.getItem(key);
```

## key값 가지고 오기

`key` 메소드를 통해, index번 데이터의 키를 가지고 올 수 있다.

```javascript
localStorage.key(index);
```

for문과 함께 응용하면 다음과 같이 사용할 수 있다.

```javascript
for (let i = 0; i < localStorage.length; i++) {
  localStorage.key(i); // 키 값
}
```

## 데이터 비우기

`clear` 메소드를 사용하여, 추가한 데이터들을 전부 삭제할 수 있다.

```javascript
localStorage.clear();
```