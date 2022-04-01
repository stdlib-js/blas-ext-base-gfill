// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gfill=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;var c=t,l=function(e,r,t){var c,l,s,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(u.call(e,r)||f.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),s="get"in t,_="set"in t,l&&(s||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(e,r,t.get),_&&i&&i.call(e,r,t.set),e},s=r()?c:l;var _=function(e,r){return e[r]},d=function(e,r){return e.get(r)},p=function(e,r,t){e[r]=t},v=function(e,r,t){e.set(t,r)};var b=function(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?d:_,setter:r?v:p}};var y=function(e,r,t,n,o){var a,i,u,f;for(a=t.data,i=t.setter,u=o,f=0;f<e;f++)i(a,u,r),u+=n;return t},g=b,j=y;var m=b,h=y;var w=function(e,r,t,n){var o,a,i,u;if(e<=0)return t;if((u=g(t)).accessors)return j(e,r,u,n,o=n<0?(1-e)*n:0),u.data;if(1===n){if((i=e%8)>0)for(a=0;a<i;a++)t[a]=r;if(e<8)return t;for(a=i;a<e;a+=8)t[a]=r,t[a+1]=r,t[a+2]=r,t[a+3]=r,t[a+4]=r,t[a+5]=r,t[a+6]=r,t[a+7]=r;return t}for(o=n<0?(1-e)*n:0,a=0;a<e;a++)t[o]=r,o+=n;return t};return function(e,r,t){s(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(w,"ndarray",(function(e,r,t,n,o){var a,i,u,f;if(e<=0)return t;if((u=m(t)).accessors)return h(e,r,u,n,o),u.data;if(a=o,1===n){if((i=e%8)>0)for(f=0;f<i;f++)t[a]=r,a+=n;if(e<8)return t;for(f=i;f<e;f+=8)t[a]=r,t[a+1]=r,t[a+2]=r,t[a+3]=r,t[a+4]=r,t[a+5]=r,t[a+6]=r,t[a+7]=r,a+=8;return t}for(f=0;f<e;f++)t[a]=r,a+=n;return t})),w}));
//# sourceMappingURL=bundle.js.map
