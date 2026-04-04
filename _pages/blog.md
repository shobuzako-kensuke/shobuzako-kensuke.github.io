---
layout: default
permalink: /blog/
title: ブログ
nav: true
nav_order: 5
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1 # The number of links before the current page
    after: 3 # The number of links after the current page
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="mb-3 mt-3">
    <h1 style="font-weight: 700; color: var(--global-text-color); margin-bottom: 0.3rem;">{{ site.blog_name }}</h1>
    <div style="font-size: 1rem; color: var(--global-text-color-light);">{{ site.blog_description }}</div>
  </div>
{% endif %}

{% if site.display_categories and site.display_categories.size > 0 %}

  <div class="category-list mb-5" style="display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center; margin-left: -0.5rem">
    {% for category in site.display_categories %}
      <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="blog-filter-pill">
        <i class="fa-solid fa-folder-open fa-sm"></i> {{ category }}
      </a>
    {% endfor %}
  </div>
{% endif %}

{% assign featured_posts = site.posts | where: "featured", "true" %}
{% if featured_posts.size > 0 %}

  <h3 class="mt-4 mb-3" style="font-weight: 600; color: var(--global-text-color);">
    <i class="fa-solid fa-star fa-fw" style="color: #ffc107;"></i> Featured Posts
  </h3>
  
  <div class="container featured-posts p-0 mb-5">
    {% assign is_even = featured_posts.size | modulo: 2 %}
    <div class="row row-cols-1 row-cols-md-{% if featured_posts.size <= 2 or is_even == 0 %}2{% else %}3{% endif %} g-4">
      {% for post in featured_posts %}
        {% assign categories = post.categories | join: "" %}
        <div class="col">
          <div class="card h-100 z-depth-1 cv-card" style="border-left: 4px solid #ffc107 !important;">
            <div class="card-body" style="display: flex; flex-direction: column;">
              <h4 class="card-title" style="font-weight: 600; line-height: 1.4; font-size: 1.15rem; color: var(--global-text-color); display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                <a href="{{ post.url | relative_url }}" style="color: var(--global-text-color); text-decoration: none;">{{ post.title }}</a>
                {% if categories != "" %}
                  {% for category in post.categories %}
                    <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="badge badge-pill title-category-badge">
                      {{ category }}
                    </a>
                  {% endfor %}
                {% endif %}
              </h4>
              <p class="card-text" style="font-size: 0.9rem; color: var(--global-text-color-light); flex-grow: 1; margin-top: 0.5rem;">
                <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.description }}</a>
              </p>
              {% if post.external_source == blank %}
                {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
              {% else %}
                {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
              {% endif %}
              {% assign year = post.date | date: "%Y" %}
              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--global-divider-color); padding-top: 0.8rem; margin-top: 1rem; font-size: 0.8rem; color: var(--global-text-color-light);">
                <span><i class="fa-regular fa-clock fa-fw"></i> {{ read_time }} min read</span>
                <span><i class="fa-solid fa-calendar-days fa-fw"></i> {{ post.date | date: '%Y/%m/%d' }}</span>
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
{% endif %}

<div class="post-list">
    {% if page.pagination.enabled %}
      {% assign postlist = paginator.posts %}
    {% else %}
      {% assign postlist = site.posts %}
    {% endif %}

    {% for post in postlist %}

      {% if post.external_source == blank %}
        {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
      {% else %}
        {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
      {% endif %}
      {% assign categories = post.categories | join: "" %}

      <div class="card z-depth-1 cv-card mb-4">
        <div class="card-body">
          <div class="row">

            <div class="{% if post.thumbnail %}col-md-9{% else %}col-12{% endif %}" style="display: flex; flex-direction: column;">

              <h4 style="font-weight: 600; line-height: 1.4; margin-bottom: 0.6rem; display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}" style="color: var(--global-text-color); text-decoration: none;">{{ post.title }}</a>
                {% elsif post.redirect contains '://' %}
                  <a href="{{ post.redirect }}" target="_blank" style="color: var(--global-text-color); text-decoration: none;">
                    {{ post.title }} <i class="fa-solid fa-arrow-up-right-from-square fa-sm" style="color: var(--global-text-color-light); margin-left: 0.2rem;"></i>
                  </a>
                {% else %}
                  <a href="{{ post.redirect | relative_url }}" style="color: var(--global-text-color); text-decoration: none;">{{ post.title }}</a>
                {% endif %}

                {% if categories != "" %}
                  <span style="display: flex; gap: 0.3rem;">
                    {% for category in post.categories %}
                      <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}" class="badge badge-pill title-category-badge">
                        {{ category }}
                      </a>
                    {% endfor %}
                  </span>
                {% endif %}
              </h4>

              <div style="font-size: 0.95rem; color: var(--global-text-color); line-height: 1.6; margin-bottom: 1rem; flex-grow: 1;">
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}" style="color: inherit; text-decoration: none;">{{ post.description }}</a>
                {% else %}
                  {{ post.description }}
                {% endif %}
              </div>

              <div style="display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid var(--global-divider-color); padding-top: 0.8rem; margin-top: auto; flex-wrap: wrap; gap: 0.8rem;">
                <div style="font-size: 0.85rem; color: var(--global-text-color-light);">
                  <span style="margin-right: 0.8rem;"><i class="fa-regular fa-clock fa-fw"></i> {{ read_time }} min read</span>
                  <span><i class="fa-solid fa-calendar-days fa-fw"></i> {{ post.date | date: '%Y/%m/%d' }}</span>
                  {% if post.external_source %}
                    <span style="margin-left: 0.8rem;"><i class="fa-solid fa-globe fa-fw"></i> {{ post.external_source }}</span>
                  {% endif %}
                </div>
              </div>

            </div>

            {% if post.thumbnail %}
              <div class="col-md-3 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
                {% if post.redirect == blank %}
                  <a href="{{ post.url | relative_url }}" style="width: 100%;">
                    <img src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; width: 100%; max-height: 120px; border-radius: 0.25rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" alt="thumbnail">
                  </a>
                {% else %}
                  <img src="{{ post.thumbnail | relative_url }}" style="object-fit: cover; width: 100%; max-height: 120px; border-radius: 0.25rem; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" alt="thumbnail">
                {% endif %}
              </div>
            {% endif %}

          </div>
        </div>
      </div>
    {% endfor %}

  </div>

{% if page.pagination.enabled %}

  <div class="mt-5">
    {% include pagination.liquid %}
  </div>
{% endif %}

</div>

<style>
  /* 共通カードスタイル */
  .cv-card {
    border-left: 4px solid var(--global-theme-color) !important;
    border-radius: 0.25rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .cv-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important;
  }
  .cv-card a.card-title:hover:not(.title-category-badge), 
  .cv-card h4 a:hover:not(.title-category-badge) {
    color: var(--global-theme-color) !important;
  }

  /* タイトル下のカテゴリー */
  .blog-filter-pill {
    display: inline-block;
    padding: 0.1rem 1rem;
    border-radius: 2rem;
    font-size: 1.0rem;
    font-weight: 600;
    /* text-decoration: none !important; */
    transition: all 0.2s ease;
    /* 背景色はごく薄いテーマカラー */
    background-color: rgba(var(--global-theme-color-rgb), 0.08);
    /* 文字色はテーマカラー */
    color: var(--global-theme-color);
    border: 1px solid rgba(var(--global-theme-color-rgb), 0.2);
  }
  /* タイトル横のカテゴリーバッジ（小さめ・フラット） */
  .title-category-badge {
    background-color: var(--global-theme-color);
    color: white !important;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25em 0.6em;
    box-shadow: none !important; /* ダサい影を完全に消去 */
    text-decoration: none !important;
    vertical-align: middle;
    transition: opacity 0.2s ease;
  }
</style>
