(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{5433:function(t,e,s){},a04f:function(t,e,s){"use strict";var r=s("5433"),a=s.n(r);a.a},abb2:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artists column full-width text-prater animate-fade",style:t.styles},[s("div",{staticClass:"flex justify-center",class:t.headlinersClasses},t._l(t.headliners,(function(e,r){return s("span",{staticClass:"headliner artist"},[t._v(t._s(e)),2!==r?s("span",{staticClass:"q-px-sm",style:t.dotColor},[t._v(".")]):t._e()])})),0),s("div",{staticClass:"flex justify-center",class:t.artistsClasses},t._l(t.otherArtists,(function(e,r){return s("span",{staticClass:"artist"},[t._v(t._s(e)),r!==t.otherArtists.length-1?s("span",{staticClass:"q-px-sm",style:t.dotColor},[t._v(".")]):t._e()])})),0),t._t("bottom")],2)},a=[],n=(s("8e6e"),s("8a81"),s("ac6a"),s("cadf"),s("06db"),s("456d"),s("c47a")),i=s.n(n),l=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){i()(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var f={name:"LineupArtistsList",props:{colors:Array,headlinersClasses:{type:[Array,String],default:function(){return["q-px-md","q-pt-xl"]}},artistsClasses:{type:[Array,String],default:function(){return["q-px-xl","q-pb-xl"]}},dark:{type:Boolean,default:!0}},computed:c(c({},Object(l["c"])("festivalConfigs",["festivalColorPalette","festivalArtistsNames"])),{},{headliners:function(){return this.festivalArtistsNames.slice(0,3)},styles:function(){return{color:this.dark?"#fff":"#272928",background:this.dark?"#272928":"#fff"}},otherArtists:function(){var t=this.festivalArtistsNames.length;return this.festivalArtistsNames.slice(3,t)},selectedColor:function(){return this.dark?1:0},dotColor:function(){return{color:(this.colors||this.festivalColorPalette||[])[this.selectedColor]}}})},u=f,p=(s("a04f"),s("2877")),d=Object(p["a"])(u,r,a,!1,null,"f526b394",null);e["default"]=d.exports}}]);