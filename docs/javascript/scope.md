---
title: 스코프
date: 2022-01-04
---

## 들어가며

스코프는 자바스크립트 뿐만 아니라 모든 프로그래밍 언어에서 사용되는 개념이다. 영어가 아닌 우리 말로는 "범위"라는 뜻을 가지고 있는데, 간단하게 변수에 접근할 수 있는 범위라고 보면 된다.

기존 자바스크립트에서는 전역 스코프(global scope)와 함수 스코프(function scope)라는 2가지의 타입이 있었는데, ES6에서 `const`와 `let`이 추가 된 이후로 블록 스코프(block scope)라는 개념이 새로 추가 되었다.

## 전역 스코프
위치의 제약을 받지 않고 어디에서나 접근 가능하다.

아래의 코드를 보면 `age`라는 변수가 어디에서나 접근 가능하며, 동일한 값이 출력되는 것을 볼 수 있다.

`age`와 `getAge`처럼 선언된 것을 전역 스코프라고 보면 된다.

```javascript
var age = 20;

function getAge() {
    console.log(age);
}

getAge(); // 20
console.log(age); // 20
```

## 함수 스코프
함수 내에서의 범위이며 자신과 하위 범위 내에서만 접근 가능하다.

전역으로 선언된 `age` 변수가 `getAge` 함수 안에서 새롭게 덮어 씌어지는 것을 볼 수 있다.

이런 경우 `getAge` 안에서 호출한 `age`는 새롭게 선언된 값인 40을 출력하고, 전역에서 호출한 `age`는 기존에 선언된 값 그대로 20을 출력한다.

```javascript
var age = 20;

function getAge() {
    var age = 40;
    console.log(age);
}

getAge(); // 40
console.log(age); // 20
```

## 블록 스코프
ES6에서는 `var`가 가진 문제점을 해결하기 위해 `let`과 `const`라는 개념이 추가 되었다. 

`var`를 사용할 경우에는 코드 블록 (if, for, while, try/catch 등) 안에서 작성되는 변수들이 범위 밖에서도 호출 가능한 문제가 존재했다. 

`let`과 `const`를 사용할 경우에는 이러한 문제들을 방지할 수 있다.

```javascript
if (true) {
    var age = 20;
    let year = 2020;
}

console.log(age); // 20
console.log(year); // 참조 에러
```