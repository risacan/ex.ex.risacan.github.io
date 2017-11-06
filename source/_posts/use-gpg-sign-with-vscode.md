---
title: "Visual Studio CodeからのコミットにもGPGの署名をする"
category:
tags:
created_at: 2017-07-01 20:02:36 +0900
updated_at: 2017-07-01 20:02:36 +0900
published: true
number: 1000
---

# やったこと
`~/.gnupg/gpg.conf` ファイルの一番下に "no-tty"て書く

https://github.com/Microsoft/vscode/issues/5065#issuecomment-207960831

```
echo 'no-tty' >> ~/.gnupg/gpg.conf
```

# 困ってた
コミットにGPG([GNU Privacy Guard \- Wikipedia](https://ja.wikipedia.org/wiki/GNU_Privacy_Guard))署名してGitHubにプッシュするとVerifyマークつくのでやってました

<img width="1129" alt="スクリーンショット 2017-07-01 19.56.07.png (69.4 kB)" src="https://img.esa.io/uploads/production/attachments/2057/2017/07/01/5683/c12a92bb-b403-42da-ab77-c50788c099ee.png">

ところが、VS Code (Visual Studio Code) のコミットを使うとなんか変なエラーでてコミットできなかったんです。これの解決法がみつからなくてコミットはつねにコンソールからやっていたのですが、VS
 Codeのコミット機能がわかりやすくてシンプルで好きなのでもういっかい解決法を探してみたら見つかりましたー！
わーい

