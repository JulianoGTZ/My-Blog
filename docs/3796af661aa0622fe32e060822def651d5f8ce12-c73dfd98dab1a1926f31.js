(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/9aa":function(t,e,a){var n=a("NykK"),i=a("ExA7");t.exports=function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==n(t)}},"/d1K":function(t,e,a){"use strict";a.d(e,"a",(function(){return O}));var n=a("q1tI"),i=a.n(n),o=a("Wbzz"),r=a("iSRb"),u=a.n(r),c=function(t){var e=t.author,a=t.isIndex;return i.a.createElement("div",{"data-testid":"author",className:u.a.author},i.a.createElement(o.Link,{"data-testid":"author-link",to:"/"},i.a.createElement("img",{"data-testid":"author-img",src:Object(o.withPrefix)(e.photo),className:u.a.author__photo,width:"75",height:"75",alt:e.name})),!0===a?i.a.createElement("h1",{className:u.a.author__title,"data-testid":"author-title-link-h1"},i.a.createElement(o.Link,{"data-testid":"author-title-link",className:u.a["author__title-link"],to:"/"},e.name)):i.a.createElement("h2",{className:u.a.author__title,"data-testid":"author-title-link-h2"},i.a.createElement(o.Link,{"data-testid":"author-title-link",className:u.a["author__title-link"],to:"/"},e.name)),i.a.createElement("p",{"data-testid":"author-bio",className:u.a.author__subtitle},e.bio))},l=a("7Qib"),s=a("euHg"),d=a.n(s),f=function(t){var e=t.name,a=t.icon,n=t.testId;return i.a.createElement("svg",{className:d.a.icon,viewBox:a.viewBox,"data-testid":n},i.a.createElement("title",null,e),i.a.createElement("path",{d:a.path}))};f.defaultProps={testId:"icon"};var m=f,_=a("aU/I"),p=a.n(_),x=function(t){var e=t.contacts;return i.a.createElement("div",{"data-testid":"my-contacts",className:p.a.contacts},i.a.createElement("ul",{"data-testid":"my-contacts-list",className:p.a.contacts__list},Object.keys(e).map((function(t){return e[t]?i.a.createElement("li",{"data-testid":"contact-item-"+t,className:p.a["contacts__list-item"],key:t},i.a.createElement("a",{className:p.a["contacts__list-item-link"],href:Object(l.b)(t,e[t]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(m,{testId:"contact-icon-"+t,name:t,icon:Object(l.c)(t)}))):null}))))},h=a("Nrk+"),b=a.n(h),v=function(t){var e=t.copyright;return i.a.createElement("div",{"data-testid":"copyright",className:b.a.copyright},e)},g=a("je8k"),E=a.n(g),y=function(t){var e=t.menu;return i.a.createElement("nav",{"data-testid":"menu-navbar",className:E.a.menu},i.a.createElement("ul",{"data-testid":"menu-items",className:E.a.menu__list},e.map((function(t,e){return i.a.createElement("li",{id:t.path+"-"+e,className:E.a["menu__list-item"],key:t.path},i.a.createElement(o.Link,{to:t.path,"data-testid":"menu-list-item-"+e,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"]},t.label))}))))},N=a("SySy"),k=a.n(N),A=a("gGy4"),j=function(t){var e=t.isIndex,a=Object(A.b)(),n=a.author,o=a.copyright,r=a.menu;return i.a.createElement("div",{className:k.a.sidebar,"data-testid":"sidebar"},i.a.createElement("div",{className:k.a.sidebar__inner},i.a.createElement(c,{author:n,isIndex:e}),i.a.createElement(y,{menu:r}),i.a.createElement(x,{contacts:n.contacts}),i.a.createElement(v,{copyright:o})))};j.defaultProps={isIndex:!1};var O=j},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,a){var n=a("dVn5"),i=a("fo6e"),o=a("dt0z"),r=a("9NmV");t.exports=function(t,e,a){return t=o(t),void 0===(e=a?void 0:e)?i(t)?r(t):n(t):t.match(e)||[]}},"9NmV":function(t,e){var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",n="["+a+"]",i="\\d+",o="[\\u2700-\\u27bf]",r="[a-z\\xdf-\\xf6\\xf8-\\xff]",u="[^\\ud800-\\udfff"+a+i+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+r+"|"+u+")",f="(?:"+s+"|"+u+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",_="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,l].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),p="(?:"+[o,c,l].join("|")+")"+_,x=RegExp([s+"?"+r+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[n,s,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[n,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,p].join("|"),"g");t.exports=function(t){return t.match(x)||[]}},AP2z:function(t,e,a){var n=a("nmnc"),i=Object.prototype,o=i.hasOwnProperty,r=i.toString,u=n?n.toStringTag:void 0;t.exports=function(t){var e=o.call(t,u),a=t[u];try{t[u]=void 0;var n=!0}catch(c){}var i=r.call(t);return n&&(e?t[u]=a:delete t[u]),i}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e){var a=Object.prototype.toString;t.exports=function(t){return a.call(t)}},Kz5y:function(t,e,a){var n=a("WFqU"),i="object"==typeof self&&self&&self.Object===Object&&self,o=n||i||Function("return this")();t.exports=o},N1om:function(t,e,a){var n=a("sgoq")((function(t,e,a){return t+(a?"-":"")+e.toLowerCase()}));t.exports=n},"Nrk+":function(t,e,a){t.exports={copyright:"Copyright-module--copyright--1ariN"}},NykK:function(t,e,a){var n=a("nmnc"),i=a("AP2z"),o=a("KfNM"),r=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r&&r in Object(t)?i(t):o(t)}},RBgx:function(t,e,a){t.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("q1tI"),i=a.n(n),o=a("RBgx"),r=a.n(o),u=function(t){var e=t.title,a=t.children,o=Object(n.useRef)();return Object(n.useEffect)((function(){o.current.scrollIntoView()}),[]),i.a.createElement("div",{"data-testid":"page-container",ref:o,className:r.a.page},i.a.createElement("div",{className:r.a.page__inner},e&&i.a.createElement("h1",{"data-testid":"page-title",className:r.a.page__title},e),i.a.createElement("div",{"data-testid":"page-body",className:r.a.page__body},a)))};u.defaultProps={children:null,title:void 0};var c=u},SySy:function(t,e,a){t.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},TKrE:function(t,e,a){var n=a("qRkn"),i=a("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=i(t))&&t.replace(o,n).replace(r,"")}},WFqU:function(t,e,a){(function(e){var a="object"==typeof e&&e&&e.Object===Object&&e;t.exports=a}).call(this,a("yLpj"))},Z0cm:function(t,e){var a=Array.isArray;t.exports=a},"aU/I":function(t,e,a){t.exports={contacts:"Contacts-module--contacts--1rGd1",contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},asDA:function(t,e){t.exports=function(t,e,a,n){var i=-1,o=null==t?0:t.length;for(n&&o&&(a=t[++i]);++i<o;)a=e(a,t[i],i,t);return a}},dVn5:function(t,e){var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(a)||[]}},dt0z:function(t,e,a){var n=a("zoYe");t.exports=function(t){return null==t?"":n(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var a=-1,n=null==t?0:t.length,i=Array(n);++a<n;)i[a]=e(t[a],a,t);return i}},euHg:function(t,e,a){t.exports={icon:"Icon-module--icon--Gpyvw"}},fo6e:function(t,e){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return a.test(t)}},iSRb:function(t,e,a){t.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},je8k:function(t,e,a){t.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}},nmnc:function(t,e,a){var n=a("Kz5y").Symbol;t.exports=n},qRkn:function(t,e,a){var n=a("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=n},sgoq:function(t,e,a){var n=a("asDA"),i=a("TKrE"),o=a("6nK8"),r=RegExp("['’]","g");t.exports=function(t){return function(e){return n(o(i(e).replace(r,"")),t,"")}}},zoYe:function(t,e,a){var n=a("nmnc"),i=a("eUgh"),o=a("Z0cm"),r=a("/9aa"),u=n?n.prototype:void 0,c=u?u.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return i(e,t)+"";if(r(e))return c?c.call(e):"";var a=e+"";return"0"==a&&1/e==-1/0?"-0":a}}}]);
//# sourceMappingURL=3796af661aa0622fe32e060822def651d5f8ce12-c73dfd98dab1a1926f31.js.map