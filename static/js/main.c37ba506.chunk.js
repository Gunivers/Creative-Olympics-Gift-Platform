(this.webpackJsonperebus=this.webpackJsonperebus||[]).push([[0],{126:function(e,a,t){e.exports=t(159)},131:function(e,a,t){},159:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(10),c=t.n(r),o=(t(131),t(26)),i=t(56),s=t(12),m=t(112),u=t(223),p=t(88),E=t.n(p),h=t(216),d=t(224),g=t(52),f=t(16),b=t(209),k=t(201),N=t(210),v=t(211),y=t(106),T=t.n(y),D=t(8),O=t(203),j=t(231),I=t(204),w=t(164);function S(){var e=Object(j.a)().t,a=x();return l.a.createElement(w.a,{className:a.title,variant:"h6",color:"inherit",nowrap:!0},e("RahNeil_N3.Irus.Title"))}function C(){var e=x();return l.a.createElement(w.a,{className:e.title,variant:"h6",color:"inherit",nowrap:!0},l.a.createElement(I.a,null,l.a.createElement("span",null,"Irus")))}var x=Object(O.a)((function(e){return{title:Object(f.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})}})),R=t(226),_=t(206),B=t(232),L=t(105),M=t.n(L);function F(){var e=Object(j.a)().t,a=P(),t=Object(s.f)(),n=[{title:e("RahNeil_N3.Irus.Home_Page"),url:"/"},{title:e("RahNeil_N3.Irus.Donations.Donate_Now.Short"),url:"/donate"}],r=l.a.useState(""),c=Object(o.a)(r,2),i=c[0],m=c[1],u=function(e){m(e.currentTarget.value)};return l.a.createElement(R.a,{options:n,value:[],onChange:function(e,a){!function(e){null!==e&&(m(""),null!==e.url&&t.push(e.url))}(a)},getOptionSelected:function(e,a){return e.title===a.title},renderOption:function(e){return null==e.url?l.a.createElement(l.a.Fragment,null,l.a.createElement(_.a,{className:a.iconLibrary},l.a.createElement(M.a,{fontSize:"small"})),l.a.createElement("i",null,e.title)):e.title},autoHighlight:!0,inputValue:i,disablePortal:!0,getOptionLabel:function(e){return e.title},renderInput:function(t){return l.a.createElement(B.a,{classes:{root:a.inputRoot,input:a.inputInput},ref:t.InputProps.ref,inputProps:t.inputProps,placeholder:e("RahNeil_N3.Irus.Search")+"...",onChange:u})}})}function z(){var e=P();return l.a.createElement(B.a,{classes:{root:e.inputRoot,input:e.inputInput}})}var P=Object(O.a)((function(e){return{inputRoot:{color:"inherit",width:"100%"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),iconLibrary:{minWidth:e.spacing(4)}}})),W=t(87),H=t.n(W),A=t(207),G=t(205),J=t(113),$=t(86),q=t.n($),U=t(55),V=t.n(U),K=t(233),Q=t(208);function X(e){var a,t=Object(j.a)(),n=t.t,r=t.i18n,c=Object(g.b)().enqueueSnackbar;return l.a.createElement(l.a.Fragment,null,l.a.createElement(K.a,{onClick:function(){e.close(),r.changeLanguage(e.code,(function(a){a&&c(n("RahNeil_N3.Irus.Error.Language")+' "'+e.text+'"',{variant:"error"})}))},selected:r.language===e.code,disabled:r.language===e.code},l.a.createElement("span",{style:{marginRight:10,fontSize:18,marginBottom:3}},(a=e.country,"undefined"!==typeof String.fromCodePoint?a.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):a)),e.text))}function Y(e){var a=Object(j.a)().t,t=ee(),n=l.a.useState(null),r=Object(o.a)(n,2),c=r[0],i=r[1],s=function(e){i(e.currentTarget)},m=function(){i(null)};return l.a.createElement(l.a.Fragment,null,e.inMenu?l.a.createElement(K.a,{className:t.menuItem,"aria-controls":"nLanguageSelect","aria-haspopup":"true","aria-label":a("RahNeil_N3.Irus.Language.Change"),onClick:function(a){e.closeMenu(),s(a)}},l.a.createElement(_.a,{className:t.menuItemIcon},l.a.createElement(V.a,{fontSize:"small"})),l.a.createElement(w.a,{variant:"inherit"},a("RahNeil_N3.Irus.Language.Change"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{title:a("RahNeil_N3.Irus.Language.Change"),arrow:!0,enterDelay:750},l.a.createElement(Q.a,{"aria-controls":"nLanguageSelect","aria-haspopup":"true",color:"inherit",startIcon:l.a.createElement(V.a,null),endIcon:l.a.createElement(q.a,null),onClick:s,className:t.textButton},a("RahNeil_N3.Irus.Language.Current"))),l.a.createElement(A.a,{title:a("RahNeil_N3.Irus.Language.Change"),arrow:!0},l.a.createElement(G.a,{"aria-controls":"nLanguageSelect","aria-haspopup":"true","aria-label":a("RahNeil_N3.Irus.Language.Change"),color:"inherit",onClick:s,className:t.iconButton},l.a.createElement(V.a,null)))),l.a.createElement(J.a,{id:"nLanguageSelect",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:m},l.a.createElement(X,{text:"English",code:"en-US",country:"us",close:m}),l.a.createElement(X,{text:"English",code:"en-GB",country:"gb",close:m}),l.a.createElement(X,{text:"Fran\xe7ais",code:"fr-FR",country:"fr",close:m})))}function Z(){var e=ee();return l.a.createElement(l.a.Fragment,null,l.a.createElement(Q.a,{color:"inherit",startIcon:l.a.createElement(V.a,null),endIcon:l.a.createElement(q.a,null),className:e.textButton},l.a.createElement(I.a,null,l.a.createElement("span",null,"English"))),l.a.createElement(G.a,{color:"inherit",className:e.iconButton},l.a.createElement(V.a,null)))}var ee=Object(O.a)((function(e){var a;return{textButton:Object(f.a)({display:"none"},e.breakpoints.up("md"),{display:"inline-flex"}),iconButton:(a={display:"none"},Object(f.a)(a,e.breakpoints.up("sm"),{display:"inline-flex"}),Object(f.a)(a,e.breakpoints.up("md"),{display:"none"}),a),menuItemIcon:{minWidth:"auto",paddingRight:e.spacing(2)}}})),ae=t(80),te=t.n(ae),ne=t(79),le=t.n(ne);function re(e){var a=Object(j.a)().t,t=oe();return e.inMenu?l.a.createElement(K.a,{className:t.menuItem,"aria-controls":"nLanguageSelect","aria-haspopup":"true","aria-label":a("RahNeil_N3.Irus.Language.Change"),onClick:function(){e.closeMenu(),e.toggleTheme()}},l.a.createElement(_.a,{className:t.menuItemIcon},e.isDarkTheme?l.a.createElement(le.a,{fontSize:"small"}):l.a.createElement(te.a,{fontSize:"small"})),l.a.createElement(w.a,{variant:"inherit"},a("RahNeil_N3.Irus.Theme."+(e.isDarkTheme?"Light":"Dark")))):l.a.createElement(A.a,{title:a("RahNeil_N3.Irus.Theme."+(e.isDarkTheme?"Light":"Dark")),arrow:!0},l.a.createElement(G.a,{"aria-label":a("RahNeil_N3.Irus.Theme."+(e.isDarkTheme?"Light":"Dark")),color:"inherit",onClick:e.toggleTheme,className:t.iconButton},e.isDarkTheme?l.a.createElement(le.a,null):l.a.createElement(te.a,null)))}function ce(e){var a=oe();return l.a.createElement(G.a,{color:"inherit",onClick:e.toggleTheme,className:a.iconButton},e.isDarkTheme?l.a.createElement(le.a,null):l.a.createElement(te.a,null))}var oe=Object(O.a)((function(e){return{iconButton:Object(f.a)({display:"none"},e.breakpoints.up("sm"),{display:"inline-flex"}),menuItemIcon:{minWidth:"auto",paddingRight:e.spacing(2)}}}));function ie(e){var a=Object(j.a)().t,t=me(),n=l.a.useState(null),r=Object(o.a)(n,2),c=r[0],i=r[1],s=function(){i(null)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(A.a,{title:a("RahNeil_N3.Irus.More"),arrow:!0},l.a.createElement(G.a,{"aria-controls":"nMore","aria-haspopup":"true","aria-label":a("RahNeil_N3.Irus.More"),color:"inherit",onClick:function(e){i(e.currentTarget)},className:t.iconButton},l.a.createElement(H.a,null))),l.a.createElement(J.a,{id:"nMore",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:s},l.a.createElement(Y,{closeMenu:function(){s()},inMenu:!0}),l.a.createElement(re,{toggleTheme:e.toggleTheme,isDarkTheme:e.isDarkTheme,closeMenu:function(){s()},inMenu:!0})),l.a.createElement(Y,null),l.a.createElement(re,{toggleTheme:e.toggleTheme,isDarkTheme:e.isDarkTheme}))}function se(e){var a=me();return l.a.createElement(l.a.Fragment,null,l.a.createElement(G.a,{color:"inherit",className:a.iconButton},l.a.createElement(H.a,null)),l.a.createElement(Z,null),l.a.createElement(ce,{toggleTheme:e.toggleTheme,isDarkTheme:e.isDarkTheme}))}var me=Object(O.a)((function(e){return{iconButton:Object(f.a)({display:"inline-flex"},e.breakpoints.up("sm"),{display:"none"})}}));function ue(e){var a=pe(),t=Object(b.a)();return l.a.createElement("div",{className:a.root},l.a.createElement(k.a,{appear:!1,direction:"down",in:!t},l.a.createElement(N.a,{style:{backgroundColor:e.isDarkTheme?Object(D.c)("#fff",.05):"#f44336"}},l.a.createElement(v.a,null,l.a.createElement(n.Suspense,{fallback:l.a.createElement(C,null)},l.a.createElement(S,null)),l.a.createElement("div",{className:a.search},l.a.createElement("div",{className:a.searchIcon},l.a.createElement(T.a,null)),l.a.createElement(n.Suspense,{fallback:l.a.createElement(z,null)},l.a.createElement(F,null))),l.a.createElement(n.Suspense,{fallback:l.a.createElement(se,{toggleTheme:e.toggleTheme,isDarkTheme:e.isDarkTheme})},l.a.createElement(ie,{toggleTheme:e.toggleTheme,isDarkTheme:e.isDarkTheme}))))))}var pe=Object(O.a)((function(e){return{root:{flexGrow:1,marginBottom:e.spacing(6)},menuButton:{marginRight:e.spacing(2)},search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(D.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(D.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}})),Ee=t(19),he=t(217),de=t(213),ge=t(214),fe=t(212);function be(e){return l.a.createElement(fe.a,Object.assign({style:{backgroundColor:e.isDarkTheme?"#1e1e1e":"#fff"}},e))}function ke(e){var a=Object(j.a)().t,t=Object(s.f)(),n=ve();return l.a.createElement(l.a.Fragment,null,l.a.createElement(be,{className:n.root,isDarkTheme:e.isDarkTheme},l.a.createElement(de.a,{className:n.actionArea,onClick:function(){return t.push("/donate")}},l.a.createElement(ge.a,{className:n.media,image:"/NDonateCardBackground.jpg",title:a("RahNeil_N3.Irus.Donations.Donate_Now.Title")},l.a.createElement(w.a,{gutterBottom:!0,variant:"h4",component:"h2",className:n.whiteColorMargin},a("RahNeil_N3.Irus.Donations.Donate_Now.Title")),l.a.createElement(w.a,{variant:"body2",component:"p",className:n.description},a("RahNeil_N3.Irus.Donations.Donate_Now.Description")),l.a.createElement(Q.a,{size:"large",tabIndex:"-1",disableRipple:!0,className:n.whiteColorMargin,variant:"outlined"},a("RahNeil_N3.Irus.Donations.Donate_Now.Title"))))))}function Ne(e){var a=ve();return l.a.createElement(be,{className:a.root,isDarkTheme:e.isDarkTheme},l.a.createElement(I.a,{variant:"rect",className:a.actionArea},l.a.createElement(de.a,null,l.a.createElement(ge.a,{className:a.media,title:"Donate now"},l.a.createElement("div",null,l.a.createElement(w.a,{gutterBottom:!0,variant:"h4",component:"h2",className:a.whiteColorMargin},"Donate now"),l.a.createElement(w.a,{variant:"body2",component:"p",className:a.description},"Donate now to support the charity of your choice :D The donation amount isn't restricted"),l.a.createElement(Q.a,{size:"large",tabIndex:"-1",disableRipple:!0,className:a.whiteColorMargin,variant:"outlined"},"Donate now"))))))}var ve=Object(O.a)((function(e){return{root:{width:"100%",height:"100%"},actionArea:{height:"100%"},media:{padding:e.spacing(6),height:"100%"},whiteColorMargin:{color:e.palette.common.white,borderColor:"#fff",marginTop:e.spacing(2)},description:{color:e.palette.common.white,borderColor:"#fff",whiteSpace:"pre-line"}}})),ye=t(215);function Te(e){Object(j.a)().t;var a=Oe();return l.a.createElement(be,{className:a.root,isDarkTheme:e.isDarkTheme},l.a.createElement(ye.a,{className:a.content},l.a.createElement(w.a,{variant:"subtitle1"},"neil3000"),l.a.createElement(w.a,{gutterBottom:!0,component:"h5",variant:"h4"},"50$"),l.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},"Latest donator")),l.a.createElement(ge.a,{className:a.cover,image:"https://crafatar.com/renders/body/08831584-f289-40e0-b572-d1ae7363ec96.png?overlay&default=MHF_"+(Math.random()>=.5?"Steve":"Alex"),title:"neil3000"}))}function De(e){var a=Oe();return l.a.createElement(be,{className:a.root,isDarkTheme:e.isDarkTheme},l.a.createElement(ye.a,{className:a.content},l.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},l.a.createElement(I.a,null,l.a.createElement("span",null,"Top donation"))),l.a.createElement(w.a,{gutterBottom:!0,component:"h5",variant:"h4"},l.a.createElement(I.a,null,l.a.createElement("span",null,"50$"))),l.a.createElement(w.a,{variant:"subtitle2",component:"h5"},l.a.createElement(I.a,null,l.a.createElement("span",null,"neil3000")))),l.a.createElement(I.a,{variant:"rect"},l.a.createElement(ge.a,{className:a.cover,image:"https://crafatar.com/renders/body/08831584-f289-40e0-b572-d1ae7363ec96.png?overlay&default=MHF_Steve",title:e.username})))}var Oe=Object(O.a)((function(e){return{root:{display:"flex",width:"100%"},cover:{width:151,backgroundPosition:"top",backgroundSize:"auto"},content:{flex:1}}}));function je(e){var a=Object(j.a)().t,t=we();return l.a.createElement(w.a,{className:t.title,variant:"h5"},a(e.translation))}function Ie(e){var a=we();return l.a.createElement(w.a,{className:a.title,variant:"h5"},l.a.createElement(I.a,null,l.a.createElement("span",null,e.placeholder)))}var we=Object(O.a)((function(e){return{title:{paddingBottom:e.spacing(2)}}}));function Se(e){var a=Ce(),t=Object(Ee.a)(),r=Object(h.a)(t.breakpoints.up("lg"));return l.a.createElement("div",{className:a.root},l.a.createElement(n.Suspense,{fallback:l.a.createElement(Ie,{placeholder:"Donations"})},l.a.createElement(je,{translation:"RahNeil_N3.Irus.Donations.Title"})),l.a.createElement(he.a,{container:!0,spacing:2},l.a.createElement(he.a,{item:!0,xs:12,sm:12,md:8,lg:6},l.a.createElement(n.Suspense,{fallback:l.a.createElement(Ne,{isDarkTheme:e.isDarkTheme})},l.a.createElement(ke,{isDarkTheme:e.isDarkTheme}))),l.a.createElement(he.a,{item:!0,xs:12,sm:12,md:4,lg:6},l.a.createElement(he.a,{container:!0,spacing:2},l.a.createElement(he.a,{item:!0,xs:12,sm:6,md:12,lg:6},l.a.createElement(n.Suspense,{fallback:l.a.createElement(De,{isDarkTheme:e.isDarkTheme})},l.a.createElement(Te,{isDarkTheme:e.isDarkTheme}))),l.a.createElement(he.a,{item:!0,xs:12,sm:6,md:12,lg:6},l.a.createElement(n.Suspense,{fallback:l.a.createElement(De,{isDarkTheme:e.isDarkTheme})},l.a.createElement(Te,{isDarkTheme:e.isDarkTheme}))),r?l.a.createElement(l.a.Fragment,null,l.a.createElement(he.a,{item:!0,xs:12,sm:6,md:12,lg:6},l.a.createElement(n.Suspense,{fallback:l.a.createElement(De,{isDarkTheme:e.isDarkTheme})},l.a.createElement(Te,{isDarkTheme:e.isDarkTheme}))),l.a.createElement(he.a,{item:!0,xs:12,sm:6,md:12,lg:6},l.a.createElement(n.Suspense,{fallback:l.a.createElement(De,{isDarkTheme:e.isDarkTheme})},l.a.createElement(Te,{isDarkTheme:e.isDarkTheme})))):null))))}var Ce=Object(O.a)((function(e){return{root:Object(f.a)({padding:e.spacing(4)},e.breakpoints.up("sm"),{padding:e.spacing(6)})}})),xe=t(107),Re=t(225),_e=t(161),Be=t(230),Le=t(220),Me=t(221),Fe=t(222),ze=t(109),Pe=t.n(ze),We=t(227),He=t(108),Ae=t.n(He),Ge=t(234),Je=t(218),$e=t(229),qe=t(219),Ue=t(235),Ve=t(60),Ke=t.n(Ve),Qe=t(61),Xe=t.n(Qe);function Ye(e){var a=Object(j.a)().t,t=ea(),n=Object(Ee.a)(),r=l.a.useState(0),c=Object(o.a)(r,2),i=c[0],s=c[1],m=function(){s((function(e){return e+1}))},u=function(){s((function(e){return e-1}))},p=function(n){return l.a.createElement("div",{className:t.actionsContainer},l.a.createElement("div",null,l.a.createElement(Q.a,{disabled:0===n.index,onClick:u,className:t.button},a("RahNeil_N3.Irus.Back")),n.index===e.steps.length-1?e.finishButton:l.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:m,className:t.button},a("RahNeil_N3.Irus.Next"))))};return Object(h.a)((function(e){return e.breakpoints.up("sm")}))?l.a.createElement(Ge.a,{activeStep:i,orientation:"vertical"},e.steps.map((function(e,t){return l.a.createElement(Je.a,{key:e.label.placeholder},l.a.createElement($e.a,null,a(e.label.translation)),l.a.createElement(qe.a,null,e.content.translation,l.a.createElement(p,{index:t})))}))):l.a.createElement(l.a.Fragment,null,l.a.createElement(Ae.a,{axis:"rtl"===n.direction?"x-reverse":"x",index:i,onChangeIndex:function(e){s(e)},enableMouseEvents:!0},e.steps.map((function(e,a){return l.a.createElement("div",{className:t.mobileStep,key:e.label.placeholder},e.content.translation)}))),l.a.createElement(Ue.a,{variant:"dots",steps:e.steps.length,activeStep:i,nextButton:i===e.steps.length-1?e.finishButton:l.a.createElement(Q.a,{size:"small",onClick:3!==i?m:null},a("RahNeil_N3.Irus.Next"),"rtl"===n.direction?l.a.createElement(Ke.a,null):l.a.createElement(Xe.a,null)),backButton:l.a.createElement(Q.a,{size:"small",onClick:u,disabled:0===i},"rtl"===n.direction?l.a.createElement(Xe.a,null):l.a.createElement(Ke.a,null),a("RahNeil_N3.Irus.Back"))}))}function Ze(e){var a=ea(),t=Object(Ee.a)(),n=function(){return l.a.createElement("div",{className:a.actionsContainer},l.a.createElement("div",null,l.a.createElement(Q.a,{disabled:!0,className:a.button},l.a.createElement(I.a,null,l.a.createElement("span",null,"Back"))),l.a.createElement(Q.a,{variant:"contained",color:"primary",className:a.button},l.a.createElement(I.a,null,l.a.createElement("span",null,"Next")))))};return Object(h.a)((function(e){return e.breakpoints.up("sm")}))?l.a.createElement(Ge.a,{activeStep:0,orientation:"vertical"},e.steps.map((function(e,a){return 0===a?l.a.createElement(Je.a,{key:e.label.placeholder},l.a.createElement($e.a,null,l.a.createElement(I.a,null,l.a.createElement("span",null,e.label.placeholder))),l.a.createElement(qe.a,null,e.content.placeholder,l.a.createElement(n,null))):l.a.createElement(Je.a,{key:e.label.placeholder},l.a.createElement($e.a,null,l.a.createElement(I.a,null,l.a.createElement("span",null,e.label.placeholder))))}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a.mobileStep,key:e.steps[0].label.placeholder},e.steps[0].content.placeholder),l.a.createElement(Ue.a,{variant:"dots",steps:e.steps.length,activeStep:0,nextButton:l.a.createElement(Q.a,{size:"small"},l.a.createElement(I.a,null,l.a.createElement("span",null,"Next")),"rtl"===t.direction?l.a.createElement(Ke.a,null):l.a.createElement(Xe.a,null)),backButton:l.a.createElement(Q.a,{size:"small",disabled:!0},"rtl"===t.direction?l.a.createElement(Xe.a,null):l.a.createElement(Ke.a,null),l.a.createElement(I.a,null,l.a.createElement("span",null,"Back")))}))}var ea=Object(O.a)((function(e){return{button:{marginRight:e.spacing(1)},actionsContainer:{marginTop:e.spacing(4)},mobileStepper:{flexGrow:1},mobileStep:{overflow:"hidden",padding:e.spacing(4),paddingTop:0}}}));function aa(e){return(0,Object(j.a)().t)(e.t)}var ta=l.a.forwardRef((function(e,a){return l.a.createElement(k.a,Object.assign({direction:"up",ref:a},e))}));function na(e){var a=Object(s.f)(),t=l.a.useState(null),r=Object(o.a)(t,2),c=r[0],i=r[1],m=l.a.useState(""),u=Object(o.a)(m,2),p=u[0],E=u[1],d=l.a.useState(null),f=Object(o.a)(d,2),b=f[0],k=f[1],N=Object(h.a)(Object(Ee.a)().breakpoints.down("xs")),v=la(),y=Object(g.b)().enqueueSnackbar,T=function(){a.push("/")},D=[{label:{placeholder:"Link Minecraft account",translation:"Link Minecraft account"},content:{placeholder:l.a.createElement(l.a.Fragment,null,l.a.createElement(We.a,{severity:"warning",className:v.alert,classes:{display:"flex"}},l.a.createElement(I.a,{style:{maxWidth:"inherit"}},l.a.createElement("span",null,"This step is ",l.a.createElement("strong",null,"optional"),", but you won't be ",l.a.createElement("strong",null,"whitelisted")," if you don't link your Minecraft account."))),l.a.createElement(he.a,{container:!0,spacing:1,alignItems:"center"},l.a.createElement(he.a,{item:!0},l.a.createElement("img",{height:36,src:"https://crafatar.com/renders/head/a2b8d2c37729406888d3d569d4e23375.png?overlay&default=606e2ff0ed7748429d6ce1d3321c7838",alt:"Loading..."})),l.a.createElement(he.a,{item:!0},l.a.createElement(Re.a,{label:" ",disabled:!0})),l.a.createElement(he.a,{item:!0},l.a.createElement(Q.a,{variant:"outlined",color:"primary",disabled:!0},l.a.createElement(I.a,null,l.a.createElement("span",null,"Link")))))),translation:l.a.createElement(l.a.Fragment,null,l.a.createElement(_e.a,{in:null===c},l.a.createElement(We.a,{severity:"warning",className:v.alert},"This step is ",l.a.createElement("strong",null,"optional"),", but you won't be ",l.a.createElement("strong",null,"whitelisted")," if you don't link your Minecraft account.")),l.a.createElement(_e.a,{in:"a2b8d2c37729406888d3d569d4e23375"===c},l.a.createElement(We.a,{severity:"error",className:v.alert},l.a.createElement("strong",null,"Invalid username"),", please check for typos and try again.")),l.a.createElement(_e.a,{in:"a2b8d2c37729406888d3d569d4e23375"!==c&&null!==c},l.a.createElement(We.a,{severity:"success",className:v.alert},"Hey ",l.a.createElement("strong",null,b)," ! Hope to see you soon on our servers :D")),l.a.createElement(he.a,{container:!0,spacing:1,alignItems:"center"},l.a.createElement(he.a,{item:!0},l.a.createElement("img",{height:36,src:"https://crafatar.com/renders/head/"+(null===c?"a2b8d2c37729406888d3d569d4e23375":c)+".png?overlay&default=606e2ff0ed7748429d6ce1d3321c7838",alt:p})),l.a.createElement(he.a,{item:!0},l.a.createElement(Re.a,{label:"Minecraft username",value:p,onChange:function(e){var a=e.target.value;E(a)}})),l.a.createElement(he.a,{item:!0},l.a.createElement(Q.a,{variant:"outlined",color:"primary",onClick:function(e){""===p?(i(null),k(null)):fetch("https://api.minetools.eu/uuid/"+p,{crossDomain:!0,method:"GET"}).then((function(e){e.json().then((function(e){i(null==e.id?"a2b8d2c37729406888d3d569d4e23375":e.id),k(p)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},disabled:p===b||""===p},"Link"))))}},{label:{placeholder:"Link Discord account",translation:"Link Discord account"},content:{translation:l.a.createElement(We.a,{severity:"warning",className:v.alert},"This step is ",l.a.createElement("strong",null,"optional"),", but you won't receive the ",l.a.createElement("strong",null,"donator role")," if you don't link your Discord account.")}},{label:{placeholder:"Choose amount & checkout",translation:"Choose amount & checkout"},content:{translation:l.a.createElement(xe.PayPalButton,{amount:5,shippingPreference:"NO_SHIPPING",onSuccess:function(e,a){return alert("Transaction completed by "+e.payer.name.given_name),fetch("/paypal-transaction-complete",{method:"post",body:JSON.stringify({orderID:a.orderID})})},catchError:function(e){y(e,{variant:"error"}),a.push("/")},onError:function(){y("An error occured, plz try again later",{variant:"error"}),a.push("/")},onCancel:function(){y("Transaction cancelled",{variant:"warning"})}})}}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(Be.a,{open:e.opened,onClose:T,"aria-labelledby":l.a.createElement(n.Suspense,{fallback:l.a.createElement(I.a,null,l.a.createElement("span",null,"Donate now"))},l.a.createElement(aa,{t:"RahNeil_N3.Irus.Donations.Donate_Now.Title"})),"aria-describedby":l.a.createElement(n.Suspense,{fallback:l.a.createElement(I.a,null,l.a.createElement("span",null,"Donate to support the charity of your choice :D\\nThe donation amount isn't restricted"))},l.a.createElement(aa,{t:"RahNeil_N3.Irus.Donations.Donate_Now.Description"})),fullScreen:N,maxWidth:"sm",keepMounted:!0,TransitionComponent:ta,fullWidth:!0},l.a.createElement(Le.a,{className:v.title,disableTypography:!0},l.a.createElement(w.a,{className:v.titleTypography,variant:"h5",component:"span"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(I.a,null,l.a.createElement("span",null,"Donate now"))},l.a.createElement(aa,{t:"RahNeil_N3.Irus.Donations.Donate_Now.Title"}))),l.a.createElement(G.a,{edge:"start",color:"inherit",onClick:T,"aria-label":"close"},l.a.createElement(Pe.a,null))),l.a.createElement(Me.a,{dividers:!0},l.a.createElement(n.Suspense,{fallback:l.a.createElement(Ze,{steps:D})},l.a.createElement(Ye,{steps:D}))),N?null:l.a.createElement(Fe.a,null,l.a.createElement(Q.a,{onClick:T,color:"primary"},l.a.createElement(n.Suspense,{fallback:l.a.createElement(I.a,null,l.a.createElement("span",null,"Cancel"))},l.a.createElement(aa,{t:"RahNeil_N3.Irus.Cancel"}))))))}var la=Object(O.a)((function(e){return{title:{display:"flex",alignItems:"center"},titleTypography:{flex:1},alert:{marginBottom:e.spacing(2)}}}));function ra(){var e=Object(h.a)("(prefers-color-scheme: dark)"),a=Object(n.useState)(null),t=Object(o.a)(a,2),r=t[0],c=t[1],p=null===r?e:r,f=Object(m.a)({palette:{primary:E.a,secondary:{main:"#f44336"}}}),b=Object(m.a)({palette:{type:"dark",primary:E.a,secondary:{main:"#f44336"},background:{default:"#121212"},card:{backgroundColor:"#ff6600"}}});return l.a.createElement(u.a,{theme:p?b:f},l.a.createElement(g.a,{maxSnack:3},l.a.createElement(d.a,null),l.a.createElement(i.a,null,l.a.createElement(ue,{toggleTheme:function(){c((function(a){return null===a?!e:!a}))},isDarkTheme:p}),l.a.createElement(Se,{isDarkTheme:p}),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(na,null)),l.a.createElement(s.a,{path:"/donate"},l.a.createElement(na,{opened:!0}))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ca=t(89),oa=t(59),ia=t(114),sa=t(111);ca.a.use(ia.a).use(sa.a).use(oa.e).init({load:"languageOnly",fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1}});ca.a;c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ra,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[126,1,2]]]);