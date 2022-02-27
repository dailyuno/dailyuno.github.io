---
title: 타입 호환성
date: 2022-02-25
---

## 들어가며

타입스크립트에서는 타입을 비교할 때, 이름이 아닌 구조를 기준으로 비교한다.
쉽게 설명하자면 똑같은 프로퍼티와 메소드를 가지는 두 개의 타입이 존재하다고 가정할 때, 타입스크립트는 같은 타입이라고 본다는 뜻이다.

C#, 자바와 같은 이름을 기준으로 타입을 지정하는 언어를 명목적 타입 언어라고 하며,
타입스크립트를 구조적 타입 언어라고 한다.

## 타입 호환성

타입스크립트에서는 구조적 서브 타이핑을 기반으로 타입 호환성이 이루어진다.

구조적 서브 타이핑은 앞서 이야기했던 것처럼 구조를 기준으로 타입의 관계를 확인하는데, 쉽게 생각하면 부모 클래스와 자식 클래스 관계라고 볼 수 있다.
타입 호환성은 어떤 타입이 다른 타입과 호환이 되는지 판단하는 것이라고 볼 수 있다.

## 함수 타입 호환성

먼저 함수는 호출 시점에 문제가 없는 경우 할당이 가능하다.
다음 조건을 만족할 때, 함수 A는 함수 B에 할당이 가능하다.

- 함수 A의 매개 변수는 B의 매개 변수보다 같거나 적어야 한다.
- 같은 위치의 매개 변수 타입은 동일해야 한다.
- 함수 A와 함수 B의 반환 타입은 동일해야 한다.

```typescript
type Sum = (a: number, b: number) => number;
type Squared = (a: number) => number;

let sum: Sum = (a: number, b: number) => {
  return a + b;
};

let squared: Squared = (a: number) => {
  return a * a;
};

sum = squared; // 조건 충족
squared = sum; 
// Type 'Sum' is not assignable to type 'Squared'.
```

함수의 매개 변수가 더 적은 경우에는 조건을 충족한다고 판단하지만 더 많은 경우에는 조건을 충족하지 못 한다고 판단하여 에러가 발생한다.
이는 자바스크립트의 함수 특성과 비슷하다고 볼 수 있다.

예를 들어, 배열이 존재한다고 가정하고 `foreach` 메소드를 통해 반복한다고 가정해보자.

```typescript
const items: number[] = [1, 2, 3];

items.forEach((item, index, array) => { ... });
items.forEach((item, index) => { ... });
items.forEach((item) => { ... });
```

위 코드를 보면 알겠지만 `forEach` 메소드는 세 개의 매개 변수를 허용하는데, 이를 모두 사용하지 않아도 정상적으로 작동한다.

다만 허용하는 매개 변수보다 더 많은 매개 변수를 사용하려고 할 경우, 타입스크립트에서는 잘못되었다고 판단하고 에러가 발생한다.

```typescript
items.forEach((item, index, array, temp) => {});
// Parameter 'temp' implicitly has an 'any' type, 
// but a better type may be inferred from usage.
// temp는 허용하지 않으므로 undefined 값을 가진다.
```

## 인터페이스 타입 호환성

다음과 같은 조건을 만족할 경우, 인터페이스 A는 다른 인터페이스 B에 할당이 가능하다.

- A는 B가 가지고 있는 프로퍼티와 메소드들을 가져야 한다.
- 같은 이름의 프로퍼티는 동일한 타입을 가져야 한다.
- 같은 이름의 메소드는 반환 타입과 매개 변수의 타입이 동일해야 한다.

조건을 만족하는 인터페이스 A와 인터페이스 B는 다음과 같다고 볼 수 있다.

```typescript
// 인터페이스 B
interface Animal {
  name: string;
  lifespan: number;
}

// 인터페이스 A
interface User {
  name: string;
  lifespan: number;
  weight: number;
  height: number;
}

// 인터페이스 A를 구현
const user: User = {
  name: "홍길동",
  lifespan: 80,
  weight: 75,
  height: 180,
};

// 인터페이스 A를 구현한 객체를 할당한다.
const animal: Animal = user;
```

`Animal`과 `User`를 다르다고 볼 수 있지만 타입스크립트 특성상 구조를 기준으로 판단하기에 할당이 가능하다.
앞서 설명한 조건을 만족한 경우에만 할당 가능하며, 반대로 `User`를 `Animal`에 할당할 경우 에러가 발생한다.

