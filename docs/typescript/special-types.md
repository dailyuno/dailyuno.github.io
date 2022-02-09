---
title: 특수 타입
date: 2022-02-09
---

## 들어가며

타입스크립트에는 기존 자바스크립트에서 볼 수 없었던 특수한 타입들이 존재한다.

- [Unknown](#unknown)
- [Any](#any)
- [Void](#void)
- [Never](#never)

## Unknown

타입스크립트를 사용하면서 모든 타입을 정의하면 좋겠지만 어떠한 변수 유형일지 모르는 상황이 생길 수도 있다.
이러한 경우, `unknown`을 통해 이 변수가 어떠한 타입이든 가능하다라는 것을 정의할 수 있다.

```typescript
let response: unknown;
```

다만 `unknown`으로 정의된 변수는 `unknown`과 `any`를 제외한 다른 타입으로 정의된 변수에 할당할 수 없다.

```typescript
response = 10;

let age: number = response; // Type 'unknown' is not assignable to type 'number'.
```

## Any

앞서 설명한 `unknown`과 마찬가지로 알지 못하는 타입을 표현할 때 사용한다.
주로 사용자에게 입력을 받거나 라이브러리를 사용해서 데이터를 받는 경우 사용한다.
`any` 타입을 사용할 경우, 컴파일 시 타입 검사를 진행하지 않고 통과하게 된다.

```typescript
let response: any;

let list: any[] = ["이름", 20, true];
```

이렇게 보면 `unknown`과 `any`의 차이점을 모를 수 있는데, 가장 큰 차이점이 존재한다.
`any`로 정의된 변수는 다른 타입으로 정의된 변수에 할당해도 에러가 발생하지 않는다.

```typescript
response = 10;

let age: number = response;
```

## Void

`void`는 `any`, `unknown`과 반대로 어떤 타입도 존재할 수 없을 때 사용한다.
주로 함수에서 반환 값이 없는 경우에 사용된다.

```typescript
function printUser(): void {
  console.log("printUser");
}
```

변수에서 사용할 경우, `null`과 `undefined`만 할당 가능하다.
즉 함수를 제외한 다른 곳에서 사용하는 경우는 없다고 봐도 무방하다.

```typescript
let unusable: void; 

unusable = undefined;
unusable = null;
unusable = 1; // Type 'number' is not assignable to type 'void'.
```

## Never

`never` 타입은 절대 발생할 수 없는 경우에 사용한다.
항상 예외를 throw하거나 끝나지 않는 반복문 등인 경우에 사용된다.

```typescript
function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), ms)
  )
}

function loop(): never {
  while (true) {
    ...
  }
}
```

`never` 타입은 모든 타입에 할당 가능한 하위 타입이지만 어떤 타입도 `never`에 할당될 수 없다.
심지어 `any`와 `unknown`도 할당이 불가능하다.