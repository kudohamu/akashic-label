# CHANGELOG

## 2.0.5

* 描画タイミングで、`glyph.surface` が存在しない場合の対応。
  * `drawImage` 前に、`glyph.isSurfaceValid` にてチェックを行い、破棄されていた場合、改めてglyphの作成を行うよう修正。

## 2.0.4

* サロゲート文字の一部が正しく描画できない問題の解消。

## 2.0.3

* 禁則処理を指定する `lineBreakRule` オプションを追加。

## 2.0.2

* サロゲート文字を正しく描画できない問題の解消。
* サンプルのディレクトリ構造を akashic-cli-init の typescript テンプレートに追従。

## 2.0.1

* サロゲート文字が文字化けする現象に対応。

## 2.0.0

* akashic-engine@2.0.0 系に追従。あわせてバージョンを 2.0.0 に。
* 非推奨だった `LabelParameterObject#bitmapFont` および `RubyOptions#rubyBitmapFont` を削除。

## 0.3.5

* publish対象から不要なファイルを除去。

## 0.3.4

* ビルドツールの変更
* TypeScriptの更新

## 0.3.3

* `trimMarginTop` `widthAutoAdjust` オプションを追加。

## 0.3.2

* 初期リリース
