(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1e0d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column full-width",class:t.alignClassDiv,style:t.bgColor},[i("div",{staticClass:"text-lolapeluza text-bold column flex",class:[t.classes,t.alignClassName],style:t.containerWidth},[i("div",{staticClass:"column"},[t._t("top"),i("div",{staticClass:"name"},[t._v(t._s(t.festivalName))]),t.festivalLocation.length?i("div",{staticClass:"location text-prater text-bold text-right text-uppercase"},[t._v(t._s(t.festivalLocation))]):t._e()],2)]),t._t("default")],2)},a=[],s=(i("8e6e"),i("8a81"),i("ac6a"),i("cadf"),i("06db"),i("456d"),i("28a5"),i("c47a")),r=i.n(s),l=i("2f62");function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){r()(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"LineupFestivalName",props:{colors:Array,classes:{type:[Array,String],default:function(){return["q-pa-xl"]}},dark:{type:Boolean,default:!0},titlePosition:{type:String,default:"center center"},blackAndWhite:{type:Boolean,default:!1}},computed:o(o({},Object(l["c"])("festivalConfigs",["festivalColorPalette","festivalName","festivalLocation"])),{},{bgColor:function(){var t={color:this.dark?"#272928":"#fff"};return this.blackAndWhite?t.background=this.dark?"#fff":"#272928":t.background=(this.colors||[]).length?this.colors[0]:(this.festivalColorPalette||[])[0],t},alignClassDiv:function(){var t=this.titlePosition.split(" ")[0];return this.getAlignClassName(t)},alignClassName:function(){var t=this.titlePosition.split(" ")[1];return this.getAlignClassName(t)},containerWidth:function(){return{width:"center center"===this.titlePosition?"750px":"595px"}}}),methods:{getAlignClassName:function(t){return"center"===t?"items-center":"left"===t?"items-start":"right"===t?"items-end":""}}},u=f,p=(i("c9cc"),i("2877")),d=Object(p["a"])(u,n,a,!1,null,"217582c3",null);e["default"]=d.exports},c9cc:function(t,e,i){"use strict";var n=i("cc7e"),a=i.n(n);a.a},cc7e:function(t,e,i){}}]);