"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3024],{23024:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var r=s(72791),t=s(57689),n=s(11087),c=s(24846),l=s(19069),i=s(93647),o=s(24849),d=s(29795),m=s(30018),x=s(27098),f=s(89743),u=s(2677),v=s(43360),N=s(583),p=s(55294),h=(s(3327),s(32445)),b=s(80184);const j=()=>{const{login:e,user:a,isLoggedIn:s}=(0,N.a)(),j=(0,t.s0)(),[g,y]=(0,r.useState)(""),[Z,C]=(0,r.useState)(""),[w,P]=(0,r.useState)(""),[E,k]=(0,r.useState)(""),[R,I]=(0,r.useState)(!1),[L,S]=(0,r.useState)(!1),[H,T]=(0,r.useState)(!1);(0,r.useEffect)((()=>{(async()=>{s()&&(a.autoGenPass?j("/ChangePassword"):j("/dashboard"))})()}),[a,s,j]);return(0,b.jsx)(h.Z,{bgimg:"bgimg",children:s()?(0,b.jsx)("div",{className:"text-center",children:(0,b.jsx)(o.Z,{animation:"border",role:"status"})}):(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(d.Z,{className:"mt-4",children:[(0,b.jsx)("h1",{className:"text-center",children:"Login"}),(0,b.jsx)("p",{className:"text-center",children:"Sign In to your account"}),(0,b.jsxs)("div",{className:"mb-3",children:[H&&(0,b.jsx)(m.Z,{variant:"danger",onClose:()=>T(!1),dismissible:!0,className:"align-items-center",children:"Email or password you entered is incorrect"}),(0,b.jsxs)(x.Z,{hasValidation:!0,className:"mb-3",children:[(0,b.jsx)(x.Z.Text,{children:(0,b.jsx)(c.Z,{icon:l.m})}),(0,b.jsx)(d.Z.Control,{placeholder:"Email Address",autoComplete:"username",value:g,onChange:e=>{return a=e.target.value,y(a),P(a?(e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(a)?"":"Invalid email format":"Email is required"),void T(!1);var a},type:"email",isInvalid:!!w,required:!0}),(0,b.jsx)(d.Z.Control.Feedback,{type:"invalid",children:w})]})]}),(0,b.jsx)("div",{className:"mb-4",children:(0,b.jsxs)(x.Z,{hasValidation:!0,className:"mb-3",children:[(0,b.jsx)(x.Z.Text,{children:(0,b.jsx)(c.Z,{icon:i.U})}),(0,b.jsx)(d.Z.Control,{type:R?"text":"password",placeholder:"Password",autoComplete:"current-password",value:Z,onChange:e=>{return a=e.target.value,C(a),void k("");var a},isInvalid:!!E,required:!0}),(0,b.jsx)(x.Z.Text,{onClick:()=>{I(!R)},className:"hovericon",children:R?(0,b.jsx)("i",{className:"fa-solid fa-eye"}):(0,b.jsx)("i",{className:"fa-solid fa-eye-slash"})}),(0,b.jsx)(d.Z.Control.Feedback,{type:"invalid",children:E})]})}),(0,b.jsxs)(f.Z,{className:"align-items-center",children:[(0,b.jsx)(u.Z,{xs:12,sm:6,className:"text-center text-sm-center text-md-start mb-2 mb-sm-0",children:(0,b.jsxs)(v.Z,{color:"primary",className:"px-4 w-100",onClick:async()=>{if(!w&&!E&&g&&Z)try{S(!0);const a=await p.Z.post("".concat("http://api1.chandrakala.co.in/api/Login","/Login"),{email:g,password:Z});a&&a.data?e(a.data):console.error("Invalid API response",a)}catch(a){console.error("Error during login:",a),P(""),k("Invalid email or password"),T(!0)}finally{S(!1)}},disabled:L,children:[L?(0,b.jsx)(o.Z,{animation:"border",size:"sm",className:"me-2"}):null,"Login"]})}),(0,b.jsx)(u.Z,{xs:12,sm:6,className:"text-center text-sm-center text-md-end",children:(0,b.jsx)(n.rU,{to:"/ForgotPassword",className:"d-block",children:"Forgot password?"})})]})]})})})}},32445:(e,a,s)=>{s.d(a,{Z:()=>v});var r=s(72791),t=s(47022),n=s(89743),c=s(2677),l=s(81694),i=s.n(l),o=s(10162),d=s(80184);const m=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...n}=e;return r=(0,o.vE)(r,"card-group"),(0,d.jsx)(t,{ref:a,className:i()(s,r),...n})}));m.displayName="CardGroup";const x=m;var f=s(54694),u=s(99033);const v=e=>{let{children:a,bgimg:s,theme:r}=e;return(0,d.jsx)("div",{children:(0,d.jsx)("main",{className:"blur-5",children:(0,d.jsx)("div",{className:"bg-body-tertiary min-vw-100 min-vh-100 d-flex align-items-center blur-5",children:(0,d.jsx)(t.Z,{fluid:!0,className:"align-items-center loginbg ",children:(0,d.jsxs)(n.Z,{className:"align-items-center justify-content-center",children:[(0,d.jsx)(c.Z,{md:8,lg:6,className:"d-flex vh-100 d-none d-lg-block ".concat(s," border-end border-4")}),(0,d.jsx)(c.Z,{sm:8,md:7,lg:6,className:"d-flex vh-100 align-items-center blur-5 shadow-left",children:(0,d.jsxs)(x,{className:"container  p-md-5 flex-column",children:[(0,d.jsx)(f.Z,{className:"d-flex flex-row align-items-center justify-content-center gap-3 rounded mb-4 text-primary",children:(0,d.jsx)("h1",{style:{color:r},children:"CUPL-Ticketing System"})}),(0,d.jsx)(f.Z,{className:"p-4 container rounded ",children:(0,d.jsx)(u.Z,{className:"m-6",children:a})})]})})]})})})})})}},19069:(e,a,s)=>{s.d(a,{m:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z' class='ci-primary'/>"]},93647:(e,a,s)=>{s.d(a,{U:()=>r});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},30018:(e,a,s)=>{s.d(a,{Z:()=>j});var r=s(81694),t=s.n(r),n=s(72791),c=s(80239),l=s(39007),i=s(10162),o=s(27472),d=s(80184);const m=(0,o.Z)("h4");m.displayName="DivStyledAsH4";const x=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=m,...c}=e;return r=(0,i.vE)(r,"alert-heading"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...c})}));x.displayName="AlertHeading";const f=x;var u=s(31396);const v=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=u.Z,...c}=e;return r=(0,i.vE)(r,"alert-link"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...c})}));v.displayName="AlertLink";const N=v;var p=s(72709),h=s(80473);const b=n.forwardRef(((e,a)=>{const{bsPrefix:s,show:r=!0,closeLabel:n="Close alert",closeVariant:o,className:m,children:x,variant:f="primary",onClose:u,dismissible:v,transition:N=p.Z,...b}=(0,c.Ch)(e,{show:"onClose"}),j=(0,i.vE)(s,"alert"),g=(0,l.Z)((e=>{u&&u(!1,e)})),y=!0===N?p.Z:N,Z=(0,d.jsxs)("div",{role:"alert",...y?void 0:b,ref:a,className:t()(m,j,f&&"".concat(j,"-").concat(f),v&&"".concat(j,"-dismissible")),children:[v&&(0,d.jsx)(h.Z,{onClick:g,"aria-label":n,variant:o}),x]});return y?(0,d.jsx)(y,{unmountOnExit:!0,...b,ref:void 0,in:r,children:Z}):r?Z:null}));b.displayName="Alert";const j=Object.assign(b,{Link:N,Heading:f})},43360:(e,a,s)=>{s.d(a,{Z:()=>d});var r=s(81694),t=s.n(r),n=s(72791),c=s(15341),l=s(10162),i=s(80184);const o=n.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:n="primary",size:o,active:d=!1,disabled:m=!1,className:x,...f}=e;const u=(0,l.vE)(r,"btn"),[v,{tagName:N}]=(0,c.FT)({tagName:s,disabled:m,...f}),p=N;return(0,i.jsx)(p,{...v,...f,ref:a,disabled:m,className:t()(x,u,d&&"active",n&&"".concat(u,"-").concat(n),o&&"".concat(u,"-").concat(o),f.href&&m&&"disabled")})}));o.displayName="Button";const d=o},54694:(e,a,s)=>{s.d(a,{Z:()=>I});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(99033),i=s(80184);const o=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...l}=e;return r=(0,c.vE)(r,"card-footer"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));o.displayName="CardFooter";const d=o;var m=s(96040);const x=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:l="div",...o}=e;const d=(0,c.vE)(s,"card-header"),x=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(m.Z.Provider,{value:x,children:(0,i.jsx)(l,{ref:a,...o,className:t()(r,d)})})}));x.displayName="CardHeader";const f=x,u=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:n,as:l="img",...o}=e;const d=(0,c.vE)(s,"card-img");return(0,i.jsx)(l,{ref:a,className:t()(n?"".concat(d,"-").concat(n):d,r),...o})}));u.displayName="CardImg";const v=u,N=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...l}=e;return r=(0,c.vE)(r,"card-img-overlay"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));N.displayName="CardImgOverlay";const p=N,h=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="a",...l}=e;return r=(0,c.vE)(r,"card-link"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));h.displayName="CardLink";const b=h;var j=s(27472);const g=(0,j.Z)("h6"),y=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=g,...l}=e;return r=(0,c.vE)(r,"card-subtitle"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));y.displayName="CardSubtitle";const Z=y,C=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="p",...l}=e;return r=(0,c.vE)(r,"card-text"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));C.displayName="CardText";const w=C,P=(0,j.Z)("h5"),E=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=P,...l}=e;return r=(0,c.vE)(r,"card-title"),(0,i.jsx)(n,{ref:a,className:t()(s,r),...l})}));E.displayName="CardTitle";const k=E,R=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:n,text:o,border:d,body:m=!1,children:x,as:f="div",...u}=e;const v=(0,c.vE)(s,"card");return(0,i.jsx)(f,{ref:a,...u,className:t()(r,v,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:m?(0,i.jsx)(l.Z,{children:x}):x})}));R.displayName="Card";const I=Object.assign(R,{Img:v,Title:k,Subtitle:Z,Body:l.Z,Link:b,Text:w,Header:f,Footer:d,ImgOverlay:p})},99033:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(72791),t=s(81694),n=s.n(t),c=s(10162),l=s(80184);const i=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...i}=e;return r=(0,c.vE)(r,"card-body"),(0,l.jsx)(t,{ref:a,className:n()(s,r),...i})}));i.displayName="CardBody";const o=i},96040:(e,a,s)=>{s.d(a,{Z:()=>t});const r=s(72791).createContext(null);r.displayName="CardHeaderContext";const t=r},80473:(e,a,s)=>{s.d(a,{Z:()=>m});var r=s(52007),t=s.n(r),n=s(72791),c=s(81694),l=s.n(c),i=s(80184);const o={"aria-label":t().string,onClick:t().func,variant:t().oneOf(["white"])},d=n.forwardRef(((e,a)=>{let{className:s,variant:r,"aria-label":t="Close",...n}=e;return(0,i.jsx)("button",{ref:a,type:"button",className:l()("btn-close",r&&"btn-close-".concat(r),s),"aria-label":t,...n})}));d.displayName="CloseButton",d.propTypes=o;const m=d},47022:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(80184);const i=n.forwardRef(((e,a)=>{let{bsPrefix:s,fluid:r=!1,as:n="div",className:i,...o}=e;const d=(0,c.vE)(s,"container"),m="string"===typeof r?"-".concat(r):"-fluid";return(0,l.jsx)(n,{ref:a,...o,className:t()(i,r?"".concat(d).concat(m):d)})}));i.displayName="Container";const o=i},27098:(e,a,s)=>{s.d(a,{Z:()=>u});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(96882);const i=n.createContext(null);i.displayName="InputGroupContext";const o=i;var d=s(80184);const m=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="span",...l}=e;return r=(0,c.vE)(r,"input-group-text"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...l})}));m.displayName="InputGroupText";const x=m,f=n.forwardRef(((e,a)=>{let{bsPrefix:s,size:r,hasValidation:l,className:i,as:m="div",...x}=e;s=(0,c.vE)(s,"input-group");const f=(0,n.useMemo)((()=>({})),[]);return(0,d.jsx)(o.Provider,{value:f,children:(0,d.jsx)(m,{ref:a,...x,className:t()(i,s,r&&"".concat(s,"-").concat(r),l&&"has-validation")})})}));f.displayName="InputGroup";const u=Object.assign(f,{Text:x,Radio:e=>(0,d.jsx)(x,{children:(0,d.jsx)(l.Z,{type:"radio",...e})}),Checkbox:e=>(0,d.jsx)(x,{children:(0,d.jsx)(l.Z,{type:"checkbox",...e})})})},24849:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(81694),t=s.n(r),n=s(72791),c=s(10162),l=s(80184);const i=n.forwardRef(((e,a)=>{let{bsPrefix:s,variant:r,animation:n="border",size:i,as:o="div",className:d,...m}=e;s=(0,c.vE)(s,"spinner");const x="".concat(s,"-").concat(n);return(0,l.jsx)(o,{ref:a,...m,className:t()(d,x,i&&"".concat(x,"-").concat(i),r&&"text-".concat(r))})}));i.displayName="Spinner";const o=i},27472:(e,a,s)=>{s.d(a,{Z:()=>l});var r=s(72791),t=s(81694),n=s.n(t),c=s(80184);const l=e=>r.forwardRef(((a,s)=>(0,c.jsx)("div",{...a,ref:s,className:n()(a.className,e)})))},3327:()=>{}}]);
//# sourceMappingURL=3024.6c59f608.chunk.js.map