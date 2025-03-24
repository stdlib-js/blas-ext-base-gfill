"use strict";var c=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var y=c(function(C,q){
function j(t,e,r,o,f){var i,n,s,u;for(i=r.data,n=r.accessors[1],s=f,u=0;u<t;u++)n(i,s,e),s+=o;return r}q.exports=j
});var a=c(function(D,d){
var k=require('@stdlib/array-base-arraylike2object/dist'),M=y(),v=8;function O(t,e,r,o,f){var i,n,s,u;if(t<=0)return r;if(s=k(r),s.accessorProtocol)return M(t,e,s,o,f),s.data;if(i=f,o===1){if(n=t%v,n>0)for(u=0;u<n;u++)r[i]=e,i+=o;if(t<v)return r;for(u=n;u<t;u+=v)r[i]=e,r[i+1]=e,r[i+2]=e,r[i+3]=e,r[i+4]=e,r[i+5]=e,r[i+6]=e,r[i+7]=e,i+=v;return r}for(u=0;u<t;u++)r[i]=e,i+=o;return r}d.exports=O
});var b=c(function(E,g){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=a();function w(t,e,r,o){return R(t,e,r,o,P(t,o))}g.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=b(),A=a();z(m,"ndarray",A);module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
