(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ee34144c","chunk-94efcb6a":"52907e8a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-94efcb6a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-94efcb6a":"f9716aa2"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],h.parentNode.removeChild(h),n(s)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var h=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/gpu-gems/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var h=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-view")],1)],1)},a=[],s=r["a"].extend({}),i=s,u=n("2877"),c=n("6544"),l=n.n(c),f=n("7496"),h=n("a75b"),p=Object(u["a"])(i,o,a,!1,null,null,null),d=p.exports;l()(p,{VApp:f["a"],VContent:h["a"]});var m=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("HelloWorld")},g=[],b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),e._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.whatsNext,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.importantLinks,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},e._l(e.ecosystem,function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v("\n          "+e._s(t.text)+"\n        ")])}),0)],1)],1)],1)},y=[],x=r["a"].extend({data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),w=x,_=n("a523"),j=n("0e8f"),k=n("adda"),C=n("a722"),O=Object(u["a"])(w,b,y,!1,null,null,null),E=O.exports;l()(O,{VContainer:_["a"],VFlex:j["a"],VImg:k["a"],VLayout:C["a"]});var A=r["a"].extend({components:{HelloWorld:E}}),S=A,N=Object(u["a"])(S,v,g,!1,null,null,null),P=N.exports;r["a"].use(m["a"]);var L=new m["a"]({mode:"history",base:"/gpu-gems/",routes:[{path:"/home",name:"home",component:P},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/",name:"space",component:function(){return n.e("chunk-94efcb6a").then(n.bind(null,"5f60"))}}]}),T=n("2f62");r["a"].use(T["a"]);var V=new T["a"].Store({state:{},mutations:{},actions:{}}),q=n("9483");Object(q["a"])("".concat("/gpu-gems/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var F=n("f309");r["a"].use(F["a"]);var M=new F["a"]({icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:L,store:V,vuetify:M,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.4a06b440.js.map