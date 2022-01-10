---
title: 태그
date: 2021-05-08
---

## Tag란 무엇인가?

HTML 태그는 웹 브라우저가 이해할 수 있도록 형식을 지정하고 표시하는 방법을 정의하는 키워드라고 보면 된다. 우리는 태그를 사용해서, 이미지와 비디오를 보여주고 텍스트에 링크를 거는 등의 기능을 할 수 있다.

HTML 태그는 여는 태그, 콘텐츠, 닫는 태그 이렇게 세 가지로 구성된다. (일부 태그의 경우, 여는 태그만 필요하다.)

보통 Tag를 사용하는 방법은 `<b>`나 `<i>`처럼 원하는 기능의 태그를 열고, 그 안에 "굵은 텍스트"와 같이 내용을 적고 `</b>`와 `</i>`처럼 태그를 닫는다.

### 사용 예시

```html
<b>굵은 텍스트</b>
<i>기울어진 텍스트</i>
```

### 작동 화면
- b 태그 - <b>굵은 텍스트</b>
- i 태그 - <i>기울어진 텍스트</i>

각 태그마다 특정 기능을 가지고 있으며, 화면에 보일 때 적용된다. `<b>` 태그의 경우, 텍스트를 굵게 만들며 `<i>` 태그는 텍스트를 기운 모양으로 만든다. 물론 모든 태그에 기능이 존재하는 것은 아니며 `div`와 `span` 태그처럼 기능이 없는 경우도 존재하다.

## Tag의 종류
앞서 설명한 것처럼 기본적으로 HTML에서 Tag는 두 종류로 나뉘게 된다. 여는 태그와 닫는 태그가 한 쌍을 이루는 Paired Tags와 닫는 태그가 없는 Unpaired Tags이다.

1. Paired Tags
2. Unpaired Tags (단일 태그)

아래 예제들을 통해 어떻게 사용하고 어떠한 특징을 가지고 있는지 알아보자.

## Paired Tags
대부분의 Tag는 열었으면 닫아야 한다고 보면 된다. `<태그 이름>`를 Tag를 연다고 표현하고, `</태그 이름>`를 Tag를 닫는다고 표현한다.

아래 예시를 보면 알겠지만, Paired Tags는 아래와 같은 몇 가지 특징을 가진다.

- 여는 Tag와 닫는 Tag의 이름은 같아야 한다.
- Tag 개수는 동일해야 한다.
- 일부를 제외하고는 Tag 안에 다른 Tag를 넣을 수 있다.

### 사용 예시
```html
<header>
    헤더
</header>

<div>
    <span>텍스트</span>
</div>

<footer>
    푸터
</footer>
```

### 일부 Paired Tag 종류

Open Tag        | Close Tag     |
--------------- | ------------- |
&lt;header>     | &lt;/header>  |
&lt;section>    | &lt;/section> |
&lt;article>    | &lt;/article> |
&lt;footer>     | &lt;/footer>  |
&lt;div>        | &lt;/div>     |
&lt;span>       | &lt;/span>    |
&lt;p>          | &lt;/p>       |

## Unpaired Tags (단일 태그)
앞서 대부분의 Tag는 열었으면 닫아야 한다고 말하였는데 그렇지 않은 Tag도 존재한다.

`<img />` 와 `<input />` Tag와 같이 닫을 필요 없는 Tag가 대표적인 예시이다.

### 사용 예시
```html
<p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
</p>

<img src="https://picsum.photos/seed/picsum/200/300" alt="랜덤 이미지" title="랜덤 이미지" />

<hr />
```

### 일부 Unpaired Tag 종류

Open Tag    |
----------- |
&lt;img>    |
&lt;input>  |
&lt;meta>   |
&lt;br>     |
&lt;hr>     |