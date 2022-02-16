---
title: 타입 단언
date: 2022-02-16
---

## 타입 단언 (Type assertion)

타입스크립트에서는 타입 단언을 통해 추론한 타입 혹은 `any`와 `unknown`등으로 정의된 타입을 직접 변경할 수 있다.

타입 단언은 현재 선언 되어있는 타입보다 더 구체적인 타입의 정의가 필요하거나 자바스크립트로 작성된 코드를 원하는 타입으로 변경할 때 사용한다. 
타입 단언은 두 가지 방식으로 가능하다.

## angle-bracket 문법

다음과 같이 `<type>` 문법을 통해 타입 단언이 가능하다.

```typescript
let text: any = "lorem ipsum";

let len: number = (<string>text).length;
```

다만 JSX에서는 자체적으로 angle-bracket 문법을 사용하기 때문에, 타입 단언을 위해 angle-bracket 문법을 사용하면 코드의 구분이 모호한 문제가 발생할 수 있다.
즉 타입스크립트는 `.tsx` 파일에서 angle-bracket 문법을 지원하지 않는다.

```tsx
let len = <string>text.length;
```

## as 문법

`.tsx` 파일에서 타입 단언이 필요한 경우에는 `as` 문법을 사용해야 한다.
`as` 문법은 `.ts`와 `.tsx` 파일에서 모두 사용 가능하며, angle-bracket 문법과 동일하게 동작한다.

```typescript
let text: any = "lorem ipsum";

let len: number = (text as string).length;
```

## 타입 단언 활용하기

예를 들어 다음과 같은 형태의 빈 객체가 존재한다고 가정해보자.
타입스크립트는 `user` 변수를 빈 객체 타입이라고 추론하기 때문에, 빈 객체에 프로퍼티를 추가하려고 하면 오류가 발생한다.

```typescript
let user = {};

user.name = "홍길동";
// Property 'name' does not exist on type '{}'
user.age = 20;
// Property 'age' does not exist on type '{}'
```

빈 객체로 선언되어 있는 `user`에 프로퍼티를 추가하기 위해서는 `user`에 대해 타입 단언이 필요하다.
객체 타입 단언은 기존에 존재하는 타입으로는 불가능하므로 원하는 구조를 타입 별칭 혹은 인터페이스로 정의해야 한다.

```typescript
type User = {
  name: string;
  age: number;
};

let user = {} as User;

user.name = "홍길동";
user.age = 20;
```

## 트랜스파일링

타입 단언은 데이터를 재구성하거나 특별한 검사를 하지는 않으며, 트랜스파일링 작업을 할 때 정적 유형 검사를 위한 용도로 사용된다.

```typescript
let text: any = "lorem ipsum";

let len1: number = (<string>text).length;
let len2: number = text.length;
```

실제로 타입 단언을 사용한 타입스크립트 코드를 자바스크립트 코드로 트랜스파일링할 경우, 다음과 같이 달라지는 점은 없다.

```javascript
var text = "lorem ipsum";
var len1 = text.length;
var len2 = text.length;
```