_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery;return r||o&&(void 0!==a&&a)}},0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.r(t),r.d(t,"default",(function(){return me}));var l=r("q1tI"),s=r.n(l),u=r("8Bbg"),d=r.n(u),p=r("8Kt/"),f=r.n(p);r("9gC5");function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var b={darker:"#121217",dark:"#17171d",darkless:"#252429",black:"#1f2d3d",steel:"#273444",slate:"#3c4858",muted:"#8492a6",smoke:"#e0e6ed",snow:"#f9fafc",white:"#ffffff",red:"#ec3750",orange:"#ff8c37",yellow:"#f1c40f",green:"#33d6a6",cyan:"#5bc0de",blue:"#338eda",twitter:"#1da1f2",facebook:"#3b5998",instagram:"#e1306c"};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=y(y({},{breakpoints:[32,48,64,96,128].map((function(e){return e+"em"})),space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,16,20,24,32,48,64,96,128,160,192],initialColorModeName:"light",useColorSchemeMediaQuery:!0,colors:h({},b,{text:b.black,background:b.white,elevated:b.white,sheet:b.snow,sunken:b.smoke,border:b.smoke,placeholder:b.muted,secondary:b.slate,primary:b.red,muted:b.muted,accent:b.blue,modes:{dark:{text:b.white,background:b.dark,elevated:b.darkless,sheet:b.darkless,sunken:b.darker,border:b.darkless,placeholder:b.slate,secondary:b.muted,muted:b.muted,accent:b.cyan}}}),fonts:{heading:'"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',body:'"Phantom Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',monospace:'"SF Mono", "Roboto Mono", Menlo, Consolas, monospace'},lineHeights:{title:1,heading:1.125,subheading:1.25,caption:1.375,body:1.5},fontWeights:{body:400,bold:700,heading:700},letterSpacings:{title:"-0.009em",headline:"0.009em"},sizes:{widePlus:2048,wide:1536,layoutPlus:1200,layout:1024,copyUltra:980,copyPlus:768,copy:680,narrowPlus:600,narrow:512},radii:{small:4,default:8,extra:12,ultra:16,circle:99999},shadows:{text:"0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)",small:"0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)",card:"0 4px 8px rgba(0, 0, 0, 0.125)",elevated:"0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)"},text:{heading:{fontWeight:"bold",lineHeight:"heading"},title:{fontSize:[4,5,6],fontWeight:"bold",letterSpacing:"title",lineHeight:"title"},subtitle:{fontSize:[2,3,null,null,4],fontWeight:"body",letterSpacing:"headline",lineHeight:"subheading"},headline:{variant:"text.heading",letterSpacing:"headline",fontSize:4,mt:3,mb:3},subheadline:{variant:"text.heading",letterSpacing:"headline",fontSize:2,mt:0,mb:3},caption:{color:"muted",fontWeight:"medium",letterSpacing:"headline",lineHeight:"caption"}},alerts:{primary:{borderRadius:"default",bg:"orange",color:"background",fontWeight:"body"}},badges:{pill:{borderRadius:"circle"}},buttons:{primary:{bg:"primary",color:"background",cursor:"pointer",fontFamily:"inherit",fontWeight:"bold",borderRadius:"default",display:"inline-flex",alignItems:"center",svg:{ml:-1,mr:2}},outline:{variant:"buttons.primary",bg:"transparent",color:"primary",border:"2px solid currentColor"}},forms:{input:{bg:"elevated",color:"text",fontFamily:"inherit",borderRadius:"base",boxShadow:"small",transition:"box-shadow .125s ease-in-out",border:0,":hover,:focus":{boxShadow:"card"},"::-webkit-input-placeholder":{color:"placeholder"},"::-moz-placeholder":{color:"placeholder"},":-ms-input-placeholder":{color:"placeholder"},'&[type="search"]::-webkit-search-decoration':{display:"none"}},label:{color:"text",fontWeight:"medium"},hidden:{position:"absolute",height:"1px",width:"1px",overflow:"hidden",clip:"rect(1px, 1px, 1px, 1px)",whiteSpace:"nowrap"}},cards:{primary:{bg:"elevated",color:"text",p:[3,4],borderRadius:"extra",boxShadow:"card",overflow:"hidden",input:{boxShadow:"none !important"}},sunken:{bg:"sunken",p:[3,4],borderRadius:"extra","input, a":{bg:"header",boxShadow:"none !important"}},interactive:{variant:"cards.primary",WebkitTapHighlightColor:"transparent",transition:"transform .125s ease-in-out, box-shadow .125s ease-in-out",":hover,:focus":{transform:"scale(1.0625)",boxShadow:"elevated"}}},layout:{container:{maxWidth:["layout",null,"layoutPlus",null,"wide"],width:"100%",mx:"auto",px:3},wide:{variant:"layout.container",maxWidth:["wide",null,null,null,"widePlus"]},copy:{variant:"layout.container",maxWidth:["copy",null,null,null,"copyPlus"]},narrow:{variant:"layout.container",maxWidth:["narrow",null,"narrowPlus",null,"layout"]}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body",color:"text",margin:0,minHeight:"100vh"},h1:{variant:"text.heading",fontSize:5},h2:{variant:"text.heading",fontSize:4},h3:{variant:"text.heading",fontSize:3},h4:{variant:"text.heading",fontSize:2},h5:{variant:"text.heading",fontSize:1},h6:{variant:"text.heading",fontSize:0},p:{color:"text",fontWeight:"body",lineHeight:"body",my:3},img:{maxWidth:"100%"},hr:{border:0,borderBottom:"1px solid",borderColor:"border"},a:{color:"primary",textDecoration:"underline",textUnderlinePosition:"under",":focus,:hover":{textDecorationStyle:"wavy"}},pre:{fontFamily:"monospace",fontSize:1,p:3,color:"text",bg:"sunken",overflow:"auto",borderRadius:"default",code:h({color:"inherit",mx:0},{".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url":{color:"muted"},".comment":{fontStyle:"italic"},".property, .tag, .boolean, .number, .constant, .symbol, .deleted, .function, .class-name, .regex, .important, .variable":{color:"red"},".atrule, .attr-value, .keyword":{color:"blue"},".selector, .attr-name, .string, .char, .builtin, .inserted":{color:"orange"}})},code:{fontFamily:"monospace",fontSize:"inherit",color:"accent",bg:"sunken",borderRadius:"small",mx:1,px:1},"p > code, li > code":{color:"accent",fontSize:1},li:{my:2},table:{width:"100%",my:4,borderCollapse:"separate",borderSpacing:0,"th,td":{textAlign:"left",py:"4px",pr:"4px",pl:0,borderColor:"border",borderBottomStyle:"solid"}},th:{verticalAlign:"bottom",borderBottomWidth:"2px"},td:{verticalAlign:"top",borderBottomWidth:"1px"}}}),{},{useLocalStorage:!1,containerspec:{ml:[3,4,4,5]},headerspec:{fontSize:[5,6],width:["90vw","80vw"],my:0},paraspec:{fontSize:3,width:["80vw"]},imageh1:{mx:4,fontSize:4,textShadow:"1px 1px 5px black"},imageinfo:{mt:3,fontSize:3,a:{color:"blue"}},imgpad:{mr:[3,4,3,1]}});v.useColorSchemeMediaQuery=!1,v.colors.modes={};var w=v,x=(r("ZGD1"),function(e,t){return e===t?e:e+" \u2013 "+t}),k=function(e){var t=e.as;void 0===t&&(t=s.a.Fragment);var r=e.name;void 0===r&&(r="Hack Club");var n=e.title;void 0===n&&(n="Hack Club");var o=e.description,a=e.image,i=e.color;void 0===i&&(i="#ec3750");var c=e.manifest;return void 0===c&&(c="https://assets.hackclub.com/favicons/site.webmanifest"),s.a.createElement(t,null,s.a.createElement("meta",{key:"og_locale",property:"og:locale",content:"en_US"}),s.a.createElement("meta",{key:"og_type",property:"og:type",content:"website"}),s.a.createElement("meta",{key:"og_site",property:"og:site_name",content:r}),s.a.createElement("meta",{key:"tw_site",name:"twitter:site",content:"@hackclub"}),s.a.createElement("title",{key:"title"},x(n,r)),s.a.createElement("meta",{key:"og_title",property:"og:title",content:x(n,r)}),s.a.createElement("meta",{key:"tw_title",name:"twitter:title",content:x(n,r)}),o&&s.a.createElement(s.a.Fragment,null,s.a.createElement("meta",{key:"desc",name:"description",content:o}),s.a.createElement("meta",{key:"og_desc",property:"og:description",content:o}),s.a.createElement("meta",{key:"tw_desc",name:"twitter:description",content:o})),a&&s.a.createElement(s.a.Fragment,null,s.a.createElement("meta",{key:"og_img",property:"og:image",content:a}),s.a.createElement("meta",{key:"tw_card",name:"twitter:card",content:"summary_large_image"}),s.a.createElement("meta",{key:"tw_img",name:"twitter:image",content:a})),s.a.createElement("meta",{key:"theme_color",name:"theme-color",content:i}),s.a.createElement("meta",{key:"tile_color",name:"msapplication-TileColor",content:i}),s.a.createElement("link",{key:"safari_icon",rel:"mask-icon",href:"https://assets.hackclub.com/favicons/safari-pinned-tab.svg",color:i}),s.a.createElement("link",{key:"apple_icon",rel:"apple-touch-icon",sizes:"180x180",href:"https://assets.hackclub.com/favicons/apple-touch-icon.png"}),s.a.createElement("link",{key:"favicon_32",rel:"icon",type:"image/png",sizes:"32x32",href:"https://assets.hackclub.com/favicons/favicon-32x32.png"}),s.a.createElement("link",{key:"favicon_16",rel:"icon",type:"image/png",sizes:"16x16",href:"https://assets.hackclub.com/favicons/favicon-16x16.png"}),c&&s.a.createElement("link",{key:"manifest",rel:"manifest",href:c}))},S=r("2A+t"),O=r("qKvR"),j=r("ZdEh"),P=function(e){return"--theme-ui-"+e},_=function(e,t){return"var("+P(e)+", "+t+")"},C=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return e.filter(Boolean).join("-")},E={fontWeights:!0,lineHeights:!0},M={useCustomProperties:!0,initialColorModeName:!0,initialColorMode:!0},R=function(e,t){return"number"!==typeof t?t:E[e]?t:t+"px"},z=function(e,t,r){var n=Array.isArray(e)?[]:{};for(var o in e){var a=e[o],i=C(t,o);if(a&&"object"===typeof a)n[o]=z(a,i,o);else if(M[o])n[o]=a;else{var c=R(r||o,a);n[o]=_(i,c)}}return n},W=function(e,t){var r={};for(var n in t)if("modes"!==n){var o=C(e,n),a=t[n];a&&"object"===typeof a?r=Object.assign({},r,W(o,a)):r[P(o)]=a}return r},B=function(e){try{return window.localStorage.getItem("theme-ui-color-mode")||e}catch(h){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",h)}},T=function(e){try{window.localStorage.setItem("theme-ui-color-mode",e)}catch(h){console.warn("localStorage is disabled and color mode might not work as expected.","Please check your Site Settings.",h)}},H=function(e){void 0===e&&(e={});var t=s.a.useState(e.initialColorModeName||"default"),r=t[0],n=t[1];return s.a.useEffect((function(){var t=B();if(document.body.classList.remove("theme-ui-"+t),t||!e.useColorSchemeMediaQuery)t&&t!==r&&n(t);else{var o=function(){var e="(prefers-color-scheme: dark)",t=window.matchMedia?window.matchMedia(e):{},r=window.matchMedia?window.matchMedia("(prefers-color-scheme: light)"):{};return t.media===e&&t.matches?"dark":"(prefers-color-scheme: light)"===r.media&&r.matches?"light":"default"}();n(o)}}),[]),s.a.useEffect((function(){r&&T(r)}),[r]),[r,n]},I=function(){return Object(S.c)(O.a,{styles:function(e){return function(e){if(void 0===e&&(e={}),!e.colors||!1===e.useBodyStyles)return{};if(!1===e.useCustomProperties||!e.colors.modes)return Object(j.a)({body:{color:"text",bg:"background"}})(e);var t=e.rawColors||e.colors,r=t.modes,n=W("colors",t);return Object.keys(r).forEach((function(e){n["&.theme-ui-"+e]=W("colors",r[e])})),Object(j.a)({body:Object.assign({},n,{color:"text",bg:"background"})})(e)}(e)}})},A=function(e){var t=e.children,r=Object(S.e)(),n=H(r.theme),o=n[0],a=n[1],i=function(e,t){if(!t)return e;var r=Object(j.b)(e,"colors.modes",{});return S.d.all({},e,{colors:Object(j.b)(r,t,{})})}(r.theme||{},o),c=Object.assign({},i);!1!==i.useCustomProperties&&(c.colors=z(c.colors,"colors"));var l=Object.assign({},r,{theme:i,colorMode:o,setColorMode:a});return Object(S.c)(O.b.Provider,{value:c},Object(S.c)(S.a.Provider,{value:l},Object(S.c)(I,{key:"color-mode"}),t))},D=r("5D9J");function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var X=s.a.createContext({}),q=function(e){var t=s.a.useContext(X),r=t;return e&&(r="function"===typeof e?e(t):G(G({},t),e)),r},U=function(e){var t=q(e.components);return(s.a.createElement(X.Provider,{value:t},e.children))},Y={inlineCode:"code",wrapper:function(e){var t=e.children;return(s.a.createElement(s.a.Fragment,{},t))}},K=s.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,i=L(e,["components","mdxType","originalType","parentName"]),c=q(r),l=n,u=c["".concat(a,".").concat(l)]||c[l]||Y[l]||o;return r?s.a.createElement(u,G(G({ref:t},i),{},{components:r})):s.a.createElement(u,G({ref:t},i))}));K.displayName="MDXCreateElement";var Q={inlineCode:"code",thematicBreak:"hr",root:"div"},Z=function(e){return function(t){return Object(j.a)(Object(j.b)(t.theme,"styles."+e))(t.theme)}},J=Object(D.a)("div")(Z("div")),V={};["p","b","i","a","h1","h2","h3","h4","h5","h6","img","pre","code","ol","ul","li","blockquote","hr","em","table","tr","th","td","em","strong","del","inlineCode","thematicBreak","div","root"].forEach((function(e){var t;V[e]=Object(D.a)(Q[t=e]||t)(Z(e)),J[e]=V[e]}));var $=function(e){var t=Object.assign({},V);return Object.keys(e).forEach((function(r){t[r]=Object(D.a)(e[r])(Z(r))})),t},ee=function(e){var t=e.components,r=e.children,n=q();return Object(S.c)(U,{components:$(Object.assign({},n,t)),children:r})},te=function(e,t,r,n,o){for(t=t&&t.split?t.split("."):[t],n=0;n<t.length;n++)e=e?e[t[n]]:o;return e===o?r:e},re=[40,52,64].map((function(e){return e+"em"})),ne={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},oe={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},ae={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},ie={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ce=function(e,t){if("number"!==typeof t||t>=0)return te(e,t,t);var r=Math.abs(t),n=te(e,r,r);return"string"===typeof n?"-"+n:-1*n},le=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,t){var r;return Object.assign({},e,((r={})[t]=ce,r))}),{}),se=function(e){return function(t){void 0===t&&(t={});var r=Object.assign({},ne,t.theme||t),n={},o=function(e){return function(t){var r={},n=te(t,"breakpoints",re),o=[null].concat(n.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var a in e){var i="function"===typeof e[a]?e[a](t):e[a];if(null!=i)if(Array.isArray(i))for(var c=0;c<i.slice(0,o.length).length;c++){var l=o[c];l?(r[l]=r[l]||{},null!=i[c]&&(r[l][a]=i[c])):r[a]=i[c]}else r[a]=i}return r}}("function"===typeof e?e(r):e)(r);for(var a in o){var i=o[a],c="function"===typeof i?i(r):i;if("variant"!==a)if(c&&"object"===typeof c)n[a]=se(c)(r);else{var l=te(oe,a,a),s=te(ie,l),u=te(r,s,te(r,l,{})),d=te(le,l,te)(u,c,c);if(ae[l])for(var p=ae[l],f=0;f<p.length;f++)n[p[f]]=d;else n[l]=d}else{var m=se(te(r,c))(r);n=Object.assign({},n,m)}}return n}},ue=function(){return Object(S.c)(O.a,{styles:function(e){if(!1===e.useBodyStyles||e.styles&&!e.styles.root)return!1;var t=!1===e.useBorderBox?null:"border-box";return se({"*":{boxSizing:t},body:{margin:0,variant:"styles.root"}})(e)}})},de=function(e){var t=e.theme,r=e.components,n=e.children;return"function"===typeof Object(S.e)().setColorMode?Object(S.c)(S.b,{theme:t},Object(S.c)(ee,{components:r,children:n})):Object(S.c)(S.b,{theme:t},Object(S.c)(A,null,Object(S.c)(ue),Object(S.c)(ee,{components:r,children:n})))},pe=l.createElement;function fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(h){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var me=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(c,e);var t,r,a,i=fe(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.apply(this,arguments)}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return pe(de,{theme:w},pe(k,{name:"Hack Club Nigeria",title:"Hack Club Nigeria",as:f.a}),pe(f.a,null,pe("meta",{name:"twitter:site",content:"@"})," "),pe(t,r))}}])&&n(t.prototype,r),a&&n(t,a),c}(d.a)},"5fIB":function(e,t,r){var n=r("7eYB");e.exports=function(e){if(Array.isArray(e))return n(e)}},"8Bbg":function(e,t,r){e.exports=r("B5Ud")},"8Kt/":function(e,t,r){"use strict";r("oI91");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),c=r("FYa8"),l=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=p.length;c<l;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)r.has(s)?a=!1:r.add(s);else{var u=o.props[s],d=n[s]||new Set;d.has(u)?a=!1:(d.add(u),n[s]=d)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function m(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:f,headManager:n,inAmpMode:(0,l.isInAmpMode)(r)},t)}m.rewind=function(){};var h=m;t.default=h},"9gC5":function(e,t,r){},B5Ud:function(e,t,r){"use strict";var n=r("vJKn"),o=r("/GRZ"),a=r("i2R6"),i=r("48fX"),c=r("tCBg"),l=r("T0f4"),s=r("qVT1");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=l(e);if(t){var o=l(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}var d=r("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=g,t.default=void 0;var p=d(r("q1tI")),f=r("g/15");function m(e){return h.apply(this,arguments)}function h(){return(h=s(n.mark((function e(t){var r,o,a;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,o=t.ctx,e.next=3,(0,f.loadGetInitialProps)(r,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=f.AppInitialProps,t.NextWebVitalsMetric=f.NextWebVitalsMetric;var b=function(e){i(r,e);var t=u(r);function r(){return o(this,r),t.apply(this,arguments)}return a(r,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return(p.default.createElement(r,Object.assign({},n,o||a?{}:{url:g(t)})))}}]),r}(p.default.Component);function g(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return n},get pathname(){return t},get asPath(){return r},back:function(){e.back()},push:function(t,r){return e.push(t,r)},pushTo:function(t,r){var n=r?t:"",o=r||t;return e.push(n,o)},replace:function(t,r){return e.replace(t,r)},replaceTo:function(t,r){var n=r?t:"",o=r||t;return e.replace(n,o)}}}t.default=b,b.origGetInitialProps=m,b.getInitialProps=m},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},Xuae:function(e,t,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),i=r("qXWd"),c=r("48fX"),l=r("tCBg"),s=r("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}t.__esModule=!0,t.default=void 0;var d=r("q1tI"),p=!1,f=function(e){c(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,p&&a._hasHeadManager&&(a.props.headManager.mountedInstances.add(i(a)),a.emitChange()),a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=f},ZGD1:function(e,t,r){},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),i=r("kG2m");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},oI91:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}},[[0,0,1,2,3]]]);