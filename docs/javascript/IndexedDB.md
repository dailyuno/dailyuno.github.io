---
title: IndexedDB
date: 2018-04-11
---

## 들어가며

우리는 LocalStorage와 Cookie를 사용하여 브라우저의 데이터를 저장할 수 있으나, 각각 저장할 수 있는 한계가 존재한다.
물론 LocalStorage는 Cookie에 비해서 저장할 수 있는 공간의 크기는 하지만 여전히 이미지와 같은 데이터의 저장은 어렵다고 봐야한다.

이 때 우리는 IndexedDB의 사용을 고려할 수 있는데, IndexedDB는 앞서 설명한 저장 공간의 문제를 보완하고 사용자의 브라우저에 데이터를 영구적으로 저장할 수 있다.
IndexedDB를 사용하여 네트워크 상태에 상관없이 쿼리 기능을 이용할 수 있는 웹 어플리케이션을 만들 수 있기 때문에, 
웹 어플리케이션은 온라인과 오프라인 환경에서 모두 동작할 수 있다.

## IndexedDB 사용하기

먼저 IndexedDB는 기존에 사용했던 다른 전역 객체와는 다르게 사용하는 브라우저에 따라 IndexedDB를 부르는 이름이 다르다.
다행히도 브라우저마다 IndexedDB를 사용하는 방법이 다른 건 아니다.

다음과 같이 브라우저에 영향을 받지 않고, 변수/상수에 값을 저장해서 사용할 수 있다.

```javascript
const indexedDB =
  window.indexedDB || // 익스, 크롬
  window.webkitIndexedDB || // 사파리
  window.mozIndexedDB || // 파이어폭스
  window.msIndexedDB; // 엣지
```

이렇게 저장한 IndexedDB 객체는 `open` 메소드를 통해 DB를 열 수 있다.
DB를 열기 위해서는 `name`과 `version` 두 개의 인자를 전달해야 한다.

`name`은 일반적으로 DB 생성할 때 이름 지어주는 것과 동일하게, IndexedDB도 사용하기 위해서는 이름을 설정해야 한다.
다른 어플리케이션에서 사용하는 IndexedDB와 중복되지 않도록 주의해야 한다.

`version`은 현재 사용할 IndexedDB의 버전을 자연수를 지정하면 된다.
넘기지 않을 경우, 기본 값 1로 적용된다.

```javascript
const name = "20180411db";
const version = 1;
const req = indexedDB.open(name, version);
```

## IndexedDB 이벤트

open 메소드를 사용하여 IndexedDB를 열 경우, `IDBRequest` 객체가 반환되며 다음과 같은 이벤트들이 발생한다.

### 성공 (success)

요청한 이름과 버전으로 IndexedDB를 성공적으로 열었을 때, 이벤트가 발생한다.

```javascript
// indexedDB가 정상적으로 열렸을 경우 실행되는 이벤트
req.onsuccess = function (ev) {
  db = ev.target.result; // IDBDatabase 객체
  ...
};
```

### 실패 (error)

요청한 이름이 같고 버전이 낮은 경우에 에러 이벤트가 발생한다.

```javascript
// indexedDB가 정상적으로 열리지 않았을 경우 실행되는 이벤트
req.onerror = function (ev) {
    ...
};
```

### 업그레이드 (upgradeneeded)

요청한 이름이 같고 버전이 기존보다 높은 경우에 이벤트가 발생한다.
다만 기존 버전 1에서 신규 버전 1.1 이렇게 변경될 경우에는 발생하지 않는다.

```javascript
// indexedDB의 버전이 기존보다 더 높을경우 실행되는 이벤트	(초기 생성 혹은 버전 업그레이드)
req.onupgradeneeded = function (ev) {
  db = ev.target.result; // IDBDatabase 객체
  ...
};
```

## 객체 저장소 만들기

IndexedDB에서 사용하기 위한 객체 저장소는 `onupgradeneeded` 이벤트 핸들링 함수에서 생성해야 한다.
`onsuccess` 이벤트 핸들링 함수에서 만들 경우, 에러가 발생한다.

다음과 같이 `IDBDatabase` 객체의 `createObjectStore` 메소드를 사용해서 테이블을 생성할 수 있다.

```javascript
req.onupgradeneeded = function (ev) {
  db = ev.target.result; // IDBDatabase 객체

  /*
   * 객체 저장소 생성
   * keyPath로 기본키를 설정할 수 있다.
   * autoIncrement는 데이터가 삽일 될 때마다 1씩 증가해주는 역할 (주로 고유 번호 생성에 사용한다)
   */
  db.createObjectStore("users", {keyPath: "idx", autoIncrement: true});
};
```

다만 기존에 테이블이 존재하는 경우 에러가 발생할 수도 있다.
에러를 방지하기 위해서는 테이블을 삭제가 필요할 수도 있는데, 다음과 같이 테이블을 삭제할 수 있다.

```javascript
req.onupgradeneeded = function (ev) {
  db = ev.target.result; // IDBDatabase 객체

  // 기존 테이블이 존재할경우
  if (db.objectStoreNames.contains("users")) {
    // 테이블 삭제 코드
    db.deleteObjectStore("users");
  }
}
```

## 트랜잭션

데이터를 제어하기 위해서는 먼저 트랜잭션(Transaction)에 대해서 알아야 한다.
IndexedDB의 트랜잭션은 다음과 같이 정리할 수 있다.

