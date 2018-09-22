---
layout: default
title: Dev archive
---
<div class="page-content wc-container">
  <h1>Dev Archive</h1>  
  {% for dev in site.devs %}
  	{% capture currentyear %}{{dev.date | date: "%Y"}}{% endcapture %}
  	{% if currentyear != year %}
    	{% unless forloop.first %}</ul>{% endunless %}
    		<h5>{{ currentyear }}</h5>
    		<ul class="devs">
    		{% capture year %}{{currentyear}}{% endcapture %}
  		{% endif %}
    <li><a href="{{ post.url | prepend: site.baseurl }}">{{ dev.title }}</a></li>
    {% if forloop.last %}</ul>{% endif %}
{% endfor %}
</div>
