// ==UserScript==
// @name         clans-on-s0urce
// @namespace    http://tampermonkey.net/
// @version      2024-04-13 - 3
// @description  Create or join a clan on s0urce.io!
// @author       Xen0o2
// @match        https://s0urce.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=s0urce.io
// @grant        none
// @downloadURL https://raw.githubusercontent.com/Xen0o2/clans-on-s0urce/main/clans-on-s0urce.user.js
// @updateURL   https://raw.githubusercontent.com/Xen0o2/clans-on-s0urce/main/clans-on-s0urce.user.js
// ==/UserScript==

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).axios=t()}(this,(function(){"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?e(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(){r=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function h(){}function d(){}function p(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(A([])));m&&m!==t&&n.call(m,i)&&(v=m);var g=p.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(o,i,a,s){var u=f(e[o],e,i);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(l).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,s)}))}s(u.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function A(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,u(g,"constructor",p),u(p,"constructor",d),d.displayName=u(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,s,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(g),u(g,s,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){return l(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||d(e,t)||v()}function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||h(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){if(Array.isArray(e))return e}function h(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function d(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function y(e,t){return function(){return e.apply(t,arguments)}}var m,g=Object.prototype.toString,b=Object.getPrototypeOf,w=(m=Object.create(null),function(e){var t=g.call(e);return m[t]||(m[t]=t.slice(8,-1).toLowerCase())}),E=function(e){return e=e.toLowerCase(),function(t){return w(t)===e}},O=function(e){return function(t){return n(t)===e}},S=Array.isArray,R=O("undefined");var A=E("ArrayBuffer");var j=O("string"),x=O("function"),T=O("number"),P=function(e){return null!==e&&"object"===n(e)},N=function(e){if("object"!==w(e))return!1;var t=b(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},k=E("Date"),_=E("File"),L=E("Blob"),C=E("FileList"),F=E("URLSearchParams");function U(e,t){var r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.allOwnKeys,s=void 0!==a&&a;if(null!=e)if("object"!==n(e)&&(e=[e]),S(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{var u,c=s?Object.getOwnPropertyNames(e):Object.keys(e),f=c.length;for(r=0;r<f;r++)u=c[r],t.call(null,e[u],u,e)}}function D(e,t){t=t.toLowerCase();for(var r,n=Object.keys(e),o=n.length;o-- >0;)if(t===(r=n[o]).toLowerCase())return r;return null}var B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,I=function(e){return!R(e)&&e!==B};var q,z=(q="undefined"!=typeof Uint8Array&&b(Uint8Array),function(e){return q&&e instanceof q}),M=E("HTMLFormElement"),H=function(e){var t=Object.prototype.hasOwnProperty;return function(e,r){return t.call(e,r)}}(),J=E("RegExp"),G=function(e,t){var r=Object.getOwnPropertyDescriptors(e),n={};U(r,(function(r,o){var i;!1!==(i=t(r,o,e))&&(n[o]=i||r)})),Object.defineProperties(e,n)},W="abcdefghijklmnopqrstuvwxyz",K="0123456789",V={DIGIT:K,ALPHA:W,ALPHA_DIGIT:W+W.toUpperCase()+K};var X=E("AsyncFunction"),$={isArray:S,isArrayBuffer:A,isBuffer:function(e){return null!==e&&!R(e)&&null!==e.constructor&&!R(e.constructor)&&x(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t;return e&&("function"==typeof FormData&&e instanceof FormData||x(e.append)&&("formdata"===(t=w(e))||"object"===t&&x(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&A(e.buffer)},isString:j,isNumber:T,isBoolean:function(e){return!0===e||!1===e},isObject:P,isPlainObject:N,isUndefined:R,isDate:k,isFile:_,isBlob:L,isRegExp:J,isFunction:x,isStream:function(e){return P(e)&&x(e.pipe)},isURLSearchParams:F,isTypedArray:z,isFileList:C,forEach:U,merge:function e(){for(var t=I(this)&&this||{},r=t.caseless,n={},o=function(t,o){var i=r&&D(n,o)||o;N(n[i])&&N(t)?n[i]=e(n[i],t):N(t)?n[i]=e({},t):S(t)?n[i]=t.slice():n[i]=t},i=0,a=arguments.length;i<a;i++)arguments[i]&&U(arguments[i],o);return n},extend:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.allOwnKeys;return U(t,(function(t,n){r&&x(t)?e[n]=y(t,r):e[n]=t}),{allOwnKeys:o}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r,n){var o,i,a,s={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)a=o[i],n&&!n(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==r&&b(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:w,kindOfTest:E,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;if(S(e))return e;var t=e.length;if(!T(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},forEachEntry:function(e,t){for(var r,n=(e&&e[Symbol.iterator]).call(e);(r=n.next())&&!r.done;){var o=r.value;t.call(e,o[0],o[1])}},matchAll:function(e,t){for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:M,hasOwnProperty:H,hasOwnProp:H,reduceDescriptors:G,freezeMethods:function(e){G(e,(function(t,r){if(x(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;var n=e[r];x(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:function(e,t){var r={},n=function(e){e.forEach((function(e){r[e]=!0}))};return S(e)?n(e):n(String(e).split(t)),r},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:D,global:B,isContextDefined:I,ALPHABET:V,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V.ALPHA_DIGIT,r="",n=t.length;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&x(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=new Array(10);return function e(r,n){if(P(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[n]=r;var o=S(r)?[]:{};return U(r,(function(t,r){var i=e(t,n+1);!R(i)&&(o[r]=i)})),t[n]=void 0,o}}return r}(e,0)},isAsyncFn:X,isThenable:function(e){return e&&(P(e)||x(e))&&x(e.then)&&x(e.catch)}};function Q(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}$.inherits(Q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:$.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Y=Q.prototype,Z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){Z[e]={value:e}})),Object.defineProperties(Q,Z),Object.defineProperty(Y,"isAxiosError",{value:!0}),Q.from=function(e,t,r,n,o,i){var a=Object.create(Y);return $.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),Q.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};function ee(e){return $.isPlainObject(e)||$.isArray(e)}function te(e){return $.endsWith(e,"[]")?e.slice(0,-2):e}function re(e,t,r){return e?e.concat(t).map((function(e,t){return e=te(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}var ne=$.toFlatObject($,{},null,(function(e){return/^is[A-Z]/.test(e)}));function oe(e,t,r){if(!$.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;var o=(r=$.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!$.isUndefined(t[e])}))).metaTokens,i=r.visitor||f,a=r.dots,s=r.indexes,u=(r.Blob||"undefined"!=typeof Blob&&Blob)&&$.isSpecCompliantForm(t);if(!$.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if($.isDate(e))return e.toISOString();if(!u&&$.isBlob(e))throw new Q("Blob is not supported. Use a Buffer instead.");return $.isArrayBuffer(e)||$.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function f(e,r,i){var u=e;if(e&&!i&&"object"===n(e))if($.endsWith(r,"{}"))r=o?r:r.slice(0,-2),e=JSON.stringify(e);else if($.isArray(e)&&function(e){return $.isArray(e)&&!e.some(ee)}(e)||($.isFileList(e)||$.endsWith(r,"[]"))&&(u=$.toArray(e)))return r=te(r),u.forEach((function(e,n){!$.isUndefined(e)&&null!==e&&t.append(!0===s?re([r],n,a):null===s?r:r+"[]",c(e))})),!1;return!!ee(e)||(t.append(re(i,r,a),c(e)),!1)}var l=[],h=Object.assign(ne,{defaultVisitor:f,convertValue:c,isVisitable:ee});if(!$.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!$.isUndefined(r)){if(-1!==l.indexOf(r))throw Error("Circular reference detected in "+n.join("."));l.push(r),$.forEach(r,(function(r,o){!0===(!($.isUndefined(r)||null===r)&&i.call(t,r,$.isString(o)?o.trim():o,n,h))&&e(r,n?n.concat(o):[o])})),l.pop()}}(e),t}function ie(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ae(e,t){this._pairs=[],e&&oe(e,this,t)}var se=ae.prototype;function ue(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ce(e,t,r){if(!t)return e;var n,o=r&&r.encode||ue,i=r&&r.serialize;if(n=i?i(t,r):$.isURLSearchParams(t)?t.toString():new ae(t,r).toString(o)){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}se.append=function(e,t){this._pairs.push([e,t])},se.toString=function(e){var t=e?function(t){return e.call(this,t,ie)}:ie;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var fe,le=function(){function e(){i(this,e),this.handlers=[]}return s(e,[{key:"use",value:function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){$.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}(),he={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},de={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ae,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},pe="undefined"!=typeof window&&"undefined"!=typeof document,ve=(fe="undefined"!=typeof navigator&&navigator.product,pe&&["ReactNative","NativeScript","NS"].indexOf(fe)<0),ye="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,me=t(t({},Object.freeze({__proto__:null,hasBrowserEnv:pe,hasStandardBrowserWebWorkerEnv:ye,hasStandardBrowserEnv:ve})),de);function ge(e){function t(e,r,n,o){var i=e[o++];if("__proto__"===i)return!0;var a=Number.isFinite(+i),s=o>=e.length;return i=!i&&$.isArray(n)?n.length:i,s?($.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r,!a):(n[i]&&$.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&$.isArray(n[i])&&(n[i]=function(e){var t,r,n={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)n[r=o[t]]=e[r];return n}(n[i])),!a)}if($.isFormData(e)&&$.isFunction(e.entries)){var r={};return $.forEachEntry(e,(function(e,n){t(function(e){return $.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),n,r,0)})),r}return null}var be={transitional:he,adapter:["xhr","http"],transformRequest:[function(e,t){var r,n=t.getContentType()||"",o=n.indexOf("application/json")>-1,i=$.isObject(e);if(i&&$.isHTMLForm(e)&&(e=new FormData(e)),$.isFormData(e))return o?JSON.stringify(ge(e)):e;if($.isArrayBuffer(e)||$.isBuffer(e)||$.isStream(e)||$.isFile(e)||$.isBlob(e))return e;if($.isArrayBufferView(e))return e.buffer;if($.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return oe(e,new me.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return me.isNode&&$.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((r=$.isFileList(e))||n.indexOf("multipart/form-data")>-1){var a=this.env&&this.env.FormData;return oe(r?{"files[]":e}:e,a&&new a,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,r){if($.isString(e))try{return(t||JSON.parse)(e),$.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||be.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&$.isString(e)&&(r&&!this.responseType||n)){var o=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw Q.from(e,Q.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};$.forEach(["delete","get","head","post","put","patch"],(function(e){be.headers[e]={}}));var we=be,Ee=$.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Oe=Symbol("internals");function Se(e){return e&&String(e).trim().toLowerCase()}function Re(e){return!1===e||null==e?e:$.isArray(e)?e.map(Re):String(e)}function Ae(e,t,r,n,o){return $.isFunction(n)?n.call(this,t,r):(o&&(t=r),$.isString(t)?$.isString(n)?-1!==t.indexOf(n):$.isRegExp(n)?n.test(t):void 0:void 0)}var je=function(e,t){function r(e){i(this,r),e&&this.set(e)}return s(r,[{key:"set",value:function(e,t,r){var n=this;function o(e,t,r){var o=Se(t);if(!o)throw new Error("header name must be a non-empty string");var i=$.findKey(n,o);(!i||void 0===n[i]||!0===r||void 0===r&&!1!==n[i])&&(n[i||t]=Re(e))}var i,a,s,u,c,f=function(e,t){return $.forEach(e,(function(e,r){return o(e,r,t)}))};return $.isPlainObject(e)||e instanceof this.constructor?f(e,t):$.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?f((c={},(i=e)&&i.split("\n").forEach((function(e){u=e.indexOf(":"),a=e.substring(0,u).trim().toLowerCase(),s=e.substring(u+1).trim(),!a||c[a]&&Ee[a]||("set-cookie"===a?c[a]?c[a].push(s):c[a]=[s]:c[a]=c[a]?c[a]+", "+s:s)})),c),t):null!=e&&o(t,e,r),this}},{key:"get",value:function(e,t){if(e=Se(e)){var r=$.findKey(this,e);if(r){var n=this[r];if(!t)return n;if(!0===t)return function(e){for(var t,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=n.exec(e);)r[t[1]]=t[2];return r}(n);if($.isFunction(t))return t.call(this,n,r);if($.isRegExp(t))return t.exec(n);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=Se(e)){var r=$.findKey(this,e);return!(!r||void 0===this[r]||t&&!Ae(0,this[r],r,t))}return!1}},{key:"delete",value:function(e,t){var r=this,n=!1;function o(e){if(e=Se(e)){var o=$.findKey(r,e);!o||t&&!Ae(0,r[o],o,t)||(delete r[o],n=!0)}}return $.isArray(e)?e.forEach(o):o(e),n}},{key:"clear",value:function(e){for(var t=Object.keys(this),r=t.length,n=!1;r--;){var o=t[r];e&&!Ae(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}},{key:"normalize",value:function(e){var t=this,r={};return $.forEach(this,(function(n,o){var i=$.findKey(r,o);if(i)return t[i]=Re(n),void delete t[o];var a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r}))}(o):String(o).trim();a!==o&&delete t[o],t[a]=Re(n),r[a]=!0})),this}},{key:"concat",value:function(){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=this.constructor).concat.apply(e,[this].concat(r))}},{key:"toJSON",value:function(e){var t=Object.create(null);return $.forEach(this,(function(r,n){null!=r&&!1!==r&&(t[n]=e&&$.isArray(r)?r.join(", "):r)})),t}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=c(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=new this(e),r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return n.forEach((function(e){return t.set(e)})),t}},{key:"accessor",value:function(e){var t=(this[Oe]=this[Oe]={accessors:{}}).accessors,r=this.prototype;function n(e){var n=Se(e);t[n]||(!function(e,t){var r=$.toCamelCase(" "+t);["get","set","has"].forEach((function(n){Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return $.isArray(e)?e.forEach(n):n(e),this}}]),r}();je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),$.reduceDescriptors(je.prototype,(function(e,t){var r=e.value,n=t[0].toUpperCase()+t.slice(1);return{get:function(){return r},set:function(e){this[n]=e}}})),$.freezeMethods(je);var xe=je;function Te(e,t){var r=this||we,n=t||r,o=xe.from(n.headers),i=n.data;return $.forEach(e,(function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Pe(e){return!(!e||!e.__CANCEL__)}function Ne(e,t,r){Q.call(this,null==e?"canceled":e,Q.ERR_CANCELED,t,r),this.name="CanceledError"}$.inherits(Ne,Q,{__CANCEL__:!0});var ke=me.hasStandardBrowserEnv?{write:function(e,t,r,n,o,i){var a=[e+"="+encodeURIComponent(t)];$.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),$.isString(n)&&a.push("path="+n),$.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function _e(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Le=me.hasStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=$.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0};function Ce(e,t){var r=0,n=function(e,t){e=e||10;var r,n=new Array(e),o=new Array(e),i=0,a=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=o[a];r||(r=u),n[i]=s,o[i]=u;for(var f=a,l=0;f!==i;)l+=n[f++],f%=e;if((i=(i+1)%e)===a&&(a=(a+1)%e),!(u-r<t)){var h=c&&u-c;return h?Math.round(1e3*l/h):void 0}}}(50,250);return function(o){var i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-r,u=n(s);r=i;var c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&i<=a?(a-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}var Fe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){var n,o,i,a=e.data,s=xe.from(e.headers).normalize(),u=e.responseType,c=e.withXSRFToken;function p(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}if($.isFormData(a))if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if(!1!==(o=s.getContentType())){var y=o?o.split(";").map((function(e){return e.trim()})).filter(Boolean):[],m=l(i=y)||h(i)||d(i)||v(),g=m[0],b=m.slice(1);s.setContentType([g||"multipart/form-data"].concat(f(b)).join("; "))}var w=new XMLHttpRequest;if(e.auth){var E=e.auth.username||"",O=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(E+":"+O))}var S=_e(e.baseURL,e.url);function R(){if(w){var n=xe.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new Q("Request failed with status code "+r.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}((function(e){t(e),p()}),(function(e){r(e),p()}),{data:u&&"text"!==u&&"json"!==u?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:n,config:e,request:w}),w=null}}if(w.open(e.method.toUpperCase(),ce(S,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=R:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(R)},w.onabort=function(){w&&(r(new Q("Request aborted",Q.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new Q("Network Error",Q.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||he;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new Q(t,n.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,w)),w=null},me.hasStandardBrowserEnv&&(c&&$.isFunction(c)&&(c=c(e)),c||!1!==c&&Le(S))){var A=e.xsrfHeaderName&&e.xsrfCookieName&&ke.read(e.xsrfCookieName);A&&s.set(e.xsrfHeaderName,A)}void 0===a&&s.setContentType(null),"setRequestHeader"in w&&$.forEach(s.toJSON(),(function(e,t){w.setRequestHeader(t,e)})),$.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),u&&"json"!==u&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",Ce(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(n=function(t){w&&(r(!t||t.type?new Ne(null,e,w):t),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));var j,x=(j=/^([-+\w]{1,25})(:?\/\/|:)/.exec(S))&&j[1]||"";x&&-1===me.protocols.indexOf(x)?r(new Q("Unsupported protocol "+x+":",Q.ERR_BAD_REQUEST,e)):w.send(a||null)}))}};$.forEach(Fe,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Ue=function(e){return"- ".concat(e)},De=function(e){return $.isFunction(e)||null===e||!1===e},Be=function(e){for(var t,r,n=(e=$.isArray(e)?e:[e]).length,o={},i=0;i<n;i++){var a=void 0;if(r=t=e[i],!De(t)&&void 0===(r=Fe[(a=String(t)).toLowerCase()]))throw new Q("Unknown adapter '".concat(a,"'"));if(r)break;o[a||"#"+i]=r}if(!r){var s=Object.entries(o).map((function(e){var t=c(e,2),r=t[0],n=t[1];return"adapter ".concat(r," ")+(!1===n?"is not supported by the environment":"is not available in the build")}));throw new Q("There is no suitable adapter to dispatch the request "+(n?s.length>1?"since :\n"+s.map(Ue).join("\n"):" "+Ue(s[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ne(null,e)}function qe(e){return Ie(e),e.headers=xe.from(e.headers),e.data=Te.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Be(e.adapter||we.adapter)(e).then((function(t){return Ie(e),t.data=Te.call(e,e.transformResponse,t),t.headers=xe.from(t.headers),t}),(function(t){return Pe(t)||(Ie(e),t&&t.response&&(t.response.data=Te.call(e,e.transformResponse,t.response),t.response.headers=xe.from(t.response.headers))),Promise.reject(t)}))}var ze=function(e){return e instanceof xe?e.toJSON():e};function Me(e,t){t=t||{};var r={};function n(e,t,r){return $.isPlainObject(e)&&$.isPlainObject(t)?$.merge.call({caseless:r},e,t):$.isPlainObject(t)?$.merge({},t):$.isArray(t)?t.slice():t}function o(e,t,r){return $.isUndefined(t)?$.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function i(e,t){if(!$.isUndefined(t))return n(void 0,t)}function a(e,t){return $.isUndefined(t)?$.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function s(r,o,i){return i in t?n(r,o):i in e?n(void 0,r):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:function(e,t){return o(ze(e),ze(t),!0)}};return $.forEach(Object.keys(Object.assign({},e,t)),(function(n){var i=u[n]||o,a=i(e[n],t[n],n);$.isUndefined(a)&&i!==s||(r[n]=a)})),r}var He="1.6.7",Je={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Je[e]=function(r){return n(r)===e||"a"+(t<1?"n ":" ")+e}}));var Ge={};Je.transitional=function(e,t,r){function n(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,o,i){if(!1===e)throw new Q(n(o," has been removed"+(t?" in "+t:"")),Q.ERR_DEPRECATED);return t&&!Ge[o]&&(Ge[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var We={assertOptions:function(e,t,r){if("object"!==n(e))throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(e),i=o.length;i-- >0;){var a=o[i],s=t[a];if(s){var u=e[a],c=void 0===u||s(u,a,e);if(!0!==c)throw new Q("option "+a+" must be "+c,Q.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Q("Unknown option "+a,Q.ERR_BAD_OPTION)}},validators:Je},Ke=We.validators,Ve=function(){function e(t){i(this,e),this.defaults=t,this.interceptors={request:new le,response:new le}}var t,n;return s(e,[{key:"request",value:(t=r().mark((function e(t,n){var o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request(t,n);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),e.t0 instanceof Error&&(Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error,i=o.stack?o.stack.replace(/^.+\n/,""):"",e.t0.stack?i&&!String(e.t0.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(e.t0.stack+="\n"+i):e.t0.stack=i),e.t0;case 10:case"end":return e.stop()}}),e,this,[[0,6]])})),n=function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function s(e){o(a,n,i,s,u,"next",e)}function u(e){o(a,n,i,s,u,"throw",e)}s(void 0)}))},function(e,t){return n.apply(this,arguments)})},{key:"_request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var r=t=Me(this.defaults,t),n=r.transitional,o=r.paramsSerializer,i=r.headers;void 0!==n&&We.assertOptions(n,{silentJSONParsing:Ke.transitional(Ke.boolean),forcedJSONParsing:Ke.transitional(Ke.boolean),clarifyTimeoutError:Ke.transitional(Ke.boolean)},!1),null!=o&&($.isFunction(o)?t.paramsSerializer={serialize:o}:We.assertOptions(o,{encode:Ke.function,serialize:Ke.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();var a=i&&$.merge(i.common,i[t.method]);i&&$.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete i[e]})),t.headers=xe.concat(a,i);var s=[],u=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(u=u&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));var c,f=[];this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)}));var l,h=0;if(!u){var d=[qe.bind(this),void 0];for(d.unshift.apply(d,s),d.push.apply(d,f),l=d.length,c=Promise.resolve(t);h<l;)c=c.then(d[h++],d[h++]);return c}l=s.length;var p=t;for(h=0;h<l;){var v=s[h++],y=s[h++];try{p=v(p)}catch(e){y.call(this,e);break}}try{c=qe.call(this,p)}catch(e){return Promise.reject(e)}for(h=0,l=f.length;h<l;)c=c.then(f[h++],f[h++]);return c}},{key:"getUri",value:function(e){return ce(_e((e=Me(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),e}();$.forEach(["delete","get","head","options"],(function(e){Ve.prototype[e]=function(t,r){return this.request(Me(r||{},{method:e,url:t,data:(r||{}).data}))}})),$.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Me(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Ve.prototype[e]=t(),Ve.prototype[e+"Form"]=t(!0)}));var Xe=Ve,$e=function(){function e(t){if(i(this,e),"function"!=typeof t)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var n=this;this.promise.then((function(e){if(n._listeners){for(var t=n._listeners.length;t-- >0;)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},t((function(e,t,o){n.reason||(n.reason=new Ne(e,t,o),r(n.reason))}))}return s(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}();var Qe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qe).forEach((function(e){var t=c(e,2),r=t[0],n=t[1];Qe[n]=r}));var Ye=Qe;var Ze=function e(t){var r=new Xe(t),n=y(Xe.prototype.request,r);return $.extend(n,Xe.prototype,r,{allOwnKeys:!0}),$.extend(n,r,null,{allOwnKeys:!0}),n.create=function(r){return e(Me(t,r))},n}(we);return Ze.Axios=Xe,Ze.CanceledError=Ne,Ze.CancelToken=$e,Ze.isCancel=Pe,Ze.VERSION=He,Ze.toFormData=oe,Ze.AxiosError=Q,Ze.Cancel=Ze.CanceledError,Ze.all=function(e){return Promise.all(e)},Ze.spread=function(e){return function(t){return e.apply(null,t)}},Ze.isAxiosError=function(e){return $.isObject(e)&&!0===e.isAxiosError},Ze.mergeConfig=Me,Ze.AxiosHeaders=xe,Ze.formToJSON=function(e){return ge($.isHTMLForm(e)?new FormData(e):e)},Ze.getAdapter=Be,Ze.HttpStatusCode=Ye,Ze.default=Ze,Ze}));

class Component {
	prepend;
	element;
	constructor(type, options) {
		this.prepend = options.prepend;
		const element = document.createElement(type);
		if (options.classList)
			element.classList.add(...options.classList);
		
		for (let attribute of Object.keys(options.style || {}))
			element.style[attribute] = options.style[attribute];

		if (options.id)
			element.id = options.id;
		if (options.src)
			element.src = options.src;
		if (options.type)
			element.type = options.type;
		if (options.innerText)
			element.innerText = options.innerText
		if (options.innerHTML)
			element.innerHTML = options.innerHTML;
		if (options.placeholder)
			element.placeholder = options.placeholder;
		if (options.onclick)
			element.onclick = options.onclick;
		if (options.onmouseenter)
			element.onmouseenter = options.onmouseenter;
		if (options.onmouseleave)
			element.onmouseleave = options.onmouseleave;

		options.children?.forEach(child => {
			child && (child.prepend ? element.prepend(child.element) : element.append(child.element))
		})
		this.element = element;
		return this;
	}
}

const api = axios.create({
	// baseURL: `http://localhost:3000`
	baseURL: `https://api-clans.duckdns.org`
})


const images = {
	icon: "https://www.svgrepo.com/show/346430/sword-fill.svg"
};

(function() {
	'use strict';
	
	const player = {
		id: null,
		name: document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim(),
		clan: null,
		user: null
	};

	const dragElement = (element) => {
		let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

		element.querySelector("#to-drag").onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}
		function elementDrag(e){
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			element.style.top = (element.offsetTop - pos2) + "px";
			element.style.left = (element.offsetLeft - pos1) + "px";
		}
		
		function closeDragElement(){
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}


    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };
	const prettierLoadFails = (message, code) => {
        alert(message || `Clans-on-S0urce loading failed, please contact Xen0o2 on Discord${code ? ` (error code: ${code})` : ``}`);
    };
	const sendLog = async (HTMLContent) => {
        const wrapper = document.querySelector("#wrapper.svelte-182ewru");
        if (!wrapper)
            return;

		const message = new Component("div", {
			innerHTML: HTMLContent,
			classList: ["message"],
			style: { paddingBlock: "5px" }
		})
		const separator = new Component("div", {
			classList: ["line", "svelte-182ewru"],
			style: { marginBlock: "10px" }
		})
        
        wrapper.append(message.element);
        wrapper.append(separator.element);
        await sleep(100);
        wrapper.scrollTop = wrapper.scrollHeight;
    }

	const createDesktopIcon = () => {
		const desktop = document.querySelector("#desktop-container");
		const icon = new Component("div", {
			style: { position: "relative", width: "153px", height: "85px", fontSize: "16px", float: "left" },
			onclick: openClanWindow,
			children: [
				new Component("div", {
					classList: ["wrapper", "svelte-1ye0fc6"],
					children: [
						new Component("div", {
							style: { width: "100%", height: "calc(100% - 20px)", paddingBottom: "5px" },
							children: [
								new Component("img", {
									classList: ["svelte-1ye0fc6"], style: { height: "100%", filter: "brightness(0) invert(1)" },
									src: images.icon
								})
							]
						}),
						new Component("div", { innerText: "Clans" })
					]
				})
			]
		})

		desktop.append(icon.element);
	}

	const openClanWindow = async () => {
		if (document.getElementById("clan-window")) return;
		
		const response = await api.get(`/user/getByUsername/${player.name}`);
		if (!response)
			return;

		const window = new Component("div", {
			id: "clan-window",
			classList: ["window", "svelte-1hjm43z", "window-selected"],
			style: { zIndex: "56", top: "300px", left: "300px", resize: "both", overflow: "auto", minHeight: "500px", minWidth: "450px" },
			children: [
				new Component("div", {
					id: "to-drag",
					classList: ["window-title", "svelte-1hjm43z"],
					innerText: "Clans",
					children: [
						new Component("img", {
							prepend: true,
							src: images.icon,
							classList: ["icon", "icon-in-text"],
							style: { filter: "brightness(0) invert(1)" }
						}),
						new Component("button", {
							onclick: () => document.getElementById("clan-window")?.remove(),
							classList: ["window-close", "svelte-1hjm43z"],
							children: [
								new Component("img", {
									src: "icons/close.svg",
									classList: ["icon"]
								})
							]
						})
					]
				}),
				new Component("div", {
					classList: ["window-content", "svelte-1hjm43z"],
					style: { minWidth: "300px", minHeight: "300px", width: "100%", height: "90%", padding: "10px" },
					children: [
						new Component("div", {
							id: "content",
							style: { display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center", gap: "10px" }
						})
					]
				})
			]
		})

		document.querySelector("main").append(window.element);
		// User has clan
		if (response.data.clanId) {
			player.clan = response.data.clan;
			openClanInterface();
		} else {
			const join = new Component("button", {
				innerText: "Join",
				classList: ["green", "svelte-ec9kqa", "content-delete"],
				style: { height: "60px", width: "200px" },
				onclick: editToJoin
			})
			const create = new Component("button", {
				innerText: "Create",
				classList: ["green", "svelte-ec9kqa", "content-delete"],
				style: { height: "60px", width: "200px" },
				onclick: editToCreate
			})

			document.getElementById("content").append(join.element, create.element);
		}

		dragElement(window.element);
	}

	const editToJoin = async () => {
		document.querySelectorAll(".content-delete").forEach(e => e.remove());

		try {
			const response = await api.get(`clan/requestable/${player.name}`);
	
			const clanList = new Component("div", {
				classList: ["content-delete"],
				style: { display: "flex", flexDirection: "column", height: "100%", width: "100%", fontFamily: "var(--font-family-1)", fontWeight: "500", gap: "3px" },
				children: response.data.length == 0 ?
				[new Component("span", {
					innerText: "No clan to request"
				})] :
				response.data.map(clan => {
					return new Component("div", {
						style: { width: "100%", height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center",  borderRadius: "4px", cursor: "pointer", backgroundColor: "var(--color-darkgrey)" },
						onmouseenter: (event) => {event.target.style.backgroundColor = "var(--color-grey)"; event.target.style.outline = "1px solid white"; },
						onmouseleave: (event) => {event.target.style.backgroundColor = "var(--color-darkgrey)"; event.target.style.outline = null;},
						onclick: () => createClanInterfaceUsers(clan),
						children: [
							new Component("div", {
								style: { display: "flex", gap: "10px", height: "100%", alignItems: "center" },
								children: [
									clan.image && new Component("img", {
										src: clan.image,
										style: { height: "100%", borderRadius: "4px", width: "50px", objectFit: "cover" }
									}),
									!clan.image && new Component("div", {
										innerText: clan.name.slice(0, 1).toUpperCase(),
										style: { height: "100%", width: "50px", backgroundColor: "var(--color-blue)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", fontWeight: "500" }
									}),
									new Component("div", {
										style: { fontWeight: "500" },
										innerText: clan.name
									}),
									new Component("div", {
										style: { color: "var(--color-lightgrey)" },
										innerText: `${clan.users.length} members`
									})
								]
							}),
							new Component("button", {
								innerText: "Send request",
								style: { width: "120px", height: "70%", marginRight: "20px" },
								classList: ["green", "svelte-ec9kqa"],
								onclick: async (e) => {
									e.stopPropagation();
									try {
										e.target.innerText = "Sent";
										e.target.classList.add("cantClick");
										await api.post(`/clan/${clan.id}/request/${player.name}`);
										e.target.onclick = null;
									} catch(e) {
										console.log(e);
										prettierLoadFails("An error happen while sending request, please contact Xen0o2 on Discord!");
									}
								}
							})
						]
					})
				})
			})
	
			document.getElementById("content").append(clanList.element)
		} catch(e) {
			prettierLoadFails("An error happen while loading clans, please contact Xen0o2 on Discord");
		}
	}

	const editToCreate = () => {
		document.querySelectorAll(".content-delete").forEach(e => e.remove());

		const title = new Component("span", {
			innerText: "Clan name",
			style: { fontSize: "1.5rem", fontFamily: "var(--font-family-1)", fontWeight: "500"},
			classList: ["content-delete"]
		})

		const input = new Component("input", {
			id: "create-clan-input",
			type: "text",
			placeholder: "Ex: ouinouin",
			style: { width: "200px", padding: "10px", borderRadius: "2px", textAlign: "left", backgroundColor: "var(--color-grey)", boxShadow: "0 10px 20px var(--color-shadow) inset", border: "1px solid var(--color-lightgrey)", fontFamily: "var(--font-family-2)", zIndex: "60" },
			classList: ["content-delete"]
		})

		const button = new Component("button", {
			innerText: "Create",
			style: { width: "200px", height: "40px" },
			classList: ["green", "svelte-ec9kqa", "content-delete"],
			onclick: createClan
		})

		document.getElementById("content").append(title.element, input.element, button.element);
	}

	const createClan = async (event) => {
		event.target.innerText = "Creating...";
		event.target.classList.add("cantClick");
		const clanName = document.getElementById("create-clan-input")?.value;
		if (!clanName)
			return;
		try {
			const response = await api.post(`/clan/create`, {
				name: clanName,
				ownerName: player.name
			})
			if (response.data) {
				player.clan = response.data;
				openClanInterface();
			} else {
				const error = new Component("div", {
					innerText: "A clan already has this name!",
					style: { color: "var(--color-red)", fontFamily: "var(--font-family-2)" },
					classList: ["content-delete"]
				})
				document.getElementById("content").append(error.element);
				event.target.innerText = "Create";
				event.target.classList.remove("cantClick");
			}
		} catch(e) {
			console.log(e);
			prettierLoadFails("Clan creation failed, please contact Xen0o2 on Discord!");
		}
	}

	const createClanInterfaceHeader = () => {
		const clanHeader = new Component("div", {
			classList: ["content-delete", "interface-header"],
			style: { height: "40px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" },
			children: [
				new Component("button", {
					id: "clan-name-button",
					innerText: player.clan?.name || "Users",
					classList: ["green", "svelte-ec9kqa", "clan-button", "clan-users"],
					onclick: () => createClanInterfaceUsers(player.clan)
				}),
				new Component("button", {
					innerText: "Leaderboard",
					classList: ["grey", "svelte-ec9kqa", "clan-button", "clan-leaderboard"],
					onclick: createClanInterfaceLeaderboard
				}),
				player.clan.ownerName == player.name && player.clan.joinRequests.length > 0 ? new Component("button", {
					innerText: "Requests",
					classList: ["grey", "svelte-ec9kqa", "clan-button", "clan-requests"],
					onclick: createClanInterfaceRequests
				}) : null,
				new Component("button", {
					classList: ["grey", "svelte-ec9kqa", "clan-button", "clan-settings"],
					style: { display: "flex", justifyContent: "center", alignItems: "center", width: "40px", minWidth: "40px" },
					onclick: createClanInterfaceSettings,
					children: [
						new Component("img", {
							src: "icons/settings.svg",
							style: { height: "20px", opacity: "0.9" }
						})
					]
				}),
			]
		})
		
		document.getElementById("content").append(clanHeader.element);
	}

	const createClanInterfaceUsers = async (clan) => {
		document.querySelectorAll(".content-delete:not(.interface-header)").forEach(e => e.remove())
		document.querySelectorAll(".clan-button").forEach(e => {
			e.classList.remove("green");
			e.classList.add("grey")
		})
		document.querySelector(".clan-users")?.classList.remove("grey");
		document.querySelector(".clan-users")?.classList.add("green");
		if (document.getElementById("clan-name-button"))
			document.getElementById("clan-name-button").innerText = clan.name;
		const usersComponent = new Component("div", {
			classList: ["content-delete"],
			style: { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }, 
			children: Array.from(new Set(clan.users))
			.sort((a,b) => b.level - a.level)
			.map(user => {
				return new Component("div", {
					style: { display: "flex", alignItems: "center", justifyContent: "space-between", height: "50px", width: "100%", gap: "10px", borderRadius: "4px", cursor: "pointer", backgroundColor: "var(--color-darkgrey)" },
					onmouseenter: (event) => {event.target.style.backgroundColor = "var(--color-grey)"; event.target.style.outline = "1px solid white"; },
					onmouseleave: (event) => {event.target.style.backgroundColor = "var(--color-darkgrey)"; event.target.style.outline = "1px solid transparent"; },
					onclick: () => createClanInterfaceUser(user.name),
					children: [
						new Component("div", {
							style: { display: "flex", alignItems: "center", height: "50px", gap: "10px" },
							children: [
								user.image && new Component("img", {
									src: user.image,
									style: { height: "100%", borderRadius: "4px", width: "50px", objectFit: "cover" }
								}),
								!user.image && new Component("div", {
									innerText: user.name.slice(0, 1).toUpperCase(),
									style: { height: "100%", width: "50px", backgroundColor: "var(--color-blue)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", fontWeight: "500" }
								}),
								new Component("span", {
									innerText: user.name,
									style: { fontFamily: "var(--font-family-1)", fontSize: "1.3rem", fontWeight: "500", width: (clan.users.sort((a,b) => b.name.length - a.name.length)[0].name.length * 11).toString() + "px", display: "flex", alignItems: "center", justifyContent: "flex-start" }
								}),
								new Component("div", {
									style: { display: "flex", gap: "5px", alignItems: "center" },
									children: [
										new Component("img", {
											src: user.badge,
											style: { height: "20px" }
										}),
										new Component("span", {
											innerText: user.level,
											style: { fontSize: "1rem", color: "var(--color-lightgrey)" }
										})
									]
								})
							]
						}),
						new Component("div", {
							innerText: user.points.toString(),
							style: { fontFamily: "var(--font-family-2)", color: "var(--color-lightgrey)", marginRight: "20px" }
						})
					]
				})
			})
		})

		document.getElementById("content").append(usersComponent.element);
	}

	const createClanInterfaceUser = async (username) => {
		document.querySelectorAll(".content-delete:not(.interface-header)").forEach(e => e.remove())
		document.querySelectorAll(".clan-button").forEach(e => {
			e.classList.remove("green");
			e.classList.add("grey")
		})
		if (document.getElementById("clan-name-button") && player.clan)
			document.getElementById("clan-name-button").innerText = player.clan.name;
		try {
			const response = await api.get(`/user/getByUsername/${username}`);
			const user = response.data;
			const userComponent = new Component("div", {
				classList: ["content-delete"],
				style: { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" },
				children: [
					new Component("div", {
						style: { display: "flex", justifyContent: "space-between", height: "80px", width: "100%", gap: "20px" },
						children: [
							new Component("div", {
								style: { display: "flex", alignItems: "center", height: "100%", gap: "10px" },
								children: [
									user.image && new Component("img", {
										src: user.image,
										style: { height: "100%", borderRadius: "4px", width: "80px", objectFit: "cover" }
									}),
									!user.image && new Component("div", {
										innerText: user.name.slice(0, 1).toUpperCase(),
										style: { height: "100%", width: "80px", backgroundColor: "var(--color-blue)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", fontWeight: "500" }
									}),
									new Component("div", {
										style: { display: "flex", flexDirection: "column" },
										children: [
											new Component("span", {
												innerText: user.clan.name,
												style: { color: "var(--color-lightgrey)", textAlign: "start"}
											}),
											new Component("span", {
												innerText: user.name,
												style: { color: "white", fontSize: "1.6rem", fontWeight: "500", textAlign: "start" }
											}),
											new Component("div", {
												style: { display: "flex", alignItems: "center", gap: "5px" },
												children: [
													new Component("img", {
														src: user.badge,
														style: { height: "20px" }
													}),
													new Component("span", {
														innerText: user.level,
														style: { color: "var(--color-lightgrey)" }
													})
												]
											})
										]
									})
								]
							}),
							user.name != player.name && user.clan?.ownerName == player.name && new Component("button", {
								innerText: "Kick from clan",
								classList: ["red", "svelte-ec9kqa"],
								style: { height: "40px", width: "140px" },
								onclick: async (e) => {
									try {
										e.target.innerText = "Kicking...";
										e.target.classList.add("cantClick");
										const response = await api.post(`/clan/${user.clan.id}/kick/${user.name}`)
										player.clan = response.data;
										e.target.remove();
										createClanInterfaceUsers(player.clan);
									} catch(e) {
										console.log(e);
										prettierLoadFails(`An error happened while kicking ${user.name} from clan`)
									}
								}
							})
						]
					}),
					new Component("div", {
						style: { marginTop: "10px", height: "calc(100% - 90px)", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", fontFamily: "var(--font-family-2)" },
						children: [
							new Component("div", {
								style: { height: "50px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", backgroundColor: "var(--color-darkgrey)", paddingInline: "10px", gap: "5px" },
								children: ["common", "uncommon", "rare", "epic", "legendary", "mythic"].map(rarity => {
									return new Component("div", {
										style: { display: "flex", alignItems: "center", padding: "5px", borderRadius: "5px", backgroundColor: "var(--color-dark)", gap: "3px" },
										children: [
											new Component("img", {
												src: `icons/filament-${rarity}.svg`,
												style: { height: "20px" }
											}),
											new Component("span", {
												innerText: user.filaments[rarity].toString()
											})
										]
									})
								})
							}),
							new Component("div", {
								style: { height: "50px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "5px", backgroundColor: "var(--color-darkgrey)", paddingInline: "10px" },
								children: [
									new Component("span", {
										innerText: "Total hacks"
									}),
									new Component("span", {
										innerText: user.hackedOthers.toString(),
										style: { color: "var(--color-lightgrey)" }
									})
								]
							}),
							new Component("div", {
								style: { height: "50px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "5px", backgroundColor: "var(--color-darkgrey)", paddingInline: "10px" },							children: [
									new Component("span", {
										innerText: "Has been hacked"
									}),
									new Component("span", {
										innerText: user.beenHacked.toString(),
										style: { color: "var(--color-lightgrey)" }
									})
								]
							}),
							new Component("div", {
								style: { height: "50px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "5px", backgroundColor: "var(--color-darkgrey)", paddingInline: "10px" },							children: [
									new Component("span", {
										innerText: "Hack attempt countered"
									}),
									new Component("span", {
										innerText: (user.beenHackedTries - user.beenHacked).toString(),
										style: { color: "var(--color-lightgrey)" }
									})
								]
							})
						]
					})
				]
			})
	
			document.getElementById("content").append(userComponent.element);
		} catch(e) {
			console.log(e);
			prettierLoadFails(`An error happened while loading ${username}'s profile, please contact Xen0o2 on Discord!`);
		}
	}

	const createClanInterfaceLeaderboard = async () => {
		document.querySelectorAll(".content-delete:not(.interface-header)").forEach(e => e.remove())
		document.querySelectorAll(".clan-button").forEach(e => {
			e.classList.remove("green");
			e.classList.add("grey");
		})
		document.querySelector(".clan-leaderboard").classList.remove("grey");
		document.querySelector(".clan-leaderboard").classList.add("green");
		document.getElementById("clan-name-button").innerText = player.clan.name;
		try {
			const response = await api.get(`/clan/leaderboard`);

			const leaderboardComponent = new Component("div", {
				classList: ["content-delete"],
				style: { height: "100%", width: "100%", display: "flex", alignItems: "center", flexDirection: "column", gap: "3px" },
				children: response.data.map(clan => {
					return new Component("div", {
						style: { width: "100%", height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center",  borderRadius: "4px", cursor: "pointer", border: "1px solid transparent", backgroundColor: "var(--color-darkgrey)" },
						onmouseenter: (event) => {event.target.style.backgroundColor = "var(--color-grey)"; event.target.style.border = "1px solid white"; },
						onmouseleave: (event) => {event.target.style.backgroundColor = "var(--color-darkgrey)"; event.target.style.border = null;},
						onclick: () => createClanInterfaceUsers(clan),
						children: [
							new Component("div", {
								style: { display: "flex", gap: "20px", height: "100%", alignItems: "center" },
								children: [
									clan.image && new Component("img", {
										src: clan.image,
										style: { height: "100%", borderRadius: "4px", width: "50px", objectFit: "cover" }
									}),
									!clan.image && new Component("div", {
										innerText: clan.name.slice(0, 1).toUpperCase(),
										style: { height: "100%", width: "50px", backgroundColor: "var(--color-blue)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", fontWeight: "500" }
									}),
									new Component("div", {
										style: { fontWeight: "500" },
										innerText: clan.name
									}),
									new Component("div", {
										style: { color: "var(--color-lightgrey)" },
										innerText: `${clan.users.length} members`
									})
								]
							}),
							new Component("div", {
								innerText: clan.points.toString(),
								style: { fontFamily: "var(--font-family-2)", color: "var(--color-lightgrey)", marginRight: "20px" }
							})
						]
					})
				})
			})

			document.getElementById("content").append(leaderboardComponent.element);
		} catch(e) {
			console.log(e);
			prettierLoadFails("An error happened while loading leaderboard, please contact Xen0o2 on Discord!")
		}

	}

	const createClanInterfaceRequests = async () => {
		document.querySelectorAll(".content-delete:not(.interface-header)").forEach(e => e.remove())
		document.querySelectorAll(".clan-button").forEach(e => {
			e.classList.remove("green");
			e.classList.add("grey")
		})
		document.querySelector(".clan-requests").classList.remove("grey");
		document.querySelector(".clan-requests").classList.add("green");
		
		const requestsComponent = new Component("div", {
			classList: ["content-delete"],
			style: { height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "3px" }, 
			children: player.clan.joinRequests.length == 0 ?
			[new Component("div", {
				innerText: "No request"
			})] :
			player.clan.joinRequests.map(user => {
				return new Component("div", {
					style: { display: "flex", alignItems: "center", height: "50px", width: "100%", justifyContent: "space-between", borderRadius: "4px", cursor: "pointer", backgroundColor: "var(--color-darkgrey)" },
					onmouseenter: (event) => {event.target.style.backgroundColor = "var(--color-grey)"; event.target.style.outline = "1px solid white";},
					onmouseleave: (event) => {event.target.style.backgroundColor = "var(--color-darkgrey)"; event.target.style.outline = "1px solid transparent";},
					children: [
						new Component("div", {
							style: { display: "flex", gap: "10px", height: "100%" },
							children: [
								new Component("div", {
									style: { display: "flex", gap: "10px", height: "100%", alignItems: "center" },
									children: [
										user.image && new Component("img", {
											src: user.image,
											style: { height: "100%", borderRadius: "4px", width: "50px", objectFit: "cover" }
										}),
										!user.image && new Component("div", {
											innerText: user.name.slice(0, 1).toUpperCase(),
											style: { height: "100%", width: "50px", backgroundColor: "var(--color-blue)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", fontWeight: "500" }
										}),
										new Component("span", {
											innerText: user.name,
											style: { fontFamily: "var(--font-family-1)", fontSize: "1.3rem", fontWeight: "500" }
										})
									]
								})
							]
						}),
						new Component("div", {
							style: { display: "flex", gap: "10px", marginRight: "20px" },
							children: [
								new Component("button", {
									classList: ["green", "svelte-ec9kqa"],
									style: { width: "35px", height: "35px" },
									onclick: async (e) => {
										try {
											const response = await api.post(`/clan/${player.clan.id}/accept/${user.name}`);
											player.clan = response.data;
											e.target?.parentNode?.parentNode?.parentNode?.remove();
										} catch(e) {
											console.log(e);
											prettierLoadFails(`An error happened while accepting ${user.name} request, please contact Xen0o2 on Discord`);
										}
									},
									children: [
										new Component("img", {
											src: "icons/check.svg",
											style: { filter: "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)", height: "20px", opacity: "0.9" }
										})
									]
								}),
								new Component("button", {
									classList: ["red", "svelte-ec9kqa"],
									style: { width: "35px", height: "35px" },
									onclick: async (e) => {
										try {
											const response = await api.post(`/clan/${player.clan.id}/decline/${user.name}`);
											player.clan = response.data;
											e.target?.parentNode?.parentNode?.parentNode?.remove();
										} catch(e) {
											console.log(e);
											prettierLoadFails(`An error happened while declining ${user.name} request, please contact Xen0o2 on Discord`);
										}
									},
									children: [
										new Component("img", {
											src: "icons/block.svg",
											style: { height: "20px", opacity: "0.9" }
										})
									]
								})
							]
						})
					]
				})
			})
		})

		document.getElementById("content").append(requestsComponent.element);
	}

	const createClanInterfaceSettings = async () => {
		document.querySelectorAll(".content-delete:not(.interface-header)").forEach(e => e.remove())
		document.querySelectorAll(".clan-button").forEach(e => {
			e.classList.remove("green");
			e.classList.add("grey")
		})
		document.querySelector(".clan-settings").classList.remove("grey");
		document.querySelector(".clan-settings").classList.add("green");

		const settingsComponent = new Component("div", {
			classList: ["content-delete"],
			style: { height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "10px" },
			children: [
				player.clan && player.clan.ownerName == player.name && new Component("button", {
					innerText: "Delete clan",
					classList: ["red", "svelte-ec9kqa"],
					style: { height: "40px", width: "140px" },
					onclick: async () => {
						try {
							if (confirm(`Delete ${player.clan.name} and leave ${player.clan.users.length} members behind ?`)) {
								await api.post(`/clan/${player.clan.id}/delete`);
								player.clan = null;
								document.getElementById("clan-window")?.remove();
							}
						} catch(e) {
							console.log(e);
							prettierLoadFails(`An error happened while deleting ${player.clan.name}`)
						}
					}
				}),
				player.clan && player.clan.ownerName != player.name && new Component("button", {
					innerText: "Leave clan",
					classList: ["red", "svelte-ec9kqa"],
					style: { height: "40px", width: "140px" },
					onclick: async () => {
						try {
							if (confirm(`Leave ${player.clan.name} and lose all your points ?`)) {
								await api.post(`/clan/${player.clan.id}/leave/${player.name}`);
								player.clan = null;
								document.getElementById("clan-window")?.remove();
							}
						} catch(e) {
							console.log(e);
							prettierLoadFails(`An error happened while deleting ${player.clan.name}`)
						}
					}
				}),
				player.clan && player.clan.ownerName != player.name && new Component("span", {
					innerText: "By leaving clan, you will lose all of your points!",
					style: { color: "var(--color-red)", fontSize: "1.5rem" }
				})
			]
		})

		document.getElementById("content").append(settingsComponent.element);
	}


	const openClanInterface = () => {
		document.querySelectorAll(".content-delete").forEach(e => e.remove());

		createClanInterfaceHeader();
		createClanInterfaceUsers(player.clan);
	}

	const logObserver = new MutationObserver(function(mutations) {
        const messages = mutations.filter(e => 
            e.target.id == "wrapper"
            && (!e.nextSibling || !e.nextSibling[0])
            && e.addedNodes
            && e.addedNodes[0]?.classList?.contains("message"))
        if (!messages.length)
            return;
        messages.forEach(async messageElement => {
			const message = messageElement.addedNodes[0];
            if (message.innerText.includes("being hacked") || message.innerText.includes("been hacked")) {
				const hacker = message.querySelectorAll(".tag")[0]?.innerText || message.innerText.match(/by .+ on/)[0].slice(3, -3);
				const progression = parseInt((message.innerText.match(/\d{1,3}(\.\d{1,2})?%/) || ["100%"])[0].slice(0, -1));
				if (progression == 100) {
					document.querySelector("#desktop-container > div:nth-child(3)")?.click();
					await sleep(200);
					const users = document.querySelectorAll(".username");
					const level = (Array.from(users).find(e => e.innerText.trim() == hacker).parentNode?.innerText?.match(/\d+/) || [])[0];
					if (users.length == 0 || !level)
						return;
					try {
						const response = await api.post(`/user/${player.name}/hacked/${hacker}`, { level })
						if (response.data)
							player.clan = response.data;
					} catch(e) {
						console.log(e);
					}
				}
			}
        })
    });

	const windowOpenObserver = new MutationObserver(async function(mutations) {
        const newWindow = mutations.find(e => {
            return e.target == document.querySelector("main") &&
                e.addedNodes.length == 1 &&
                e.addedNodes[0]?.classList?.contains("window", "svelte-1hjm43z")
        })
        if (!newWindow)
            return;

		const isLogWindow = newWindow.addedNodes[0].querySelector(".window-title > img[src='icons/log.svg']")
        if (isLogWindow)
            logObserver.observe(isLogWindow?.closest(".window.svelte-1hjm43z")?.querySelector(".window-content > #wrapper"), {attributes: false, childList: true, characterData: true, subtree: true});
		
		const hasHackedSomeoneWindow = newWindow.addedNodes[0].querySelectorAll(".window-content > div > .el").length == 4;
		if (hasHackedSomeoneWindow) {
			try {
				const hacked = newWindow.addedNodes[0].querySelector(".wrapper > .username")?.innerText;
				const response = await api.post(`/user/${player.name}/hack/${hacked}`, { body: document.body.innerText })
				if (response.data)
					player.clan = response.data.clan, console.log(response.data);
			} catch(e) {
				console.log(e);
			}
		}
	})

	const windowCloseObserver = new MutationObserver(async function(mutations) {
        const windowClosed = mutations.find(e => {
            return e.target == document.querySelector("main") &&
                e.removedNodes.length == 1 &&
                e.removedNodes[0]?.classList?.contains("window", "svelte-1hjm43z")
        })
        if (!windowClosed)
            return;

        const isLogWindow = windowClosed.removedNodes[0].querySelector(".window-title > img[src='icons/log.svg']")
        if (isLogWindow)
            logObserver.disconnect();
	})

	const createObservers = () => {
		return new Promise(resolve => {
			const logWindow = document.querySelector(".window-title > img[src='icons/log.svg']").closest(".window.svelte-1hjm43z").querySelector(".window-content > #wrapper");
			logObserver.observe(logWindow, {attributes: false, childList: true, characterData: false, subtree: true});
			windowOpenObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
			windowCloseObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree: true});
			resolve();
		})
	};

	const createLoginDisplay = () => {
		const display = new Component("div", {
			id: "display-delete",
			style: { position: "absolute", zIndex: "100", top: "0", height: "100vh", width: "100vw", backgroundColor: "black", opacity: "0.8", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
			children: [
				new Component("span", {
					innerText: "Logging to clans ...",
					style: { color: "white", fontFamily: "var(--font-family-2)", fontWeight: "500", fontSize: "3rem", opacity: "1" }
				})
			]
		})

		document.querySelector("html").append(display.element);
	}

	const loginUser = async () => {
		try {

			document.querySelector("#desktop-container > div > div > div > img[src='icons/computer.svg']")?.parentNode?.parentNode?.parentNode?.click();
			await sleep(300);

			const id = document.querySelector("#top-wrapper > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)")?.innerText.slice(4);
			const name = document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim();
			if (!id)
				return prettierLoadFails(`An error happened while fetching user's information!`);
			player.id = id;
			player.name = name;

			const level = parseInt(document.body.innerText.match(/Level \w+/g)[0].trim().slice(6));
			const badge = document.querySelector("img.icon[alt='Rank']")?.src;
			const image = document.querySelector(".item > img")?.src;

			await sleep(200);
			document.querySelector("img[src='icons/stats.svg']")?.click();
			await sleep(300);

			const hackedOthers = parseInt(document.body.innerText.match(/Hacked others\t\d+/g)[0]?.match(/\d+/g)[0]);
			const beenHacked = parseInt(document.body.innerText.match(/Been hacked\t\d+/g)[0]?.match(/\d+/g)[0])
			const beenHackedTries = document.body.innerText.match(/Attacks on Port \d+\t\d+/g).map(e => parseInt(e.match(/\d+/g)[1])).reduce((a,b) => a + b, 0)
			const filaments = Array.from(document.querySelectorAll(".filament-el")).map(e => e.innerText)

			document.querySelector(".window-title > img[src='icons/computer.svg']")?.parentNode?.querySelector("button")?.click();
			
			await api.post(`/user/${player.name}/connect`, { id: player.id });
			await sleep(200);
			document.querySelector("#desktop-container > div > div > div > img[src='icons/friends.svg']")?.parentNode?.parentNode?.parentNode?.click();
			await sleep(200);
			Array.from(document.querySelectorAll(".chat-el > .chat-name > .unread")).map(e => e.parentNode).find(e => e.innerText.slice(0, -2) == "Bert")?.click()
			await sleep(200);
			const code = ((document.querySelector(".message.svelte-wdw3y7")?.innerText.match(/{.+}/g) || [])[0])?.slice(1, -1);
			
			const response = await api.post(`/user/${player.name}/connect/${code}`, { 
				id: player.id, level, badge, image, hackedOthers, beenHacked, beenHackedTries, filaments
			});
			api.defaults.headers.common["Authorization"] = response.data.id;
			player.clan = response.data.clan;
			document.querySelector(".window-title > img[src='icons/friends.svg']")?.parentNode?.querySelector("button")?.click();
			document.getElementById("display-delete")?.remove();
			sendLog(`
				<div>
					<img class="icon" src="icons/check.svg">
					Clans successfully loaded!
				</div>
			`)
		} catch(e) {
			console.log(e);
			prettierLoadFails(`An error happened while trying to login`);
		}
	}
    
    (async () => {
        while (document.querySelector("#login-top"))
            await sleep(500);
		createLoginDisplay();
		await sleep(200);
		await loginUser();

		await createObservers();
		if (!player.name) {
            await sleep(300);
			player.name = document.querySelector("img[src='icons/online.svg']")?.parentNode?.innerText?.trim();
			if (!player.name)
				return prettierLoadFails(`You must have an account to use "clans-on-s0urce" addon!`)
		}
		createDesktopIcon()
    })()    
})();
