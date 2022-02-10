---
title: 원시 타입
date: 2022-02-09
---

## 들어가며

타입스크립트는 자바스크립트와 동일하게 7개의 원시 타입을 가진다.
주로 `boolean`, `number`, `string` 원시 타입을 사용하며, 이외의 원시 타입들은 사용하는 경우가 드물다.

- [boolean](#boolean)
- [number](#number)
- [string](#string)
- [null and undefined](#null-and-undefined)
- [bigint](#Bigint)
- [symbol](#Symbol)

## boolean

true(참)와 false(거짓) 두 개의 값을 표현하기 위해 사용하며, 타입을 `boolean`로 명시하면 된다.

```typescript                 
let isLoading: boolean = true;
```

## number

숫자를 표현하기 위해 사용하며, 타입을 `number`로 명시하면 된다.

```typescript
let width: number = 100;
let height: number = 100;
let discount_rate: number = 7.5;
```

## string

문자열을 표현하기 위해 사용하며, 타입을 `string`로 명시하면 된다.

```typescript
let username: string = "홍길동"; 
let address: string = "서울";
```

추가로 ES6와 동일하게 템플릿 문법을 사용할 수 있다.

```typescript
let text: string = `${username}은 ${address}에 산다.`;
```

## null and undefined

타입스크립트에서는 `null`과 `undefined`를 각각의 타입으로 명시할 수 있다.
다만 변수에서의 `void`와 마찬가지로 사용할 일이 거의 없다.

```typescript
let notFound: undefined = undefined;
let empty: null = null;
```

## bigint

`number`는 2^53까지의 정수를 표현할 수 있어서, 이보다 큰 수를 표현해야 할 때 `bigint`를 사용한다.
`bigint`를 사용하면 `number`에서 발생하던 라운딩 관련 에러 걱정 없이 큰 정수를 처리할 수 있다.

```typescript
let num: bigint = 9007199254740993n;
```

## symbol

`symbol`은 ES6에서 새롭게 추가된 원시 타입으로 변경 불가능하며 고유한 값을 가진다.
객체와 맵 등에서 문자열 키를 대신하여 유일한 키 역할을 하기 위해 사용한다.

```typescript
let exampleSymbol: symbol = Symbol("example"); // Symbol(example)
```