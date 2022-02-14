---
title: 유니온과 교차 타입
date: 2022-02-14
---

## 들어가며

타입스크립트는 타입을 명시할 때 사용할 수 있는 유니온(|)과 인터섹션(&)을 제공한다.
각각의 연산 키워드를 통해, 코드의 중복을 막을 수 있으며 보다 나은 코드의 작성이 가능하다.

## 유니온 타입 (Union Type)

유니온 타입은 허용하고자 하는 특정 타입들을 명시하기 위해서 사용된다. 
`|`을 사용하여, `A | B | C` 등의 형태로 타입을 연결할 수 있다.

```typescript
function calc(price: string | number) {
  ...    
}
```

위 코드는 `price` 인자의 타입이 문자열이거나 숫자다라는 OR 연산자와 같은 의미를 가진다.
`any` 타입을 사용한다면 문자열과 숫자 이외의 타입을 허용하게 되는데, 유니온은 원하고자 하는 타입만 허용할 수 있어서 유용하다.

유니온을 구성하는 타입들 중 하나일 필요는 없으며, 다음과 같이 양쪽 모두에 속하는 것도 가능하다.
다만 구성하는 타입들 중 하나의 요건은 만족해야 하며, 만족하지 못 할 경우 누락했다고 간주한다.

```typescript
type User = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  department: string;
};

let userOrEmployee: User | Employee;

// User
userOrEmployee = {
  name: "홍길동",
  age: 20,
};

// Employee
userOrEmployee = {
  name: "김의왕",
  department: "BE 개발",
};

// User & Employee
userOrEmployee = {
  name: "김철수",
  age: 20,
  department: "FE 개발",
};
```

## 인터섹션 타입 (Intersection Type)

인터섹션 타입은 구성하는 타입들을 모두 만족하는 타입을 의미한다.
`&`을 사용하여, `A & B & C`의 형태로 타입들을 연결할 수 있다.

```typescript
type User = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  department: string;
};

type EmployeeUser = User & Employee;
```

위 코드는 `User`와 `Employee` 타입의 구성 요소를 모두 만족해야 한다고 인터섹션 타입으로 정의한 타입 변수다.
해당 타입 변수는 다음과 같이 사용할 수 있다.
구성하는 타입들의 조건을 모두 만족해야 하며, 만족하지 못 할 경우가 에러가 발생한다.

```typescript
let employeeUser1: EmployeeUser;

employeeUser1 = {
  name: "김철수",
  age: 20,
  department: "FE 개발",
};
```

## 주의점

인터섹션 타입의 경우 해당 사항이 없으나 유니온 타입에서는 주의해야 할 사항이 있다.
다음과 같이 `User`와 `Employee` 타입을 모두 받는 함수가 있다고 가정해보자.

```typescript
type User = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  department: string;
};

type EmployeeOrUser = User | Employee;

function print(user: EmployeeOrUser) {
  console.log(user.name); 
  console.log(user.age); // Error
}
```

타입스크립트는 `print` 함수를 호출할 때, `User`와 `Employee` 타입 중 어떤 타입이 올지 알 수 없다.
즉 어떤 타입이 오더라도 오류가 발생하지 않도록 하는데, 이 경우에는 범위를 한정하지 않는 이상 공통된 프로퍼티만 사용이 가능하다.

특정 타입의 프로퍼티를 사용하기를 원한다면 함수 내부에서 타입 가드를 통해 타입 범위를 한정해야 한다는 점을 유의하길 바란다.