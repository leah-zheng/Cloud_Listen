(function(t){function a(a){for(var i,c,l=a[0],o=a[1],r=a[2],p=0,v=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(a);while(v.length)v.shift()();return e.push.apply(e,r||[]),s()}function s(){for(var t,a=0;a<e.length;a++){for(var s=e[a],i=!0,l=1;l<s.length;l++){var o=s[l];0!==n[o]&&(i=!1)}i&&(e.splice(a--,1),t=c(c.s=s[0]))}return t}var i={},n={app:0},e=[];function c(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)c.d(s,i,function(a){return t[a]}.bind(null,i));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var u=o;e.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"10df":function(t,a,s){t.exports=s.p+"assets/img/listCover.d276296f.jpg"},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("a026"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("top"),s("index")],1)},e=[],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top-container"},[s("div",{staticClass:"left-box"},[s("div",{staticClass:"icon-wrapper"},[s("span",{staticClass:"iconfont icon-home",on:{click:function(a){return t.toHome()}}}),s("span",{staticClass:"iconfont icon-sami-select"}),s("span",{staticClass:"iconfont icon-full-screen"})]),s("div",{staticClass:"history-wrapper"},[s("span",{staticClass:"iconfont icon-arrow-lift",on:{click:function(a){return t.goback()}}}),s("span",{staticClass:"iconfont icon-arrow-right",on:{click:function(a){return t.goforward()}}})])]),s("div",{staticClass:"right-box"},[s("div",{staticClass:"el-input el-input--small el-input--prefix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputval,expression:"inputval"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"搜索"},domProps:{value:t.inputval},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.toResult(a)},input:function(a){a.target.composing||(t.inputval=a.target.value)}}}),t._m(0)])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"el-input__prefix"},[s("i",{staticClass:"el-input__icon el-icon-search"})])}],o={name:"top",data:function(){return{inputval:""}},methods:{toResult:function(){""==this.inputval?this.$message.warning("请输入搜索内容"):this.$router.push("/result?data="+this.inputval)},toHome:function(){this.$router.push("/")},goback:function(){this.$router.back(1)},goforward:function(){this.$router.forward(1)}},watch:{$route:function(t,a){this.$router.go(0)}}},r=o,u=s("2877"),p=Object(u["a"])(r,c,l,!1,null,"cbec2b6e",null),v=p.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-container"},[s("div",{staticClass:"nav"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/discovery"}},[s("span",{staticClass:"iconfont icon-find-music"}),t._v(" 发现音乐 ")])],1),s("li",[s("router-link",{attrs:{to:"/playlists"}},[s("span",{staticClass:"iconfont icon-music-list"}),t._v(" 推荐歌单 ")])],1),s("li",[s("router-link",{attrs:{to:"/songs"}},[s("span",{staticClass:"iconfont icon-music"}),t._v(" 最新音乐 ")])],1),s("li",[s("router-link",{attrs:{to:"/mvs"}},[s("span",{staticClass:"iconfont icon-mv"}),t._v(" 最新MV ")])],1)])]),s("div",{staticClass:"main"},[s("router-view")],1),s("div",{staticClass:"player"},[s("audio",{attrs:{src:t.musicUrl,controls:"",autoplay:""}})])])},d=[],C={name:"index",data:function(){return{musicUrl:""}}},h=C,f=Object(u["a"])(h,m,d,!1,null,null,null),g=f.exports,_={name:"app",components:{top:v,index:g}},y=_,b=Object(u["a"])(y,n,e,!1,null,null,null),k=b.exports,w=s("5c96"),$=s.n(w),x=(s("0fae"),s("d940c"),s("8c4f")),I=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"discovery-container"},[s("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(t.banners,(function(t,a){return s("el-carousel-item",{key:a},[s("img",{attrs:{src:t.imageUrl,alt:""}})])})),1),s("div",{staticClass:"recommend"},[s("h3",{staticClass:"title"},[t._v(" 推荐歌单 ")]),s("div",{staticClass:"items"},t._l(t.command,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toPlaylist(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("div",{staticClass:"desc-wrap"},[s("span",{staticClass:"desc"},[t._v(t._s(a.copywriter))])]),s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)]),s("div",{staticClass:"news"},[s("h3",{staticClass:"title"},[t._v(" 最新音乐 ")]),s("div",{staticClass:"items"},t._l(t.newsong,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play",on:{click:function(s){return t.getUrl(a.id)}}})]),s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"song-name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.song.artists[0].name))])])])})),0)]),s("div",{staticClass:"mvs"},[s("h3",{staticClass:"title"},[t._v("推荐MV")]),s("div",{staticClass:"items"},t._l(t.newmv,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toMv(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0)])],1)},U=[],M=s("bc3a"),O=s.n(M),P={name:"discovery",data:function(){return{banners:[],command:[],newsong:[],newmv:[],id:[]}},created:function(){var t=this;O()({url:"https://autumnfish.cn/banner",method:"get",params:{}}).then((function(a){t.banners=a.data.banners})),O()({url:"https://autumnfish.cn/personalized",method:"get",params:{limit:10}}).then((function(a){t.command=a.data.result})),O()({url:"https://autumnfish.cn/personalized/newsong",method:"get",params:{}}).then((function(a){console.log(a),t.newsong=a.data.result})),O()({url:"https://autumnfish.cn/personalized/mv",method:"get",params:{}}).then((function(a){t.newmv=a.data.result}))},methods:{getUrl:function(t){var a=this;O()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;s?a.$parent.musicUrl=s:a.$message.error("该资源为VIP专享，暂不支持播放 ！")}))},toPlaylist:function(t){this.$router.push("/playlist?id=".concat(t))},toMv:function(t){this.$router.push("/mv?id=".concat(t))}}},j=P,q=Object(u["a"])(j,I,U,!1,null,null,null),R=q.exports,E=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"playlists-container"},[i("div",{staticClass:"top-card"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:t.top.coverImgUrl,alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"tag"},[t._v("精品歌单")]),i("div",{staticClass:"title"},[t._v(" "+t._s(t.top.name)+" ")]),i("div",{staticClass:"info"},[t._v(" "+t._s(t.top.description)+" ")])]),i("img",{staticClass:"bg",attrs:{src:s("10df"),alt:""}}),i("div",{staticClass:"bg-mask"})]),i("div",{staticClass:"tab-container"},[i("div",{staticClass:"tab-bar"},[i("span",{staticClass:"item",class:{active:"全部"==t.tag},on:{click:function(a){t.tag="全部"}}},[t._v("全部")]),i("span",{staticClass:"item",class:{active:"欧美"==t.tag},on:{click:function(a){t.tag="欧美"}}},[t._v("欧美")]),i("span",{staticClass:"item",class:{active:"华语"==t.tag},on:{click:function(a){t.tag="华语"}}},[t._v("华语")]),i("span",{staticClass:"item",class:{active:"流行"==t.tag},on:{click:function(a){t.tag="流行"}}},[t._v("流行")]),i("span",{staticClass:"item",class:{active:"说唱"==t.tag},on:{click:function(a){t.tag="说唱"}}},[t._v("说唱")]),i("span",{staticClass:"item",class:{active:"摇滚"==t.tag},on:{click:function(a){t.tag="摇滚"}}},[t._v("摇滚")]),i("span",{staticClass:"item",class:{active:"民谣"==t.tag},on:{click:function(a){t.tag="民谣"}}},[t._v("民谣")]),i("span",{staticClass:"item",class:{active:"电子"==t.tag},on:{click:function(a){t.tag="电子"}}},[t._v("电子")]),i("span",{staticClass:"item",class:{active:"轻音乐"==t.tag},on:{click:function(a){t.tag="轻音乐"}}},[t._v("轻音乐")]),i("span",{staticClass:"item",class:{active:"影视原声"==t.tag},on:{click:function(a){t.tag="影视原声"}}},[t._v("影视原声")]),i("span",{staticClass:"item",class:{active:"ACG"==t.tag},on:{click:function(a){t.tag="ACG"}}},[t._v("ACG")]),i("span",{staticClass:"item",class:{active:"怀旧"==t.tag},on:{click:function(a){t.tag="怀旧"}}},[t._v("怀旧")]),i("span",{staticClass:"item",class:{active:"治愈"==t.tag},on:{click:function(a){t.tag="治愈"}}},[t._v("治愈")]),i("span",{staticClass:"item",class:{active:"旅行"==t.tag},on:{click:function(a){t.tag="旅行"}}},[t._v("旅行")])]),i("div",{staticClass:"tab-content"},[i("div",{staticClass:"items"},t._l(t.playlist,(function(a,s){return i("div",{key:s,staticClass:"item",on:{click:function(s){return t.toPlaylist(a.id)}}},[i("div",{staticClass:"img-wrap"},[i("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),i("span",{staticClass:"num"},[t._v(t._s(a.commentCount))])]),i("img",{attrs:{src:a.coverImgUrl,alt:""}}),i("span",{staticClass:"iconfont icon-play"})]),i("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)])]),i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":20},on:{"current-change":t.handleCurrentChange}})],1)},L=[],z={name:"recommend",data:function(){return{total:0,page:1,top:{},playlist:[],tag:"全部"}},methods:{handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.page=t,this.commandlist()},toplist:function(){var t=this;O()({url:"https://autumnfish.cn/top/playlist/highquality",method:"get",params:{limit:1,cat:this.tag}}).then((function(a){t.top=a.data.playlists[0]}))},commandlist:function(){var t=this;O()({url:"https://autumnfish.cn/top/playlist/",method:"get",params:{limit:10,offset:20*(this.page-1),cat:this.tag}}).then((function(a){t.playlist=a.data.playlists,t.total=a.data.total}))},toPlaylist:function(t){this.$router.push("/playlist?id=".concat(t))}},created:function(){this.toplist(),this.commandlist()},watch:{tag:function(){this.toplist(),this.commandlist(),this.page=1}}},V=z,N=Object(u["a"])(V,E,L,!1,null,null,null),S=N.exports,T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"songs-container"},[s("div",{staticClass:"tab-bar"},[s("span",{staticClass:"item",class:{active:0==t.tag},on:{click:function(a){t.tag=0}}},[t._v("全部")]),s("span",{staticClass:"item",class:{active:7==t.tag},on:{click:function(a){t.tag=7}}},[t._v("华语")]),s("span",{staticClass:"item",class:{active:96==t.tag},on:{click:function(a){t.tag=96}}},[t._v("欧美")]),s("span",{staticClass:"item",class:{active:8==t.tag},on:{click:function(a){t.tag=8}}},[t._v("日本")]),s("span",{staticClass:"item",class:{active:16==t.tag},on:{click:function(a){t.tag=16}}},[t._v("韩国")])]),s("table",{staticClass:"el-table playlit-table"},[t._m(0),s("tbody",t._l(t.playlist,(function(a,i){return s("tr",{key:i,staticClass:"el-table__row"},[s("td",[t._v(t._s(i+1))]),s("td",[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.album.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play",on:{click:function(s){return t.getmusic(a.id)}}})])]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.name))]),0!=a.mvid?s("span",{staticClass:"iconfont icon-mv",on:{click:function(s){return t.toMv(a.mvid)}}}):t._e()]),s("span",[t._v(t._s(a.album.name))])])]),s("td",[t._v(t._s(a.album.artists["0"].name))]),s("td",[t._v(t._s(a.album.name))]),s("td",[t._v(t._s(a.duration))])])})),0)])])},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th"),s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])])}],G={name:"songs",data:function(){return{playlist:[],tag:0}},created:function(){this.getlist()},watch:{tag:function(){this.getlist()}},methods:{getlist:function(){var t=this;O()({url:"https://autumnfish.cn/top/song",method:"get",params:{type:this.tag}}).then((function(a){console.log(a),t.playlist=a.data.data;for(var s=0;s<t.playlist.length;s++){var i=t.playlist[s].duration/1e3,n=parseInt(i/60);n<10&&(n="0"+n);var e=parseInt(i%60);e<10&&(e="0"+e),t.playlist[s].duration=n+":"+e}}))},getmusic:function(t){var a=this;O()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;s?a.$parent.musicUrl=s:a.$message.error("该资源为VIP专享，暂不支持播放 ！")}))},toMv:function(t){this.$router.push("/mv?id=".concat(t)),this.$parent.musicUrl=""}}},H=G,J=Object(u["a"])(H,T,A,!1,null,null,null),B=J.exports,D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mvs-container"},[s("div",{staticClass:"filter-wrap"},[s("div",{staticClass:"seciton-wrap"},[s("span",{staticClass:"section-type"},[t._v("地区:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"全部"==t.area},on:{click:function(a){t.area="全部"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"内地"==t.area},on:{click:function(a){t.area="内地"}}},[t._v("内地")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"港台"==t.area},on:{click:function(a){t.area="港台"}}},[t._v("港台")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"欧美"==t.area},on:{click:function(a){t.area="欧美"}}},[t._v("欧美")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"日本"==t.area},on:{click:function(a){t.area="日本"}}},[t._v("日本")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"韩国"==t.area},on:{click:function(a){t.area="韩国"}}},[t._v("韩国")])])])]),s("div",{staticClass:"type-wrap"},[s("span",{staticClass:"type-type"},[t._v("类型:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"全部"==t.type},on:{click:function(a){t.type="全部"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"官方版"==t.type},on:{click:function(a){t.type="官方版"}}},[t._v("官方版")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"原声"==t.type},on:{click:function(a){t.type="原声"}}},[t._v("原声")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"现场版"==t.type},on:{click:function(a){t.type="现场版"}}},[t._v("现场版")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"网易出品"==t.type},on:{click:function(a){t.type="网易出品"}}},[t._v("网易出品")])])])]),s("div",{staticClass:"order-wrap"},[s("span",{staticClass:"order-type"},[t._v("排序:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title ",class:{active:"上升最快"==t.order},on:{click:function(a){t.order="上升最快"}}},[t._v("上升最快")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"最热"==t.order},on:{click:function(a){t.order="最热"}}},[t._v("最热")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title ",class:{active:"最新"==t.order},on:{click:function(a){t.order="最新"}}},[t._v("最新")])])])])]),s("div",{staticClass:"mvs"},[s("div",{staticClass:"items"},t._l(t.mvlist,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toMv(a.id,a.artistId)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1)])},F=[],K=(s("99af"),{name:"mvs",data:function(){return{total:20,page:1,limit:8,area:"全部",type:"全部",order:"上升最快",mvlist:[]}},created:function(){this.getMv()},watch:{area:function(){this.page=1,this.getMv()},type:function(){this.page=1,this.getMv()},order:function(){this.page=1,this.getMv()}},methods:{getMv:function(){var t=this;O()({url:"https://autumnfish.cn/mv/all",method:"get",params:{area:this.area,type:this.type,order:this.order,limit:this.limit,offset:(this.page-1)*this.limit}}).then((function(a){console.log(a),t.mvlist=a.data.data;for(var s=0;s<t.mvlist.length;s++)t.mvlist[s].playCount>1e5&&(t.mvlist[s].playCount=parseInt(t.mvlist[s].playCount/1e4)+"万");a.data.count&&(t.total=a.data.count)}))},toMv:function(t,a){this.$router.push("/mv?id=".concat(t,"&aid=").concat(a))},handleCurrentChange:function(t){this.page=t,this.getMv()}}}),Q=K,W=Object(u["a"])(Q,D,F,!1,null,null,null),X=W.exports,Y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"result-container"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title"},[t._v(t._s(t.$route.query.data))]),s("span",{staticClass:"sub-title"},[t._v("找到"+t._s(t.result)+"个结果")])]),s("el-tabs",{model:{value:t.activeIndex,callback:function(a){t.activeIndex=a},expression:"activeIndex"}},[s("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[s("table",{staticClass:"el-table"},[s("thead",[s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])]),s("tbody",t._l(t.songList,(function(a,i){return s("tr",{key:i,staticClass:"el-table__row",on:{dblclick:function(s){return t.playmusic(a.id)}}},[s("td",[t._v(t._s(i+1))]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.album.name))]),0!=a.mvid?s("span",{staticClass:"iconfont icon-mv",on:{click:function(s){return t.toMv(a.mvid,a.artists[0].id)}}}):t._e()]),0!=a.alias.length?s("span",[t._v(t._s(a.alias[0]))]):t._e()])]),s("td",[t._v(t._s(a.artists[0].name))]),s("td",[t._v(t._s(a.album.name))]),s("td",[t._v(t._s(a.duration))])])})),0)])]),s("el-tab-pane",{attrs:{label:"歌单",name:"lists"}},[s("div",{staticClass:"items"},t._l(t.playlists,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toPlaylists(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),s("span",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("img",{attrs:{src:a.coverImgUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)]),s("el-tab-pane",{attrs:{label:"MV",name:"mv"}},[s("div",{staticClass:"items mv"},t._l(t.mvlist,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toMv(a.id,a.artists[0].id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("span",{staticClass:"time"},[t._v(t._s(a.duration))])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0)])],1)],1)},Z=[],tt={name:"result",data:function(){return{activeIndex:"songs",songList:[],songtime:"",result:"",playlists:[],count:0,mvlist:[]}},methods:{getmusic:function(){var t=this;O()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.data,limit:10,type:1}}).then((function(a){console.log(a),t.songList=a.data.result.songs;for(var s=0;s<t.songList.length;s++){var i=t.songList[s].duration,n=parseInt(i/1e3/60),e=parseInt(i/1e3%60);n<10&&(n="0"+n),e<10&&(e="0"+e),t.songList[s].duration=n+":"+e}t.result=a.data.result.songCount}))},playmusic:function(t){var a=this;O()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;s?a.$parent.musicUrl=s:a.$message.error("该资源为VIP专享，暂不支持播放 ！")}))},toPlaylists:function(t){this.$router.push("/playlist?id=".concat(t))},toMv:function(t,a){this.$router.push("/mv?id=".concat(t,"&aid=").concat(a)),this.$parent.musicUrl=""}},created:function(){this.getmusic()},watch:{activeIndex:function(){var t=this,a=1,s=10;switch(this.activeIndex){case"songs":a=1;break;case"lists":a=1e3;break;case"mv":a=1004,s=8;break;default:break}O()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.data,limit:s,type:a}}).then((function(s){if(console.log(s),1==a){t.songList=s.data.result.songs,t.result=s.data.result.songCount;for(var i=0;i<t.songList.length;i++){var n=t.songList[i].duration,e=parseInt(n/1e3/60),c=parseInt(n/1e3%60);e<10&&(e="0"+e),c<10&&(c="0"+c),t.songList[i].duration=e+":"+c}}else if(1e3==a){t.playlists=s.data.result.playlists,t.result=s.data.result.playlistCount;for(var l=0;l<t.playlists.length;l++)t.playlists[l].playCount>1e5&&(t.playlists[l].playCount=parseInt(t.playlists[l].playCount/1e4)+"万",console.log(t.playlists[l].playCount))}else if(1004==a){t.mvlist=s.data.result.mvs,t.result=s.data.result.mvCount;for(var o=0;o<t.mvlist.length;o++){var r=parseInt(t.mvlist[o].duration/1e3/60),u=parseInt(t.mvlist[o].duration/1e3%60);r<10&&(r="0"+r),u<10&&(u="0"+u),t.mvlist[o].duration=r+":"+u,t.mvlist[o].playCount>1e5&&(t.mvlist[o].playCount=parseInt(t.mvlist[o].playCount/1e4)+"万")}}}))}}},at=tt,st=Object(u["a"])(at,Y,Z,!1,null,null,null),it=st.exports,nt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"playlist-container"},[s("div",{staticClass:"top-wrap"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:t.listContent.coverImgUrl,alt:""}})]),s("div",{staticClass:"info-wrap"},[s("p",{staticClass:"title"},[t._v(t._s(t.listContent.name))]),s("div",{staticClass:"author-wrap"},[s("img",{staticClass:"avatar",attrs:{src:t.listContent.creator.avatarUrl,alt:""}}),s("span",{staticClass:"name"},[t._v(t._s(t.listContent.creator.nickname))]),s("span",{staticClass:"time"},[t._v(t._s(t.listContent.createTime)+" 创建")])]),s("div",{staticClass:"play-wrap"},[s("span",{staticClass:"iconfont icon-circle-play"}),s("span",{staticClass:"text",on:{click:function(a){return t.getUrl(t.listContent.tracks[0].id)}}},[t._v("播放全部")])]),s("div",{staticClass:"tag-wrap"},[0!=t.listContent.tags.length?s("span",{staticClass:"title"},[t._v("标签:")]):t._e(),s("ul",t._l(t.listContent.tags,(function(a,i){return s("li",{key:i},[t._v(t._s(a))])})),0)]),s("div",{staticClass:"desc-wrap"},[s("span",{staticClass:"title"},[t._v("简介:")]),s("span",{staticClass:"desc"},[t._v(t._s(t.listContent.description))])])])]),s("el-tabs",{model:{value:t.activeIndex,callback:function(a){t.activeIndex=a},expression:"activeIndex"}},[s("el-tab-pane",{attrs:{label:"歌曲列表",name:"1"}},[s("table",{staticClass:"el-table playlit-table"},[s("thead",[s("th"),s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])]),s("tbody",t._l(t.listContent.tracks,(function(a,i){return s("tr",{key:i,staticClass:"el-table__row",on:{click:function(s){return t.getUrl(a.id)}}},[s("td",[t._v(t._s(i+1))]),s("td",[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.al.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})])]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.name))]),s("span",{staticClass:"iconfont icon-mv"})])])]),s("td",[t._v(t._s(a.ar[0].name))]),s("td",[t._v(t._s(a.al.name))]),s("td",[t._v(t._s(a.dt))])])})),0)])]),s("el-tab-pane",{attrs:{label:"评论",name:"2"}},[s("div",{staticClass:"comment-wrap"},[s("p",{staticClass:"title"},[t._v("精彩评论"),s("span",{staticClass:"number"},[t._v("("+t._s(t.hotComments.length)+")")])]),s("div",{staticClass:"comments-wrap"},t._l(t.hotComments,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:a.user.avatarUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content"},[s("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!=a.beReplied.length?s("div",{staticClass:"re-content"},[s("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),s("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])})),0)]),s("div",{staticClass:"comment-wrap"},[s("p",{staticClass:"title"},[t._v("最新评论"),s("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),s("div",{staticClass:"comments-wrap"},t._l(t.comments,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:a.user.avatarUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content"},[s("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!=a.beReplied.length?s("div",{staticClass:"re-content"},[s("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),s("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])})),0)]),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},et=[],ct={name:"playlist",data:function(){return{activeIndex:"1",total:0,page:1,listContent:{creator:{},tags:[]},hotComments:[],comments:[]}},methods:{handleCurrentChange:function(t){var a=this;this.page=t,O()({url:"https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.id,limit:10,offset:10*(this.page-1)}}).then((function(t){a.comments=t.data.comments,a.total=t.data.total}))},getUrl:function(t){var a=this;O()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){console.log(t);var s=t.data.data[0].url;s?a.$parent.musicUrl=s:a.$message.error("该资源为VIP专享，暂不支持播放 ！")}))}},created:function(){var t=this;O()({url:"https://autumnfish.cn/playlist/detail",method:"get",params:{id:this.$route.query.id}}).then((function(a){console.log(a),t.listContent=a.data.playlist;for(var s=0;s<t.listContent.tracks.length;s++){var i=parseInt(t.listContent.tracks[s].dt/1e3/60),n=parseInt(t.listContent.tracks[s].dt/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.listContent.tracks[s].dt=i+":"+n}})),O()({url:"https://autumnfish.cn/comment/hot",method:"get",params:{id:this.$route.query.id,type:2}}).then((function(a){t.hotComments=a.data.hotComments})),O()({url:"https://autumnfish.cn/comment/playlist",method:"get",params:{id:this.$route.query.id,limit:10,offset:10*(this.page-1)}}).then((function(a){t.comments=a.data.comments,t.total=a.data.total}))}},lt=ct,ot=Object(u["a"])(lt,nt,et,!1,null,null,null),rt=ot.exports,ut=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mv-container"},[s("div",{staticClass:"mv-wrap"},[s("h3",{staticClass:"title"},[t._v("mv详情")]),s("div",{staticClass:"video-wrap"},[s("video",{attrs:{controls:"",autoplay:"",src:t.mvpath}})]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"singer-info"},[s("div",{staticClass:"avatar-wrap"},[s("img",{attrs:{src:t.artistPic,alt:""}})]),s("span",{staticClass:"name"},[t._v(t._s(t.mvcontent.artistName))])]),s("div",{staticClass:"mv-info"},[s("h2",{staticClass:"title"},[t._v(t._s(t.mvcontent.name))]),s("span",{staticClass:"date"},[t._v("发布："+t._s(t.mvcontent.publishTime))]),s("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvcontent.playCount)+"次")]),s("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvcontent.desc)+" ")])])]),s("div",{staticClass:"comment-wrap"},[s("p",{staticClass:"title"},[t._v("精彩评论")]),s("div",{staticClass:"comments-wrap"},t._l(t.hotComment,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:a.user.avatarUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content"},[s("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!=a.beReplied.length?s("div",{staticClass:"re-content"},[s("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),s("div",{staticClass:"date"},[t._v(t._s(a.time))])])])})),0)]),s("div",{staticClass:"comment-wrap"},[s("p",{staticClass:"title"},[t._v("最新评论"),s("span",{staticClass:"number"},[t._v("("+t._s(t.total)+")")])]),s("div",{staticClass:"comments-wrap"},t._l(t.comment,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:a.user.avatarUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"content"},[s("span",{staticClass:"name"},[t._v(t._s(a.user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.content))])]),0!=a.beReplied.length?s("div",{staticClass:"re-content"},[s("span",{staticClass:"name"},[t._v(t._s(a.beReplied[0].user.nickname)+"：")]),s("span",{staticClass:"comment"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),s("div",{staticClass:"date"},[t._v(t._s(a.time))])])])})),0)]),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1),s("div",{staticClass:"mv-recommend"},[s("h3",{staticClass:"title"},[t._v("相关推荐")]),s("div",{staticClass:"mvs"},[s("div",{staticClass:"items"},t._l(t.aboutmv,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.getMvid(a.id,a.artistId)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("span",{staticClass:"time"},[t._v(t._s(a.duration))])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0)])])])},pt=[],vt={name:"mv",data:function(){return{total:20,page:1,limit:10,mvpath:"",aboutmv:[],mvcontent:[],artistPic:"",hotComment:[],comment:[]}},methods:{handleCurrentChange:function(t){var a=this;this.page=t,O()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.id,limit:10,offset:10*(this.page-1)}}).then((function(t){console.log(t),a.hotComment=t.data.hotComments,a.comment=t.data.comments}))},getMvid:function(t,a){this.$router.push("/mv?id=".concat(t,"&aid=").concat(a))}},created:function(){var t=this;O()({url:"https://autumnfish.cn/mv/url",method:"get",params:{id:this.$route.query.id}}).then((function(a){t.mvpath=a.data.data.url})),O()({url:"https://autumnfish.cn/simi/mv",method:"get",params:{mvid:this.$route.query.id}}).then((function(a){console.log("相关mv",a),t.aboutmv=a.data.mvs;for(var s=0;s<t.aboutmv.length;s++){t.aboutmv[s].playCount>1e5&&(t.aboutmv[s].playCount=parseInt(t.aboutmv[s].playCount/1e4)+"万");var i=parseInt(t.aboutmv[s].duration/1e3/60),n=parseInt(t.aboutmv[s].duration/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.aboutmv[s].duration=i+":"+n}})),O()({url:"https://autumnfish.cn/mv/detail",method:"get",params:{mvid:this.$route.query.id}}).then((function(a){console.log(a),t.mvcontent=a.data.data})),O()({url:"https://autumnfish.cn/artists",method:"get",params:{id:this.$route.query.aid}}).then((function(a){t.artistPic=a.data.artist.img1v1Url})),O()({url:"https://autumnfish.cn/comment/mv",method:"get",params:{id:this.$route.query.id,limit:10,offset:0}}).then((function(a){console.log(a),t.hotComment=a.data.hotComments,t.comment=a.data.comments,t.total=a.data.total}))},watch:{$route:function(t,a){this.$router.go(0)}}},mt=vt,dt=Object(u["a"])(mt,ut,pt,!1,null,null,null),Ct=dt.exports;i["default"].use($.a),i["default"].use(x["a"]);var ht=new x["a"]({routes:[{path:"/",redirect:"/discovery"},{path:"/discovery",component:R},{path:"/playlists",component:S},{path:"/playlist",component:rt},{path:"/songs",component:B},{path:"/mvs",component:X},{path:"/mv",component:Ct},{path:"/result",component:it}]});i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(k)},router:ht}).$mount("#app")},d940c:function(t,a,s){}});
//# sourceMappingURL=app.37b3571c.js.map