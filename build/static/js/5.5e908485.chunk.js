(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{43:function(e,r,t){!function(e,r,t,n){"use strict";function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function i(e){var r=e.srcList,n=e.imgPromise,o=void 0===n?u({decode:!0}):n,i=e.useSuspense,s=void 0===i||i,a=t.useState(!0)[1],h=d(l(r)),v=h.join("");if(f[v]||(f[v]={promise:p(h,o),cache:"pending",error:null}),f[v].promise.then((function(e){f[v]=c(c({},f[v]),{},{cache:"resolved",src:e}),s||a(!1)})).catch((function(e){f[v]=c(c({},f[v]),{},{cache:"rejected",error:e}),s||a(!1)})),"resolved"===f[v].cache)return{src:f[v].src,isLoading:!1,error:null};if("rejected"===f[v].cache){if(s)throw f[v].error;return{isLoading:!1,error:f[v].error,src:void 0}}if(s)throw f[v].promise;return{isLoading:!0,src:void 0,error:null}}function s(e){var t=e.decode,n=e.src,o=void 0===n?[]:n,c=e.loader,s=void 0===c?null:c,d=e.unloader,l=void 0===d?null:d,f=e.container,p=void 0===f?h:f,v=e.loaderContainer,O=void 0===v?h:v,b=e.unloaderContainer,j=void 0===b?h:b,g=e.imgPromise,m=e.crossorigin,y=e.useSuspense,w=void 0!==y&&y,P=r(e,["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"]),x=i({srcList:o,imgPromise:g=g||u({decode:!(void 0!==t)||t,crossOrigin:m}),useSuspense:w}),_=x.src,S=x.isLoading;return _?p(a.createElement("img",Object.assign({src:_},P))):!w&&S?O(s):!w&&l?j(l):null}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var a="default"in t?t.default:t;n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var u=function(e){var r=e.decode,t=e.crossOrigin,n=void 0===t?"":t;return function(e){return new Promise((function(t,o){var c=new Image;n&&(c.crossOrigin=n),c.onload=function(){(void 0===r||r)&&c.decode?c.decode().then(t).catch(o):t()},c.onerror=o,c.src=e}))}},d=function(e){return e.filter((function(e){return e}))},l=function(e){return Array.isArray(e)?e:[e]},f={},p=function(e,r){var t=!1;return new Promise((function(n,o){var c=function(e){return r(e).then((function(){t=!0,n(e)}))};e.reduce((function(e,r){return e.catch((function(){if(!t)return c(r)}))}),c(e.shift())).catch(o)}))},h=function(e){return e};e.Img=s,e.useImage=i,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(44),t(0),t(45))},44:function(e,r){e.exports=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},45:function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0},48:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return l}));var n=t(10),o=t(2),c=t(0),i=t(43),s=t(11),a=t(6),u=t.n(a),d=t(1);function l(){var e=Object(o.h)().movieId,r=Object(c.useState)(null),t=Object(n.a)(r,2),a=t[0],l=t[1];return Object(c.useEffect)((function(){s.e(e).then((function(e){l(e.results)}))}),[e]),Object(d.jsx)("div",{children:a&&Object(d.jsx)("ul",{children:a.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:e.author}),e.author_details.avatar_path&&Object(d.jsx)(i.Img,{className:u.a.castImage,src:["https://image.tmdb.org/t/p/w500".concat(e.author_details.avatar_path),e.author_details.avatar_path.slice(1,e.author_details.avatar_path.length)]}),Object(d.jsx)("p",{className:u.a.contentItem,children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=5.5e908485.chunk.js.map