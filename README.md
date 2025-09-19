# Personal Website

- [https://shobuzako-kensuke.github.io/](https://shobuzako-kensuke.github.io/)
- [al-folio](https://github.com/alshedivat/al-folio) のテンプレートを使用

> [!Note]
> 導入環境は Windows 11上の WSL2

## 目次

- [Personal Website](#personal-website)
  - [目次](#目次)
  - [インストールに関する備忘録](#インストールに関する備忘録)
  - [README を編集する際の注意点](#readme-を編集する際の注意点)
  - [編集画面をローカルに出力する方法](#編集画面をローカルに出力する方法)
  - [ライトモードを除去してダークモードのみにする](#ライトモードを除去してダークモードのみにする)
  - [不必要なファイルたち](#不必要なファイルたち)
  - [必要なファイルたちと説明](#必要なファイルたちと説明)

## インストールに関する備忘録

- [install 手順](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md) の **Recommended Approach** に沿って行う
- 説明が分かりづらいが，`_config.yml` の `baseurl: /al-folio` の部分を `baseurl: ` に変更する必要がある

## README を編集する際の注意点

- READMEの書き方readme を勝手に変更したら「書き方が汚いので `npx prettier . --check` を実行せよ」と github actions に怒られた
- `npx prettier` とは，コードのインデントや改行位置といった書き方のスタイルを綺麗にしてくれるコマンド
- WSL2では `npx` がデフォルトで使用可能だが，バージョンが古かったので (`npx -v` で確認)，Node.js のバージョンを更新する `nvm` をインストールしし ([参考資料](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a))，再起動後，`nvm install --lts` を実行した
- その後，`npx prettier . --check` を実行すると，今度はパッケージがないと怒られたので，`npm install` を実行し，現在のディレクトリに `package-lock.json` を追加した (`package.json` に必要な package が書かれてある)
- そうすると，`npx prettier . --check` が使用可能になり，やはり README の書き方がダメと言われたので，`npx prettier . --write` を実行し，インデントを適当に揃えてもらった

> [!Note]
>
> - README を編集したら，`npx prettier . --check` を実行し，問題があれば `npx prettier . --write` を実行する
> - `.` は再帰的に調べてくれる
> - 特定のファイルだけを `--write` したい場合は，上記の `.` にそのファイル名を入れる

## 編集画面をローカルに出力する方法

- 以下の手順で `Docker` をインストール
  - [Docker 公式ページ](https://docs.docker.com/get-started/get-docker/) からインストーラーを入手
  - 実行して `Docker` をインストール (1回目はなぜか失敗したので，アンインストールしてもう一度インストールした)
  - `Docker Desktop` がデスクトップに作成されるので起動
  - 歯車マークから `Resources`，`WSL integration` の順に選択
  - `Enable integration with my default WSL distro` をオンにし，その下の `Ubuntu` もオンにして設定を保存
  - HPの材料が置いてあるローカルディレクトリに移動して，`docker --version` を実行して，バージョンが出力されたらok
- `sudo docker compose pull` を実行して必要な部品をダウンロード
- `sudo docker compose up` を実行してローカルサーバーを起動
- Web ブラウザから `http://localhost:8080` にアクセスすると，編集画面が見える
- ローカルサーバーの電源を切るには `ctrl + C` を実行
  > [!Note]
  >
  > - これからは `Docker Desktop` をクリックして，docker を起動した後，`sudo docker compose up` を実行し，`http://localhost:8080` で編集画面を随時確認
  > - 編集箇所は自動で反映されるが，ブラウザを再リロードする必要がある

## ライトモードを除去してダークモードのみにする

- `_sass/themes.scss` ファイルを開く
- `:root` (ライトモードの配色)を `color-scheme: dark;` (ダークモードの配色)に塗り替える
- 続いて，`_sass/layout.scss` ファイルを開く
- 以下のコードをファイル末尾に付け足す

```
/* ----- ダークモード固定用のカスタム設定 ----- */
// テーマ切り替えボタンを非表示にする
.toggle-container {
  display: none;
}
```

## 不必要なファイルたち

- 元々の [al-folio](https://github.com/alshedivat/al-folio) には，ウェブサイト編集とは無関係なファイル (リポジトリの説明など) が含まれるので，これらを削除した
  - `readme_preview/`
  - `.all-contributorsrc`
  - `CUSTOMIZE.md`
  - `CONTRIBUTING.md`
  - `FAQ.md`
  - `INSTALL.md`
  - `requirement.txt`

## 必要なファイルたちと説明

以下の「**編集するコンテンツ」以外は基本的に触らないこと**
| 大区分 | ファイル/フォルダ | 役割 |
| :--- | :--- | :--- |
| **編集するコンテンツ** | `_bibliography` | 論文リストのデータ (.bib) を保存する場所 |
| | `_books` | 読んだ本のリストなど，カスタムコンテンツを保存する場所 |
| | `_news` | news 項目を保存する場所 |
| | `pages` | About (Home) や CV など，サイトの固定頁を保存する場所 |
| | `_posts` | blog や news 記事を保存する場所 |
| | `_projects` | projects のコンテンツを保存する場所 |
| | `_assets` | サイトで使う画像やファイルを置く場所　|
| | `README.md` | リポジトリの説明書 |
| 見た目やルールの設定 | `_data` | SNS リンクなど，サイトで使うデータを管理する場所 |
| | `_includes` | ヘッダーやフッターなど，再利用される HTML の部品置き場 |
| | `_layouts` | ページの基本的なレイアウトを定義するテンプレート集 |
| | `_sass` | サイトの配色，フォントなどを決める CSS の設計図 |
| | `_config.yml` | サイト全体のタイトルや，種々の機能の ON/OFF などを設定する司令塔 |
| サイトをビルドするのに必要なもの | `.github` | GitHub Actions (自動デプロイ) の設定ファイル |
| | `Gemfile` | Jekyll (Ruby) に必要な部品リスト |
| | `Gemfile.lock` | Jekyll に必要な部品のバージョン記録 |
| | `package.json` | Prettier (JavaScript) に必要な部品リスト |
| | `package-lock.json` | Prettier (JavaScript) に必要なバージョン記録 |
| ローカル開発環境 (Docker) に必要なもの |
| | `_bin` | Docker コンテナが起動する際の自動実行スクリプト置き場 |
| | `docker-compose.yml` | `docker compose up` で使用する説明書 |
| | `docker-compose-slim.yml` | 上記の軽量版 |
| | `Dockerfile` | Docker イメージ (仮想PC) のレシピ |
| 無視するリスト | `.dockerignore` | Docker イメージに含めたくないファイルを書く　(`_assets` を消去すること) |
| | `git-blame-ignore-revs` | git blame コマンドで無視してほしい履歴を指定する |
| | `.gitignore` | Git に追跡させたくないファイルを書く |
| | `lycheeignore` | リンク切れチェックツールに，チェックさせたくない URL を書く |
| 自動生成されるもの | `_site` | Jekyll がサイトをビルドして，完成したウェブサイトが格納される場所 |
| | `.jekyll-cache` |　Jekyll がサイトをビルドする際の高速化用キャッシュ |
| | `tweet-cache` | サイトに埋め込んだ tweet の情報を保存しておくキャッシュ |
| | `lighthouse_results` | サイト性能測定ツールの結果を保存する場所 |
| | `node_modules` | インストールされた JavaScript 部品が格納される場所 |
| コード整形ツール | `.pre-commit-config.yaml` | Git コミット前に，Prettier を自動実行するためのチェックリスト |
| | `.prettierignore` | Prettier の無視リスト |
| | `prettierrc` | Prettier のルールブック |
| その他 | `_plugins` | Jekyll の機能を拡張したり，便利なスクリプトを置いたりする場所 |
| | `_scripts` | |
| | `.devcontainer` | VS Code 用の開発環境の設計図 |
| | `gitattributes` | 改行コードの統一など，Git の挙動を決めるルールブック |
| | `LICENSE` | ライセンス (消去してはいけない) |
| | `purgecss.config.js` | 不要な CSS を削減してサイトを高速化するツールの設定ファイル |
| | `robots.txt` | 検索エンジンロボットへの指示書 |
