/*! For license information please see 271.c0f01c84.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcoffe_shop_react=self.webpackChunkcoffe_shop_react||[]).push([[271],{271:function(t,e,r){r.r(e);var n=r(885),o=r(791),i=r(270),a=r(739),c=r(87),s=r(121),u=r(287),l=r(841),h=r(184);e.default=function(){var t=(0,o.useState)([]),e=(0,n.Z)(t,2),r=e[0],f=e[1],d=(0,o.useState)("loading"),v=(0,n.Z)(d,2),p=v[0],y=v[1],m=(0,a.UO)().userid,g=(0,s.i)().request;(0,o.useEffect)((function(){g("http://localhost:3001/bests").then((function(t){return f(t)})).then((function(){return y("loaded")})).catch((function(t){console.log(t),y("error")}))}),[]);var x="loading"===p?(0,h.jsx)(u.Z,{}):null,j="error"===p?(0,h.jsx)("div",{className:"notExist",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"notExist-inner",children:[(0,h.jsx)("div",{className:"section-header",children:(0,h.jsx)("div",{className:"section-title",children:(0,h.jsx)("h2",{children:"This product does not exist"})})}),(0,h.jsx)("div",{className:"notExist-text",children:(0,h.jsx)(c.rU,{to:"/",children:"Back to home"})})]})})}):null,w="loaded"===p?function(t){if("loaded"===p)return t.filter((function(t){var e=t.id;if(e===+m)return e})).map((function(t,e){var r=t.title,n=t.price,o=t.biggerImg,i=t.country,a=t.description;return console.log("2"),(0,h.jsxs)("div",{className:"about-inner",children:[(0,h.jsx)("div",{className:"about-photo",children:(0,h.jsx)("img",{src:o,alt:"About"})}),(0,h.jsxs)("div",{className:"about-text__inner",children:[(0,h.jsxs)("div",{className:"section-header",children:[(0,h.jsx)("div",{className:"section-title",children:(0,h.jsx)("h2",{children:r})}),(0,h.jsx)("div",{className:"section-logo",children:(0,h.jsx)(l.Z,{isBlack:!0})})]}),(0,h.jsxs)("div",{className:"about-text left-text",children:[(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Country: "}),i]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Description: "}),a]}),(0,h.jsxs)("p",{children:[(0,h.jsx)("strong",{children:"Price: "}),(0,h.jsxs)("span",{className:"about-price",children:[n,"$"]})]})]})]})]},e)}));console.log("error"),y("error")}(r):null;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.q,{children:[(0,h.jsx)("meta",{name:"description",content:"Coffe good information"}),(0,h.jsx)("title",{children:"Best good coffee"})]}),(0,h.jsx)("main",{className:"intro default-intro",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"intro-inner",children:(0,h.jsx)("div",{className:"intro-title",children:(0,h.jsx)("h1",{children:"Our Coffee"})})})})}),(0,h.jsx)("section",{className:"about",children:(0,h.jsxs)("div",{className:"container",children:[x,j,w]})})]})}},121:function(t,e,r){r.d(e,{i:function(){return a}});var n=r(2);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(G){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=h;var d={};function v(){}function p(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(O([])));x&&x!==e&&r.call(x,c)&&(m=x);var j=y.prototype=v.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,c,s){var u=f(t[i],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function O(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=y,i(j,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:p,configurable:!0}),p.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},w(b.prototype),l(b.prototype,s,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(j),l(j,u,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}var a=function(){var t=function(){var t,e=(t=o().mark((function t(e){var r,n,i,a,c,s=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},t.prev=3,t.next=6,fetch(e,{method:r,body:n,headers:i});case 6:if((a=t.sent).ok){t.next=9;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));case 9:return t.next=11,a.json();case 11:return c=t.sent,t.abrupt("return",c);case 15:throw t.prev=15,t.t0=t.catch(3),t.t0;case 18:case"end":return t.stop()}}),t,null,[[3,15]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,s,"next",t)}function s(t){i(a,n,o,c,s,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();return{request:t}}}}]);
//# sourceMappingURL=271.c0f01c84.chunk.js.map