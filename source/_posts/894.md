---
title: "AlbedoとEmission"
category: 
tags: unity
created_at: 2017-02-27 13:37:14 +0900
updated_at: 2017-02-27 13:37:15 +0900
published: true
number: 894
---

# やったこと
* UnityのMaterialに色を設定しようとして`Albeto`に色を設定したら、Scene View 上では設定したものより黒っぽい色が表示された :scream: そこで、もう一つ色が選べそうなところがあったのでそっちに色を設定してみたら、期待通りの鮮やかな青が表示された。

# Albelto
* [Unity \- マニュアル: Albedo カラーと Transparency（透明度）](https://docs.unity3d.com/ja/current/Manual/StandardShaderMaterialParameterAlbedoColor.html)

> アルベドパラメーターは、表面のベースカラーを制御します。

# Emission
* [Unity \- マニュアル: Emission](https://docs.unity3d.com/ja/current/Manual/StandardShaderMaterialParameterEmission.html)

> 表面から放出される光の色と強度を制御します。emissive マテリアルは、シーン内で使用される場合、それ自体が可視光の光源であるように見えます。オブジェクトは “自己発光” しているように見えます。

# 結論
`Albelto` はものの色。光があたってないところは黒くなる。
`emmision` はLED電球の色みたいな感じ。その他の光源がなければその色に見える。

