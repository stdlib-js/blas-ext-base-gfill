"use strict";var s=function(o,i){return function(){return i||o((i={exports:{}}).exports,i),i.exports}};var q=s(function(E,b){
function M(o,i,e,u,c){var r,n,t,f;for(r=e.data,n=e.accessors[1],t=c,f=0;f<o;f++)n(r,t,i),t+=u;return e}b.exports=M
});var m=s(function(F,g){
var P=require('@stdlib/array-base-arraylike2object/dist'),O=q(),y=8;function R(o,i,e,u){var c,r,n,t;if(o<=0)return e;if(t=P(e),t.accessorProtocol)return u<0?c=(1-o)*u:c=0,O(o,i,t,u,c),t.data;if(u===1){if(n=o%y,n>0)for(r=0;r<n;r++)e[r]=i;if(o<y)return e;for(r=n;r<o;r+=y)e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=i,e[r+4]=i,e[r+5]=i,e[r+6]=i,e[r+7]=i;return e}for(u<0?c=(1-o)*u:c=0,r=0;r<o;r++)e[c]=i,c+=u;return e}g.exports=R
});var j=s(function(G,a){
var w=require('@stdlib/array-base-arraylike2object/dist'),z=q(),v=8;function A(o,i,e,u,c){var r,n,t,f;if(o<=0)return e;if(t=w(e),t.accessorProtocol)return z(o,i,t,u,c),t.data;if(r=c,u===1){if(n=o%v,n>0)for(f=0;f<n;f++)e[r]=i,r+=u;if(o<v)return e;for(f=n;f<o;f+=v)e[r]=i,e[r+1]=i,e[r+2]=i,e[r+3]=i,e[r+4]=i,e[r+5]=i,e[r+6]=i,e[r+7]=i,r+=v;return e}for(f=0;f<o;f++)e[r]=i,r+=u;return e}a.exports=A
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=m(),C=j();B(k,"ndarray",C);module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
