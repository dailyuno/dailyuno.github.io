---
title: redux-thunk
date: 2022-01-21
---

## 들어가며

Redux에서는 `dispatch` 함수를 사용하여, 스토어의 상태값을 변경하는데, API 호출을 통해 데이터를 받아와서 비동기로 처리해야 하는 상황이 자주 발생한다.

Redux에서 비동기를 처리를 위해 주로 `redux-thunk`, `redux-observable`, `redux-saga` 등의 라이브러리를 사용한다. `redux-thunk`는 가장 간단하게 시작할 수 있으며, 진입 장벽이 낮아 많은 프로젝트에서 사용한다.

## redux-thunk 알아보기

`redux-thunk`는 API 호출 및 부수 효과를 처리할 수 있도록 도와주며, 복잡한 함수를 작성할 수 있다.

```javascript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## redux-thunk 사용하기

### reducer/user.js

```javascript
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
```

### actions/user.js

```javascript
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_USER });

  try {
    const response = await getUsers(name);
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data.games,
    });
  } catch (e) {
    dispatch({ type: FETCH_USER_ERROR, payload: e });
  }
};
```

### components/UserList.js

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
    </div>
  );
}
```