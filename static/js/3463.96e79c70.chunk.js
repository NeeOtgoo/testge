"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[3463],{12735:function(e,t,n){n.d(t,{$V:function(){return u},gR:function(){return m},ji:function(){return f},ju:function(){return v},pM:function(){return d}});var a,r,i,s,c,l=n(30168),o=n(27570),d=(0,o.Ps)(a||(a=(0,l.Z)(["\n    query allNews ($offset: Int) {\n        allNews (offset: $offset) {\n            id\n            title\n            description\n            image\n            createdAt\n        }\n    }\n"]))),u=(0,o.Ps)(r||(r=(0,l.Z)(["\n    query newsById($id: ID!) {\n        newsById(id: $id) {\n            id\n            title\n            description\n            image\n            createdAt\n        }\n    }\n"]))),m=(0,o.Ps)(i||(i=(0,l.Z)(["\n    mutation createNews($title: String, $description: String, $image: Upload) {\n        createNews(title: $title, description: $description, image: $image) {\n            news {\n                id\n                title\n                description\n                image\n                createdAt\n            }\n        }\n    }\n"]))),f=(0,o.Ps)(s||(s=(0,l.Z)(["\n    mutation updateNews($id: ID, $title: String, $description: String, $image: Upload) {\n        updateNews(id: $id, title: $title, description: $description, image: $image) {\n            news {\n                id\n                title\n                description\n                image\n                createdAt\n            }\n        }\n    }\n"]))),v=(0,o.Ps)(c||(c=(0,l.Z)(["\n    mutation deleteNews($id: ID) {\n        deleteNews(id: $id) {\n            news {\n                title\n            }\n        }\n    }\n"])))},3463:function(e,t,n){n.r(t),n.d(t,{DefaultDashboard:function(){return h},default:function(){return x}});var a,r=n(29439),i=n(30168),s=n(72791),c=n(58361),l=n(80184),o=function(e){var t=e.title,n=e.value,a=e.Svg;return(0,l.jsxs)("div",{className:"flex justify-between items-center bg-gradient-to-br from-emind to-emind-300  rounded-2 p-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"mb-0 font-bold text-white",children:n}),(0,l.jsx)("h4",{className:"mb-0 text-white",children:t})]}),(0,l.jsx)("div",{children:(0,l.jsx)(a,{className:"h-16 w-16 fill-white"})})]})},d=n(64880),u=n(27570),m=n(96578),f=n(82630),v=n(17734),g=n(37856),p=(0,u.Ps)(a||(a=(0,i.Z)(["\n    query dashboard {\n        dashboard {\n            studentCount\n            teacherCount\n            parentCount\n            subjectCount\n            logins {\n                loginDate\n                loginCount\n            }\n        }\n    }\n"]))),h=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,m.a)(p,{onCompleted:function(e){a([{title:(0,l.jsx)(f.Z,{id:"student-registration"}),value:e.dashboard.studentCount,svg:v.mt,color:"rgba(159, 177, 183, .1)"},{title:(0,l.jsx)(f.Z,{id:"teacher-registration"}),value:e.dashboard.teacherCount,svg:v.TO,color:"rgba(159, 177, 183, .1)"},{title:(0,l.jsx)(f.Z,{id:"parent-registration"}),value:e.dashboard.parentCount,svg:v.g1,color:"rgba(159, 177, 183, .1)"},{title:(0,l.jsx)(f.Z,{id:"subject-registration"}),value:e.dashboard.subjectCount,svg:v.Ek,color:"rgba(159, 177, 183, .1)"}])}}).loading;return(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsx)(c.Z,{loading:i,active:!0,rows:6,children:(0,l.jsx)("div",{className:"grid gap-4 md:grid-cols-4",children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,l.jsx)(o,{color:e.color,title:e.title,value:e.value,Svg:e.svg},t)}))})}),(0,l.jsx)(g.Z,{})]})},x=(0,d.EN)(h)},37856:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(93433),r=n(29439),i=n(96578),s=n(38937),c=n(59305),l=n(12735),o=n(72426),d=n.n(o),u=n(72791),m=n(91523),f=n(80184);function v(){var e=(0,u.useState)(0),t=(0,r.Z)(e,2),n=t[0],o=t[1],v=(0,u.useState)(!0),g=(0,r.Z)(v,2),p=g[0],h=g[1],x=(0,u.useState)([]),w=(0,r.Z)(x,2),Z=w[0],N=w[1],C=(0,i.a)(l.pM,{variables:{offset:n},onCompleted:function(e){e.allNews.length<12&&h(!1),N((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e.allNews))}))}}).loading;return(0,u.useEffect)((function(){var e=function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.scrollHeight||document.body.scrollHeight;e+(document.documentElement.clientHeight||window.innerHeight)>=t-100&&o((function(e){return e+12}))};return p&&!C?window.addEventListener("scroll",e):window.removeEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[p,C]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-4",children:Z.map((function(e){return(0,f.jsxs)(m.rU,{to:"/app/news/".concat(e.id),className:"bg-white overflow-hidden border-b-4 border-emind ",children:[(0,f.jsx)("img",{src:c._O+e.image,alt:e.image,className:"w-full object-cover h-32 sm:h-48 md:h-64"}),(0,f.jsxs)("div",{className:"p-4 md:p-6",children:[(0,f.jsx)("h3",{className:"font-semibold mb-2 text-xl leading-tight sm:leading-normal",children:e.title}),(0,f.jsxs)("div",{className:"text-sm flex items-center",children:[(0,f.jsxs)("svg",{className:"opacity-75 mr-2",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:12,height:12,viewBox:"0 0 97.16 97.16",style:{enableBackground:"new 0 0 97.16 97.16"},xmlSpace:"preserve",children:[(0,f.jsx)("path",{d:"M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"}),(0,f.jsx)("path",{d:"M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"})]}),(0,f.jsx)("p",{className:"leading-none my-auto",children:d()(e.createdAt).format("YYYY-MM-DD")})]})]})]},e.id)}))}),C&&(0,f.jsx)(s.Z,{})]})}},58361:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(4942),r=n(87462),i=n(71002),s=n(72791),c=n(81694),l=n.n(c),o=function(e){var t=e.prefixCls,n=e.className,a=e.width,i=e.style;return s.createElement("h3",{className:l()(t,n),style:(0,r.Z)({width:a},i)})},d=n(93433),u=function(e){var t=function(t){var n=e.width,a=e.rows,r=void 0===a?2:a;return Array.isArray(n)?n[t]:r-1===t?n:void 0},n=e.prefixCls,a=e.className,r=e.style,i=e.rows,c=(0,d.Z)(Array(i)).map((function(e,n){return s.createElement("li",{key:n,style:{width:t(n)}})}));return s.createElement("ul",{className:l()(n,a),style:r},c)},m=n(69077),f=function(e){var t,n,i=e.prefixCls,c=e.className,o=e.style,d=e.size,u=e.shape,m=l()((t={},(0,a.Z)(t,"".concat(i,"-lg"),"large"===d),(0,a.Z)(t,"".concat(i,"-sm"),"small"===d),t)),f=l()((n={},(0,a.Z)(n,"".concat(i,"-circle"),"circle"===u),(0,a.Z)(n,"".concat(i,"-square"),"square"===u),(0,a.Z)(n,"".concat(i,"-round"),"round"===u),n)),v="number"===typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{};return s.createElement("span",{className:l()(i,m,f,c),style:(0,r.Z)((0,r.Z)({},v),o)})},v=n(41818),g=function(e){var t=function(t){var n=t.getPrefixCls,i=e.prefixCls,c=e.className,o=e.active,d=n("skeleton",i),u=(0,v.Z)(e,["prefixCls","className"]),m=l()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),o),c);return s.createElement("div",{className:m},s.createElement(f,(0,r.Z)({prefixCls:"".concat(d,"-avatar")},u)))};return s.createElement(m.C,null,t)};g.defaultProps={size:"default",shape:"circle"};var p=g,h=function(e){var t=function(t){var n=t.getPrefixCls,i=e.prefixCls,c=e.className,o=e.active,d=n("skeleton",i),u=(0,v.Z)(e,["prefixCls"]),m=l()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),o),c);return s.createElement("div",{className:m},s.createElement(f,(0,r.Z)({prefixCls:"".concat(d,"-button")},u)))};return s.createElement(m.C,null,t)};h.defaultProps={size:"default"};var x=h,w=function(e){var t=function(t){var n=t.getPrefixCls,i=e.prefixCls,c=e.className,o=e.active,d=n("skeleton",i),u=(0,v.Z)(e,["prefixCls"]),m=l()(d,"".concat(d,"-element"),(0,a.Z)({},"".concat(d,"-active"),o),c);return s.createElement("div",{className:m},s.createElement(f,(0,r.Z)({prefixCls:"".concat(d,"-input")},u)))};return s.createElement(m.C,null,t)};w.defaultProps={size:"default"};var Z=w,N=function(e){var t=function(t){var n=t.getPrefixCls,a=e.prefixCls,r=e.className,i=e.style,c=n("skeleton",a),o=l()(c,"".concat(c,"-element"),r);return s.createElement("div",{className:o},s.createElement("div",{className:l()("".concat(c,"-image"),r),style:i},s.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(c,"-image-svg")},s.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(c,"-image-path")}))))};return s.createElement(m.C,null,t)};function C(e){return e&&"object"===(0,i.Z)(e)?e:{}}var b=function(e){var t=function(t){var n=t.getPrefixCls,i=t.direction,c=e.prefixCls,d=e.loading,m=e.className,v=e.children,g=e.avatar,p=e.title,h=e.paragraph,x=e.active,w=e.round,Z=n("skeleton",c);if(d||!("loading"in e)){var N,b,j,E=!!g,y=!!p,$=!!h;if(E){var S=(0,r.Z)((0,r.Z)({prefixCls:"".concat(Z,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(y,$)),C(g));b=s.createElement("div",{className:"".concat(Z,"-header")},s.createElement(f,S))}if(y||$){var q,P;if(y){var k=(0,r.Z)((0,r.Z)({prefixCls:"".concat(Z,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(E,$)),C(p));q=s.createElement(o,k)}if($){var z=(0,r.Z)((0,r.Z)({prefixCls:"".concat(Z,"-paragraph")},function(e,t){var n={};return e&&t||(n.width="61%"),n.rows=!e&&t?3:2,n}(E,y)),C(h));P=s.createElement(u,z)}j=s.createElement("div",{className:"".concat(Z,"-content")},q,P)}var M=l()(Z,(N={},(0,a.Z)(N,"".concat(Z,"-with-avatar"),E),(0,a.Z)(N,"".concat(Z,"-active"),x),(0,a.Z)(N,"".concat(Z,"-rtl"),"rtl"===i),(0,a.Z)(N,"".concat(Z,"-round"),w),N),m);return s.createElement("div",{className:M},b,j)}return v};return s.createElement(m.C,null,t)};b.defaultProps={avatar:!1,title:!0,paragraph:!0},b.Button=x,b.Avatar=p,b.Input=Z,b.Image=N;var j=b}}]);
//# sourceMappingURL=3463.96e79c70.chunk.js.map