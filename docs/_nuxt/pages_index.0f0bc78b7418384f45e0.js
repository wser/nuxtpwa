webpackJsonp([2],{"+wgS":function(t,e,i){"use strict";e.a={data:function(){return{valid:!0,formEmail:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],formPassword:""}},methods:{clear:function(){this.$refs.form.reset()},emailLogin:function(){var t=this;this.$store.dispatch("signInWithEmailAndPassword",{email:this.formEmail,password:this.formPassword}).then(function(){t.clear()}).catch(function(t){console.log(t.message)})},googleSignUp:function(){this.$store.dispatch("signInWithGoogle").then(function(){console.log("inside then statement on login")}).catch(function(t){console.log(t.message)})}}}},"/TYz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("wwv+"),s=i("Pmg7"),n=!1;var r=function(t){n||i("OoDf")},o=i("VU/8")(a.a,s.a,!1,r,"data-v-1b011d9c",null);o.options.__file="pages\\index.vue",e.default=o.exports},"3CQj":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".flexWrapper[data-v-1b011d9c]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.title[data-v-1b011d9c]{font-size:2.5em!important}@media (min-width:750px){.title[data-v-1b011d9c]{font-size:3.5em!important}}.page-enter-active[data-v-1b011d9c],.page-leave-active[data-v-1b011d9c]{-webkit-transition:opacity .4s,-webkit-transform .4s;transition:opacity .4s,-webkit-transform .4s;transition:opacity .4s,transform .4s;transition:opacity .4s,transform .4s,-webkit-transform .4s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.page-enter[data-v-1b011d9c],.page-leave-active[data-v-1b011d9c]{opacity:.5;-webkit-transform:rotateY(100deg);transform:rotateY(100deg)}.container[data-v-1b011d9c]{font-family:sans-serif;-webkit-box-sizing:border-box;box-sizing:border-box}.left[data-v-1b011d9c]{width:50%;position:absolute;top:0;left:0}.right[data-v-1b011d9c]{width:50%;position:absolute;top:0;right:0}.players[data-v-1b011d9c]{list-style-type:none;margin:0;padding:0}.players li a[data-v-1b011d9c]{display:block;border:1px solid #ddd;padding:10px;text-align:left;color:#222;text-decoration:none}.players li a[data-v-1b011d9c]:hover{color:orange}",""])},"56lY":function(t,e,i){"use strict";var a=i("+wgS"),s=i("t+0K"),n=!1;var r=function(t){n||i("zdG1")},o=i("VU/8")(a.a,s.a,!1,r,null,null);o.options.__file="components\\LoginForm.vue",e.a=o.exports},"7YgM":function(t,e){t.exports={name:"irapp",version:"1.0.0",description:"Best tool one auditor can use",author:"wser <w.web.dev@gmail.com>",private:!0,dependencies:{"@nuxtjs/pwa":"latest","@nuxtjs/vuetify":"^0.4.1","cross-env":"^5.1.4",firebase:"^4.12.0",himalaya:"^1.1.0",nuxt:"latest","simple-encryptor":"^1.2.0","vue-mce":"^1.5.0"},scripts:{dev:"nuxt",build:"nuxt build",start:"nuxt start",generate:"nuxt generate",lint:"eslint --ext .js,.vue --ignore-path .gitignore .",precommit:"npm run lint","build:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt build","generate:github":"cross-env DEPLOY_ENV=GH_PAGES nuxt generate",deploy:"git push"},devDependencies:{"babel-eslint":"^7.1.1",eslint:"^3.15.0","eslint-config-standard":"^6.2.1","eslint-loader":"^1.6.1","eslint-plugin-html":"^2.0.0","eslint-plugin-promise":"^3.4.1","eslint-plugin-standard":"^2.0.1",pug:"^2.0.3",stylus:"^0.54.5","stylus-loader":"^3.0.2"}}},OoDf:function(t,e,i){var a=i("3CQj");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("33af0376",a,!1,{sourceMap:!1})},Pmg7:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("h1",{staticClass:"title"},[t._v("\n    irapp.ga\n  ")]),i("h2",{staticClass:"subtitle"},[t._v("\n    Best tool one auditor can use\n  ")]),i("v-layout",[i("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[i("div",{staticClass:"wrapper"},[t.$store.state.user?i("div",{staticClass:"flexWrapper"},[i("h4",{staticClass:"blue--text"},[t._v("\n            You're logged in!\n            "),i("v-btn",{staticClass:"blue white--text",attrs:{icon:""}},[i("v-icon",[t._v("thumb_up")])],1)],1)]):i("div",[i("login-form")],1)])])],1),i("v-card",{staticClass:"container"},[i("div",{staticClass:"left"},[i("h2",[i("nuxt-link",{attrs:{to:"/"}},[t._v("Players")])],1),i("ul",{staticClass:"players"},t._l(t.users,function(e){return i("li",{key:e.id},[i("nuxt-link",{attrs:{to:"/"+e.id}},[t._v(t._s(e.name))])],1)}))]),i("div",{staticClass:"right"},[i("nuxt-child",{key:t.$route.params.id})],1)])],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"U/5S":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},"t+0K":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",[i("v-flex",{attrs:{"text-xs-center":"",xs12:"",sm6:"","offset-sm3":""}},[i("h2",{staticClass:"title"},[t._v("Sign In with Google")]),i("v-btn",{staticClass:"signIn mb-2",attrs:{primary:""},nativeOn:{click:function(e){return t.googleSignUp(e)}}},[t._v("Google Sign In")]),i("br"),i("h2",{staticClass:"title"},[t._v("Sign In with Email")]),i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,required:""},model:{value:t.formEmail,callback:function(e){t.formEmail=e},expression:"formEmail"}}),i("v-text-field",{attrs:{name:"input-pass",label:"Enter your password",counter:"",required:""},model:{value:t.formPassword,callback:function(e){t.formPassword=e},expression:"formPassword"}}),i("v-btn",{attrs:{disabled:!t.valid},on:{click:t.emailLogin}},[t._v("\n      submit\n    ")]),i("v-btn",{on:{click:t.clear}},[t._v("clear")])],1)],1)],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"wwv+":function(t,e,i){"use strict";var a=i("7YgM"),s=i.n(a),n=i("56lY");e.a={asyncData:function(t){return{users:t.env.users,pkg:s.a}},components:{LoginForm:n.a}}},zdG1:function(t,e,i){var a=i("U/5S");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("17770251",a,!1,{sourceMap:!1})}});