---
layout: base
title: Blog
---

# Blog

Welcome to my blog! Here are my latest posts:

<ul class="post-list">
{% for post in collections.posts reversed %}
  <li>
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <p>{{ post.data.excerpt }}</p>
  </li>
{% endfor %}
</ul>