import{_ as f}from"./js/_plugin-vue_export-helper.bd508f36.js";import{r as w,o as c,c as d,a as o,e as u,b as m,i as a,t as h,I as v,N as T,f as V,n as I,d as k,E as y,x as C}from"./js/vue.runtime.esm-bundler.a49acf4f.js";import{l as B}from"./js/index.68062296.js";import{l as L}from"./js/index.c885ab17.js";import{l as j}from"./js/index.0b123ab1.js";import{n as b,j as P,l as M}from"./js/links.96235554.js";import{h as O,t as z,T as R}from"./js/postContent.314c716d.js";import{e as D}from"./js/elemLoaded.9a6eb745.js";import{a as F}from"./js/allowed.d054e5c0.js";import"./js/default-i18n.cc9dbff0.js";import{u as S,T as A}from"./js/TruSeoScore.25c11e71.js";import{S as N,c as x}from"./js/Caret.7f04b0aa.js";/* empty css                                               *//* empty css                                                 */import"./js/constants.c7984802.js";import{t as q}from"./js/html.671743b1.js";/* empty css                                                 */import{C as G}from"./js/ScoreButton.d532fab3.js";import"./js/translations.93cb7f26.js";import"./js/isArrayLikeObject.3ade28da.js";import"./js/cleanForSlug.77e4c771.js";import"./js/toString.d05e92a1.js";import"./js/get.80957652.js";import"./js/_stringToArray.4de3b1f3.js";const H={setup(){const{strings:e}=S();return{composableStrings:e}},components:{CoreScoreButton:G,SvgCircleCheck:N,SvgCircleClose:x},mixins:[A],props:{post:Object,posts:Array,index:Number},data(){return{allowed:F,postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,strings:b(this.composableStrings,{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),imageTitle:this.$t.__("Image Title:",this.$td),imageAltTag:this.$t.__("Image Alt Tag:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,P.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.post.titleParsed=e.body.title,this.post.descriptionParsed=e.body.description,this.$root._data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(e=>{console.error(`Unable to update post with ID ${this.post.id}: ${e}`)})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,P.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(e=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${e}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},truncate:q,updatePostTitle(e,i){const l=document.getElementById(`post-${e}`);if(!l)return;const g=l.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!g)return;const t=g.getElementsByTagName("span")[0];g.innerText=i,g.prepend(t)}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed},async created(){this.showTruSeo=O()}},J={key:0,class:"edit-row"},K={key:1,class:"edit-row edit-title"},Q=["title"],W=["id"],X={key:2,class:"edit-row"},Y=["title"],Z=["title"],$={key:3,class:"edit-row edit-description"},tt=["title"],et=["id"],it={key:4,class:"edit-row"},st=["title"],ot=["title"],nt={key:5,class:"edit-row edit-image-title"},lt=["title"],rt=["id"],at={key:6,class:"edit-row"},ct=["title"],dt=["title"],ut={key:7,class:"edit-row edit-image-alt"},mt=["title"],ht=["id"],pt={key:8,class:"edit-row"},gt=["title"],_t=["title"];function wt(e,i,l,g,t,s){const _=w("core-score-button"),p=w("svg-circle-check"),r=w("svg-circle-close");return c(),d("div",{class:I(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}])},[o("div",null,[e.$root._data.screen.base==="edit"&&t.showTruSeo&&t.allowed("aioseo_page_analysis")&&!t.isSpecialPage?(c(),d("div",J,[u(_,{score:l.post.value,postId:t.postId},null,8,["score","postId"])])):m("",!0),t.allowed("aioseo_page_general_settings")?(c(),d("div",K,[o("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[0]||(i[0]=a((...n)=>s.editTitle&&s.editTitle(...n),["prevent"]))},null,8,Q),o("strong",null,h(t.strings.title)+" ",1),o("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},h(s.truncate(t.titleParsed,100)),9,W)])):m("",!0),t.showEditTitle?(c(),d("div",X,[v(o("textarea",{"onUpdate:modelValue":i[1]||(i[1]=n=>t.title=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.title]]),o("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[2]||(i[2]=a((...n)=>s.save&&s.save(...n),["prevent"])),title:t.strings.save},[u(p,{width:"20"})],8,Y),o("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[3]||(i[3]=a((...n)=>s.cancel&&s.cancel(...n),["prevent"])),title:t.strings.cancel},[u(r,{width:"20"})],8,Z)])):m("",!0),t.allowed("aioseo_page_general_settings")?(c(),d("div",$,[o("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[4]||(i[4]=a((...n)=>s.editDescription&&s.editDescription(...n),["prevent"]))},null,8,tt),o("strong",null,h(t.strings.description)+" ",1),o("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},h(s.truncate(t.descriptionParsed)),9,et)])):m("",!0),t.showEditDescription?(c(),d("div",it,[v(o("textarea",{"onUpdate:modelValue":i[5]||(i[5]=n=>t.postDescription=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.postDescription]]),o("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[6]||(i[6]=a((...n)=>s.save&&s.save(...n),["prevent"])),title:t.strings.save},[u(p,{width:"20"})],8,st),o("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[7]||(i[7]=a((...n)=>s.cancel&&s.cancel(...n),["prevent"])),title:t.strings.cancel},[u(r,{width:"20"})],8,ot)])):m("",!0),V(e.$slots,"default"),e.$root._data.screen.base==="upload"&&l.post.showMedia?(c(),d("div",nt,[o("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[8]||(i[8]=a((...n)=>s.editImageTitle&&s.editImageTitle(...n),["prevent"]))},null,8,lt),o("strong",null,h(t.strings.imageTitle),1),o("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},h(t.imageTitle),9,rt)])):m("",!0),t.showEditImageTitle?(c(),d("div",at,[v(o("textarea",{"onUpdate:modelValue":i[9]||(i[9]=n=>t.imageTitle=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.imageTitle]]),o("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[10]||(i[10]=a((...n)=>s.saveImage&&s.saveImage(...n),["prevent"])),title:t.strings.save},[u(p,{width:"20"})],8,ct),o("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[11]||(i[11]=a((...n)=>s.cancel&&s.cancel(...n),["prevent"])),title:t.strings.cancel},[u(r,{width:"20"})],8,dt)])):m("",!0),e.$root._data.screen.base==="upload"&&l.post.showMedia?(c(),d("div",ut,[o("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[12]||(i[12]=a((...n)=>s.editImageAlt&&s.editImageAlt(...n),["prevent"]))},null,8,mt),o("strong",null,h(t.strings.imageAltTag),1),o("span",{id:`aioseo-${t.columnName}-${t.postId}-value`},h(t.imageAltTag),9,ht)])):m("",!0),t.showEditImageAltTag?(c(),d("div",pt,[v(o("textarea",{"onUpdate:modelValue":i[13]||(i[13]=n=>t.imageAltTag=n),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.imageAltTag]]),o("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[14]||(i[14]=a((...n)=>s.saveImage&&s.saveImage(...n),["prevent"])),title:t.strings.save},[u(p,{width:"20"})],8,gt),o("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[15]||(i[15]=a((...n)=>s.cancel&&s.cancel(...n),["prevent"])),title:t.strings.cancel},[u(r,{width:"20"})],8,_t)])):m("",!0)])],2)}const vt=f(H,[["render",wt]]),Tt={components:{CorePostColumn:vt},props:{post:Object,index:Number}};function ft(e,i,l,g,t,s){const _=w("core-post-column");return c(),k(_,{post:l.post,index:l.index},null,8,["post","index"])}const E=f(Tt,[["render",ft]]),kt={components:{PostColumn:E,PostColumnLite:E},props:{post:Object,index:Number}};function Pt(e,i,l,g,t,s){const _=w("PostColumn"),p=w("PostColumnLite");return c(),d("div",null,[e.$isPro?(c(),k(_,{key:0,post:l.post,index:l.index},null,8,["post","index"])):m("",!0),e.$isPro?m("",!0):(c(),k(p,{key:1,post:l.post,index:l.index},null,8,["post","index"]))])}const Et=f(kt,[["render",Pt]]);const It={setup(){const{strings:e}=S();return{composableStrings:e}},components:{SvgCircleCheck:N,SvgCircleClose:x},mixins:[A],props:{term:Object,terms:Array,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:b(this.composableStrings,{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)})}},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,P.post(this.$links.restUrl("termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(e=>{this.titleParsed=e.body.title,this.descriptionParsed=e.body.description,this.term.titleParsed=e.body.title,this.term.descriptionParsed=e.body.description}).catch(e=>{console.error(`Unable to update term with ID ${this.term.id}: ${e}`)})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},truncate:q},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed},async created(){this.showTruSeo=z()}},yt={class:"edit-row edit-title"},Ct=["title"],bt=["id"],Dt={key:0,class:"edit-row"},St=["title"],At=["title"],Nt={class:"edit-row edit-description"},xt=["title"],qt=["id"],Ut={key:1,class:"edit-row"},Vt=["title"],Bt=["title"];function Lt(e,i,l,g,t,s){const _=w("svg-circle-check"),p=w("svg-circle-close");return c(),d("div",{class:I(["aioseo-details-column",{editing:t.showEditTitle||t.showEditDescription}])},[o("div",null,[o("div",yt,[o("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[0]||(i[0]=a((...r)=>s.editTitle&&s.editTitle(...r),["prevent"]))},null,8,Ct),o("strong",null,h(t.strings.title),1),o("span",{id:`aioseo-${t.columnName}-${t.termId}-value`},h(s.truncate(t.titleParsed,100)),9,bt)]),t.showEditTitle?(c(),d("div",Dt,[v(o("textarea",{"onUpdate:modelValue":i[1]||(i[1]=r=>t.title=r),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.title]]),o("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[2]||(i[2]=a((...r)=>s.save&&s.save(...r),["prevent"])),title:t.strings.save},[u(_,{width:"20"})],8,St),o("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[3]||(i[3]=a((...r)=>s.cancel&&s.cancel(...r),["prevent"])),title:t.strings.cancel},[u(p,{width:"20"})],8,At)])):m("",!0),o("div",Nt,[o("a",{class:"dashicons dashicons-edit aioseo-quickedit",title:t.strings.edit,onClick:i[4]||(i[4]=a((...r)=>s.editDescription&&s.editDescription(...r),["prevent"]))},null,8,xt),o("strong",null,h(t.strings.description),1),o("span",{id:`aioseo-${t.columnName}-${t.termId}-value`},h(s.truncate(t.descriptionParsed)),9,qt)]),t.showEditDescription?(c(),d("div",Ut,[v(o("textarea",{"onUpdate:modelValue":i[5]||(i[5]=r=>t.termDescription=r),class:"aioseo-quickedit-input",rows:"4",columns:"32"},null,512),[[T,t.termDescription]]),o("a",{class:"dashicons aioseo-quickedit-input-save",onClick:i[6]||(i[6]=a((...r)=>s.save&&s.save(...r),["prevent"])),title:t.strings.save},[u(_,{width:"20"})],8,Vt),o("a",{class:"dashicons aioseo-quickedit-input-cancel",onClick:i[7]||(i[7]=a((...r)=>s.cancel&&s.cancel(...r),["prevent"])),title:t.strings.cancel},[u(p,{width:"20"})],8,Bt)])):m("",!0)])],2)}const jt=f(It,[["render",Lt]]),U=e=>(e=B(e),e=L(e),e=j(e),M(e),e.config.globalProperties.$truSeo=new R,e),Mt=(e,i)=>{U(y({name:"Standalone/PostsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>C(Et)},{post:e,index:i})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.posts&&window.aioseo.posts.forEach((e,i)=>{D(`#${e.columnName}-${e.id}`,`aioseoPostsTable-${e.id}`),document.addEventListener("animationstart",function(l){`aioseoPostsTable-${e.id}`===l.animationName&&Mt(e,i)},{passive:!0})});const Ot=(e,i)=>{U(y({name:"Standalone/TermsTable/"+e.id,data(){return{screen:window.aioseo.screen}},render:()=>C(jt)},{term:e,index:i})).mount(`#${e.columnName}-${e.id}`)};window.aioseo.terms&&window.aioseo.posts.length===0&&window.aioseo.terms.forEach((e,i)=>{D(`#${e.columnName}-${e.id}`,`aioseoTermsTable-${e.id}`),document.addEventListener("animationstart",function(l){`aioseoTermsTable-${e.id}`===l.animationName&&Ot(e,i)},{passive:!0})});
