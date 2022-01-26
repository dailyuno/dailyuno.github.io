---
title: this
date: 2022-01-26
---

## 들어가며 

자바스크립트에서는 이벤트를 처리하거나 객체의 프로퍼티 값을 변경할 때 `this` 키워드를 사용해본 경험이 있을 거다. 하지만 `this`가 어떻게 생기는지, 왜 값이 달라지는지에 대해서는 설명하기 어려울 수 있다. `this`에 대해 자세히 알아보는 시간을 가지려고 한다.

## this란?

자바스크립트에서 `this`는 자바와 같은 언어의 `this`와는 다르게 작동한다.
자바에서 `this`는 자기 자신 인스턴스를 가리키는 참조 변수로 쓰인다.

하지만 자바스크립트에서 `this`는 함수를 호출하는 방법에 의해서 값이 결정되는데, 자기 자신을 가리키는 것은 아니다.
어디서 선언되었는지가 중요한게 아니라 함수가 어디서 호출 됐는지에 따라 참조하는 값이 달라진다.

간단하게 `this`에 대해 요약을 해보자면 다음과 같다.

- 별다른 선언 없이 암묵적으로 생성된다. 
- 함수 호출 시, 암묵적으로 전달 받는다.
- 위치에 제약을 받지 않고, 어디에서나 사용할 수 있다.

`this`의 추상적인 내용들에 대해서만 설명했는데, 어떤 값을 참조하는지 알기 위해서는 다음 규칙들을 알아야 한다.

1. 기본 바인딩
2. 암시적 바인딩
3. 명시적 바인딩
4. New 바인딩
5. 이벤트 바인딩

## 기본 바인딩

기본 바인딩은 다른 바인딩 규칙들에 해당하지 않을 경우, 기본적으로 적용되는 것을 의미한다.
아래 코드를 보면 `this`는 함수 내부가 아니더라도 사용할 수 있으며, 콘솔을 통해 출력해보면 `window` 객체가 나오는 걸 확인할 수 있다.
즉 `this`는 `window` 객체가 기본 바인딩 된다는 것을 알 수 있다.

```javascript
console.log(this); // window
console.log(this === window); // true
```

그리고 신기하게도 전역 함수를 만들거나 var를 통해서 전역 변수를 선언하면 동일한 이름의 전역 객체 프로퍼티가 만들어진다.
다음과 같이 함수 내부에서 `this`를 통해서 참조할 수 있다.

```javascript
var blog = "dailyuno";
console.log(window.blog === blog) // true
console.log(this.blog === blog) // true

function print() {
  console.log(this.blog); // dailyuno
}
```

## 암시적 바인딩

암시적 바인딩에서는 객체의 메소드인지를 확인한다. 
다음과 같이 user 객체가 있고 print라는 메소드를 가진다고 가정해보자.

```javascript
const user = {
  name: "user1",
  age: 20,
  print: function () {
    console.log(`${this.name}은 ${this.age}살입니다.`);
    // user1은 20살입니다.
  },
};

user.print();
```

print 메소드에서는 user 객체의 프로퍼티를 사용하고 있는데, 이는 user 객체가 print 메소드를 소유한다고 보고, print 메소드 호출 시 user 객체가 `this`에 바인딩 되기 때문이다.

그럼 다음과 같이 user 객체가 또 다른 객체인 friend를 프로퍼티로 가지고, friend 객체가 print 메소드를 가지는 경우엔 어떻게 작동할까?

```javascript
const user = {
  name: "user1",
  age: 20,
  friend: {
    name: "friend1",
    age: 24,
    print: function () {
      console.log(`${this.name}은 ${this.age}살입니다.`);
    },
  },
};

user.friend.print();
```

실행 결과는 print 메소드를 friend가 소유한다고 보고, friend 객체가 `this`에 바인딩 되며, friend의 프로퍼티 값이 출력된다.
물론 user 객체도 friend 객체를 가지고 있으니, print 메소드를 소유한다고 볼 수도 있지만 `this`에 바인딩 되는 것은 직접적으로 메소드를 소유하고 있는 friend 객체다.

이제 함수를 외부에서 선언하고, 객체에서는 참조하기만 할 경우 어떻게 작동하는지를 알아보자.

```javascript
function print() {
  console.log(`${this.name}은 ${this.age}살입니다.`);
  // user1은 20살입니다.
}

const user = {
  name: "user1",
  age: 20,
  print: print,
};

user.print();
```

print 메소드를 실행해보면 알겠지만 객체가 메소드를 직접 소유하지 않고 있는데, 객체는 `this`에 바인딩 된다.
즉 객체는 메소드를 직접적으로 소유하지 않고 참조만 하더라도, 메소드 호출 시 객체를 `this`에 바인딩 한다는 것을 알 수 있다.

## 명시적 바인딩

