---
title: 기본 타입
date: 2022-02-08
---

## 들어가며

타입스크립트는 자바스크립트의 코드(변수/상수/함수)에 타입을 정의할 수 있다.
타입스크립트에서는 자바스크립트에서 사용했던 타입들을 지원할 뿐만 아니라,
타입스크립트만의 새로운 타입들도 지원한다.

- [Boolean](#boolean)
- [Number](#number)
- [String](#string)
- [Array](#array)
- [Tuple](#tuple)
- [Enum](#enum)
- [Unknown](#unknown)
- [Any](#any)
- [Void](#void)
- [Null and Undefined](#null-and-undefined)
- [Never](#never)
- [Object](#object)

## 타입 어노테이션 (Type Annotation)

타입스크립트는 java, C++등의 다른 언어들과는 타입을 정의하는 방법이 다르다.
다음과 같이 `:`을 사용하여, 타입을 정의해야 한다.

```typescript
let name: string;
```

위 코드처럼 타입을 정의했다고 해서, 트랜스파일링 되는 자바스크립트의 코드가 변경되는 것은 아니다.
다만 타입스크립트가 트랜스파일링 작업을 할 때, 타입이 맞지 않는 경우가 있을 경우 에러를 알려주는 표시한다.

다음 코드는 동일한 코드로 트랜스파일링이 된다.

```typescript
let username; // var username;
let username: string; // var username;
```

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

## Enum

열거형(enum)은 해당 타입으로 사용할 수 있는 값을 열거할 수 있다.

```typescript
enum Days {
  Monday,
  TuesDay,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
```

위의 예제처럼 값을 설정하지 않는 경우에는 0부터 시작하여 1씩 증가하며 자동으로 숫자가 할당 된다.

```typescript
enum Days {
  Monday = 0,
  TuesDay = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
}
```

모든 값을 수동 설정하기를 원하는 경우에는 다음과 같이 Key = Value 형식으로 정의해줘야 한다.
모든 값을 정의할 필요는 없으며, 정의하지 않는 경우에는 타입스크립트가 값을 추론한다.

```typescript
enum Status {
  STOP = 1,
  PLAY = 0,
}

enum Color {
  Red = "#f44336",
  Green = "#009688",
  Blue = "#2196f3",
}
```

이렇게 정의 된 열거형은 다음과 같이 사용할 수 있다.

```typescript
let color = Color.Red;
```

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

## Null and Undefined

타입스크립트에서는 `null`과 `undefined`를 각각의 타입으로 정의할 수 있다.
다만 변수에서의 `void`와 마찬가지로 사용할 일이 거의 없다.

```typescript
let notFound: undefined = undefined;
let empty: null = null;
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

## Object

`object`는 원시 타입 아닌 타입을 의미한다. 즉 `number`, `string`, `boolean`, `bigint`, `symbol`, `null`을 제외한 모든 유형이라고 볼 수 있다.

```typescript
function callOnlyObject(o: object): void {
  ...
}

// Argument of type 'number' is not assignable to parameter of type 'object'.
callOnlyObject(1);

// Argument of type 'string' is not assignable to parameter of type 'object'.
callOnlyObject("a"); 

// Argument of type 'boolean' is not assignable to parameter of type 'object'.
callOnlyObject(true);

// Argument of type 'null' is not assignable to parameter of type 'object'.
callOnlyObject(null);

// Argument of type 'undefined' is not assignable to parameter of type 'object'.
callOnlyObject(undefined);

callOnlyObject([]);
```

## 타입 단언 (Type assertions)

타입스크립트에서는 타입 단언을 통해 추론한 타입 혹은 `any`와 `unknown`으로 정의된 타입을 직접 변경할 수 있다.

타입 단언은 현재 선언 되어있는 타입보다 더 구체적인 타입의 정의가 필요하거나 자바스크립트로 작성된 코드를 원하는 타입으로 변경할 때 사용한다. 
타입 단언은 두 가지 방식으로 가능하다.

### angle-bracket 문법

다음과 같이 `<type>` 문법을 통해 타입 단언이 가능하다.

```typescript
let text: any = "lorem ipsum";

let len: number = (<string>text).length;
```

### as 문법

`as`를 사용해 타입 단언이 가능하다.
다만 JSX에서는 문법적으로 angle-bracket 문법을 사용할 수 없어서, as 문법만 사용할 수 있다.

```typescript
let text: any = "lorem ipsum";

let len: number = (text as string).length;
```

타입 단언은 데이터를 재구성하거나 특별한 검사를 하지는 않고, 트랜스파일링 작업을 할 때 타입을 알려주는 용도로 사용된다.

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