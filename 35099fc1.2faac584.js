(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),i=(n(0),n(470)),a={},c={id:"exercises/browser/ex_34",title:"ex_34",description:"# Exercise 34",source:"@site/../docs/exercises/browser/ex_34.md",permalink:"/node_comit/docs/exercises/browser/ex_34",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_34.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_33",permalink:"/node_comit/docs/exercises/browser/ex_33"},next:{title:"ex_35",permalink:"/node_comit/docs/exercises/browser/ex_35"}},l=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-34"},"Exercise 34"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_34\n  |-- index.html\n")),Object(i.b)("h2",{id:"indexhtml"},"index.html"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(i.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(i.b)("li",{parentName:"ul"},"Add the following html code")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Events</title>\n  </head>\n  <body>\n    <button id="firstButton">Click Me!!</button>\n    <button id="secondButton">Remove event listener</button>\n  </body>\n</html>\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy and paste the code from exercise 33"),Object(i.b)("li",{parentName:"ul"},"Add the secondButton id element as shown in the html example"),Object(i.b)("li",{parentName:"ul"},"Select the secondButton id element using the ",Object(i.b)("inlineCode",{parentName:"li"},"getElementById")," method"),Object(i.b)("li",{parentName:"ul"},"Create a greeting function that will show the alert message that we're using as firstButton event listener"),Object(i.b)("li",{parentName:"ul"},"Use the greeting function as ",Object(i.b)("inlineCode",{parentName:"li"},"addEventListener")," callback"),Object(i.b)("li",{parentName:"ul"},"Add a new event handler to the secondButton element using ",Object(i.b)("inlineCode",{parentName:"li"},"onclick")),Object(i.b)("li",{parentName:"ul"},"Clicking the second button must remove the click listener from the first one"),Object(i.b)("li",{parentName:"ul"},"At the end the functionality must work this way:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"Click first button to see the alert message\nClick on the second button to remove the event listener from the first button\nClick on the first button again to make sure the event listener is gone and that we're no longer see the alert message\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If everything is working... CONGRATS!! you're rocking it with events!!")))}u.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,p=b["".concat(a,".").concat(m)]||b[m]||d[m]||i;return n?o.a.createElement(p,c({ref:t},s,{components:n})):o.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);