암시적 바인딩에서는 객체를 `this`에 바인딩하기 위해, 메소드를 소유하거나 참조가 필요하다.
그런데 객체를 다른 곳에서 사용해야 하는 상황이 생길 수도 있는데, 이 때 명시적 바인딩이 필요하다.

명시적 바인딩은 `call`과 `apply` 그리고 `bind` 메소드를 사용해야 한다.
`call`과 `apply`는 사용법이 유사한데, 바인딩 할 객체를 첫 번째 인자로 넘긴다.

다음 예제를 통해 알아보자.

```javascript
function print() {
  console.log(`${this.name}은 ${this.age}살입니다.`);
}

const user1 = {
  name: "user1",
  age: 20,
};

const user2 = {
  name: "user2",
  age: 30,
};

print.call(user1); // user1 객체를 바인딩한다.
print.apply(user2); // user2 객체를 바인딩한다.
```

위 코드는 `call`과 `apply`를 사용해서 print 함수를 호출할 때 `this`에 각각 user1과 user2 객체를 바인딩하여 호출한다.
이렇게 단순히 바인딩할 객체만 넘길 경우에는 `call`과 `apply`는 차이가 없으므로, 넘어가도 무방하다.

그리고 `call`과 `apply`는 다음과 같이 객체가 아닌 값을 바인딩할 수 있다.

```javascript
function print() {
  console.log(this);
}

print.call(1); // Number {1}
print.call("a"); // String {'a'}
print.call(true); // Boolean {true}
print.call(null); // Window
print.call(undefined); // Window
print.call([]); // []
print.call({}); // {}
```

특이한 점은 `Number`, `String`, `Boolean`, `BigInt` 원시 값을 전달할 경우, 해당하는 객체의 인스턴스로 생성되어 `this`에 바인딩 되고, `null`과 `undefined`는 인자로 넘길 경우, `window` 객체가 `this`에 바인딩 된다는 점이다.
이 외의 값들은 따로 변경되지 않고 바인딩이 이루어진다.

이제 `bind` 메소드는 어떻게 바인딩을 하는지 알아보자.

```javascript
function print() {
  console.log(this);
}

const user = {
  name: "user1"
};

const bindPrint = print.bind(user);

bindPrint(); // user 객체
```

`bind` 메소드는 함수를 호출할 때마다 바인딩할 객체를 넘겨주는 `call`과 `apply` 메소드와는 다르다.
바인딩할 객체를 넘겨주는 것은 동일하지만 함수가 실행되는 것은 아니며, 새로운 함수를 반환한다.

```javascript
const user1 = {
  name: "user1"
};

const user2 = {
  name: "user2"
};

const bindPrint1 = print.bind(user1);
const bindPrint2 = print.bind(user2);
const bindPrint3 = bindPrint1.bind(1); 
bindPrint3(); // 여전히 user1 객체가 this에 바인딩 된다.
```

새롭게 바인딩 된 함수는 여러 개를 만들 수 있으며, 각기 다른 용도로 사용할 수 있다.
하지만 한 번 바인딩 된 함수는 다음과 같이 여러 번 바인딩을 할 수 없다.
뿐만 아니라 `bind` 메소드를 통해 만들어진 함수는 `call`과 `apply`를 통해 바인딩할 객체를 넘겨주더라도 무시된다.

## New 바인딩

`new` 연산자를 사용해 객체를 만들 수 있다. 
`new` 연산자로 새롭게 생성된 객체는 함수 내부에 암묵적으로 빈 객체 `{}`를 만들고, `this`에 바인딩한다.

```javascript
function User() {
  console.log(this); // User {}
}

const user = new User(); // User {}
```

위 코드와 같이, `new` 연산자로 만든 객체는 빈 User 객체가 `this`에 바인딩된 것을 볼 수 있다.
바인딩 된 객체의 이름은 함수의 이름과 동일하며, 함수에서 따로 반환하지 않더라도 `this`를 반환한다.

그럼 값을 반환할 경우, 어떤 값이 반환될까?

```javascript
function User() {
  return 1;
}

const user = new User(); // User {}
```

`new` 연산자로 만든 객체는 함수 내부에서 값을 반환하더라도, 반환한 값이 원시 값일 경우 무시하고 `this`를 반환한다.

명시적으로 값을 반환하고 싶은 경우에는 다음과 같이 원시 값이 아닌, 객체를 반환해야 한다.

```javascript
function User() {
  return { name: 'new user' };
}

const user = new User(); // { name: 'new user' }
```

## 이벤트 바인딩

먼저 이벤트 바인딩에 대해 알기 위해서는 이벤트 처리에 대한 이해가 필요하다.
예를 들어, 클릭과 같은 이벤트를 처리하기 위해서는 다음과 같이 `addEventListener`를 통해, 등록하고자 하는 DOM에 이벤트 리스너를 등록해야 한다.

