import{d as e,r as a,h as l,z as t,o as s,c as n,w as u,a as o,k as r,x as c,u as d,b as m,y,t as f,F as i,v as h,n as p,A as _,i as v,e as x,m as b,p as k,I as C,q as g}from"./index-7053ad66.js";import{U as w}from"./index.acf895dc.js";import{_ as j}from"./_plugin-vue_export-helper.1b428a4d.js";let I=function(e,a){return 2==a?e%4!=0||e%100==0&&e%400!=0?28:29:[31,-1,31,30,31,30,31,31,30,31,30,31][a-1]};const D=j(e({name:"UQCalendar",setup(e,{expose:x}){let b={},k=new Date,C=a(!1),g=a("-840rpx"),j=l({year:0,month:0}),D=l({year:0,month:0,day:0}),F=l({year:k.getFullYear(),month:k.getMonth()+1,day:k.getDate()}),T=a([]),U=t((()=>0!=D.year||0!=D.month||0!=D.day)),q=e=>{C.value=!1,g.value="-840rpx",e?b.resolve(e):b.reject("用户取消了选择")},z=(e,a)=>{"day"==a&&(D.year=j.year,D.month=j.month,D.day=e)},A=()=>{T.value=function(e,a){let l=[],t=new Date(e+"/"+a+"/1").getDay()-1;-1==t&&(t=6);let s=I(1==a?e-1:e,1==a?12:a-1);for(let o=0;o<t;o++)l.push({value:s-o+1,type:"pre"});let n=I(e,a);for(let o=1;o<=n;o++)l.push({value:o,type:"day"});let u=42-t-n;for(let o=1;o<=u;o++)l.push({value:o,type:"next"});return l}(j.year,j.month)},M=()=>{1==j.month?(j.year-=1,j.month=12):j.month-=1,A()},P=()=>{12==j.month?(j.year+=1,j.month=1):j.month+=1,A()};return x({open:e=>(e?(j={year:e.year,month:e.month},D.year=e.year,D.month=e.month,D.day=e.day):j={year:F.year,month:F.month},A(),C.value=!0,_((()=>{setTimeout((()=>{g.value="0"}),50)})),new Promise(((e,a)=>{b={resolve:e,reject:a}})))}),(e,a)=>{const l=v;return s(),n(w,{show:d(C),onClick:a[5]||(a[5]=e=>d(q)())},{default:u((()=>[o(l,{onClick:a[4]||(a[4]=r((()=>{}),["stop"])),class:"calendar-container",style:c([{bottom:d(g)}])},{default:u((()=>[o(l,{class:"title"},{default:u((()=>[m(" 日期选择 ")])),_:1}),o(l,{class:"nav"},{default:u((()=>[o(l,{class:"left btn",onClick:a[0]||(a[0]=e=>d(M)())},{default:u((()=>[m("上个月")])),_:1}),o(l,{class:"center"},{default:u((()=>[m(y(d(j).year)+"年"+y(d(j).month)+"月",1)])),_:1}),o(l,{class:"right btn",onClick:a[1]||(a[1]=e=>d(P)())},{default:u((()=>[m("下个月")])),_:1})])),_:1}),o(l,{class:"top"},{default:u((()=>[o(l,{class:"item"},{default:u((()=>[m("周一")])),_:1}),o(l,{class:"item"},{default:u((()=>[m("周二")])),_:1}),o(l,{class:"item"},{default:u((()=>[m("周三")])),_:1}),o(l,{class:"item"},{default:u((()=>[m("周四")])),_:1}),o(l,{class:"item"},{default:u((()=>[m("周五")])),_:1}),o(l,{class:"item"},{default:u((()=>[m("周六")])),_:1}),o(l,{class:"item"},{default:u((()=>[m("周日")])),_:1})])),_:1}),o(l,{class:"list"},{default:u((()=>[o(l,{class:"bg"},{default:u((()=>[m(y(d(j).month),1)])),_:1}),(s(!0),f(i,null,h(d(T),((e,a)=>(s(),n(l,{class:p(["item "+e.type]),key:a,onClick:a=>d(z)(e.value,e.type)},{default:u((()=>[o(l,{class:p(["value",{active:d(D).year==d(j).year&&d(D).month==d(j).month&&d(D).day==e.value},{today:d(F).year==d(j).year&&d(F).month==d(j).month&&d(F).day==e.value}])},{default:u((()=>[m(y(e.value),1)])),_:2},1032,["class"])])),_:2},1032,["class","onClick"])))),128))])),_:1}),o(l,{class:"btns"},{default:u((()=>[o(l,{class:"btn cancel",onClick:a[2]||(a[2]=e=>d(q)())},{default:u((()=>[m("取消")])),_:1}),o(l,{class:p(["btn submit",[{disabled:!d(U)}]]),onClick:a[3]||(a[3]=e=>d(U)?d(q)(d(D)):"")},{default:u((()=>[m("确定")])),_:1},8,["class"])])),_:1})])),_:1},8,["style"])])),_:1},8,["show"])}}}),[["__scopeId","data-v-e35e175e"]]),F=j(e({__name:"index",setup(e){let t=a(),r=l({value1:{year:2007,month:7,day:1},value2:null}),c=e=>{t.value.open(r[e]).then((a=>{console.log(a),r[e]=a})).catch((e=>{console.error(e)}))};return x((()=>{setTimeout((()=>{c("value1")}),500)})),(e,a)=>{const l=b(k("ui-calendar"),D),y=v,f=C,i=g;return s(),n(y,{class:"example-container"},{default:u((()=>[o(l,{ref_key:"mycalendarRef",ref:t},null,512),o(y,{class:"example-title"},{default:u((()=>[m(" 有默认值： ")])),_:1}),o(y,{class:"example-btnInput",onClick:a[0]||(a[0]=e=>d(c)("value1"))},{default:u((()=>[o(f,{readonly:"",type:"text",value:d(r).value1.year+"年"+d(r).value1.month+"月"+d(r).value1.day+"日",placeholder:"请选择日期"},null,8,["value"]),o(i,null,{default:u((()=>[m("选择")])),_:1})])),_:1}),o(y,{class:"example-title"},{default:u((()=>[m(" 无默认值： ")])),_:1}),o(y,{class:"example-btnInput",onClick:a[1]||(a[1]=e=>d(c)("value2"))},{default:u((()=>[o(f,{readonly:"",type:"text",value:d(r).value2?d(r).value2.year+"年"+d(r).value2.month+"月"+d(r).value2.day+"日":"",placeholder:"请选择日期"},null,8,["value"]),o(i,null,{default:u((()=>[m("选择")])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-7cd16bfa"]]);export{F as default};