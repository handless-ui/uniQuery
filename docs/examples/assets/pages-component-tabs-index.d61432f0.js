import{d as e,r as l,e as a,o as t,c as s,w as n,a as i,u as o,t as r,F as c,v as u,n as d,x as f,b as v,y as p,g,i as m,S as _,m as x,p as b}from"./index-7053ad66.js";import{_ as h}from"./_plugin-vue_export-helper.1b428a4d.js";const y=h(e({name:"UQTabs",props:{index:{type:Number,default:0},list:{type:Array,default:()=>[],validator(e){if(!Array.isArray(e))return!1;for(let l=0;l<e.length;l++)if("string"!=typeof e[l])return!1;return!0}},activeColor:{type:String,default:"#007aff"},color:{type:String,default:"#333333"}},emits:["change"],setup(e,{emit:x}){const b=e;let h=g(),y=l(0),C=l(0),w=l([]),k=l(0),A=e=>{y.value=e,x("change",{index:y.value,value:b.list[y.value]}),k.value=w.value[e].left-.5*C.value+.5*w.value[e].width};return a((()=>{const e=uni.createSelectorQuery().in(h);e.selectAll(".tabs-view").boundingClientRect((e=>{C.value=e[0].width})),e.selectAll(".tabs-view-item").boundingClientRect((e=>{w.value=e,A(b.index)})).exec()})),(l,a)=>{const g=m,x=_;return t(),s(g,{class:"tabs-container"},{default:n((()=>[i(x,{"scroll-with-animation":"","show-scrollbar":!1,"scroll-left":o(k),"scroll-x":!0,class:"tabs-view"},{default:n((()=>[(t(!0),r(c,null,u(e.list,((l,a)=>(t(),s(g,{onClick:e=>o(A)(a),class:d("tabs-view-item"+(o(y)==a?" active":"")),style:f([{color:o(y)==a?e.activeColor:e.color}]),key:a},{default:n((()=>[i(g,{class:"content"},{default:n((()=>[v(p(l)+" ",1),i(g,{class:"line",style:f([{backgroundColor:e.activeColor}])},null,8,["style"])])),_:2},1024)])),_:2},1032,["onClick","class","style"])))),128))])),_:1},8,["scroll-left"])])),_:1})}}}),[["__scopeId","data-v-05dbc3a3"]]),C=h(e({__name:"index",setup(e){let l=["关注","推荐","电影","电视剧","小视频","游戏","校园","影视","音乐","历史","艺术","数学","宇宙","战争"],a=e=>{console.log(e)};return(e,r)=>{const c=m,u=x(b("ui-tabs"),y);return t(),s(c,{class:"example-container"},{default:n((()=>[i(c,{class:"example-title"},{default:n((()=>[v(" 基础用法： ")])),_:1}),i(u,{list:o(l),onChange:o(a)},null,8,["list","onChange"]),i(c,{class:"example-title"},{default:n((()=>[v(" 默认选中： ")])),_:1}),i(u,{list:o(l),index:7,onChange:o(a)},null,8,["list","onChange"]),i(c,{class:"example-title"},{default:n((()=>[v(" 改变颜色： ")])),_:1}),i(u,{list:o(l),index:3,onChange:o(a),color:"pink","active-color":"red"},null,8,["list","onChange"])])),_:1})}}}),[["__scopeId","data-v-146e0fb9"]]);export{C as default};