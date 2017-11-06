---
title: "rubotyのプラグイン作った"
category:
tags:
created_at: 2016-10-06 23:16:33 +0900
updated_at: 2017-02-06 12:25:37 +0900
published: true
number: 686
---

[Ruboty](https://github.com/r7kamura/ruboty)のplugin gemを作った〜！

# どんなgem
[ruboty-snack](https://github.com/risacan/ruboty-snack)
「お腹すいた」という言葉に反応してご飯系の絵文字を返してくれる。
![ruboty-snack.gif (1.6 MB)](https://img.esa.io/uploads/production/attachments/2057/2016/11/05/5683/82872d0c-2e10-4d5f-ae44-c29f141272fc.gif)

以下、説明を書いたのだが、読みづらすぎるので、丁寧に書き直したい。
「理系の作文技術」を読み返そう、「数学文章作法」も読みたい。

# gemの作り方
1. gemの名前を決める
1. `bundle gem`でgemの雛形を作る
1. gemspecを編集する
1. gemの中身を書く
1. gemのパッケージを作る
1. リリースする

# 名前を決める
まず、gemの名前をきめる。
rubygemsで名前がかぶっていないか確認する。
今回のgemは、Rubotyがおやつを投げてくれるので `ruboty-snack`にした。:candy:

# bundle gemする
gemの雛形をつくるために、 `bundle gem ruboty-snack` する。


```bash
🌸 bundle gem ruboty-snack
🌸 tree
.
└── ruboty-snack
    ├── Gemfile
    ├── LICENSE.txt
    ├── README.md
    ├── Rakefile
    ├── bin
    │   ├── console
    │   └── setup
    ├── lib
    │   └── ruboty
    │       ├── snack
    │       │   └── version.rb
    │       └── snack.rb
    ├── ruboty-snack.gemspec
    └── spec
        ├── ruboty
        │   └── snack_spec.rb
        └── spec_helper.rb
```

#  gemspecを書く
生成された `ruboty-snack.gemspec` をひらいて、`TODO` と書かれている箇所を編集する。
gemを公開するなら以下の箇所は消す。

```ruby
  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end
```
rubotyのgemだったら、`spec.add_dependency "ruboty"` を書き忘れないようにする :point_up:

# gemの中身を書く
Rubotyのgemはディレクトリにお作法がある。
ハンドラーは`lib/ruboty/handlers/snack.rb` に記述する。
`lib/ruboty/snack.rb` の中で、ハンドラーのファイルを `require` する。

#  releaseする
GitHubにディレクトリを作ってプッシュする。
rubygems.orgにアカウントを作っておく。
`bundle exec rake build` すると、`.gem` :package: を作ってくれる

最終的なディレクトリはこんな感じ

```bash
🌸 tree
.
├── Gemfile
├── Gemfile.lock
├── LICENSE.txt
├── README.md
├── Rakefile
├── bin
│   ├── console
│   └── setup
├── lib
│   └── ruboty
│       ├── handlers
│       │   └── snack.rb
│       ├── snack
│       │   └── version.rb
│       └── snack.rb
├── pkg
│   └── ruboty-snack-0.1.0.gem
├── ruboty-snack.gemspec
└── spec
    ├── ruboty
    │   └── snack_spec.rb
    └── spec_helper.rb
```

 `bundle exec rake release` する :tada:
何かを修正したら、`lib/ruboty/snack/versions.rb` でバージョン数を上げてコミットして、buildとreleaseすればおけ。

# 感想
はじめてgem releaseしたので嬉しかった！ :relaxed:
はじめてのPull Requestももらった！ :heart_eyes:
このgemをつかって[kombu_bot](https://twitter.com/kombu_bot)を作ったらリアクションしてくれる人がいて嬉しい。pploggerの皆様、宣伝ありがとうございます。