```typescript
const animal: Animal = {
  name: "사람",
  lifespan: 80,
};

const user: User = animal; 
// Type 'Animal' is missing the following properties 
// from type 'User': weight, height
```

`User`가 가지고 있는 프로퍼티에 대한 조건을 `Animal`이 충족하지 못 해서 에러가 발생한다.
즉 정리하자면 인터페이스가 다른 인터페이스에 할당하기 위해서는 다른 인터페이스의 확장 형태여야 한다고 볼 수 있다.

## 클래스 타입 호환성

클래스는 앞서 설명한 인터페이스의 조건을 포함하여 추가적인 조건을 만족해야 한다.

- 같은 이름의 필드와 메소드는 접근 제어자는 `public`이어야 한다.
- `get`과 `set` 메소드가 있는 경우, 동일한 형태로 존재해야 한다.

### 접근 제어자 - private

접근 제어자가 `private`일 경우, 다음과 같이 에러가 발생한다.

```typescript
class Animal {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class User {
  private id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user: User = new User("user1", "홍길동");
const animal: Animal = user;
// Type 'User' is not assignable to type 'Animal'.
// Types have separate declarations of a private property 'id'.
```

접근 제어자가 `private`일 경우, 호환되지 않는 이유는 다음과 같다.
타입스크립트는 구조를 기준으로 호환 여부를 판단하는데, `User`에서 선언 된 `private` 필드 `id`는 `Animal`에서 선언된 것이 아니기에 다른 구조라고 판단한다.

### 접근 제어자 - protected

접근 제어자 `protected`는 `private`과 비슷하게 동작하지만 살짝 다른 부분이 존재한다. 
상속 받은 클래스는 호환이 가능하다.

```typescript
class Animal {
  protected id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class User extends Animal {
  protected id: string;
  name: string;

  constructor(id: string, name: string) {
    super(id);
    this.name = name;
  }
}

const user: User = new User("user1", "홍길동");
const animal: Animal = user;
```

하지만 연관 관계가 없는 클래스끼리의 호환은 `private`으로 선언된 것과 동일하다고 볼 수 있다.

### 정적 필드와 메소드

`static` 키워드를 통해 정적 필드와 메소드를 선언한 경우,
이는 인스턴스에 영향을 미치지 않으므로 신경쓰지 않아도 무방하다.

```typescript
class Animal {
  id: string;
  static types: string[];

  constructor(id: string) {
    this.id = id;
  }
}

class User {
  id: string;
  name: string;
  static items: string[];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user: User = new User("user1", "홍길동");
const animal: Animal = user;
```

실제로 위 코드를 보면 `Animal`과 `User` 클래스에 서로 다른 정적 필드가 존재하지만 문제 없이 호환되는 것을 볼 수 있다.

### readonly

`readonly`도 `static` 키워드와 마찬가지로 구조 혹은 접근 범위등에 영향을 미치지 않으므로 신경쓰지 않아도 된다.

```typescript
class Animal {
  readonly id: string;

  constructor(id: string) {
    this.id = id;
  }
}

class User {
  id: string;
  readonly name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

const user: User = new User("user1", "홍길동");
const animal: Animal = user;
```

## 타입 호환성과 함수

앞서 타입 호환성에 대해 설명했는데, 이를 활용하면 다음과 같은 함수의 호출이 가능하다.

```typescript
class Rect {
  draw(): void {}
}

class Circle {
  draw(): void {}
}

function render(shape: Rect) {
  shape.draw();
}

let rect: Rect = new Rect();
let circle: Circle = new Circle();

render(rect);
render(circle);
```

`render` 함수를 보면 `Rect` 타입을 매개 변수로 허용하는데, 구조 기반 타입을 지원하는 타입스크립트 특성상 `Rect` 타입이 아닌 다른 타입을 전달하더라도 에러가 발생하지는 않는다.

`Rect`와 `Circle`은 서로 다른 타입이라고 볼 수 있는데, 두 클래스 모두 `draw` 메소드를 가짐에 따라 서로 호환이 가능하다.

앞서 작성된 클래스를 상속 받도록 설계하면 다음과 같이 만들 수 있다.

```typescript
class Shape {
  draw(): void {}
}

class Rect extends Shape {}

class Circle extends Shape {}

function draw(shape: Shape) {
  shape.draw();
}

let rect: Rect = new Rect();
let circle: Circle = new Circle();

draw(rect);
draw(circle);
```