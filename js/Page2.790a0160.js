webpackJsonp([8,10],{162:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,u=t,a=r;n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,u);if(void 0!==l){if("value"in l)return l.value;var i=l.get;if(void 0===i)return;return i.call(a)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=u,r=a,n=!0,l=c=void 0}},i=r(1),c=n(i),f=r(79),p=(n(f),r(67)),s=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return u(t,e),a(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",null,c["default"].createElement("p",null,"This is Page2"),c["default"].createElement("p",null,c["default"].createElement(p.Link,{to:"/page1"},"=> Goto Page1")),c["default"].createElement("p",null,c["default"].createElement("a",{href:"#",onClick:function(){e.props.history.goBack()}},"GoBack")))}}]),t}(i.Component);t["default"]=s,e.exports=t["default"]}});