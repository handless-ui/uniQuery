(function(n){function e(e){for(var a,r,u=e[0],c=e[1],s=e[2],p=0,g=[];p<u.length;p++)r=u[p],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&g.push(t[r][0]),t[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(n[a]=c[a]);d&&d(e);while(g.length)g.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var n,e=0;e<i.length;e++){for(var o=i[e],a=!0,u=1;u<o.length;u++){var c=o[u];0!==t[c]&&(a=!1)}a&&(i.splice(e--,1),n=r(r.s=o[0]))}return n}var a={},t={index:0},i=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(n){var e=[],o=t[n];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=t[n]=[e,a]}));e.push(o[2]=a);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=function(n){return r.p+"static/js/"+({"pages-api":"pages-api","pages-api-chooseImage-index":"pages-api-chooseImage-index","pages-api-dateFormat-index":"pages-api-dateFormat-index","pages-api-getLocation-index":"pages-api-getLocation-index","pages-api-getSystemInfo-index":"pages-api-getSystemInfo-index","pages-api-numberFormat-index":"pages-api-numberFormat-index","pages-api-saveAlbum-index~pages-component-behavior-vercode-index":"pages-api-saveAlbum-index~pages-component-behavior-vercode-index","pages-api-saveAlbum-index":"pages-api-saveAlbum-index","pages-component-behavior-vercode-index":"pages-component-behavior-vercode-index","pages-component":"pages-component","pages-component-calendar-index":"pages-component-calendar-index","pages-component-form-index":"pages-component-form-index","pages-component-popup-index":"pages-component-popup-index","pages-component-tabs-index":"pages-component-tabs-index","pages-component-title-index":"pages-component-title-index","pages-index":"pages-index"}[n]||n)+"."+{"pages-api":"9d872964","pages-api-chooseImage-index":"eb955c03","pages-api-dateFormat-index":"3eaa3226","pages-api-getLocation-index":"5f58b354","pages-api-getSystemInfo-index":"02886cfb","pages-api-numberFormat-index":"5b6e3808","pages-api-saveAlbum-index~pages-component-behavior-vercode-index":"e0ee65b6","pages-api-saveAlbum-index":"1a92ef6c","pages-component-behavior-vercode-index":"480ed2f0","pages-component":"2ae75f55","pages-component-calendar-index":"889f0208","pages-component-form-index":"5d35a822","pages-component-popup-index":"212c026a","pages-component-tabs-index":"1078ca70","pages-component-title-index":"032f2e1b","pages-index":"78bc7a7f"}[n]+".js"}(n);var c=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(s);var o=t[n];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}t[n]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},r.m=n,r.c=a,r.d=function(n,e,o){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)r.d(o,a,function(e){return n[e]}.bind(null,a));return o},r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="./",r.oe=function(n){throw console.error(n),n};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var d=c;i.push([0,"chunk-vendors"]),o()})({0:function(n,e,o){n.exports=o("7019")},"027f":function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};e.default=a},1118:function(n,e,o){"use strict";(function(n){var e=o("4ea4").default;o("13d5"),o("d3b7"),o("ddb0"),o("ac1f"),o("5319");var a=e(o("e143")),t={keys:function(){return[]}};n["____F52CB8F____"]=!0,delete n["____F52CB8F____"],n.__uniConfig={tabBar:{color:"#7A7E83",selectedColor:"#007AFF",borderStyle:"black",backgroundColor:"#F8F8F8",list:[{pagePath:"pages/index",iconPath:"static/home.png",selectedIconPath:"static/home_active.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/component",iconPath:"static/component.png",selectedIconPath:"static/component_active.png",text:"组件",redDot:!1,badge:""},{pagePath:"pages/api",iconPath:"static/api.png",selectedIconPath:"static/api_active.png",text:"接口",redDot:!1,badge:""}]},easycom:{autoscan:!0,custom:{"^ui-(.*)":"@/components/$1/index.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^uniad$":"@dcloudio/uni-cli-shared/components/uniad.vue","^ad-rewarded-video$":"@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue","^ad-fullscreen-video$":"@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue","^ad-interstitial$":"@dcloudio/uni-cli-shared/components/ad-interstitial.vue","^ad-interactive$":"@dcloudio/uni-cli-shared/components/ad-interactive.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uniQuery",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"}},n.__uniConfig.compilerVersion="3.99",n.__uniConfig.darkmode=!1,n.__uniConfig.themeConfig={},n.__uniConfig.uniPlatform="h5",n.__uniConfig.appId="__UNI__F52CB8F",n.__uniConfig.appName="uniQuery",n.__uniConfig.appVersion="1.0.0",n.__uniConfig.appVersionCode="100",n.__uniConfig.router={mode:"hash",base:"./"},n.__uniConfig.publicPath="./",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey=void 0,n.__uniConfig.googleMapKey=void 0,n.__uniConfig.aMapKey=void 0,n.__uniConfig.aMapSecurityJsCode=void 0,n.__uniConfig.aMapServiceHost=void 0,n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=t.keys().reduce((function(n,e){var o=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),a=t(e);return Object.assign(n[o]||(n[o]={}),a.common||a),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=o.e,a.default.component("pages-index",(function(n){var e={component:o.e("pages-index").then(function(){return n(o("99ac"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component",(function(n){var e={component:o.e("pages-component").then(function(){return n(o("c379"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api",(function(n){var e={component:o.e("pages-api").then(function(){return n(o("cc20"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component-form-index",(function(n){var e={component:o.e("pages-component-form-index").then(function(){return n(o("ce69"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component-popup-index",(function(n){var e={component:o.e("pages-component-popup-index").then(function(){return n(o("7103"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component-tabs-index",(function(n){var e={component:o.e("pages-component-tabs-index").then(function(){return n(o("c943"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component-calendar-index",(function(n){var e={component:o.e("pages-component-calendar-index").then(function(){return n(o("f7db"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component-title-index",(function(n){var e={component:o.e("pages-component-title-index").then(function(){return n(o("60f7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-component-behavior-vercode-index",(function(n){var e={component:Promise.all([o.e("pages-api-saveAlbum-index~pages-component-behavior-vercode-index"),o.e("pages-component-behavior-vercode-index")]).then(function(){return n(o("8ade"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api-getLocation-index",(function(n){var e={component:o.e("pages-api-getLocation-index").then(function(){return n(o("80ba"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api-saveAlbum-index",(function(n){var e={component:Promise.all([o.e("pages-api-saveAlbum-index~pages-component-behavior-vercode-index"),o.e("pages-api-saveAlbum-index")]).then(function(){return n(o("7380"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api-chooseImage-index",(function(n){var e={component:o.e("pages-api-chooseImage-index").then(function(){return n(o("5e38"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api-dateFormat-index",(function(n){var e={component:o.e("pages-api-dateFormat-index").then(function(){return n(o("c4a4"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api-numberFormat-index",(function(n){var e={component:o.e("pages-api-numberFormat-index").then(function(){return n(o("52bc"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),a.default.component("pages-api-getSystemInfo-index",(function(n){var e={component:o.e("pages-api-getSystemInfo-index").then(function(){return n(o("c4db"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"uniQuery 组件库项目"})},[n("pages-index",{slot:"page"})])}},meta:{id:1,name:"pages-index",isNVue:!1,maxWidth:0,pagePath:"pages/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/component",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"uniQuery 组件"})},[n("pages-component",{slot:"page"})])}},meta:{id:2,name:"pages-component",isNVue:!1,maxWidth:0,pagePath:"pages/component",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/api",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"uniQuery 接口"})},[n("pages-api",{slot:"page"})])}},meta:{id:3,name:"pages-api",isNVue:!1,maxWidth:0,pagePath:"pages/api",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/component/form/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Form 表单校验"})},[n("pages-component-form-index",{slot:"page"})])}},meta:{name:"pages-component-form-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/form/index",windowTop:44}},{path:"/pages/component/popup/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Popup 弹出层"})},[n("pages-component-popup-index",{slot:"page"})])}},meta:{name:"pages-component-popup-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/popup/index",windowTop:44}},{path:"/pages/component/tabs/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Tabs 标签页"})},[n("pages-component-tabs-index",{slot:"page"})])}},meta:{name:"pages-component-tabs-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/tabs/index",windowTop:44}},{path:"/pages/component/calendar/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Calendar 日历"})},[n("pages-component-calendar-index",{slot:"page"})])}},meta:{name:"pages-component-calendar-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/calendar/index",windowTop:44}},{path:"/pages/component/title/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"Title 标题头",navigationStyle:"custom"})},[n("pages-component-title-index",{slot:"page"})])}},meta:{name:"pages-component-title-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/title/index",windowTop:0}},{path:"/pages/component/behavior-vercode/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"BehaviorVercode 行为验证码"})},[n("pages-component-behavior-vercode-index",{slot:"page"})])}},meta:{name:"pages-component-behavior-vercode-index",isNVue:!1,maxWidth:0,pagePath:"pages/component/behavior-vercode/index",windowTop:44}},{path:"/pages/api/getLocation/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"getLocation 获取地理位置"})},[n("pages-api-getLocation-index",{slot:"page"})])}},meta:{name:"pages-api-getLocation-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/getLocation/index",windowTop:44}},{path:"/pages/api/saveAlbum/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"saveAlbum 保存图片到相册"})},[n("pages-api-saveAlbum-index",{slot:"page"})])}},meta:{name:"pages-api-saveAlbum-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/saveAlbum/index",windowTop:44}},{path:"/pages/api/chooseImage/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"chooseImage 选择图片"})},[n("pages-api-chooseImage-index",{slot:"page"})])}},meta:{name:"pages-api-chooseImage-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/chooseImage/index",windowTop:44}},{path:"/pages/api/dateFormat/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"dateFormat 日期格式化"})},[n("pages-api-dateFormat-index",{slot:"page"})])}},meta:{name:"pages-api-dateFormat-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/dateFormat/index",windowTop:44}},{path:"/pages/api/numberFormat/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"numberFormat 数字格式化"})},[n("pages-api-numberFormat-index",{slot:"page"})])}},meta:{name:"pages-api-numberFormat-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/numberFormat/index",windowTop:44}},{path:"/pages/api/getSystemInfo/index",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"getSystemInfo 获取平台信息"})},[n("pages-api-getSystemInfo-index",{slot:"page"})])}},meta:{name:"pages-api-getSystemInfo-index",isNVue:!1,maxWidth:0,pagePath:"pages/api/getSystemInfo/index",windowTop:44}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,o("c8ba"))},1320:function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("ac1f"),o("00b4"),o("4d63"),o("c607"),o("2c3e"),o("25f0");var a=function(n){return null!==n&&void 0!==n&&!("string"===typeof n&&n.length<1)},t={required:function(n,e){return!e||a(n)},maxLength:function(n,e){return!a(n)||n.length<=e},minLength:function(n,e){return!a(n)||n.length>=e},regexp:function(n,e){return!a(n)||new RegExp(e).test(n)},phone:function(n,e){return!e||(!a(n)||/^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(n))}};e.default=t},2905:function(n,e,o){"use strict";o("7a82");var a=o("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("d3b7");var t=a(o("a441"));e.default=function(){return new Promise((function(n,e){n({statusBar:{height:t.default.paddingTop},title:{height:t.default.titleHeight}})}))}},"357b":function(n,e,o){"use strict";o.d(e,"b",(function(){return a})),o.d(e,"c",(function(){return t})),o.d(e,"a",(function(){}));var a=function(){var n=this.$createElement,e=this._self._c||n;return e("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},t=[]},"4aea":function(n,e,o){"use strict";var a=o("7283"),t=o.n(a);t.a},"525b":function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("d3b7"),o("ac1f"),o("00b4");e.default=function(){return new Promise((function(n,e){/MicroMessenger/i.test(window.navigator.userAgent)&&"undefined"!==typeof wx?wx.ready((function(){wx.getLocation({type:"wgs84",success:function(e){n(e)}})})):uni.getLocation({type:"wgs84",success:function(e){n(e)}})}))}},"5a74":function(n,e,o){var a=o("24fb");e=a(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */",""]),n.exports=e},7019:function(n,e,o){"use strict";var a=o("4ea4").default;o("ac1f"),o("00b4");var t=a(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("1118"),o("1c31");var i=a(o("71ab")),r=a(o("1320")),u=a(o("bce9")),c=a(o("764f")),s=a(o("2eb3")),d=a(o("e143"));o("957a"),(0,c.default)(),/MicroMessenger/i.test(window.navigator.userAgent)&&(window.wx=s.default,uni.request({url:"http://"+window.location.hostname+":8090/JsApiSignature?url="+window.location.href.split("#")[0],method:"GET",success:function(n){s.default.config({debug:!0,appId:n.data.appId,timestamp:n.data.timestamp,nonceStr:n.data.nonceStr,signature:n.data.signature,jsApiList:["chooseImage","getLocation"]}),s.default.error((function(n){console.error(n)}))}})),d.default.config.productionTip=!1,i.default.mpType="app",d.default.use(u.default,{validate:r.default});var p=new d.default((0,t.default)({},i.default));p.$mount()},"71ab":function(n,e,o){"use strict";o.r(e);var a=o("357b"),t=o("bfb1");for(var i in t)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(i);o("4aea");var r=o("f0c5"),u=Object(r["a"])(t["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},7283:function(n,e,o){var a=o("5a74");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var t=o("4f06").default;t("d6af1338",a,!0,{sourceMap:!1,shadowMode:!1})},8875:function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("c975"),o("3c65");e.default=function(n){if(n||0===n){var e,o;n+="";var a=n.indexOf(".");if(-1==a)e=".00",o=n;else{var t=n.split(".");e="."+(t[1]+"0").substring(0,2),o=t[0]}for(var i=[],r=o.length;r>0;r-=3)i.unshift(o.substring(r>2?r-3:0,r));return i.join(",")+e}return""}},"957a":function(n,e,o){var a=o("7037").default;o("d3b7"),uni.addInterceptor({returnValue:function(n){return!n||"object"!==a(n)&&"function"!==typeof n||"function"!==typeof n.then?n:new Promise((function(e,o){n.then((function(n){return n[0]?o(n[0]):e(n[1])}))}))}})},a441:function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight,t={paddingTop:a,titleHeight:uni.upx2px(80)};e.default=t},b28c:function(n,e,o){"use strict";o("7a82");var a=o("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("c975"),o("ac1f"),o("00b4"),o("5319");var t=a(o("53ca"));e.default=function(n){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n){if("object"==(0,t.default)(n)&&n.constructor===Date)e=n;else if(!o.inputFormat&&(e=new Date(n),e+""=="Invalid Date"))return console.error("【dateFormat of uniQuery】非法的日期格式："+n,e),""}else e=new Date;var a={yyyy:0,MM:0,dd:0,HH:0,mm:0,ss:0};if(e)a.yyyy=e.getFullYear(),a.MM=e.getMonth()+1,a.dd=e.getDate(),a.HH=e.getHours(),a.mm=e.getMinutes(),a.ss=e.getSeconds();else for(var i=o.inputFormat+"",r=0,u=0;u<i.length;u++)if("yyyy"==i.substring(u,u+4))a.yyyy=+n.substring(r,r+4),r+=4,u+=3;else{var c=i.substring(u,u+2);if(["MM","dd","HH","mm","ss"].indexOf(c)>-1){var s=n[r];/\d/.test(n[r+1])?(s+=n[r+1],r+=2):r+=1,a[c]=+s,u+=1}else r+=1}a.MM<10&&(a.MM="0"+a.MM),a.dd<10&&(a.dd="0"+a.dd),a.HH<10&&(a.HH="0"+a.HH),a.mm<10&&(a.mm="0"+a.mm),a.ss<10&&(a.ss="0"+a.ss);var d=o.format||"yyyy/MM/dd";return d.replace("yyyy",a.yyyy).replace("MM",a.MM).replace("dd",a.dd).replace("HH",a.HH).replace("mm",a.mm).replace("ss",a.ss)}},bce9:function(n,e,o){"use strict";o("7a82");var a=o("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(o("2905")),i=a(o("525b")),r=a(o("e13c")),u=a(o("c62d")),c=a(o("b28c")),s=a(o("8875"));uni.$uniQuery={getSystemInfo:t.default,getLocation:i.default,saveAlbum:r.default,chooseImage:u.default,dateFormat:c.default,numberFormat:s.default},uni._uniQuery={};var d={uniQueryAPI:function(n){for(var e,o=arguments.length,a=new Array(o>1?o-1:0),t=1;t<o;t++)a[t-1]=arguments[t];return(e=uni.$uniQuery)[n].apply(e,a)}},p={install:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n.prototype)for(var o in d)n.prototype[o]=d[o];else n.mixin({methods:d});uni._uniQuery.validate=e.validate||{}}};e.default=p},bfb1:function(n,e,o){"use strict";o.r(e);var a=o("027f"),t=o.n(a);for(var i in a)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return a[n]}))}(i);e["default"]=t.a},c62d:function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("d3b7"),o("ac1f"),o("00b4"),o("2ca0"),o("5319"),o("14d9");e.default=function(){return new Promise((function(n,e){/MicroMessenger/i.test(window.navigator.userAgent)&&"undefined"!==typeof wx?wx.ready((function(){wx.chooseImage({success:function(o){var a=[];(function t(i){wx.getLocalImgData({localId:o.localIds[i-1],success:function(e){var r=null;r=e.localData.startsWith("data:image")?e.localData:"data:image/jpeg;base64,"+e.localData.replace(/\n/g,""),a.push(r),i>=o.localIds.length?n(a):t(i+1)},fail:function(n){e(n)}})})(1)},fail:function(n){e(n)}})})):function(){uni.chooseImage({success:function(e){n(e.tempFilePaths)},fail:function(n){e(n)}})}()}))}},e13c:function(n,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("d3b7");e.default=function(n){return new Promise((function(e,o){var a=document.createElement("a");a.href=n,a.download="图片.png",a.click(),e()}))}}});