- DB의 상태를 변경하기 위해 수행하는 작업 단위
- 트랜잭션을 통해 저장소에 접근할 수 있다.
- readonly, readwrite, versionchange 세 가지 모드가 존재한다.

### 트랜잭션 모드

#### readonly

- 객체 저장소의 데이터를 읽을 때

#### readwrite

- 객체 저장소의 데이터를 읽을 때
- 객체 저장소에 데이터 추가/수정/삭제등 변경을 할 때
- 데이터베이스의 스키마나 구조를 변경할 때

#### versionchange

- 객체 저장소를 만들 때
- 객체 저장소에서 인덱스를 만들 거나 삭제할 때
- 데이터베이스의 스키마나 구조를 변경할 때

### 트랜잭션 사용하기

앞서 저장한 `IDBDatabase` 객체의 `transaction` 메소드를 사용해서 객체 저장소에 접근할 수 있다.

다음과 같이 모드를 지정하지 않고, 객체 저장소에 접근하면 readonly 모드로 열리게 된다.

```javascript
db.transaction("users"); // readonly
db.transaction("users", "readwrite"); // readwrite
```

`transaction` 메소드는 객체 저장소에 접근할 수 있다고 했는데, 위 예제처럼 한 개의 객체 저장소에만 접근할 수도 있고 여러 개의 객체 저장소에 접근할 수도 있다.

여러 개의 객체 저장소에 접근하기 위해서는 문자열 형식이 아닌 배열 형식으로 인자를 넘기면 된다.

```javascript
db.transaction(["users", "boards"]);
```

## 객체 저장소

트랜잭션을 통해서 객체 저장소에 접근할 수 있다고 했는데, 객체 저장소는 DB의 테이블과 유사하다고 볼 수 있지만 다른 점들이 존재한다.
객체 저장소를 다음과 같이 정리할 수 있다.

- 데이터를 Key-Value 형식으로 가진다.
- 각각의 Value는 서로 다른 형식을 가질 수 있다.
- 객체 저장소의 이름은 고유해야 한다.
- 데이터는 Key에 따라 오름차순으로 정렬된다.

### 객체 저장소 사용하기

앞서 설명한 것처럼 IDBDatabase의 `transaction` 메소드를 사용하면 IDBTransaction 객체를 반환한다.
반환 된 IDBTransaction 객체의 `objectStore` 메소드를 사용하면 `IDBObjectStore` 객체를 반환한다.

`objectSTore` 메소드에는 데이터에 접근할 객체 저장소의 이름을 인자로 넘기면 된다. 
존재하지 않는 객체 저장소의 이름을 넘길 경우, 오류가 발생하고 트랜잭션과는 다르게 여러 개에는 접근할 수 없다.

다음과 같이 사용할 수 있다.

```javascript
const transaction = db.transaction("users", "readwrite");
const objectStore = transaction.objectStore("users");
```

## 데이터 제어하기

이제 트랜잭션과 객체 저장소를 사용하여, 데이터를 제어해보자.
다음과 같이 변수가 선언되어 있다고 가정하고, 해당 코드를 생략하겠다.

```javascript
const transaction = db.transaction("users", "readwrite");
const objectStore = transaction.objectStore("users");
```

그리고 객체 저장소의 모든 메소드를 설명하기 보다는 자주 사용하는 메소드만 일부 설명하겠다.

### 데이터 추가

`add` 메소드를 사용해서, 추가하고 싶은 데이터를 원하는 형태로 추가할 수 있다.
위에서 `key` 값은 `keyPath`를 통해 idx로 설정하고 1씩 증가하도록 `autoIncrement`를 설정하였기 때문에 생략할 수 있다. 

```javascript
objectStore.add(value);
```

`keyPath`가 설정되지 않은 경우에는 두 번째 인자를 통해 `key` 값을 설정해야 한다.

```javascript
objectStore.add(value, key);
```

### 데이터 삭제

데이터가 가지고 있는 고유한 key값으로 삭제할 수 있습니다.

```javascript
objectStore.delete(key);
```

### 데이터 수정

테이블 생성 시 설정한 `keyPath` 값을 통해서, 데이터의 값을 수정할 수 있다.

```javascript
objectStore.put({
  idx: nowIdx,
  ...
});
```

`keyPath`가 설정되지 않은 경우에는 두 번째 인자에 `key`를 넘겨서 수정해야 한다.

```javascript
objectStore.put(item, key);
```

### 데이터 조회

원하는 데이터의 key 값을 통해서 가지고 올 수 있다.
비동기로 작동하기 때문에 `success` 이벤트 핸들링 함수에서 조회해야 한다.

```javascript
const req = objectStore.get(key);

req.onerror = function (ev) {
  ...
}

req.onsuccess = function (ev) {
  req.result // 데이터
}
```

### 데이터 전체 조회

key를 모르는 상태에서 데이터를 전부 가지고 오기 위해서는 앞서 추가/수정/삭제와는 다르게 `openCursor`라는 메소드의 사용이 필요하다.
다음과 같이 사용 가능하며, 다음 값을 조회하고 싶을 경우 `cursor.continue()`를 사용하면 된다.

```javascript
const transaction = db.transaction(table, "readwrite");
const objectStore = transaction.objectStore(table);

const cur = objectStore.openCursor();

cur.onerror = function (ev) {
  ...
}

cur.onsuccess = function (ev) {
  const cursor = ev.target.result;

  // 데이터가 존재할 경우
  if (cursor) {
    cursor.value; // 현재 데이터의 정보

    // 다음 데이터로 이동
    cursor.continue();
  }
};
```