webpackJsonp([5],{"4Jzr":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".player[data-v-2916207a]{text-align:center;margin-top:100px;font-family:sans-serif}",""])},"9VH/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("sU3F"),n=a("JMCu"),s=!1;var i=function(t){s||a("arE2")},u=a("VU/8")(r.a,n.a,!1,i,"data-v-2916207a",null);u.options.__file="pages\\index\\_id.vue",e.default=u.exports},JMCu:function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"player"},[e("h1",[this._v("#"+this._s(this.number))]),e("h2",[this._v(this._s(this.name))])])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};e.a=n},arE2:function(t,e,a){var r=a("4Jzr");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("7134dc09",r,!1,{sourceMap:!1})},sU3F:function(t,e,a){"use strict";e.a={validate:function(t){var e=t.params;return!isNaN(+e.id)},asyncData:function(t){var e=t.params,a=t.env,r=t.error,n=a.users.find(function(t){return String(t.id)===e.id});return n||r({message:"User not found",statusCode:404})},head:function(){return{title:this.name}}}}});