# Personal Website

- [https://shobuzako-kensuke.github.io/](https://shobuzako-kensuke.github.io/)
- [al-folio](https://github.com/alshedivat/al-folio) のテンプレートを使用

> [!Note]
> 導入環境は Windows 11上の WSL2

### インストールに関する備忘録

- [install 手順](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md) の **Recommended Approach** に沿って行う
- 説明が分かりづらいが，`_config.yml` の `baseurl: /al-folio` の部分を `baseurl: ` に変更する必要がある

### 使い方の備忘録

- readme を勝手に変更したら「書き方が汚いので `npx prettier . --check` を実行せよ」と github actions に怒られた
  - `npx prettier` とは，コードのインデントや改行位置といった書き方のスタイルを綺麗にしてくれるコマンド
  - WSL2では `npx` がデフォルトで使用可能だが，バージョンが古かったので (`npx -v` で確認)，Node.js のバージョンを更新する `nvm` をインストールしし ([参考資料](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a))，再起動後，`nvm install --lts` を実行した
  - その後，`npx prettier . --check` を実行すると，今度はパッケージがないと怒られたので，`npm install` を実行し，現在のディレクトリに `package-lock.json` が追加した
  - そうすると，`npx prettier . --check` が使用可能になり，やはり README の書き方がダメと言われたので，`npx prettier . --write` を実行し，インデントを適当に揃えてもらった
