(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(143),o=n(147);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},142:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(141),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(142),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(34);n.d(t,"parsePath",function(){return s.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(144),o=i.a.div.withConfig({displayName:"header__StyledHeader",componentId:"sc-31ozxh-0"})(["display:flex;justify-content:flex-end;align-items:center;padding:1rem 1rem;@media (min-width:900px){padding:0 1rem;}"]),u=i.a.span.withConfig({displayName:"header__StyledSpan",componentId:"sc-31ozxh-1"})(["margin-right:0.5rem;color:#9c9c9c;font-size:12px;"]);t.a=function(e){e.siteTitle;return r.a.createElement(o,null,r.a.createElement(u,null,"EN"),r.a.createElement(u,null,"FR"),r.a.createElement(u,null,"TR"))}},147:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(150),l=n.n(c),d=n(143),s=(n(146),n(149),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});s.propTypes={children:u.a.node.isRequired},t.a=s},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-7ff7546542b46d34a14e.js.map