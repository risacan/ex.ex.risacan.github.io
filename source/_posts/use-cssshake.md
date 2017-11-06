---
title: "上付き文字と下付き文字と行間"
category: 
tags: css
created_at: 2016-10-15 00:17:07 +0900
updated_at: 2016-10-17 15:31:49 +0900
published: true
number: 702
---

[CSShake](http://elrumordelaluz.github.io/csshake/)を使ってemojiでこんなことして遊んでた
🐝にCSShakeのクラスをつけてブンブンさせている
![bee1.gif (50.0 kB)](https://img.esa.io/uploads/production/attachments/2057/2016/10/15/5683/d5fea5fc-effc-467b-bdc9-097a64f13d5d.gif)

でもおなじ高さにお花と蜂がいるからちょっと不自然に見える。これを適度に高低差をつけて🐝がお花🌷🌹🌻🌺🌼から蜜を吸っているように見せたい・・・！

# 上付き文字と下付き文字で高低差をつける

最初は、上付き文字と下付き文字で差をつけてみた。

```css
.flowers {
  vertical-align: sub;
}
.bee {
  vertical-align: super;
}
```

<img width="272" alt="スクリーンショット 2016-10-15 0.10.49.png (36.4 kB)" src="https://img.esa.io/uploads/production/attachments/2057/2016/10/15/5683/a05b5974-3c8a-4adb-8b14-23f92b9c930a.png">

見た目は大変いい感じだけど行間に影響している :scream: 
1行目と2行目のあいだより、2行目と3行目の間のほうがひらいていて、ちょっと気持ち悪い・・・

# 他のプロパティ値を指定してみる
`vertical-align` に上付き文字と下付き文字以外のプロパティを指定してみる

```css
.flowers {
  vertical-align: baseline;
}
.bee {
  vertical-align: text-bottom;
}
```

<img width="274" alt="スクリーンショット 2016-10-15 0.23.04.png (36.7 kB)" src="https://img.esa.io/uploads/production/attachments/2057/2016/10/15/5683/0ade65cc-663b-4f08-947e-d5f20e37fbea.png">

・・・一緒やん！？

# ググる

[備忘録 - 上付き文字と行間](http://namatten.blog.so-net.ne.jp/2008-02-08)
リンク先を参考にした書き方。

```css
.flowers {
  vertical-align: baseline;
}
.bee {
  vertical-align: baseline;
  position: relative;
  top: -0.5rem;
}
```

`vartical-align: baseline;` はベースラインに合わせる。
`position: relative; `は 相対的な位置で、標準で表示される位置。
`top`は `position` できめた位置からの上からの位置。リンク先では`-1ex` と指定されてた。exは `x` (小文字のx)を基準とした単位。私はだいたいremを使っているのでremと指定した

<img width="275" alt="スクリーンショット 2016-10-15 0.24.08.png (36.7 kB)" src="https://img.esa.io/uploads/production/attachments/2057/2016/10/15/5683/0c8ec5b6-e7b1-4f8c-9133-cf435d6ddd87.png">

いい感じいい感じ！！

# そして・・・

![bee.gif (119.2 kB)](https://img.esa.io/uploads/production/attachments/2057/2016/10/15/5683/211bc2ef-bbca-482f-b53d-0daa83413714.gif)

1行目と2行目、2行目と3行目の行間を変えずにお花と蜂の高さを変更できた！

# 感想

大満足！！！！ :grin: :sparkles: 

---

ちなみにIEでみてみたらこんなかんじ。レトロ
![win.gif (403.3 kB)](https://img.esa.io/uploads/production/attachments/2057/2016/10/17/5683/261feabf-1602-44a3-9e09-9df5cabe9aa6.gif)

