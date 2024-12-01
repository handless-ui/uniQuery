function e(e,t,a,n,r){var l,i,s,u,o,h=[],g=.1;"polar"==r.cs?(i="arc","angle"==r.label?(s=-.5*Math.PI,u=2*Math.PI,o=.9*r.radius):(s=r.radius*g,u=.9*r.radius,o=2*Math.PI)):"cartesian2d"==r.cs&&(i="rect","x"==r.label?(s=r.x,u=r.width,o=-1*r.height):(s=r.y,u=-1*r.height,o=r.width));var d=u/e.length,p=d*(1-.7)*.5,y=(d-2*p)/a,c=0,x=function(e){return(e-n[0])/(n[n.length-1]-n[0]+c)*o},f=function(e){return s+d*e+p+y*t};if("polar"==r.cs)if("angle"==r.label)for(l=0;l<e.length;l++)h.push({beginDeg:f(l),deg:y,radius:[g*r.radius,g*r.radius+x(e[l])],cx:r.cx,cy:r.cy,value:"radius"});else for(c=n[1]-n[0],l=0;l<e.length;l++)h.push({beginDeg:-.5*Math.PI,deg:x(e[l]),radius:[f(l),f(l)+y],cx:r.cx,cy:r.cy,value:"deg"});else if("cartesian2d"==r.cs)if("x"==r.label)for(l=0;l<e.length;l++)h.push({x:f(l),y:r.y,width:y,height:x(e[l]),value:"height"});else for(l=0;l<e.length;l++)h.push({x:r.x,y:f(l),width:x(e[l]),height:y,value:"width"});return{type:"bar",rects:h,method:i,index:t}}function t(e){var t,a=0,n=[];for(t=0;t<e.data.length;t++)a+=e.data[t];var r,l=e.beginDeg;for(t=0;t<e.data.length;t++)r=e.data[t]/a*e.deg,n.push({beginDeg:l,deg:r,radius:e.radius,cx:e.center[0],cy:e.center[1]}),l+=r;return{type:"pie",arcs:n,method:"arc"}}function a(e,t,a,n,r,l,i){var s,u,o,h,g=[],d=[],p=[],y=[];if("x"==i){for(h=a/l.length,s=0;s<l.length;s++)g.push({x:h*(s+.5)+e,y:t,content:l[s]});for(s=0;s<l.length+1;s++)p.push({x:h*s+e,y:t});for(h=-1*n/(r.length-1),s=0;s<r.length;s++)o=t+h*s,d.push({x:e,y:o,content:r[s]}),y.push({x:e,y:o})}else{for(h=a/(r.length-1),s=0;s<r.length;s++)u=e+h*s,g.push({x:u,y:t,content:r[s]}),p.push({x:u,y:t});for(h=-1*n/l.length,s=0;s<l.length;s++)d.push({x:e,y:h*(s+.5)+t,content:l[s]});for(s=0;s<l.length+1;s++)y.push({x:e,y:h*s+t})}return{label:i,xAxis:{texts:g,masks:p,begin:{x:e,y:t},end:{x:e+a,y:t}},yAxis:{texts:d,masks:y,begin:{x:e,y:t},end:{x:e,y:t-n}}}}function n(e,t,a,n,r,l,i){var s,u,o,h,g,d=[],p=[],y=[],c=[],x=.1;if("angle"==i){for(g=2*Math.PI/l.length,s=0;s<l.length;s++)u=g*(s+.5)-.5*Math.PI,o=e.rotate(t,a,u,t+n,a),d.push({x:o[0],y:o[1],content:l[s],deg:u});for(s=0;s<l.length+1;s++)u=g*s-.5*Math.PI,o=e.rotate(t,a,u,t+n,a),y.push({x:o[0],y:o[1]});for(g=-1*n*.9/(r.length-1),s=0;s<r.length;s++)h=a+g*s-n*x,p.push({x:t,y:h,content:r[s]}),c.push({x:t,y:h})}else{for(g=2*Math.PI/r.length,s=0;s<r.length;s++)u=g*s-.5*Math.PI,o=e.rotate(t,a,u,t+n,a),d.push({x:o[0],y:o[1],content:r[s],deg:u}),y.push({x:o[0],y:o[1]});for(g=-1*n*.9/l.length,s=0;s<l.length;s++)p.push({x:t,y:a+(s+.5)*g-n*x,content:l[s]});for(s=0;s<l.length+1;s++)c.push({x:t,y:a+s*g-n*x})}return{label:i,angleAxis:{texts:d,masks:y,cx:t,cy:a,radius:n,beginDeg:-.5*Math.PI,deg:2*Math.PI},radiusAxis:{texts:p,masks:c,cx:t,cy:a,begin:{x:t,y:a-n*x},end:{x:t,y:a-n}}}}function r(e){for(var t=null,a=null,n=null,r=null,l=function(e){for(var l=0;l<e.length;l++)for(var i=0;i<e[l].length;i++){var s=e[l][i][0],u=e[l][i][1];(null==t||t>s)&&(t=s),(null==a||a<s)&&(a=s),(null==n||n>u)&&(n=u),(null==r||r<u)&&(r=u)}},i=e.features,s=0;s<i.length;s++)if("Polygon"==i[s].geometry.type)l(i[s].geometry.coordinates);else if("MultiPolygon"==i[s].geometry.type)for(var u=0;u<i[s].geometry.coordinates.length;u++)l(i[s].geometry.coordinates[u]);return[t,a,n,r]}var l={},i=null;function s(l){this._option={grid:{left:50,right:50,top:50,bottom:50},xAxis:{type:"category"},yAxis:{type:"value"},radiusAxis:{type:"value"},angleAxis:{type:"category"},series:[]},this._hasTask=!1,this.$render=function(l,i,s){var u,o,h,g,d,p,y=i.grid.width-i.grid.left-i.grid.right,c=i.grid.height-i.grid.top-i.grid.bottom,x=.5*y+i.grid.left,f=.5*c+i.grid.top,m=null,v=null,b=null,M=null,A=null,P=null,I=null,k=null,w=0,_=0;for(u=0;u<i.series.length;u++)if(!(g=i.series[u]).coordinateSystem&&["custom","map","pie"].indexOf(g.type)<0&&(g.coordinateSystem="cartesian2d"),"map"==g.type)s[g.map].mll||(s[g.map].mll=r(s[g.map].data)),h=s[g.map].mll,(null==m||m>h[0])&&(m=h[0]),(null==v||v<h[1])&&(v=h[1]),(null==b||b>h[2])&&(b=h[2]),(null==M||M<h[3])&&(M=h[3]);else if("pie"==g.type)g.center||(g.center=[x,f]),g.radius||(g.radius=[0,.5*Math.min(y,c)]),"beginDeg"in g||(g.beginDeg=.5*-Math.PI),g.deg||(g.deg=2*Math.PI);else if("polar"==g.coordinateSystem){for(o=0;o<g.data.length;o++)(null==I||I>g.data[o])&&(I=g.data[o]),(null==k||k<g.data[o])&&(k=g.data[o]);"bar"==g.type&&(_+=1)}else if("cartesian2d"==g.coordinateSystem){for(o=0;o<g.data.length;o++)(null==A||A>g.data[o])&&(A=g.data[o]),(null==P||P<g.data[o])&&(P=g.data[o]);"bar"==g.type&&(w+=1)}A&&P&&(d=l.ruler(P,A,5)),I&&k&&(p=l.ruler(k,I,5));var D=function(e,t,a,n,r,l,i){if(n){var s=.72*t/(r-n),u=.575*a/(i-l);return new e.Mercator(s<u?s:u,[.5*(n+r),.5*(l+i)])}return null}(l,y,c,m,v,b,M),S=0,T=0,O=[];for(u=0;u<i.series.length;u++)"custom"==(g=i.series[u]).type?O.push({type:"custom"}):"map"==g.type?O.push({type:"map",geojson:s[g.map].data}):"pie"==g.type?O.push(t(g)):"bar"==g.type&&("polar"==g.coordinateSystem?(O.push(e(g.data,S,_,p,{cs:"polar",label:"value"==i.radiusAxis.type?"angle":"radius",cx:x,cy:f,radius:.5*Math.min(y,c)})),S+=1):"cartesian2d"==g.coordinateSystem&&(O.push(e(g.data,T,w,d,{cs:"cartesian2d",label:"value"==i.yAxis.type?"x":"y",x:i.grid.left,y:i.grid.top+c,width:y,height:c})),T+=1));i.update({map:D,cx:x,cy:f,grid:i.grid,series:O,polar:p?n(l,x,f,.5*Math.min(y,c),p,"value"==i.radiusAxis.type?i.angleAxis.data:i.radiusAxis.data,"value"==i.radiusAxis.type?"angle":"radius"):null,cartesian2d:d?a(i.grid.left,i.grid.top+c,y,c,d,"value"==i.xAxis.type?i.yAxis.data:i.xAxis.data,"value"==i.xAxis.type?"y":"x"):null})},l&&this.setOption(l)}s.registerMap=function(e,t){return l[e]={data:t,mll:null},s},s.install=function(e){return i=e,s},s.prototype.setOption=function(e){var t=this;i.mergeOption(this._option,e),this._option.update&&(this._hasTask||(this._hasTask=!0,setTimeout((function(){t.$render(i,t._option,l),t._hasTask=!1}),0)))};export{s as C};
