---
title: "Motherfucking Websiteコレクション"
date: "2018-04-22T20:55:04+09:00"
---

[Motherfucking Website](http://motherfuckingwebsite.com/)という、現代のウェブデザインを皮肉るようなページがある。趣旨としては、「これだけ単純なHTMLならデバイスを問わず読めるだろ、しかも速いだろ、クソヤロー!」といったところだが、これに触発されたいくつかの亜種といえるページが存在するので以下にまとめておく。形容詞で並べてみたが、それぞれ関係ない人が作っているので必ずしも後に挙げた方がより良いとは限らない(見る人によっても違う評価になるだろう)。

- [Motherfucking Website](http://motherfuckingwebsite.com/): オリジナル([日本語版](https://toshimaru.net/motherfuckingwebsite/))
- [Better Motherfucking Website](http://bettermotherfuckingwebsite.com/)
- [Even Better Motherfucking Website](https://evenbettermotherfucking.website/)
- [Best Motherfucking Website](https://bestmotherfucking.website/)
- [The Best Motherfucking Website](https://thebestmotherfucking.website/)
- [Perfect Motherfucking Website](http://perfectmotherfuckingwebsite.com/)

最初のもの以外はCSSで`max-width`を設定してあり、ワイドなディスプレイで見ても横に長い文章を読まされずに済む。HTMLの`meta`タグで`viewport`の指定をしないと、フォントや`max-width`が実際の解像度基準で解釈されてしまう。iPhone等の、小さくて高解像度なディスプレイで見づらくなってしまうことに注意しよう。

[Words](https://justinjackson.ca/words.html)([日本語版](https://justinjackson.ca/words_japan.html))
: Motherfucking Websiteと同様のコンセプトだが、viewport設定が無いためにiPhone等では見づらくなってしまっている例

## 感想
Web開発素人の私は、HTMLは文書構造、CSSは見た目、と認識していたので、HTMLの記述でサイト見た目が大きく変わってしまうことに面喰らった。

また、上記のページはいずれもペライチで、ナビゲーションが存在しない。個人ブログ的なサイトにはナビゲーションが欠かせないので、そのあたりも考慮したものがあってもいいように思う。