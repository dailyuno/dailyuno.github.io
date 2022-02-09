---
title: 열거형
date: 2022-02-09
---

## 들어가며

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