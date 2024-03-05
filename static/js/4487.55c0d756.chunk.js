"use strict";(self.webpackChunkemind=self.webpackChunkemind||[]).push([[4487],{37295:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1413),o=n(72791),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},i=n(8711),c=function(e,t){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};c.displayName="DownOutlined";var l=o.forwardRef(c)},19581:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(29439),o=n(72791);function a(){var e=o.useReducer((function(e){return e+1}),0);return(0,r.Z)(e,2)[1]}},66871:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(4942),o=n(87462),a=n(72791),i=n(81694),c=n.n(i),l=n(41818),u=n(69077),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},s=function(e){var t=e.prefixCls,n=e.className,i=e.hoverable,l=void 0===i||i,s=d(e,["prefixCls","className","hoverable"]);return a.createElement(u.C,null,(function(e){var i=(0,e.getPrefixCls)("card",t),u=c()("".concat(i,"-grid"),n,(0,r.Z)({},"".concat(i,"-grid-hoverable"),l));return a.createElement("div",(0,o.Z)({},s,{className:u}))}))},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},f=function(e){return a.createElement(u.C,null,(function(t){var n=t.getPrefixCls,r=e.prefixCls,i=e.className,l=e.avatar,u=e.title,d=e.description,s=v(e,["prefixCls","className","avatar","title","description"]),f=n("card",r),m=c()("".concat(f,"-meta"),i),p=l?a.createElement("div",{className:"".concat(f,"-meta-avatar")},l):null,h=u?a.createElement("div",{className:"".concat(f,"-meta-title")},u):null,g=d?a.createElement("div",{className:"".concat(f,"-meta-description")},d):null,b=h||g?a.createElement("div",{className:"".concat(f,"-meta-detail")},h,g):null;return a.createElement("div",(0,o.Z)({},s,{className:m}),p,b)}))},m=n(3323),p=n(66106),h=n(30914),g=n(1815),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var y=function(e){var t,n,i,d=a.useContext(u.E_),v=d.getPrefixCls,f=d.direction,y=a.useContext(g.Z),E=e.prefixCls,C=e.className,Z=e.extra,w=e.headStyle,N=void 0===w?{}:w,k=e.bodyStyle,x=void 0===k?{}:k,O=e.title,S=e.loading,T=e.bordered,L=void 0===T||T,M=e.size,P=e.type,j=e.cover,R=e.actions,W=e.tabList,I=e.children,H=e.activeTabKey,z=e.defaultActiveTabKey,D=e.tabBarExtraContent,K=e.hoverable,B=e.tabProps,A=void 0===B?{}:B,U=b(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),V=v("card",E),X=0===x.padding||"0px"===x.padding?{padding:24}:void 0,Y=a.createElement("div",{className:"".concat(V,"-loading-block")}),_=a.createElement("div",{className:"".concat(V,"-loading-content"),style:X},a.createElement(p.Z,{gutter:8},a.createElement(h.Z,{span:22},Y)),a.createElement(p.Z,{gutter:8},a.createElement(h.Z,{span:8},Y),a.createElement(h.Z,{span:15},Y)),a.createElement(p.Z,{gutter:8},a.createElement(h.Z,{span:6},Y),a.createElement(h.Z,{span:18},Y)),a.createElement(p.Z,{gutter:8},a.createElement(h.Z,{span:13},Y),a.createElement(h.Z,{span:9},Y)),a.createElement(p.Z,{gutter:8},a.createElement(h.Z,{span:4},Y),a.createElement(h.Z,{span:3},Y),a.createElement(h.Z,{span:16},Y))),q=void 0!==H,G=(0,o.Z)((0,o.Z)({},A),(t={},(0,r.Z)(t,q?"activeKey":"defaultActiveKey",q?H:z),(0,r.Z)(t,"tabBarExtraContent",D),t)),J=W&&W.length?a.createElement(m.Z,(0,o.Z)({size:"large"},G,{className:"".concat(V,"-head-tabs"),onChange:function(t){var n;null===(n=e.onTabChange)||void 0===n||n.call(e,t)}}),W.map((function(e){return a.createElement(m.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(O||Z||J)&&(i=a.createElement("div",{className:"".concat(V,"-head"),style:N},a.createElement("div",{className:"".concat(V,"-head-wrapper")},O&&a.createElement("div",{className:"".concat(V,"-head-title")},O),Z&&a.createElement("div",{className:"".concat(V,"-extra")},Z)),J));var Q=j?a.createElement("div",{className:"".concat(V,"-cover")},j):null,$=a.createElement("div",{className:"".concat(V,"-body"),style:x},S?_:I),F=R&&R.length?a.createElement("ul",{className:"".concat(V,"-actions")},function(e){return e.map((function(t,n){return a.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},a.createElement("span",null,t))}))}(R)):null,ee=(0,l.Z)(U,["onTabChange"]),te=M||y,ne=c()(V,(n={},(0,r.Z)(n,"".concat(V,"-loading"),S),(0,r.Z)(n,"".concat(V,"-bordered"),L),(0,r.Z)(n,"".concat(V,"-hoverable"),K),(0,r.Z)(n,"".concat(V,"-contain-grid"),function(){var t;return a.Children.forEach(e.children,(function(e){e&&e.type&&e.type===s&&(t=!0)})),t}()),(0,r.Z)(n,"".concat(V,"-contain-tabs"),W&&W.length),(0,r.Z)(n,"".concat(V,"-").concat(te),te),(0,r.Z)(n,"".concat(V,"-type-").concat(P),!!P),(0,r.Z)(n,"".concat(V,"-rtl"),"rtl"===f),n),C);return a.createElement("div",(0,o.Z)({},ee,{className:ne}),i,Q,$,F)};y.Grid=s,y.Meta=f;var E=y},14640:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(15671),o=n(43144),a=n(60136),i=n(29388),c=n(71002),l=n(72791),u=n(75314),d=n(10818),s=n(14937),v=n(69025);var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return{};var n=t.element,r=void 0===n?document.body:n,o={},a=Object.keys(e);return a.forEach((function(e){o[e]=r.style[e]})),a.forEach((function(t){r.style[t]=e[t]})),o};var m={},p=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),r=document.body.className;if(e){if(!n.test(r))return;return f(m),m={},void(document.body.className=r.replace(n,"").trim())}var o=(0,v.Z)();if(o&&(m=f({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!n.test(r))){var a="".concat(r," ").concat(t);document.body.className=a.trim()}}},h=n(93433),g=0,b=[],y="ant-scrolling-effect",E=new RegExp("".concat(y),"g"),C=new Map,Z=(0,o.Z)((function e(t){var n=this;(0,r.Z)(this,e),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var e;return null===(e=n.options)||void 0===e?void 0:e.container},this.reLock=function(e){var t=b.find((function(e){return e.target===n.lockTarget}));t&&n.unLock(),n.options=e,t&&(t.options=e,n.lock())},this.lock=function(){var e;if(!b.some((function(e){return e.target===n.lockTarget})))if(b.some((function(e){var t,r=e.options;return(null===r||void 0===r?void 0:r.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})))b=[].concat((0,h.Z)(b),[{target:n.lockTarget,options:n.options}]);else{var t=0,r=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body;(r===document.body&&window.innerWidth-document.documentElement.clientWidth>0||r.scrollHeight>r.clientHeight)&&(t=(0,v.Z)());var o=r.className;if(0===b.filter((function(e){var t,r=e.options;return(null===r||void 0===r?void 0:r.container)===(null===(t=n.options)||void 0===t?void 0:t.container)})).length&&C.set(r,f({width:0!==t?"calc(100% - ".concat(t,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:r})),!E.test(o)){var a="".concat(o," ").concat(y);r.className=a.trim()}b=[].concat((0,h.Z)(b),[{target:n.lockTarget,options:n.options}])}},this.unLock=function(){var e,t=b.find((function(e){return e.target===n.lockTarget}));if(b=b.filter((function(e){return e.target!==n.lockTarget})),t&&!b.some((function(e){var n,r=e.options;return(null===r||void 0===r?void 0:r.container)===(null===(n=t.options)||void 0===n?void 0:n.container)}))){var r=(null===(e=n.options)||void 0===e?void 0:e.container)||document.body,o=r.className;E.test(o)&&(f(C.get(r),{element:r}),C.delete(r),r.className=r.className.replace(E,"").trim())}},this.lockTarget=g++,this.options=t})),w=0,N=(0,s.Z)();var k={},x=function(e){if(!N)return null;if(e){if("string"===typeof e)return document.querySelectorAll(e)[0];if("function"===typeof e)return e();if("object"===(0,c.Z)(e)&&e instanceof window.HTMLElement)return e}return document.body},O=function(e){(0,a.Z)(n,e);var t=(0,i.Z)(n);function n(e){var o;return(0,r.Z)(this,n),(o=t.call(this,e)).container=void 0,o.componentRef=l.createRef(),o.rafId=void 0,o.scrollLocker=void 0,o.renderComponent=void 0,o.updateScrollLocker=function(e){var t=(e||{}).visible,n=o.props,r=n.getContainer,a=n.visible;a&&a!==t&&N&&x(r)!==o.scrollLocker.getContainer()&&o.scrollLocker.reLock({container:x(r)})},o.updateOpenCount=function(e){var t=e||{},n=t.visible,r=t.getContainer,a=o.props,i=a.visible,c=a.getContainer;i!==n&&N&&x(c)===document.body&&(i&&!n?w+=1:e&&(w-=1)),("function"===typeof c&&"function"===typeof r?c.toString()!==r.toString():c!==r)&&o.removeCurrentContainer()},o.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||o.container&&!o.container.parentNode){var t=x(o.props.getContainer);return!!t&&(t.appendChild(o.container),!0)}return!0},o.getContainer=function(){return N?(o.container||(o.container=document.createElement("div"),o.attachToParent(!0)),o.setWrapperClassName(),o.container):null},o.setWrapperClassName=function(){var e=o.props.wrapperClassName;o.container&&e&&e!==o.container.className&&(o.container.className=e)},o.removeCurrentContainer=function(){var e,t;null===(e=o.container)||void 0===e||null===(t=e.parentNode)||void 0===t||t.removeChild(o.container)},o.switchScrollingEffect=function(){1!==w||Object.keys(k).length?w||(f(k),k={},p(!0)):(p(),k=f({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))},o.scrollLocker=new Z({container:x(e.getContainer)}),o}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,u.Z)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(e){this.updateOpenCount(e),this.updateScrollLocker(e),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;N&&x(n)===document.body&&(w=t&&w?w-1:w),this.removeCurrentContainer(),u.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,r=e.visible,o=null,a={getOpenCount:function(){return w},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(n||r||this.componentRef.current)&&(o=l.createElement(d.Z,{getContainer:this.getContainer,ref:this.componentRef},t(a))),o}}]),n}(l.Component),S=O},69025:function(e,t,n){var r;function o(e){if("undefined"===typeof document)return 0;if(e||void 0===r){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var a=t.offsetWidth;n.style.overflow="scroll";var i=t.offsetWidth;a===i&&(i=n.clientWidth),document.body.removeChild(n),r=a-i}return r}function a(e){var t=e.match(/^(.*)px$/),n=Number(null===t||void 0===t?void 0:t[1]);return Number.isNaN(n)?o():n}function i(e){if("undefined"===typeof document||!e||!(e instanceof Element))return{width:0,height:0};var t=getComputedStyle(e,"::-webkit-scrollbar"),n=t.width,r=t.height;return{width:a(n),height:a(r)}}n.d(t,{Z:function(){return o},o:function(){return i}})},84376:function(e,t,n){n.d(t,{D:function(){return d}});var r=n(3431),o=n(72791),a=n(63124),i=n(5970),c=n(72364),l=n(29484),u=n(65046);function d(e,t){var n=(0,u.x)(null===t||void 0===t?void 0:t.client);(0,c.Vp)(e,c.n_.Mutation);var d=(0,o.useState)({called:!1,loading:!1,client:n}),s=d[0],v=d[1],f=(0,o.useRef)({result:s,mutationId:0,isMounted:!0,client:n,mutation:e,options:t});Object.assign(f.current,{client:n,options:t,mutation:e});var m=(0,o.useCallback)((function(e){void 0===e&&(e={});var t=f.current,n=t.client,o=t.options,c=t.mutation,u=(0,r.pi)((0,r.pi)({},o),{mutation:c});f.current.result.loading||u.ignoreResults||!f.current.isMounted||v(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:n});var d=++f.current.mutationId,s=(0,a.J)(u,e);return n.mutate(s).then((function(t){var r,o,a,c=t.data,u=t.errors,m=u&&u.length>0?new l.c({graphQLErrors:u}):void 0;if(d===f.current.mutationId&&!s.ignoreResults){var p={called:!0,loading:!1,data:c,error:m,client:n};f.current.isMounted&&!(0,i.D)(f.current.result,p)&&v(f.current.result=p)}return null===(o=null===(r=f.current.options)||void 0===r?void 0:r.onCompleted)||void 0===o||o.call(r,t.data,s),null===(a=e.onCompleted)||void 0===a||a.call(e,t.data,s),t})).catch((function(t){var r,o,a,c;if(d===f.current.mutationId&&f.current.isMounted){var l={loading:!1,error:t,data:void 0,called:!0,client:n};(0,i.D)(f.current.result,l)||v(f.current.result=l)}if((null===(r=f.current.options)||void 0===r?void 0:r.onError)||s.onError)return null===(a=null===(o=f.current.options)||void 0===o?void 0:o.onError)||void 0===a||a.call(o,t,s),null===(c=e.onError)||void 0===c||c.call(e,t,s),{data:void 0,errors:t};throw t}))}),[]),p=(0,o.useCallback)((function(){f.current.isMounted&&v({called:!1,loading:!1,client:n})}),[]);return(0,o.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[m,(0,r.pi)({reset:p},s)]}},63330:function(e,t,n){var r=n(72791);var o=r.forwardRef((function(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"}))}));t.Z=o}}]);
//# sourceMappingURL=4487.55c0d756.chunk.js.map