(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{647:function(e,t,n){var r=n(1702),a=n(7908),o=Math.floor,l=r("".charAt),i=r("".replace),c=r("".slice),m=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,u,d){var p=n+e.length,f=r.length,g=s;return void 0!==u&&(u=a(u),g=m),i(d,g,(function(a,i){var m;switch(l(i,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,p);case"<":m=u[c(i,1,-1)];break;default:var s=+i;if(0===s)return a;if(s>f){var d=o(s/10);return 0===d?a:d<=f?void 0===r[d-1]?l(i,1):r[d-1]+l(i,1):a}m=r[s-1]}return void 0===m?"":m}))}},7850:function(e,t,n){var r=n(111),a=n(4326),o=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4706:function(e,t,n){var r=n(6916),a=n(2597),o=n(7976),l=n(7066),i=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in i||a(e,"flags")||!o(i,e)?t:r(l,e)}},1340:function(e,t,n){var r=n(648),a=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return a(e)}},8757:function(e,t,n){"use strict";var r=n(2109),a=n(6916),o=n(1702),l=n(4488),i=n(614),c=n(8554),m=n(7850),s=n(1340),u=n(8173),d=n(4706),p=n(647),f=n(5112),g=n(1913),v=f("replace"),b=TypeError,h=o("".indexOf),E=o("".replace),y=o("".slice),x=Math.max,w=function(e,t,n){return n>e.length?-1:""===t?n:h(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,o,f,k,M,S,_,N,C=l(this),A=0,L=0,z="";if(!c(e)){if((n=m(e))&&(r=s(l(d(e))),!~h(r,"g")))throw b("`.replaceAll` does not allow non-global regexes");if(o=u(e,v))return a(o,e,C,t);if(g&&n)return E(s(C),e,t)}for(f=s(C),k=s(e),(M=i(t))||(t=s(t)),S=k.length,_=x(1,S),A=w(f,k,0);-1!==A;)N=M?s(t(k,A,f)):p(k,f,A,[],void 0,t),z+=y(f,L,A)+N,L=A+S,A=w(f,k,A+_);return L<f.length&&(z+=y(f,L)),z}})},935:function(e,t,n){n(8757)},9439:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(1082),o=function(){(0,a.useStaticQuery)("702912328").site.siteMetadata;return r.createElement("header",{className:"terminal-nav"},r.createElement("div",{className:"terminal-logo"},r.createElement("div",{className:"logo terminal-prompt"},r.createElement(a.Link,{className:"menu-item",to:"/"},"Without followers, evil cannot spread"))),r.createElement("nav",{className:"terminal-menu"},r.createElement("ul",null,r.createElement("li",null,r.createElement(a.Link,{className:"menu-item",to:"/"},"home")),r.createElement("li",null,r.createElement(a.Link,{className:"menu-item",to:"/about"},"about")))))},l=n(3494),i=n(8789),c=l.default.h3.withConfig({displayName:"footer__FooterText",componentId:"sc-ora8l1-0"})(["font-size:14px;padding-bottom:10px;"]),m=function(){return r.createElement("footer",null,r.createElement(c,null,"© ",(new Date).getFullYear(),", Built by"," ",r.createElement("a",{href:"http://www.github.com/tandolf"},"toerktumlare")))},s=l.default.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-omnq36-0"})(["margin:0 auto;max-width:70rem;background-color:var(--background-color);color:var(--font-color);"]),u=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(s,null,r.createElement(i.GlobalStyle,null),r.createElement(o,null),r.createElement("main",null,t),r.createElement(m,null)))}},4001:function(e,t,n){"use strict";var r=n(7294),a=n(1082),o=function(e){var t,n,o,l=e.description,i=(e.lang,e.title),c=e.children,m=(0,a.useStaticQuery)("984448874").site,s=l||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?i+" | "+u:i),r.createElement("meta",{name:"description",content:s}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:s}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(o=n.social)||void 0===o?void 0:o.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:s}),c)};o.defaultProps={description:""},t.Z=o},6603:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(3494),o=a.default.div.withConfig({displayName:"Tag__StyledWrapper",componentId:"sc-1wufizg-0"})(["border-radius :5px;background-color:var(--header-font-color);display:inline-block;margin-right:6px;"]),l=a.default.p.withConfig({displayName:"Tag__Text",componentId:"sc-1wufizg-1"})(["font-size:10px;text-align:center;margin:2px 10px 2px;"]),i=function(e){var t=e.children;return r.createElement(o,null,r.createElement(l,null,"#",t))},c=a.default.div.withConfig({displayName:"tagSection__StyledWrapper",componentId:"sc-1aa460q-0"})(["margin-bottom:10px;"]),m=function(e){var t=e.tags,n=t||[];return r.createElement(c,null,n.map((function(e){return r.createElement(i,null,e)})))}},8789:function(e,t,n){"use strict";n.r(t),n.d(t,{GlobalStyle:function(){return s},Head:function(){return d},default:function(){return u}});n(935);var r=n(7294),a=n(1082),o=n(9439),l=n(4001),i=n(3494),c=i.default.h2.withConfig({displayName:"MajorHeading__h2Subtitle",componentId:"sc-111xjm-0"})(["font-size:calc(2rem);color:var(--color-tertiary);margin-top:96px;margin-bottom:32px;"]),m=n(6603),s=(0,i.createGlobalStyle)([":root{--global-font-size:15px;--global-line-height:1.4em;--global-space:10px;--font-stack:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;--mono-font-stack:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;--background-color:#222225;--page-width:60em;--font-color:#e8e9ed;--header-font-color:#7a3496;--color-gray-700:#BFDBF7;--color-tertiary:#ffdf2c;--invert-font-color:#222225;--secondary-color:#1F7A8C;--tertiary-color:#a3abba;--primary-color:#62c4ff;--error-color:#A31621;--progress-bar-background:#3f3f44;--progress-bar-fill:#62c4ff;--code-bg-color:#3f3f44;--input-style:solid;--display-h1-decoration:none;--spacing-4:4rem;--spacing-0:0;--spacing-16:4rem;}body{background-color:var(--background-color);color:var(--font-color);}ol li::before{list-style-type:none;margin:0;padding:0;}.no-line::after{content:none;}code::after,code::before{content:none;}.mermaid{margin-top:4em;margin-bottom:4em;}.bio-avatar{margin-right:var(--spacing-4);margin-bottom:var(--spacing-0);min-width:50px;border-radius:100%;}.bio{display:flex;margin-bottom:var(--spacing-16);}.bio p{margin-top:0.8em;margin-bottom:var(--spacing-0);}h1{font-size:46px;}h2{margin-top:150px;font-size:36px;}"]),u=function(e){var t,n,l=e.data,i=(e.location,null===(t=l.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n||n.title,l.allMarkdownRemark.nodes);return r.createElement(r.Fragment,null,r.createElement(o.Z,null,r.createElement("ul",null,i.map((function(e){var t=e.frontmatter.title||e.fields.slug,n=e.frontmatter.tags?e.frontmatter.tags.replaceAll(/\s/g,"").split(","):[];return r.createElement("li",{key:e.fields.slug,className:"no-line"},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement(c,null,r.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},t))),r.createElement("small",null,e.frontmatter.date),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),r.createElement(m.Z,{tags:n})))})))))},d=function(){return r.createElement(l.Z,{title:"All posts"})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9cb3b083646ed5a7093f.js.map