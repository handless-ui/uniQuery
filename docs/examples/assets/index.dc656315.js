import{d as e,r as a,j as s,A as o,o as t,c as l,w as p,f as r,x as u,u as i,i as n}from"./index-df4b44f3.js";import{_ as c}from"./plugin-vueexport-helper.1b428a4d.js";const d=c(e({name:"UQPopup",props:{show:{type:Boolean,default:!1},mask:{type:Boolean,default:!0}},emits:["click"],setup(e,{emit:c}){const d=e;let m=a(!1),f=a(0),k=()=>{c("click")};return s((()=>d.show),(e=>{e?(m.value=!0,o((()=>{setTimeout((()=>{f.value=1}),50)}))):(f.value=0,setTimeout((()=>{m.value=!1}),300))}),{immediate:!0}),(a,s)=>{const o=n;return t(),l(o,{class:"popup-container",style:u([{opacity:i(f),display:i(m)?"block":"none",backgroundColor:e.mask?"rgba(0, 0, 0, 0.7)":"transparent"}]),onClick:s[0]||(s[0]=e=>i(k)())},{default:p((()=>[r(a.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}}),[["__scopeId","data-v-a4010eed"]]);export{d as U};
