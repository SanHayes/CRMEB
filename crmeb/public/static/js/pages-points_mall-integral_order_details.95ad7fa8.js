(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-integral_order_details"],{"23f7":function(t,e,i){"use strict";i.r(e);var a=i("8a0e"),r=i.n(a);for(var n in a)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=r.a},"29cd":function(t,e,i){"use strict";var a=i("82a4"),r=i.n(a);r.a},4568:function(t,e,i){"use strict";i.r(e);var a=i("e444"),r=i("23f7");for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);i("29cd");var o=i("f0c5"),s=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5d170b74",null,!1,a["a"],void 0);e["default"]=s.exports},"6a71":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.getBargainDetail=function(t,e){return r.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))},e.getBargainList=function(t){return r.default.get("bargain/list",t,{noAuth:!0})},e.getBargainPoster=function(t){return r.default.post("bargain/poster",t)},e.getBargainPosterData=function(t){return r.default.get("bargain/poster_info/"+t)},e.getBargainUserCancel=function(t){return r.default.post("bargain/user/cancel",t)},e.getBargainUserList=function(t){return r.default.get("bargain/user/list",t)},e.getCombinationBannerList=function(t){return r.default.get("combination/banner_list",t,{noAuth:!0})},e.getCombinationDetail=function(t){return r.default.get("combination/detail/"+t)},e.getCombinationList=function(t){return r.default.get("combination/list",t,{noAuth:!0})},e.getCombinationPink=function(t){return r.default.get("combination/pink/"+t)},e.getCombinationPoster=function(t){return r.default.post("combination/poster",t)},e.getCombinationPosterData=function(t){return r.default.get("combination/poster_info/"+t)},e.getIntegralOrderList=function(t){return r.default.get("store_integral/order/list",t)},e.getIntegralProductDetail=function(t){return r.default.get("store_integral/detail/"+t,{},{noAuth:!0})},e.getLogisticsDetails=function(t){return r.default.get("store_integral/order/express/".concat(t))},e.getPink=function(t){return r.default.get("pink",t,{noAuth:!0})},e.getPresellList=function(t){return r.default.get("advance/list",t)},e.getSeckillDetail=function(t,e){return r.default.get("seckill/detail/"+t,e)},e.getSeckillIndexTime=function(){return r.default.get("seckill/index",{},{noAuth:!0})},e.getSeckillList=function(t,e){return r.default.get("seckill/list/"+t,e,{noAuth:!0})},e.getStoreIntegralList=function(t){return r.default.get("store_integral/list",t)},e.integralOrderConfirm=function(t){return r.default.post("store_integral/order/confirm",t)},e.integralOrderCreate=function(t){return r.default.post("store_integral/order/create",t)},e.integralOrderDetails=function(t){return r.default.get("store_integral/order/detail/".concat(t))},e.orderDel=function(t){return r.default.post("store_integral/order/del",t)},e.orderTake=function(t){return r.default.post("store_integral/order/take",t)},e.postBargainHelp=function(t){return r.default.post("bargain/help",t)},e.postBargainHelpCount=function(t){return r.default.post("bargain/help/count",t)},e.postBargainHelpList=function(t){return r.default.post("bargain/help/list",t)},e.postBargainHelpPrice=function(t){return r.default.post("bargain/help/price",t)},e.postBargainShare=function(t){return r.default.post("bargain/share",{bargainId:t})},e.postBargainStart=function(t){return r.default.post("bargain/start",{bargainId:t})},e.postBargainStartUser=function(t){return r.default.post("bargain/start/user",t)},e.postCombinationRemove=function(t){return r.default.post("combination/remove",t)},e.scombinationCode=function(t){return r.default.get("combination/code/"+t)},e.seckillCode=function(t,e){return r.default.get("seckill/code/"+t,e)},i("99af");var r=a(i("3160"))},"82a4":function(t,e,i){var a=i("8bcc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=i("4f06").default;r("b9932dc8",a,!0,{sourceMap:!1,shadowMode:!1})},"8a0e":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("acd8"),i("e25e");var r=i("6a71"),n=i("f984"),o=i("8ba8"),s=a(i("03ff")),d=a(i("7c5c")),c=a(i("cf40")),u=i("666f"),l=i("26cb"),f=a(i("66ca")),v={components:{home:s.default,orderGoods:d.default},mixins:[f.default],data:function(){return{order_id:"",evaluate:0,cartInfo:[],orderInfo:{system_store:{},_status:{}},system_store:{},isGoodsReturn:!1,status:{},isClose:!1,payMode:[{name:this.$t("微信支付"),icon:"icon-weixinzhifu",value:"weixin",title:this.$t("使用微信快捷支付"),payStatus:!0},{name:this.$t("支付宝支付"),icon:"icon-zhifubao",value:"alipay",title:this.$t("使用线上支付宝支付"),payStatus:!0},{name:this.$t("余额支付"),icon:"icon-yuezhifu",value:"yue",title:this.$t("当前可用余额："),number:0,payStatus:!0}],pay_close:!1,pay_order_id:"",totalPrice:"0",isAuto:!1,isShowAuth:!1,routineContact:"0"}},computed:(0,l.mapGetters)(["isLogin"]),onLoad:function(t){t.order_id&&this.$set(this,"order_id",t.order_id)},onShow:function(){this.isLogin?this.getOrderInfo():(0,u.toLogin)()},onHide:function(){this.isClose=!0},onReady:function(){this.$nextTick((function(){var t=this,e=new c.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:t.$t("复制成功")})}))}))},methods:{goGoodCall:function(){uni.navigateTo({url:"/pages/extension/customer_list/chat?orderId=".concat(this.order_id)})},openSubcribe:function(t){var e=t;uni.showLoading({title:this.$t("正在加载")}),(0,n.openOrderRefundSubscribe)().then((function(t){uni.hideLoading(),uni.navigateTo({url:e})})).catch((function(){uni.hideLoading()}))},onChangeFun:function(t){var e=t,i=e.action||null,a=void 0!=e.value?e.value:null;i&&this[i]&&this[i](a)},makePhone:function(){uni.makePhoneCall({phoneNumber:this.system_store.phone})},showMaoLocation:function(){if(!this.system_store.latitude||!this.system_store.longitude)return this.$util.Tips({title:this.$t("缺少经纬度信息无法查看地图！")});uni.openLocation({latitude:parseFloat(this.system_store.latitude),longitude:parseFloat(this.system_store.longitude),scale:8,name:this.system_store.name,address:this.system_store.address+this.system_store.detailed_address,success:function(){}})},payClose:function(){this.pay_close=!1},pay_open:function(){this.pay_close=!0,this.pay_order_id=this.orderInfo.order_id,this.totalPrice=this.orderInfo.pay_price},pay_complete:function(){this.pay_close=!1,this.pay_order_id="",this.getOrderInfo()},pay_fail:function(){this.pay_close=!1,this.pay_order_id=""},onLoadFun:function(){this.getOrderInfo(),this.getUserInfo()},getUserInfo:function(){var t=this;(0,o.getUserInfo)().then((function(e){t.payMode[2].number=e.data.now_money,t.$set(t,"payMode",t.payMode)}))},getOrderInfo:function(){var t=this;uni.showLoading({title:this.$t("正在加载中")}),(0,r.integralOrderDetails)(this.order_id).then((function(e){uni.hideLoading(),t.$set(t,"cartInfo",e.data)})).catch((function(e){uni.hideLoading(),t.$util.Tips({title:e},"/pages/points_mall/exchange_record")}))},goTel:function(){uni.makePhoneCall({phoneNumber:this.orderInfo.delivery_id})},getOrderStatus:function(){var t=this.orderInfo||{},e=t._status||{_type:0},i={},a=parseInt(e._type),r=t.delivery_type,n=t.seckill_id?parseInt(t.seckill_id):0,o=t.bargain_id?parseInt(t.bargain_id):0,s=t.combination_id?parseInt(t.combination_id):0;i={type:9==a?-9:a,class_status:0},1==a&&s>0&&(i.class_status=1),2==a&&"express"==r&&(i.class_status=2),2==a&&(i.class_status=3),4!=a&&0!=a||(i.class_status=4),n||o||s||3!=a&&4!=a||(i.class_status=5),this.$set(this,"status",i)},goJoinPink:function(){uni.navigateTo({url:"/pages/activity/goods_combination_status/index?id="+this.orderInfo.pink_id})},confirmOrder:function(){var t=this;uni.showModal({title:this.$t("确认收货"),content:this.$t("为保障权益，请收到货确认无误后，再确认收货"),success:function(e){var i=this;e.confirm&&(0,r.orderTake)({order_id:t.order_id}).then((function(e){return t.$util.Tips({title:i.$t("操作成功"),icon:"success"},(function(){t.getOrderInfo()}))})).catch((function(e){return t.$util.Tips({title:e})}))}})},delOrder:function(){var t=this;(0,r.orderDel)({order_id:t.order_id}).then((function(e){return t.$util.Tips({title:t.$t("删除成功"),icon:"success"},{tab:5,url:"/pages/points_mall/exchange_record"})})).catch((function(e){return t.$util.Tips({title:e})}))}}};e.default=v},"8bcc":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.qs-btn[data-v-5d170b74]{width:auto;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%;padding:0 3%;color:#aaa;border:1px solid #ddd;margin-right:%?20?%}.goodCall[data-v-5d170b74]{color:#e93323;text-align:center;width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?1?% solid #eee;font-size:%?30?%;line-height:%?86?%;background:#fff}.goodCall .icon-kefu[data-v-5d170b74]{font-size:%?36?%;margin-right:%?15?%}.order-details .header[data-v-5d170b74]{padding:0 %?30?%;height:%?150?%}.order-details .header.on[data-v-5d170b74]{background-color:#666!important}.order-details .header .pictrue[data-v-5d170b74]{width:%?110?%;height:%?110?%}.order-details .header .pictrue uni-image[data-v-5d170b74]{width:100%;height:100%}.order-details .header .data[data-v-5d170b74]{color:hsla(0,0%,100%,.8);font-size:%?24?%;margin-left:%?27?%}.order-details .header .data.on[data-v-5d170b74]{margin-left:0}.order-details .header .data .state[data-v-5d170b74]{font-size:%?30?%;font-weight:700;color:#fff;margin-bottom:%?7?%}.order-details .header .data .time[data-v-5d170b74]{margin-left:%?20?%}.order-details .nav[data-v-5d170b74]{background-color:#fff;font-size:%?26?%;color:#282828;padding:%?25?% 0}.order-details .nav .navCon[data-v-5d170b74]{padding:0 %?40?%}.order-details .nav .on[data-v-5d170b74]{color:#e93323}.order-details .nav .progress[data-v-5d170b74]{padding:0 %?65?%;margin-top:%?10?%}.order-details .nav .progress .line[data-v-5d170b74]{width:%?100?%;height:%?2?%;background-color:#939390}.order-details .nav .progress .iconfont[data-v-5d170b74]{font-size:%?25?%;color:#939390;margin-top:%?-2?%}.order-details .address[data-v-5d170b74]{font-size:%?26?%;color:#868686;background-color:#fff;margin-top:%?13?%;padding:%?35?% %?30?%}.order-details .address .name[data-v-5d170b74]{font-size:%?30?%;color:#282828;margin-bottom:%?15?%}.order-details .address .name .phone[data-v-5d170b74]{margin-left:%?40?%}.order-details .line[data-v-5d170b74]{width:100%;height:%?3?%}.order-details .line uni-image[data-v-5d170b74]{width:100%;height:100%;display:block}.order-details .wrapper[data-v-5d170b74]{background-color:#fff;margin-top:%?12?%;padding:%?30?%}.order-details .wrapper .item[data-v-5d170b74]{font-size:%?28?%;color:#282828}.order-details .wrapper .item ~ .item[data-v-5d170b74]{margin-top:%?20?%}.order-details .wrapper .item .conter[data-v-5d170b74]{color:#868686;max-width:%?460?%;height:-webkit-max-content;height:max-content;text-align:right;display:flex;flex-wrap:wrap;white-space:normal}.order-details .wrapper .item .conter .copy[data-v-5d170b74]{font-size:%?20?%;color:#333;border-radius:%?3?%;border:%?1?% solid #666;padding:%?3?% %?15?%;margin-left:%?24?%}.order-details .wrapper .actualPay[data-v-5d170b74]{border-top:%?1?% solid #eee;margin-top:%?30?%;padding-top:%?30?%}.order-details .wrapper .actualPay .money[data-v-5d170b74]{font-weight:700;font-size:%?30?%}.order-details .footer[data-v-5d170b74]{width:100%;height:%?100?%;position:fixed;bottom:0;left:0;background-color:#fff;padding:0 %?30?%;box-sizing:border-box}.order-details .footer .bnt[data-v-5d170b74]{width:%?176?%;height:%?60?%;text-align:center;line-height:%?60?%;border-radius:%?50?%;color:#fff;font-size:%?27?%}.order-details .footer .bnt.cancel[data-v-5d170b74]{color:#aaa;border:%?1?% solid #ddd}.order-details .footer .bnt ~ .bnt[data-v-5d170b74]{margin-left:%?18?%}.order-details .writeOff[data-v-5d170b74]{background-color:#fff;margin-top:%?13?%;padding-bottom:%?30?%}.order-details .writeOff .title[data-v-5d170b74]{font-size:%?30?%;color:#282828;height:%?87?%;border-bottom:1px solid #f0f0f0;padding:0 %?30?%;line-height:%?87?%}.order-details .writeOff .grayBg[data-v-5d170b74]{background-color:#f2f5f7;width:%?590?%;height:%?384?%;border-radius:%?20?% %?20?% 0 0;margin:%?50?% auto 0 auto;padding-top:%?55?%;position:relative}.order-details .writeOff .grayBg .written[data-v-5d170b74]{position:absolute;top:0;right:0;width:%?60?%;height:%?60?%}.order-details .writeOff .grayBg .written uni-image[data-v-5d170b74]{width:100%;height:100%}.order-details .writeOff .grayBg .pictrue[data-v-5d170b74]{width:%?290?%;height:%?290?%;margin:0 auto}.order-details .writeOff .grayBg .pictrue uni-image[data-v-5d170b74]{width:100%;height:100%;display:block}.order-details .writeOff .gear[data-v-5d170b74]{width:%?590?%;height:%?30?%;margin:0 auto}.order-details .writeOff .gear uni-image[data-v-5d170b74]{width:100%;height:100%;display:block}.order-details .writeOff .num[data-v-5d170b74]{background-color:#f0c34c;width:%?590?%;height:%?84?%;color:#282828;font-size:%?48?%;margin:0 auto;border-radius:0 0 %?20?% %?20?%;text-align:center;padding-top:%?4?%}.order-details .writeOff .rules[data-v-5d170b74]{margin:%?46?% %?30?% 0 %?30?%;border-top:1px solid #f0f0f0;padding-top:%?10?%}.order-details .writeOff .rules .item[data-v-5d170b74]{margin-top:%?20?%}.order-details .writeOff .rules .item .rulesTitle[data-v-5d170b74]{font-size:%?28?%;color:#282828}.order-details .writeOff .rules .item .rulesTitle .iconfont[data-v-5d170b74]{font-size:%?30?%;color:#333;margin-right:%?8?%;margin-top:%?5?%}.order-details .writeOff .rules .item .info[data-v-5d170b74]{font-size:%?28?%;color:#999;margin-top:%?7?%}.order-details .writeOff .rules .item .info .time[data-v-5d170b74]{margin-left:%?20?%}.order-details .map[data-v-5d170b74]{height:%?86?%;font-size:%?30?%;color:#282828;line-height:%?86?%;border-bottom:1px solid #f0f0f0;margin-top:%?13?%;background-color:#fff;padding:0 %?30?%}.order-details .map .place[data-v-5d170b74]{font-size:%?26?%;width:%?176?%;height:%?50?%;border-radius:%?25?%;line-height:%?50?%;text-align:center}.order-details .map .place .iconfont[data-v-5d170b74]{font-size:%?27?%;height:%?27?%;line-height:%?27?%;margin:%?2?% %?3?% 0 0}.order-details .address .name .iconfont[data-v-5d170b74]{font-size:%?34?%;margin-left:%?10?%}.refund[data-v-5d170b74]{padding:0 %?30?% %?30?%;margin-top:%?24?%;background-color:#fff}.refund .title[data-v-5d170b74]{display:flex;align-items:center;font-size:%?30?%;color:#333;height:%?86?%;border-bottom:1px solid #f5f5f5}.refund .title uni-image[data-v-5d170b74]{width:%?32?%;height:%?32?%;margin-right:%?10?%}.refund .con[data-v-5d170b74]{padding-top:%?25?%;font-size:%?28?%;color:#868686}.orderGoods[data-v-5d170b74]{background-color:#fff;margin-top:%?12?%}.orderGoods .total[data-v-5d170b74]{width:100%;height:%?86?%;padding:0 %?30?%;border-bottom:%?2?% solid #f0f0f0;font-size:%?30?%;color:#282828;line-height:%?86?%;box-sizing:border-box}',""]),t.exports=e},b822:function(t,e,i){t.exports=i.p+"static/img/line.05bf1c84.jpg"},e444:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticClass:"order-details"},[a("v-uni-view",[a("v-uni-view",{staticClass:"address"},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(t.cartInfo.real_name)),a("v-uni-text",{staticClass:"phone"},[t._v(t._s(t.cartInfo.user_phone))])],1),a("v-uni-view",[t._v(t._s(t.cartInfo.user_address))])],1),a("v-uni-view",{staticClass:"line"},[a("v-uni-image",{attrs:{src:i("b822")}})],1)],1),a("v-uni-view",{staticClass:"orderGoods"},[a("v-uni-view",{staticClass:"total"},[t._v(t._s(t.$t("共"))+t._s(t.cartInfo.total_num)+t._s(t.$t("件商品")))]),a("v-uni-view",{staticClass:"goodWrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between-wrapper",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpCon(t.cartInfo.product_id)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:t.cartInfo.image}})],1),a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"acea-row row-between-wrapper"},[a("v-uni-view",{staticClass:"name line1"},[t._v(t._s(t.cartInfo.store_name))]),a("v-uni-view",{staticClass:"num"},[t._v("x "+t._s(t.cartInfo.total_num))])],1),a("v-uni-view",{staticClass:"attr line1"},[t._v(t._s(t.cartInfo.suk))]),a("v-uni-view",{staticClass:"money font-num"},[t._v(t._s(t.cartInfo.price)+t._s(t.$t("积分")))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"wrapper"},[a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("订单编号"))+"：")]),a("v-uni-view",{staticClass:"conter acea-row row-middle row-right"},[t._v(t._s(t.cartInfo.order_id)),a("v-uni-text",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.cartInfo.order_id}},[t._v(t._s(t.$t("复制")))])],1)],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("订单状态"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.$t(t.cartInfo.status_name)))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("下单时间"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.add_time))])],1),a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("支付积分"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.total_price))])],1),t.cartInfo.mark?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("订单备注"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.mark))])],1):t._e(),t.cartInfo.remark?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("商家备注"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.remark))])],1):t._e(),"express"===t.cartInfo.delivery_type?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("快递单号"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.delivery_id))])],1):t._e(),"express"===t.cartInfo.delivery_type?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("快递公司"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.delivery_name))])],1):t._e(),"send"===t.cartInfo.delivery_type?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("送货人电话"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.delivery_id))])],1):t._e(),"send"===t.cartInfo.delivery_type?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("配送人姓名"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.delivery_name))])],1):t._e(),"fictitious"===t.cartInfo.delivery_type?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("虚拟发货"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.$t("已发货，请注意查收")))])],1):t._e(),t.cartInfo.fictitious_content?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("虚拟备注"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.fictitious_content))])],1):t._e(),"send"===t.cartInfo.delivery_type?a("v-uni-view",{staticClass:"item acea-row row-between"},[a("v-uni-view",[t._v(t._s(t.$t("配送核销码"))+"：")]),a("v-uni-view",{staticClass:"conter"},[t._v(t._s(t.cartInfo.verify_code))])],1):t._e()],1),a("v-uni-view",{staticStyle:{height:"120rpx"}}),a("v-uni-view",{staticClass:"footer acea-row row-right row-middle"},[3==t.cartInfo.status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delOrder.apply(void 0,arguments)}}},[t._v(t._s(t.$t("删除订单")))]):t._e(),t.cartInfo.delivery_id&&"express"===t.cartInfo.delivery_type?a("v-uni-navigator",{staticClass:"bnt cancel",attrs:{"hover-class":"none",url:"/pages/points_mall/logistics_details?order_id="+t.cartInfo.order_id}},[t._v(t._s(t.$t("查看物流")))]):t._e(),2==t.cartInfo.status?a("v-uni-view",{staticClass:"bnt bg-color",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmOrder.apply(void 0,arguments)}}},[t._v(t._s(t.$t("确认收货")))]):t._e()],1)],1),a("home")],1)},r=[]},f984:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.auth=r,e.openBargainSubscribe=function(){var t=r();return n([t.bargain_success])},e.openExtrctSubscribe=function(){var t=r();return n([t.user_extract])},e.openOrderRefundSubscribe=function(){var t=r();return n([t.order_refund])},e.openOrderSubscribe=function(){var t=r();return n([t.order_take,t.integral_accout])},e.openPaySubscribe=function(){var t=r();return n([t.order_pay_success,t.order_deliver_success,t.order_postage_success])},e.openPinkSubscribe=function(){var t=r();return n([t.order_user_groups_success])},e.openRechargeSubscribe=function(){var t=r();return n([t.recharge_success])},e.subscribe=n,i("d3b7");var a=i("2038");function r(){var t,e=uni.getStorageSync(a.SUBSCRIBE_MESSAGE);return t=e?JSON.parse(e):{},t}function n(t){var e=wx;return new Promise((function(i,a){e.requestSubscribeMessage({tmplIds:t,success:function(t){return i(t)},fail:function(t){return i(t)}})}))}}}]);