---
title: 원시 타입
date: 2022-02-09
---

## 들어가며

타입스크립트는 자바스크립트와 동일하게 7개의 원시 타입을 가진다.

- [Boolean](#boolean)
- [Number](#number)
- [String](#string)
- [Null and Undefined](#null-and-undefined)
- [Bigint](#Bigint)
- [Symbol](#Symbol)

## Boolean

true(참)와 false(거짓) 두 개의 값을 표현하기 위해 사용하며, 타입을 `boolean`로 정의하면 된다.

```typescript                                                                                                                    
let isLoading: boolean = true;
```

## Number

숫자를 표현하기 위해 사용하며, 타입을 `number`로 정의하면 된다.

```typescript
let width: number = 100;
let height: number = 100;
let discount_rate: number = 7.5;
```

## String

문자열을 표현하기 위해 사용하며, 타입을 `string`로 정의하면 된다.

```typescript
let username: string = "홍길동"; 
let address: string = "서울";
```

추가로 ES6와 동일하게 템플릿 문법을 사용할 수 있다.

```typescript
let text: string = `${username}은 ${address}에 산다.`;
```

## Null and Undefined

타입스크립트에서는 `null`과 `undefined`를 각각의 타입으로 정의할 수 있다.
다만 변수에서의 `void`와 마찬가지로 사용할 일이 거의 없다.

```typescript
let notFound: undefined = undefined;
let empty: null = null;
```

## Bigint

## Symbol