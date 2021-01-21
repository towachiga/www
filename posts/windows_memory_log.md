---
date: "2017-01-21T07:21:26Z"
title: "windowsのメモリ使用量ログの簡単な取得方法"
---

## 目的
Windowsタスクマネージャーで表示されるメモリ使用量を記録する。

## 方法
コマンドプロンプトかPowershellで以下のコマンドを実行する(-o 以下のファイル名は任意)。

```dos
typeperf "\Memory\Available MBytes" -o memLog_Available_MB.csv
```

実行したディレクトリに「使用可能メモリ」がcsvファイルとして記録されるので、その値を物理メモリの合計から引く。

## 参考URL
[Tech TIPS：Windowsのtypeperfコマンドでシステムのパフォーマンスカウンタのデータを収集する](http://www.atmarkit.co.jp/ait/articles/0911/13/news105.html)