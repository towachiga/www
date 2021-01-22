---
title: SteamVR関係のメモ
date: "2019-03-03T23:43:09.000+09:0"
---

2021年1月21日追記: 以下の情報はかなり古いです。アップデートする気力が無いのでそのまま残しておきます。

## Controller Bindingを直接ブラウザから編集する
ChromeかFireFoxのアドレスバーに下記を入力する。PCの環境(ネットワーク系の何か？)によっては、VR上やデスクトップからメニューを押してもController BindingやManage Vive Trackerを開けないことがある。そういうときのための対処法。

```txt
localhost:8998/dashboard/controllerbinding.html
```

## SteamにログインせずにSteamVRを直接実行

```txt
C:¥Program Files (x86)¥Steam¥steamapps¥common¥SteamVR¥bin¥win64¥vrmonitor.exe
```

を実行｡デスクトップへショートカット作ると便利。binフォルダの中にはwin64とwin32があり、おそらくOSの32or64bitで実行ファイルが変わるはず。僕は64bitしか使ったことがないので未確認。なお、インターネット切断前にログイン状態を保持しておかないとsteamの"Offline Mode"は使用できない。

## Steamへログインできないとき
社内LANのプロキシが邪魔をしているので、社用のモバイルルーター等でプロキシを回避する。一旦ログインしたあとは､steamVRのダウンロードやアップデートは社内LAN経由で可能だった。

## SteamVRの旧バージョンをバックアップ
Enterprise版のViveProを買わない限り、古いsteamVRは入手できないので事前に下記フォルダをバックアップ(= 任意のフォルダへコピー)しておく。

```txt
C:¥Program Files (x86)¥Steam¥steamapps¥common¥SteamVR
```

なお、コピーしたフォルダから直接"vrmonitor.exe"を実行することはできない模様(以前はできたのだが……)。バージョンをロールバックする際は、上記の場所にバックアップしておいた"SteamVR"フォルダを配置すればいい。フォルダ名は"SteamVR"でないとだめなので、使うバージョン以外はフォルダ名を変えておく。