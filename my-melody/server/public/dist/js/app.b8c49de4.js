webpackJsonp([1],{"/15G":function(t,e){},0:function(t,e,a){t.exports=a("NHnr")},"7a6W":function(t,e,a){t.exports=a.p+"img/RedMusicClean.b5cd6569.jpg"},D4uH:function(t,e,a){"use strict";a("VjuZ"),a("EuXz");var s={},i={name:"icon",props:{name:{type:String,validator:function(t){return t?t in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".')+"\nPlesase make sure you have imported this icon before using it."),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t="undefined"===typeof t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,a=t.height;return Math.max(e,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(t,a){var s=r();return e[a]=s,' id="'.concat(s,'"')}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,a,s,i){var n=a||i;return n&&e[n]?"#".concat(e[n]):t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,a=0;this.$children.forEach(function(t){e=Math.max(e,t.width),a=Math.max(a,t.height)}),this.childrenWidth=e,this.childrenHeight=a,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(a-t.height)/2})}},register:function(t){for(var e in t){var a=t[e];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),s[e]=a}},icons:s},n=870711;function r(){return"fa-".concat((n++).toString(16))}var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e,s){return a("path",t._b({key:"path-"+s},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e,s){return a("polygon",t._b({key:"polygon-"+s},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[a("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},l=[],c=a("XyMi");function u(t){a("cR4U")}var d=!1,g=u,m=null,h=null,p=Object(c["a"])(i,o,l,d,g,m,h);e["a"]=p.exports},IyU0:function(t,e){},LEHH:function(t,e){},LTER:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAMAAACJuGjuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDVERjQyMUIyQjJFMTFFNjlGNjFCNUMwMDEyNURBRjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDVERjQyMUMyQjJFMTFFNjlGNjFCNUMwMDEyNURBRjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NURGNDIxOTJCMkUxMUU2OUY2MUI1QzAwMTI1REFGMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NURGNDIxQTJCMkUxMUU2OUY2MUI1QzAwMTI1REFGMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkeLuqAAAAAGUExURdzc3PX19fcPU7IAAAdUSURBVHja7N1RbttAEETB4f0vnR8jCYLYQaBta3u33gU40hRkiSKteaRA4ykQWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYElgCSyBJYElsASWBJbAElgSWAJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCSyBJbAksASWwJLAElgCSwJLYAksCazWFX0Elpaj6rMFVo2qLlpgFalqkgVWEaomWWBVqeqRBVaXqhpZYJWpapEFVhmqFllg1akCSxFVHbLA6lMFlhKowFJGVYUssApVgaWIKrCUQAWWMqrAUkQVWIqoAksJVGBRFQssqsBSiSqwoAJLParAogos9agCCyqw1KMKLKrAUo8qsKACSz2qwKIKLPWoAgsqsNSjCiyqwFKPKrCgAks9qsCiCiz1qAILKrDUowosqsCiqiqwsAILK7DAutsVWFyBxRVYYF3uCiyuwAILLLAudwUWWGBxBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCBBRZYJ8B6wAIr8rIEFliRv3VggRV5BwUWWJH35WCBFfm0BxZYkVMIYIEVOTEFFliR051ggRU5iQ4WWJFvZsACK/J9H1hgRb5FBgusyLUJYIEVueAFLLAil1GBBVbk4jywwIpc8gkWWJHriMECK0IALLAi+wcLrMjywQIrsnmwwIpsHSywIisHC6zIvsEC6zsnBOsSWN89IVg3wHrDhGAdD+s9E4J1Nqy3TQjWubDeOiFYh8J694RgnQhrgwnBOg7WHhOCdRSsfSYE6xxYW00I1iGwdpsQrBNgbTghWO2wNp0QrGpY+04IVi+srScEqxTW7hOCVQnLhGCBBRZYYIFlQrDAAgsssMAyIVhggQUWWGCZECywwLI2sMAyIVhggWVtYIFlQrDAAsvawALLhGCBBZa1gQWWCcECCyxrAwssE4IFFljWBhZYJgQLLLCsDSywTAgWWGBZG1hgmRAssMCyNrDAMiFYYIFlbWCBZUKwwALL2sACy4RggQWWtYEFFlhggQXW2Wub34/85RLAAuuFA35+XLDAesnUZ8cGC6zXUf3l+GCBtQbVHzOABdZCVb+mAAustaw+BgELrNWq/vPzI1hXwJoBC6zla5sBC6zla5sBC6zla5sBC6zla5sBC6z1sAYssAKwBiywArAGLLACsAYssAKwBiywArAGLLACsAYssAKwBiywArAGLLDAAqsF1oAFFlhgtcAasMACC6wWWAMWWGCBBRZYYIEF1mpYAxZYYIEFFlhggQUWWGCBBRZYYIEFFlhOkIIFFldggQUWWGDdCcutFGCBBVYRLLerXgRrnvn3o+uE9YC1y0vQZ9vovGEVrD1IfbGSSlgPWFuh+tteGv8pyAPWfqj+XM7C3XF1EqxX97NyeVydAmvBjpZuD6wjYG24Pa7qYW26Pqy6Ye37usBVMayt/+Bw1Qpr+3fIXFXCKvhMj1UfrJKTkFiVwer51uR6V1Wwqr6Ou5tVFay26wcuVlUFq/HClGtZFcEqvZLuTlVFsJqv/b1PVQ+s9psV7kLVA+uI26vuQQXW92/3BlM9sOYcWD+f9t8OduQteGAd/9oB1jauwAILLLB6XIEFFlhggQXW5a7AAgsssMACCyyBBRZYYIEFlsACCyywwAJLB8NycQNYYAkssMDiCqwTZFEBFlhg1ciCAiywwKqRxcRFsPy2FljlsIi4C5YfbQOrWhYQ18F6uAKrVRYOV8Lyo21gNdJi4WJYD1dgVckC4XZYGVocgBWgRQFYAVoMgBWgRQBY621ZP1jradk9WAFbNg/Wcly2DtZyXDYO1mpclg3Wa48IKbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWBJbAElgSWwBJYElgCS2BJYAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwJLAElsCSwBJYAksCS2AJLAksgSWwBJanQGAJLIElgSWwBJYElsASWBJYAktgSWAJLIElgaV9+yHAAKuN9kl7KubPAAAAAElFTkSuQmCC"},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("/5sW"),i={name:"NavBar",data:function(){return{projectName:"MyMelody"}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"container"},[a("h1",[t._v(t._s(t.projectName))])])},r=[],o=a("XyMi");function l(t){a("/15G")}var c=!1,u=l,d="data-v-429ec676",g=null,m=Object(o["a"])(i,n,r,c,u,d,g),h=m.exports,p={components:{NavBar:h}},v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},A=[];function f(t){a("srg6")}var b=!1,C=f,S=null,W=null,B=Object(o["a"])(p,v,A,b,C,S,W),_=B.exports,w=a("/ocq"),Y=(a("EuXz"),{name:"track-card",props:{title:String,artist:String,albumArt:{default:a("LTER"),type:String}}}),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:t.albumArt,alt:t.title}}),t._v(" "),a("h1",[t._v(t._s(t.title))]),t._v(" "),a("h2",[t._v(t._s(t.artist))])])},y=[];function k(t){a("Y5rK")}var J=!1,L=k,M="data-v-8346f932",F=null,I=Object(o["a"])(Y,E,y,J,L,M,F),G=I.exports,R=a("mtWM"),V=a.n(R),j={name:"search-dialog",components:{TrackCard:G},data:function(){return{query:null,noResults:!1,tracks:null,selectedTrack:null}},methods:{search:function(){var t=this;this.selectedTrack=null;var e=null;V.a.get("https://api.spotify.com/v1/search?q=".concat(this.query,"&type=track"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){var a=e.data.tracks.items;t.noResults=!(a.length>0),t.tracks=a.map(function(t){return{service:"Spotify",title:t.name,artist:t.artists.map(function(t){return t.name}).join(", "),albumArt:t.album.images?t.album.images[0].url:null,id:t.id}})}).catch(function(t){console.error(t),t.response.status})},select:function(t){this.selectedTrack=t},commit:function(){this.$store.commit("selectTrack",this.selectedTrack),this.$store.commit("postModalState","add")}}},N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-box",attrs:{placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"search-btn",on:{click:t.search}},[a("icon",{attrs:{name:"search"}})],1),t._v(" "),a("div",{staticClass:"results"},[t.tracks?t._e():a("p",[t._v("Search for a song or artist.")]),t._v(" "),t.noResults?a("div",{staticClass:"noresults"},[a("p",[t._v("No results found.")])]):t._e(),t._v(" "),a("transition-group",{staticClass:"transition",attrs:{name:"fade"}},t._l(t.tracks,function(e){return a("div",{key:e.id,staticClass:"result"},[a("track-card",{attrs:{title:e.title,artist:e.artist,albumArt:e.albumArt}}),t._v(" "),a("button",{staticClass:"select",on:{click:function(a){t.select(e)}}},[t._v("Select")])],1)}))],1),t._v(" "),a("button",{staticClass:"continue",attrs:{disabled:!t.selectedTrack},on:{click:t.commit}},[t._v("Continue")])])},q=[];function U(t){a("LEHH")}var D=!1,Z=U,x="data-v-1ac0eef8",Q=null,T=Object(o["a"])(j,N,q,D,Z,x,Q),P=T.exports,z={name:"add-post-dialog",data:function(){return{caption:null}},computed:{track:function(){return this.$store.getters.selectedTrack}},methods:{post:function(){console.log({track:this.$store.getters.selectedTrack,caption:this.caption}),this.$store.commit("postModalState",null)},back:function(){this.$store.commit("postModalState","search")}},components:{TrackCard:G}},H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("track-card",{attrs:{title:t.track.title,artist:t.track.artist,albumArt:t.track.albumArt}}),t._v(" "),a("div",{staticClass:"caption"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.caption,expression:"caption"}],attrs:{placeholder:"Add a caption..."},domProps:{value:t.caption},on:{input:function(e){e.target.composing||(t.caption=e.target.value)}}}),t._v(" "),a("div",[a("button",{on:{click:t.back}},[t._v("Back")]),t._v(" "),a("button",{on:{click:t.post}},[t._v("Add Post")])])])],1)},O=[];function X(t){a("IyU0")}var K=!1,$=X,tt="data-v-bc659f2e",et=null,at=Object(o["a"])(z,H,O,K,$,tt,et),st=at.exports,it={name:"home",data:function(){return{}},computed:{dialogState:function(){return this.$store.getters.postModalState}},components:{SearchDialog:P,AddPostDialog:st},methods:{toggleModal:function(){var t=null;this.dialogState||(t="search"),this.$store.commit("postModalState",t)}}},nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("button",{on:{click:t.toggleModal}},[t._v("Add Post")]),t._v(" "),a("p",[t._v("\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis finibus quam. In quis hendrerit sapien, sit amet consectetur nulla. Donec sed purus id mauris lacinia tincidunt in volutpat tortor. Sed vitae nulla ex. Vestibulum faucibus justo at posuere laoreet. Sed quis pulvinar dolor. Curabitur tristique scelerisque mauris, ut hendrerit leo ultricies a. Ut gravida interdum elit. Nullam quis leo condimentum, cursus libero non, tincidunt nibh. Sed at massa purus. Etiam risus elit, condimentum eget risus tincidunt, finibus cursus odio. Morbi sem odio, malesuada quis lacinia at, congue eu risus.\n\nMaecenas ut metus at felis accumsan elementum. Donec ac rhoncus eros. Nullam et luctus ipsum. Praesent eros purus, auctor euismod leo eget, accumsan varius nibh. Etiam mollis diam maximus eros gravida vestibulum. Vestibulum ut facilisis enim, vitae bibendum justo. Morbi ac eros mauris. Cras nec molestie nibh, vitae commodo dolor.\n\nSuspendisse ut aliquet sapien, at hendrerit lorem. Donec lobortis mattis erat, quis accumsan nulla aliquet sed. Nunc elementum dolor eget imperdiet tempor. Phasellus ornare neque justo, ac tempor velit cursus id. Maecenas rutrum est nisl, eu commodo eros interdum in. Duis vel lobortis enim. Vivamus dolor velit, mattis vel nulla non, dignissim bibendum libero. Etiam vestibulum viverra turpis, id congue mi congue nec. Suspendisse vitae aliquam risus. Cras ut est ut eros auctor sagittis. Integer gravida nunc risus, eget eleifend mi auctor eu.\n\nSed volutpat faucibus porta. Phasellus pretium sapien tellus, ac tristique eros varius sit amet. Aenean a tellus convallis, porta nisi id, venenatis arcu. Suspendisse faucibus molestie nibh, non eleifend massa cursus bibendum. Phasellus feugiat semper tortor, sit amet feugiat lacus laoreet sed. Nulla scelerisque dui quis consectetur hendrerit. Praesent facilisis, odio ut tempus condimentum, quam nisi efficitur leo, in ultricies eros turpis vitae est. Duis scelerisque dignissim tempus. Vestibulum scelerisque ante ut arcu mattis vehicula.\n\nVestibulum odio mauris, rutrum eu dapibus non, consectetur consequat dui. Donec lobortis ligula et tellus accumsan convallis et sed dolor. Nam sapien est, feugiat sed ex sit amet, tristique bibendum massa. Nam sed augue mollis sem lobortis tincidunt vel at nisi. Maecenas ac ante id odio accumsan semper eget ut tellus. Aliquam gravida tempus diam, eu vehicula tortor rutrum vitae. Praesent faucibus non libero vitae rhoncus. Proin laoreet neque ut faucibus molestie. Quisque vitae diam odio. Aenean semper orci id tellus convallis, nec rutrum lectus molestie. Maecenas magna nisl, congue vitae congue sed, molestie ut lectus. Vestibulum in cursus diam. Pellentesque rutrum nibh sem, ac fringilla augue molestie at.")]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.dialogState?a("div",{staticClass:"modal"},[a("button",{staticClass:"close",on:{click:t.toggleModal}},[t._v("×")]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},["search"===t.dialogState?a("search-dialog"):t._e(),t._v(" "),"add"===t.dialogState?a("add-post-dialog"):t._e()],1)],1):t._e()])],1)},rt=[];function ot(t){a("g66B")}var lt=!1,ct=ot,ut="data-v-cc3d760e",dt=null,gt=Object(o["a"])(it,nt,rt,lt,ct,ut,dt),mt=gt.exports,ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],vt=null,At=!1,ft=null,bt=null,Ct=null,St=Object(o["a"])(vt,ht,pt,At,ft,bt,Ct),Wt=St.exports,Bt={name:"team",components:{}},_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{attrs:{id:"topHeader"}},[t._v("The Team")]),t._v(" "),a("p",{attrs:{id:"topParagraph"}},[t._v("We are a close team of dedicated developers and designers based out of Seattle. We are passionate about solving problems for people by providing them with applications they can use in their daily lives.")]),t._v(" "),a("div",{attrs:{id:"row1"}},[a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/20258149_1762883797059979_2271180749826725740_n.jpg?oh=862e49b11d09b483ee51d9ea6fb21226&oe=5B0CDCE7"}}),t._v(" "),a("header",[t._v("Aneesh Vempaty")]),t._v(" "),a("p",[t._v("Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-0/p206x206/13432372_10201768002359361_1644264331503287404_n.jpg?oh=0cf93b63a70e3cc89cbd56d8dd31adb7&oe=5B174AF9"}}),t._v(" "),a("header",[t._v("Pranav Shekar")]),t._v(" "),a("p",[t._v("Backend Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-9/10730970_996434900389560_6144339044351560451_n.jpg?oh=81c2fb3df93cf3425a4bee241643bf21&oe=5ADADF22"}}),t._v(" "),a("header",[t._v("Vincent Jiang")]),t._v(" "),a("p",[t._v("Frontend Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-0/p206x206/19511049_10209555918996490_1540856195408613407_n.jpg?oh=aa840e32639eb1acf037c85c62e58702&oe=5B1C48FF"}}),t._v(" "),a("header",[t._v("Marlo Delatorre")]),t._v(" "),a("p",[t._v("Developer")])]),t._v(" "),a("div",{attrs:{className:"profileCards"}},[a("img",{attrs:{src:"https://scontent.ford1-1.fna.fbcdn.net/v/t1.0-0/p206x206/17264190_10208848380102679_7872838750100870624_n.jpg?oh=5c00292d4e4de0cdbd640498c09441dc&oe=5B1E3666"}}),t._v(" "),a("header",[t._v("Peter Farmer")]),t._v(" "),a("p",[t._v("Developer")])])])])}];function Yt(t){a("zPgH")}var Et=!1,yt=Yt,kt="data-v-b18ec98a",Jt=null,Lt=Object(o["a"])(Bt,_t,wt,Et,yt,kt,Jt),Mt=Lt.exports,Ft={name:"landingPage",data:function(){return{projectNameMessage:"Vibe",headlineMessage:"Discover and share music with your friends.",subheadMessage:"The easiest way to search for your favorite melodies.",signupMessage:"Sign Up",alreadyHaveAccountMessage:"Already have an account?",loginMessage:"Log In"}}},It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"landingPageContainer"},[s("header",[s("header",{staticClass:"navLogo"},[t._v(t._s(t.projectNameMessage))]),t._v(" "),s("h1",{staticClass:"headline"},[t._v(t._s(t.headlineMessage))]),t._v(" "),s("h2",{staticClass:"subhead"},[t._v(t._s(t.subheadMessage))])]),t._v(" "),s("div",{staticClass:"auth"},[s("button",{staticClass:"signup"},[t._v(t._s(t.signupMessage))]),t._v(" "),s("div",{staticClass:"divider"},[s("hr"),t._v(" "),s("p",{staticClass:"alreadyHaveAccount"},[t._v(t._s(t.alreadyHaveAccountMessage))]),t._v(" "),s("hr")]),t._v(" "),s("button",{staticClass:"login"},[t._v(t._s(t.loginMessage))])]),t._v(" "),s("img",{staticClass:"background",attrs:{src:a("7a6W")}})])},Gt=[];function Rt(t){a("f6f7")}var Vt=!1,jt=Rt,Nt="data-v-b6912610",qt=null,Ut=Object(o["a"])(Ft,It,Gt,Vt,jt,Nt,qt),Dt=Ut.exports;s["a"].use(w["a"]);var Zt=new w["a"]({mode:"history",routes:[{path:"/",name:"landingPage",component:Dt},{path:"/home",name:"home",component:mt},{path:"/about",name:"about",component:Wt},{path:"/team",name:"team",component:Mt}]}),xt=a("NYxO");s["a"].use(xt["a"]);var Qt=new xt["a"].Store({state:{spotifyToken:null,selectedTrack:{title:null,artist:null},postModalState:null,postModalOpen:!1},mutations:{selectTrack:function(t,e){t.selectedTrack=e},postModalState:function(t,e){t.postModalState=e},spotifyToken:function(t,e){t.spotifyToken=e}},actions:{},getters:{selectedTrack:function(t){return t.selectedTrack},postModalState:function(t){return t.postModalState},spotifyToken:function(t){return t.spotifyToken}}}),Tt=(a("D/PP"),a("D4uH"));s["a"].config.productionTip=!1,s["a"].component("icon",Tt["a"]),new s["a"]({router:Zt,store:Qt,render:function(t){return t(_)}}).$mount("#app")},Y5rK:function(t,e){},cR4U:function(t,e){},f6f7:function(t,e){},g66B:function(t,e){},srg6:function(t,e){},zPgH:function(t,e){}},[0]);
//# sourceMappingURL=app.b8c49de4.js.map