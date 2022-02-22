---
title: 열거형
date: 2022-02-09
---

## 들어가며

자바스크립트로 개발을 하면서 열거형과 비슷한 형태의 객체를 만들어 본 경험이 있을텐데, 열거형은 키를 가지는 값들의 집합이라고 볼 수 있다.

열거형은 문자열 -> 문자열, 문자열 -> 숫자로 매핑하는 두 가지가 존재한다.
문자열과 숫자를 제외한 나머지 값들은 매핑 되지 않으며 오류가 발생한다.

- [숫자 열거형](#숫자-열거형)
- [문자열 열거형](#문자열-열거형)

## 숫자 열거형

기본적으로 타입스크트립트에서 열거형은 숫자형으로 다음과 같이 값을 명시하지 않고 사용할 수 있다.

```typescript
enum Day {
  Monday,
  TuesDay,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
```

값을 명시하지 않는 경우에는 0부터 시작하여 1씩 증가하며 자동으로 숫자가 할당 된다.
위에서 값을 명시하지 않는 코드는 실제로 아래 코드와 동일하게 동작하며, 트랜스파일링 시에도 동일하다.

```typescript
enum Day {
  Monday = 0,
  TuesDay = 1,
  Wednesday = 2,
  Thursday = 3,
  Friday = 4,
  Saturday = 5,
  Sunday = 6
}
```

수동으로 값을 명시하고 싶을 경우, 다음과 같이 Key = Value 형식으로 명시할 수 있다.

```typescript
enum Status {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404
}
```

모든 값을 명시할 필요는 없으며, 일부만 값을 명시할 수 있다.
일부만 값을 명시하는 경우에는 이전 키의 값을 참조하여 1을 더한 값이 할당 된다.
이전 값이 없는 경우에는 앞서 설명했던 것처럼 0부터 값이 시작된다.

```typescript
enum Day {
  Monday = -10,
  TuesDay, // -9
  Wednesday, // -8
  Thursday = 10,
  Friday, // 11
  Saturday, // 12
  Sunday, // 13
}
```

숫자 열거형의 키와 값은 객체의 프로퍼티에 접근하는 방법으로 접근할 수 있다.

```typescript
Day.Monday // 0
Day["Monday"] // 0
Day[0] // Monday - 값을 통해 키를 가지고 온다.
```

## 문자열 열거형

숫자 열거형과는 다르게 자동으로 값이 할당되는 기능이 없어서, 모두 값을 명시해야 한다.

```typescript
enum Color {
  Red = "#f44336",
  Green = "#009688",
  Blue = "#2196f3",
}
```

숫자 열거형과는 다르게 값을 통해서 키를 가지고 오는 방법은 불가하고, 키를 통해서만 값을 가지고 올 수 있다.

```typescript
Color.Red // #f44336
Color["Red"] // #f44336
Color["#f44336"] // undefined
```

숫자 열거형과 문자열 열거형은 각각 트랜스파일링 시 다음과 같이 서로 다르게 변환되는데, 문자열 열거형에서 값을 통해서 키를 가지고 오는 역매핑이 불가한 이유라고 볼 수 있다.

```javascript
// 숫자 열거형
var Color;
(function (Color) {
    Color[Color["Red"] = 255] = "Red";
    Color[Color["Green"] = 255] = "Green";
    Color[Color["Blue"] = 0] = "Blue";
})(Color || (Color = {}));

// 문자열 열거형
var Color;
(function (Color) {
    Color["Red"] = "255";
    Color["Green"] = "255";
    Color["Blue"] = "0";
})(Color || (Color = {}));
```