---
layout: page
title: 研究内容
permalink: /research/projects/
# description: 研究内容
nav: false
nav_parent: 研究

# ==========================================
# 研究プロジェクトのデータ
# ==========================================
projects:
  # ----------------------------------------
  # ▼ project 1
  # ----------------------------------------
  - id: "project-lssph"
    title: "高精度な粒子法 (最小二乗SPH法) の開発"
    keywords: ["粒子法", "SPH法", "最小二乗 SPH (Least-Squares SPH; LS-SPH) 法"]
    collaborators: ""

    # メディア設定 (image, video, youtube)
    media_type: "youtube"
    media_url: "k5Gc3LmHzMM"
    media_caption: "<b>(動画1)</b> 最小二乗SPH (LS-SPH) 法を用いた流体ベンチマークテスト．左から順に，Lid-driven cavity flow ($Re=10^3$)，Taylor–Green vortex flow ($Re=10^3$)，Oscillating drop の結果を表す．色はそれぞれ，速度の大きさ，圧力，圧力を表す．"

    summary: |
      従来の古典的なSPH法が抱える0次精度（解像度を向上させても数値誤差が減少しない）という課題を解決するため，最小二乗法に基づく一般化されたSPH法「<strong>最小二乗SPH (LS-SPH) 法</strong>」を開発しました．理論的な誤差評価や流体ベンチマークテストの両面から提案手法の高い計算精度を実証しました．

    contents: |
      <p>粒子法は計算格子（メッシュ）を必要としない<b>メッシュフリー法</b>の一種であり，自由表面の大変形や混相流といった複雑な流体現象に対して極めて有効なシミュレーション手法です．中でも，L.B. Lucy, R.A. Gingold, J.J. Monaghanらによって1977年に開発された <b>Smoothed Particle Hydrodynamics (SPH) 法</b> は，その高い汎用性と実装の柔軟性から，惑星科学の銀河形成や巨大衝突の計算をはじめ，計算工学のダム決壊，津波遡上，地すべりの計算に至るまで，多岐にわたる分野で幅広く応用されてきました．</p>

      <p>一方，従来の古典的なSPH法では，流れや変形などによって計算粒子の配置が乱れると離散化精度（計算精度）が著しく低下することが知られていました．この精度課題の要因は，その空間離散化式の定式化において，計算粒子の一様配置が仮定されていることに起因します．実際の流体シミュレーションでは粒子の移動に伴い配置が非一様となるため，古典的なSPH法による計算は信頼性の面で根本的な課題がありました．</p>

      <p>この精度課題を克服するため，1990年代頃から理想的な粒子配置を仮定しない<b>高精度なSPH法</b>が数多く提案されてきました．しかし，手法間の関係性や数学的な類似点・相違点を包括的に整理した研究は乏しく，SPHユーザーにとって「個々の問題にどの高精度SPH法を選択し実装すべきか」を判断することは非常に困難な状況にありました．さらに，現在も際限なく"新たな手法"が提案され続けているため，その全貌を理解することはより一層難しくなっています．</p>

      <p>このような背景を踏まえ，本研究では多種多様なSPH法の一般化を試み，SPH法の理論的枠組みを再整備することを目的としました．既存の高精度SPH法の定式化について理論的考察を進める中で，「着目粒子における物理量の空間微分値を周辺粒子の情報から近似するプロセスは，最小二乗法に基づく近似手法と本質的に等価である」という新たな視点に至りました．この着想をもとに従来のSPH法の離散化式を見直した結果，古典的SPH法や各種の高精度SPH法が，<b>最小二乗法をベースとした単一の数学的枠組みとして統一的に説明可能である</b>ことを見出しました．本研究では，この最小二乗法に基づく一般化されたSPH法を「<strong>最小二乗SPH (Least-Squares SPH, LS-SPH) 法</strong>」と呼んでいます．</p>

      <p>一般化された枠組みを構築したことで，無数に存在する高精度SPHモデルの中からある特定のSPHモデルを選択する必要がなくなりました．また，各種SPH法の離散化誤差（打切り誤差）を統一的に評価することが可能となり，SPH法の理論的基盤を抜本的に強化しました．</p>

      <p>さらに，古典的SPH法および最小二乗SPH法を用いた流体ベンチマークテスト（2次元）を実施することで，最小二乗SPH法の実際の流体計算における妥当性を検証しました．具体的な流体ベンチマークテストとして，剛体壁境界を有するLid-driven cavity flowおよびTaylor–Green vortex flowに加え，自由表面境界を有するOscillating drop testを実施しました<b>(上記の動画1)</b>．これら一連の数値検証を通じて，粒子配置が不規則となる実際の流体シミュレーションでは，(1) 古典的SPH法の精度が著しく低下する一方，(2) 最小二乗SPH法では安定して高い計算精度が維持されることを示しました．</p>

    achievements: |
      <ul>
        <li>古典的SPH法および既存の高精度SPH法は，最小二乗法という単一の数学的枠組みで統一的に説明可能であることを発見し，一般化されたSPH法「<strong>最小二乗SPH (LS-SPH) 法</strong>」を開発しました．</li>
        <li>最小二乗SPH法を用いて，各種SPH法の離散化誤差（打切り誤差）を理論的に評価する手法を確立しました．</li>
        <li>理論的な誤差評価や流体ベンチマークテストを通じて，古典的SPH法が <b>0次精度</b>（解像度を向上させても数値誤差が減少しない）であることを明らかにしました．</li>
        <li>一方，提案する最小二乗SPH法は，<b>少なくとも1次精度以上</b> であることを解析的および数値的に示しました．</li>
      </ul>

    # 関連リンク
    links:
      - name: "最小二乗SPH法の開発論文(PDF)"
        url: "https://doi.org/10.1016/j.rinam.2025.100594"
        icon: "fa-solid fa-file-pdf"
      - name: "HPニュース記事"
        url: "/news/2025-06-13-paper/"
        icon: "fa-solid fa-newspaper"
      # - name: "GitHub リポジトリ"
      #   url: "#"
      #   icon: "fa-brands fa-github"
      - name: "九州大学 SPRING 広報"
        url: "https://k-spring.kyushu-u.ac.jp/topics/research-achievements/kensuke-shobuzako-graduate-school-of-sciences-paper-has-been-accepted-for-results-in-applied-mathematics/"
        icon: "fa-solid fa-arrow-up-right-from-square fa-fw"