이벤트 리스너의 등록 방법은 다음과 같다.

```javascript
document
  .querySelector("body")
  .addEventListener("click", function () {
    /* 클릭 시 실행 */
  });
```

이벤트가 발생했을 때, 이벤트를 처리하는 함수를 이벤트 핸들러라고 하는데, 이벤트 핸들러에서는 이벤트가 발생한 요소가 `this`에 바인딩 된다.

여기서 요소는 핸들러에 전달된 이벤트 객체의 `currentTarget` 프로퍼티와 동일하다.

```javascript
document
  .querySelector("body")
  .addEventListener("click", function (e) {
    console.log(this); // body
    console.log(e.currentTarget === this) // true
  });
```

## 바인딩 우선순위

지금까지 함수를 호출할 때 `this` 바인딩 규칙에 대해 알아보았다. 
그런데 여러 개의 규칙이 중복될 경우, 어떤 규칙이 먼저 적용될까?
궁금증을 해결하기 위해, 어떤 규칙이 우선순위로 적용되는지 알아보자.

암시적 바인딩과 명시적 바인딩은 앞서 설명했던 것처럼 명시적 바인딩이 우선시되므로 생략하겠다.

### 이벤트 바인딩 vs 암시적 바인딩

먼저 이벤트 바인딩과 암시적 바인딩은 어떤게 우선적으로 적용되는지 알아보자.

```javascript
const handler = {
    onClick: function(e) {
        console.log(this); // body
        console.log(e.currentTarget === this) // true
    }
}

document
  .querySelector("body")
  .addEventListener("click", handler.onClick);
```

객체 내부에서 선언한 메소드를 이벤트 핸들링 함수로 넘기면 body 영역을 클릭했을 때 `this`에는 body가 출력된다.
즉 이벤트 바인딩이 암시적 바인딩보다 우선시 된다는 것을 알 수 있다.

### 이벤트 바인딩 vs 명시적 바인딩

그럼 이벤트 바인딩은 명시적 바인딩 보다 우선시될까?
미리 만들어둔 `onClick` 메소드에 빈 객체를 bind하고, body 영역을 클릭해보자.

```javascript
const handler = {
    onClick: function(e) {
        console.log(this); // {}
        console.log(e.currentTarget === this)  // false
    }
}

document
  .querySelector("body")
  .addEventListener("click", handler.onClick.bind({}));
```

body 영역을 클릭하면 `this`에는 빈 객체가 바인딩되어 콘솔에 `{}`와 false가 출력된다.
명시적 바인딩은 이벤트 바인딩보다 우선순위가 높음을 알 수 있다.

### New 바인딩 vs 명시적 바인딩

new 바인딩과 명시적 바인딩은 어느쪽이 우선순위가 높은지 알아보자.
`call`과 `apply`를 통해서는 비교가 어려우니 `bind` 메소드를 통해, 새로운 함수를 만들고 new 연산자로 객체를 생성해서 비교해보자.

```javascript
function post(title) {
  this.title = title;
}

const postObj1 = {content: "empty"};
const bindPost = post.bind(postObj1);
bindPost("테스트1");

const postObj2 = new bindPost("테스트2");

console.log(postObj1); // {content: "empty", title: '테스트1'}
console.log(postObj2); // post {title: '테스트2'}
```

`bind` 메소드로 만든 `bindPost` 함수는 호출하면 content 프로퍼티를 가지게 된다.
하지만 new 연산자를 통해 객체를 생성하면 content 프로퍼티가 사라지는 것을 볼 수 있다.
이를 통해 new 바인딩은 모든 바인딩 규칙 중에서 제일 우선순위가 높다는 것을 알 수 있다.

### 우선순위 정리

1. new 연산자로 함수를 호출했는가?
- 새롭게 생성된 객체가 `this`에 바인딩 된다.

```javascript
const card = new Card(); // Card {} === this (true)
```

2. call과 apply로 함수를 호출하거나 bind를 통해 새로운 함수를 만들어 호출했는가?
- 인자로 넘긴 객체가 `this`에 바인딩 된다.

```javascript
const obj = {};

print.call(obj); // obj === this (true)
print.apply(obj); // obj === this (true)
print.bind(obj)(); // obj === this (true)
```

3. 이벤트 핸들러로 호출됐는가?
- 이벤트가 발생한 요소가 `this`에 바인딩 된다.

```javascript
document.body.addEventListener('click', function() {
  ... // document.body === this (true)
});
```

4. 객체 내부에 있는 메소드인가?
- 해당 객체가 `this`에 바인딩 된다.

```javascript
const obj = {
  print: function() {
    // obj === this (true)
  }
}
```

5. 그 외의 경우에는 기본값이 바인딩 된다.
- 윈도우 객체가 `this`에 바인딩 된다.

```javascript
function print() {
  return this;
}

print(); // window === this (true)
```