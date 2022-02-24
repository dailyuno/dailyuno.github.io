---
title: 클래스
date: 2022-02-24 
---

## 클래스

자바스크립트 ES6부터 클래스를 지원하는 것처럼 타입스크립트에서도 클래스를 지원한다.
다만 타입스크립트의 클래스에서는 접근 제어자, 추상 클래스와 같이 추가된 기능들이 존재한다.

## 클래스 정의

먼저 자바스크립트에서는 클래스에서 사용할 프로퍼티를 다음과 같이 생성자 메소드 혹은 일반 메소드에서 선언할 수 있다.

```javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

하지만 위와 같은 코드를 타입스크립트에서 그대로 사용하면 오류가 발생하는데,
이를 해결하기 위해서는 메소드에서 프로퍼티의 값을 변경하기 이전에 미리 사용할 프로퍼티의 선언이 필요하다.

이를 필드 선언이라고 하며, 필드의 선언 방법은 자바스크립트와 동일하다.

```typescript
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```

즉 클래스 정의 시, 자바스크립트와 타입스크립트의 차이점은 필드의 선언이 필수 여부라고 볼 수 있다.

## 접근 제어자

타입스크립트는 클래스 기반 객체 지향 언어가 지원하는 것처럼 접근 제어자(public, private, protected)를 지원한다.
접근 제어자를 명시하지 않을 경우에는 암묵적으로 `public` 선언되기에 생략이 가능하다.

### public

`public`으로 선언되어 있는 함수와 필드는 일반 클래스를 사용하는 것과 동일하게 선언된 클래스 내부, 상속 받은 클래스, 인스턴스 모두에서 접근 가능하다.

```typescript
// 클래스 내부
class Animal {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    console.log(this.width, this.height); // 90, 30
  }
}

// Animal을 상속 받은 클래스
class Bird extends Animal {
  wingspan: number;

  constructor(width: number, height: number, wingspan: number) {
    super(width, height);
    this.wingspan = wingspan;

    console.log(this.wingspan); // 200
    console.log(this.width, this.height); // 90, 30
  }
}

// Bird 인스턴스
const exampleBird = new Bird(90, 30, 200);
console.log(exampleBird.width, exampleBird.height); // 90, 30
```

### protected

`protected`으로 선언되어 있는 함수와 필드는 선언된 클래스 내부와 상속 받은 클래스에서만 접근이 가능하다.
생성된 인스턴스에서 접근할 경우, 오류가 발생한다.

```typescript
class Animal {
  protected type: string;

  constructor(type: string) {
    this.type = type;

    console.log(this.type); // bird
  }
}

class Bird extends Animal {
  wingspan: number;

  constructor(wingspan: number) {
    super("bird");

    this.wingspan = wingspan;

    console.log(this.wingspan); // 200
    console.log(this.type); // bird
  }
}

const exampleBird = new Bird(200);
console.log(exampleBird.wingspan);
// 200

console.log(exampleBird.type);
// Property 'type' is protected and only accessible 
// within class 'Animal' and its subclasses.
```

### private

`private`으로 선언되어 있는 함수와 필드는 선언된 클래스 내부에서만 접근이 가능하다.
이외의 접근은 모두 허용하지 않는다.
주로 외부로 노출되면 안 되는 고유한 아이디 혹은 비밀번호 같은 필드를 선언할 때, `private`을 사용한다.

```typescript
class Animal {
  private id: string;

  constructor(id: string) {
    this.id = id;

    console.log(this.id); // 3oa72c48b7w1p6q4t
  }
}

class Bird extends Animal {
  constructor(id: string) {
    super(id);

    console.log(this.id);
    // Property 'id' is private and only accessible within class 'Animal'.
  }
}

const exampleBird = new Bird("3oa72c48b7w1p6q4t");
console.log(exampleBird.id); 
// Property 'id' is private and only accessible within class 'Animal'.
```

### 접근 제어자의 범위

접근 제어자의 범위는 다음과 같이 정리할 수 있다.

접근 제어자 | 클래스 내부 | 상속 클래스 | 인스턴스 |
-----------|------------|-----------------|----------------|
public | O | O | O |
protected | O | O | X |
private | O | X | X |

## 생성자 매개 변수 - 접근 제어자

앞서 타입스크립트에서는 프로퍼티를 선언하거나 값을 변경하기 위해서는 먼저 필드의 선언이 필요하다고 했는데, 생성자 매개 변수에 접근 제어자를 사용하면 필드를 선언하지 않아도 된다.

```typescript
class Animal {
  constructor(private id: string) {
    this.id = id;
  }
}
```

## 추상 클래스

추상 클래스는 인터페이스와 비슷하게 클래스가 구현할 메소드들을 정의할 수 있다.
이를 추상 메소드라고 하며, 내용 없이 메소드의 이름과 반환 타입을 가진다.
추상 클래스와 추상 메소드를 선언 시에는 `abstract` 키워드를 사용해야 한다.

추상 클래스는 인스턴스 생성이 불가하며, 클래스의 상속을 목적으로 사용한다.
추상 클래스를 상속 받은 클래스는 추상 메소드를 반드시 구현해야 한다.

```typescript
// 추상 클래스
abstract class Shape {
  // 추상 메소드
  abstract draw(): void;

  // 일반 메소드의 정의도 가능하다.
  remove(): void {
    ...
  }
}

// 추상 클래스 상속
class Rect extends Shape {
  // 추상 메소드 구현
  draw() {
    ...
  }
}
```