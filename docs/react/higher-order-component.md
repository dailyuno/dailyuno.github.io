---
title: 고차 컴포넌트
date: 2022-01-12
---

## 들어가며

React로 코드를 작성해보면 각기 다른 컴포넌트에서 동일한 로직의 코드가 필요할 때가 존재한다.
예를 들어 A, B, C 컴포넌트가 있는데 모두 특정 데이터를 필요로 하거나, 렌더링이 완료되면 페이지의 조회수를 증가시켜야 하는 상황을 말 할 수 있다.

A, B, C 컴포넌트에서 동일한 코드를 복사해서 사용하게 되면 코드가 길어질 뿐만 아니라 유지보수가 어려워진다.
이렇게 로직이 중복되는 상황을 방지하기 위해서 고차 컴포넌트를 사용한다.

고차 컴포넌트 (higher-order-component)는 반복되는 코드를 줄이고, 로직을 재사용하기 위해서 사용하게 되었다. 
React에서 지원하는 함수의 개념은 아니고, React 개발을 위한 패턴이라고 보면 된다.

고차 컴포넌트는 컴포넌트를 감싸는 `wrapper` 개념으로 생각하면 되는데, 인자값으로 컴포넌트를 받고 고차 컴포넌트의 로직과 함께 새로운 컴포넌트를 반환한다.

```javascript
function Page() {
    return (
        <div>
            ...
        </div>
    )
}

export default higherOrderComponent(Page);
```

위 코드를 보면 알겠지만 실제 UI를 담당하는 건 인자값으로 넘겨지는 컴포넌트이며, 고차 컴포넌트에서는 로직을 다룬다.

용어가 생소해서 무슨 말인지 이해하기 어려울 수 있는데, 그냥 고차 컴포넌트는 하나의 함수라고 생각하고, 인자값으로 컴포넌트를 넣으면 기존 컴포넌트 + 로직으로 합쳐져서 새로운 컴포넌트를 만든다고 이해하면 된다.

## 고차 컴포넌트 사용하기

특정 페이지에 접속할 때마다 조회수를 증가하게 만들고 싶다고 가정하자. 
페이지가 렌더링 되어서, 사용자가 이용할 수 있는 시점인 `componentDidMount`에 조회수 증가 코드를 작성한다.

조회수 증가 코드를 각기 다른 컴포넌트에서 사용할 수 있도록 함수를 만들더라도, 사용하고자 하는 컴포넌트의 `componentDidMount`에서 함수를 호출해야 돼서 코드의 중복이 발생한다.

하지만 `withStorePageViews`처럼 고차 컴포넌트로 관리하게 되면 사용하는 모든 컴포넌트는 사용자의 조회수가 기록되며, 관리할 수 있게 된다.

```javascript
function withStorePageViews(InnerComponent, componentName) {
  return class WrapperComponent extends React.Component {
    componentDidMount() {
      /* 조회수 증가 코드 */
    }
    render() {
      return <InnerComponent {...this.props} />;
    }
  };
}

/* Board.js */
class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>게시판 페이지</div>;
  }
}

export default withStorePageViews(Board, "Board");
```

함수형 컴포넌트에서는 클래스 컴포넌트 방식보다 쉽게 고차 컴포넌트를 사용할 수 있다.
다만 웬만해서는 고차 컴포넌트를 사용하는 것보다 Custom Hook을 사용하는게 좋다고 생각한다.

기존 클래스형 컴포넌트에서는 라이프 사이클 메소드가 분리되어 있어서, `componentDidMount`와 `componentDidUpdate`에 중복해서 코드를 추가해야 했다. 하지만 이제는 `useEffect`를 통해 코드를 중복하지 않고 넣을 수 있으며, 직접 만든 `customHook`을 통해 별도의 `state` 설정 없이도 값을 가지고 올 수 있다.

```javascript
function withStorePageViews(WrappedComponent, componentName) {
  const InnerComponent = (props) => {
    useEffect(() => {
      /* 조회수 증가 코드 */
    }, []);

    return <WrappedComponent {...props} />;
  };
  return InnerComponent;
}

function Board() {
  return <div>게시판 페이지</div>;
}

export default withStorePageViews(Board, "Board");
```

## 주의점

중복되는 로직을 여러 개로 분리해서 많은 수의 고차 컴포넌트를 사용하면 렌더링 성능에 문제가 발생한다. 
React 개발자 도구를 통해 디버깅할 때도 기존보다 어려워질 수 있으니, 적절한 사용이 필요하다.

고차 컴포넌트는 기존 레거시 프로젝트 클래스형 컴포넌트에서 사용하는 경우가 많다.
Hooks을 사용해서 새롭게 프로젝트를 시작하는 경우에는 Custom Hook을 만들어서 사용하는게 고차 컴포넌트보다 직관적이고 편하다고 생각한다.

물론 고차 컴포넌트와 Custom Hook 둘 중 어떤 방법을 꼭 선택해야 할 필요는 없다.
때론 고차 컴포넌트가 Custom Hook을 사용하는 것보다 좋은 상황이 있을 수도 있으니, 상황에 맞게 적절하게 사용하는 걸 권장한다.