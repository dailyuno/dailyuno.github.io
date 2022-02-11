---
title: 배열과 튜플
date: 2022-02-09
---

## 들어가며

타입스크립트에는 데이터 집합을 표현하기 위해 배열과 튜플을 사용한다.
배열과 튜플은 다른 프로그래밍 언어에서도 많이 사용하는데, 타입스크립트에서는 어떻게 사용하는지 알아보자.

- [배열(array)](#배열-array)
- [튜플(tuple)](#튜플-tuple)

## 배열(array)

자바스크립트의 배열과 동일하게 여러 개의 값을 저장하기 위해 사용한다.
타입스크립트에서는 배열의 타입을 명시하기 위해서, 두 가지 방법을 사용할 수 있다.

### 축약 타입

첫 번째 방법은 타입 뒤에 `[]`를 쓰는 방법으로 `T[]`의 형태로 사용한다.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let users: string[] = ["홍길동", "홍길순"];
```

### 제네릭 타입

두 번째 방법은 `Array<T>` 제네릭 타입으로 축약 타입과 성능, 의미가 동일하다.
취향에 맞게 두 가지 방법 중 원하는 문법을 선택하여 사용하면 된다.

```typescript
let list: Array<number> = [1, 2, 3, 4];
```

### 읽기 전용

일반적으로 배열은 변경할 수 있도록 가변 배열로 사용하는데, 상황에 따라 불변 배열이 필요할 수 있다.
타입스크립트에서는 `readonly` 타입을 통해, 선언된 배열을 변경하지 못 하도록 타입을 보장할 수 있다. 

읽기 전용 배열은 일반 배열과 동일하며, 내용을 변경할 수 없다는 점만 다르다.
트랜스파일링 작업에 영향을 미치지 않으며, 같은 코드로 트랜스파일링 된다.

```typescript
let numbers: readonly number[] = [1, 2, 3, 4];

numbers.push(5);
// Property 'push' does not exist on type 'readonly number[]'.
```

제네릭 배열 타입은 축약 배열 타입과 마찬가지로 `readonly` 타입을 사용할 수 있는데, 사용법은 축약형에 비해 복잡하며 두 가지 방법이 존재한다.

```typescript
let numbers1: ReadonlyArray<number> = [1, 2, 3, 4];
let numbers2: Readonly<number[]> = [1, 2, 3, 4]; // 축약형
```

### 유니온 타입

특정 타입을 여러 개 지원해야 하는 상황이 발생할 수 있는데, 유니온 타입 사용을 통해 지원이 가능하다.

```typescript
let list1: (string | number)[] = [1, "일", 2, "이"]; // 축약 배열 타입
let list2: Array<string | number> = [1, "일", 2, "이"]; // 제네릭 배열 타입
```

## 튜플(tuple)

튜플은 배열의 서브 타입으로 배열에 들어갈 데이터의 타입을 명시할 수 있으며, 타입 요소의 개수에 따라 배열의 크기가 정해진다.

### 데이터 타입 명시

튜플의 데이터 타입 명시 방법은 다음과 같으며, 데이터의 타입은 동일하지 않아도 상관 없다.
다만 타입 요소의 개수보다 많은 데이터를 가질 경우 에러가 발생한다.

```typescript
// rgb
let color: [number, number, number] = [255, 255, 255];
color = [255, 0, 0];
color = [255, 0, 0, 0.5]; // Error
```

또한 튜플은 명시된 데이터 타입과 다른 타입을 삽입할 경우, 에러가 발생한다.

```typescript
// 이름, 나이
let user: [string, number] = ["홍길동", 20];

user = [30, "홍길동"]; // Error
```

### 선택형 요소

`?` 선택형 요소를 통해, 데이터를 선택적으로 추가할 수 있도록 할 수 있다.

```typescript
let user: [string, number?];

user = ["홍길동", 20];
user = ["홍길순"];
```

### 최소 길이 지정

튜플의 크기가 정해져 있지 않을 경우에는 나머지 요소 (...)를 통해 최소 길이를 지정할 수 있다.

```typescript
let user: [string, number, ...string[]] = [
  "홍길동",
  20,
  "남자",
  "서울",
  ...
];
```

### 읽기 전용

튜플은 배열과 마찬가지로 `readonly` 타입을 통해 읽기 전용으로 만들 수 있다.

```typescript
let list1: readonly [string, number] = ["홍길동", 20];
let list2: Readonly<[string, number]> = ["홍길순", 18];
```