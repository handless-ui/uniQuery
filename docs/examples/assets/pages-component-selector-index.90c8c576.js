import{d as e,r as l,o as a,c as u,w as s,a as t,k as v,x as n,u as o,t as c,F as r,v as i,n as d,b,y as p,C as f,A as h,i as _,S as m,e as x,m as k,p as y,I as j,q as g}from"./index-df4b44f3.js";import{U as C}from"./index.dc656315.js";import{_ as w}from"./plugin-vueexport-helper.1b428a4d.js";const z=w(e({name:"UQSelector",setup(e,{expose:x}){let k,y={},j=l(!1),g=l("-700rpx"),w=l([]),z=l([]),I=l(0),q=e=>{I.value=e,S()},P=l([]),S=e=>{e&&(w.value[I.value]=e.value,z.value[I.value]=e.label,I.value+=1),k(w.value.slice(0,I.value)).then((e=>{e?P.value=e:T({label:z.value.slice(0,I.value),value:w.value.slice(0,I.value)})}))},T=e=>{j.value=!1,g.value="-700rpx",e?y.resolve(e):y.reject("用户取消了选择")};return x({open:(e,l={value:[],label:[]})=>(k=e,w.value=l.value,z.value=l.label,I.value=0==l.value.length?0:l.value.length-1,S(void 0),j.value=!0,h((()=>{setTimeout((()=>{g.value="0"}),50)})),new Promise(((e,l)=>{y={resolve:e,reject:l}})))}),(e,l)=>{const h=_,x=m;return a(),u(C,{show:o(j),onClick:l[1]||(l[1]=e=>o(T)())},{default:s((()=>[t(h,{onClick:l[0]||(l[0]=v((()=>{}),["stop"])),class:"selector-container",style:n([{bottom:o(g)}])},{default:s((()=>[t(h,{class:"content"},{default:s((()=>[t(h,{class:"nav"},{default:s((()=>[(a(!0),c(r,null,i(o(z),((e,l)=>(a(),u(h,{class:d(["item",[{hidden:l>=o(I)}]]),key:e,onClick:e=>o(q)(l)},{default:s((()=>[b(p(e),1)])),_:2},1032,["class","onClick"])))),128)),t(h,{class:"item active"},{default:s((()=>[b(" 请选择 ")])),_:1})])),_:1}),t(x,{"scroll-y":"true",class:"scroll"},{default:s((()=>[(a(!0),c(r,null,i(o(P),(e=>(a(),u(h,{class:"item",key:e.value,onClick:l=>o(S)(e)},{default:s((()=>[t(h,{class:"text"},{default:s((()=>[b(p(e.label),1)])),_:2},1024),o(w)[o(I)]==e.value?(a(),u(h,{key:0,class:"right"},{default:s((()=>[b("✓")])),_:1})):f("",!0)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1},8,["style"])])),_:1},8,["show"])}}}),[["__scopeId","data-v-0aa87d00"]]);let I=[{label:"江苏省",value:"js",children:[{label:"南京市",value:"nj",children:[{label:"浦口区",value:"pk"}]},{label:"无锡市",value:"wx"},{label:"盐城市",value:"yc"},{label:"苏州市",value:"sz"},{label:"常州市",value:"cz"}]},{label:"浙江省",value:"zj",children:[{label:"杭州市",value:"hz"},{label:"绍兴市",value:"sx"},{label:"嘉兴市",value:"jx"}]},{label:"山东省",value:"sd"},{label:"四川省",value:"sc",children:[{label:"成都市",value:"cd"}]},{label:"北京市",value:"bj"},{label:"安徽省",value:"ah"},{label:"广东省",value:"gd"},{label:"河北省",value:"hb"},{label:"河南省",value:"hn"},{label:"山西省",value:"sx"},{label:"广西省",value:"gx"},{label:"西藏省",value:"xz"},{label:"青海省",value:"qh"}],q=e=>new Promise((l=>{let a=I;for(let u=0;u<e.length;u++)for(let l=0;l<a.length;l++)if(a[l].value==e[u]){a=a[l].children;break}l(a)}));const P=w(e({__name:"index",setup(e){let v=l(),n=l(),c=()=>{v.value.open(q,n.value).then((e=>{console.log(e),n.value=e})).catch((e=>{console.error(e)}))};return x((()=>{setTimeout((()=>{c()}),500)})),(e,l)=>{const r=k(y("ui-selector"),z),i=j,d=g,p=_;return a(),u(p,{class:"example-container"},{default:s((()=>[t(r,{ref_key:"myselectorRef",ref:v},null,512),t(p,{class:"example-btnInput",onClick:l[0]||(l[0]=e=>o(c)())},{default:s((()=>{var e;return[t(i,{readonly:"",type:"text",value:null==(e=o(n))?void 0:e.label.join(" / "),placeholder:"请选择位置"},null,8,["value"]),t(d,null,{default:s((()=>[b("选择")])),_:1})]})),_:1})])),_:1})}}}),[["__scopeId","data-v-a125ad30"]]);export{P as default};
