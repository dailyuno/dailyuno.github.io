---
title: 열거형의 문제점
date: 2022-02-20
---

## 들어가며

열거형은 변수들을 하나의 유형으로 묶어서 편리하게 사용할 수 있다.
숫자와 문자열을 할당할 수 있으며, 타입을 예측 가능하도록 하여 오류를 줄일 수 있다.

하지만 열거형은 타입스크립트에서 자체적으로 구현한 기능으로, 트랜스파일링 시 발생하는 문제가 있다.
열거형이 어떠한 문제점을 가지고 있고, 문제점을 해결하기 위해 방법은 무엇인지에 대해 알아보자.

## 열거형의 문제점

먼저 다음과 같이 작성된 열거형 코드가 있다고 가정해보자.

```typescript
enum Status {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
}

let responseStatus = Status.BadRequest;
```

위 코드는 트랜스파일링 시 다음과 같이 자바스크립트 코드로 변환된다.

```typescript
var Status;
(function (Status) {
    Status[Status["BadRequest"] = 400] = "BadRequest";
    Status[Status["Unauthorized"] = 401] = "Unauthorized";
    Status[Status["Forbidden"] = 403] = "Forbidden";
    Status[Status["NotFound"] = 404] = "NotFound";
})(Status || (Status = {}));

let responseStatus = Status.BadRequest;
```

자바스크립트에서 지원하지 않는 열거형을 구현하기 위해, 즉시 실행 함수(IIFE)를 통해 구현된다.
여기서 문제점이 발생하는데, 즉시 실행 함수는 Rollup등의 번들링 과정에서 "사용하지 않는 코드"라고 구분할 수 없어서 Tree-Shaking이 불가능하다.

해당 코드를 `import`하고 사용하지 않더라도 최종 번들링 된 파일에는 포함된다고 볼 수 있다.
이렇게 번들링 된 파일이 커지게 될 경우, 빌드 시간 및 어플리케이션 로딩 속도까지 안 좋은 영향을 미치게 된다.

## 해결방법1 - const enum

`const enum`은 기존 `enum`으로 작성된 코드에서 `const` 키워드를 붙이는 방식으로 사용 가능하다.
사용 방식은 모두 동일하며, 트랜스파일링 시 다른 결과값을 가진다는 차이가 있다.

```typescript
const enum Status {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
}

let responseStatus = Status.BadRequest;
```

위 코드는 다음과 같은 코드로 트랜스파일 된다.

```typescript
let responseStatus = 400 /* BadRequest */;
```

`const enum`은 `enum`과 달리 즉시 실행 함수를 만들지 않으며, 트랜스파일링 시점에서 상수로 할당된다.
앞서 이야기했던 `enum`의 문제점과는 다르게 사용하지 않을 경우, 번들에 포함되지 않는다.

이렇게만 볼 경우, `const enum`은 `enum`의 문제점들을 해결한 형태라고 볼 수도 있다.
하지만 `const enum`은 동일한 파일에서 사용하는 경우에는 문제가 없으나, 다른 모듈에서 사용하려고 할 때 문제가 존재한다.

`const enum`은 트랜스파일링 시 상수로 할당되기 때문에서 다른 모듈에서는 값을 참조할 수가 없어지기에 `tsconfig`에서 `isolatedModules` 옵션을 활성화해줘야한다.

```json
{
  "compilerOptions": {
    "isolatedModules": true
  }
}
```

`const enum`은 바벨로 트랜스파일할 수 없으며, `isolatedModules` 옵션이 활성화 된 경우 큰 의미가 없으니 주의해야 한다.
그 외에도 Next.js 프레임워크에서 지원하지 않아서 사용이 불가하다.

::: tip
1. 바벨은 타입스크립트를 처리할 때, 모든 파일을 모듈로 취급한다.
2. 플러그인을 설치하면 const enum은 바벨로 트랜스파일 가능하다.
:::

## 해결방법2 - 유니온 타입

as 문법을 사용한 타입 단언과 유니온 타입을 통해 비슷하게 열거형의 구현이 가능하다.

```typescript
const Status = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
} as const;

type STATUS = typeof Status[keyof typeof Status];
// 400 | 401 | 403 | 404
```

다음과 같은 코드로 트랜스파일 되며, `import` 후 사용하지 않을 경우 번들에 포함되지 않는다.

```typescript
var Status = {
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404
};
```

정리해보면 기존 열거형의 방식을 사용할 수 있으며, 트랜스파일 시에도 즉시 실행 함수가 생기지 않으므로 Tree-Shaking에서 이점을 가진다.

## 마치며

가급적 다음과 같은 순위로 사용하는 것을 권장하며, 각각의 상황에 맞게 사용하길 바란다.

1. 유니온 타입
2. const enum
3. enum