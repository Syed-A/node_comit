(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{393:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),o=(n(0),n(470)),c={},i={id:"exercises/mongo/ex_5",title:"ex_5",description:"# Exercise 5",source:"@site/../docs/exercises/mongo/ex_5.md",permalink:"/node_comit/docs/exercises/mongo/ex_5",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/mongo/ex_5.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_4",permalink:"/node_comit/docs/exercises/mongo/ex_4"},next:{title:"ex_6",permalink:"/node_comit/docs/exercises/mongo/ex_6"}},l=[],p={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-5"},"Exercise 5"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start MongoDB server"),Object(o.b)("li",{parentName:"ul"},"Connect to MongoDB server using MongoDB shell and"),Object(o.b)("li",{parentName:"ul"},"Select comics database"),Object(o.b)("li",{parentName:"ul"},"Drop the superheroes collection"),Object(o.b)("li",{parentName:"ul"},"Drop the comics database"),Object(o.b)("li",{parentName:"ul"},"Re-create the comic database and superheroes collection"),Object(o.b)("li",{parentName:"ul"},"Insert the following documents")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{ "name": "SPIDER-MAN", "image": "spiderman.jpg" }\n{ "name": "CAPTAIN MARVEL", "image": "captainmarvel.jpg" }\n{ "name": "HULK", "image": "hulk.jpg" }\n{ "name": "THOR", "image": "thor.jpg" }\n{ "name": "IRON MAN", "image": "ironman.jpg" }\n{ "name": "DAREDEVIL", "image": "daredevil.jpg" }\n{ "name": "BLACK WIDOW", "image": "blackwidow.jpg" }\n{ "name": "CAPTAIN AMERICA", "image": "captanamerica.jpg" }\n{ "name": "WOLVERINE", "image": "wolverine.jpg" }\n{ "name": "BLACK PANTHER", "image": "blackpanther.jpg" }\n{ "name": "SUPERMAN", "image": "superman.jpg" }\n{ "name": "BATMAN", "image": "batman.jpg" }\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Query the documents with the ",Object(o.b)("inlineCode",{parentName:"li"},"BATMAN")," name"),Object(o.b)("li",{parentName:"ul"},"Query the documents with the ",Object(o.b)("inlineCode",{parentName:"li"},"HULK")," name")))}m.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),b=r,d=u["".concat(c,".").concat(b)]||u[b]||s[b]||o;return n?a.a.createElement(d,i({ref:t},p,{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);