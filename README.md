# Personal Website powered by a Japanese version of [al-folio](https://github.com/alshedivat/al-folio)

- テンプレートとして [al-folio](https://github.com/alshedivat/al-folio) を使用
- ただし，日本語ウェブサイト用に改変
- 環境は Windows 11 ( [WSL2](https://qiita.com/zakoken/items/61141df6aeae9e3f8e36) を使用)

> [!Warning]
>
> - 本ウェブサイトを利用する場合は，以下の全ての手順を実行し，私のプロフィールに関する箇所を全て修正してから公開してください．<br>
> - 修正漏れがあると **_Kensuke Shobuzako_** のウェブサイトとして，公開されてしまう恐れがあります．

**目次**

- [Personal Website powered by a Japanese version of al-folio](#personal-website-powered-by-a-japanese-version-of-al-folio)
  - [al-folio ウェブサイトの基本](#al-folio-ウェブサイトの基本)
  - [インストール手順](#インストール手順)
  - [README を編集する際の注意点](#readme-を編集する際の注意点)
  - [ローカル環境で仮想的にウェブサイトをビルドする](#ローカル環境で仮想的にウェブサイトをビルドする)
  - [~~ライトモードを除去してダークモードのみにする~~（2026/3/13変更）](#ライトモードを除去してダークモードのみにする2026313変更)
  - [不必要なファイルたち](#不必要なファイルたち)
  - [必要なファイルたちと説明](#必要なファイルたちと説明)
  - [背景色や文字色を変える方法](#背景色や文字色を変える方法)
  - [基本情報の設定方法](#基本情報の設定方法)
  - [フッターの設定方法](#フッターの設定方法)
    - [フッターを固定する](#フッターを固定する)
    - [フッターを編集する](#フッターを編集する)
  - [ナビゲーションバーの設定](#ナビゲーションバーの設定)
  - [ホーム の編集](#ホーム-の編集)
    - [~~SNS リンク (アイコン) の設定~~（2026/3/15変更）](#sns-リンク-アイコン-の設定2026315変更)
  - [プロフィール の編集（2026/3/16変更）](#プロフィール-の編集2026316変更)
  - [研究/研究内容 の編集 (2026/3/17変更)](#研究研究内容-の編集-2026317変更)
  - [研究/論文リスト と 発表リスト の編集 (2026/3/17変更)](#研究論文リスト-と-発表リスト-の編集-2026317変更)
  - [資料/ソフトウェア の編集](#資料ソフトウェア-の編集)
  - [資料/Web記事 と 資料/ノート の編集](#資料web記事-と-資料ノート-の編集)
  - [ニュース の編集](#ニュース-の編集)
  - [ブログ の編集](#ブログ-の編集)
  - [Google サーチコンソール と アナリティクス への登録](#google-サーチコンソール-と-アナリティクス-への登録)
    - [データが反映されてからすること](#データが反映されてからすること)

## [al-folio](https://github.com/alshedivat/al-folio) ウェブサイトの基本

- **コンテンツ作成**：Markdown (`.md`) や，データファイル (`.yml`, `.json`, `.bib`) を編集する
- **デザイン変更**：
  - 構造：`_includes` や `_layout` ディレクトリに含まれる `.liquid` ファイルを編集する
  - 見た目：`_sass` ディレクトリに含まれる `.scss` ファイルを編集する
- **ビルド**：これらの部品は [Jekyll](https://jekyllrb-ja.github.io/) と呼ばれるツールを通じて，一連の html ファイルを生成する
- **ローカルプレビュー**：[Docker](https://www.docker.com/ja-jp/) (`docker compose up`) により，公開前に内容を確認できる
- **デプロイ**：`git push` などにより GitHub にデータがアップロードされると [GitHub Actions](https://github.co.jp/features/actions) により，Jekyll が自動的に呼び出されてウェブサイトのビルドが始まる
- **公開**：出来上がったウェブサイト (`_site` ディレクトリの中身)は，`gh-pages` ブランチに書き込まれ，[GitHub Pages](https://docs.github.com/ja/pages) を通じてインターネット上に公開される

> [!Note]
>
> - デプロイとは，サーバー上にデータを置き，利用可能な状態にすること
> - `.liquid` は Jekyll によって呼び出され，静的な html ファイルを生成する
> - VS Code において，liquid ファイルのおすすめ拡張機能は `Shopify Liquid`

## インストール手順

[元リポジトリの install 手順](https://github.com/alshedivat/al-folio/blob/main/INSTALL.md) の **Recommended Approach** に沿って行う．以下が具体的な手順：

1. 本リポジトリを `Fork` ([英語のオリジナル版](https://github.com/alshedivat/al-folio)を利用したい場合は，オリジナル版を `Fork` する)
2. その際，リポジトリ名は `<GitHub ユーザー名>.github.io` とし，"Copy the `main` branch only" にチェックを入れること
3. `Fork` したら，`Setting` -> `Actions` -> `General` -> `Workflow permissions` の順に進み，`Read and write permissions` を選択し，保存する
4. `Fork` したリポジトリ内の `_config.yml` を開き，20行目くらいにある `url` を `https://<GitHub ユーザー名>.github.io` と変更する (GitHub 上で行わず，ローカル環境で行う場合は，加えて `git push` すること)
5. GitHub Actions が起動し，サイトのデプロイが始まる (4分くらい待つ)
6. 成功すると，`main` ブランチに加えて，`gh-pages` ブランチが作成される
7. その後，ブラウザ上で `https://<GitHub ユーザー名>.github.io` にアクセスすると，無事ウェブサイトが完成している (はず)

## README を編集する際の注意点

- README を勝手に変更したら「書き方が汚いので `npx prettier . --check` を実行せよ」と github actions に怒られた
- `npx prettier` とは，コードのインデントや改行位置といった書き方のスタイルを綺麗にしてくれるコマンド
- WSL2では `npx` がデフォルトで使用可能だが，バージョンが古かったので (`npx -v` で確認)，Node.js のバージョンを更新する `nvm` をインストールし ([参考資料](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a))，再起動後，`nvm install --lts` を実行した
- その後，`npx prettier . --check` を実行すると，今度はパッケージがないと怒られたので，`npm install` を実行し，現在のディレクトリに `package-lock.json` を追加した (`package.json` に必要な package が書かれてある)
- そうすると，`npx prettier . --check` が使用可能になり，やはり README の書き方がダメと言われたので，`npx prettier . --write` を実行し，インデントを適当に揃えてもらった

> [!Important]
>
> - これからは README を編集したら，`npx prettier . --check` を実行し，問題があれば `npx prettier . --write` を実行する
> - このコマンドにおいては `.` は再帰的に調べてくれるようである
> - 特定のファイルだけを `--write` したい場合は，上記の `.` にそのファイル名を入れる

## ローカル環境で仮想的にウェブサイトをビルドする

- 以下の手順で `Docker` をインストール
  - [Docker 公式ページ](https://docs.docker.com/get-started/get-docker/) からインストーラーを入手
  - 実行して `Docker` をインストール (1回目はなぜか失敗したので，アンインストールしてもう一度インストールした)
  - `Docker Desktop` がデスクトップに作成されるので起動
  - (WSL の場合) 歯車マークから `Resources`，`WSL integration` の順に選択
  - (WSL の場合) `Enable integration with my default WSL distro` をオンにし，その下の `Ubuntu` もオンにして設定を保存
- ウェブサイトの材料が置いてあるローカルディレクトリに移動して，`docker --version` を実行して，バージョンが出力されたらok
- `sudo docker compose pull` を実行して必要な部品をダウンロード
- `sudo docker compose up` を実行してローカルサーバーを起動
- Web ブラウザから `http://localhost:8080` もしくは `http://0.0.0.0:8080` にアクセスすると，ビルドされたウェブサイトを見ることができる
- ローカルサーバーの電源を切るには `ctrl + C` を実行

> [!Important]
>
> - これからは `Docker Desktop` をクリックして，docker を起動した後，`sudo docker compose up` を実行し，`http://localhost:8080` もしくは `http://0.0.0.0:8080` でウェブサイトを随時確認
> - 編集箇所は自動で反映されるが，ブラウザを再リロードして確認すべし

## ~~ライトモードを除去してダークモードのみにする~~（2026/3/13変更）

> [!Note]
> 2026/3/13: オリジナルの設定に戻した

~~オリジナルの [al-folio](https://github.com/alshedivat/al-folio) には，ダークモードとライトモードの2種類をユーザーが手動で切り替えられるスイッチがナビゲーションバーに存在する．<br>~~

~~うっとおしいので，以下により削除した~~

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

オリジナルの [al-folio](https://github.com/alshedivat/al-folio) には，ウェブサイト編集とは無関係なファイル (リポジトリの説明など) が含まれるので，これらを削除した

- `readme_preview/`
- `.all-contributorsrc`
- `CUSTOMIZE.md`
- `CONTRIBUTING.md`
- `FAQ.md`
- `INSTALL.md`
- `requirement.txt`

## 必要なファイルたちと説明

| 大区分                                 | ファイル/フォルダ         | 役割                                                                    |
| :------------------------------------- | :------------------------ | :---------------------------------------------------------------------- |
| **編集するコンテンツ**                 | `_bibliography`           | 研究業績データ (.bib) を保存する場所                                    |
|                                        | `_books`                  | 読んだ本のリストなど，カスタムコンテンツを保存する場所                  |
|                                        | `_news`                   | news 項目を保存する場所                                                 |
|                                        | `_pages`                  | Home や Profile といった固定ページを保存する場所                        |
|                                        | `_posts`                  | blog 記事を保存する場所                                                 |
|                                        | `_projects`               | projects のコンテンツを保存する場所                                     |
|                                        | `assets`                  | サイトで使う画像やファイルを置く場所　                                  |
|                                        | `README.md`               | リポジトリの説明書                                                      |
|                                        | `_data`                   | Profile や SNS リンクなど，サイトで使うデータを管理する場所             |
| 見た目やルールの設定                   | `_includes`               | ヘッダーやフッターなど，再利用される Liquid ファイルの部品置き場        |
|                                        | `_layouts`                | ページの基本的なレイアウトを定義するテンプレート集                      |
|                                        | `_sass`                   | サイトの配色，フォントなどを決める CSS の設計図                         |
|                                        | `_config.yml`             | サイト全体のタイトルや，種々の機能の ON/OFF などを設定する司令塔        |
| サイトをビルドするのに必要なもの       | `.github`                 | GitHub Actions (自動デプロイ) の設定ファイル                            |
|                                        | `Gemfile`                 | Jekyll (Ruby) に必要な部品リスト                                        |
|                                        | `Gemfile.lock`            | Jekyll に必要な部品のバージョン記録                                     |
|                                        | `package.json`            | Prettier (JavaScript) に必要な部品リスト                                |
|                                        | `package-lock.json`       | Prettier (JavaScript) に必要なバージョン記録                            |
| ローカル開発環境 (Docker) に必要なもの | `_bin`                    | Docker コンテナが起動する際の自動実行スクリプト置き場                   |
|                                        | `docker-compose.yml`      | `docker compose up` で使用する説明書                                    |
|                                        | `docker-compose-slim.yml` | 上記の軽量版                                                            |
|                                        | `Dockerfile`              | Docker イメージ (仮想PC) のレシピ                                       |
| 無視するリスト                         | `.dockerignore`           | Docker イメージに含めたくないファイルを書く　(`_assets` を消去すること) |
|                                        | `git-blame-ignore-revs`   | git blame コマンドで無視してほしい履歴を指定する                        |
|                                        | `.gitignore`              | Git に追跡させたくないファイルを書く                                    |
|                                        | `lycheeignore`            | リンク切れチェックツールに，チェックさせたくない URL を書く             |
| 自動生成されるもの                     | `_site`                   | Jekyll がサイトをビルドして，完成したウェブサイトが格納される場所       |
|                                        | `.jekyll-cache`           | 　Jekyll がサイトをビルドする際の高速化用キャッシュ                     |
|                                        | `tweet-cache`             | サイトに埋め込んだ tweet の情報を保存しておくキャッシュ                 |
|                                        | `lighthouse_results`      | サイト性能測定ツールの結果を保存する場所                                |
|                                        | `node_modules`            | インストールされた JavaScript 部品が格納される場所                      |
| コード整形ツール                       | `.pre-commit-config.yaml` | Git コミット前に，Prettier を自動実行するためのチェックリスト           |
|                                        | `.prettierignore`         | Prettier の無視リスト                                                   |
|                                        | `prettierrc`              | Prettier のルールブック                                                 |
| その他                                 | `_plugins`, `_scripts`    | Jekyll の機能を拡張したり，便利なスクリプトを置いたりする場所           |
|                                        | `.devcontainer`           | VS Code 用の開発環境の設計図                                            |
|                                        | `gitattributes`           | 改行コードの統一など，Git の挙動を決めるルールブック                    |
|                                        | `LICENSE`                 | ライセンス (消去してはいけない)                                         |
|                                        | `purgecss.config.js`      | 不要な CSS を削減してサイトを高速化するツールの設定ファイル             |
|                                        | `robots.txt`              | 検索エンジンロボットへの指示書                                          |

## 背景色や文字色を変える方法

- `_sass/_themes.scss` に色設定があるので，これをいじれば良い
- `#000000` として直接指定しても良いし，`_sass/_variables.scss` で定義されているカラーを使っても良い

## 基本情報の設定方法

`_config.yml` 最上部の `Site settings` を以下のように変更
| 項目 | 説明 | すること |
| :--- | :--- | :--- |
| `title` | ウェブサイトの名前 (タブ名) | `blank` にすると勝手に名前が入るが，日本語検索で引っ掛かりやすくするために，例えば `菖蒲迫 健介 (Kensuke Shobuzako)` とかにする |
| `*_name` | 名前 | 自分の名前を入れる (middle name は空欄で良い) |
| `contact_note` | SNS アイコン郡の下の注釈 | 適当に書く |
| `description` | サイトの短い説明文 (サイトを共有した時に表示される) | 例：`Official homepage of Kensuke Shobuzako` |
| `footer_text` | フッターに表示されるクレジット情報 | [フッターの設定方法](#フッターの設定方法) と組み合わせて使う |
| `keywords` | 検索エンジン向けのキーワード (設定しなくても良い) | 例：`Kensuke Shobuzako, 菖蒲迫健介, researcher, computational fluid dynamics, particle methods` |
| `lang` | 言語 | 例：`ja` (日本語) |
| `icon` | ファビコン (ブラウザタブのアイコン) | 絵文字を直接貼り付ける or 画像 (正方形かつ低ピクセル (64 $\times$ 64)) を `assets/img/` 内に設置し，その画像名を `_config.yml` の `icon:` 以下で指定 (自分は [Phosphor](https://phosphoricons.com/) からアイコンを取得) |
| `url` | サイトのURL | 自分の GitHub Pages の URL を書く |
| `baseurl` | サイトがサブディレクトリにある場合に設定 | 通常は空欄 |
| `last_updated` | 最終更新日をフッターに表示 | 表示したい場合は `true`にする |
|`impressum_path`| EU の法律で要求されるリンクを貼る | 日本では不要なので空欄にする |
|`back_to_top`| ページ右下に「トップへ戻る」ボタンを表示 | 表示したい場合は`true` にする |

## フッターの設定方法

### フッターを固定する

- デフォルトではフッターが可動式で，いちいち画面に割り込んでくるのでうざい
- これを固定する方法は以下の通り
  - `_config.yml` の `Layout` セクションを見つける
  - `footer_fixed:` の `true` を `false` に変更

### フッターを編集する

- 編集は `_config.yml` と `_includes/footer.liquid` の二つを組み合わせて行う
- `_config.yml` 最上部の `Site_settings` にある `footer_text` で，著作権と更新日以外の書きたい内容を書いておく
- `_includes/footer.liquid` 内の以下のコンテンツをいじれば，表示内容が変わる

```
{% capture footer_contents %}
  &copy; Copyright {{ site.time | date: '%Y' }}
  {{ site.first_name }}
  {{ site.middle_name }}
  {{ site.last_name }}. {{ site.footer_text }}
  {% if site.impressum_path %}
    <a href="{{ site.url }}{{ site.baseurl }}{{ site.impressum_path }}">Impressum</a>.
  {% endif %}
  {% if site.last_updated %}
    Last updated: {{ 'now' | date: '%B %d, %Y' }}.
  {% endif %}
{% endcapture %}
```

- `{{ }}` で囲まれた部分が引数になっており，`_config.yml` で設定した `footer_text` は `{{ site.footer_text }}` に代入される
- これを以下のように書き直した

```
{% capture footer_contents %}
  &copy; Copyright 2025
  {{ site.first_name }}
  {{ site.middle_name }}
  {{ site.last_name }}.<br>
  {{ site.footer_text }} <br>
  {% if site.impressum_path %}
    <a href="{{ site.url }}{{ site.baseurl }}{{ site.impressum_path }}">Impressum</a>.
  {% endif %}
  {% if site.last_updated %}
    Last updated: {{ 'now' | date: '%B %d, %Y' }}.
  {% endif %}
{% endcapture %}
```

> [!Note]
> 可愛いアイコン (ファビコン) がある場所：[https://phosphoricons.com/](https://phosphoricons.com/)

## ナビゲーションバーの設定

現在のナビゲーションバーの設定は以下の通り．

- Home（ホーム）
- Profile（プロフィール）
- Research（研究）
  - Projects（研究内容）
  - Publications（出版物リスト）
  - Presentations（発表リスト）
- Works（資料）
  - Software（ソフトウェア）
  - Articles（Web記事）
  - Research Notes（ノート）
- News（ニュース）
- Blog（ブログ）

なお，オリジナルの [al-folio](https://github.com/alshedivat/al-folio) では，他に様々なコンテンツが用意されているので，これらは削除せず，単に非表示にしている．<br>
ナビゲーションバーの表示・非表示をいじりたい場合は，`_pages/*.md` に書いてあるフロントマター (---で囲まれた領域) の `nav: true` や `nav_order: *` を適宜変更すれば良い．

## ホーム の編集

`_pages/about.md` が主な編集場所．最初に書かれているフロントマターと呼ばれる部分 (`---` で囲まれた部分) をいじることで，設定を変更可能．

> [!Note]
>
> - レイアウトを変更するには `_layout/about.html` を編集する必要あり
> - 詳しくは書かないが，色々いじっている
> - なお，英語版は `_pages/about_en.md` を編集すること

### ~~SNS リンク (アイコン) の設定~~（2026/3/15変更）

> [!Note]
> 2026/3/15: リサーチマップのアイコンがないので手動に変更

- 作業場所は `_data/socials.yml` と `_includes/social.liquid`
- 前者で URL などを設定
- 後者でアイコンを指定できるが，ここではデフォルト設定のまま
- 自分は `_sass/_layout.scss` を編集して SNS アイコンの位置を上部に設置

## プロフィール の編集（2026/3/16変更）

> [!Note]
>
> - 2026/3/16: オリジナルの仕様はブラックボックスが多く煩雑なので，`layout: page` にして自由に書けるようにした
> - 今後は `_pages/cv.md` を編集すること

- 基本設定は `_pages/cv.md` で行う
- 内容の編集は `assets/json/resume.json` で行う
- Profile 画面のレイアウトの設定は `_layouts/cv.liquid` で行う
- 各内容のレイアウトの設定は `_includes/resume/*.liquid` で個別に行う

## 研究/研究内容 の編集 (2026/3/17変更)

> [!Note]
>
> - 2026/3/17: オリジナルの仕様はブラックボックスが多く煩雑なので，`layout: page` にして自由に書けるようにした
> - 今後は `_pages/projects.md` を編集すること

- 基本設定は `_pages/projects.md` で行う
- 具体的なプロジェクト内容は `_projects/` の中にマークダウンファイル (`.md`) を作成して書き込む
- `category` 毎に分別される

## 研究/論文リスト と 発表リスト の編集 (2026/3/17変更)

> [!Note]
>
> - 2026/3/17: オリジナルの仕様はブラックボックスが多く煩雑なので，`layout: page` にして自由に書けるようにした
> - 今後は `_pages/presentations.md` および `_pages/publications.md` を編集すること

準備：`_config.yml` ファイルの `Jekyll Scholar` というセクションを検索した後，`scholar:` で自分の名前を入力しておく (これにより自分の名前がハイライトされる)．

- 基本設定は `_pages/publications.md` および `_pages/presentations.md` で行う
- 具体的な業績等は，`_bibliography` ディレクトリ内部の bib ファイルを編集する
- 新たに bib ファイルを追加することも可能で，その場合は上記の基本設定で呼び出すことを忘れずに
- bib ファイルで指定可能なカスタム変数のメモ：
  - `abbr` : 略称バナーの設定 (`_data/venues.yml` で設定)
  - `selected = {true}` : 主要論文としてマークし，Home に表示
  - `preview` : 論文横に表示される画像 (`assets/img/publication_preview` に設置)

## 資料/ソフトウェア の編集

- 基本設定は `_pages/software.md` で行う
- ユーザー名やリポジトリ名は `_data/repositories.yml` で編集する
- 複数のユーザー名を登録可能
- デフォルトではトロフィー機能が有効になっているが，煩わしいので，以下の手順により非表示にした
  - `_config.yml` より `repo_trophies:` を検索
  - `enabled: true` を `false` に変更

## 資料/Web記事 と 資料/ノート の編集

- 編集は `_pages/articles.md` もしくは `_pages/research_notes.md` で行う
- これらは自分が新しく加えたファイルで，例えば，講義ノート (`lecture_notes`) を新たに加えることも可能
  - その場合は，`_pages/works.md` のフロントマターに追加することを忘れずに
- 本リポジトリに記事やノートの pdf ファイルを直接置いても良いが，容量が大きくなる可能性があるので，自分は google ドライブに置いて，その公開リンクを張り付けた

## ニュース の編集

- 基本設定は `_pages/news.md` で行う
- 具体的な内容は `_news` ディレクトリに，各ニュース毎のマークダウンファイル (`.md`) を作成して，そこに書く
- ただし，各ファイル名は作成日とタイトルを合わせた形式 (`YYYY-MM-DD-title.md`) で書く
- 各ファイル上部にあるフロントマター (`---`で囲まれた場所) の `inline` は
  - `false` にするとタイトルのみ表示される (ニュースが長い場合に有効)
  - `true` にすると全文が表示される

## ブログ の編集

- 基本設定は `_config.yml` の `Blog` と `Jekyll Archives` の部分および `_pages/blog.md` で行う
- ただし，`_pages/blog.md` については，フロントマター以外は触らなくて良い
- 具体的な内容は `_posts` ディレクトリにマークダウンファイル (`.md`) を作成して，そこに書く
- ただし，各ファイル名は作成日とタイトルを合わせた形式 (`YYYY-MM-DD-title.md`) で書く
- ~~自分へのメモ：表の具体的な項目内容は`assets/json/`以下に保存する~~

## Google [サーチコンソール](https://search.google.com/search-console/about?hl=ja) と [アナリティクス](https://developers.google.com/analytics?hl=ja) への登録

- [Google サーチコンソール](https://search.google.com/search-console/about?hl=ja)とは，「どのような検索キーワードで何回表示され，何回クリックされたか」を記録してくれる無料のツール
- [Google アナリティクス](https://developers.google.com/analytics?hl=ja) とは，「ウェブサイトを訪問した人がサイト内で何をしたか」を記録してくれる無料ツール
- 特に，前者は [Google クローラー](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=ja) にウェブサイトの URL をリクエストして，検索エンジンへの登録を催促できる
- 登録方法は以下の通り (Google アカウントが必要)．

1. [Google Search Console](https://search.google.com/search-console/about?hl=ja) に自分の Google アカウントでログイン
2. 左上のメニューから「プロパティの追加」を選択
3. 「プロパティタイプの選択」が表示されるので，「URL プレフィックス」にウェブサイトの URL (例：`https://<GitHub ユーザー名>.github.io`) を入力し「続行」を選択
4. 「所有権の確認」が表示されるので，「その他の確認方法」の中の「HTML タグ」を選択
5. `<meta name="google-site-verification" content="<文字列>"` の `文字列` 部分のみをコピー (**確認画面はしばらくの間，そのままにしておく**)
6. 自分のウェブサイトに移動し，`_config.yml` を開き，`Analytics and search engine verification` セクションを検索後，`google_site_verification` の部分に，コピーした文字列を張り付ける
7. 続いて，`_config.yml` で `Optional Features` セクションを検索し，`enable_google_verification:` の値を `true` にする
8. [Google Analytics](https://developers.google.com/analytics?hl=ja) に先ほどと同じ Google アカウントでログインする
9. 左側のメニューから **歯車マーク**の「管理」を
10. 上の方にある「作成」から「プロパティ」を選択し，`プロパティ名` (例：`個人用ウェブサイト`)，`タイムゾーン` (例：`日本`)，`通貨` (例：`日本円`) を設定する
11. 「ビジネスの説明」および「ビジネス目標」は適当に選択
12. 「データの収集」では「ウェブ」を選択し，ウェブサイトの URL (例：`https://<GitHub ユーザー名>.github.io`) を入力 ( 「ストリート名」は適当に入力)
13. 入力後，「作成して続行」を選択
14. 右上に表示される「測定ID」 (`G-` で始まる) をコピーする (**確認画面はしばらくの間，そのままにしておく**)
15. 先ほどと同様に，自分のウェブサイトに移動し，`_config.yml` を開き，`Analytics and search engine verification` セクションを検索後，`google_analytics` の部分に，コピーした「測定ID」を張り付ける
16. 続いて，`_config.yml` で `Optional Features` セクションを検索し，`enable_google_analytics:` の値を `true` にする
17. `_config.yml` の変更を保存し，GitHub に `push` する
18. サイトのデプロイ終了後，Google Search Console の「所有権の確認」画面に戻り，「確認」ボタンを押す

> [!Note]
> データが反映されるまでには，数時間～48時間ほどかかるので気長に待つこと

### データが反映されてからすること

<!-- - ウェブサイトの全ページリストを Google に渡して，検索エンジンに各ページのクロールを促す
  - 手順：Google Search Console のメニューから「インデックス作成」-> 「サイトマップ」を選択し，「新しいサイトマップの追加」の入力欄に `sitemap.xml` と入力し送信 -->

- Google Analytics と Search Console を連携させる (別にしなくても良い)
  - Google Analytics 上で「管理」 -> 「サービス間のリンク設定」 -> 「Search Console のリンク」と進み，適切なプロパティを選択する