---

<div class="projects-page">

  <div class="card z-depth-1 cv-card mb-5">
    <div class="card-body">
      <h3 class="cv-card-title">
        <i class="fa-solid fa-list-ul fa-fw"></i> 目次
        <span class="text-muted" style="font-size: 0.9rem; font-weight: normal; margin-left: 0.3rem;">/ Contents</span>
      </h3>
      <ul style="list-style-type: none; padding-left: 0.5rem; margin-bottom: 0; line-height: 1.8;">
        {% for project in page.projects %}
          <li>
            <a href="#{{ project.id }}" class="toc-link" style="color: var(--global-text-color); font-weight: 500; text-decoration: none;">
              <i class="fa-solid fa-angle-right fa-fw" style="color: var(--global-theme-color);"></i> {{ project.title }}
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>

  <div class="project-articles">
    {% for project in page.projects %}
      <article id="{{ project.id }}" style="margin-bottom: 5rem; padding-top: 1rem; scroll-margin-top: 8rem;">
        <h2 style="font-weight: 700; color: var(--global-text-color); line-height: 1.4; margin-bottom: 0.8rem;">
          {{ project.title }}
        </h2>
        <div style="margin-bottom: 2rem;">
          <div style="display: flex; flex-wrap: wrap; margin-bottom: 0.4rem;">
            {% for keyword in project.keywords %}
              <span class="project-keyword">
                <i class="fa-solid fa-tag fa-xs"></i> {{ keyword }}
              </span>
            {% endfor %}
          </div>
          {% if project.collaborators and project.collaborators != "" %}
            <div style="font-size: 0.9rem; color: var(--global-text-color-light); opacity: 0.8; display: flex; align-items: center;">
              <i class="fa-solid fa-handshake fa-fw" style="margin-right: 0.4rem;"></i> 
              <span>共同研究： {{ project.collaborators }}</span>
            </div>
          {% endif %}
        </div>
        <div class="project-media mb-5" style="text-align: center;">
          {% if project.media_type == "image" %}
            <img src="{{ project.media_url | relative_url }}" alt="Project Image" style="width: 100%; height: auto; border-radius: 0.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          {% elsif project.media_type == "video" %}
            <video controls style="width: 100%; height: auto; border-radius: 0.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <source src="{{ project.media_url | relative_url }}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          {% elsif project.media_type == "youtube" %}
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 0.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
              <iframe src="https://www.youtube.com/embed/{{ project.media_url }}?rel=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          {% endif %}
          <div style="font-size: 0.9rem; color: var(--global-text-color-light); margin-top: 0.8rem;">
            {{ project.media_caption }}
          </div>
        </div>
        <div class="project-body">
          <h4 class="project-subheading">研究概要</h4>
          <div class="project-text">{{ project.summary }}</div>
          <h4 class="project-subheading">研究内容</h4>
          <div class="project-text">{{ project.contents }}</div>
          <h4 class="project-subheading">主な成果</h4>
          <div class="project-text">{{ project.achievements }}</div>
        </div>
        {% if project.links and project.links.size > 0 %}
          <h4 class="project-subheading">関連リンク</h4>
          <div class="project-links" style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1rem;">
            {% for link in project.links %}
              <a href="{{ link.url }}" target="_blank" rel="noopener noreferrer" class="inline-link-item">
                <i class="{{ link.icon }} fa-fw"></i> <span style="font-size: 0.95rem; color: var(--global-theme-color);">{{ link.name }}</span>
              </a>
            {% endfor %}
          </div>
        {% endif %}
      </article>
      {% unless forloop.last %}
        <hr style="border: 0; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--global-divider-color), rgba(0, 0, 0, 0)); margin: 4rem 0;">
      {% endunless %}
    {% endfor %}
  </div>

