(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{307:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(1),l=n(9),a=(n(0),n(470)),i={},c={id:"exercises/browser/ex_21",title:"ex_21",description:"# Exercise 21",source:"@site/../docs/exercises/browser/ex_21.md",permalink:"/node_comit/docs/exercises/browser/ex_21",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_21.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_20",permalink:"/node_comit/docs/exercises/browser/ex_20"},next:{title:"ex_22",permalink:"/node_comit/docs/exercises/browser/ex_22"}},o=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:o};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-21"},"Exercise 21"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_21\n  |-- index.html\n")),Object(a.b)("h2",{id:"indexhtml"},"index.html"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(a.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(a.b)("li",{parentName:"ul"},"Add the following html code")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Elements</title>\n    <style>\n      .red {\n        color: red;\n      }\n\n      .green {\n        color: green;\n      }\n\n      .orange {\n        color: orange;\n      }\n    </style>\n  </head>\n  <body>\n    <ul>\n      <li>Item 1</li>\n      <li>Item 2</li>\n      <li>Item 3</li>\n      <li>Item 4</li>\n      <li>Item 5</li>\n    </ul>\n  </body>\n</html>\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select the first list item element and add the orange class"),Object(a.b)("li",{parentName:"ul"},"Using the selected element select the following element using nextElementSibling and add the orange class"),Object(a.b)("li",{parentName:"ul"},"Keep doing this until there's no more siblings"),Object(a.b)("li",{parentName:"ul"},"At the end all elements must have the orange class"),Object(a.b)("li",{parentName:"ul"},"Once you acomplish this task:"),Object(a.b)("li",{parentName:"ul"},"Now we need to go back using previousElementSibling"),Object(a.b)("li",{parentName:"ul"},"Add red class to Item 3"),Object(a.b)("li",{parentName:"ul"},"Add green class to Item 1"),Object(a.b)("li",{parentName:"ul"},"Final result on the browser must be:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<li class="green">Item 1</li>\n<li class="orange">Item 2</li>\n<li class="red">Item 3</li>\n<li class="orange">Item 4</li>\n<li class="orange">Item 5</li>\n')))}u.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),u=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,d=b["".concat(i,".").concat(p)]||b[p]||m[p]||a;return n?l.a.createElement(d,c({ref:t},s,{components:n})):l.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);