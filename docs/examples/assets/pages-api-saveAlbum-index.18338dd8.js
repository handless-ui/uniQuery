import{d as e,r as a,e as t,o as n,c as s,w as o,a as i,u as l,b as r,q as u,i as c}from"./index-7053ad66.js";import{V as h}from"./ui-canvas.8f8150d9.js";import{_ as p}from"./_plugin-vue_export-helper.1b428a4d.js";const d=p(e({__name:"index",setup(e){let p,d=uni.upx2px(500),m=uni.upx2px(500),f=a();t((()=>{f.value.fetch().then((e=>{e.fillCircle(.5*d,.5*d,.5*d).draw(),p=e}))}));let x=()=>{p.toDataURL().then((e=>{uni.$uniQuery.saveAlbum(e).then((()=>{uni.showModal({title:"温馨提示",content:"保存图片到相册成功",showCancel:!1})})).catch((e=>{console.error(e),uni.showModal({title:"温馨提示",content:"保存图片到相册失败",showCancel:!1})}))}))};return(e,a)=>{const t=u,p=c;return n(),s(p,{class:"example-container"},{default:o((()=>[i(h,{region:!1,ref_key:"mycanvasRef",ref:f,width:l(d),height:l(m)},null,8,["width","height"]),i(t,{class:"example-btnbottom",type:"primary",onClick:l(x)},{default:o((()=>[r("保存")])),_:1},8,["onClick"])])),_:1})}}}),[["__scopeId","data-v-04530ea7"]]);export{d as default};