(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),c=(n(0),n(470)),i={},o={id:"exercises/node/ex_6",title:"ex_6",description:"# Exercise 6",source:"@site/../docs/exercises/node/ex_6.md",permalink:"/node_comit/docs/exercises/node/ex_6",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/node/ex_6.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_5",permalink:"/node_comit/docs/exercises/node/ex_5"},next:{title:"ex_7",permalink:"/node_comit/docs/exercises/node/ex_7"}},l=[{value:"index.js",id:"indexjs",children:[]},{value:"Extra",id:"extra",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"exercise-6"},"Exercise 6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_6\n  |-- index.js\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Init an NPM project inside the ex_6 folder"),Object(c.b)("li",{parentName:"ul"},"Use ex_6 as project name"),Object(c.b)("li",{parentName:"ul"},"Add a start script to run the index.js file")),Object(c.b)("h2",{id:"indexjs"},"index.js"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Define a ",Object(c.b)("inlineCode",{parentName:"li"},"greet")," function using Arrow Function syntax"),Object(c.b)("li",{parentName:"ul"},"This functions accepts 2 parameter"),Object(c.b)("li",{parentName:"ul"},"First parameter is a string that represents a person first name"),Object(c.b)("li",{parentName:"ul"},"Second parameter is a string that represents a person last name"),Object(c.b)("li",{parentName:"ul"},"This functions shows the following message when it's called")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Hi %firstname% %lastname%\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Call the function and pass your first and last name as parameters")),Object(c.b)("h2",{id:"extra"},"Extra"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Add a third parameter to the greet function"),Object(c.b)("li",{parentName:"ul"},"This parameter is a function that we'll use as callback"),Object(c.b)("li",{parentName:"ul"},"This callback will get executed after greeting the person"),Object(c.b)("li",{parentName:"ul"},"This callback function will show the following output:")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"This code gets executed after the greet function call\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Run the script again to see the new feature")))}u.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,o({ref:t},s,{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);