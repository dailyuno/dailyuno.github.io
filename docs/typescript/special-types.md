---
title: 특수 타입
date: 2022-02-09
---

## 들어가며

타입스크립트에는 기존 자바스크립트에서 볼 수 없었던 특수한 타입들이 존재한다.

- [any](#any)
- [unknown](#unknown)
- [void](#void)
- [never](#never)

## any

타입스크립트를 사용하면서 모든 타입을 명시하면 좋겠지만 어떠한 변수 유형일지 모르는 상황이 생길 수도 있다.
이러한 경우, `any`을 통해 이 변수가 어떠한 타입이든 가능하다라는 것을 명시할 수 있다.

`any` 타입은 주로 사용자에게 입력을 받거나 라이브러리를 사용해서 데이터를 받는 경우 사용하며, 다음과 같이 사용할 수 있다.

```typescript
let response: any;

response = true;
response = 10;
response = "test";
```

`any` 타입으로 명시된 변수는 다른 타입으로 명시된 변수에 할당할 수 있다.
`any` 타입을 사용하면 트랜스파일링 작업 시 타입 검사를 진행하지 않아서, 위와 같은 코드를 작성해도 에러가 발생하지 않는다고 보면 된다.

```typescript
let response: any = 10;

let num: number = response;
let text: string = response;
let isLoading: boolean = response;
```

추가로 `any` 타입은 다음과 같이 사용할 수 있다.

```typescript
let num: any = 1;

console.log(typeof num); // number
console.log(num.length); // undefined
```

위 코드를 `number` 타입으로 명시할 경우, `length` 프로퍼티가 존재하지 않아 타입 검사 시 오류가 발생한다.
하지만 `any` 타입으로 명시한 경우에는 앞서 이야기했던 것처럼 타입 검사를 진행하지 않기에 가능하다.

즉 기존 자바스크립트처럼 동작한다고 볼 수 있는데, 타입스크립트를 사용하는 이유가 사라지게 되니 꼭 필요한 경우를 제외하고는 사용하지 않는 걸 권장한다.
그럼에도 불구하고 `any`의 사용이 필요하다면 예기치 못 한 오류가 발생할 수 있는 것을 감안하고 주의하여 사용하길 바란다.

## unknown

`unknown`은 Typescript 3.0에 새롭게 추가된 타입으로 앞서 설명한 `any`와 마찬가지로 알지 못하는 타입을 표현할 때 사용한다.
`unknown`은 `any`와 마찬가지로 모든 타입의 값이 할당될 수 있다.

```typescript
let response: any;

response = true;
response = 10;
response = "test";
```

다만 `unknown`으로 명시된 변수는 `unknown`과 `any`를 제외한 다른 타입으로 명시된 변수에 할당할 수 없다.

```typescript
response = 10;

let age: number = response; // Type 'unknown' is not assignable to type 'number'.
let name: string = response; // Type 'unknown' is not assignable to type 'string'.
```

그리고 `any`에서 가능했던 아래의 코드도 작동하지 않는다.

```typescript
let num: unknown = 1;

console.log(num.length); // Property 'length' does not exist on type 'unknown'. 
```

`unknown` 타입으로 명시하면 타입스크립트 컴파일러에게 변수의 타입이 `unknown`으로 어떠한 타입이 올 수 있으니, 엄격하게 확인해달라는 의미라고 볼 수 있다.

기존의 `any` 타입을 사용할 때보다는 제한되는 부분들이 많아지지만 예기치 못 한 오류가 발생하는 것을 사전에 방지할 수 있다는 장점이 있다.

## void

`void`는 `any`, `unknown`과 반대로 어떤 타입도 존재할 수 없을 때 사용한다.
자바와 같은 다른 언어에서 사용하는 것과 동일하게 함수에서 반환 값이 없는 경우에 사용된다.

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

## never

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
심지어는 `any`와 `unknown`도 할당이 불가능하다.