(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{43:function(e,r,t){!function(e,r,t,n){"use strict";function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r,t=1;t<arguments.length;t++)r=null==arguments[t]?{}:arguments[t],t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}));return e}function c(e){var r=e.srcList,n=e.imgPromise,o=void 0===n?a({decode:!0}):n,c=e.useSuspense,s=void 0===c||c,u=t.useState(!0)[1],O=d(l(r)),h=O.join("");if(f[h]||(f[h]={promise:p(O,o),cache:"pending",error:null}),f[h].promise.then((function(e){f[h]=i(i({},f[h]),{},{cache:"resolved",src:e}),s||u(!1)})).catch((function(e){f[h]=i(i({},f[h]),{},{cache:"rejected",error:e}),s||u(!1)})),"resolved"===f[h].cache)return{src:f[h].src,isLoading:!1,error:null};if("rejected"===f[h].cache){if(s)throw f[h].error;return{isLoading:!1,error:f[h].error,src:void 0}}if(s)throw f[h].promise;return{isLoading:!0,src:void 0,error:null}}function s(e){var t=e.decode,n=e.src,o=void 0===n?[]:n,i=e.loader,s=void 0===i?null:i,d=e.unloader,l=void 0===d?null:d,f=e.container,p=void 0===f?O:f,h=e.loaderContainer,b=void 0===h?O:h,j=e.unloaderContainer,v=void 0===j?O:j,g=e.imgPromise,m=e.crossorigin,w=e.useSuspense,y=void 0!==w&&w,P=r(e,["decode","src","loader","unloader","container","loaderContainer","unloaderContainer","imgPromise","crossorigin","useSuspense"]),x=c({srcList:o,imgPromise:g=g||a({decode:!(void 0!==t)||t,crossOrigin:m}),useSuspense:y}),_=x.src,S=x.isLoading;return _?p(u.createElement("img",Object.assign({src:_},P))):!y&&S?b(s):!y&&l?v(l):null}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;var u="default"in t?t.default:t;n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;var a=function(e){var r=e.decode,t=e.crossOrigin,n=void 0===t?"":t;return function(e){return new Promise((function(t,o){var i=new Image;n&&(i.crossOrigin=n),i.onload=function(){(void 0===r||r)&&i.decode?i.decode().then(t).catch(o):t()},i.onerror=o,i.src=e}))}},d=function(e){return e.filter((function(e){return e}))},l=function(e){return Array.isArray(e)?e:[e]},f={},p=function(e,r){var t=!1;return new Promise((function(n,o){var i=function(e){return r(e).then((function(){t=!0,n(e)}))};e.reduce((function(e,r){return e.catch((function(){if(!t)return i(r)}))}),i(e.shift())).catch(o)}))},O=function(e){return e};e.Img=s,e.useImage=c,Object.defineProperty(e,"__esModule",{value:!0})}(r,t(44),t(0),t(45))},44:function(e,r){e.exports=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},45:function(e,r){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0},47:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return l}));var n=t(10),o=t(2),i=t(0),c=t(43),s=t(11),u=t(6),a=t.n(u),d=t(1);function l(){var e=Object(o.h)().movieId,r=Object(i.useState)(null),t=Object(n.a)(r,2),u=t[0],l=t[1];return Object(i.useEffect)((function(){s.c(e).then((function(e){l(e.cast)}))}),[e]),Object(d.jsx)("div",{children:u&&Object(d.jsx)("ul",{children:u.map((function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:e.original_name}),e.profile_path&&Object(d.jsx)(c.Img,{className:a.a.castImage,src:["https://image.tmdb.org/t/p/w500".concat(e.profile_path)]}),Object(d.jsx)("p",{children:e.known_for_department})]},e.id)}))})})}}}]);
//# sourceMappingURL=4.54e94f19.chunk.js.map