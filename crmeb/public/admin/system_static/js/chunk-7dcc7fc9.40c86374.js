(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7dcc7fc9"],{"0c9f":function(t,e,r){"use strict";r.d(e,"j",(function(){return n})),r.d(e,"o",(function(){return i})),r.d(e,"m",(function(){return o})),r.d(e,"l",(function(){return s})),r.d(e,"p",(function(){return c})),r.d(e,"r",(function(){return u})),r.d(e,"s",(function(){return l})),r.d(e,"v",(function(){return d})),r.d(e,"t",(function(){return h})),r.d(e,"u",(function(){return f})),r.d(e,"q",(function(){return p})),r.d(e,"n",(function(){return m})),r.d(e,"k",(function(){return g})),r.d(e,"e",(function(){return y})),r.d(e,"h",(function(){return v})),r.d(e,"f",(function(){return b})),r.d(e,"i",(function(){return w})),r.d(e,"g",(function(){return x})),r.d(e,"a",(function(){return _})),r.d(e,"c",(function(){return D})),r.d(e,"b",(function(){return C})),r.d(e,"d",(function(){return O})),r.d(e,"w",(function(){return j}));var a=r("6b6c");function n(t){return Object(a.a)({url:"/statistic/product/get_basic",method:"get",params:t})}function i(t){return Object(a.a)({url:"/statistic/product/get_trend",method:"get",params:t})}function o(t){return Object(a.a)({url:"/statistic/product/get_product_ranking",method:"get",params:t})}function s(t){return Object(a.a)({url:"/statistic/product/get_excel",method:"get",params:t})}function c(t){return Object(a.a)({url:"/statistic/user/get_basic",method:"get",params:t})}function u(t){return Object(a.a)({url:"/statistic/user/get_trend",method:"get",params:t})}function l(t){return Object(a.a)({url:"/statistic/user/get_wechat",method:"get",params:t})}function d(t){return Object(a.a)({url:"/statistic/user/get_wechat_trend",method:"get",params:t})}function h(t){return Object(a.a)({url:"/statistic/user/get_region",method:"get",params:t})}function f(t){return Object(a.a)({url:"/statistic/user/get_sex",method:"get",params:t})}function p(t){return Object(a.a)({url:"/statistic/user/get_excel",method:"get",params:t})}function m(t){return Object(a.a)({url:"/statistic/trade/top_trade",method:"get",params:t})}function g(t){return Object(a.a)({url:"/statistic/trade/bottom_trade",method:"get",params:t})}function y(t){return Object(a.a)({url:"/statistic/order/get_basic",method:"get",params:t})}function v(t){return Object(a.a)({url:"/statistic/order/get_trend",method:"get",params:t})}function b(t){return Object(a.a)({url:"/statistic/order/get_channel",method:"get",params:t})}function w(t){return Object(a.a)({url:"/statistic/order/get_type",method:"get",params:t})}function x(t){return Object(a.a)({url:"/statistic/flow/get_record",method:"get",params:t})}function _(t){return Object(a.a)({url:"/statistic/balance/get_basic",method:"get",params:t})}function D(t){return Object(a.a)({url:"/statistic/balance/get_trend",method:"get",params:t})}function C(t){return Object(a.a)({url:"/statistic/balance/get_channel",method:"get",params:t})}function O(t){return Object(a.a)({url:"/statistic/balance/get_type",method:"get",params:t})}function j(t,e){return Object(a.a)({url:"app/wechat_qrcode/statistic/".concat(t),method:"get",params:e})}},2002:function(t,e,r){"use strict";var a=r("cc7e");r.n(a).a},"2c3e":function(t,e,r){var a=r("da84"),n=r("83ab"),i=r("9f7f").MISSED_STICKY,o=r("c6b6"),s=r("edd0"),c=r("69f3").get,u=RegExp.prototype,l=a.TypeError;n&&i&&s(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},4192:function(t,e,r){"use strict";r.r(e),r("d3b7"),r("159b"),r("b64b"),r("a9e3");var a=r("0c9f"),n=r("c71e"),i=r("313e"),o=r.n(i),s=(i={name:"ToDay",components:{echartsNew:n.a},data:function(){return{style:{height:"200px"},styleToday:{height:"130px"},legendData:["今天","昨天"],seriesData:[],timer:[],grid:{xl:12,lg:12,md:12,sm:24,xs:24},statisticsData:{},optionTodatOrder:{},orderData:{},orderUserData:{},optionData:{},listLoading:!1,optionDataOrder:{},optionOrderUser:{}}},beforeDestroy:function(){this.visitChart&&(this.visitChart.dispose(),this.visitChart=null)},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(a.n)({time:"today"}).then((function(e){t.statisticsData=e.data;var r=e.data.left,a=[],n=r.x,i=(Object.keys(r.series[0].value).forEach((function(t){a.push(Number(r.series[0].value[t]))})),[]),s=(Object.keys(r.series[1].value).forEach((function(t){i.push(Number(r.series[1].value[t]))})),[{name:"今天",type:"line",areaStyle:{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:a,symbol:"none",smooth:!0},{name:"昨天",type:"line",areaStyle:{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#BFBFBF"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#D9D9D9",lineStyle:{color:"#D9D9D9"}}},data:i,symbol:"none",smooth:!0}]),c=(t.optionData={tooltip:{trigger:"axis"},legend:{x:"1px",y:"10px",data:["今天","昨天"]},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{boundaryGap:!1,data:n,axisLine:{show:!1},show:!1}],yAxis:{show:!1},series:s},e.data.right),u=(s=c.today.x,[]),l=(e=(Object.keys(c.today.series[0].value).forEach((function(t){u.push(Number(c.today.series[0].value[t]))})),[{name:"今天",type:"line",areaStyle:{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:u,symbol:"none",smooth:!0}]),t.optionTodatOrder={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"1px",y:"10px",data:["今天"]},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},axisLine:{show:!1},xAxis:[{type:"category",boundaryGap:!1,data:s,axisLine:{show:!1},show:!1}],yAxis:{show:!1},series:e},[]);Object.keys(c.today.series[1].value).forEach((function(t){l.push(Number(c.today.series[1].value[t]))})),s=[{name:"今天",type:"line",areaStyle:{normal:{color:new o.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:.5,color:"#fff"},{offset:1,color:"#fff"}])}},itemStyle:{normal:{color:"#5B8FF9",lineStyle:{color:"#5B8FF9"}}},data:l,symbol:"none",smooth:!0}];t.optionOrderUser={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"1px",y:"10px",data:["今天"]},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},axisLine:{show:!1},xAxis:[{type:"category",boundaryGap:!1,data:n,axisLine:{show:!1},show:!1}],yAxis:{show:!1},series:s}})).catch((function(e){t.listLoading=!1,t.$Message.error(e.msg)}))},getOrder:function(){},getOrderUser:function(){}}},r("2002"),r("2877")),c=(i=Object(s.a)(i,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Row",[t.statisticsData?e("Col",t._b({staticClass:"br"},"Col",t.grid,!1),[e("div",[e("div",{staticClass:"title mb15"},[t._v("今日订单金额")]),e("div",{staticClass:"price"},[t._v("\n          ￥"),e("i",[t._v(t._s(t.statisticsData.left.series[0].money))])])]),t.optionData?e("echarts-new",{key:"1",ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionData,styles:t.style}}):t._e()],1):t._e(),t.statisticsData?e("Col",t._b({},"Col",t.grid,!1),[e("div",{staticClass:"pl25"},[e("div",{staticClass:"toDay"},[e("span",{staticClass:"toDay-title spBlock mb10"},[t._v("今日订单数")]),e("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.statisticsData.right.today.series[0].now_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.right.today.series[0].last_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("日环比：\n            "),e("i",{staticClass:"content-is",class:0<=Number(t.statisticsData.right.today.series[0].rate)?"up":"down"},[t._v(t._s(Math.floor(t.statisticsData.right.today.series[0].rate))+"%")]),e("Icon",{attrs:{color:0<=Number(t.statisticsData.right.today.series[0].rate)?"#F5222D":"#39C15B",type:0<=Number(t.statisticsData.right.today.series[0].rate)?"md-arrow-dropup":"md-arrow-dropdown"}})],1),t.optionTodatOrder?e("echarts-new",{key:"2",ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionTodatOrder,styles:t.styleToday}}):t._e(),e("span",{staticClass:"toDay-title spBlock mb10"},[t._v("本月订单数")]),e("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.statisticsData.right.month[0].now_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("上月："+t._s(t.statisticsData.right.month[0].last_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("月环比：\n            "),e("i",{staticClass:"content-is",class:0<=Number(t.statisticsData.right.month[0].rate)?"up":"down"},[t._v(t._s(Math.floor(t.statisticsData.right.month[0].rate))+"%")]),e("Icon",{attrs:{color:0<=Number(t.statisticsData.right.month[0].rate)?"#F5222D":"#39C15B",type:0<=Number(t.statisticsData.right.month[0].rate)?"md-arrow-dropup":"md-arrow-dropdown"}})],1)],1),e("div",{staticClass:"toDay",staticStyle:{border:"none"}},[e("span",{staticClass:"toDay-title spBlock mb10"},[t._v("今日支付人数")]),e("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.statisticsData.right.today.series[1].now_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("昨日："+t._s(t.statisticsData.right.today.series[1].last_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("日环比：\n            "),e("i",{staticClass:"content-is",class:0<=Number(t.statisticsData.right.today.series[1].rate)?"up":"down"},[t._v(t._s(Math.floor(t.statisticsData.right.today.series[1].rate))+"%")]),e("Icon",{attrs:{color:0<=Number(t.statisticsData.right.today.series[1].rate)?"#F5222D":"#39C15B",type:0<=Number(t.statisticsData.right.today.series[1].rate)?"md-arrow-dropup":"md-arrow-dropdown"}})],1),t.optionOrderUser?e("echarts-new",{key:"3",ref:"visitChart",attrs:{height:"100%",width:"100%","option-data":t.optionOrderUser,styles:t.styleToday}}):t._e(),e("span",{staticClass:"toDay-title spBlock mb10"},[t._v("本月支付人数")]),e("span",{staticClass:"toDay-number spBlock mb10"},[t._v(t._s(t.statisticsData.right.month[1].now_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("上月："+t._s(t.statisticsData.right.month[1].last_money))]),e("span",{staticClass:"toDay-time spBlock"},[t._v("月环比：\n            "),e("i",{staticClass:"content-is",class:0<=Number(t.statisticsData.right.month[1].rate)?"up":"down"},[t._v(t._s(Math.floor(t.statisticsData.right.month[1].rate))+"%")]),e("Icon",{attrs:{color:0<=Number(t.statisticsData.right.month[1].rate)?"#F5222D":"#39C15B",type:0<=Number(t.statisticsData.right.month[1].rate)?"md-arrow-dropup":"md-arrow-dropdown"}})],1)],1)])]):t._e()],1)],1)}),[],!1,null,"7048d0c0",null).exports,r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("b636"),r("944a"),r("0c47"),r("23dc"),r("3410"),r("d9e2"),r("131a"),r("fb6a"),r("0122")),u=r("c964"),l=(r("a15b"),r("b0c0"),r("4de4"),r("d81d"),r("61f7"));function d(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */d=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},i=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i,o,s,c;e=e&&e.prototype instanceof p?e:p,e=Object.create(e.prototype),n=new D(n||[]);return a(e,"_invoke",{value:(i=t,o=r,s=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return O()}for(s.method=t,s.arg=e;;){var r=s.delegate;if(r&&(r=function t(e,r){var a=r.method,n=e.iterator[a];return void 0===n?(r.delegate=null,"throw"===a&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),f):(a=h(n,e.iterator,r.arg),"throw"===a.type?(r.method="throw",r.arg=a.arg,r.delegate=null,f):(n=a.arg,n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)))}(r,s),r)){if(r===f)continue;return r}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===c)throw c="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);if(c="executing",r=h(i,o,s),"normal"===r.type){if(c=s.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:s.done}}"throw"===r.type&&(c="completed",s.method="throw",s.arg=r.arg)}})}),e}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function m(){}function g(){}n={};var y=(u(n,i,(function(){return this})),Object.getPrototypeOf),v=(y=y&&y(y(C([]))),y&&y!==e&&r.call(y,i)&&(n=y),g.prototype=p.prototype=Object.create(n));function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;a(this,"_invoke",{value:function(a,i){function o(){return new e((function(n,o){!function a(n,i,o,s){var u;n=h(t[n],t,i);if("throw"!==n.type)return(i=(u=n.arg).value)&&"object"==Object(c.a)(i)&&r.call(i,"__await")?e.resolve(i.__await).then((function(t){a("next",t,o,s)}),(function(t){a("throw",t,o,s)})):e.resolve(i).then((function(t){u.value=t,o(u)}),(function(t){return a("throw",t,o,s)}));s(n.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}})}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function C(t){if(t){var e,a=t[i];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length))return e=-1,(a=function a(){for(;++e<t.length;)if(r.call(t,e))return a.value=t[e],a.done=!1,a;return a.value=void 0,a.done=!0,a}).next=a}return{next:O}}function O(){return{value:void 0,done:!0}}return a(v,"constructor",{value:m.prototype=g,configurable:!0}),a(g,"constructor",{value:m,configurable:!0}),m.displayName=u(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){return t="function"==typeof t&&t.constructor,!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,o,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,a,n,i){void 0===i&&(i=Promise);var o=new w(l(e,r,a,n),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(v),u(v,s,"Generator"),u(v,i,(function(){return this})),u(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e,r=Object(t),a=[];for(e in r)a.push(e);return a.reverse(),function t(){for(;a.length;){var e=a.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},t.values=C,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return o.type="throw",o.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;0<=n;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;0<=a;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}var o=(i=i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc?null:i)?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,a,n=this.tryEntries[e];if(n.tryLoc===t)return"throw"===(r=n.completion).type&&(a=r.arg,_(n)),a}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}n={name:"transaction",components:{echartsNew:n.a},data:function(){return{grid:{xl:8,lg:8,md:8,sm:24,xs:24},options:this.$timeOptions,name:"近30天",timeVal:[],dataTime:"",list:{},optionData:{},style:{height:"400px"},getExcel:"",spinShow:!1}},created:function(){var t=new Date,e=new Date;e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),this.timeVal=[e,t],this.dataTime=Object(l.a)(e,"yyyy/MM/dd")+"-"+Object(l.a)(t,"yyyy/MM/dd")},mounted:function(){this.getStatistics()},methods:{onSeach:function(){this.getStatistics()},onchangeTime:function(t){this.timeVal=t,this.dataTime=this.timeVal.join("-"),this.name=this.dataTime},getStatistics:function(){var t=this;this.spinShow=!0,Object(a.k)({data:this.dataTime}).then(function(){var e=Object(u.a)(d().mark((function e(r){var a,n,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=r.data,n=["iconyingyee","iconjiaoyijine","iconshangpinzhifujine","icongoumaihuiyuanjine","iconchongzhijianshu","iconxianxiashouyinjine","iconzhichujine","iconyuezhifujine","iconzhifuyongjinjine","iconshangpintuikuanjine"],i=0;i<a.series.length;i++)t.$set(a.series[i],"icon",n[i]);t.list=a.series,t.getExcel=a.export,t.get(a),t.spinShow=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg),t.spinShow=!1}))},get:function(t){var e=t.series.filter((function(t){return 1===t.type})),r=e.map((function(t){return t.name})),a=["#5B8FF9","#5AD8A6","#5D7092","#F5222D","#FFAB2B","#B37FEB"],n=[];e.map((function(t,e){var r=[];Object.keys(t.value).forEach((function(e){r.push(Number(t.value[e]))})),n.push({name:t.name,type:"line",data:r,itemStyle:{normal:{color:a[e]}},smooth:!0})})),this.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"center",data:r},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!0,axisLabel:{interval:0,rotate:40,textStyle:{color:"#000000"}},data:t.x},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},series:n}},excel:function(){window.location.href=this.getExcel},getTrend:function(){var t=this;Object(a.o)({data:this.dataTime}).then(function(){var e=Object(u.a)(d().mark((function e(r){var a,n,i,o;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.data.series.map((function(t){return t.name})),n=r.data.xAxis,i=["#5B8FF9","#5AD8A6","#5D7092","#5D7092"],o=[],r.data.series.map((function(t,e){o.push({name:t.name,type:"line",data:t.value,itemStyle:{normal:{color:i[e]}}})})),t.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"1px",y:"10px",data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!0,axisLabel:{interval:0,rotate:40,textStyle:{color:"#000000"}},data:n},yAxis:{type:"value",splitLine:{show:!1},axisLine:{show:!1}},series:o};case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg)}))}}},r("85ed"),r={name:"index",components:{toDay:i,transactionFrom:Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Card",{staticClass:"ivu-mt-16",attrs:{bordered:!1,"dis-hover":""}},[r("div",{staticClass:"acea-row row-between-wrapper mb20"},[r("div",{staticClass:"header-title"},[t._v("\n      交易概况\n      "),r("Poptip",{attrs:{"word-wrap":"",width:"500",trigger:"hover",placement:"right-start"}},[r("Icon",{attrs:{type:"ios-information-circle-outline"}}),r("div",{attrs:{slot:"content"},slot:"content"},[r("div",[t._v("营业额")]),r("div",[t._v("商品支付金额、充值金额、购买付费会员金额、线下收银金额")]),r("br"),r("div",[t._v("交易毛利金额")]),r("div",[t._v("交易毛利金额 = 营业额 - 支出金额")]),r("br"),r("div",[t._v("商品支付金额")]),r("div",[t._v("选定条件下，用户购买商品的实际支付金额，包括微信支付、余额支付、支付宝支付、线下支付金额（拼团商品在成团之后计入，线下支付订单在后台确认支付后计入）")]),r("br"),r("div",[t._v("购买会员金额")]),r("div",[t._v("选定条件下，用户成功购买付费会员的金额")]),r("br"),r("div",[t._v("充值金额")]),r("div",[t._v("选定条件下，用户成功充值的金额")]),r("br"),r("div",[t._v("线下收银金额")]),r("div",[t._v("选定条件下，用户在线下扫码支付的金额")]),r("br"),r("div",[t._v("支出金额")]),r("div",[t._v("余额支付金额、支付佣金金额、商品退款金额")]),r("br"),r("div",[t._v("余额支付金额")]),r("div",[t._v("用户下单时使用余额实际支付的金额")]),r("br"),r("div",[t._v("佣金支付金额")]),r("div",[t._v("后台给推广员支付的推广佣金，以实际支付为准")]),r("br"),r("div",[t._v("商品退款金额")]),r("div",[t._v("用户成功退款的商品金额")])])],1)],1),r("div",{staticClass:"acea-row"},[r("DatePicker",{staticClass:"mr20",staticStyle:{width:"200px"},attrs:{editable:!1,clearable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"请选择时间",options:t.options},on:{"on-change":t.onchangeTime}}),r("Button",{staticClass:"mr20",attrs:{type:"primary"},on:{click:t.onSeach}},[t._v("查询")]),r("Button",{attrs:{type:"primary"},on:{click:t.excel}},[t._v("导出")])],1)]),r("div",{staticClass:"acea-row mb20"},t._l(t.list,(function(e,a){return r("div",{key:a,staticClass:"infoBox acea-row mb30"},[r("div",{staticClass:"iconCrl mr15",class:{one:a%4==0,two:a%4==1,three:a%4==2,four:a%4==3}},[r("i",{staticClass:"iconfont",class:e.icon})]),r("div",{staticClass:"info"},[r("span",{staticClass:"sp1",domProps:{textContent:t._s(e.name)}}),(t.list.length,r("span",{staticClass:"sp2",domProps:{textContent:t._s(e.money?(parseInt(100*e.money)/100).toFixed(2):"0.00")}})),r("span",{staticClass:"content-time spBlock"},[t._v("环比增长："),r("i",{staticClass:"content-is",class:0<=Number(e.rate)?"up":"down"},[t._v(t._s(e.rate)+"%")]),r("Icon",{attrs:{color:0<=Number(e.rate)?"#F5222D":"#39C15B",type:0<=Number(e.rate)?"md-arrow-dropup":"md-arrow-dropdown"}})],1)])])})),0),t.optionData?r("echarts-new",{attrs:{"option-data":t.optionData,styles:t.style,height:"100%",width:"100%"}}):t._e(),t.spinShow?r("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)}),[],!1,null,"87c69206",null).exports}},i=Object(s.a)(r,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("to-day"),t("transaction-from")],1)}),[],!1,null,"6de55f0a",null),e.default=i.exports},"4d63":function(t,e,r){var a=r("83ab"),n=r("da84"),i=r("e330"),o=r("94ca"),s=r("7156"),c=r("9112"),u=r("241c").f,l=r("3a9b"),d=r("44e7"),h=r("577e"),f=r("90d8"),p=r("9f7f"),m=r("aeb0"),g=r("cb2d"),y=r("d039"),v=r("1a2d"),b=r("69f3").enforce,w=r("2626"),x=r("b622"),_=r("fce3"),D=r("107c"),C=x("match"),O=n.RegExp,j=O.prototype,E=n.SyntaxError,k=i(j.exec),L=i("".charAt),S=i("".replace),F=i("".indexOf),B=i("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,T=/a/g,A=/a/g,I=(r=new O(T)!==T,p.MISSED_STICKY),M=p.UNSUPPORTED_Y;x=a&&(!r||I||_||D||y((function(){return A[C]=!1,O(T)!=T||O(A)==A||"/a/i"!=O(T,"i")})));if(o("RegExp",x)){function $(t,e){var r,a,n=l(j,this),i=d(t),o=void 0===e,u=[],p=t;if(!n&&i&&o&&t.constructor===$)return t;if((i||l(j,t))&&(t=t.source,o&&(e=f(p))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),p=t,i=e=_&&"dotAll"in T&&(r=!!e&&-1<F(e,"s"))?S(e,/s/g,""):e,I&&"sticky"in T&&(a=!!e&&-1<F(e,"y"))&&M&&(e=S(e,/y/g,"")),D&&(t=(o=function(t){for(var e,r=t.length,a=0,n="",i=[],o={},s=!1,c=!1,u=0,l="";a<=r;a++){if("\\"===(e=L(t,a)))e+=L(t,++a);else if("]"===e)s=!1;else if(!s)switch(!0){case"["===e:s=!0;break;case"("===e:k(N,B(t,a+1))&&(a+=2,c=!0),n+=e,u++;continue;case">"===e&&c:if(""===l||v(o,l))throw new E("Invalid capture group name");o[l]=!0,c=!(i[i.length]=[l,u]),l="";continue}c?l+=e:n+=e}return[n,i]}(t))[0],u=o[1]),o=s(O(t,e),n?this:j,$),(r||a||u.length)&&(e=b(o),r&&(e.dotAll=!0,e.raw=$(function(t){for(var e,r=t.length,a=0,n="",i=!1;a<=r;a++)"\\"===(e=L(t,a))?n+=e+L(t,++a):i||"."!==e?("["===e?i=!0:"]"===e&&(i=!1),n+=e):n+="[\\s\\S]";return n}(t),i)),a&&(e.sticky=!0),u.length&&(e.groups=u)),t!==p)try{c(o,"source",""===p?"(?:)":p)}catch(t){}return o}for(var G=u(O),P=0;G.length>P;)m($,O,G[P++]);(j.constructor=$).prototype=j,g(n,"RegExp",$,{constructor:!0})}w("RegExp")},"61f7":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return u}));var a=r("fc11"),n=r("f3f3");function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var r,a,n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(r in n)new RegExp("(".concat(r,")")).test(e)&&(a=n[r]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?a:("00"+a).substr(a.length)));return e}r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("498a"),r("d3b7"),r("b64b"),r("99af");var o={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function s(t,e){t.message=function(t){return e.replace("%s",t||"")}}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)({required:!0,message:t,type:"string"},e)}function u(t){return l.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}s(c,"请输入%s"),s(u,"%s格式不正确");var l=Object.keys(o).reduce((function(t,e){return t[e]=function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o="range"===e?{min:t[0],max:t[1]}:Object(a.a)({},e,t);return Object(n.a)(Object(n.a)({message:r.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},o),i)},s(t[e],o[e]),t}),{})},"85ed":function(t,e,r){"use strict";var a=r("c121");r.n(a).a},c121:function(t,e,r){},c607:function(t,e,r){var a=r("da84"),n=r("83ab"),i=r("fce3"),o=r("c6b6"),s=r("edd0"),c=r("69f3").get,u=RegExp.prototype,l=a.TypeError;n&&i&&s(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},c71e:function(t,e,r){"use strict";var a=r("313e"),n=r.n(a);a={name:"Index",props:{styles:{type:Object,default:null},optionData:{type:Object,default:null}},data:function(){return{myChart:null}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},watch:{optionData:{handler:function(t,e){this.handleSetVisitChart()},deep:!0}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=n.a.init(document.getElementById(this.echarts));var t=this.optionData;this.myChart.setOption(t,!0)}}},r=r("2877"),r=Object(r.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{style:this.styles,attrs:{id:this.echarts}})])}),[],!1,null,"4a0d7a27",null);e.a=r.exports},cc7e:function(t,e,r){},edd0:function(t,e,r){var a=r("13d2"),n=r("9bf2");t.exports=function(t,e,r){return r.get&&a(r.get,e,{getter:!0}),r.set&&a(r.set,e,{setter:!0}),n.f(t,e,r)}}}]);