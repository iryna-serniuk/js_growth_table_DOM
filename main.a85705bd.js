parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=n(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,l=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw l}}}}function n(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var r=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),l=document.querySelector(".append-column"),i=document.querySelector(".remove-column"),a=document.querySelector(".field").tBodies[0],c=10,u=2;function d(){var e=a.rows.length,n=a.rows[0].cells.length;r.disabled=e>=c,o.disabled=e<=u,l.disabled=n>=c,i.disabled=n<=u}r.addEventListener("click",function(e){a.append(a.lastElementChild.cloneNode(!0)),d()}),o.addEventListener("click",function(e){a.lastElementChild.remove(),d()}),l.addEventListener("click",function(n){var t,r=e(a.rows);try{for(r.s();!(t=r.n()).done;){var o=t.value;o.append(o.lastElementChild.cloneNode(!0))}}catch(l){r.e(l)}finally{r.f()}d()}),i.addEventListener("click",function(n){var t,r=e(a.rows);try{for(r.s();!(t=r.n()).done;){t.value.lastElementChild.remove()}}catch(o){r.e(o)}finally{r.f()}d()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.a85705bd.js.map