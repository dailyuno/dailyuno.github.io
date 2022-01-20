---
title: reselect
date: 2022-01-21
---

## 들어가며

`useSelector` 함수를 사용할 때, selector 코드를 외부로 분리하더라도, `filter`와 `map` 등을 사용하는 경우에는 상태 변화가 없더라도 selector는 계속 실행되며, 렌더링이 발생한다.

```javascript
const getUsers = (state) => {
  return state.users.filter((user) => user.age > 20);
};

function App() {
  const users = useSelector(getUsers);
}
```

`reselect` 라이브러리의 `createSelector` 함수를 통해, 이러한 불필요한 렌더링을 방지하고 성능을 향상시킬 수 있다.

## reselect 설치

`reselect` 라이브러리는 selector를 메모이제이션하기 위해서 만들어졌고, 일반적으로 Redux에서 사용하지만 일반 자바스크립트 프로젝트에서도 사용할 수 있다.

다음 명령어를 통해 라이브러리를 설치하자.

```markdown
npm install reselect
```

## createSelector 알아보기

`createSelector`는 넘어온 인자들을 사용해 결과를 계산하고 반환한다.
인자들과 결과는 나중에 재사용할 수 있도록 캐시된다.
주로 Redux 스토어에서 데이터를 가지고 와서, 필터링 작업 등을 할 때 사용한다.

`createSelector` 함수의 구성은 다음과 같이, 3개 이상의 인자를 가질 수 있다.

```javascript
createSelector(...selectors || [selectors], resultFn, selectorOptions?);
```

selectors는 여러 개의 인자 혹은 한 개의 배열 방식으로 사용할 수 있으며, 사용법은 다음과 같다.

```javascript
/* 인자 방식 */
createSelector(
  (state) => state.a,
  (state) => state.b
);

/* 배열 방식 */
createSelector(
  [(state) => state.a, (state) => state.b]
);
```

resultFn에서는 인자로 넘긴 selectors 값들을 방식에 상관없이 모두 동일하게 사용할 수 있다.

```javascript
createSelector(
  (state) => state.a,
  (state) => state.b,
  (a, b) => ...
);

createSelector(
  [(state) => state.a, (state) => state.b],
  (a, b) => ...
);
```

## createSelector 사용하기

`createSelector` 함수를 사용해서, 현재 검색한 카테고리의 상품 목록을 가지고 오는 코드를 작성해보자.
먼저 상품 목록과 현재 검색한 카테고리를 가지고 오기 위해서 `getProducts`와 `getSearchCategory` 함수를 만든다.
그리고 이 함수들을 `createSelector`에서 인자로 넘기고, filter 작업을 해서 반환하도록 작성하면 된다. 

```javascript
const getProducts = (state) => state.products;

const getSearchCategory = (state) => state.search.category;

const getCategoryProducts = createSelector(
  getProducts,
  getSearchCategory,
  (products, category) =>
    products.filter((product) => product.category === category)
);
```

이렇게 컴포넌트 외부에서 작성한 함수는 다음과 같이 사용할 수 있다.
여러 개의 데이터를 가지고 올 경우, `shallowEqual`함수와 함께 배열 방식으로 사용하는게 좋을 수 있다.

```javascript
function App() {
  /* 변수/상수 방식 */
  const products = useSelector((state) => getCategoryProducts(state));

  /* 배열 방식 */
  const [products] = useSelector(
    (state) => [getCategoryProducts(state)],
    shallowEqual
  );
}
```