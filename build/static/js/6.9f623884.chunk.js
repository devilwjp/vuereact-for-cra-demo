(this.webpackJsonptest2=this.webpackJsonptest2||[]).push([[6],{239:function(t,e,n){"use strict";n.r(e);var o=n(48),r=n(49),c=n(55),u=n(54),i=n(0),a=n.n(i),s=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"react-com"},a.a.createElement("h3",{style:{color:"red"}},"\u6211\u662fReact\u7ec4\u4ef6demo2"))}}]),n}(a.a.Component),l=n(70),f=n(10),p=n(1),d=Object(f.applyVueInReact)(l.a),h=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){console.log(999,this.props)}},{key:"render",value:function(){return a.a.createElement("div",{className:"react-com"},a.a.createElement("h1",null,"hello world"),a.a.createElement("h3",null,"React \u7ec4\u4ef6"),a.a.createElement(d,{prop1:"hello world",prop2:"\u4f60\u597d",$slots:{slotA:a.a.createElement("h2",{style:{color:"red"}},"\u63d2\u69fdA"),slotB:a.a.createElement("h2",{style:{color:"blue"}},"\u63d2\u69fdB")},$scopedSlots:{slotC:function(t){return a.a.createElement("div",null,t.value)}}},a.a.createElement("hr",null),a.a.createElement("h1",null,"\u6211\u662f\u666e\u901a\u7684\u63d2\u69fd")),a.a.createElement(s,null))}}]),n}(a.a.Component);e.default=Object(p.f)(h)},46:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},48:function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return o}))},49:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}n.d(e,"a",(function(){return r}))},54:function(t,e,n){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u=n(46);function i(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?Object(u.a)(t):e}function a(t){return function(){var e,n=o(t);if(r()){var c=o(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return i(this,e)}}n.d(e,"a",(function(){return a}))},55:function(t,e,n){"use strict";function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}n.d(e,"a",(function(){return r}))},56:function(t,e,n){"use strict";function o(t,e,n,o,r,c,u,i){var a,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),c&&(s._scopeId="data-v-"+c),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=a):r&&(a=i?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(s.functional){s._injectStyles=a;var l=s.render;s.render=function(t,e){return a.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return{exports:t,options:s}}n.d(e,"a",(function(){return o}))},70:function(t,e,n){"use strict";var o={name:"demo1",data:function(){return{name:"\u672c\u5730\u4f5c\u7528\u57df"}},updated:function(){console.log("updated!!!!!")},destroyed:function(){console.log("destroyed!!!!")},props:["prop1","prop2"],mounted:function(){console.log(this.$reactRouter),this.$emit("event1","11","22"),this.$emit("input",2222)}},r=n(56),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-com"},[n("h1",[t._v(t._s(this.$reactRouter.location.search))]),t._v(" "),n("h2",[t._v("\u6211\u662fVue\u7ec4\u4ef6")]),t._v(" "),n("div",[t._v("\u5c5e\u60271 "+t._s(t.prop1))]),t._v(" "),n("div",[t._v("\u5c5e\u60272 "+t._s(t.prop2))]),t._v(" "),t._t("slotA"),t._v(" "),t._t("default"),t._v(" "),t._t("slotB"),t._v(" "),t._t("slotC",null,{value:t.name})],2)}),[],!1,null,null,null);e.a=c.exports}}]);
//# sourceMappingURL=6.9f623884.chunk.js.map