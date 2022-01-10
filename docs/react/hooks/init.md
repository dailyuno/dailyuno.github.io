---
title: Hooks
date: 2022-01-05
---

## 들어가며

React Hooks은 React 16.8 버전에 새롭게 추가된 기능이다. 
React에서 개발을 할 때 컴포넌트는 클래스형 컴포넌트와 함수형 컴포넌트로 작성할 수 있다.
16.8 이전 버전에서는 클래스형 컴포넌트가 할 수 있는 일들이 더 많았고 선호하는 코드였다.

다만 React 16.8부터 Hooks이라는 기능이 추가되면서 함수형 컴포넌트에서도 State 값과 lifecycle 함수 코드를 작성할 수 있게 되며 선호도가 바뀌었다. 이미 만들어진 프로젝트가 아닌 경우에는 함수형 컴포넌트와 Hooks을 사용하여 코드를 작성하는게 좋다.

<!-- ## React Hooks 장점
코드 재사용성이 높고, 클래스형 컴포넌트를 사용할 때보다 생산성이 높아진 것을 체감할 수 있다. -->

## 클래스 컴포넌트의 문제점

#### 1. 어려운 재사용

클래스형 컴포넌트에서는 해당 컴포넌트를 재사용할 수는 있지만 DOM 처리 / API 사용 / State 처리 등의 로직에 대해서는 여러번 반복 사용하는 문제가 발생한다.

#### 2. 복잡한 코드

클래스로 코드를 작성할 경우 React Component 상속, constructor, this, Life cycle method와 같은 기본 규칙을 준수하면서, 코드를 작성해야 해서 복잡하고 길어진다.

## Hooks을 사용하는 이유

#### 1. 재사용
Hooks을 조합하여 새로운 커스텀 Hook을 만들어 낼 수도 있어서, 코드 재사용성 증가하며 생산성이 높아진다.

#### 2. 깔끔한 코드

Hooks을 사용할 경우, constructor와 중복 사용해야 하는 Life cycle method등과 같은 불필요한 규칙을 준수할 필요가 없어서, 코드의 중복을 줄일 수 있다.

## Hooks의 문제점

## Hooks의 종류

#### 기본 Hook
  - useState
  - useEffect
  - useContext

#### 추가 Hooks
  - useReducer
  - useCallback
  - useMemo
  - useRef
  - useImperativeHandle
  - useLayoutEffect
  - use DebugValue
