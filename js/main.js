(self.webpackChunkimarc_handbook=self.webpackChunkimarc_handbook||[]).push([[522],{630:()=>{function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.querySelectorAll(".entry__item");Array.from(n).forEach((function(t){t.addEventListener("click",(function(){var n,r=t.getElementsByTagName("a"),o=window.getSelection().toString();(n=t.querySelector("[data-main-link]"),Array.from(r).forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))})),n)||(n=e(r,1)[0]);o||n.click()}))}))},181:()=>{var e=function(e){if(e.currentTarget.classList.contains("color-mode__button--light"))return document.documentElement.setAttribute("color-mode","light"),void localStorage.setItem("color-mode","light");document.documentElement.setAttribute("color-mode","dark"),localStorage.setItem("color-mode","dark")};document.querySelectorAll(".color-mode__button").forEach((function(t){t.addEventListener("click",e)}))},721:()=>{var e=document.querySelector(".nav--toc"),t=function(){var t=document.documentElement.clientHeight;e.clientHeight<=t?e.classList.add("torso__nav--toc-stuck"):e.classList.remove("torso__nav--toc-stuck")};e&&(document.addEventListener("DOMContentLoaded",t),window.addEventListener("resize",t))},207:(e,t,n)=>{"use strict";n(90),n(665);document.addEventListener("DOMContentLoaded",(function(){var e=new MmenuLight(document.querySelector("#js-masthead__nav"),"(max-width: 767px)"),t=(e.navigation({theme:"",title:"Handbook"}),e.offcanvas());document.querySelector("a[href='#js-masthead__nav']").addEventListener("click",(function(e){e.preventDefault(),t.open()}))}));var r=n(358),o=n(82);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.p8.registerPlugin(o.i);var s=document.querySelectorAll(".entry__item");Array.from(s).forEach((function(e){var t=e.offsetWidth/2.15,n=e.offsetHeight/2.15,s=[{x:t,y:-n},{x:-t,y:n}],c=Array.from(e.querySelectorAll(".entry__shape"));c.sort((function(e,t){return.5-Math.random()})),e.addEventListener("mouseenter",(function(){c.forEach((function(e,t){var n=s[t];o.i.matchMedia({"(min-width: 1180px)":function(){r.p8.to(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({duration:.25,ease:"expo.inOut",scale:1.5},n))}})}))})),e.addEventListener("mouseleave",(function(){c.forEach((function(e,t){o.i.matchMedia({"(min-width: 1180px)":function(){r.p8.to(e,{duration:.25,ease:"expo.inOut",scale:1,x:0,y:0})}})}))}))}));n(630),n(181),n(721)},90:e=>{!function(t,n){var r=function(e,t,n){"use strict";var r,o;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in o=e.lazySizesConfig||e.lazysizesConfig||{},n)t in o||(o[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:o,noSupport:!0};var i=t.documentElement,a=e.HTMLPictureElement,s="addEventListener",c="getAttribute",l=e[s].bind(e),u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,m=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],h={},v=Array.prototype.forEach,y=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[c]("class")||"")&&h[t]},g=function(e,t){y(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=y(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},E=function(e,t,n){var r=n?s:"removeEventListener";n&&E(e,t),p.forEach((function(n){e[r](n,t)}))},w=function(e,n,o,i,a){var s=t.createEvent("Event");return o||(o={}),o.instance=r,s.initEvent(n,!i,!a),s.detail=o,e.dispatchEvent(s),s},z=function(t,n){var r;!a&&(r=e.picturefill||o.pf)?(n&&n.src&&!t[c]("srcset")&&t.setAttribute("srcset",n.src),r({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},L=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<o.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=(ge=[],be=[],Ee=ge,we=function(){var e=Ee;for(Ee=ge.length?be:ge,ve=!0,ye=!1;e.length;)e.shift()();ve=!1},ze=function(e,n){ve&&!n?e.apply(this,arguments):(Ee.push(e),ye||(ye=!0,(t.hidden?u:d)(we)))},ze._lsFlush=we,ze),A=function(e,t){return t?function(){C(e)}:function(){var t=this,n=arguments;C((function(){e.apply(t,n)}))}},S=function(e){var t,r=0,i=o.throttleDelay,a=o.ricTimeout,s=function(){t=!1,r=n.now(),e()},c=f&&a>49?function(){f(s,{timeout:a}),a!==o.ricTimeout&&(a=o.ricTimeout)}:A((function(){u(s)}),!0);return function(e){var o;(e=!0===e)&&(a=33),t||(t=!0,(o=i-(n.now()-r))<0&&(o=0),e||o<9?c():u(c,o))}},O=function(e){var t,r,o=99,i=function(){t=null,e()},a=function(){var e=n.now()-r;e<o?u(a,o-e):(f||i)(i)};return function(){r=n.now(),t||(t=u(a,o))}},x=(J=/^img$/i,K=/^iframe$/i,Q="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==G&&(G="hidden"==L(t.body,"visibility")),G||!("hidden"==L(e.parentNode,"visibility")&&"hidden"==L(e,"visibility"))},re=function(e,n){var r,o=e,a=ne(e);for(R-=n,V+=n,$-=n,U+=n;a&&(o=o.offsetParent)&&o!=t.body&&o!=i;)(a=(L(o,"opacity")||1)>0)&&"visible"!=L(o,"overflow")&&(r=o.getBoundingClientRect(),a=U>r.left&&$<r.right&&V>r.top-1&&R<r.bottom+1);return a},oe=function(){var e,n,a,s,l,u,d,f,m,p,h,v,y=r.elements;if((W=o.loadMode)&&Z<8&&(e=y.length)){for(n=0,ee++;n<e;n++)if(y[n]&&!y[n]._lazyRace)if(!Q||r.prematureUnveil&&r.prematureUnveil(y[n]))fe(y[n]);else if((f=y[n][c]("data-expand"))&&(u=1*f)||(u=Y),p||(p=!o.expand||o.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:o.expand,r._defEx=p,h=p*o.expFactor,v=o.hFac,G=null,Y<h&&Z<1&&ee>2&&W>2&&!t.hidden?(Y=h,ee=0):Y=W>1&&ee>1&&Z<6?p:X),m!==u&&(B=innerWidth+u*v,H=innerHeight+u,d=-1*u,m=u),a=y[n].getBoundingClientRect(),(V=a.bottom)>=d&&(R=a.top)<=H&&(U=a.right)>=d*v&&($=a.left)<=B&&(V||U||$||R)&&(o.loadHidden||ne(y[n]))&&(q&&Z<3&&!f&&(W<3||ee<4)||re(y[n],u))){if(fe(y[n]),l=!0,Z>9)break}else!l&&q&&!s&&Z<4&&ee<4&&W>2&&(F[0]||o.preloadAfterLoad)&&(F[0]||!f&&(V||U||$||R||"auto"!=y[n][c](o.sizesAttr)))&&(s=F[0]||y[n]);s&&!l&&fe(s)}},ie=S(oe),ae=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),g(t,o.loadedClass),b(t,o.loadingClass),E(t,ce),w(t,"lazyloaded"))},se=A(ae),ce=function(e){se({target:e.target})},le=function(e,t){var n=e.getAttribute("data-load-mode")||o.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},ue=function(e){var t,n=e[c](o.srcsetAttr);(t=o.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},de=A((function(e,t,n,r,i){var a,s,l,d,f,p;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(r&&(n?g(e,o.autosizesClass):e.setAttribute("sizes",r)),s=e[c](o.srcsetAttr),a=e[c](o.srcAttr),i&&(d=(l=e.parentNode)&&m.test(l.nodeName||"")),p=t.firesLoad||"src"in e&&(s||a||d),f={target:e},g(e,o.loadingClass),p&&(clearTimeout(D),D=u(te,2500),E(e,ce,!0)),d&&v.call(l.getElementsByTagName("source"),ue),s?e.setAttribute("srcset",s):a&&!d&&(K.test(e.nodeName)?le(e,a):e.src=a),i&&(s||d)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,b(e,o.lazyClass),C((function(){var t=e.complete&&e.naturalWidth>1;p&&!t||(t&&g(e,o.fastLoadedClass),ae(f),e._lazyCache=!0,u((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=J.test(e.nodeName),r=n&&(e[c](o.sizesAttr)||e[c]("sizes")),i="auto"==r;(!i&&q||!n||!e[c]("src")&&!e.srcset||e.complete||y(e,o.errorClass)||!y(e,o.lazyClass))&&(t=w(e,"lazyunveilread").detail,i&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,de(e,t,i,r,n))}},me=O((function(){o.loadMode=3,ie()})),pe=function(){3==o.loadMode&&(o.loadMode=2),me()},he=function(){q||(n.now()-I<999?u(he,999):(q=!0,o.loadMode=3,ie(),l("scroll",pe,!0)))},{_:function(){I=n.now(),r.elements=t.getElementsByClassName(o.lazyClass),F=t.getElementsByClassName(o.lazyClass+" "+o.preloadClass),l("scroll",ie,!0),l("resize",ie,!0),l("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+o.loadingClass);n.length&&n.forEach&&d((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(ie).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",ie,!0),i[s]("DOMAttrModified",ie,!0),setInterval(ie,999)),l("hashchange",ie,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,ie,!0)})),/d$|^c/.test(t.readyState)?he():(l("load",he),t[s]("DOMContentLoaded",ie),u(he,2e4)),r.elements.length?(oe(),C._lsFlush()):ie()},checkElems:ie,unveil:fe,_aLSL:pe}),M=(j=A((function(e,t,n,r){var o,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),m.test(t.nodeName||""))for(i=0,a=(o=t.getElementsByTagName("source")).length;i<a;i++)o[i].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)})),T=function(e,t,n){var r,o=e.parentNode;o&&(n=_(e,o,n),(r=w(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&j(e,o,r,n))},N=O((function(){var e,t=P.length;if(t)for(e=0;e<t;e++)T(P[e])})),{_:function(){P=t.getElementsByClassName(o.autosizesClass),l("resize",N)},checkElems:N,updateElem:T}),k=function(){!k.i&&t.getElementsByClassName&&(k.i=!0,M._(),x._())};var P,j,T,N;var F,q,D,W,I,B,H,R,$,U,V,G,J,K,Q,X,Y,Z,ee,te,ne,re,oe,ie,ae,se,ce,le,ue,de,fe,me,pe,he;var ve,ye,ge,be,Ee,we,ze;return u((function(){o.init&&k()})),r={cfg:o,autoSizer:M,loader:x,init:k,uP:z,aC:g,rC:b,hC:y,fire:w,gW:_,rAF:C}}(t,t.document,Date);t.lazySizes=r,e.exports&&(e.exports=r)}("undefined"!=typeof window?window:{})},624:()=>{},665:()=>{!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){function e(e){var t=this;this.listener=function(e){(e.matches?t.matchFns:t.unmatchFns).forEach((function(e){e()}))},this.toggler=window.matchMedia(e),this.toggler.addListener(this.listener),this.matchFns=[],this.unmatchFns=[]}return e.prototype.add=function(e,t){this.matchFns.push(e),this.unmatchFns.push(t),(this.toggler.matches?e:t)()},e}(),o=function(e){return Array.prototype.slice.call(e)},i=function(e,t){return o((t||document).querySelectorAll(e))},a=("ontouchstart"in window||navigator.msMaxTouchPoints,navigator.userAgent.indexOf("MSIE")>-1||navigator.appVersion.indexOf("Trident/")>-1),s="mm-spn",c=function(){function e(e,t,n,r,o){this.node=e,this.title=t,this.slidingSubmenus=r,this.selectedClass=n,this.node.classList.add(s),a&&(this.slidingSubmenus=!1),this.node.classList.add(s+"--"+o),this.node.classList.add(s+"--"+(this.slidingSubmenus?"navbar":"vertical")),this._setSelectedl(),this._initAnchors()}return Object.defineProperty(e.prototype,"prefix",{get:function(){return s},enumerable:!1,configurable:!0}),e.prototype.openPanel=function(e){var t=e.parentElement;if(this.slidingSubmenus){var n=e.dataset.mmSpnTitle;t===this.node?this.node.classList.add(s+"--main"):(this.node.classList.remove(s+"--main"),n||o(t.children).forEach((function(e){e.matches("a, span")&&(n=e.textContent)}))),n||(n=this.title),this.node.dataset.mmSpnTitle=n,i(".mm-spn--open",this.node).forEach((function(e){e.classList.remove(s+"--open"),e.classList.remove(s+"--parent")})),e.classList.add(s+"--open"),e.classList.remove(s+"--parent");for(var r=e.parentElement.closest("ul");r;)r.classList.add(s+"--open"),r.classList.add(s+"--parent"),r=r.parentElement.closest("ul")}else{var a=e.matches(".mm-spn--open");i(".mm-spn--open",this.node).forEach((function(e){e.classList.remove(s+"--open")})),e.classList[a?"remove":"add"](s+"--open");for(var c=e.parentElement.closest("ul");c;)c.classList.add(s+"--open"),c=c.parentElement.closest("ul")}},e.prototype._setSelectedl=function(){var e=i("."+this.selectedClass,this.node),t=e[e.length-1],n=null;t&&(n=t.closest("ul")),n||(n=this.node.querySelector("ul")),this.openPanel(n)},e.prototype._initAnchors=function(){var e=this;this.node.addEventListener("click",(function(t){var n=t.target,r=!1;(r=(r=(r=r||function(e){return!!e.matches("a")}(n))||function(t){var n;return!!(n=t.closest("span")?t.parentElement:!!t.closest("li")&&t)&&(o(n.children).forEach((function(t){t.matches("ul")&&e.openPanel(t)})),!0)}(n))||function(t){var n=i(".mm-spn--open",t),r=n[n.length-1];if(r){var o=r.parentElement.closest("ul");if(o)return e.openPanel(o),!0}return!1}(n))&&t.stopImmediatePropagation()}))},e}(),l=function(){function e(e,t){var n=this;void 0===e&&(e=null),this.wrapper=document.createElement("div"),this.wrapper.classList.add("mm-ocd"),this.wrapper.classList.add("mm-ocd--"+t),this.content=document.createElement("div"),this.content.classList.add("mm-ocd__content"),this.wrapper.append(this.content),this.backdrop=document.createElement("div"),this.backdrop.classList.add("mm-ocd__backdrop"),this.wrapper.append(this.backdrop),document.body.append(this.wrapper),e&&this.content.append(e);var r=function(e){n.close(),e.stopImmediatePropagation()};this.backdrop.addEventListener("touchstart",r,{passive:!0}),this.backdrop.addEventListener("mousedown",r,{passive:!0})}return Object.defineProperty(e.prototype,"prefix",{get:function(){return"mm-ocd"},enumerable:!1,configurable:!0}),e.prototype.open=function(){this.wrapper.classList.add("mm-ocd--open"),document.body.classList.add("mm-ocd-opened")},e.prototype.close=function(){this.wrapper.classList.remove("mm-ocd--open"),document.body.classList.remove("mm-ocd-opened")},e}(),u=function(){function e(e,t){void 0===t&&(t="all"),this.menu=e,this.toggler=new r(t)}return e.prototype.navigation=function(e){var t=this;if(!this.navigator){var n=(e=e||{}).title,r=void 0===n?"Menu":n,o=e.selectedClass,i=void 0===o?"Selected":o,a=e.slidingSubmenus,s=void 0===a||a,l=e.theme,u=void 0===l?"light":l;this.navigator=new c(this.menu,r,i,s,u),this.toggler.add((function(){return t.menu.classList.add(t.navigator.prefix)}),(function(){return t.menu.classList.remove(t.navigator.prefix)}))}return this.navigator},e.prototype.offcanvas=function(e){var t=this;if(!this.drawer){var n=(e=e||{}).position,r=void 0===n?"left":n;this.drawer=new l(null,r);var o=document.createComment("original menu location");this.menu.after(o),this.toggler.add((function(){t.drawer.content.append(t.menu)}),(function(){t.drawer.close(),o.after(t.menu)}))}return this.drawer},e}();t.default=u,window.MmenuLight=u}])}},e=>{"use strict";var t=t=>e(e.s=t);e.O(0,[870,898],(()=>(t(207),t(624))));e.O()}]);
//# sourceMappingURL=main.js.map