---
title: "Java Scriptはシングルスレッド"
category: 
tags: JavaScript
created_at: 2016-10-14 17:05:55 +0900
updated_at: 2016-10-14 23:05:47 +0900
published: true
number: 701
---

# Java Scriptはシングルスレッドである


Java Scriptさんはたったひとりで仕事している（多摩川線のワンマン運転）

例題

```js
function loadData() {
  console.log();

  $.get("/", function (data) {
    console.log();
    console.log("Data Loaded: " + data);
    console.log();
  });
  console.log();
}

loadData();
```

このスクリプトが実行される順番を予測して`console.log()`に数字を入れてみる :memo: 

```js
function loadData() {
  console.log(1);

  $.get("/", function (data) {
    console.log(2);
    console.log("Data Loaded: " + data);
    console.log(3);
  });
  console.log(4);
}

loadData();
```

私の予測があっていたら、1，2，3，4と順番に出力されるはず

実行してみる

```console
1
4
2
Data Loaded: I got your request!
3
```

:exclamation: :question: 

# 解説
Java Scriptはシングルスレッドなので、裏でリクエスト送ったり、画面を描画したりのいろいろをひとりでやっている。重たい処理を先にやってしまうとその間他のことができないので画面が固まったりする。
効率的に処理するために、関数を読み込んだときに、サーバーへのリクエストなどの重たい処理は一旦キューに入れておく。その他の処理を先にやって、画面の描画をしたあとにキューに入れた処理に戻ってきて実行している。
先程のスクリプトだと実行の順番はこんな感じになる。

```js
function loadData() {
  console.log(1);

  $.get("/", function (data) {
    console.log(3);
    console.log("Data Loaded: " + data);
    console.log(4);
  });
  console.log(2);
}

loadData();
```

# そのた

サーバーにリクエストおくってそのレスポンスの内容をつかってまたリクエストを送る、という処理をしたいとき、入れ子にするしかないという話もきいた。

```js
function loadData() {
  $.get("/", function (data) {
    console.log("Data Loaded: " + data);
    $.get("/", data, function (data) {
      console.log("Data Loaded: " + data);
     });
  });
}

loadData();
```

入れ子がひどくならないように `Promise`とか`yield`を使うとか。

