---
layout: default
title: Tools
---
<div class="page-content wc-container">
    <h1>Tools</h1>  
    <ul class="posts">
    {% for tools in site.categories.tools %}
    <li>
        <a href="{{ tools.url | prepend: site.baseurl }}">{{ tools.title }}</a>
        <p>{{ tools.meta }}</p>
    </li>
        {% endfor %}
    </ul>
</div>
