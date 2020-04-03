(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{425:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),l=(n(0),n(470)),i={},o={id:"exercises/html/ex_11",title:"ex_11",description:"# Exercise 11",source:"@site/../docs/exercises/html/ex_11.md",permalink:"/node_comit/docs/exercises/html/ex_11",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/html/ex_11.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_10",permalink:"/node_comit/docs/exercises/html/ex_10"},next:{title:"ex_12",permalink:"/node_comit/docs/exercises/html/ex_12"}},c=[{value:"index.html",id:"indexhtml",children:[]},{value:"login.html",id:"loginhtml",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"exercise-11"},"Exercise 11"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Create a new folder with the name ",Object(l.b)("inlineCode",{parentName:"li"},"ex_11")),Object(l.b)("li",{parentName:"ol"},"Create the following file structure",Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_11\n  |-- index.html\n  |-- login.html\n")))),Object(l.b)("h2",{id:"indexhtml"},"index.html"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Add a Document Title: Login"),Object(l.b)("li",{parentName:"ol"},"Add a Main Title: Login"),Object(l.b)("li",{parentName:"ol"},"Add an Horizontal Rule"),Object(l.b)("li",{parentName:"ol"},"Create a form element with the following attributes:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"action: login.html"),Object(l.b)("li",{parentName:"ul"},"method: get"),Object(l.b)("li",{parentName:"ul"},"enctype: 'application/x-www-form-urlencoded'"))),Object(l.b)("li",{parentName:"ol"},"Inside the form create the following inputs:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Create a text input with the following attributes:\nname: username\nplaceholder: username\nsize: 30\nmaxlength: 12"),Object(l.b)("li",{parentName:"ul"},"Create a password input with the following attributes:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"name: password"),Object(l.b)("li",{parentName:"ul"},"size: 30"),Object(l.b)("li",{parentName:"ul"},"maxlength: 8"),Object(l.b)("li",{parentName:"ul"},"placeholder: password"))),Object(l.b)("li",{parentName:"ul"},"Create a submit button:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"value: Login"),Object(l.b)("li",{parentName:"ul"},"name: login")))))),Object(l.b)("h2",{id:"loginhtml"},"login.html"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add a Document Title: Look at the URL")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add a Main Title: Look at the URL")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add an Horizontal Rule")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Add a paragraph with the following text: We created our first form!!")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Go to index.html")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Input a username and password")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Submit the form by clicking on the submit button")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"The browser will navigate to the login.html page")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Take a look at the URL to see the data that you just input on the previous form")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Now change the form method to be ",Object(l.b)("inlineCode",{parentName:"p"},"post")," instead of ",Object(l.b)("inlineCode",{parentName:"p"},"get")," and go over the last steps to input data, execute the form and look at the URL again to see the difference between these two methods :)"))))}p.isMDXComponent=!0},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,s=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.a.createElement(s,o({ref:t},b,{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<l;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);