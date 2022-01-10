---
title: 속성
date: 2021-05-08
---

## HTML 속성(Attributes)이란?

HTML 속성(Attributes)이란 태그를 보조해주는 역할이며, 태그 종류에 따라 필수적으로 사용해야 한다. \
아래와 같은 특징을 가진다고 보면 된다.

- 모든 HTML element 요소들은 `Attributes`를 가질 수 있다.
- `Attributes`은 element에 대한 추가 정보를 제공한다.
- `Attributes`은 시작 태그에 정의되어야 한다.
- `Attributes`은 일반적으로 name/value가 같이 사용된다.

*****

## 전역 속성 (Global Attributes)

Global Attributes는 모든 HTML의 태그에 사용 가능하다.

- `class`: \
    태그에 이름을 부여한다고 보면 되며, 중복 사용 가능하다. \
    아래 예시 코드처럼 class는 임의로 사용자가 태그에 부여 가능하며, 여러개의 class를 부여할 수도 있다.
    ```html
    <article class="post">
        <h2 class="post-title"></h2>
    </article>

    <article class="post big-post">
        <h2 class="post-title"></h2>
    </article>

    <footer class="site-footer"></footer>
    ```
- `id`: \
    class와 비슷하게 태그에 이름을 부여한다고 생각하면 되지만, 중복 사용하지 않는 것이 원칙이다. \
    한 개의 요소에는 한 개의 id만 부여가능하다.
    ```html
    <section id="visual"></section>

    <section id="company-news"></section>
    ```
- `style`: \
    요소에 스타일(CSS)을 적용한다고 보면 되고, 색상과 여백등을 비롯하여 많은 종류의 스타일을 적용할 수 있다. \
    ```html
    <div style="width: 200px; height: 200px; background-color: #4ccb94;">
    </div>

    <button style="border: 1px solid #ddd; color: #222; background-color: #fff; padding: 8px 12px;">
        Button
    </button>
    ```
- `title`: \
    요소에 대한 정보를 지정하는 속성이며, 요소에 마우스를 올렸을 때 사용자에게 툴팁으로 보여진다.
    ```html
    <img src="https://picsum.photos/seed/picsum/200/300" title="랜덤 이미지" />
    ```
- `hidden`: \
    요소를 보이지 않도록 설정하는 속성이며, `hidden` 속성을 가진 요소와 자식 요소들은 브라우저에서 렌더링되지 않는다.
    ```html
    <input type="email" name="email" hidden />

    <form method="POST" action="/form-action-url" hidden>
    </form>
    ```
- `data-*`: \
    요소에 사용자가 정의하여 데이터를 담을 수 있으며, 주로 Javascript과 HTML이 서로 데이터를 교환하기 위한 방법으로 사용한다. \
    나중에 javascript로 DOM의 정보를 제어할 때 사용한다고 보면 된다.
    ```html
    <div data-index="1"></div>

    <div data-uuid="bd9355e1-7576-4573-b4a2-c1f723e06a40"></div>

    <div data-x="379" data-y="124" data-id="37">
    ```