(function(e){function t(t){for(var i,o,a=t[0],l=t[1],u=t[2],h=0,d=[];h<a.length;h++)o=a[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/TVRecommendations/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},2926:function(e,t,n){"use strict";n("b948")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("About")],1)])},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about flex flex-col items-center"},[n("h1",{staticClass:"font-serif text-2xl"},[e._v("Search and add shows that you have enjoyed to the list.")]),n("br"),n("br"),0==e.recommendation_generated?n("div",{staticClass:"absolute inset-0 z-0",on:{click:function(t){e.modal=!1}}}):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.show,expression:"show"}],staticClass:"w-4/12 bg-gray-300 px-4 py-5 z-10",attrs:{placeholder:"Search shows",autocomplete:"off",type:"text"},domProps:{value:e.show},on:{focus:function(t){e.modal=!0,e.recommendation_generated=!1},input:function(t){t.target.composing||(e.show=t.target.value)}}}),n("br"),e.show_list&&e.modal&&0==e.recommendation_generated?n("div",{staticClass:"px-0 py-0 h-full flex flex-col items-center z-10"},[n("ul",{staticClass:"w-full text-white"},e._l(e.show_list,(function(t,i){return n("li",{key:i,staticClass:"h-full flex flex-col items-center py-1 cursor-pointer"},[n("ShowComponent",{attrs:{name:e.show_list[i].name,added:e.final_id_list.includes(e.show_list[i].id),publishedDate:e.show_list[i].publishedDate,highlightedName:e.show_list[i].highlightedName,id:e.show_list[i].id,overview:e.show_list[i].overview,image_url:e.show_list[i].image_url}})],1)})),0),n("br"),n("br"),n("button",{staticClass:"px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",staticStyle:{"justify-content":"center"},on:{click:function(t){e.modal=!1}}},[e._v("View Added Shows")])]):e._e(),0==e.modal&&0!=e.final_list.length&&0==e.recommendation_generated?n("div",{staticClass:"px-0 py-0 h-full flex flex-col items-center z-10"},[n("br"),n("br"),e._m(0),n("br"),n("ul",{staticClass:"w-full text-white"},e._l(e.final_list,(function(t,i){return n("li",{key:i,staticClass:"h-full flex flex-col items-center py-1 cursor-pointer"},[n("ShowComponent",{attrs:{name:e.final_list[i].name,added:e.final_id_list.includes(e.final_list[i].id),publishedDate:e.final_list[i].publishedDate,highlightedName:e.final_list[i].highlightedName,id:e.final_list[i].id,overview:e.final_list[i].overview,image_url:e.final_list[i].image_url}})],1)})),0),n("br"),n("br"),0==e.generation_in_progress?n("button",{staticClass:"px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",staticStyle:{"justify-content":"center"},on:{click:function(t){return e.generateRecommendation()}}},[e._v("Generate Recommendations")]):e._e(),1==e.generation_in_progress?n("hollow-dots-spinner",{attrs:{"animation-duration":1e3,"dot-size":25,"dots-num":3,color:"#000000"}}):e._e()],1):e._e(),0==e.modal&&1==e.recommendation_generated?n("div",{staticClass:"px-0 py-0 h-full flex flex-col items-center z-10"},[n("br"),n("br"),n("b",[e._v(" Recommendation: ")]),n("br"),n("ul",{staticClass:"w-full text-white"},e._l(e.output_list,(function(t,i){return n("li",{key:i,staticClass:"h-full flex flex-col items-center py-1 cursor-pointer"},[n("ShowComponent",{attrs:{name:e.output_list[i].name,display_only:!0,added:!1,publishedDate:e.output_list[i].publishedDate,highlightedName:e.output_list[i].highlightedName,id:e.output_list[i].id,overview:e.output_list[i].overview,image_url:e.output_list[i].image_url}})],1)})),0)]):e._e(),n("br"),n("br"),n("br")])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("b",[e._v("Added Shows: ")])])}],l=(n("a434"),n("b0c0"),n("96cf"),n("1da1")),u=(n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("53194"),n("d4ec")),c=n("bee2"),h=function(){function e(t,n,i,r,s){Object(u["a"])(this,e),this.name=t,this.id=n,this.overview=i,this.publishedDate=r,this.image_url=s,this.highlightedName=t}return Object(c["a"])(e,[{key:"highlightText",value:function(e){this.highlightedName=this.name.replace(new RegExp(e,"ig"),(function(e){return"<strong>"+e+"</strong>"}))}}]),e}();function d(e){return p.apply(this,arguments)}function p(){return p=Object(l["a"])(regeneratorRuntime.mark((function e(t){var n,i,r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.86.36:5000/get-popular-shows?count="+t,{method:"GET",mode:"cors"});case 2:return n=e.sent,e.next=5,n.json();case 5:if(i=e.sent,!("response"in i)){e.next=12;break}for(r=[],s=0;s<i["response"].length;s++)o=i["response"][s],r.push(new h(o["name"],o["id"],o["overview"],o["published_date"],o["image_url"]));return e.abrupt("return",r);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function m(e,t){return f.apply(this,arguments)}function f(){return f=Object(l["a"])(regeneratorRuntime.mark((function e(t,n){var i,r,s,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.86.36:5000/search?query="+t+"&count="+n,{method:"GET",mode:"cors"});case 2:return i=e.sent,e.next=5,i.json();case 5:if(r=e.sent,!("response"in r)){e.next=12;break}for(s=[],o=0;o<r["response"].length;o++)a=r["response"][o],s.push(new h(a["name"],a["id"],a["overview"],a["published_date"],a["image_url"]));return e.abrupt("return",s);case 12:return e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function g(e,t){return w.apply(this,arguments)}function w(){return w=Object(l["a"])(regeneratorRuntime.mark((function e(t,n){var i,r,s,o,a,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={show_id_list:t,count:n},e.next=3,fetch("http://192.168.86.36:5000/generate_recommendation",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(i),mode:"cors"});case 3:return r=e.sent,e.next=6,r.json();case 6:if(s=e.sent,!("response"in s)){e.next=13;break}for(o=[],a=0;a<s["response"].length;a++)l=s["response"][a],o.push(new h(l["name"],l["id"],l["overview"],l["published_date"],l["image_url"]));return e.abrupt("return",o);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-6"},[n("div",{staticClass:"flex flex-wrap max-width-show max-height-show bg-white shadow-lg rounded-lg overflow-hidden"},["no-image"!==e.image_url?n("div",{staticClass:"width-bg-image bg-cover",style:{backgroundImage:"url("+e.image_url+")"}}):e._e(),"no-image"==e.image_url?n("div",{staticClass:"width-bg-image bg-contain",style:{backgroundImage:"url("+e.no_image_found+")"}}):e._e(),n("div",{staticClass:"width-text p-4"},[n("h1",{staticClass:"text-gray-900 font-bold text-2xl",domProps:{innerHTML:e._s(e.outputHtml)}}),n("p",{staticClass:"mt-2 text-gray-600 text-sm"},[e._v(e._s(e.shortenedSummary))]),n("div",{staticClass:"mt-5"},[0==e.display_only&&0==e.added?n("button",{staticClass:"px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",staticStyle:{"justify-content":"center"},on:{click:function(t){return e.addShow()}}},[e._v("Add Show")]):e._e(),0==e.display_only&&1==e.added?n("button",{staticClass:"px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",staticStyle:{"justify-content":"center"},on:{click:function(t){return e.removeShow()}}},[e._v("Remove Show")]):e._e()])])])])},_=[],v=(n("a15b"),n("fb6a"),n("a9e3"),n("1276"),{name:"Show",props:{name:String,highlightedName:String,id:Number,display_only:Boolean,overview:String,publishedDate:String,image_url:String,added:Boolean},data:function(){return{max_summary_length:26,no_image_found:n("f43c")}},computed:{outputHtml:function(){return this.highlightedName+"<br>("+this.publishedYear+")"},shortenedSummary:function(){return this.overview.split(" ").length>this.max_summary_length?this.overview.split(" ").slice(0,this.max_summary_length).join(" ")+"...":this.overview.split(" ").slice(0,this.max_summary_length).join(" ")},publishedYear:function(){return this.publishedDate.split("-")[0]}},methods:{addShow:function(){this.$parent.addShow(new h(this.name,this.id,this.overview,this.publishedDate,this.image_url,this.highlightedName))},removeShow:function(){this.$parent.removeShow(new h(this.name,this.id,this.overview,this.publishedDate,this.image_url,this.highlightedName))}}}),x=v,y=(n("2926"),n("2877")),A=Object(y["a"])(x,b,_,!1,null,"59257937",null),S=A.exports,j=n("4583"),C={name:"About",components:{ShowComponent:S,HollowDotsSpinner:j["a"]},data:function(){return{show:"",modal:!1,maxResults:3,show_list:[],final_list:[],final_id_list:[],output_list:[],generation_in_progress:!1,recommendation_generated:!1}},mounted:function(){this.filterShows()},methods:{filterShows:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,i,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!=e.show.length){t.next=8;break}return t.next=3,d(e.maxResults);case 3:for(n=t.sent,e.show_list.length=0,i=0;i<n.length;i++)n[i]["name"]&&e.show_list.push(n[i]);t.next=13;break;case 8:return t.next=10,m(e.show,e.maxResults);case 10:for(r=t.sent,e.show_list.length=0,s=0;s<r.length;s++)r[s]["name"]&&(r[s].highlightText(e.show),e.show_list.push(r[s]));case 13:case"end":return t.stop()}}),t)})))()},addShow:function(e){this.final_list.push(e),this.final_id_list.push(e.id)},removeShow:function(e){for(var t=0;t<this.final_list.length;t++)if(e.id===this.final_list[t].id){this.final_list.splice(t,1),this.final_id_list.splice(t,1);break}},generateRecommendation:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.generation_in_progress=!0,t.next=3,g(e.final_id_list,1);case 3:e.output_list=t.sent,e.recommendation_generated=!0,e.generation_in_progress=!1;case 6:case"end":return t.stop()}}),t)})))()}},watch:{show:function(){this.filterShows()}}},Y=C,k=Object(y["a"])(Y,o,a,!1,null,null,null),D=k.exports,M={name:"Show",components:{About:D}},O=M,R=(n("034f"),Object(y["a"])(O,r,s,!1,null,null,null)),G=R.exports;n("db43");i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(G)}}).$mount("#app")},"85ec":function(e,t,n){},b948:function(e,t,n){},db43:function(e,t,n){},f43c:function(e,t){e.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.be690db9.js.map