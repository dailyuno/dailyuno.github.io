---
title: 타입 가드
date: 2022-02-22
---

## 타입 가드 (Type Guard)

타입 가드는 `if`와 `switch`문과 같은 조건부 블록을 통해 타입을 추론을 할 수 있도록 범위를 좁혀나가는 방법이라고 볼 수 있다.
트랜스파일링 작업 시, 타입을 추론할 수 있도록 코드를 작성하면 예기치 못 한 오류가 발생하는 것을 예방할 수 있게 된다.

타입스크립트에서는 함수/메소드에 들어올 매개변수를 유니온 타입을 통해 허용 타입을 설정할 수 있으며, 선택형 매개 변수로 만들 수 있다.
이 경우, 우리는 매개 변수에 어떠한 타입이 들어올지 모를 뿐만 아니라 선택형 매개 변수일 경우에는 들어오지 않는 상황을 고려해야 한다.

예를 들어, 다음과 같이 숫자에 콤마를 찍는 함수가 있다고 가정해보자.

```typescript
function comma(num: number | string) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

`num`은 숫자와 문자열 모두를 허용하는데, `replace`는 문자열에서 지원하는 메소드로 숫자는 `replace` 메소드를 찾을 수 없어서 에러가 발생한다.

즉 위와 같은 경우에는 타입 가드를 통해, 오류가 발생하지 않도록 범위를 좁혀야 한다.

## 타입 구분 (typeof)

타입스크립트는 자바스크립트와 마찬가지로 `typeof` 연산자를 통해, 어떠한 타입인지 확인할 수 있다.
다만 `typeof`는 호환을 위해서 자바스크립트에서 제공하는 타입만 반환한다.

```typescript
typeof operand
typeof(operand)
```

typeof 연산자를 사용하면 `string`, `number`, `bigint`, `boolean`, `symbol`, `undefined`, `object`, `function` 타입 중 하나로 반환된다.

```typescript
let username = "홍길동";
console.log(typeof username;) // string

let age = 20;
console.log(typeof age); // number

let safeInteger = BigInt(Number.MAX_SAFE_INTEGER);
console.log(typeof safeInteger); // bigint

let isChild = false;
console.log(typeof isChild); // boolean

let exampleSymbol = Symbol("example");
console.log(typeof exampleSymbol); // symbol

let user;
console.log(typeof user); // undefined

let token = null;
console.log(typeof token); // object

class Post {}
console.log(typeof Post); // function
```

예를 들어, 상품의 가격의 소수점을 두 자리로 표기하는 함수를 만든다고 가정해보자. 
매개 변수로 숫자와 문자열을 허용할 경우, 문자열은 `toFixed` 메소드를 사용하기 위해서 숫자로 변환해줘야 한다.

다음과 같이 `typeof`의 사용하여 함수를 만들 수 있다.

```typescript
function formatProductPrice(price: number | string) {
  // 타입이 문자열인지 확인한다.
  if (typeof price === "string") {
    return parseFloat(price).toFixed(2);
  }

  // price는 타입이 문자열 혹은 숫자인 경우만 존재하므로
  // 여기서 price의 타입은 숫자가 된다.
  return price.toFixed(2);
}
```

## 인스턴스 구분 (instanceof)

`instanceof` 연산자는 해당 객체의 인스턴스인지에 대한 여부를 확인하고 맞을 경우 `true`를 반환한다.

```typescript
objectName instanceof objectType
```

`objectName`은 객체와 비교할 대상으로 문자열, 숫자, 객체등 모든 타입이 올 수 있다.
`objectType`은 `Date`, `Set`, `Map`과 같은 객체 타입이 와야하며, 내장 객체 타입뿐만 아니라 `class`와 `function`을 통해 정의한 객체 타입도 올 수 있다.

```typescript
const items = new Set();
console.log(items instanceof Set); // true
```

예를 들어, 날짜가 유효한지 확인하는 함수를 만든다고 가정해보자.
매개 변수로 `Date` 객체, 문자열, 숫자를 허용할 경우, 타입에 따라 각각 유효한지 확인해야 한다.

다음과 같이 `instanceof`를 사용하여, 타입에 따른 코드를 작성할 수 있다.

```typescript
function isDate(date: Date | number | string) {
  // Date 객체의 인스턴스인지 확인한다.
  if (date instanceof Date) {
    // 유효한 날짜인지 확인한다.
    return isFinite(date.getTime());
  }

  return isFinite(new Date(date).getTime());
  // 새로운 Date 객체 생성하고
  // 유효한 날짜인지 확인한다.
}
```

## 객체 구분 (in)

`in` 연산자는 객체가 특정 프로퍼티를 가지고 있는지 확인할 수 있다.

```typescript
propNameOrNumber in objectName
```

`propNameOrNumber`는 프로퍼티의 이름 혹은 배열의 인덱스로 문자열, 숫자, 심볼이 올 수 있다.
`objectName`에는 객체와 생성된 인스턴스가 올 수 있다.

```typescript
// 배열
const items = ["a", "b", "c"];

1 in items; // true
5 in items // false

// 내장 객체
"scrollY" in window // true

// 사용자 정의 객체
const user = {
  name: "홍길동",
  age: 20
};

"name" in user; // true
"weight" in user; // false
```

다음과 같이 `in` 연산자를 사용하여, 객체를 구분할 수 있다.

```typescript
interface Player {
  attack(): void;
}

interface Enemy {
  move(): void;
}

function render(playerOrEnemy: Player | Enemy) {
  if ("attack" in playerOrEnemy) {
    // Player인 경우
    playerOrEnemy.attack();
  } else {
    // Enemy인 경우
    playerOrEnemy.move();
  }
}
```

## 리터럴 타입

유니온 타입 혹은 열거형으로 선언되어 있는 경우, 각각을 리터럴 타입으로 간주하는데, 다음과 같이 `switch`를 사용하여 구분할 수 있다.
`if`문을 사용하는 경우에는 `===`, `!==`, `==`, `!=` 연산자를 통해 구분한다.

```typescript
type Status = 400 | 401 | 403 | 404;

function getLogText(status: Status): string {
  switch (status) {
    case 400:
      return "BadRequest";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "NotFound";
  }
}
```