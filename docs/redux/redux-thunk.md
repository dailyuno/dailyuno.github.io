---
title: redux-thunk
date: 2022-01-21
---

## 들어가며

Redux에서는 `dispatch` 함수를 사용하여, 스토어의 상태값을 변경하는데, API 호출을 통해 데이터를 받아와서 비동기로 처리해야 하는 상황이 자주 발생한다.

Redux에서 비동기를 처리를 위해 주로 `redux-thunk`, `redux-observable`, `redux-saga` 등의 라이브러리를 사용한다. `redux-thunk`는 가장 간단하게 시작할 수 있으며, 진입 장벽이 낮아 많은 프로젝트에서 사용한다.

## redux-thunk 설치

```markdown
npm install redux-thunk
```

## redux-thunk 알아보기

`redux-thunk`는 API 호출 및 부수 효과를 처리할 수 있도록 도와주며, 복잡한 함수를 작성할 수 있다.
기존 `dispatch` 함수는 액션 객체를 처리하는데 사용했는데, `redux-thunk`를 미들웨어에 등록하면 함수도 처리할 수 있다.

`redux-thunk`는 간단한 구조로 되어있으며, 함수가 들어올 경우 `dispatch`와 `getState`를 넘겨서 실행한다.

```javascript
const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }

    return next(action);
  };
```

`dispatch`로 함수를 처리하는 방법은 다음과 같다.

```javascript
const fetchItems = () => async (dispatch, getState) => {
  ...
}

dispatch(fetchItems());
```

`redux-thunk`를 사용하기 위해서는 `createStore` 함수를 통해 스토어를 생성할 때, 미들웨어를 등록하는 방법과 동일하게 등록해야 한다.

```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## redux-thunk 사용하기

API를 호출해서 유저 리스트를 받아오는 코드를 통해 `redux-thunk`를 사용하는 방법에 대해 알아보자.

### constants/ActionTypes.js

먼저 액션 타입들을 다른 곳에서 사용할 수 있도록 정의한다.

```javascript
// 유저 리스트 요청 시작
export const FETCH_USER_LIST = "FETCH_USER_LIST";
// 유저 리스트 요청 성공
export const FETCH_USER_LIST_SUCCESS = "FETCH_USER_LIST_SUCCESS";
// 유저 리스트 요청 실패
export const FETCH_USER_LIST_ERROR = "FETCH_USER_LIST_ERROR";
```

### reducer/user.js

그리고 정의한 액션 타입을 사용해서, 리듀서로 어떻게 처리할지 정의한다.

```javascript
const initialState = {
  loading: false,
  items: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LIST:
      return { ...state, loading: true };
    case FETCH_USER_LIST_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_USER_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
```

### actions/user.js

`fetchUsers`는 유저 리스트를 가지고 오는 함수로 컴포넌트에서 `dispatch` 할 때 사용한다.
함수가 호출되면 요청이 시작되었다는 것을 알기 위해서 `dispatch`를 호출한다. 
그리고 API 응답 상태에 맞게 타입을 넘겨서 `dispatch`를 호출한다.

```javascript
export const fetchUsers = () => async (dispatch) => {
  // 유저 리스트 요청 시작
  dispatch({ type: FETCH_USER_LIST });

  try {
    // API 호출
    const response = await API.getUsers();
    // 유저 리스트 요청 성공
    dispatch({
      type: FETCH_USER_LIST_SUCCESS, 
      payload: response.data,
    });
  } catch (e) {
    // 유저 리스트 요청 실패
    dispatch({ type: FETCH_USER_LIST_ERROR, payload: e });
  }
};
```

### components/UserList.js

컴포넌트에서는 앞서 만들어두었던 `fetchUsers` 함수를 `dispatch`하고, `useSelector`를 통해서 상태값을 가지고 온 이후에 사용하면 된다.

```javascript
function UserList() {
  const dispatch = useDispatch();

  const {
    loading,
    items: users,
    error,
  } = useSelector((state) => state.users, shallowEqual);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      ...
    </div>
  );
}
```