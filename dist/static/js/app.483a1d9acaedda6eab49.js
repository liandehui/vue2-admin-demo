webpackJsonp([2,4],{0:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}var a=n(172),o=u(a),r=n(3),i=u(r),s=n(314),l=u(s),c=n(143),d=u(c),f=n(315);n(270),n(286);var _=n(53),p=u(_),m=n(231),v=u(m);n(250),n(269);var h=n(138),E=u(h),O=n(139),D=u(O),C=n(137),S=u(C);n(281).shim(),p.default.defaults.withCredentials=!0,i.default.use(l.default),i.default.use(v.default);var P=[{path:"/",beforeEnter:function(e,t,n){n()},component:function(e){n.e(2,function(){e(n(89))})},children:[].concat((0,o.default)(E.default),(0,o.default)(D.default),(0,o.default)(S.default))},{path:"/login",component:function(e){n.e(3,function(){e(n(95))})}},{path:"*",redirect:"/"}],g=new l.default({scrollBehavior:function(){return{y:0}},routes:P});(0,f.sync)(d.default,g),new i.default({router:g,store:d.default}).$mount("#app")},32:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_BASE="UPDATE_BASE",t.FETCH_LIST_DATA="FETCH_LIST_DATA"},89:function(e,t,n){n(254);var u=n(2)(n(154),n(299),"data-v-29498ac7",null);e.exports=u.exports},94:function(e,t,n){n(252);var u=n(2)(n(159),n(297),null,null);e.exports=u.exports},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/demo",component:function(e){n.e(0,function(){e(n(90))})}},{path:"/tree",component:function(e){n.e(0,function(){e(n(92))})}},{path:"/wifi",component:function(e){n.e(0,function(){e(n(93))})}},{path:"/time",component:function(e){n.e(0,function(){e(n(91))})}}]},138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/",component:function(e){n.e(2,function(){e(n(94))})}}]},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/user",component:function(e){n.e(1,function(){e(n(98))})}},{path:"/user/base",component:function(e){n.e(1,function(){e(n(96))})}},{path:"/user/base/:id",component:function(e){n.e(1,function(){e(n(97))})}}]},140:function(e,t){"use strict";function n(e,t){e.commit,e.dispatch,e.state,t.type}Object.defineProperty(t,"__esModule",{value:!0}),t.FETCH_LIST_DATA=n},141:function(e,t,n){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(59),i=a(r),s=n(142),l=n(140),c=u(l),d={isLoading:!1,direction:"forward",ddConfig:null,ddConfigStatus:null,code:null,user:null},f=(o={},(0,i.default)(o,s.UPDATE_LOADING,function(e,t){e.isLoading=t}),(0,i.default)(o,s.UPDATE_DIRECTION,function(e,t){e.direction=t}),(0,i.default)(o,s.DDCONFIG_SUCCESS,function(e,t){e.ddConfig=t,e.ddConfigStatus=!0}),(0,i.default)(o,s.DDCONFIG_ERROR,function(e,t){e.ddConfig=null,e.ddConfigStatus=!1}),(0,i.default)(o,s.UPDATE_CODE,function(e,t){e.code=t}),(0,i.default)(o,s.LOGIN_SUCCESS,function(e,t){e.user=t}),(0,i.default)(o,s.LOGIN_ERROR,function(e,t){e.user=!1}),o);t.default={state:d,mutations:f,actions:c}},142:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_LOADING="UPDATE_LOADING",t.UPDATE_DIRECTION="UPDATE_DIRECTION",t.DDCONFIG_SUCCESS="DDCONFIG_SUCCESS",t.DDCONFIG_ERROR="DDCONFIG_ERROR",t.UPDATE_CODE="UPDATE_CODE",t.LOGIN_SUCCESS="LOGIN_SUCCESS",t.LOGIN_ERROR="LOGIN_ERROR"},143:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),o=u(a),r=n(316),i=u(r),s=n(141),l=u(s),c=n(145),d=u(c);o.default.use(i.default),t.default=new i.default.Store({modules:{app:l.default,user:d.default},plugins:[]})},144:function(e,t,n){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=e.commit,u=(e.dispatch,e.state),a=u.base;return n(l.UPDATE_BASE,{loading:!0}),d.default.get("https://demo.ibanbu.com/rest/org/KJsFzxyFbfhpogMU5JPnSP/empls/base.json",{params:(0,i.default)({},(0,f.parseParams)(t),{start:(t.currentPage-1)*t.pageSize,length:t.pageSize,"-":(new Date).getTime(),draw:t.draw+1})}).then(function(e){}).catch(function(){n(l.UPDATE_BASE,a)}).finally(function(){n(l.UPDATE_BASE,{paramsData:(0,i.default)({},t,{draw:t.draw+1}),respData:(0,i.default)({},u.base.respData,{list:[{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333}],total:4353})}),n(l.UPDATE_BASE,{loading:!1})})}Object.defineProperty(t,"__esModule",{value:!0});var r=n(24),i=a(r);t.FETCH_LIST_DATA=o;var s=n(32),l=u(s),c=n(53),d=a(c),f=n(164)},145:function(e,t,n){"use strict";function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(59),r=a(o),i=n(24),s=a(i),l=n(32),c=n(144),d=u(c),f={base:{paramsData:{draw:0,currentPage:1,pageSize:10,department:"",status0:0,status1:1,status2:2,status3:"","search[value]":""},respData:{list:[],total:0},loading:!1}},_=(0,r.default)({},l.UPDATE_BASE,function(e,t){e.base=(0,s.default)({},e.base,t)});t.default={state:f,mutations:_,actions:d}},149:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{handleSelect:function(e,t){console.log(e,t)}}}},150:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{handleOpen:function(e,t){this.$router.push(e)},handleClose:function(e,t){console.log(e,t)}}}},154:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(291),o=u(a),r=n(292),i=u(r);t.default={data:function(){return{msg:"hello vue",destroy:!1}},components:{CommonHeader:o.default,CommonMenu:i.default},beforeRouteLeave:function(e,t,n){this.destroy=!0,setTimeout(function(){n()},100)}}},159:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},components:{},methods:{}}},164:function(e,t){"use strict";function n(e){var t={};for(var n in e)""!==e[n]&&(t[n]=e[n]);return t.currentPage&&delete t.currentPage,t.pageSize&&delete t.pageSize,t}Object.defineProperty(t,"__esModule",{value:!0}),t.parseParams=n},250:function(e,t){},252:function(e,t){},254:function(e,t){},259:function(e,t){},260:function(e,t){},269:function(e,t){},291:function(e,t,n){n(259);var u=n(2)(n(149),n(304),null,null);e.exports=u.exports},292:function(e,t,n){n(260);var u=n(2)(n(150),n(305),null,null);e.exports=u.exports},297:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("this is home body")])},staticRenderFns:[]}},299:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{background:"#f0f3f3"}},[e.destroy?e._e():n("transition",{attrs:{name:"top",appear:""}},[n("common-header")],1),e._v(" "),n("el-row",[e.destroy?e._e():n("transition",{attrs:{name:"left",appear:""}},[n("el-col",{attrs:{span:4}},[n("common-menu")],1)],1),e._v(" "),e.destroy?e._e():n("transition",{attrs:{name:"right",appear:""}},[n("el-col",{attrs:{span:20}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]}},304:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"common-menu",attrs:{type:"flex",align:"middle",justify:"space-between"}},[n("el-col",{attrs:{span:12}},[n("h2",[e._v("上海云才网络科技有限公司 人力资源管理云平台"),n("small",{staticStyle:{"font-size":"12px","margin-top":"13px"}},[e._v("2.0.11.025")])])]),e._v(" "),n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"},on:{select:e.handleSelect}},[n("el-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[e._v("阿布（人事经理）")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[e._v("选项1")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[e._v("选项2")]),e._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[e._v("选项3")])],2)],1)],1)},staticRenderFns:[]}},305:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:!0,"unique-opened":!0,theme:"dark","default-active":"/"},on:{open:e.handleOpen,close:e.handleClose}},[n("el-menu-item",{attrs:{index:"/"}},[n("i",{staticClass:"el-icon-menu"}),e._v("首页")]),e._v(" "),n("el-submenu",{attrs:{index:"/user"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("员工管理\n      ")]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/user/base"}},[e._v("员工基本信息")])],1)],2),e._v(" "),n("el-submenu",{attrs:{index:"/demo"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-message"}),e._v("demo\n      ")]),e._v(" "),n("el-menu-item-group",[n("el-menu-item",{attrs:{index:"/demo"}},[e._v("过渡状态")]),e._v(" "),n("el-menu-item",{attrs:{index:"/tree"}},[e._v("树形结构拖动")]),e._v(" "),n("el-menu-item",{attrs:{index:"/wifi"}},[e._v("动态标签")]),e._v(" "),n("el-menu-item",{attrs:{index:"/time"}},[e._v("上下班时间设置")])],1)],2),e._v(" "),n("el-menu-item",{attrs:{index:"/login"}},[n("i",{staticClass:"el-icon-setting"}),e._v("退出登录")])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.483a1d9acaedda6eab49.js.map