# React란?

React는 페이스북에서 개발한 UI 라이브러리이며, Angular, Vue와는 다르게 UI 기능만 제공하고 있다. 
전역 상태 관리, 라우팅, 빌드 시스템 등과 같은 다른 기능들은 직접 구축해야 한다.

# React를 사용하는 이유
기존에는 데이터를 변경할 경우, DOM 또한 직접 업데이트해 주는 작업을 해야 했다. 
Facebook 혹은 Youtube와 같이 웹 사이트 내 요소들이 많아질 경우, 퍼포먼스를 신경 써야 해서 난이도가 기하급수적으로 복잡해지며 코드의 관리가 어려워지는 문제가 발생한다. 

React는 이러한 문제점들을 해결할 수 있는 Virtual DOM (가상 돔)을 통해, 데이터가 변경될 경우, 자동으로 UI를 업데이트를 진행한다. 뿐만 아니라 가상 돔은 실제로 화면에 렌더링을 진행하는 것이 아니여서 돔을 직접 업데이트 하는 것보다 상대적으로 빠르다는 장점이 있다.

물론 단순한 웹 사이트의 경우, 기존 방식으로 개발하는게 나을 수도 있으나 확장성과 협업 등을 고려한다면 React/Vue/Angular 사용을 하는게 좋다고 생각한다.

# React vs Vue

React와 Vue의 가장 큰 차이점 중 하나는 데이터 바인딩 방식이다.
React는 단방향 바인딩 방식이지만, Vue의 경우 양방향 바인딩 방식으로 서로의 바인딩 방식이 다르다는 것을 알 수 있다. 바인딩 방식의 차이는 코드 작성에 큰 영향을 미치는데 어떠한 점들이 다른지 예제를 통해 알아보자.

```html
<template>
  <div class="app">
    <input type="text" v-model="name">
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
```

Vue로 작성된 코드로 `input`에 값을 입력할 경우, 아래에 입력한 내용이 그대로 나오는 프로그램이다. 여기서 특이한 점은 따로 이벤트 처리 코드를 작성하지 않았음에도 불구하고, `v-model` 속성만 넣어줬는데 자동으로 `name`에 값이 들어간 것을 볼 수 있다.

React로 동일한 프로그램을 만들어보고 어떠한 점이 다른지 알아보자.

```javascript
function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <input type="text" onKeyUp={e => setName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  );
}
```

React 16.8부터 제공하는 Hooks이라는 기능을 사용하여 만들었는데, Vue와 비교했을 때는 이해하기 어려울 수 있다. 간단하게 `useState`라는 함수는 Hooks 기술의 일부로 변수 선언과 이 변수를 변경하는 함수를 제공한다고 보면 된다.

코드를 보면 알겠지만 Vue와는 다르게 `input`에 `keyup` 이벤트가 발생할 경우, `setName`이라는 함수를 통해 `name` 값을 변경하는 것을 알 수 있다. `Array`와 `Object`의 경우에는 State 값을 변경하는 방식에서 더 큰 차이를 보이는데, 이러한 점들이 코드 작성에 큰 영향을 미친다고 보면 된다.

# 프로젝트 만들기

프로젝트 만들기에 앞서 `Node >= 14.0.0`와 `npm >= 5.6` 버전이 준비 될 수 있도록 node와 npm의 설치 혹은 업데이트가 필요하다. 아래의 명령어를 통해 React 프로젝트를 설치할 수 있으며, 실행할 수 있다.

```bash
npx create-react-app my-app
cd my-app
npm start
```