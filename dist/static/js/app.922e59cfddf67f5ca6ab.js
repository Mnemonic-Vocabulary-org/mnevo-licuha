webpackJsonp([1],{"7TQZ":function(e,t){},"7zck":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("v-container",[t("router-view")],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},r,!1,function(e){a("YiLS")},null,null).exports,s=a("/ocq"),i=a("VU/8")({mounted:function(){this.$router.push({name:"login"})}},null,!1,null,null,null).exports,l=a("Xxa5"),c=a.n(l),u=a("mvHQ"),p=a.n(u),d=a("exGp"),v=a.n(d),m=a("mtWM"),f=a.n(m),g={remote:"http://localhost",port:8081},h=function(){return g},b=function(e){return(console.log("API: ",h()),f.a.create({baseURL:h().remote+":"+h().port,headers:{}})).post("user",e)},_={data:function(){return{login:"",email:"",password:"",error:""}},methods:{register:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b({login:e.login,mail:e.email,password:e.password});case 3:e.$router.push({name:"main"}),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(p()(t.t0)),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}},t,e,[[0,6]])}))()}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[a("panel",{attrs:{title:"REGISTER"}},[a("form",{attrs:{name:"registerForm",autocomplete:"off"}},[a("v-text-field",{attrs:{label:"Login"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}}),e._v(" "),a("br"),e._v(" "),a("v-text-field",{attrs:{label:"Email",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("br"),e._v(" "),a("v-text-field",{attrs:{label:"Password",type:"password",autocomplete:"new-password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),a("br"),e._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:e.register}},[e._v("\n      Register\n    ")])],1)],1)},staticRenderFns:[]},w=a("VU/8")(_,x,!1,null,null,null).exports,k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"grey lighten-4",flat:""}},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-subheader",[e._v("Prepended icon")])],1),e._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-select",{attrs:{items:e.states,label:"Select","single-line":"",auto:"","prepend-icon":"map","hide-details":""},model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}})],1),e._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-subheader",[e._v("Appended icon")])],1),e._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-select",{attrs:{items:e.states,label:"Select","single-line":"",auto:"","append-icon":"map","hide-details":""},model:{value:e.e2,callback:function(t){e.e2=t},expression:"e2"}})],1)],1)],1)],1)],1)},staticRenderFns:[]},M=a("VU/8")({data:function(){return{link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],e1:null,e2:"Arkansas",e3:null,e4:null,items:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}],states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"]}}},k,!1,null,null,null).exports,y={data:function(){return{loginOrMail:"",password:"",error:""}},mounted:function(){},computed:{inputCheck:function(){return console.log("wow"),!1},validator:function(e){return"fuck you"!==this.password.toLowerCase()&&"fuckyou"!==this.password.toLowerCase()||"no, FUCK YOU"}},methods:{login:function(){var e=this;return v()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b({login:e.loginOrMail,password:e.password});case 3:e.$router.push({name:"main"}),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(p()(t.t0)),e.error=t.t0.response.data.message;case 10:case"end":return t.stop()}},t,e,[[0,6]])}))()}}},C={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{column:""}},[a("panel",{attrs:{title:"LOGIN"}},[a("form",{attrs:{name:"registerForm",autocomplete:"off"}},[a("v-text-field",{attrs:{label:"Login or Mail",autocomplete:"",autofocus:""},model:{value:e.loginOrMail,callback:function(t){e.loginOrMail=t},expression:"loginOrMail"}}),e._v(" "),a("br"),e._v(" "),a("v-text-field",{attrs:{label:"Password",type:"password",autocomplete:"",rules:[e.validator]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"danger-alert",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),a("br"),e._v(" "),a("v-btn",{staticClass:"cyan",attrs:{dark:""},on:{click:e.login}},[e._v("\n      Login\n    ")])],1)],1)},staticRenderFns:[]},N=a("VU/8")(y,C,!1,null,null,null).exports;n.a.use(s.a);var S=new s.a({routes:[{path:"/",name:"root",component:i},{path:"/login",name:"login",component:N},{path:"/register",name:"register",component:w},{path:"/main",name:"main",component:M}]}),T=a("3EgV"),L=a.n(T);a("7zck");var V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs12:"",sm6:"",md4:"",lg4:"","offset-sm3":"","offset-md4":"","offset-lg4":""}},[a("div",{staticClass:"white elevation-2"},[a("v-toolbar",{staticClass:"cyan",attrs:{flat:"",dense:"",dark:""}},[a("v-toolbar-title",[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",[a("div",[a("btn-navigate",{attrs:{goTo:"register",classes:"brown"}},[e._v("\n            register\n          ")]),e._v(" "),a("btn-navigate",{attrs:{goTo:"login",classes:"green"}},[e._v("\n            login\n          ")])],1)])],1),e._v(" "),a("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[e._t("default",[e._v("\n        No slot content defined.\n      ")])],2)],1)])},staticRenderFns:[]};var R=a("VU/8")({props:["title"]},V,!1,function(e){a("VbWK")},"data-v-d1787f52",null).exports,I={props:["goTo","classes"],data:function(){return{btnName:""}},mounted:function(e){return console.log("log"),this.btnName=this.$refs.btn.innerText},computed:{isPressed:function(){return console.log(this.btnName),this.$route.path.slice(1).toLowerCase()!==this.btnName.toLowerCase()}},methods:{navigateTo:function(e){this.$router.push(e)}}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isPressed?a("v-btn",{class:e.classes,attrs:{dark:""},on:{click:function(t){e.navigateTo({name:e.goTo})}}},[a("div",{ref:"btn"},[e._t("default",[e._v("\n      no name\n    ")])],2)]):e._e()},staticRenderFns:[]};var $=a("VU/8")(I,P,!1,function(e){a("7TQZ")},"data-v-4b4972d2",null).exports;n.a.config.productionTip=!1,n.a.use(L.a),n.a.component("panel",R),n.a.component("btn-navigate",$),new n.a({el:"#app",router:S,components:{App:o},template:"<App/>"})},VbWK:function(e,t){},YiLS:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.922e59cfddf67f5ca6ab.js.map