</div>

<style>
  /* 共通カードスタイル */
  .cv-card {
    border-left: 4px solid var(--global-theme-color) !important;
    border-radius: 0.25rem;
    background-color: var(--global-bg-color);
  }
  .cv-card-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .cv-card-title i {
    color: var(--global-text-color-light);
  }

  .toc-link {
    transition: none !important;
  }

  /* 目次のリンクホバー */
  .toc-link:hover {
    color: var(--global-theme-color) !important;
  }

  /* キーワード */
  .project-keyword {
    color: var(--global-text-color-light);
    font-size: 0.95rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    margin-right: 0.8rem;
  }

  /* 見出しのスタイル */
  .project-subheading {
    font-weight: 600;
    color: var(--global-text-color);
    font-size: 1.15rem;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    padding-left: 0.8rem;
    border-left: 4px solid var(--global-theme-color);
  }

  /* テキストのスタイル */
  .project-text {
    font-size: 1rem;
    color: var(--global-text-color);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  .project-text ul {
    margin-bottom: 0;
    padding-left: 1.5rem;
  }
  .project-text li {
    margin-bottom: 0.5rem;
  }

  /* 外部リンク */
  .inline-link-item {
    color: var(--global-theme-color);
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.1s ease;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
  .inline-link-item:hover {
    color: var(--global-theme-color) !important;
    text-decoration: none;
  }
  .inline-link-item:hover span{
    color: var(--global-theme-color) !important;
    text-decoration: underline;
  }
</style>
