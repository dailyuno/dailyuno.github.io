## Redux 설치

```markdown
npm install react-redux
```

## Redux 개념

Redux는 아래 그림과 같은 구조로 상태값을 관리한다.

![Redux Flow](../.vuepress/public/images/redux-flow.png)

예를 들어, 사용자가 화면에서 로그인을 한다고 가정했을 때, Redux가 어떻게 작동하는지 알아보자.

1. 사용자가 로그인 시, 서버에서 확인 후 문제가 없다면 유저 정보를 가지고 온다.
2. 전역에서 사용할 수 있도록 정보를 저장하는 `Action` 함수가 실행 된다.
3. `Middleware`가 실행되며, 에러가 발생할 경우 서버로 전송하거나 `Action`을 무효 처리한다.
4. `Reducer`는 `Action`을 처리하고, 새로운 상태값을 만든다.
5. 새롭게 만들어진 상태값이 `Store`에 반영 되고, 변경된 값은 `View`에 반영 된다.
6. 화면에서 로그인 된 상태로 나오며, 모든 컴포넌트는 유저 정보에 접근할 수 있게 된다.

여기서 `View`는 사용자에게 보여지는 화면을 말하며, 컴포넌트라고 보면 된다.
이제 앞서 나온 Redux의 네 가지 요소들이 어떤 역할을 하고, 어떻게 사용하는지 자세하게 알아보자.

## Action

## Middleware

## Reducer

## Store

## Connect?

```javascript
export default connect(mapStateToProps, mapDispatchProps)(componentName);
```