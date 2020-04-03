(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{353:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(9),o=(r(0),r(470)),l={},i={id:"exercises/js/ex_152",title:"ex_152",description:"# Exercise 152",source:"@site/../docs/exercises/js/ex_152.md",permalink:"/node_comit/docs/exercises/js/ex_152",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_152.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_151",permalink:"/node_comit/docs/exercises/js/ex_151"},next:{title:"ex_153",permalink:"/node_comit/docs/exercises/js/ex_153"}},s=[],c={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-152"},"Exercise 152"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new index152.js"),Object(o.b)("li",{parentName:"ul"},"Define a user variable and assign a literal object with the following properties:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"property: username, value: null"),Object(o.b)("li",{parentName:"ul"},"property: password, value: null"),Object(o.b)("li",{parentName:"ul"},"method: greet"),Object(o.b)("li",{parentName:"ul"},"method: updatePassword"),Object(o.b)("li",{parentName:"ul"},"method: updaterUsername"))),Object(o.b)("li",{parentName:"ul"},"The greet method shows the following message as output if username property is not null",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Hello, I'm user %username%\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Else show the following output:")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Please assign a username value\n"))),Object(o.b)("li",{parentName:"ul"},"The updaterUsername accepts a string value as parameter",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This method will set the username property value"),Object(o.b)("li",{parentName:"ul"},"You need to assign the parameter value to the username property"))),Object(o.b)("li",{parentName:"ul"},"The updatePassword accepts a string value as parameter",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This method will set the password property value"),Object(o.b)("li",{parentName:"ul"},"You need to assign the parameter value to the password property"))),Object(o.b)("li",{parentName:"ul"},"Call the greet method (username and password are null at this point)"),Object(o.b)("li",{parentName:"ul"},"Call updaterUsername passing a username value as string"),Object(o.b)("li",{parentName:"ul"},"Call updatePassword passing a password value as string"),Object(o.b)("li",{parentName:"ul"},"Call the greet method again (you should see the expected output)")))}p.isMDXComponent=!0},470:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return r?n.a.createElement(d,i({ref:t},c,{components:r})):n.a.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);