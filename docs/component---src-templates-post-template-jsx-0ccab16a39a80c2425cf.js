(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Mvws:function(t,e,a){t.exports={content:"Content-module--content--3p512",content__title:"Content-module--content__title--2BDW9",content__body:"Content-module--content__body--2TrQ-"}},RPjP:function(t,e,a){"use strict";t.exports=a("SLms")},SLms:function(t,e,a){"use strict";a("E9XD"),Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),o=s(a("q1tI")),i=s(a("17x9"));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(t,e){var a=e.onNewComment,n=e.language,r=function(t,e){var a={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n]);return a}(e,["onNewComment","language"]);for(var o in r)t.page[o]=r[o];t.language=n,a&&(t.callbacks={onNewComment:[a]})}var p=function(t){function e(){return l(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce((function(e,a){return u.some((function(t){return t===a}))?e:n({},e,function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}({},a,t.props[a]))}),{});return o.default.createElement("div",e,o.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),m=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};u.forEach((function(a){"shortname"!==a&&t.props[a]&&(e[a]=t.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,e)},this.addDisqusScript())}}]),e}(o.default.Component);p.displayName="DisqusThread",p.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=p},WXWR:function(t,e,a){t.exports={tags:"Tags-module--tags--1L_ct",tags__list:"Tags-module--tags__list--91FqN","tags__list-item":"Tags-module--tags__list-item--1M30P","tags__list-item-link":"Tags-module--tags__list-item-link--3SL_8"}},"d+ly":function(t,e,a){t.exports={author:"Author-module--author--2Yefr","author__bio-twitter":"Author-module--author__bio-twitter--n-O9n"}},"gt/k":function(t,e,a){t.exports={post__footer:"Post-module--post__footer--3WzWU",post__comments:"Post-module--post__comments--25y6I","post__home-button":"Post-module--post__home-button--16Kl0"}},myfg:function(t,e,a){t.exports={meta__date:"Meta-module--meta__date--29eD7"}},reCm:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),o=a("Zttt"),i=a("Wbzz"),s=a("7Qib"),l=a("d+ly"),c=a.n(l),u=a("gGy4"),m=function(){var t=Object(u.b)().author;return r.a.createElement("div",{className:c.a.author},r.a.createElement("p",{className:c.a.author__bio,"data-testid":"author-bio-paragraph"},t.bio,r.a.createElement("a",{className:c.a["author__bio-twitter"],href:Object(s.b)("twitter",t.contacts.twitter),rel:"noopener noreferrer",target:"_blank","data-testid":"author-bio-twitter"},r.a.createElement("strong",null,t.name)," "," ","on Twitter")))},d=a("RPjP"),p=a.n(d),f=function(t){var e=t.postTitle,a=t.postSlug,n=Object(u.b)(),o=n.url,i=n.disqusShortname;return i?r.a.createElement(p.a,{shortname:i,"data-testid":"post-comment",identifier:e,title:e,url:o+a}):null},g=a("Mvws"),_=a.n(g),h=function(t){var e=t.body,a=t.title;return r.a.createElement("div",{className:_.a.content,"data-testid":"post-content"},r.a.createElement("h1",{className:_.a.content__title,"data-testid":"post-content-title"},a),r.a.createElement("div",{className:_.a.content__body,"data-testid":"post-content-body",dangerouslySetInnerHTML:{__html:e}}))},b=a("myfg"),y=a.n(b),v=function(t){var e=t.date;return r.a.createElement("div",{className:y.a.meta},r.a.createElement("p",{className:y.a.meta__date,"data-testid":"publish-meta"},"Published"," ",Object(s.a)({date:e,mask:"D MMM YYYY"})))},E=a("WXWR"),w=a.n(E),k=function(t){var e=t.tags,a=t.tagSlugs;return r.a.createElement("div",{className:w.a.tags,"data-testid":"tags-container"},r.a.createElement("ul",{className:w.a.tags__list,"data-testid":"tags-link-list"},a&&a.map((function(t,a){return r.a.createElement("li",{className:w.a["tags__list-item"],key:e[a]},r.a.createElement(i.Link,{to:t,className:w.a["tags__list-item-link"],"data-testid":"tag-link-"+a},e[a]))}))))};k.defaultProps={tagSlugs:void 0};var N=k,O=a("gt/k"),j=a.n(O),P=function(t){var e=t.post,a=e.html,n=e.fields,o=n.tagSlugs,s=n.slug,l=e.frontmatter,c=l.tags,u=l.title,d=l.date;return r.a.createElement("div",{className:j.a.post,"data-testid":"post-page"},r.a.createElement(i.Link,{className:j.a["post__home-button"],to:"/","data-testid":"post-header"},"All Articles"),r.a.createElement("div",{className:j.a.post__content,"data-testid":"post-content-container"},r.a.createElement(h,{body:a,title:u})),r.a.createElement("div",{className:j.a.post__footer,"data-testid":"post-footer"},r.a.createElement(v,{date:d}),c&&o&&r.a.createElement(N,{tags:c,tagSlugs:o}),r.a.createElement(m,null)),r.a.createElement("div",{className:j.a.post__comments,"data-testid":"post-comments"},r.a.createElement(f,{postSlug:s,postTitle:e.frontmatter.title})))},S=a("TJpk"),T=a("YwZP"),q=function(t){var e=t.title,a=t.description,n=t.image,o=t.article,i=Object(T.useLocation)().pathname,s=Object(u.b)(),l=s.subtitle,c=s.url,m=s.author,d=m.photo,p=m.contacts,f={title:e,description:a||l,image:""+c+(n||d),url:""+c+i};return r.a.createElement(S.Helmet,{title:f.title,titleTemplate:e},r.a.createElement("meta",{name:"description",content:f.description}),r.a.createElement("meta",{name:"image",content:f.image}),f.url&&r.a.createElement("meta",{property:"og:url",content:f.url}),!o?null:r.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&r.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&r.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&r.a.createElement("meta",{property:"og:image",content:f.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p.twitter&&r.a.createElement("meta",{name:"twitter:creator",content:p.twitter}),f.title&&r.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&r.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&r.a.createElement("meta",{name:"twitter:image",content:f.image}))};q.defaultProps={title:null,description:null,image:null,article:!1};var D=q;e.default=function(t){var e=t.data,a=Object(u.b)(),n=a.title,i=a.subtitle,s=e.markdownRemark.frontmatter,l=s.title,c=s.description,m=s.socialImage,d=null!==c?c:i;return r.a.createElement(o.a,{title:l+" - "+n,description:d,socialImage:m},r.a.createElement(D,{title:n,description:d,image:m,article:!0}),r.a.createElement(P,{post:e.markdownRemark}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-0ccab16a39a80c2425cf.js.map