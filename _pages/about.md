---
layout: about # _layouts/about.html というレイアウトを使用
title: ホーム # このページのタイトル (ナビゲーションバーに表示される)
permalink: / # このページの URL をトップに設定
subtitle: "<span style='font-weight: 400;'>菖蒲迫 健介 | 粒子法 (SPH法) の基礎・応用研究に取り組んでいます</span>" # タイトルの下に表示されるサブタイトルのテキスト

profile: # プロフィールの設定
  align: left # プロフィール画像を右側に配置
  image: profile_pic.png # プロフィール画像は assets/img/ に設置
  image_circular: false # true にするとプロフィール画像が円になる
  # more_info: >  # プロフィール画像の下に表示する住所
  #   <p>555 your office number</p>
  #   <p>123 your address street</p>
  #   <p>Your City, State 12345</p>

selected_papers: false # true にすると「Selected Papers」が追加される
social: false # true にすると SNS アイコンが表示される

announcements: # お知らせ (_news) フォルダの内容の設定
  enabled: true # true にすると，「news」が表示される
  scrollable: true # true にすると，「news」が以下のlimit件数以上ある場合に，スクロールバーが表示される
  limit: 10 # 「news」に表示する件数を最大で10件にする

latest_posts: # 最新ブログ記事 (_posts 内) の設定
  enabled: false # true にすると，表示される
  scrollable: true # true にすると，「latest posts」が以下のlimit件数以上ある場合に，スクロールバーが表示される
  limit: 3 # 「latest posts」に表示する件数を最大で3件にする
---

<p style="font-size: 1.05rem; margin-bottom: 1.0rem; font-weight: 500;">
  東京大学 大学院工学系研究科 社会基盤学専攻 特任研究員
</p>

<p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.2rem;">
  <i class="fa-solid fa-envelope fa-fw"></i> {{ 'kensuke-shobuzako@g.ecc.u-tokyo.ac.jp' | protect_email }}<br>
  <i class="fa-solid fa-location-dot fa-fw"></i> 〒113-8656 東京都文京区本郷7-3-1 東京大学 工学部1号館 243号室
</p>

<div class="social-links mb-3" style="font-size: 1.0rem; font-weight: 400;">
  <a href="https://researchmap.jp/kensuke_shobuzako" target="_blank" class="mr-3 custom-social-link"><i class="fa-solid fa-play"></i><span>researchmap</span></a>
  <a href="https://scholar.google.com/citations?user=JNwnO24AAAAJ" target="_blank" class="mr-3 custom-social-link"><i class="ai ai-google-scholar" style="font-size: 1.1em;"></i><span>Google Scholar</span></a>
  <a href="https://orcid.org/0009-0000-4453-5398" target="_blank" class="mr-3 custom-social-link"><i class="ai ai-orcid"></i><span>ORCID</span></a>
  <a href="https://github.com/shobuzako-kensuke" target="_blank" class="mr-3 custom-social-link"><i class="fa-brands fa-github"></i><span>GitHub</span></a>
  <a href="https://www.researchgate.net/profile/Kensuke-Shobuzako/" target="_blank" class="mr-3 custom-social-link"><i class="ai ai-researchgate" style="font-size: 1.3em;"></i><span>ResearchGate</span></a>
  <a href="https://twitter.com/zakoken1998" target="_blank" class="custom-social-link"><i class="fa-brands fa-x-twitter"></i><span>(Twitter)</span></a>
</div>

<div class="mt-4 mb-4">
  <a href="/profile/" class="btn btn-outline-secondary z-depth-0" role="button" style="margin-right: 10px; padding: 0.4rem 0.8rem;">
    <i class="fas fa-user-graduate"></i>
    <span style="font-size: 0.85rem; font-weight: 400; color: inherit;">詳しいプロフィール</span>
  </a>
  <a href="/en/" class="btn btn-outline-primary z-depth-0" role="button" style="padding: 0.4rem 0.8rem;">
  <i class="fas fa-globe"></i>
  <span style="font-size: 0.85rem; font-weight: 400; color: inherit;">English Version</span>
  </a>
</div>

<div style="clear: both;"></div>

{: .extra-margin-top }

<h3 class="mb-3" style="font-weight: 500;">今後の予定</h3>

<ul class="mb-3">
  <li class="mb-2">
    <span style="font-weight: 500;">
      2026/07/06–08： 
      <a href="https://sites.google.com/view/pgc2026/home" target="_blank" rel="noopener noreferrer">Particulate Gravity Currents 2026 (PGC2026)</a>
      <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8em; color: var(--global-text-color-light);"></i>
      にて発表予定
    </span>
  </li>
</ul>

<style>
  h3 {
    margin-bottom: 1rem !important;
  }
  li {
    margin-bottom: 0.8rem; /* 箇条書きの余白 */
  }
  .btn {
    text-transform: none !important; /*ボタンの英語を大文字にしない*/
  }
  .btn-outline-primary:hover {
    background-color: #4285f4 !important;
    color: var(--global-bg-color) !important;
  }

  .btn-outline-secondary:hover {
    background-color: #a6c !important;
    color: var(--global-bg-color) !important;
  }
  .custom-social-link,
  .custom-social-link i,
  .custom-social-link span {
    text-decoration: none !important;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    color: var(--global-theme-color) !important;
  }
  /* ホバー時：中の文字(span)にだけ下線をピタッと引く */
  .custom-social-link:hover span {
    text-decoration: underline !important;
    color: var(--global-theme-color) !important;
  }
</style>
