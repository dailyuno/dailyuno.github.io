---
title: useContext 사용법
date: 2022-01-10
---

## 들어가며

`useContext`를 설명하기 이전에 기존에 사용하던 콘텍스트 API의 문제점을 알아야 한다.

콘텍스트 API는 반복적인 데이터 전달 코드를 방지하고자 사용하는데, 이러한 콘텍스트 API에도 문제점이 존재한다.
바로 `Provider`와 `Consumer`를 중첩해서 사용할 수록 코드의 깊이가 깊어진다는 점이다.

`Provider`와 `Consumer`를 중첩한 코드를 통해 어떠한 문제점이 있는지 알아보자. 
이렇게 코드가 여러 번 중첩될 일은 드물겠지만 프로젝트의 크기가 커지면서 중첩할 일이 생기게 된다면 자식 컴포넌트 코드에서는 부모 컴포넌트에서 넘긴 데이터를 받기 위해 `Consumer` 컴포넌트를 여러 번 사용해야 하고, 코드가 점점 복잡해지고 이해하기 어려워진다.

```javascript
/* 부모 컴포넌트 */
<A.Provider>
  <B.Provider>
    <C.Provider>
      <D.Provider>
      </D.Provider>
    </C.Provider>
  </B.Provider>
</A.Provider>

/* 자식 컴포넌트 */
<A.Consumer>
  {data1 => (
    <B.Consumer>
      {data2 => (
        <C.Consumer>
          {data3 => (
            <D.Consumer>
              {data4 => (
                /* 자식 컴포넌트 내용 */
              )}
            </D.Consumer>
          )}
        </C.Consumer>
      )}
    </B.Consumer>
  )}
</A.Consumer>
```

React Hooks의 종류인 `useContext`를 사용하면 `Consumer`를 사용함에 따라 코드가 깊어지는 것을 방지할 수 있다.

## useContext 사용

`useContext`는 기존에 생성한 콘텍스트 객체를 사용해서, 데이터를 가지고 오는 함수로 `Consumer` 컴포넌트의 역할을 대신한다고 보면 된다.

```javascript
const 변수명 = useContext(콘텍스트 객체);
```

예를 들어 `App` 컴포넌트에서 `Provider`룰  3번 중첩해서 데이터를 넘기는 경우가 있다고 가정해보자. 그리고 `user`, `product`, `sale` 모든 데이터의 사용이 필요한 `ProductMeta`라는 컴포넌트가 있을 경우, `Consumer`와 `useContext`는 아래와 같이 서로 다른 방식으로 데이터를 받아오게 된다.

```javascript
function App() {
  const [user] = useState({ name: "홍길동" });
  const [product] = useState({ name: "상품" });
  const [sale] = useState({ discount_rate: 7 })

  return (
    <UserContext.Provider value={user}>
      <ProductContext.Provider value={product}>
        <SaleContext.Provider value={sale}>
          <Product></Product>
        </SaleContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  )
}

function Product() {
  return (
    <div>
      <ProductMeta>
      </ProductMeta>
    </div>
  ) 
}
```

### Consumer 사용 방식

`useContext`를 사용하지 않고 작성하던 기존 방법이다. 부모가 `Provider` 컴포넌트로 전달한 데이터를 받기 위해서는 해당 개수 만큼의 `Consumer` 컴포넌트를 사용해서 데이터를 받아와야 하는데, 아래 코드를 보면 알겠지만 코드가 깊어지고 한 눈에 알아보기 어렵다는 것을 알 수 있다.

```javascript
function ProductMeta() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <ProductContext.Consumer>
            {(product) => (
              <SaleContext.Consumer>
                {(sale) => (
                  <>
                    <div>유저 이름: {user.name}</div>
                    <div>제품 이름: {product.name}</div>
                    <div>할인율: {sale.discount_rate}%</div>
                  </>
                )}
              </SaleContext.Consumer>
            )}
          </ProductContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}
```

### useContext 사용 방식

다음은 `useContext`를 사용한 방식으로 `Consumer` 컴포넌트를 사용했을 때와 비교하면 코드가 간결하고 이해하기 쉽다.

단순히 `ProductMeta` 한 개의 컴포넌트에서도 눈에 띄는 차이가 있는 만큼, 규모가 큰 프로젝트에서 `ProductMeta`와 같이 여러 개의 `Provider`로부터 데이터를 받아오는 컴포넌트가 여러 개 필요하다고 생각해보면 `Consumer` 대신 `useContext`를 사용해서 코드를 작성하는게 좋다.

```javascript
function ProductMeta() {
  const user = useContext(UserContext);
  const product = useContext(ProductContext);
  const sale = useContext(SaleContext);

  return (
    <div>
      <div>유저 이름: {user.name}</div>
      <div>제품 이름: {product.name}</div>
      <div>할인율: {sale.discount_rate}%</div>
    </div>
  );
}
```