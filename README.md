# React Chrome Extension Starter

## セットアップ

```
git clone <git@ or https:>
cd react-chrome-extension-starter
yarn
```

## npm script

開発時に実行

```
yarn start
```

productionビルド

```
yarn build
```

react-chrome-extension-starter/publish.zip を作成
chrome拡張公開時にはこのファイルをアップロードする

```
yarn archive
```

`__test__` ディレクトリを見てのテスト

```
yarn test
```

snapshotの更新

```
yarn test -u
```

## 公開手順

- [Dashboard](https://chrome.google.com/webstore/developer/dashboard)にアクセス
- `yarn archive` で圧縮したzipファイルをアップロード
- アイコン画像を選択
- その他記入しておきたい事項を入力
- 画面下部にある公開ボタンで公開(公開後にストアに反映されるのは最大60分ほどかかるので注意)
