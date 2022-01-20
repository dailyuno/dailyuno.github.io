---
title: connect
date: 2022-01-18
---

## 들어가며

기존에는 컴포넌트에서 Redux의 상태값 사용과 dispatch 함수를 실행하기 위해서는 `connect` 함수의 사용이 필요했는데,
Redux Hooks인 `useSelector`와 `useDispatch`의 등장으로 신규 프로젝트에서는 사용할 필요가 없어졌다.

하지만 여전히 2019년 이전에 만들어진 프로젝트의 경우, `connect` 함수를 사용해서 코드를 작성되었을 거라고 생각한다.
기존 React 프로젝트 유지보수를 하게 된다면 `connect` 함수의 이해가 필요하다.

`connect` 함수는 고차 컴포넌트 방식으로 사용되는데, 고차 컴포넌트(Higher Order Component)에 대해 모르는 경우, 간단하게 찾아보는 걸 권장한다.

## connect 알아보기

`connect` 함수는 컴포넌트가 Redux 스토어에 접근해서 상태값을 사용할 수 있도록 도와주고, `dispatch` 함수를 호출할 수 있도록 Redux와 컴포넌트를 연결해주는 역할을 한다.

다음과 같이 네 개의 인자를 받을 수 있다. 

```javascript
import { connect } from "react-redux";

connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(component);
```

### mapStateToProps

`mapStateToProps`는 스토어의 상태가 변경될 때마다 호출되며, 두 개의 인자를 받을 수 있다.
`state`는 스토어의 데이터들이며, `ownProps`는 부모 컴포넌트가 넘겨준 데이터들이다.

```javascript
mapStateToProps(state, ownProps);
```

다음과 같이 `state`를 사용할 수 있으며, 이렇게 반환된 값들은 컴포넌트에 전달 된다.

```javascript
const mapStateToProps = (state) => ({
  posts: state.posts,
  page: state.page,
});
```

### mapDispatchToProps

`mapDispatchToProps`는 한 개의 인자를 받으며, `dispatch` 함수가 넘어온다.
다음과 같이 반환한 값들은 컴포넌트에서 사용할 수 있으며, 세 가지 방법으로 반환할 수 있다.

첫 번째 방법은 `dispatch`를 받아와서, 각각의 메소드를 감싸서 사용하는 방법이다.
메소드마다 `dispatch`로 감싸야 하는 번거로움이 있다.

```javascript
import { createPost, updatePost, deletePost } from "../modules/post";

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (post) => dispatch(deletePost(post)),
  };
};
```

두 번째 방법은 redux의 `bindActionCreators` 함수를 이용하는 방법이다.
`dispatch`가 반복되는 코드를 줄일 수 있으며, 자동으로 `dispatch`가 감싸진 상태로 전달된다.

```javascript
import { bindActionCreators } from "redux";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      createPost: (post) => createPost(post),
      updatePost: (post) => updatePost(post),
      deletePost: (post) => deletePost(post),
    },
    dispatch
  );
```

마지막으로 세 번째 방법은 객체로 전달하는 방식이다.
`mapDispatchToProps`는 함수가 아니고 객체일 경우, `bindActionCreators` 함수를 `connect` 함수에서 대신 수행합니다.
앞선 코드들에 비해 간결해진 것을 볼 수 있다.

```javascript
const mapDispatchToProps = {
  createPost: (post) => createPost(post),
  updatePost: (post) => updatePost(post),
  deletePost: (post) => deletePost(post),
};
```

### mergeProps

`mergeProps`는 세 개의 인자를 받게 되는데, 각각 아래와 같다. 

- stateProps - `mapStateToProps`에서 반환한 값
- dispatchProps - `mapDispatchToProps`에서 반환한 값
- ownProps - 부모 컴포넌트에서 전달한 값

다음과 같이 사용할 수 있다.

```javascript
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...
  };
};
```

`mergeProps`를 설정하지 않을 경우, 결과는 아래와 같다.

```javascript
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  };
};
```

### options

`options`는 컴포넌트가 어떻게 작동할지에 대해서 설정할 수 있다.
아래의 값들을 넘길 수 있으며, Context Custom, 최적화 작업등을 할 수 있다.

```javascript
{
  context?: Object,
  pure?: boolean,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
```

## connect 사용하기

마지막으로 `connect` 함수를 직접 사용해보기 위해서, `UserCreateForm`에서 유저를 생성할 경우, `UserList`에서 추가 될 수 있도록 `UserContainer` 컴포넌트를 만들었다.

아래 코드들을 통해 앞서 설명한 내용들을 직접 사용해보자.

먼저 `dispatch` 함수에 사용할 action 함수를 정의한다.
`createUser`는 유저 추가를 위한 함수이며, user 값을 받아서 payload로 넘긴다.

```javascript
/* actions/index.js */
export const createUser = (user) => ({
  type: "user/create",
  payload: user,
});
```

다음은 `dispatch` 함수가 실행될 경우, 어떻게 처리할지 reducer를 정의한다.
action의 type이 `user/create`인 경우, 배열에 유저를 추가한다.

```javascript
/* reducers/index.js */
const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user/create":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const getUsers = (state) => state;

export default userReducer;
```

위에서 정의한 action 함수 및 reducer와 함께 `connect` 함수를 사용해서 `UserContainer` 컴포넌트에서 사용할 수 있도록 한다.

```javascript
/* UserContainer.js */
import { connect } from "react-redux";
import UserCreateForm from "./UserCreateForm";
import UserList from "./UserList";
import { createUser } from "../actions";
import { getUsers } from "../reducers";

function UserContainer({ users, createUser }) {
  return (
    <>
      <UserList users={users}></UserList>
      <UserCreateForm createUser={createUser}></UserCreateForm>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
});

const mapDispatchToProps = {
  createUser: (user) => createUser(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
```

## 주의점

앞서 이야기했던 것처럼 신규 프로젝트인 경우에는 `connect` 함수를 사용하기 보다는 `useSelector`와 `useDispatch`의 사용을 권장한다.
해당 함수들은 React Hooks이 나온 이후 Redux에서도 기존 문제점들을 보완해서 나온 Hooks들이므로 편리하다.