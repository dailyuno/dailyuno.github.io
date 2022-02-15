---
title: 타입 어노테이션
date: 2022-02-08
---

## 타입 어노테이션 (Type Annotation)

타입스크립트는 자바스크립트의 코드(변수/상수/함수)에 타입을 정의할 수 있다.
java, C++등의 다른 언어들과는 타입을 정의하는 방법이 다른데, 다음과 같이 `:`을 사용하여, 타입을 정의해야 한다.

```typescript
let username: string;
```

타입 어노테이션은 타입스크립트가 트랜스파일링 작업을 할 때, 타입이 맞지 않는 경우가 있을 경우 오류를 알려주는데, 이를 정적 유형 검사라고 한다.

아래 코드처럼 `string`으로 타입을 명시하고 다른 타입을 할당할 경우, 오류가 발생한다.

```typescript
let username: string;

username = 1;
// Type 'number' is not assignable to type 'string'.
```

여기서 알아야 하는 점은 타입을 명시했다고 해서, 트랜스파일링 되는 자바스크립트의 코드가 변경되는 것은 아니다. 
다음 코드는 동일한 코드로 트랜스파일링이 된다.

```typescript
let username; // var username;
let username: string; // var username;
```

## 함수 사용

변수 선언 방식과 동일하게 함수에서도 타입 어노테이션의 사용이 가능하다.

```typescript
function sum(a: number, b: number) {
  return a + b;
}

function print(name: string, age: number) {
  console.log(`${name}은 ${age}살입니다.`);
}
```

추가로 함수 호출 시 반환되는 값에 대해서 타입을 명시할 수 있다.
앞서 예제로 작성한 `sum` 함수는 숫자를 인자로 받아 더한 값을 반환한다. 
즉 숫자를 반환함으로 다음과 같이 반환 타입을 명시할 수 있다.

변수와 마찬가지로 실제 코드에 영향을 미치지는 않으며, 정적 유형 검사를 위해서만 사용된다.

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

## 객체 사용

객체가 가지고 있는 각각의 프로퍼티에 대해서도 다음과 같이 타입을 명시할 수 있다.

```typescript
let user: {
  name: string;
  age: number;
};

user = {
  name: "홍길동",
  age: 20,
};
```

## 마무리

타입 어노테이션을 필수적으로 사용해야 하는 것은 아니며, 사용하지 않더라도 타입스크립트가 타입을 추론한다.
하지만 타입스크립트의 이점인 정적 유형 검사를 포기할 이유는 없다고 생각한다.

타입 어노테이션을 사용하여 코드를 작성하는 시간은 오래 걸릴 수 있지만 테스트 및 디버깅을 하는 시간이 줄어들고 예기치 못 한 오류를 사전에 잡아낼 수 있다는 강점을 가진다.
이는 유저에게까지 오류가 노출될 가능성이 낮아진다는 의미로 어플리케이션 품질에 좋은 영향을 미친다.

뿐만 아니라 개발자 측면에서도 기존의 쓸모 없는 주석 작성을 줄이고 구조를 쉽게 파악할 수 있으므로, 유지 보수 측면에서라도 타입 어노테이션을 사용하는 것을 권장한다.