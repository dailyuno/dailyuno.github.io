---
title: 타입 간의 관계
date: 2022-02-27
---

## 서브 타입

타입 A가 타입 B에 할당 가능할 경우, A는 B의 서브 타입이다.
이 경우, B가 필요한 곳에는 A를 사용할 수 있다는 말이 된다.

예를 들어, 다음과 같이 도형을 만들기 위한 클래스가 존재한다고 가정해보자.

```typescript
// 부모 클래스
class Shape {
  type: string;

  constructor(type: string) {
    this.type = type;
  }
}

// 자식 클래스
class Rect extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super("rect");
    this.width = width;
    this.height = height;
  }
}
```

`Rect` 클래스는 `Shape` 클래스를 상속 받으며, 메소드와 프로퍼티를 사용할 수 있다.

```typescript
const shape = new Shape("shape");
const rect = new Rect(100, 100);

let example: Shape;

example = shape;
example = rect;
```

위 코드를 보면 알겠지만 변수 `example`의 타입은 `Shape`으로 명시되어있다.
하지만 `example`에 `Shape` 인스턴스 뿐만 아니라 `Rect` 인스턴스도 할당 가능한 것으로 알 수 있다.

이를 통해, 우리는 `Rect`는 `Shape`의 서브 타입이라는 걸 알 수 있다.
즉 정리하자면 `Rect`를 사용하는 곳에는 `Shape`을 사용할 수 있다.

타입스크립트에 존재하는 타입들을 기준으로 설명하자면 다음과 같다.

- 배열은 객체의 서브 타입이다
- 튜플은 배열의 서브 타입이다
- 배열과 튜플을 포함한 모든 타입은 `any`의 서브 타입이다.
- `never` 타입은 모든 타입의 서브 타입이다.

## 슈퍼 타입

슈퍼 타입은 서브 타입과는 상반되는 개념이라고 볼 수 있다.
타입 A가 타입 B에 할당 가능할 경우, B는 A의 슈퍼 타입이다.
앞서 서브 타입을 설명했던 코드를 기준으로 설명하면 `Shape`은 `Rect`의 슈퍼 타입이 된다.

타입스크립트의 타입을 기준으로 설명하면 다음과 같다.

- 객체는 배열의 슈퍼 타입이다.
- 배열은 튜플의 슈퍼 타입이다.
- `any` 타입은 모든 타입의 슈퍼 타입이다.
- `never` 타입은 슈퍼 타입이 될 수 없다.

## 타입 관계 정리

앞서 설명한 타입간의 관계를 정리해보면 다음과 같다고 볼 수 있다.

![타입 관계](https://objectcomputing.com/files/2815/7237/9988/1911-sett-img01.png)

## 가변성

타입스크립트의 타입 시스템에는 가변성이라는 개념이 존재하는데, 다음과 같이 네 종류가 존재한다.

### 불변성 (invariance)

특정 타입 A를 원하는 경우를 의미한다.

```typescript
type Invariance<V> = (v: V) => V;

function exampleInvariance<U, T extends U>(
  shape: T,
  rect: U,
  invarianceShape: Invariance<T>,
  invarianceRect: Invariance<U>
) {
  rect = shape; // 성공
  shape = rect; // 에러

  invarianceRect = invarianceShape; // 에러
  invarianceShape = invarianceRect; // 에러
}
```

매개 변수와 동일한 유형을 반환하는 함수는 불변하다고 볼 수 있다.

### 공변성(convariance)

특정 타입 A와 같거나 A의 서브 타입을 의미한다.

```typescript
type Covariance<V> = () => V;

function exampleCovariance<U, T extends U>(
  shape: U,
  rect: T,
  covarianceShape: Covariance<U>,
  covarianceRect: Covariance<T>
) {
  rect = shape; // 성공
  shape = rect; // 에러

  covarianceRect = covarianceShape; // 성공
  covarianceShape = covarianceRect; // 에러
}
```

타입 T는 U와 관계 없는 형식이 될 수 있기에, 타입 U는 타입 T가 될 수 없으므로 에러가 발생한다.
타입스크립트에서 객체와 클래스는 공변한다.

### 반공변성(contravariance)

특정 타입 A와 같거나 A의 슈퍼 타입을 의미한다.

```typescript
type Contravariance<V> = (v: V) => void;

function exampleContravariance<U, T extends U>(
  shape: T,
  rect: U,
  contravarianceShape: Contravariance<T>,
  contravarianceRect: Contravariance<U>
) {
  rect = shape; // 성공
  shape = rect; // 에러

  contravarianceRect = contravarianceShape; // 에러
  contravarianceShape = contravarianceRect; // 성공
}
```

`strictFunctionTypes`가 활성되었을 때, 위와 같이 작동한다.
함수의 매개 변수는 반공변한다고 볼 수 있다.

### 이변성(bivariance)

공변성과 반공변성을 모두 가진다.

```typescript
type Bivariance<V> = {
  render(v: V): void;
};

function exampleBivariance<U, T extends U>(
  shape: T,
  rect: U,
  bivarianceShape: Bivariance<T>,
  bivarianceRect: Bivariance<U>
) {
  rect = shape;
  shape = rect;

  bivarianceRect = bivarianceShape;
  bivarianceShape = bivarianceRect;
}
```