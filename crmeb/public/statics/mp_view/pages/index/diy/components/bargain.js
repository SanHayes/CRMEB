(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/diy/components/bargain"],{"3c46":function(t,n,i){"use strict";var a;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return e})),i.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},e=[]},5797:function(t,n,i){"use strict";i.r(n);var a=i("d2c7"),o=i.n(a);for(var e in a)"default"!==e&&function(t){i.d(n,t,(function(){return a[t]}))}(e);n["default"]=o.a},"5f74":function(t,n,i){},c18c:function(t,n,i){"use strict";i.r(n);var a=i("3c46"),o=i("5797");for(var e in o)"default"!==e&&function(t){i.d(n,t,(function(){return o[t]}))}(e);i("df77");var r,f=i("f0c5"),u=Object(f["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);n["default"]=u.exports},d2c7:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i("4f72"),o={name:"bargain",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{bargList:[],numConfig:this.dataConfig.numConfig.val,themeColor:this.dataConfig.themeColor.color[0].item,titleColor:this.dataConfig.titleColor.color[0].item,bgColor:this.dataConfig.bgColor.color,mbCongfig:this.dataConfig.mbCongfig.val,productGap:this.dataConfig.productGap.val,priceShow:this.dataConfig.priceShow.val,bntShow:this.dataConfig.bntShow.val,bgStyle:this.dataConfig.bgStyle.val,prConfig:this.dataConfig.prConfig.val}},created:function(){},mounted:function(){this.getBargainList()},methods:{getBargainList:function(){var t=this,n=this.$config.LIMIT;(0,a.getBargainList)({page:1,limit:this.numConfig>=n?n:this.numConfig}).then((function(n){t.bargList=n.data}))},bargDetail:function(t){this.$emit("changeBarg",t)}}};n.default=o},df77:function(t,n,i){"use strict";var a=i("5f74"),o=i.n(a);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/diy/components/bargain-create-component',
    {
        'pages/index/diy/components/bargain-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c18c"))
        })
    },
    [['pages/index/diy/components/bargain-create-component']]
]);