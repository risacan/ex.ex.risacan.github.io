---
title: "brainf*ck-goを使って言語を作る!"
category:
tags: go, emoji
created_at: 2017-03-27 00:36:07 +0900
updated_at: 2017-03-27 00:36:07 +0900
published: true
number: 927
---

# やったこと
* [nownab\.log \| 誰でもBrainf\*ckっぽい言語が作れる？ツール作った](https://blog.nownabe.com/2017/03/25/660.html)を使って絵文字言語作った

# 手順
* 💻 を買い替えてからGoをいれていなかったようなので、Goをインストール
    * [Downloads \- The Go Programming Language](https://golang.org/dl/)
    * インストール中もGopherくんが出てきて良い！

* `$GOPATH` を設定。
    * [GOPATH は適当に決めて問題ない \- Qiita](http://qiita.com/yuku_t/items/c7ab1b1519825cc2c06f)
    * 私はzshを使っているので  `~/.zshrc`に `export GOPATH=$HOME/.go` を追記した :heavy_check_mark:
    * ターミナルを再起動する

* [nownab\.log \| 誰でもBrainf\*ckっぽい言語が作れる？ツール作った](https://blog.nownabe.com/2017/03/25/660.html)を参考に、`go get` コマンドでインストール
* `go get -u github.com/nownabe/brainfuck-go`
* 先程設定したGOPATH以下に`brainfuck-go` コマンドが入るぽいので、`~/.go/bin/brainfuck-go` で実行できる

# 結果

```books.json
{
  "next": "📕",
  "prev": "📒",
  "inc": "📗",
  "dec": "📘",
  "read": "📔",
  "write": "📓",
  "open": "[",
  "close": "]",
  "whitespaces": " \t\r\n"
}
```

```fizzbuzz.bf
📗📗📗📗📗📗[📘📕📗📗📗📗📕 📕📗📕📗📕📘📒📒📒📒📒]📕[📒📗📗📗📗📕 📕📗📗📗📕📗📗📗📗📕 📕📗📗📗📕📗
📗📗📗📗📕📗📗📗📗📗📕 📕 📕 📕 📕 📕📗📗📕 📕📗📗📒📒📒📒📒📒📒📒📒📒📒📒📒📒📘]📒📗📗📗📗📕📗📗📗
📕📘📘📕📗📗📗📕📘📕 📕📘📘📘📕📗📗📕 📕 📕📗📗📗📗📗[📘📕📗📗📕📗📗📒📒]📒📒📒📒📒📒📒📒📒📒[📘📕📘
[📕 📕 📕 📕 📕 📕 📕]📕[📒📗📗📗📕📓📕📓📕 📕 📕 📕📓📓📕 📕 📕📗📒]📒📒📒📒📒📘[📕 📕 📕 📕]📕[📒📗
📗📗📗📗📕📓📕📓📕📓📓📕 📕 📕📗📒]📕 📕 📕 📕📗📒📘[📒📒📒]📒[[📘📒📒📗📕 📕]📕 📕 📕📗📕📗📒📒📒📒📒
📒[📘📕 📕📗📕📗📕📘📒📒📒📒]📒]📕📕[[📘]📒]📕[📕 📕 📕[📕📓📒📒📓📒📒📒]📒[📓📒📒📒📒]📕]📕📓📒📒📒📒
📒📒📒📒📒📒📒]
```

```go
🌸 ~/.go/bin/brainfuck-go -conf books.json fizzbuzz.bf
Input: 📗📗📗📗📗📗[📘📕📗📗📗📗📕 📕📗📕📗📕📘📒📒📒📒📒]📕[📒📗📗📗📗📕 📕📗📗📗📕📗📗📗📗📕 📕📗📗📗📕📗
📗📗📗📗📕📗📗📗📗📗📕 📕 📕 📕 📕 📕📗📗📕 📕📗📗📒📒📒📒📒📒📒📒📒📒📒📒📒📒📘]📒📗📗📗📗📕📗📗📗
📕📘📘📕📗📗📗📕📘📕 📕📘📘📘📕📗📗📕 📕 📕📗📗📗📗📗[📘📕📗📗📕📗📗📒📒]📒📒📒📒📒📒📒📒📒📒[📘📕📘
[📕 📕 📕 📕 📕 📕 📕]📕[📒📗📗📗📕📓📕📓📕 📕 📕 📕📓📓📕 📕 📕📗📒]📒📒📒📒📒📘[📕 📕 📕 📕]📕[📒📗
📗📗📗📗📕📓📕📓📕📓📓📕 📕 📕📗📒]📕 📕 📕 📕📗📒📘[📒📒📒]📒[[📘📒📒📗📕 📕]📕 📕 📕📗📕📗📒📒📒📒📒
📒[📘📕 📕📗📕📗📕📘📒📒📒📒]📒]📕📕[[📘]📒]📕[📕 📕 📕[📕📓📒📒📓📒📒📒]📒[📓📒📒📒📒]📕]📕📓📒📒📒📒
📒📒📒📒📒📒📒]
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
~ 中略 ~
(END)
```


# 感想
* emojiのチョイスが大変単調なものになってしまい、emoji力の低まりを感じた☹️  鍛えないと・・・🏋️🏋️🏋️
