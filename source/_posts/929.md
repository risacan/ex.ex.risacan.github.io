---
title: "mysql2のエラー"
category: 
tags: 
created_at: 2017-03-27 23:07:47 +0900
updated_at: 2017-03-27 23:07:48 +0900
published: true
number: 929
---

# やったこと

mysql2というgemをインストールしようとしたら、エラー出てもた :scream: 

```error
$ gem install mysql2
~ 略 ~
An error occurred while installing mysql2 (0.4.5), and Bundler cannot continue.
Make sure that `gem install mysql2 -v '0.4.5'` succeeds before bundling.
```

# 対処
`xcode-select --install` する

