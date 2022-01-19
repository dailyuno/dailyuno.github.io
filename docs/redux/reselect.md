## 들어가며

`reselect` 라이브러리는 selector를 메모이제이션하기 위해서 만들어졌고, 일반적으로 Redux에서 사용하지만 일반 Js에서도 사용할 수 있다.

selector 코드를 외부로 분리하더라도, `filter`와 `map` 등을 사용하는 경우에는 상태 변화가 없더라도 selector는 계속 실행되며, 렌더링이 발생한다.

```javascript
const getUsers = (state) => {
  return state.users.filter((user) => user.age > 20);
};
```

이 때 `reselect`의 `createSelector`를 사용하면 계속 렌더링되는 문제를 방지할 수 있다.

다음 명령어를 통해 라이브러리를 설치하자.

```markdown
npm install reselect
```

`createSelector`는 다음과 같이 다양한 방법으로 사용할 수 있다.

```javascript
```