(()=>{var n={662:(n,e,t)=>{"use strict";t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n",""]);const s=a},159:(n,e,t)=>{"use strict";t.d(e,{A:()=>E});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),d=t.n(s),l=new URL(t(161),t.b),c=new URL(t(368),t.b),p=new URL(t(981),t.b),u=new URL(t(238),t.b),h=new URL(t(673),t.b),f=new URL(t(398),t.b),m=new URL(t(255),t.b),g=new URL(t(409),t.b),v=new URL(t(666),t.b),b=new URL(t(915),t.b),w=a()(o()),y=d()(l),x=d()(c),k=d()(p),C=d()(u),A=d()(h),S=d()(f),I=d()(m),j=d()(g),q=d()(v),z=d()(b);w.push([n.id,`@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${y}) format("woff");\n  font-weight: 500;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${x}) format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${k}) format("woff");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${C}) format("woff");\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${A}) format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${S}) format("woff");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Inknut antiqua";\n  src: url(${I}) format("woff");\n  font-weight: 800;\n  font-style: normal;\n}\n@font-face {\n  font-family: "inika";\n  src: url(${j}) format("woff2");\n  font-weight: 700;\n  font-style: normal;\n}\n@font-face {\n  font-family: "inika";\n  src: url(${q}) format("woff2");\n  font-weight: 400;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Ingrid darling";\n  src: url(${z}) format("woff");\n  font-weight: normal;\n  font-style: normal;\n}\n\n:root {\n  --side-mrg: 10px;\n  --hd-padding: 31px;\n  --hd-height: 60px;\n  --line-wid: 1.5px;\n  --logo-brd: var(--line-wid) solid #323232;\n  --line-clr: #323232;\n  --background-clr: #131313;\n  --header-fnt: "Ingrid darling", Roboto, Helvetica, serif;\n  --heading-fnt: "Inknut antiqua", serif;\n  --text-fnt: "inika", sans-serif;\n  --aboutUs-backClr: #f1f0f0;\n  --animation-time: all 200ms ease-out;\n  scrollbar-color: #575757 #2d2d2d;\n  scrollbar-width: thin;\n  scroll-behavior: smooth;\n}\n\n.x-mark,\n.three-bars {\n  display: none;\n  z-index: 99999;\n}\n\n::marker {\n  content: "";\n}\n\n@media only screen and (max-width: 600px) {\n  header > nav {\n    position: fixed;\n    inset: 0 30% 0 0;\n    background-color: #131313eb;\n    z-index: 9999;\n    padding-top: 30vh;\n    backdrop-filter: blur(20px);\n    transform: translateX(-100%);\n    transition: transform 500ms ease-out;\n  }\n\n  header > nav button {\n    padding-bottom: 2px;\n  }\n\n  .three-bars {\n    display: block;\n  }\n}\n\n@media only screen and (max-width: 400px) {\n  div.dishes {\n    margin: 0 10px !important;\n  }\n\n  section.menu > h2 {\n    margin: 0 10px 20px !important;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  header > nav > ul {\n    display: flex;\n    padding-left: 0;\n  }\n}\n\n.grid {\n  display: grid;\n}\n\nbutton:not(header button) {\n  background-color: transparent;\n  color: white;\n  border: var(--logo-brd);\n  transition: var(--animation-time);\n}\n\nbutton:not(header button):hover {\n  background-color: var(--aboutUs-backClr);\n  color: var(--background-clr);\n  border: 1px solid var(--aboutUs-backClr);\n  cursor: pointer;\n}\n\nh1,\nh2,\nh3,\nbutton {\n  font-family: var(--heading-fnt);\n  font-weight: 400;\n}\n\nh2 {\n  font-size: 2.5rem;\n}\n\np,\nspan {\n  font-family: var(--text-fnt);\n  font-weight: 400;\n}\n\nbody {\n  color: white;\n  background-color: var(--background-clr);\n}\n\nheader {\n  display: flex;\n  height: var(--hd-height);\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--hd-padding);\n  border: var(--logo-brd);\n  margin: var(--side-mrg) var(--side-mrg) 0;\n  position: relative;\n}\n\nheader > nav button {\n  background-color: transparent;\n  color: var(--aboutUs-backClr);\n  border: none;\n  cursor: pointer;\n  font-size: 0.938rem;\n}\n\nheader > svg {\n  color: white;\n  width: 28px;\n}\n\nheader > h1 {\n  height: 100%;\n  padding: 0 20px;\n  border-left: var(--logo-brd);\n  border-right: var(--logo-brd);\n  font-family: var(--header-fnt);\n  font-weight: normal;\n  font-size: 2.5rem;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\nsection {\n  padding: var(--side-mrg);\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  width: 100%;\n  height: 100%;\n  padding: calc(1px + 1rem) calc(6px + 1.9rem);\n  box-sizing: border-box;\n  display: block;\n}\n\n:root.home {\n  section#hero {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--side-mrg);\n  }\n\n  section#hero h1 {\n    font-size: clamp(40px, 5.8vw, 3.807rem);\n    max-width: min(100vw, 500px);\n    line-height: 1.2;\n  }\n\n  section#hero button {\n    font-size: 1.15rem;\n    padding: 0;\n    margin-top: 40px;\n  }\n\n  section#hero > div {\n    margin-left: calc(\n      var(--hd-padding) + 7px\n    ); /* cuz the buttons also have padding */\n  }\n\n  img.hero {\n    height: calc(100vh - var(--hd-height) - 3 * var(--side-mrg));\n  }\n\n  section#about-us {\n    background-color: var(--aboutUs-backClr);\n    color: black;\n    display: flex;\n    flex-direction: column;\n    padding: 100px 0;\n    align-items: center;\n  }\n\n  section#about-us > p {\n    width: min(1100px, calc(100vw - 20px));\n    line-height: 1.5;\n  }\n\n  section#about-us > h2 {\n    width: min(1100px, calc(100vw - 20px));\n    padding-bottom: 10px;\n  }\n\n  section#about-us > h2::after {\n    content: "";\n    display: block;\n    width: 308px;\n    height: 1px;\n    background-color: #c1c1c1;\n    position: relative;\n    top: -10px;\n  }\n\n  section#opening-hours {\n    display: flex;\n    flex-wrap: wrap;\n    min-height: 100vh;\n    padding: var(--side-mrg);\n  }\n\n  section#opening-hours > .right-side {\n    position: relative;\n    max-width: min(450px, 100vw);\n    margin: 0 auto;\n  }\n\n  section#opening-hours > .right-side::after {\n    content: "";\n    display: block;\n    position: absolute;\n    border-top: solid 1.5px var(--line-clr);\n    width: 95%;\n    left: 50%;\n    top: 100%;\n    translate: -50%;\n    background-color: var(--line-clr);\n  }\n\n  section#opening-hours > img {\n    max-height: calc(100vh - 2 * var(--side-mrg));\n    width: auto;\n  }\n\n  section#opening-hours > .right-side {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  section#opening-hours > .right-side > .table {\n    grid-template: repeat(7, 1fr) / repeat(2, 1fr);\n    width: 100%;\n    flex-grow: 0.5;\n    align-items: stretch;\n    padding-top: 5px;\n  }\n\n  section#opening-hours > .right-side > .table > span {\n    display: grid;\n    align-items: center;\n  }\n\n  section#opening-hours > .right-side > .table > :nth-child(2n) {\n    text-align: end;\n    border-left: var(--logo-brd);\n  }\n\n  section#opening-hours > .right-side > h2::after {\n    content: "";\n    display: block;\n    background-color: var(--line-clr);\n    width: calc(100% + 80px);\n    border-top: solid 1.5px var(--line-clr);\n    position: relative;\n    top: 0px;\n    left: 50%;\n    translate: -50%;\n  }\n\n  img.border {\n    border: var(--logo-brd);\n  }\n\n  section#location {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    min-height: 100vh;\n  }\n\n  section#location > .container {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1 1 auto;\n  }\n\n  section#location > .container > img {\n    object-fit: cover;\n    width: 100%;\n    height: 400px;\n    justify-self: end;\n    flex: 1.5 1 0;\n  }\n\n  section#location > .container > div {\n    flex: 1 1 0;\n    align-self: start;\n    padding-left: calc(var(--hd-padding) + var(--side-mrg));\n  }\n}\n\n:root.menu {\n  --margin: calc(var(--hd-padding) + 6px);\n\n  section.menu > h2 {\n    margin: var(--margin) var(--margin) 20px;\n  }\n\n  section.menu > div.dishes {\n    margin: 0 var(--margin);\n  }\n\n  div.dishes {\n    --row: 430px;\n    --column: 270px;\n    display: grid;\n    grid-template: var(--row) / repeat(auto-fit, minmax(var(--column), 1fr));\n    grid-auto-rows: var(--row);\n    gap: 20px;\n  }\n\n  div.dishes > div.dish {\n    --background-clr: #070707;\n    display: grid;\n    grid-template: 2.1fr 1.2fr / 1fr;\n    border: var(--logo-brd);\n    background-color: var(--background-clr);\n    transition: all 180ms ease-out;\n  }\n\n  div.dish:hover {\n    --translate: -10px;\n    --shadow: 10px;\n    transform: scale(1.01);\n    translate: var(--translate) var(--translate);\n    box-shadow: var(--shadow) var(--shadow) 0px black;\n  }\n\n  div.bottom h3 {\n    font-weight: 700;\n    font-size: 1rem;\n  }\n\n  div.bottom :first-child :last-child {\n    font-family: "inika";\n    font-size: 1.5rem;\n    font-weight: 400;\n  }\n\n  div.bottom .name :last-child::before {\n    content: "₹";\n    font-size: 0.9rem;\n    font-weight: 100;\n    color: #a1a1a1;\n  }\n\n  div.dishes > div.dish > img {\n    object-fit: cover;\n    min-height: 0;\n    height: 100%;\n    width: 100%;\n    border-bottom: var(--logo-brd);\n  }\n\n  div.dishes > div.dish > div svg {\n    height: 20px;\n  }\n\n  div.dishes > div.dish > div.bottom > p {\n    overflow-y: clip;\n    height: 6ch;\n  }\n\n  div.bottom {\n    --padding: 10px;\n    padding: var(--padding);\n    display: flex;\n    flex-direction: column;\n  }\n\n  div.bottom div:first-child {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 3px;\n  }\n\n  div.dishes div.button {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 5px;\n    margin-top: auto;\n  }\n\n  div.dishes div.button > button {\n    width: 70px;\n    height: 32px;\n    font-size: 0.83rem;\n  }\n\n  div.bottom p {\n    font-size: 0.75rem;\n    color: #cdcdcd;\n    line-heihgt: 1.23;\n    position: relative;\n  }\n}\n\n@media only screen and (max-width: 1050px) {\n  #hero {\n    flex-direction: column-reverse !important;\n    align-items: flex-start !important;\n    gap: 30px;\n    padding-bottom: 50px !important;\n  }\n\n  #hero :first-child {\n    margin: 0 0 !important;\n  }\n\n  img {\n    height: auto !important;\n  }\n\n  #location > .container > .grid {\n    padding-left: 0px !important;\n  }\n}\n`,""]);const E=w},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},417:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{"use strict";n.exports=function(n){return n[1]}},72:n=>{"use strict";var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],l=r.base?d[0]+r.base:d[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),l=0;l<i.length;l++){var c=t(i[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},659:n=>{"use strict";var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},982:()=>{const n=document.querySelector("header>nav"),e=document.querySelector(".three-bars"),t=document.querySelector(".x-mark");e.addEventListener("click",(()=>{e.style.display="none",t.style.display="block",n.style.transform="translateX(0%)"})),t.addEventListener("click",(()=>{e.style.display="block",t.style.display="none",n.style.transform="translateX(-100%)"}))},915:(n,e,t)=>{"use strict";n.exports=t.p+"IngridDarling-Regular.woff"},409:(n,e,t)=>{"use strict";n.exports=t.p+"bold-inika.woff2"},666:(n,e,t)=>{"use strict";n.exports=t.p+"regular-inika.woff2"},981:(n,e,t)=>{"use strict";n.exports=t.p+"bold.woff"},255:(n,e,t)=>{"use strict";n.exports=t.p+"extrabold.woff"},238:(n,e,t)=>{"use strict";n.exports=t.p+"light.woff"},161:(n,e,t)=>{"use strict";n.exports=t.p+"medium.woff"},673:(n,e,t)=>{"use strict";n.exports=t.p+"normal.woff"},398:(n,e,t)=>{"use strict";n.exports=t.p+"regular.woff"},368:(n,e,t)=>{"use strict";n.exports=t.p+"semi-bold.woff"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{"use strict";var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),d=t.n(s),l=t(540),c=t.n(l),p=t(113),u=t.n(p),h=t(662),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),e()(h.A,f),h.A&&h.A.locals&&h.A.locals;var m=t(159),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=c(),e()(m.A,g),m.A&&m.A.locals&&m.A.locals,t.p,t.p,t.p;const v=document.querySelector("body"),b=document.querySelector(":root"),w=n=>b.setAttribute("class",n);function y(){document.querySelector("div#content").remove(),v.appendChild(x("div","","content"))}function x(n,e,t,r,o,i){const a=document.createElement(n);return e&&a.setAttribute("class",e),t&&a.setAttribute("id",t),r&&(a.textContent=r),o&&(a.src=o),i&&(a.alt=i),a.appendChildren=function(){for(let n=0;n<arguments.length;n++)this.appendChild(arguments[n])},a}const k=[function(n){const e=x("div"),t=x("img","hero","","","./hero-image.jpg","Delicious kebab");e.appendChild(x("h1","","","Best food you will find in Dehradun"));const r=x("button","",""),o=x("a","","","Learn More");o.href="#about-us",r.appendChild(o),e.appendChild(r),n.appendChild(e),n.appendChild(t)},function(n){n.appendChild(x("h2","","","About us")),n.appendChild(x("p","","","\n        At Chilliz, we believe that every meal should be a delightful journey\n        of flavors, crafted with passion and served with warmth. Nestled in\n        the heart of Dehradun, our restaurant is a culinary haven where\n        exquisite cuisine meets inviting ambiance. Our dedicated team of chefs\n        brings together a fusion of traditional recipes and innovative\n        techniques, sourcing the finest ingredients to create dishes that\n        tantalize the palate. Whether you're joining us for a casual brunch, a\n        romantic dinner, or a celebration with loved ones, we strive to\n        provide an unforgettable dining experience. At chilliz, we're not just\n        about serving food; we're about creating memories and fostering\n        connections. Welcome to our table; let us enchant you with our\n        culinary delights\n      "))},function(n){const e=[["Sunday","8am-9pm"],["Monday","8am-9pm"],["Tuesday","8am-9pm"],["Wednesday","8am-9pm"],["Thursday","8am-9pm"],["Friday","8am-9pm"],["Saturday","8am-9pm"]],t=x("div","right-side");t.appendChild(x("h2","","","Opening hours"));const r=x("div","grid table");for(let n of e)for(let e of n)r.appendChild(x("span","","",e));t.appendChild(r),n.appendChild(x("img","border","","","restaurant-indoors.jpg","Inside view of the restaurant")),n.appendChild(t)},function(n){const e=x("div","container grid"),t=x("div","grid");t.appendChild(x("h2","","","Location")),t.appendChild(x("p","","","Uttrakhand, Dehradun, 31 Street, chilliz")),t.appendChild(x("p","","","Phone: 78945612354682154")),t.appendChild(x("p","","","Email: totallyFake@mail.com")),e.appendChild(t),e.appendChild(x("img","border","","","./map.jpeg","map")),n.appendChild(e)}];function C(){y(),w("home");const n=document.querySelector("div#content");[x("section","","hero"),x("section","","about-us"),x("section","","opening-hours"),x("section","","location")].forEach(((e,t)=>{k[t](e),n.appendChild(e)}))}function A(n,e,t,r){const o=x("img","","","",`./${n}`,"Food image"),i=x("h3","","",e),a=x("div","","",r),s=x("p","","",t),d=x("div","dish container"),l=x("div","bottom"),c=x("button","","","buy"),p=function(){const n="http://www.w3.org/2000/svg",e=document.createElementNS(n,"svg"),t=document.createElementNS(n,"path");return e.setAttribute("xmlns",n),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","currentColor"),e.setAttribute("class","w-6 h-6"),t.setAttribute("d","M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"),e.appendChild(t),e}(),u=x("div","button"),h=x("div","name price");return u.appendChildren(c,p),h.appendChildren(i,a),l.appendChildren(h,s,u),d.appendChildren(o,l),d}t.p,t.p,t.p,t.p,t.p,t.p;const S=[A("butter-chicken.jpg","Butter Chicken","A rich and creamy chicken dish cooked in a tomato-based gravy with butter and cream, often flavored with various spices.","500"),A("palak-paneer.jpg","Palak Paneer","A vegetarian dish made from spinach (palak) and paneer (Indian cottage cheese). It's typically cooked with garlic, garam masala, and other spices to create a flavorful gravy.","800"),A("masala-dosa.jpg","Masala Dosa","A South Indian specialty, masala dosa is a fermented crepe made from rice batter and black lentils, filled with a spiced potato mixture and served with coconut chutney and sambar (a lentil-based stew).","390"),A("panni-puri.jpg","Pani Puri","A popular street food snack consisting of hollow puri (crispy round shells) filled with a mixture of flavored water, tamarind chutney, chaat masala, potato, onion, and chickpeas. It offers a burst of sweet, sour, tangy, and spicy flavors in every bite.","200"),A("malai-kofta.jpg","Malai Kofta","A rich and indulgent vegetarian dish made from deep-fried dumplings (koftas) made of paneer, potatoes, nuts, and spices, served in a creamy tomato-based gravy flavored with cream, butter, and various spices. It's a favorite at many Indian restaurants for its luxurious taste and texture.","790")];function I(){y(),w("menu");const n=document.getElementById("content"),e=x("section","menu"),t=x("h2","","","Our Menu"),r=x("div","dishes");r.appendChildren(...S),e.appendChildren(t,r),n.appendChild(e)}t(982),document.querySelectorAll("header>nav>ul button").forEach(((n,e)=>{let t=null;switch(e){case 0:t=C;break;case 1:t=I}n.addEventListener("click",t)})),C()})()})();