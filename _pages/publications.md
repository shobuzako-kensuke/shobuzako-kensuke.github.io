---
layout: page
permalink: /research/publications/
title: Publications
description: 出版物リスト：5件
nav: false
# nav_order: 1
nav_parent: Research
---

<!-- {% include bib_search.liquid %} -->

<div class="toc">
  <ul>
    <li><a href="#refereed-paper">査読付き論文 / Refereed Papers : 1件</a></li>
    <li><a href="#unrefereed-paper">査読無し論文 / Unrefereed Papers : 2件</a></li>
    <li><a href="#unrefereed-article">査読無し記事 / Unrefereed Articles : 2件</a></li>
  </ul>
</div>

<div class="publications">
  <h2 id="refereed-paper">査読付き論文 <span class="en-text">/ Refereed Papers : 1件</span></h2>
  {% bibliography --file refereed_paper %}

  <h2 class="mt-5" id="unrefereed-paper">査読無し論文 <span class="en-text">/ Unrefereed Papers : 2件</span></h2>
  {% bibliography --file unrefereed_paper %}

  <h2 class="mt-5" id="unrefereed-article">査読無し記事 <span class="en-text">/ Unrefereed Articles : 2件</span></h2>
  {% bibliography --file unrefereed_article %}
</div>
