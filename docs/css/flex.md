---
title: Flex란?
date: 2021-07-04
---

## Flex란?
웹 페이지의 레이아웃을 설계할 때 주로 float, inline-block, position 속성 등을 사용하는데, 수직 정렬처럼 구현이 어려운 부분이 있다.

이러한 문제들을 해결하고자 Flex가 나오게 되었으며, 기존의 구현 방식과는 달리 훨씬 편하게 구현이 가능하다.

## Flex의 종류
Flex의 속성을 사용하기 위해서는 아래와 같은 구조를 따라야 한다.

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

위와 같이 flex는 부모 요소와 자식 요소로 이루어진다.

class가 container인 부모 요소를 flex container라고 부르며,\
class가 item인 자식 요소를 flex item이라고 부른다.

flex는 기존 css 적용 방식과는 다르게, 부모 요소와 자식 요소에게 적용 가능한 속성이 각각 다르다.

## Flex Container

아래는 flex container를 위해 제공되는 속성이다.


속성            | 의미
--------------- | ------------
flex-direction  | flex item들의 가로, 세로 정렬 방향을 지정 (main-axis, cross-axis를 변경 가능)
flex-wrap       | flex item들의 줄 바꿈 여부를 지정
flex-flow       | `flex-direction`과 `flex-wrap`의 단축 속성
justify-content | 가로 (main-axis)의 정렬 방법을 설정
align-items     | 세로 (cross-axis)의 정렬 방법을 설정

## justify-content

가로 (main-axis)의 정렬 방법을 설정한다.

속성            | 의미
--------------- | ------------
flex-start      | `default`값으로, flex item들을 flex container의 좌측에 배치
flex-end        | flex item들을 flex container의 우측에 배치
center          | flex item들을 flex container의 가운데에 배치
space-between   | flex item들끼리 동일한 여백을 가지도록 배치
space-around    | flex item들과 flex container가 동일한 여백을 가지도록 배치

## align-items

세로 (cross-axis)의 정렬 방법을 설정한다.

속성            | 의미
--------------- | ------------
stretch         | `default`값으로, flex item들의 높이가 flex container의 높이와 동일하게 설정
flex-start      | flex item들을 flex container의 상단에 배치
flex-end        | flex item들을 flex container의 하단에 배치
center          | flex item들을 flex container의 가운데에 배치
baseline        | flex container의 기준선에 배치 되도록 한다. (폰트 기준)