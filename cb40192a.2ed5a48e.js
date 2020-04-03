(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{410:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(470)),i={},c={id:"exercises/js/ex_112",title:"ex_112",description:"# Exercise 112",source:"@site/../docs/exercises/js/ex_112.md",permalink:"/node_comit/docs/exercises/js/ex_112",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_112.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_111",permalink:"/node_comit/docs/exercises/js/ex_111"},next:{title:"ex_113",permalink:"/node_comit/docs/exercises/js/ex_113"}},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-112"},"Exercise 112"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new index112.js file"),Object(o.b)("li",{parentName:"ul"},"Define a showNumbers function that accepts two numeric parameters: start and end"),Object(o.b)("li",{parentName:"ul"},"The showNumbers function will show all the numbers between the start and end numbers"),Object(o.b)("li",{parentName:"ul"},"If start is bigger than the second one show the numbers from higher to lower"),Object(o.b)("li",{parentName:"ul"},"If start is smaller than the second one then show the numbers from lower to higher"),Object(o.b)("li",{parentName:"ul"},"Call the showNumbers function using the following parameters:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"start: 0, end: 1000"),Object(o.b)("li",{parentName:"ul"},"start: 1000, end: 0"),Object(o.b)("li",{parentName:"ul"},"start: 100, end: 100"),Object(o.b)("li",{parentName:"ul"},'start: "100", end: 300'))),Object(o.b)("li",{parentName:"ul"},"Find a way to deal with the following scenarios:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"start and end are the same number"),Object(o.b)("li",{parentName:"ul"},"parameters that aren't numbers")))))}u.isMDXComponent=!0},470:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,c({ref:t},l,{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);