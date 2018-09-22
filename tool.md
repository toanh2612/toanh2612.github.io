---
layout: default
title: Tools
---
<div class="page-content wc-container">
  <h1>Tools</h1>  
  {% for tools in site.category.tools %}
  	{% capture currentyear %}{{tools.date | date: "%Y"}}{% endcapture %}
  	{% if currentyear != year %}
    	{% unless forloop.first %}</ul>{% endunless %}
    		<h5>{{ currentyear }}</h5>
    		<ul class="posts">
    		{% capture year %}{{currentyear}}{% endcapture %}
  		{% endif %}
    <li><a href="{{ tools.url | prepend: site.baseurl }}">{{ tools.title }}</a></li>
    {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</div>
