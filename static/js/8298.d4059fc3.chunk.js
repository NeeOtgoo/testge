(self.webpackChunkemind=self.webpackChunkemind||[]).push([[8298],{68470:function(e,t,n){"use strict";n(72791);var i=n(80184),r=function(e){var t=e.children,n=e.className,r=e.alignItems,s=e.justifyContent,o=e.mobileFlex,c=e.flexDirection;return(0,i.jsx)("div",{className:"".concat(o?"d-flex":"d-md-flex"," ").concat(n," ").concat(c?"flex-"+c:""," ").concat(r?"align-items-"+r:""," ").concat(s?"justify-content-"+s:""),children:t})};r.defaultProps={mobileFlex:!0,flexDirection:"row",className:""},t.Z=r},77913:function(e,t,n){"use strict";n.d(t,{On:function(){return m},bK:function(){return p},d1:function(){return f},mv:function(){return Z},nl:function(){return x},yB:function(){return h}});var i,r,s,o,c,a,l,u=n(30168),d=n(27570),p=(0,d.Ps)(i||(i=(0,u.Z)(["\n    query allSupports {\n        allSupports {\n            id\n            title\n            description\n            supportfileSet {\n                id\n                file\n            }\n            supportgroupSet {\n                group {\n                    id\n                }\n            }\n        }\n    }\n"]))),f=(0,d.Ps)(r||(r=(0,u.Z)(["\n    mutation createSupport ($description: String, $title: String){\n        createSupport (description: $description, title: $title) {\n            support {\n                id\n            }\n        }\n    }\n"]))),m=(0,d.Ps)(s||(s=(0,u.Z)(["\n    mutation updateSupport ($description: String, $id: Int, $title: String){\n        updateSupport (description: $description, id: $id, title: $title) {\n            support {\n                id\n            }\n        }\n    }\n"]))),x=(0,d.Ps)(o||(o=(0,u.Z)(["\n    mutation deleteSupport ($id: Int){\n        deleteSupport (id: $id) {\n            support {\n                title\n            }\n        }\n    }\n"]))),h=(0,d.Ps)(c||(c=(0,u.Z)(["\n    mutation createSupportFile ($support: Int, $file: Upload) {\n        createSupportFile (support: $support, file: $file) {\n            supportFile {\n                id\n            }\n        }\n    }\n"]))),Z=((0,d.Ps)(a||(a=(0,u.Z)(["\n    mutation deleteSupportFile ($id: Int) {\n        deleteSupportFile (id: $id) {\n            supportFile {\n                file\n            }\n        }\n    }\n"]))),(0,d.Ps)(l||(l=(0,u.Z)(["\n    mutation attachOrDetachSupportGroup($group: Int, $support: Int){\n        attachOrDetachSupportGroup (group: $group, support: $support){\n            supportGroup {\n                __typename\n            }\n        }\n    }\n"]))))},70606:function(e,t,n){"use strict";var i=n(1413),r=n(29439),s=n(72791),o=n(43110),c=n(88894),a=n(2703),l=n(96324),u=n(80184),d=o.ZP.useBreakpoint,p=function(e){var t=e.sideContent,n=e.sideContentWidth,i=void 0===n?250:n,r=e.border;return(0,u.jsx)("div",{className:"side-content ".concat(r?"with-border":""),style:{width:"".concat(i,"px")},children:t})},f=function(e){var t=e.sideContent,n=e.visible,i=e.onSideContentClose;return(0,u.jsx)(c.Z,{width:320,placement:"left",closable:!1,onClose:i,visible:n,bodyStyle:{paddingLeft:0,paddingRight:0},children:(0,u.jsx)("div",{className:"h-100",children:t})})};t.Z=function(e){var t=e.mainContent,n=e.pageHeader,o=e.sideContentGutter,c=void 0===o||o,m=!a.ZP.getBreakPoint(d()).includes("lg"),x=(0,s.useState)(!1),h=(0,r.Z)(x,2),Z=h[0],j=h[1];return(0,u.jsxs)("div",{className:"inner-app-layout",children:[m?(0,u.jsx)(f,(0,i.Z)({visible:Z,onSideContentClose:function(e){j(!1)}},e)):(0,u.jsx)(p,(0,i.Z)({},e)),(0,u.jsxs)("div",{className:"main-content ".concat(n?"has-page-header":""," ").concat(c?"gutter":"no-gutter"),children:[m?(0,u.jsx)("div",{className:"font-size-lg mb-3 ".concat(c?"":"pt-3 px-3"),children:(0,u.jsx)(l.Z,{onClick:function(){j(!0)}})}):null,t]})]})}},90049:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var i=n(29439),r=n(72791),s=n(30941),o=n(20003),c=n(92885),a=n(50419),l=n(66871),u=n(36755),d=n(87309),p=n(55064),f=n(70606),m=n(59288),x=n(31549),h=n(72351),Z=n(82622),j=n(31752),g=n(73332),v=n(22949),S=n(49389),C=n(37083),y=n(84376),b=n(96578),w=n(77913),k=n(82630),$=n(48936),N=n(80184);var P=function(e){var t=e.refetch,n=e.handleCancel,s=e.type,o=e.formDatas,c=g.Z.useForm(),l=(0,i.Z)(c,1)[0],u=v.Z.Option,d=S.Z.TextArea,p=(0,r.useState)([]),f=(0,i.Z)(p,2),m=f[0],x=f[1],h=(0,r.useState)([]),Z=(0,i.Z)(h,2),j=Z[0],P=Z[1],F=(0,y.D)(w.mv,{onCompleted:function(e){t()}}),O=(0,i.Z)(F,1)[0],T=(0,y.D)(w.d1,{onCompleted:function(e){n(),a.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),j.map((function(t){return O({variables:{group:t,support:e.createSupport.support.id}})}))}}),D=(0,i.Z)(T,2),I=D[0],_=D[1].loading,z=(0,y.D)(w.On,{onCompleted:function(e){n(),a.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430")}}),B=(0,i.Z)(z,1)[0];function q(e){"edit"===s&&O({variables:{group:e,support:o.id}})}return(0,b.a)($.YO,{onCompleted:function(e){x(e.allGroups)}}),(0,r.useEffect)((function(){if("edit"===s){var e={description:o.description,title:o.title,group:o.supportgroupSet.map((function(e){return e.group.id}))};l.setFieldsValue(e)}else l.resetFields()}),[o,s,l]),(0,N.jsx)(C.Z,{spinning:_,tip:"\u0410\u0447\u0430\u0430\u043b\u043b\u0430\u0436 \u0431\u0430\u0439\u043d\u0430...",children:(0,N.jsxs)(g.Z,{id:"SupportForm",layout:"vertical",form:l,name:"lesson",onFinish:function(e){P(e.group),"create"===s?I({variables:e}):"edit"===s&&(e.id=o.id,B({variables:e}))},children:[(0,N.jsx)(g.Z.Item,{name:"title",label:(0,N.jsx)(k.Z,{id:"title"}),rules:[{required:!0,message:(0,N.jsx)(k.Z,{id:"form.required"})}],children:(0,N.jsx)(S.Z,{})}),(0,N.jsx)(g.Z.Item,{name:"group",label:(0,N.jsx)(k.Z,{id:"group"}),rules:[{required:!0,message:"\u0425\u043e\u043e\u0441\u043e\u043d \u043e\u0440\u0445\u0438\u0445 \u0431\u043e\u043b\u043e\u043c\u0436\u0433\u04af\u0439"}],children:(0,N.jsx)(v.Z,{mode:"multiple",onDeselect:function(e){return q(e)},onSelect:function(e){return q(e)},children:m.map((function(e,t){return(0,N.jsx)(u,{value:e.id,children:e.name},t)}))})}),(0,N.jsx)(g.Z.Item,{name:"description",label:(0,N.jsx)(k.Z,{id:"description"}),rules:[{required:!0,message:(0,N.jsx)(k.Z,{id:"form.required"})}],children:(0,N.jsx)(d,{rows:4})})]})})},F=n(68470),O=n(38937),T=n(96710),D=n(59305),I=n(10586),_=n(6491),z=s.Z.Title,B=s.Z.Paragraph,q=o.Z.confirm,G=function(e){var t=e.supports,n=e.setSelectedSupport;return(0,N.jsx)("div",{className:"w-100",children:(0,N.jsx)(c.Z,{defaultSelectedKeys:"support-".concat(0),mode:"inline",children:t.map((function(e,t){return(0,N.jsx)(c.Z.Item,{onClick:function(){n(e)},children:(0,N.jsx)("span",{children:e.title})},"support-".concat(t))}))})})},L=function(e){var t,n=(0,r.useState)(!1),c=(0,i.Z)(n,2),g=c[0],v=c[1],S=(0,r.useState)([]),C=(0,i.Z)(S,2),$=C[0],L=C[1],M=(0,r.useState)(),R=(0,i.Z)(M,2),H=R[0],K=R[1],V=(0,r.useState)(1),A=(0,i.Z)(V,2),E=A[0],U=A[1],W=(0,r.useState)(null),Y=(0,i.Z)(W,2),J=Y[0],Q=Y[1],X=(0,r.useState)(),ee=(0,i.Z)(X,2),te=ee[0],ne=ee[1],ie={createSupport:(0,m.C)("add_support"),editSupport:(0,m.C)("change_support"),deleteSupport:(0,m.C)("delete_support"),createFile:(0,m.C)("add_supportfile")},re=(0,b.a)(w.bK,{onCompleted:function(e){L(e.allSupports),e.allSupports[0]?K(e.allSupports[0]):K()}}),se=re.loading,oe=re.refetch,ce=(0,y.D)(w.nl,{onCompleted:function(e){a.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0443\u0441\u0442\u043b\u0430\u0430"),oe()}}),ae=(0,i.Z)(ce,1)[0],le=(0,y.D)(w.yB,{onCompleted:function(e){a.ZP.success("\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043b\u043b\u0430\u0430"),oe()}}),ue=(0,i.Z)(le,2),de=ue[0],pe=ue[1].loading;var fe=function(e){v(!0),ne(e)},me=function(){v(!1)},xe=function(){U(E-1)},he=function(){U(E+1)},Ze=function(e){var t=e.file;switch(function(e){switch(e.split(".").pop()){case"jpg":case"jpeg":case"webp":case"svg":case"png":return"image";case"mp3":case"m4a":case"flac":return"audio";case"mp4":return"video";case"pdf":return"pdf"}}(t)){case"audio":return(0,N.jsx)(T.Z,{className:"react-player",width:"100%",height:"50px",controls:!0,url:D._O+t});case"video":return(0,N.jsx)(T.Z,{width:"70%",height:"50%",controls:!0,url:D._O+t});case"image":return(0,N.jsx)(l.Z,{bodyStyle:{padding:0},cover:(0,N.jsx)("div",{className:"p-2",children:(0,N.jsx)(u.Z,{className:"img-fluid",alt:"Preview",src:D._O+t,preview:!1})})});case"pdf":return(0,N.jsxs)("div",{children:[(0,N.jsxs)(o.Z,{forceRender:!0,width:"80vw",onCancel:me,footer:[(0,N.jsx)(d.Z,{type:"text",disabled:1===E&&!0,onClick:xe,children:(0,N.jsx)(k.Z,{id:"main.previous"})},"back"),(0,N.jsx)(d.Z,{type:"primary",disabled:E===J&&!0,onClick:he,children:(0,N.jsx)(k.Z,{id:"main.next"})},"next")],children:[(0,N.jsx)(I.SizeMe,{monitorHeight:!0,refreshRate:128,refreshMode:"debounce",render:function(e){var n=e.size;return(0,N.jsx)(_.BB,{file:D._O+t,onLoadSuccess:function(e){var t=e.numPages;return Q(t)},renderTextLayer:!1,loading:(0,N.jsx)(O.Z,{cover:"content"}),renderMode:"svg",children:(0,N.jsx)(_.T3,{className:"test",width:n.width,pageNumber:E,renderTextLayer:!1,renderAnnotationLayer:!1})})}}),(0,N.jsxs)("p",{children:["\u041d\u0438\u0439\u0442 ",J," \u0445\u0443\u0443\u0434\u0441\u0430\u0430\u0441 ",E,"-\u0433 \u0445\u0430\u0440\u0443\u0443\u043b\u0436 \u0431\u0430\u0439\u043d\u0430 "]})]}),(0,N.jsx)(d.Z,{type:"primary",onClick:fe,children:(0,N.jsx)(k.Z,{id:"show-file"})})]});default:return(0,N.jsx)("div",{children:(0,N.jsx)(d.Z,{type:"primary",onClick:function(){return window.open(D._O+t,"_blank")},children:(0,N.jsx)(k.Z,{id:"show-file"})})})}};return se?(0,N.jsx)(O.Z,{cover:"content"}):(0,N.jsxs)(N.Fragment,{children:[ie.createSupport&&(0,N.jsx)(F.Z,{justifyContent:"end",alignItems:"center",className:"",children:(0,N.jsxs)("div",{className:"mb-4",children:[(0,N.jsx)(d.Z,{type:"primary",onClick:function(){return fe("create")},icon:(0,N.jsx)(x.Z,{}),children:"\u041d\u044d\u043c\u044d\u0445"}),(0,N.jsx)(o.Z,{visible:g,okButtonProps:{form:"SupportForm",key:"submit",htmlType:"submit"},okText:(0,N.jsx)(k.Z,{id:"main.okText"}),cancelText:(0,N.jsx)(k.Z,{id:"main.cancelText"}),onCancel:me,children:(0,N.jsx)(P,{formDatas:H,type:te,refetch:oe,handleCancel:me})})]})}),(0,N.jsx)(f.Z,{sideContent:(0,N.jsx)(G,{supports:$,setSelectedSupport:K}),mainContent:(0,N.jsx)("div",{className:"p-4",children:H&&(0,N.jsxs)("div",{className:"container-fluid",children:[ie.createFile&&(0,N.jsx)(p.Z,{multiple:!0,accept:".jpg, .png, .pdf, .mp3, .mp4, .m4a",orientation:"right",customRequest:function(e){de({variables:{file:e.file,support:H.id}}),e.onSuccess("Ok")},showUploadList:!1,children:(0,N.jsxs)(d.Z,{style:{float:"right"},size:"small",type:"primary",icon:(0,N.jsx)(h.Z,{}),loading:pe,children:[" ",(0,N.jsx)(k.Z,{id:"main.upload-file"})," "]})}),ie.deleteSupport&&(0,N.jsxs)(d.Z,{className:"float-right",size:"small",type:"danger",onClick:function(){return e=H.id,void q({title:"\u0423\u0441\u0442\u0433\u0430\u0445 \u0443\u0443?",okText:"\u0423\u0441\u0442\u0433\u0430\u0445",okType:"danger",cancelText:"\u0411\u043e\u043b\u0438\u0445",onOk:function(){ae({variables:{id:e}})}});var e},icon:(0,N.jsx)(Z.Z,{}),children:[" ",(0,N.jsx)(k.Z,{id:"delete"})," "]}),ie.deleteSupport&&(0,N.jsxs)(d.Z,{className:"float-right mr-4 bg-yellow-400",size:"small",onClick:function(){return fe("edit")},icon:(0,N.jsx)(j.Z,{}),children:[" ",(0,N.jsx)(k.Z,{id:"edit"})," "]}),(0,N.jsxs)(s.Z,{children:[(0,N.jsx)(z,{children:H.title}),(0,N.jsxs)(B,{children:[" ",H.description," "]})]}),null===(t=H.supportfileSet)||void 0===t?void 0:t.map((function(e,t){return(0,N.jsx)(Ze,{file:e.file},t)}))]})}),sideContentWidth:300,sideContentGutter:!1,border:!0})]})}},31549:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(1413),r=n(72791),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},o=n(8711),c=function(e,t){return r.createElement(o.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:s}))};c.displayName="PlusCircleOutlined";var a=r.forwardRef(c)},14601:function(){},32767:function(){},28251:function(){},57677:function(){},1543:function(){},87324:function(){}}]);
//# sourceMappingURL=8298.d4059fc3.chunk.js.map