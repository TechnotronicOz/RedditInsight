(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.circlecluster=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<h2>All Topics Cluster</h2>\n"}),b.dashboard=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="inner-container">\n  <h2 class="downloaded">We Downloaded The Reddit</h2>\n  <h4 class="nugget-nav">What we found will surprise you.</h4>\n  <a href="#infograph-start" id="nugget-arrow-nav"><div class="arrow-down"></div></a>\n  <div class="dot-nav"><img src="/img/dots-nav.png" /></div>\n  <section id="infograph-start"></section>\n\n  <section id="infograph-cats">\n    <p>"Dogs" occurs more times in titles in r/aww than "cats" or "kittens"</p>\n    <p class="small">Despite their internet popularity cats are not subbmitted nearly as many times on this cuddly SubReddit.</p>\n  </section>\n  <section id="infograph-cats-img">\n    <img class="cat-img" src="/img/Cat_5.png" alt="cat" />\n  </section>\n  <section id="infograph-nsfw">\n    <p>"Perfect" occurs most frequently in the nsfw SubReddit titles</p>\n    <p class="small">This adjective is suprisingly in the lead for all words used in titles in this not safe for work SubReddit.</p>\n  </section>\n  <section id="infograph-nsfw-img">\n     <img class="nsfw-img" src="/img/Woman_silhouette.png" alt="lady" />\n  </section>\n  <a href="#infograph-karma" id="nugget-arrow-nav"><div class="arrow-down"></div></a>\n\n  <section id="infograph-karma">\n    <p>The top 5 SubReddits make up 40.5% of all Karma</p>\n    <ol>\n      <li>r/Funny</li>\n      <li>r/Pics</li>\n      <li>r/Advice Animals</li>\n      <li>r/Aww</li>\n      <li>r/Gaming</li>\n    </ol>\n  </section>\n  <section id="karma-post">\n    <p>r/Technology leads all SubReddits, with an average of <span>2,027</span> Karma per Post</p>\n  </section>\n  <a href="#infograph-cluster" id="nugget-arrow-nav"><div class="arrow-down"></div></a>\n\n  <section id="infograph-cluster">\n    <p>Topic Clusters</p>\n    <p>The most popular words in the most popular topics.</p>\n    <img class="cluster-img" src="/img/allClusters.png" alt="reddit word cluster" />\n    <a href="#infograph-bubble" id="nugget-arrow-nav"><div class="arrow-down"></div></a>\n  </section>\n\n  <section id="infograph-bubble">\n    <p>SubReddit Noun Frequency Analysis</p>\n    <p>Can you guess which colors belong to which SubReddit?</p>\n    <img class="cluster-img" src="/img/allReddit.png" alt="reddit frequency" />\n  </section>\n'}),b.footer=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="footer-inner">\n  <ul class="nav nav-pills">\n    <li><a href="#">&copy; 2013 Reddit Insight</a></li>\n    <li><a href="https://github.com/gdi2290/RedditInsight">Fork on Github</a></li>\n    <li class="disabled"><a href="#">Team:</a></li>\n    <li><a href="https://github.com/gdi2290">Patrick Stapleton</a></li>\n    <li><a href="https://github.com/ebeal">Elle Beal</a></li>\n    <li><a href="https://github.com/googamanga">Alex Gaputin</a></li>\n    <li><a href="https://github.com/sheltowt">Bill Shelton</a></li>\n    <li><a href="https://github.com/kevinhamiltonsmith">Kevin Smith</a></li>\n  </ul>\n</div>\n'}),b.frequency=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},"<h2>Frequency Analysis</h2>\n<h3>The most popular nouns per SubReddit</h3>\n"}),b.graphs=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<h2>SubReddit Graphs</h2>\n\n<h3 class="first-graph">Number of Comments Per Post, Per SubReddit</h3>\n<div class="comments">\n</div>\n\n<h3>Average Karma Per Post, Per SubReddit</h3>\n<div class="karma_subreddit">\n</div>'}),b.header=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<h1 class="header-text">Reddit Insight</h1>\n'}),b.interaction=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<h2>Interaction</h2>\n<div class="SubredditSelector">\n  <h1>Plot Your Favorite Subreddit</h1>\n  <p>See which Subreddit has the highest interaction</p>\n  <select style="width:460px"class="subredditselector"></select>\n</div>\n<div id="chart"></div>'}),b.nav=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="navbar navbar-fixed-top">\n  <div class="navbar-inner">\n    <div class="container" style="width: auto;">\n      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </a>\n      <a class="brand" href="">Reddit Insight</a>\n      <div class="nav-collapse">\n        <ul class="nav">\n          <li class=""><a href="#trackpost">Track Post</a></li>\n          <li class=""><a href="#trackuser">Track User</a></li>\n          <li class=""><a href="#wordcloud">Word Clouds</a></li>\n          <li class=""><a href="#topiccluster">Topic Cluster</a></li>\n          <li class=""><a href="#circlecluster">All The Clusters</a></li>\n          <li class=""><a href="#interaction">Interaction</a></li>\n          <li class=""><a href="#frequency">Frequency Analysis</a></li>\n          <li class=""><a href="#graphs">Graphs</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n'}),b.topiccluster=a(function(a,b,c,d,e){function i(a,b){return" selected "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="",g,h=this;f+="<h2>Topic Cluster</h2>\n  <form id='formtopicCluster'>\n  <span for='subreddit'>Subreddit:</span>\n  <select name=\"subreddit\">\n    <option value='PoliticsCluster' ",g=c["if"].call(b,b.PoliticsCluster,{hash:{},inverse:h.noop,fn:h.program(1,i,e),data:e});if(g||g===0)f+=g;f+=">Politics</option>\n    <option value='ScienceCluster' ",g=c["if"].call(b,b.ScienceCluster,{hash:{},inverse:h.noop,fn:h.program(1,i,e),data:e});if(g||g===0)f+=g;f+=">Science</option>\n    <option value='TechnologyCluster' ",g=c["if"].call(b,b.TechnologyCluster,{hash:{},inverse:h.noop,fn:h.program(1,i,e),data:e});if(g||g===0)f+=g;f+=">Technology</option>\n    <option value='WorldNewsCluster' ",g=c["if"].call(b,b.WorldNewsCluster,{hash:{},inverse:h.noop,fn:h.program(1,i,e),data:e});if(g||g===0)f+=g;return f+='>World News</option>\n  </select>\n  <button class="ladda-button">\n      <span class="ladda-label">Submit</span>\n    </button>\n    \n</form>\n',f}),b["trackpost-chart"]=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div id="chart_container">\n  <div id="y_axis"></div>\n  <span class="y-axis">Karma</span>\n  <span class="x-axis">Time</span>\n  <div id="chart"></div>\n  <div id="legend"></div>\n</div>\n'}),b["trackpost-stats"]=a(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="",g,h,i,j="function",k=this.escapeExpression,l=c.helperMissing;return f+='<a href="',(g=c.url)?g=g.call(b,{hash:{},data:e}):(g=b.url,g=typeof g===j?g.apply(b):g),f+=k(g)+'" target="_blank">\n  <h4>',(g=c.title)?g=g.call(b,{hash:{},data:e}):(g=b.title,g=typeof g===j?g.apply(b):g),f+=k(g)+"  <small>  ",(g=c.domain)?g=g.call(b,{hash:{},data:e}):(g=b.domain,g=typeof g===j?g.apply(b):g),f+=k(g)+"</small></h4>\n</a>\n  Created at: ",i={hash:{},data:e},f+=k((g=c.epoch||b.epoch,g?g.call(b,b.created_utc,i):l.call(b,"epoch",b.created_utc,i)))+'<br>\n<div class="post-info">\n  <a href="'+k((g=(g=b.data,g==null||g===!1?g:g.url),typeof g===j?g.apply(b):g))+'" target="_blank">\n    <img src="',(h=c.thumbnail)?h=h.call(b,{hash:{},data:e}):(h=b.thumbnail,h=typeof h===j?h.apply(b):h),f+=k(h)+'">\n  </a>\n  <br>\n  Author: <h4 style="display:inline">',(h=c.author)?h=h.call(b,{hash:{},data:e}):(h=b.author,h=typeof h===j?h.apply(b):h),f+=k(h)+'</h4><br>\n  Subreddit: <h4 style="display:inline">',(h=c.subreddit)?h=h.call(b,{hash:{},data:e}):(h=b.subreddit,h=typeof h===j?h.apply(b):h),f+=k(h)+'</h4>\n  <br>\n  Score: <h4 style="display:inline">',(h=c.score)?h=h.call(b,{hash:{},data:e}):(h=b.score,h=typeof h===j?h.apply(b):h),f+=k(h)+'</h4>\n  <br>\n  <i class="icon-arrow-up"></i>: <h4 style="display:inline">',(h=c.ups)?h=h.call(b,{hash:{},data:e}):(h=b.ups,h=typeof h===j?h.apply(b):h),f+=k(h)+'</h4>\n  <br>\n  <i class="icon-arrow-down"></i>: <h4 style="display:inline">',(h=c.downs)?h=h.call(b,{hash:{},data:e}):(h=b.downs,h=typeof h===j?h.apply(b):h),f+=k(h)+'</h4>\n  <br>\n  <a href="http://www.reddit.com',(h=c.permalink)?h=h.call(b,{hash:{},data:e}):(h=b.permalink,h=typeof h===j?h.apply(b):h),f+=k(h)+'" target="_blank">\n    Comments: <h4 style="display:inline">',(h=c.num_comments)?h=h.call(b,{hash:{},data:e}):(h=b.num_comments,h=typeof h===j?h.apply(b):h),f+=k(h)+"</h4>\n  </a>\n\n</div>\n",f}),b.trackpost=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<div class="post">\n  <h2>Track a Post</h2>\n  <div class="row-fluid">\n    <div class="span12">\n      <form>\n        <label for="tracking-url"><h4>Track Post</h4></label>\n        <p>Copy and paste the URL of the comments for the post you\'re interested in below:</p>\n        <input id="tracking-url" type="text" placeholder="Link to comments" autofocus>\n        <button id="trackpost-submit" class="ladda-button" data-style="contract" data-size="s">\n          <span class="ladda-label">Submit</span>\n        </button>\n      </form>\n    </div>\n  </div>\n  <div class="row-fluid">\n    <button class="submit-another ladda-button" data-size="s">\n      <span class="ladda-label">Track Another Post</span>\n    </button>\n    <div class="loader"></div>\n    <article id="trackpost-stats"></article>\n    <article id="trackpost-chart"></article>\n  </div>\n</div>\n'}),b["trackuser-data"]=a(function(a,b,c,d,e){function l(a,b){var d="",e;d+="\n  ",e=c["if"].call(a,a,{hash:{},inverse:k.noop,fn:k.program(2,m,b),data:b});if(e||e===0)d+=e;return d+="\n",d}function m(a,b){var d="",e,f,g;d+="\n    ",g={hash:{},inverse:k.program(5,o,b),fn:k.program(3,n,b),data:b},f=(e=c.compare||a.compare,e?e.call(a,(e=b,e==null||e===!1?e:e.key),"===","created_utc",g):h.call(a,"compare",(e=b,e==null||e===!1?e:e.key),"===","created_utc",g));if(f||f===0)d+=f;return d+="\n  ",d}function n(a,b){var d="",e,f;return d+='\n      <span class="stats-title">created at: </span>',f={hash:{},data:b},d+=i((e=c.epoch||a.epoch,e?e.call(a,a,f):h.call(a,"epoch",a,f)))+" <br>\n    ",d}function o(a,b){var c="",d;return c+='\n      <span class="stats-title">'+i((d=(d=b,d==null||d===!1?d:d.key),typeof d===j?d.apply(a):d))+": </span>"+i(typeof a===j?a.apply(a):a)+" <br>\n    ",c}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="",g,h=c.helperMissing,i=this.escapeExpression,j="function",k=this;g=c.each.call(b,b,{hash:{},inverse:k.noop,fn:k.program(1,l,e),data:e});if(g||g===0)f+=g;return f+='\n<div id="chart_container">\n  <div id="y_axis"></div>\n  <span class="y-axis">Karma</span>\n  <div id="user-chart"></div>\n</div>',f}),b["trackuser-posts"]=a(function(a,b,c,d,e){function l(a,b){var d="",e,f,g;d+="\n ",g={hash:{},inverse:j.noop,fn:j.program(2,m,b),data:b},f=(e=c.compare||a.compare,e?e.call(a,a.kind,"t3",g):k.call(a,"compare",a.kind,"t3",g));if(f||f===0)d+=f;return d+="\n",d}function m(a,b){var d="",e,f,g;d+='\n       <a href="http://www.reddit.com'+i((e=(e=a.data,e==null||e===!1?e:e.permalink),typeof e===h?e.apply(a):e))+'" target="_blank">\n         <h4>'+i((e=(e=a.data,e==null||e===!1?e:e.title),typeof e===h?e.apply(a):e))+"</h4>\n       </a>\n       ",g={hash:{},inverse:j.noop,fn:j.program(3,n,b),data:b},f=(e=c.compare||a.compare,e?e.call(a,(e=a.data,e==null||e===!1?e:e.thumbnail),"!==","default",g):k.call(a,"compare",(e=a.data,e==null||e===!1?e:e.thumbnail),"!==","default",g));if(f||f===0)d+=f;return d+='\n       <br>\n       <span class="stats-title">Author: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.author),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title">Score: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.score),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title"><i class="icon-arrow-up"></i>: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.ups),typeof e===h?e.apply(a):e))+'</br>\n       <span class="stats-title"><i class="icon-arrow-down"></i>: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.downs),typeof e===h?e.apply(a):e))+'<br>\n      <span class="stats-title">Created at: </span>',g={hash:{},data:b},d+=i((e=c.epoch||a.epoch,e?e.call(a,(e=a.data,e==null||e===!1?e:e.created_utc),g):k.call(a,"epoch",(e=a.data,e==null||e===!1?e:e.created_utc),g)))+'<br>\n       <span class="stats-title">Comments: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.num_comments),typeof e===h?e.apply(a):e))+"<br>\n       <hr>\n ",d}function n(a,b){var c="",d;return c+='\n       <a href="'+i((d=(d=a.data,d==null||d===!1?d:d.url),typeof d===h?d.apply(a):d))+'" target="_blank">\n         <img src="'+i((d=(d=a.data,d==null||d===!1?d:d.thumbnail),typeof d===h?d.apply(a):d))+'">\n       </a>\n       ',c}function o(a,b){var d="",e,f,g;d+="\n ",g={hash:{},inverse:j.noop,fn:j.program(6,p,b),data:b},f=(e=c.compare||a.compare,e?e.call(a,a.kind,"t1",g):k.call(a,"compare",a.kind,"t1",g));if(f||f===0)d+=f;return d+="\n",d}function p(a,b){var d="",e,f;return d+='\n       <span class="stats-title">Link Title: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.link_title),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title">Author: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.author),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title">Score: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.score),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title"><i class="icon-arrow-up"></i>: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.ups),typeof e===h?e.apply(a):e))+'</br>\n       <span class="stats-title"><i class="icon-arrow-down"></i>: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.downs),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title">Sub Reddit: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.subreddit),typeof e===h?e.apply(a):e))+'<br>\n       <span class="stats-title">Created at: </span>',f={hash:{},data:b},d+=i((e=c.epoch||a.epoch,e?e.call(a,(e=a.data,e==null||e===!1?e:e.created_utc),f):k.call(a,"epoch",(e=a.data,e==null||e===!1?e:e.created_utc),f)))+'<br>\n       <span class="stats-title">Comment: </span>'+i((e=(e=a.data,e==null||e===!1?e:e.body),typeof e===h?e.apply(a):e))+"<br>\n       <hr>\n ",d}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="",g,h="function",i=this.escapeExpression,j=this,k=c.helperMissing;f+='<ul class="nav nav-tabs" id="myTab">\n  <li class="active"><a href="#posts">Posts</a></li>\n  <li><a href="#comments">Comments</a></li>\n</ul>\n<div class="tab-content">\n<div class="tab-pane active" id="posts">\n',g=c.each.call(b,b,{hash:{},inverse:j.noop,fn:j.program(1,l,e),data:e});if(g||g===0)f+=g;f+='\n</div>\n<div class="tab-pane" id="comments">\n',g=c.each.call(b,b,{hash:{},inverse:j.noop,fn:j.program(5,o,e),data:e});if(g||g===0)f+=g;return f+="\n</div>\n",f}),b.trackuser=a(function(a,b,c,d,e){return this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{},'<h2>Track a User</h2>\n  <form>\n    <label for="tracking-username"><h4>Track Username</h4></label>\n    <p>Copy and paste the username you\'re interested in below:</p>\n    <input id="tracking-username" type="text" placeholder="Username" autofocus>\n    <button id="trackuser-submit" class="ladda-button" data-style="contract" data-size="s">\n      <span class="ladda-label">Submit</span>\n    </button>\n  </form>\n  <button class="submit-another ladda-button" data-size="s">\n    <span class="ladda-label">Track Another User</span>\n  </button>\n  <div id="trackuser-data"></div>\n  <div class="loader"></div>\n  <div id="trackuser-posts"></div>\n'}),b.wordcloud=a(function(a,b,c,d,e){function k(a,b){return" selected "}function l(a,b){return" checked "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f="",g,h=this,i="function",j=this.escapeExpression;f+="<h2>Word Clouds</h2>\n  <form id='wordCloudForm' class=\"form-inline\">\n    <label for='subreddit'>Subreddit:</label>\n    <select name=\"subreddit\">\n      <option value='GamingNoun' ",g=c["if"].call(b,b.GamingNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Gaming</option>\n      <option value='TechnologyNoun' ",g=c["if"].call(b,b.TechnologyNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Technology</option>\n      <option value='FunnyNoun' ",g=c["if"].call(b,b.FunnyNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Funny</option>\n      <option value='AdviceAnimalsNoun' ",g=c["if"].call(b,b.AdviceAnimalsNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Advice Animals</option>\n      <option value='MineCraftNoun' ",g=c["if"].call(b,b.MineCraftNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Mine Craft</option>\n      <option value='WTFNoun' ",g=c["if"].call(b,b.WTFNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">WTF</option>\n      <option value='AwwNoun' ",g=c["if"].call(b,b.AwwNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Aww</option>\n      <option value='GIFNoun' ",g=c["if"].call(b,b.GIFNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">GIF</option>\n      <option value='LeageOfLegendsNoun' ",g=c["if"].call(b,b.LeageOfLegendsNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Leage Of Legends</option>\n      <option value='PicsNoun' ",g=c["if"].call(b,b.PicsNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Pics</option>\n      <option value='PoliticsNoun' ",g=c["if"].call(b,b.PoliticsNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Politics</option>\n      <option value='ScienceNoun' ",g=c["if"].call(b,b.ScienceNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Science</option>\n      <option value='TodayILearnedNoun' ",g=c["if"].call(b,b.TodayILearnedNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Today I Learned</option>\n      <option value='TreesNoun' ",g=c["if"].call(b,b.TreesNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Trees</option>\n      <option value='VideosNoun' ",g=c["if"].call(b,b.VideosNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">Videos</option>\n      <option value='WorldNewsNoun' ",g=c["if"].call(b,b.WorldNewsNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">World News</option>\n      <option value='NSFWNoun' ",g=c["if"].call(b,b.NSFWNoun,{hash:{},inverse:h.noop,fn:h.program(1,k,e),data:e});if(g||g===0)f+=g;f+=">NSFW</option>\n    </select>\n    <label>Word Count:</label>\n    <input class=\"input-small\" type='text' name='limit' value=\"",(g=c.limit)?g=g.call(b,{hash:{},data:e}):(g=b.limit,g=typeof g===i?g.apply(b):g),f+=j(g)+"\">\n    <label for='sizeMultiple'>Size Multiplyer:</label>\n    <input class=\"input-small\" type='text' name='sizeMultiple' value=\"",(g=c.sizeMultiple)?g=g.call(b,{hash:{},data:e}):(g=b.sizeMultiple,g=typeof g===i?g.apply(b):g),f+=j(g)+'">\n    <label class="radio inline">\n      <input class="radio" type=\'radio\' name=\'viewType\' ',g=c["if"].call(b,b._rotate90discrete,{hash:{},inverse:h.noop,fn:h.program(3,l,e),data:e});if(g||g===0)f+=g;f+=" value=\"_rotate90discrete\">\n      Horizontal and Vertical\n    </label>\n    <label class=\"radio inline\">\n      <input type='radio' name='viewType' ",g=c["if"].call(b,b._rotate180continuous,{hash:{},inverse:h.noop,fn:h.program(3,l,e),data:e});if(g||g===0)f+=g;return f+=' value=\'_rotate180continuous\'> All Angles\n    </label>\n    <button class="ladda-button">\n      <span class="ladda-label">Submit</span>\n    </button>\n    \n  </form>\n',f})})()