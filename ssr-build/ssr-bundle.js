module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s="QfWi")}({FA6U:function(t,e,n){t.exports={home:"MseGdYp2PYS2X87nWDjYm"}},GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},NWYn:function(t,e,n){t.exports={profile:"t2Dqz32AWmw0npwPYFqRj"}},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var r,o,i,u=n("HteQ"),c=n("Y3FI"),a=n("FA6U"),f=function(){return Object(u.h)("div",{class:a.home},Object(u.h)("h1",null,"もちのあのホームページ"),Object(u.h)("h2",null,"Youtube"),Object(u.h)("p",null,Object(u.h)("a",{href:"https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ"},"https://www.youtube.com/channel/UCQZqwa5cnLN8HNpZyr3Z6vQ")),Object(u.h)("h2",null,"Twitter"),Object(u.h)("p",null,Object(u.h)("a",{href:"https://twitter.com/_noach"},"https://twitter.com/_noach")),Object(u.h)("h2",null,"Github"),Object(u.h)("p",null,Object(u.h)("a",{href:"https://github.com/MochiNoaProject/homepage"},"https://github.com/MochiNoaProject/homepage")))},p=[],l=u.options.__r,h=u.options.diffed,s=u.options.__c,_=u.options.unmount;function d(t){u.options.__h&&u.options.__h(o);var e=o.__H||(o.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function b(t){return function(t,e,n){var i=d(r++);return i.__c||(i.__c=o,i.__=[n?n(e):j(void 0,e),function(e){var n=t(i.__[0],e);i.__[0]!==n&&(i.__[0]=n,i.__c.setState({}))}]),i.__}(j,t)}function v(){p.some((function(t){if(t.__P)try{t.__H.__h.forEach(m),t.__H.__h.forEach(y),t.__H.__h=[]}catch(e){return u.options.__e(e,t.__v),!0}})),p=[]}function m(t){t.t&&t.t()}function y(t){var e=t.__();"function"==typeof e&&(t.t=e)}function O(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function j(t,e){return"function"==typeof e?e(t):e}u.options.__r=function(t){l&&l(t),r=0,(o=t.__c).__H&&(o.__H.__h.forEach(m),o.__H.__h.forEach(y),o.__H.__h=[])},u.options.diffed=function(t){h&&h(t);var e=t.__c;if(e){var n=e.__H;n&&n.__h.length&&(1!==p.push(e)&&i===u.options.requestAnimationFrame||((i=u.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(v))}},u.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(m),t.__h=t.__h.filter((function(t){return!t.__||y(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],u.options.__e(n,t.__v)}})),s&&s(t,e)},u.options.unmount=function(t){_&&_(t);var e=t.__c;if(e){var n=e.__H;if(n)try{n.__.forEach((function(t){return t.t&&t.t()}))}catch(t){u.options.__e(t,e.__v)}}};var g=n("NWYn"),C=function(t){var e=t.user,n=b(Date.now()),i=n[0],c=n[1],a=b(0),f=a[0],p=a[1];!function(t,e){var n=d(r++);O(n.__H,e)&&(n.__=t,n.__H=e,o.__H.__h.push(n))}((function(){var t=window.setInterval((function(){return c(Date.now())}),1e3);return function(){clearInterval(t)}}),[]);return Object(u.h)("div",{class:g.profile},Object(u.h)("h1",null,"Profile: ",e),Object(u.h)("p",null,"This is the user profile for a user named ",e,"."),Object(u.h)("div",null,"Current time: ",new Date(i).toLocaleString()),Object(u.h)("p",null,Object(u.h)("button",{onClick:function(){p(f+1)}},"Click Me")," Clicked ",f," ","times."))},w=n("ox/y"),x=n("bGx1"),k=function(){return Object(u.h)("div",{class:x.notfound},Object(u.h)("h1",null,"Error 404"),Object(u.h)("p",null,"That page doesn't exist."),Object(u.h)(w.Link,{href:"/"},Object(u.h)("h4",null,"Back to Home")))},U=n("ySiU"),H=function(){return Object(u.h)("header",{class:U.header},Object(u.h)("h1",null,"もちのあのホームページ"),Object(u.h)("nav",null,Object(u.h)(w.Link,{activeClassName:U.active,href:"/"},"Home"),Object(u.h)(w.Link,{activeClassName:U.active,href:"/profile"},"Me"),Object(u.h)(w.Link,{activeClassName:U.active,href:"/profile/mochinoa"},"Mochinoa")))};var M=function(){return Object(u.h)("div",{id:"app"},Object(u.h)(H,null),Object(u.h)(c.Router,{onChange:function(t){t.url}},Object(u.h)(c.Route,{path:"/",component:f}),Object(u.h)(c.Route,{path:"/profile/",component:C,user:"me"}),Object(u.h)(c.Route,{path:"/profile/:user",component:C}),Object(u.h)(k,{default:!0})))};e.default=M},Y3FI:function(t,e,n){"use strict";n.r(e),n.d(e,"subscribers",(function(){return s})),n.d(e,"getCurrentUrl",(function(){return d})),n.d(e,"route",(function(){return b})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return u}));var r=n("HteQ"),o={};function i(t,e){for(var n in e)t[n]=e[n];return t}function u(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,u=t.match(i),c={};if(u&&u[1])for(var a=u[1].split("&"),p=0;p<a.length;p++){var l=a[p].split("=");c[decodeURIComponent(l[0])]=decodeURIComponent(l.slice(1).join("="))}t=f(t.replace(i,"")),e=f(e||"");for(var h=Math.max(t.length,e.length),s=0;s<h;s++)if(e[s]&&":"===e[s].charAt(0)){var _=e[s].replace(/(^:|[+*?]+$)/g,""),d=(e[s].match(/[+*?]+$/)||o)[0]||"",b=~d.indexOf("+"),v=~d.indexOf("*"),m=t[s]||"";if(!m&&!v&&(d.indexOf("?")<0||b)){r=!1;break}if(c[_]=decodeURIComponent(m),b||v){c[_]=t.slice(s).map(decodeURIComponent).join("/");break}}else if(e[s]!==t[s]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function a(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,f(e).map(p).join(""));var e}(t),t.props}function f(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function p(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var l=null,h=[],s=[],_={};function d(){var t;return""+((t=l&&l.location?l.location:l&&l.getCurrentLocation?l.getCurrentLocation():"undefined"!=typeof location?location:_).pathname||"")+(t.search||"")}function b(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=h.length;e--;)if(h[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),l&&l[e]?l[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),v(t)}function v(t){for(var e=!1,n=0;n<h.length;n++)!0===h[n].routeTo(t)&&(e=!0);for(var r=s.length;r--;)s[r](t);return e}function m(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return b(e)}}function y(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return m(t.currentTarget||t.target||this),O(t)}function O(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function j(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(m(e))return O(t)}}while(e=e.parentNode)}}var g=!1;var C=function(t){function e(e){t.call(this,e),e.history&&(l=e.history),this.state={url:e.url||d()},g||("function"==typeof addEventListener&&(l||addEventListener("popstate",(function(){v(d())})),addEventListener("click",j)),g=!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){h.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;l&&(this.unlisten=l.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),h.splice(h.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(a).sort(c).map((function(t){var o=u(e,t.props.path,t.props);if(o){if(!1!==n){var c={url:e,matches:o};return i(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(t,c)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,o=t.onChange,i=e.url,u=this.getMatchingChildren(Object(r.toChildArray)(n),i,!0),c=u[0]||null,a=this.previousUrl;return i!==a&&(this.previousUrl=i,"function"==typeof o&&o({router:this,url:i,previous:a,active:u,current:c})),c},e}(r.Component),w=function(t){return Object(r.createElement)("a",i({onClick:y},t))},x=function(t){return Object(r.createElement)(t.component,t)};C.subscribers=s,C.getCurrentUrl=d,C.route=b,C.Router=C,C.Route=x,C.Link=w,C.exec=u,e.default=C},bGx1:function(t,e,n){t.exports={notfound:"_3HqSMCrfMSu7RQ_w0uZwwt"}},"ox/y":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=n("HteQ"),i=n("Y3FI");function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var a=e.Match=function(t){function e(){var n,r;u(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=c(this,t.call.apply(t,[this].concat(i))),r.update=function(t){r.nextUrl=t,r.setState({})},c(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){i.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){i.subscribers.splice(i.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,i.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,i.exec)(n,t.path,{})})},e}(o.Component),f=function(t){var e=t.activeClassName,n=t.path,u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,o.h)(a,{path:n||u.href},(function(t){var n=t.matches;return(0,o.h)(i.Link,r({},u,{class:[u.class||u.className,n&&e].filter(Boolean).join(" ")}))}))};e.Link=f,e.default=a,a.Link=f},ySiU:function(t,e,n){t.exports={header:"_3QGkIa41c39uaXETv7iFy1",active:"_3gItZEyVJJdR-6MacjebCk"}}});
//# sourceMappingURL=ssr-bundle.js.map