---
title: 이터레이션 프로토콜
date: 2022-01-24
---

## 이터레이션 프로토콜이란?

ES6부터 추가되었으며, 배열과 같이 데이터를 순회 가능한 자료구조로 만들기 위한 정의된 프로토콜이다.

이터레이션 프로토콜은 두 가지의 포로토콜로 구성된다.

- 이터러블 프로토콜
- 이터레이터 프로토콜

## 이터레이션 프로토콜이 필요한 이유

이터레이션 프로토콜을 알아보기에 앞서, 이터레이션 프로토콜이 필요한 이유에 대해 알아보자.

다음과 같이 각기 다른 형태로 선언되어있는 데이터들이 있다고 가정해보자.

```javascript
const array = new Array();
const map = new Map();
const set = new Set();
```

해당 데이터들의 값은 다음과 같이 공통적으로 for ... of 문 혹은 spread 문법을 통해 조회할 수 있다.

```javascript
for (let value of array) {
    ...
}

console.log(...array);
```

`Array`, `Map`, `Set`은 이터레이션 프로토콜을 준수하기 때문에 공통적으로 사용할 수 있다.
하지만 프로토콜이 없고, 서로 각기 다른 방식을 통해 데이터를 가져와야 한다면 데이터 타입에 따라 코드의 작성이 달라진다.
뿐만 아니라 다양한 문법을 지원해야 하는 브라우저 입장에서도 효율적이지 않다.

서로 각기 다른 방식을 가지는 것을 방지하고, 하나의 방식을 가지기 위해서는 프로토콜이 필요하다고 볼 수 있다.

## 이터러블 프로토콜 (Iterable Protocol)

이터러블 프로토콜을 준수한 객체에 대해 이터러블이라 하며, 이터러블이 되기 위해서는 `@@iterator` 메소드를 구현하거나 프로토타입 체인에 의해 상속되어야 한다.
여기서 `@@iterator`는 `Symbol.iterator`를 의미하며 `Symbol`을 가지고 `Iterator` 객체를 반환한다.

일부 내장 타입의 경우, 내장 이터러블로 `Symbol.iterator`를 가지고 있으며, 대표적인 예는 다음과 같다.

```markdown
Array, String, Map, Set, DOM data structures (NodeList, HTMLCollection)
```

다음과 같이, 배열을 확인해보면 `Symbol.iterator`를 가지고 있는 것을 확인할 수 있다.

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(Symbol.iterator in numbers); // true

/* for ... of문 사용이 가능하다. */
for (let value of numbers) {
    console.log(value);
}
```

## 이터레이터 프로토콜 (Iterator Protocol)

이터레이터 프로토콜을 준수한 객체에 대해 이터레이터라 하며, 이터레이터는 next 메소드를 가진다.
next 메소드는 이터러블을 순회할 수 있으며 value와 done 프로퍼티를 가진 객체를 반환한다.

즉 next 메소드를 통해 이터러블의 값에 접근할 수 있으며, value와 done을 받을 수 있는 객체라고 보면 된다.

```javascript
const numbers = [1, 2];

// 순회할 수 있는 이터레이터를 반환한다.
const iterator = numbers[Symbol.iterator]();

// 이터레이터는 next 메소드를 가진다.
console.log('next' in iterator); // true
```

앞서 설명했던 것처럼 이터레이터의 next 메소드를 호출하면 value와 done를 가진 객체가 반환된다.
value는 현재 순회 중인 이터러블의 값이며, done은 순회의 종료 여부를 나타낸다.

```javascript
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
```

순회가 종료된 이후, next 메소드를 호출하면 다음과 같은 값을 반환한다.

```javascript
console.log(iterator.next()); // { value: undefined, done: true }
```

## 커스텀 이터러블

일반 객체는 `Symbol.iterator` 메소드를 상속 받지 않는다. 즉 for ... of문과 spread 문법을 사용할 수 없다.
일반 객체가 해당 문법들을 사용하기 위해서는 이터레이션 프로토콜을 준수하도록 구현해야 한다.

### 이터러블 구현

다음은 이터레이션 프로토콜을 준수한 객체를 만든 코드로 값이 1씩 증가하며, 5가 넘어갈 경우 종료된다.
`Symbol.iterator`는 next 메소드를 가지는 이터레이터를 반환해야 하며, next 메소드는 value와 done 프로퍼티를 반환하도록 만들어야 한다. 

for ... of문에서는 done 프로퍼티가 true가 될 때까지 반복하고, false가 되면 종료한다. 
done 프로퍼티를 누락하거나 true 값을 설정하지 않아서, 무한 반복 되는 일이 없도록 주의해야 한다.

```javascript
const counter = {
  [Symbol.iterator]() {
    let cnt = 1;
    const max = 5;

    return {
      next() {
        return cnt <= max
          ? { value: cnt++, done: false }
          : { value: undefined, done: true };
      },
    };
  },
};
```

이터레이션 프로토콜을 준수하여 구현한 `counter` 객체는 다른 이터러블과 동일하게 for ... of문과 spread 문법 등을 사용할 수 있다.

```javascript
for (let value of counter) {
    console.log(value); // 1 2 3 4 5
}

console.log(...counter); // 1 2 3 4 5
```