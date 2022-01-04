# 스코프(Scope)란?

스코프는 자바스크립트 뿐만 아니라 모든 프로그래밍 언어에서 사용되는 개념이다. 
영어가 아닌 우리 말로는 "범위"라는 뜻을 가지고 있는데, 간단하게 변수에 접근할 수 있는 범위라고 보면 된다.

기존 자바스크립트에서는 전역 스코프(global scope)와 함수 스코프(function scope)라는 2가지의 타입이 있었는데, ES6에서 `const`와 `let`이 추가 된 이후로 블록 스코프(block scope)라는 개념이 새로 추가 되었다.

# 전역 스코프
위치의 제약을 받지 않고 어디에서나 접근 가능하다.
아래의 코드를 보면 **age**라는 변수가 어디에서나 접근 가능하며, 동일한 값이 출력되는 것을 볼 수 있다.
**age**와 **getAge**처럼 선언된 것을 전역 스코프라고 보면 된다.

```javascript
var age = 20;

function getAge() {
    console.log(age);
}

getAge(); // 20
console.log(age); // 20
```

# 함수 스코프
함수 내에서의 범위이며 자신과 하위 범위 내에서만 접근 가능하다.
전역으로 선언된 **age** 변수가 **getAge** 함수 안에서 새롭게 덮어 씌어지는 것을 볼 수 있다.
이런 경우 **getAge** 안에서 호출한 **age**는 새롭게 선언된 값인 40을 출력하고, 전역에서 호출한 **age**는 기존에 선언된 값 그대로 20을 출력한다.

```javascript
var age = 20;

function getAge() {
    var age = 40;
    console.log(age);
}

getAge(); // 40
console.log(age); // 20
```

# 블록 스코프
ES6에서는 `var`가 가진 문제점을 해결하기 위해 `let`과 `const`라는 개념이 추가 되었다. 
`var`를 사용할 경우에는 코드 블록 (if, for, while, try/catch 등) 안에서 작성되는 변수들이 범위 밖에서도 호출 가능한 문제가 존재했다. 
`let`과 `const`를 사용할 경우에는 이러한 문제들을 방지할 수 있다.

```javascript
if (true) {
    var age = 20;
    let year = 2020;
}

console.log(age); // 20
console.log(year); // 참조 에러
```

# 호이스팅
var로 정의된 변수의 경우, 해당 변수가 속한 스코프 범위의 최상단으로 올라간다. 
이를 호이스팅(hoisting)이라고 부르며, 아래 예제를 통해 호이스팅에 대해 알아보자.

```javascript
console.log(age); // 참조 에러
```

선언되지 않은 **age** 변수를 호출할 경우, 참조 에러가 발생하는 것을 확인할 수 있다.

```javascript
console.log(age); ??
var age = 20;
```

변수가 선언되기 전에 **age**를 호출하였음에도 불구하고 해당 코드는 에러가 발생하지 않는다.
작성된 코드는 **age**를 먼저 호출하고 그 이후에 **age**를 선언하였는데 undefined가 출력 된다.
실제로 코드는 아래와 같다고 생각하면 된다.

```javascript
var age = undefined;
console.log(age); // undefined
age = 20;
```

변수의 선언 자체만 최상단에서 이루어지며, 값의 할당은 원래의 위치에서 할당 된다.
이제 `let`과 `const`는 어떻게 작동하는지 알아보자.

```javascript
console.log(age);
let age = 20;

console.log(year);
const year = 2022;
```

`let`과 `const`를 사용할 경우, `var`와 달리 **age**와 **year**값이 출력되지 않고, 참조 에러가 발생하는 것을 확인할 수 있다.
이렇게만 보았을 때는 `let`과 `const`로 선언 된 변수는 호이스팅 되지 않는다고 생각할 수 있다.
하지만 `let`과 `const`는 `var`와 동일하게 똑같이 호스팅이 되며, 변수가 선언 된 위치와 호이스팅 된 위치 사이에서 사용하지 못 한다고 보면 된다.
이러한 사이 구간을 Temporal Dead Zone이라고 한다.

# Temporal Dead Zone
전역 스코프에서의 예제들만 보았을 때는 Temporal Dead Zone이 왜 필요한지 모를 수도 있다.
아래 함수 스코프 환경에서 작동하는 예제를 통해 알아보자.

```javascript
const age = 20;

function getAge() {
    console.log(age);
}

getAge(); // 20
```

**getAge** 함수를 실행하면 전역 변수 **age**의 값인 20이 출력되는 것을 볼 수 있다.
그럼 이제 **getAge** 함수 안에서 **age** 변수를 호출하고 선언하면 어떻게 되는지 알아보자.

```javascript
const age = 20;

function getAge() {
    console.log(age); // 참조 에러
    const age = 40;
}

getAge();
```

**age** 변수를 출력하였으니 20이 호출될 것처럼 보이지만 해당 코드는 참조 에러가 발생하게 된다.
그 이유는 바로 **getAge** 함수 안에서 **age** 변수를 다시 선언하여 호이스팅이 발생되었기 때문이다.
**var** 변수를 사용할 때와 다르게 먼저 에러가 발생하게 되니, Side Effect을 줄일 수 있다.