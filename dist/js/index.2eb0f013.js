(function(e){function t(t){for(var r,a,i=t[0],u=t[1],d=t[2],s=0,l=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={index:0},o={index:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0b17717a":"f9e93a90","chunk-1a1ccdca":"66b5d5bb","chunk-23adc7c7":"c592a545","chunk-2722fbfa":"6abeb09c","chunk-2c4801d8":"2b2e97dc","chunk-2d0e57a1":"fb20406b","chunk-2d0f083e":"3ac7696a","chunk-2d213326":"d256e151","chunk-2d21e206":"780b2dce","chunk-2d225004":"7f8b4189","chunk-2d22d779":"7734ab87","chunk-376a59e9":"0350b3cf","chunk-3b1a6e9a":"7b423671","chunk-3ecff72b":"8ff82eae","chunk-11c49cac":"f0c9897b","chunk-2d0cfa55":"ae9698d9","chunk-42374228":"478b17eb","chunk-6ae60a04":"635ef057","chunk-6d406743":"26ed5319","chunk-8790b7b4":"3b7f729f","chunk-2d0e5b25":"23f72a24","chunk-6d8da3d6":"47ed1eca","chunk-908a034e":"83d4b0c1","chunk-b6a5e264":"6c7acf54","chunk-f104dec4":"a818474d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0b17717a":1,"chunk-1a1ccdca":1,"chunk-2722fbfa":1,"chunk-376a59e9":1,"chunk-3b1a6e9a":1,"chunk-6ae60a04":1,"chunk-f104dec4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0b17717a":"711feddd","chunk-1a1ccdca":"9731fe9b","chunk-23adc7c7":"31d6cfe0","chunk-2722fbfa":"81594d1f","chunk-2c4801d8":"31d6cfe0","chunk-2d0e57a1":"31d6cfe0","chunk-2d0f083e":"31d6cfe0","chunk-2d213326":"31d6cfe0","chunk-2d21e206":"31d6cfe0","chunk-2d225004":"31d6cfe0","chunk-2d22d779":"31d6cfe0","chunk-376a59e9":"81594d1f","chunk-3b1a6e9a":"9731fe9b","chunk-3ecff72b":"31d6cfe0","chunk-11c49cac":"31d6cfe0","chunk-2d0cfa55":"31d6cfe0","chunk-42374228":"31d6cfe0","chunk-6ae60a04":"9731fe9b","chunk-6d406743":"31d6cfe0","chunk-8790b7b4":"31d6cfe0","chunk-2d0e5b25":"31d6cfe0","chunk-6d8da3d6":"31d6cfe0","chunk-908a034e":"31d6cfe0","chunk-b6a5e264":"31d6cfe0","chunk-f104dec4":"7e2016e9"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var d=c[i],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===o))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],s=d.getAttribute("data-href");if(s===r||s===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var l=new Error;d=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e._self._c;return t("div",[t("router-view")],1)},o=[],c=n("5530"),i=n("2f62"),u={data:function(){return{}},computed:Object(c["a"])(Object(c["a"])({},Object(i["c"])(["getThemeMode"])),{},{themeName:function(){return this.getThemeMode.dark?"dark-theme":" "},rtl:function(){return this.getThemeMode.rtl?"rtl":" "}}),metaInfo:function(){return{title:"Gull",titleTemplate:"%s | Gull - Vuejs Admin Dashboard Template",bodyAttrs:{class:[this.themeName,"text-left"]},htmlAttrs:{dir:this.rtl}}}},d=u,s=n("2877"),l=Object(s["a"])(d,a,o,!1,null,null,null),p=l.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),{sidebarToggleProperties:{isSideNavOpen:!0,isSecondarySideNavOpen:!1,isActiveSecondarySideNav:!1}}),f={getSideBarToggleProperties:function(e){return e.sidebarToggleProperties}},m={changeSidebarProperties:function(e){var t=e.commit;t("toggleSidebarProperties")},changeSecondarySidebarProperties:function(e){var t=e.commit;t("toggleSecondarySidebarProperties")},changeSecondarySidebarPropertiesViaMenuItem:function(e,t){var n=e.commit;n("toggleSecondarySidebarPropertiesViaMenuItem",t)},changeSecondarySidebarPropertiesViaOverlay:function(e){var t=e.commit;t("toggleSecondarySidebarPropertiesViaOverlay")}},b={toggleSidebarProperties:function(e){return e.sidebarToggleProperties.isSideNavOpen=!e.sidebarToggleProperties.isSideNavOpen},toggleSecondarySidebarProperties:function(e){return e.sidebarToggleProperties.isSecondarySideNavOpen=!e.sidebarToggleProperties.isSecondarySideNavOpen},toggleSecondarySidebarPropertiesViaMenuItem:function(e,t){e.sidebarToggleProperties.isSecondarySideNavOpen=t,e.sidebarToggleProperties.isActiveSecondarySideNav=t},toggleSecondarySidebarPropertiesViaOverlay:function(e){e.sidebarToggleProperties.isSecondarySideNavOpen=!e.sidebarToggleProperties.isSecondarySideNavOpen}},g={state:h,getters:f,actions:m,mutations:b},v={compactSidebarToggleProperties:{isSideNavOpen:!0,isActiveSecondarySideNav:!1},compactLeftSideBarBgColor:"sidebar-dark-purple"},S={getCompactSideBarToggleProperties:function(e){return e.compactSidebarToggleProperties},getcompactLeftSideBarBgColor:function(e){return e.compactLeftSideBarBgColor}},k={changeCompactSidebarProperties:function(e){var t=e.commit;t("toggleCompactSidebarProperties")},changecompactLeftSideBarBgColor:function(e,t){var n=e.commit;n("togglecompactLeftSideBarBgColor",t)}},y={toggleCompactSidebarProperties:function(e){return e.compactSidebarToggleProperties.isSideNavOpen=!e.compactSidebarToggleProperties.isSideNavOpen},togglecompactLeftSideBarBgColor:function(e,t){e.compactLeftSideBarBgColor=t}},C={state:v,getters:S,actions:k,mutations:y},T={themeMode:{dark:!1,light:!0,semi_dark:!1,theme_color:"lite-purple",layout:"vertical-sidebar-two",rtl:!1}},P={getThemeMode:function(e){return e.themeMode}},O={changeThemeMode:function(e){var t=e.commit;t("toggleThemeMode")},changeThemeLayout:function(e,t){var n=e.commit;n("toggleThemeLayout",t)},changeThemeRtl:function(e){var t=e.commit;t("toggleThemeRtl")}},_={toggleThemeMode:function(e){e.themeMode.dark=!e.themeMode.dark},toggleThemeLayout:function(e,t){e.themeMode.layout=t},toggleThemeRtl:function(e){e.themeMode.rtl=!e.themeMode.rtl}},A={state:T,getters:P,actions:O,mutations:_},I={verticalSidebar:{isVerticalSidebar:!0,isVerticalCompact:!1,isMobileCompact:!0},verticalCompact:{isSidebarCompact:!1,isItemName:!1}},w={getVerticalSidebar:function(e){return e.verticalSidebar},getVerticalCompact:function(e){return e.verticalCompact}},N={switchSidebar:function(e,t){var n=e.commit;n("SWITCH_SIDEBAR",t)},sidebarCompact:function(e,t){var n=e.commit;n("SIDEBAR_COMPACT",t)},removeSidebarCompact:function(e,t){var n=e.commit;n("REMOVE_SIDEBAR_COMPACT",t)},mobileSidebar:function(e,t){var n=e.commit;n("MOBILE_SIDEBAR",t)}},B={SWITCH_SIDEBAR:function(e,t){e.verticalSidebar.isVerticalSidebar=!e.verticalSidebar.isVerticalSidebar,e.verticalSidebar.isVerticalCompact=!e.verticalSidebar.isVerticalCompact,console.log("test")},SIDEBAR_COMPACT:function(e,t){0==e.verticalSidebar.isVerticalSidebar&&(e.verticalCompact.isSidebarCompact=!e.verticalCompact.isSidebarCompact,e.verticalCompact.isItemName=!e.verticalCompact.isItemName),console.log("test")},REMOVE_SIDEBAR_COMPACT:function(e,t){1==e.verticalCompact.isSidebarCompact&&(e.verticalCompact.isSidebarCompact=!e.verticalCompact.isSidebarCompact,e.verticalCompact.isItemName=!e.verticalCompact.isItemName)},MOBILE_SIDEBAR:function(e,t){e.verticalSidebar.isMobileCompact=!e.verticalSidebar.isMobileCompact}},M={state:I,getters:w,actions:N,mutations:B};r["default"].use(i["a"]);var E=new i["a"].Store({modules:{largeSidebar:g,compactSidebar:C,config:A,verticalSidebar:M}}),V=n("8c4f"),x=n("323e"),j=n.n(x);r["default"].use(V["a"]);var L=[{path:"/",redirect:"/auth/signIn"},{path:"/app/pages",component:function(){return n.e("chunk-2d22d779").then(n.bind(null,"f82c"))},children:[{path:"/app/pages",component:function(){return n.e("chunk-2d225004").then(n.bind(null,"e311"))},children:[{path:"profile",component:function(){return n.e("chunk-908a034e").then(n.bind(null,"3a1f"))},meta:{requiresAuth:!0}},{path:"error",component:function(){return n.e("chunk-2d213326").then(n.bind(null,"ac3a"))},meta:{requiresAuth:!0}},{path:"icons",component:function(){return n.e("chunk-b6a5e264").then(n.bind(null,"676b"))},meta:{requiresAuth:!0}},{path:"groups",component:function(){return Promise.all([n.e("chunk-8790b7b4"),n.e("chunk-6d8da3d6")]).then(n.bind(null,"e35a"))},meta:{requiresAuth:!0}},{path:"my-group",component:function(){return Promise.all([n.e("chunk-8790b7b4"),n.e("chunk-2d0e5b25")]).then(n.bind(null,"961c"))},meta:{requiresAuth:!0}},{path:":groupid/message",component:function(){return n.e("chunk-0b17717a").then(n.bind(null,"65f5"))},meta:{requiresAuth:!0}},{path:"search-result",component:function(){return n.e("chunk-42374228").then(n.bind(null,"71dc"))},meta:{requiresAuth:!0}},{path:"pricing-table",component:function(){return n.e("chunk-2d0e57a1").then(n.bind(null,"953b"))},meta:{requiresAuth:!0}},{path:"faq",component:function(){return n.e("chunk-23adc7c7").then(n.bind(null,"4423"))},meta:{requiresAuth:!0}},{path:"blank",component:function(){return n.e("chunk-f104dec4").then(n.bind(null,"385f"))},meta:{requiresAuth:!0}}]}]},{path:"/auth",component:function(){return n.e("chunk-2d21e206").then(n.bind(null,"d3de"))},redirect:"/app/sessions/signIn",children:[{path:"signIn",component:function(){return n.e("chunk-3b1a6e9a").then(n.bind(null,"c0f0"))}},{path:"signUp",component:function(){return n.e("chunk-6ae60a04").then(n.bind(null,"511b"))}},{path:"forgot",component:function(){return n.e("chunk-2c4801d8").then(n.bind(null,"f89a"))}},{path:"reset/:token",component:function(){return n.e("chunk-1a1ccdca").then(n.bind(null,"e3e0"))}}]},{path:"*",component:function(){return n.e("chunk-2d213326").then(n.bind(null,"ac3a"))}}],q=new V["a"]({mode:"history",linkActiveClass:"open",routes:L,scrollBehavior:function(e,t,n){return{x:0,y:0}}});function D(){var e=localStorage.getItem("auth_token");return!!e}q.beforeEach((function(e,t,n){e.path&&(j.a.start(),j.a.set(.1)),n()})),q.beforeEach((function(e,t,n){e.meta.requiresAuth&&!D()?n("/app/sessions/signIn"):n()})),q.afterEach((function(){var e=document.getElementById("loading_wrap");e&&(e.style.display="none"),setTimeout((function(){return j.a.done()}),500),window.innerWidth<=1200?(E.dispatch("changeSidebarProperties"),E.getters.getSideBarToggleProperties.isSecondarySideNavOpen&&E.dispatch("changeSecondarySidebarProperties"),E.getters.getCompactSideBarToggleProperties.isSideNavOpen&&E.dispatch("changeCompactSidebarProperties")):E.getters.getSideBarToggleProperties.isSecondarySideNavOpen&&E.dispatch("changeSecondarySidebarProperties")}));var R=q,F=n("5f5b"),J=n("1dce"),U=n.n(J),z=n("caf9"),H=n("58ca"),W=n("d61f"),G=(n("78b2"),{install:function(e){e.use(F["a"]),e.component("large-sidebar",(function(){return Promise.all([n.e("chunk-3ecff72b"),n.e("chunk-2d0cfa55")]).then(n.bind(null,"6533"))})),e.component("compact-sidebar",(function(){return Promise.all([n.e("chunk-3ecff72b"),n.e("chunk-11c49cac")]).then(n.bind(null,"f579"))})),e.component("vertical-sidebar",(function(){return n.e("chunk-376a59e9").then(n.bind(null,"9758"))})),e.component("vertical-sidebar-two",(function(){return n.e("chunk-2722fbfa").then(n.bind(null,"053b"))})),e.component("customizer",(function(){return n.e("chunk-6d406743").then(n.bind(null,"5903"))})),e.component("vue-perfect-scrollbar",(function(){return n.e("chunk-2d0f083e").then(n.t.bind(null,"9d63",7))})),e.use(H["a"],{keyName:"metaInfo",attribute:"data-vue-meta",ssrAttribute:"data-vue-meta-server-rendered",tagIDKeyName:"vmid",refreshOnceOnNavigation:!0}),e.use(W["a"]),e.use(U.a),e.use(z["a"],{observer:!0,observerOptions:{rootMargin:"0px",threshold:.1}})}}),K=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"breadcrumb"},[e._t("header",(function(){return[t("h1",[e._v(e._s(e.page))]),t("ul",[t("li",[t("a",{attrs:{href:""}},[e._v(" "+e._s(e.folder)+" ")])]),t("li",[e._v(" "+e._s(e.page)+" ")])])]}))],2),t("div",{staticClass:"separator-breadcrumb border-top"})])},$=[],Q={props:["page","folder"]},X=Q,Y=Object(s["a"])(X,K,$,!1,null,null,null),Z=Y.exports,ee={data:function(){return{}},methods:{dynamic_route:function(e){return"https://patientregistry.onrender.com/api/v1".concat(e)},dynamic_auth_route:function(e){return"https://patientregistry.onrender.com/api/v1/patient"+e},tokenExpired:function(e){401==e.response.status&&"Unauthenticated."==e.response.data.message&&(localStorage.removeItem("clientToken"),localStorage.removeItem("clientDetails"),location.reload())}}},te=n("8832"),ne=n.n(te),re=n("6c42"),ae=n("c7eb"),oe=n("1da1"),ce=n("cee4"),ie=n("1940"),ue=n.n(ie),de=ce["a"].create({headers:{Authorization:"Bearer ".concat(localStorage.getItem("auth_token"))}});de.interceptors.request.use((function(e){return j.a.start(),e})),de.interceptors.response.use((function(e){return j.a.done(),e}));var se=function(){var e=Object(oe["a"])(Object(ae["a"])().mark((function e(t){var n;return Object(ae["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.response){e.next=9;break}if(401!==t.response.status||"Unauthenticated."!==t.response.data.message){e.next=8;break}n=localStorage.getItem("unique_id"),localStorage.clear(),localStorage.setItem("unique_id",n),ue()({title:"Unauthenticated",text:"Please Login or Create an Account to perform this action",icon:"error",dangerMode:!0}).then((function(e){window.location="/"})),e.next=9;break;case 8:return e.abrupt("return",t.response);case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(e){return e};de.interceptors.response.use(le,se);var pe=de,he=(n("da96"),n("a925"));r["default"].use(he["a"]);var fe="en",me={bn:n("af69"),en:n("d255"),de:n("8f52")},be=new he["a"]({locale:fe,messages:me}),ge=be;r["default"].component("paginate",ne.a);var ve={position:"top-right"};r["default"].use(re["a"],ve),r["default"].prototype.$http=pe,r["default"].component("breadcumb",Z),r["default"].mixin(ee),r["default"].use(G),r["default"].config.productionTip=!1,new r["default"]({store:E,router:R,i18n:ge,render:function(e){return e(p)}}).$mount("#app")},"78b2":function(e,t,n){},"8f52":function(e){e.exports=JSON.parse('{"dashboard":"Instrumententafel","dashboardItems":{"versionOne":"Version Eins","versionTwo":"Version zwei","versionThree":"Version drei","versionFour":"Version vier"}}')},af69:function(e){e.exports=JSON.parse('{"dashboard":"পানেল","dashboardItems":{"versionOne":"সংস্করণ এক","versionTwo":"দ্বিতীয় সংস্করণ","versionThree":"সংস্করণ তিন","versionFour":"সংস্করণ চার"}}')},d255:function(e){e.exports=JSON.parse('{"dashboard":"Dashboard","dashboardItems":{"versionOne":"Version One","versionTwo":"Version Two","versionThree":"Version Three","versionFour":"Version Four"}}')}});