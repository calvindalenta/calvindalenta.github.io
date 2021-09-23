(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a,t){e.exports=t(126)},114:function(e,a,t){},115:function(e,a,t){},126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),i=t.n(l),o=(t(114),t(35)),c=t(22),d=t(16),s=t(27),m=t(28),u=t(29),p=(t(115),t(156)),b=t(93),E=t(174),f=t(159),g=Object(p.a)({root:{flexGrow:1}});function h(e){var a=g(),t=e.currentTab,n=e.onChangeTab;return r.a.createElement("div",{className:"footer"},r.a.createElement(b.a,{className:a.root},r.a.createElement(E.a,{value:t,onChange:function(e,a){n(a)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(f.a,{label:"All"}),r.a.createElement(f.a,{label:"To Do"}),r.a.createElement(f.a,{label:"Doing"}),r.a.createElement(f.a,{label:"Completed"}))))}var v=t(160),y=t(161),D=t(62),w=Object(p.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));function S(e){var a=w();return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(y.a,null,r.a.createElement(D.a,{variant:"h4",className:a.title},"Assignment Manager"))))}var x=t(163),C=t(11),k=t(31),T=t.n(k),M=t(131),_=t(162),O=t(128),H=t(172),j=t(166),N=t(60),A=t(14),F=t(173),Z=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function B(e){var a=Z(),t=e.openEditModal,n=e.setEditModal,l=e.data,i=e.updateDataHandler,o=r.a.useState(l.title),c=Object(C.a)(o,2),d=c[0],s=c[1],m=r.a.useState(l.body),u=Object(C.a)(m,2),p=u[0],b=u[1],E=r.a.useState(T()(l.deadline)),f=Object(C.a)(E,2),g=f[0],h=f[1],v=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(M.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:t,onClose:v,closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500}},r.a.createElement(O.a,{in:t},r.a.createElement("div",{className:a.paper},r.a.createElement(D.a,{align:"center",variant:"h4",className:a.title},"Edit")," ",r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(H.a,{required:!0,id:"standard-name",label:"Title",placeholder:"Add title",defaultValue:d,onChange:function(e){s(e.target.value)},className:a.textField,margin:"normal",autoFocus:!0})),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(H.a,{required:!0,id:"standard-required",label:"Description",placeholder:"Add Description",defaultValue:p,onChange:function(e){b(e.target.value)},className:a.textField,margin:"normal"})),r.a.createElement(A.a,{utils:N.a},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(F.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Deadline",value:g,onChange:function(e){h(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(j.a,{onClick:function(e){e.preventDefault();var a,t={id:l._id,title:d,body:p,deadline:g};a=t,v(),i(a)},color:"primary"},"Submit"))))))))}var Y=t(167),I=t(168),L=Object(p.a)((function(e){return{modal:{display:"inline",alignItems:"center",justifyContent:"center",width:800,margin:"auto"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function q(e){var a=L(),t=e.openDetailModal,n=e.setDetailModal,l=e.data;return r.a.createElement("div",null,r.a.createElement(M.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:t,onClose:function(){n(!1)},closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500}},r.a.createElement(O.a,{in:t},r.a.createElement("div",{className:a.paper},r.a.createElement(Y.a,{divider:!0},r.a.createElement(I.a,null,r.a.createElement(D.a,{align:"center",variant:"h4",color:"primary",display:"block",className:a.title},"Details"))),r.a.createElement(Y.a,{color:"primary",divider:!0},r.a.createElement(I.a,{primary:"Subject: ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"span",variant:"body2",className:a.inline,color:"textSecondary"},l.title))})),r.a.createElement(Y.a,{color:"primary",divider:!0},r.a.createElement(I.a,{primary:"Description: ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"span",variant:"body2",className:a.inline,color:"textSecondary"},l.body))})),r.a.createElement(Y.a,{color:"primary",divider:!0},r.a.createElement(I.a,{primary:"Added: ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"span",variant:"body2",className:a.inline,color:"textSecondary"},T()(l.date).format("MMMM Do, YYYY")))})),r.a.createElement(Y.a,{color:"primary",divider:!0},r.a.createElement(I.a,{primary:"Deadline: ",secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"span",variant:"body2",className:a.inline,color:"textSecondary"},T()(l.deadline).format("MMMM Do, YYYY")))}))))))}var P=t(129),z=t(82),V=t.n(z),R=t(165);function G(e){var a=r.a.useState(null),t=Object(C.a)(a,2),n=t[0],l=t[1],i=e.deleteList,o=e.setEditModal,c=e.setDetailModal,d=function(e){l(n?null:e.currentTarget)},s=Boolean(n),m=s?"simple-popper":void 0;return r.a.createElement("div",null,r.a.createElement(j.a,{"aria-describedby":m,variant:"text",onClick:d},r.a.createElement(V.a,null)),r.a.createElement(P.a,{id:m,open:s,anchorEl:n,transition:!0},(function(e){var a=e.TransitionProps;return r.a.createElement(O.a,Object.assign({},a,{timeout:350}),r.a.createElement(b.a,{onMouseLeave:d},r.a.createElement(R.a,{component:"nav","aria-label":"main list edit"},r.a.createElement(Y.a,{button:!0,dense:!0,onClick:function(){return c(!0)}},r.a.createElement(I.a,{primary:"Details"})),r.a.createElement(Y.a,{button:!0,dense:!0,onClick:function(){return o(!0)}},r.a.createElement(I.a,{primary:"Edit"})),r.a.createElement(Y.a,{button:!0,dense:!0,onClick:i},r.a.createElement(I.a,{primary:"Delete"})))))})))}var J={LIST:"list"},K=t(88),W=t.n(K),X=t(86),Q=t.n(X),U=t(87),$=t.n(U),ee=t(89),ae=t.n(ee),te=t(68),ne=t.n(te),re=t(69),le=t.n(re),ie=t(45),oe=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function ce(e){var a=oe(),t=r.a.useState(!1),n=Object(C.a)(t,2),l=n[0],i=n[1],o=r.a.useState(!1),c=Object(C.a)(o,2),d=c[0],s=c[1],m=e.data,u=e.deleteDataHandler,p=e.changeStatusStateHandler,b=e.updateDataHandler,E=Object(ie.c)({item:{type:J.LIST,data:m},collect:function(e){return{isDragging:!!e.isDragging()}}}),f=Object(C.a)(E,2),g=f[0].isDragging,h=f[1],v=function(){var e=parseInt(T()(new Date).format("DD"));return parseInt(T()(m.deadline).format("DD"))-e<=3?"error":"primary"},y=function(e){u(m)},w=function(e){var a;console.log(e),"next"===e?a=function(e){switch(e){case"todo":return"doing";case"doing":return"completed";default:return"todo"}}(m.status):"back"===e?a=function(e){switch(e){case"completed":return"doing";case"doing":return"todo";default:return"completed"}}(m.status):console.log("action is ".concat(e));var t={id:m._id,status:a};p({body:t,response:"success"})};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{openEditModal:l,setEditModal:i,data:m,updateDataHandler:b}),r.a.createElement(q,{openDetailModal:d,setDetailModal:s,data:m}),r.a.createElement("div",{ref:h,style:{opacity:g?0:1,fontSize:25,fontWeight:"bold",cursor:"grab"}},r.a.createElement(Y.a,{color:"primary",divider:!0,dense:!0},function(e){switch(e){case"doing":return r.a.createElement(Q.a,{fontSize:"large",color:v()});case"completed":return r.a.createElement($.a,{fontSize:"large",color:"primary"});default:return r.a.createElement(W.a,{fontSize:"large",color:v()})}}(m.status),r.a.createElement(I.a,{primary:m.title,secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{component:"span",variant:"body2",className:a.inline,color:"textSecondary"},m.body),r.a.createElement("br",null),"Deadline: ".concat(T()(m.deadline).format("MMMM Do, YYYY")))}),function(){switch(m.status){case"todo":return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{className:a.button,"aria-label":"next",onClick:function(){return w("next")},name:"next"},r.a.createElement(ne.a,{name:"next"})));case"doing":return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{onClick:function(){return w("back")},className:a.button,"aria-label":"back",name:"back"},r.a.createElement(le.a,{name:"back"})),r.a.createElement(j.a,{className:a.button,"aria-label":"next",onClick:function(){return w("next")},name:"next"},r.a.createElement(ne.a,{name:"next"})));case"completed":return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{onClick:function(){return w("back")},className:a.button,"aria-label":"back",name:"back"},r.a.createElement(le.a,{name:"back"})));default:return r.a.createElement(j.a,{onClick:y,className:a.button},r.a.createElement("h4",null,"Something went wrong"),r.a.createElement(ae.a,{"aria-label":"delete"}))}}(),r.a.createElement(G,{deleteList:y,setEditModal:i,setDetailModal:s}))))}var de=t(169);function se(e){var a=e.classes,t=e.list,n=e.who,l=e.dropStateHandler,i=n.toLowerCase(),o=Object(ie.d)({accept:J.LIST,drop:function(e){return function(e){e.status=i;var a={id:e._id,status:e.status};l({response:"response",body:a})}(e.data)},collect:function(e){return{isOver:!!e.isOver()}}}),c=Object(C.a)(o,2),d=c[0].isOver,s=c[1];return r.a.createElement("div",{ref:s,style:{position:"relative",width:"100%",height:"100%"}},r.a.createElement(b.a,{className:a},d&&r.a.createElement("div",{style:{position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:1,opacity:.2,backgroundColor:"blue"}}),r.a.createElement(D.a,{variant:"h4",component:"h4"},n),r.a.createElement(de.a,{variant:"middle"}),r.a.createElement(D.a,{variant:"h5",component:"h4"},t)))}var me=t(92),ue=Object(p.a)((function(e){return{root:{padding:e.spacing(3,2),height:550,overflow:"auto"}}}));function pe(e){var a=ue(),t=e.data,n=e.currentTab,l=e.deleteDataHandler,i=e.changeStatusStateHandler,o=e.updateDataHandler,c=e.dropStateHandler,d=function(e){return t.filter((function(a){return a.status===e})).sort((function(e,a){return new Date(e.deadline)-new Date(a.deadline)})).map((function(e){return r.a.createElement(ce,{key:e._id,data:e,deleteDataHandler:l,changeStatusStateHandler:i,updateDataHandler:o})}))},s=d("todo"),m=d("doing"),u=d("completed");return r.a.createElement(ie.b,{backend:me.a},r.a.createElement("div",{className:"main-content"},r.a.createElement(x.a,{container:!0,spacing:3},function(e){switch(e){case 1:return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{item:!0,xs:!0}),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(se,{classes:a.root,list:s,who:"Todo",dropStateHandler:c})),r.a.createElement(x.a,{item:!0,xs:!0}));case 2:return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{item:!0,xs:!0}),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(se,{classes:a.root,list:m,who:"Doing",dropStateHandler:c})),r.a.createElement(x.a,{item:!0,xs:!0}));case 3:return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{item:!0,xs:!0}),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(se,{classes:a.root,list:u,who:"Completed",dropStateHandler:c})),r.a.createElement(x.a,{item:!0,xs:!0}));default:return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(se,{classes:a.root,list:s,who:"Todo",dropStateHandler:c})),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(se,{classes:a.root,list:m,dropStateHandler:c,who:"Doing"})),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(se,{classes:a.root,list:u,who:"Completed",dropStateHandler:c})))}}(n))))}var be=t(90),Ee=t.n(be),fe=t(171),ge=t(170),he=Object(p.a)((function(e){return{absolute:{position:"fixed",bottom:e.spacing(3),right:e.spacing(8)}}}));function ve(e){var a=e.setOpen,t=he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{title:"Add","aria-label":"add"},r.a.createElement(fe.a,{color:"secondary",className:t.absolute,style:{zIndex:1},onClick:function(){a(!0)}},r.a.createElement(Ee.a,null))))}var ye=t(91),De=t.n(ye),we=Object(p.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function Se(e){var a=we(),t=e.open,n=e.setOpen,l=e.newDataHandler,i=r.a.useState(""),o=Object(C.a)(i,2),c=o[0],d=o[1],s=r.a.useState(""),m=Object(C.a)(s,2),u=m[0],p=m[1],b=r.a.useState(new Date),E=Object(C.a)(b,2),f=E[0],g=E[1],h=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(M.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:a.modal,open:t,onClose:h,closeAfterTransition:!0,BackdropComponent:_.a,BackdropProps:{timeout:500}},r.a.createElement(O.a,{in:t},r.a.createElement("div",{className:a.paper},r.a.createElement(D.a,{align:"center",variant:"h4",className:a.title},"Add Todo")," ",r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(x.a,{container:!0,spacing:3},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(H.a,{required:!0,id:"standard-name",label:"Title",placeholder:"Add title",defaultValue:c,onChange:function(e){d(e.target.value)},className:a.textField,margin:"normal",autoFocus:!0})),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(H.a,{required:!0,id:"standard-required",label:"Description",placeholder:"Add Description",defaultValue:u,onChange:function(e){p(e.target.value)},className:a.textField,margin:"normal"})),r.a.createElement(A.a,{utils:N.a},r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(F.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Deadline",value:f,onChange:function(e){g(e)},KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(x.a,{item:!0,xs:!0},r.a.createElement(j.a,{onClick:function(e){(e.preventDefault(),void 0===c||void 0===u||void 0===f)?console.log("All fields required"):function(e){h(),l(e),d(""),p("")}({_id:De.a.v4(),title:c,body:u,deadline:f,hidden:!1,date:new Date,status:"todo"})},color:"primary"},"Submit"))))))))}var xe=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={data:[{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-13T17:56:57.861Z"),hidden:!1,status:"completed",_id:"5da3656e680cec346ab52525",title:"Operational Management",body:"Presentasi SCM",__v:0},{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-13T17:56:57.861Z"),hidden:!1,status:"completed",_id:"5da3656e680cec3460a52525",title:"e-CRM and e-Marketing",body:"Mobile payment analysis",__v:0},{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-15T17:53:00.000Z"),hidden:!1,status:"completed",_id:"5da364b8680cec3460a52522",title:"Database",body:"Assignment topik join table",__v:0},{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-17T17:52:00.000Z"),hidden:!1,status:"todo",_id:"5da3645f680cec3460a52521",title:"Statistic 2",body:"Halaman 212",__v:0},{date:new Date("2019-10-12T05:44:41.961Z"),deadline:new Date("2019-10-17T18:19:07.566Z"),hidden:!1,status:"doing",_id:"5da169ed1988721bf4a8c7c9",title:"Cross Cultural",body:"XD",__v:0},{date:new Date("2019-10-12T05:44:41.961Z"),deadline:new Date("2019-10-18T16:35:21.702Z"),hidden:!1,status:"doing",_id:"5da16c9c1988721bf4a8c7cd",title:"Microeconomy",body:"Halaman 301",__v:0},{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-18T17:50:00.000Z"),hidden:!1,status:"completed",_id:"5da363f4680cec3460a5251f",title:"Research Methodology",body:"Buat bab 1",__v:0},{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-25T18:38:00.000Z"),hidden:!1,status:"doing",_id:"5da3638c680cec3460a5251e",title:"Entrepreneurship 1",body:"Buat ide bisnis teknologi",__v:0},{date:new Date("2019-10-12T06:08:30.265Z"),deadline:new Date("2019-10-26T19:07:00.000Z"),hidden:!1,status:"todo",_id:"5da16eb84bb7282cbcb94321",title:"Mathematics",body:"Forum sesi 2",__v:0},{date:new Date("2019-10-13T17:47:15.430Z"),deadline:new Date("2019-10-28T17:55:00.000Z"),hidden:!1,status:"todo",_id:"5da36517680cec3460a52524",title:"E-Business",body:"Analisa e-marketplace",__v:0}],currentTab:0,openAddModal:!1},t.onChangeTab=function(e){t.setState({currentTab:e})},t.setOpenAddModal=function(e){t.setState({openAddModal:e})},t.newDataHandler=function(e){t.setState({data:[e].concat(Object(o.a)(t.state.data))})},t.updateDataHandler=function(e){var a=t.state.data.map((function(a){return a._id===e.id&&(a.title=e.title,a.body=e.body,a.deadline=e.deadline),a}));t.setState({data:a})},t.deleteDataHandler=function(e){var a=t.state.data.filter((function(a){return a._id!==e._id}));t.setState((function(e){return{data:a}}))},t.changeStatusStateHandler=function(e){var a=e.body,n=t.state.data;console.log(a);var r=n.map((function(e){return e._id===a.id&&(e.status=a.status),e}));t.setState({data:r})},t.dropStateHandler=function(e){var a=e.body,n=t.state.data.map((function(e){return e._id===a._id&&(e.status=a.status),e}));t.setState({data:n})},t}return Object(u.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(Se,{open:this.state.openAddModal,setOpen:this.setOpenAddModal,newDataHandler:this.newDataHandler}),r.a.createElement(pe,{data:this.state.data,currentTab:this.state.currentTab,deleteDataHandler:this.deleteDataHandler,changeStatusStateHandler:this.changeStatusStateHandler,updateDataHandler:this.updateDataHandler,dropStateHandler:this.dropStateHandler}),r.a.createElement(ve,{setOpen:this.setOpenAddModal}),r.a.createElement(h,{currentTab:this.state.currentTab,onChangeTab:this.onChangeTab}))}}]),a}(r.a.Component);i.a.render(r.a.createElement(xe,null),document.getElementById("root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.e00d82c0.chunk.js.map