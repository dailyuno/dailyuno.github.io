---
title: 배열과 튜플
date: 2022-02-09
---

## 들어가며

- [Array](#array)
- [Tuple](#tuple)

## Array

타입스크립트에서는 배열의 타입을 정의하기 위해서, 타입 뒤에 `[]`를 사용해야 한다.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let users: string[] = ["홍길동", "홍길순"];
```

추가로 `Array<Type>` 제네릭 배열 타입으로도 사용할 수 있다.

```typescript
let list: Array<number> = [1, 2, 3, 4];
```

## Tuple

튜플은 배열에 들어갈 데이터의 타입을 정의할 수 있으며, 타입 요소의 개수에 따라 배열의 크기가 정해진다.
데이터의 타입은 동일하지 않아도 상관 없다.
다만 타입 요소의 개수보다 많은 데이터를 가질 경우 에러가 발생한다.

```typescript
// rgb
let color: [number, number, number] = [255, 255, 255];
color = [255, 0, 0]; // 성공
color = [255, 0, 0, 0.5]; // 에러

// 이름, 나이
let user: [string, number] = ["홍길동", 20];
```

튜플의 크기가 정해져 있지 않을 경우에는 나머지 요소 (...)를 통해 최소 길이를 지정할 수 있다.

```typescript
let user: [string, number, ...string[]] = [
  "홍길동",
  20,
  "남자",
  "서울",
];
```