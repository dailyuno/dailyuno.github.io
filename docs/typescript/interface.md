---
title: 인터페이스
date: 2022-02-21
---

## 인터페이스란?

인터페이스를 통해 타입 정의가 가능하며 변수, 함수, 클래스에서 사용할 수 있다.
인터페이스는 프로퍼티와 메소드를 가지는 하나의 형태를 설계한다고 볼 수 있으며, 
이를 통해 형태의 구현을 강제하여 일관성을 유지할 수 있다.

인터페이스는 타입스크립트에서만 지원하는 기능으로 트랜스파일링 시 코드에 영향을 미치지 않고 타입 체크를 위해서 사용된다.
인터페이스는 프로퍼티와 메소드를 가지기에 클래스와 비슷하다고 볼 수 있는데, 인스턴스 생성이 불가하고 형태를 설계하기 위해서만 사용한다.
즉 추상 클래스와 유사하다고 볼 수 있다.

## 인터페이스 사용하기

인터페이스는 타입 별칭과 문법만 다를 뿐 사용 목적과 기능은 유사하다고 볼 수 있다.
다음과 같이 인터페이스를 정의할 수 있다.

```typescript
interface User {
  name: string;
  age: number;
}
```

정의된 인터페이스는 타입 별칭을 사용하는 것과 동일하게 변수/함수/클래스의 타입으로 명시할 수 있다.
인터페이스의 프로퍼티와 메소드 등은 전부 구현되어야 하며, 구현하지 않을 경우 오류가 발생한다.

```typescript
const user1: User = {
  name: "홍길동",
  age: 20,
};
```

## 인터페이스 확장

타입 별칭에서 `&` 키워드를 통해, 여러 타입을 조합하여 확장된 새로운 타입을 만들 수 있는 것처럼 인터페이스도 확장이 가능하다.
다만 방식은 클래스에서 상속 받는 것처럼 `extends` 키워드를 사용해서 확장해야 한다.

```typescript
interface Animal {
  weight: number;
  height: number;
}

interface Bird extends Animal {
  wingspan: number;
}
```

## 인터페이스 다중 확장

인터페이스는 두 개 이상의 인터페이스를 `extends` 키워드를 통해 다중 확장이 가능하다.
기존 확장 방식과 크게 다르지 않으며, 사용법은 다음과 같다.

```typescript
interface Animal {
  weight: number;
  height: number;
}

interface Flyable {
  fly: () => void;
}

interface Bird extends Animal, Flyable {
  wingspan: number;
}
```

## 인터페이스 병합

인터페이스는 선언 병합(declaration merging)을 지원해서, 같은 이름의 인터페이스를 여러 개 정의할 경우 타입스크립트가 자동으로 한 개의 인터페이스로 병합한다.

예를 들어, 다음과 같이 `Animal`이라는 인터페이스가 두 개 존재한다고 가정해보자.

```typescript
interface Animal {
  weight: number;
  height: number;
}

interface Animal {
  lifespan: number;
}
```

위 `Animal` 인터페이스들은 하나의 인터페이스로 병합되어, 구현하고자 할 경우 모든 프로퍼티와 메소드를 구현해야 한다.

```typescript
const exampleAnimal1: Animal = {
  weight: 130,
  height: 100,
};
// lifespan 프로퍼티 누락

const exampleAnimal2: Animal = {
  lifespan: 10
};
// weight, height 프로퍼티 누락

const exampleAnimal3: Animal = {
  weight: 80,
  height: 170,
  lifespan: 10
};
```

## 인터페이스 구현

클래스에서 인터페이스를 구현하기 위해서는 클래스 선언과 함께 `implements` 키워드를 사용해서, 구현할 특정 인터페이스를 명시해야 한다.

`implements` 키워드는 다음과 같이 사용할 수 있다.

```typescript
interface Animal {
  weight: number;
  height: number;
  lifespan: number;
  eat(): void;
  sleep(): void;
}

class Dog implements Animal {
  weight: number = 20;
  height: number = 90;
  lifespan: number = 10;

  eat(): void {
    ...
  }

  sleep(): void {
    ...
  }
}
```

`Dog` 클래스는 `Animal` 인터페이스에서 정의한 프로퍼티와 메소드를 모두 구현해야 하며, 
필요한 경우 임의의 메소드 혹은 프로퍼티를 추가로 구현할 수 있다.

클래스는 한 개의 인터페이스만 구현 가능한 것은 아니며, 필요하다면 여러 개의 인터페이스를 구현할 수 있다.

```typescript
interface Animal {
  ...
}

interface Swimmable {
  ...
}

class Dog implements Animal, Swimmable {
  ...
}
```

## 주의점

인터페이스에서는 프로퍼티를 정의할 때, 접근 제어자 키워드 `private`, `protected`, `public`을 사용할 수 없으며, `static` 키워드도 마찬가지로 사용할 수 없다.

변수/함수에서 인터페이스를 구현하는 경우, 클래스에서의 구현과 다르게 임의의 프로퍼티, 매개변수 등은 추가로 구현이 불가하다.

```typescript
interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a: number, b: number, c: number) => {
  return a + b + c;
};
// Type '(a: number, b: number, c: number) => number' 
// is not assignable to type 'Sum'.

const sum: Sum = (a: number, b: number) => {
  return a + b;
};
```