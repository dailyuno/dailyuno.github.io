---
title: 제네릭
date: 2022-02-15
---

## 들어가며

타입스크립트에서는 자바스크립트와 달리 타입 명시가 필요해서, 데이터가 다른 경우에는 같은 기능임에도 불구하고 코드를 반복해야 하는 경우가 생길 수 있다.

```typescript
function printString(value: string): void {
  console.log(value);
}

function printNumber(value: number): void {
  console.log(value);
}
```

위와 같은 코드를 방지하기 위해서 우리는 여러 개의 데이터를 허용하는 `any` 타입으로 명시하거나 유니온 타입을 사용할 수 있다.

```typescript
function print(vlaue: any): void {
  console.log(value);
}

function print(value: string | number): void {
  console.log(value);
}
```

하지만 `any` 타입을 사용할 경우, 원하는 타입 이외에 다른 타입도 허용되는 문제가 존재한다.
유니온 타입은 `any` 타입과 달리 원하는 타입을 명시할 수 있지만 여전히 확장성을 고려한다면 유지보수 측면에서 좋지 않다고 볼 수 있다.

이렇게 여러 개의 타입을 필요로 하고, 확장성들을 고려할 때 제네릭을 사용할 수 있다.

## 제네릭 사용하기

제네릭은 재사용 가능한 코드를 만들 수 있도록 도와주는 기능이다.
기존 타입 어노테이션 방식과는 다르게 원하는 데이터 유형을 허용할 수 있도록 지원한다.
데이터 타입은 사용자에 의해서 정해지며, 개수와 타입의 제약이 없다.

제네릭은 태그와 같이 `<T>`의 형태로 사용하며 클래스, 함수, 메소드, 인터페이스등 다양한 곳에서 사용할 수 있다.
다음과 같이 함수에 제네릭을 사용할 수 있다.

```typescript
function print<T>(value: T): void {
  console.log(value);
}
```

이렇게 선언된 제네릭 함수는 호출 시, 타입을 명시하여 사용할 수 있다.

```typescript
print<string>("텍스트");
// print<string>(value: string): string
print<number>(1024);
// print<number>(value: number): number
```

타입을 명시하지 않더라도 오류는 발생하지 않으며, 타입스크립트가 타입을 추론한다.

```typescript
print(true);
// print<true>(value: true): true

print([1]);
// print<number[]>(value: number[]): number[]
```

## 제네릭 다중 타입

제네릭은 다음과 같이 여러 개의 타입을 허용할 수 있다.

```typescript
function print<T, U, V>(value1: T, value2: U, value3: V): void {
  console.log(value1, value2, value3);
}

print<number, string, boolean>(1024, "텍스트", true);
```

제네릭은 일반 어노테이션 방식과 함께 사용할 수 있다.

```typescript
function print<T>(value1: T, value2: string): void {
  console.log(value1, value2);
}

print<number>(1024, "텍스트");
```

## 제네릭 제약 조건

제네릭을 사용하게 되면 어떤 타입이 들어올지 예측할 수 없어서, 타입스크립트는 모든 상황에서 작동하도록 검사한다. 다음과 같이 코드를 작성한다고 가정해보자.

```typescript
function calcBMI<P>(person: P): number {
  return person.width / Math.pow(person.height / 100, 2);
  // Property 'width' does not exist on type 'P'.
  // Property 'height' does not exist on type 'P'.
}
```

`calcBMI` 함수는 호출 시, 타입에 상관없이 인자로 넘길 수 있는데 숫자, 문자등을 넘길 경우 `width`와 `height` 프로퍼티를 찾을 수 없어서 오류가 발생한다.
즉 `width`와 `height`의 프로퍼티를 가진 객체를 넘겨야 오류를 방지할 수 있다.

이렇게 특정 타입들에 한해서만 동작하는 제네릭 함수를 필요로 할 수 있다.
우리가 타입들을 특정하기 위해서는 `P`가 어떠한 타입이 될 수 있는지에 대해 제약 조건을 명시해야 한다.

제약 조건은 인터페이스 혹은 타입 별칭을 만들고, `extends` 키워드를 사용하여 다음과 같이 명시할 수 있다.

```typescript
interface Person {
  width: number;
  height: number;
}

function calcBMI<P extends Person>(person: P): number {
  return person.width / Math.pow(person.height / 100, 2);
}
```

`calcBMI` 함수는 허용 가능한 타입을 특정되어, 이외의 타입들은 전달 불가능하다.

```typescript
calcBMI(1);
// Argument of type 'number' is not assignable to parameter of type 'Person'.
calcBMI("test");
// Argument of type 'string' is not assignable to parameter of type 'Person'.
```

허용 범위를 `Person`으로 한정했으므로, `Person`의 형태를 포함하는 객체만 인자로 전달이 가능하다.

```typescript
const p1: Person = {
  width: 75,
  height: 180,
};

const p2 = {
  width: 80,
  height: 185,
  age: 20
};

calcBMI(p1);
calcBMI(p2);
```

## 제네릭 제약 조건 - 타입 매개변수 사용

예를 들어, 객체 내에서 특정 프로퍼티를 가지고 오는 다음과 같은 함수가 있다고 가정해보자.

```typescript
function getProperty<T, K>(obj: T, key: K): any {
  return obj[key];
  // Type 'K' cannot be used to index type 'T'.
}
```

앞서 설명했던 것처럼 타입스크립트는 모든 상황을 고려하기에 객체 내에 없는 프로퍼티를 반환할 가능성이 있다고 보고 오류가 발생한다.

해당 함수에서 오류가 발생하지 않도록 하기 위해서는 제약 조건을 명시해야 한다.
이 때 우리는 다른 타입 매개변수에 의해 제약을 받는 타입 매개변수를 선언할 수 있다.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): any {
  return obj[key];
}
```

## 제네릭 활용하기

API를 요청하기 위한 `request` 함수가 존재하다고 가정해보자.
해당 함수는 API를 요청하는 `url`과 `config` 설정 값을 인자로 받으며, 다음과 같은 형태로 구성된다.

```typescript
async function request(url: string, config: object): Promise<any> {
  const response = await fetch(url, config);
  return response.json();
}
```

위 코드는 반환 값이 `Promise<any>` 타입으로, 타입스크립트의 이점인 정적 유형 검사를 진행하지 않게 된다.
정적 유형 검사를 할 수 있도록 하기 위해서는 반환 타입을 명시해줘야 하는데, 제네릭을 통해서 다음과 같이 만들 수 있다.

```typescript
async function request<ResponseType>(
  url: string,
  config: object = {}
): Promise<ResponseType> {
  const response = await fetch(url, config);
  return response.json();
}
```

`request` 함수를 호출하기 위해서는 받아올 타입의 형태를 인터페이스 혹은 타입 별칭을 사용해 정의해야 한다.
선언 이후 다음과 같이 매개변수로 넘겨서 사용할 수 있다.

```typescript
type User = {
  name: string;
  age: number;
};

const users = await request<User[]>("/api/users");
const user = await request<User>("/api/user");
```