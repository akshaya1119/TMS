"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5914],{95914:(e,a,s)=>{s.r(a),s.d(a,{default:()=>N});var r=s(72791),t=s(47022),l=s(29795),n=s(30018),c=s(42076),i=s(89743),o=s(2677),d=s(43360),m=s(55294),f=(s(3327),s(11087)),x=s(32445),u=s(80184);const N=()=>{const e="#FFC727",[a,s]=(0,r.useState)(""),[N,v]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),[b,j]=(0,r.useState)(!1),y=async()=>{if(a)try{j(!0);const e=await m.Z.put("http://api1.chandrakala.co.in/api/Login/ForgetPassword",{email:a,password:"password"});e&&e.data?(h("Password has been sent to your email successfully"),console.log("Password reset email sent successfully")):console.error("Invalid API response",e)}catch(e){console.error("Error while resetting password:",e)}finally{j(!1)}else v("Email is required")};return(0,u.jsx)(x.Z,{bgimg:"bgimgforgotpass",theme:e,children:(0,u.jsx)(t.Z,{children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)("h1",{className:"text-center",children:"Forgot Password"}),(0,u.jsx)("p",{className:"text-center",children:"Enter your email address to reset your password"}),p&&(0,u.jsx)(n.Z,{variant:"success",children:p}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsxs)(c.Z,{hasValidation:!0,children:[(0,u.jsx)(l.Z.Control,{placeholder:"Email Address",autoComplete:"email",value:a,onChange:e=>{return a=e.target.value,s(a),void v(a?"":"Email is required");var a},type:"email",isInvalid:!!N,required:!0}),(0,u.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N})]})}),(0,u.jsxs)(i.Z,{children:[(0,u.jsx)(o.Z,{xs:6,className:"align-items-start",children:(0,u.jsx)(d.Z,{color:"primary",className:"px-4",style:{backgroundColor:e},onClick:y,disabled:b,children:b?"Loading...":"Reset Password"})}),(0,u.jsx)(o.Z,{xs:6,className:"text-end fs-5",children:(0,u.jsx)(f.rU,{to:"/Login",style:{color:e},className:"px-4",onClick:y,children:"Login"})})]})]})})})}},32445:(e,a,s)=>{s.d(a,{Z:()=>N});var r=s(72791),t=s(47022),l=s(89743),n=s(2677),c=s(81694),i=s.n(c),o=s(10162),d=s(80184);const m=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...l}=e;return r=(0,o.vE)(r,"card-group"),(0,d.jsx)(t,{ref:a,className:i()(s,r),...l})}));m.displayName="CardGroup";const f=m;var x=s(54694),u=s(99033);const N=e=>{let{children:a,bgimg:s,theme:r}=e;return(0,d.jsx)("div",{children:(0,d.jsx)("main",{className:"blur-5",children:(0,d.jsx)("div",{className:"bg-body-tertiary min-vw-100 min-vh-100 d-flex align-items-center blur-5",children:(0,d.jsx)(t.Z,{fluid:!0,className:"align-items-center loginbg ",children:(0,d.jsxs)(l.Z,{className:"align-items-center justify-content-center",children:[(0,d.jsx)(n.Z,{md:8,lg:6,className:"d-flex vh-100 d-none d-lg-block ".concat(s," border-end border-4")}),(0,d.jsx)(n.Z,{sm:8,md:7,lg:6,className:"d-flex vh-100 align-items-center blur-5 shadow-left",children:(0,d.jsxs)(f,{className:"container  p-md-5 flex-column",children:[(0,d.jsx)(x.Z,{className:"d-flex flex-row align-items-center justify-content-center gap-3 rounded mb-4 text-primary",children:(0,d.jsx)("h1",{style:{color:r},children:"CUPL-Ticketing System"})}),(0,d.jsx)(x.Z,{className:"p-4 container rounded ",children:(0,d.jsx)(u.Z,{className:"m-6",children:a})})]})})]})})})})})}},30018:(e,a,s)=>{s.d(a,{Z:()=>j});var r=s(81694),t=s.n(r),l=s(72791),n=s(80239),c=s(39007),i=s(10162),o=s(27472),d=s(80184);const m=(0,o.Z)("h4");m.displayName="DivStyledAsH4";const f=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=m,...n}=e;return r=(0,i.vE)(r,"alert-heading"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));f.displayName="AlertHeading";const x=f;var u=s(16445);const N=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=u.Z,...n}=e;return r=(0,i.vE)(r,"alert-link"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));N.displayName="AlertLink";const v=N;var p=s(72709),h=s(80473);const b=l.forwardRef(((e,a)=>{const{bsPrefix:s,show:r=!0,closeLabel:l="Close alert",closeVariant:o,className:m,children:f,variant:x="primary",onClose:u,dismissible:N,transition:v=p.Z,...b}=(0,n.Ch)(e,{show:"onClose"}),j=(0,i.vE)(s,"alert"),y=(0,c.Z)((e=>{u&&u(!1,e)})),g=!0===v?p.Z:v,Z=(0,d.jsxs)("div",{role:"alert",...g?void 0:b,ref:a,className:t()(m,j,x&&"".concat(j,"-").concat(x),N&&"".concat(j,"-dismissible")),children:[N&&(0,d.jsx)(h.Z,{onClick:y,"aria-label":l,variant:o}),f]});return g?(0,d.jsx)(g,{unmountOnExit:!0,...b,ref:void 0,in:r,children:Z}):r?Z:null}));b.displayName="Alert";const j=Object.assign(b,{Link:v,Heading:x})},43360:(e,a,s)=>{s.d(a,{Z:()=>d});var r=s(81694),t=s.n(r),l=s(72791),n=s(15341),c=s(10162),i=s(80184);const o=l.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:l="primary",size:o,active:d=!1,disabled:m=!1,className:f,...x}=e;const u=(0,c.vE)(r,"btn"),[N,{tagName:v}]=(0,n.FT)({tagName:s,disabled:m,...x}),p=v;return(0,i.jsx)(p,{...N,...x,ref:a,disabled:m,className:t()(f,u,d&&"active",l&&"".concat(u,"-").concat(l),o&&"".concat(u,"-").concat(o),x.href&&m&&"disabled")})}));o.displayName="Button";const d=o},54694:(e,a,s)=>{s.d(a,{Z:()=>_});var r=s(81694),t=s.n(r),l=s(72791),n=s(10162),c=s(99033),i=s(80184);const o=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...c}=e;return r=(0,n.vE)(r,"card-footer"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));o.displayName="CardFooter";const d=o;var m=s(96040);const f=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:c="div",...o}=e;const d=(0,n.vE)(s,"card-header"),f=(0,l.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(m.Z.Provider,{value:f,children:(0,i.jsx)(c,{ref:a,...o,className:t()(r,d)})})}));f.displayName="CardHeader";const x=f,u=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:l,as:c="img",...o}=e;const d=(0,n.vE)(s,"card-img");return(0,i.jsx)(c,{ref:a,className:t()(l?"".concat(d,"-").concat(l):d,r),...o})}));u.displayName="CardImg";const N=u,v=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...c}=e;return r=(0,n.vE)(r,"card-img-overlay"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));v.displayName="CardImgOverlay";const p=v,h=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="a",...c}=e;return r=(0,n.vE)(r,"card-link"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));h.displayName="CardLink";const b=h;var j=s(27472);const y=(0,j.Z)("h6"),g=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=y,...c}=e;return r=(0,n.vE)(r,"card-subtitle"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));g.displayName="CardSubtitle";const Z=g,w=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="p",...c}=e;return r=(0,n.vE)(r,"card-text"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));w.displayName="CardText";const C=w,P=(0,j.Z)("h5"),E=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=P,...c}=e;return r=(0,n.vE)(r,"card-title"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));E.displayName="CardTitle";const R=E,k=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:l,text:o,border:d,body:m=!1,children:f,as:x="div",...u}=e;const N=(0,n.vE)(s,"card");return(0,i.jsx)(x,{ref:a,...u,className:t()(r,N,l&&"bg-".concat(l),o&&"text-".concat(o),d&&"border-".concat(d)),children:m?(0,i.jsx)(c.Z,{children:f}):f})}));k.displayName="Card";const _=Object.assign(k,{Img:N,Title:R,Subtitle:Z,Body:c.Z,Link:b,Text:C,Header:x,Footer:d,ImgOverlay:p})},99033:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(72791),t=s(81694),l=s.n(t),n=s(10162),c=s(80184);const i=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...i}=e;return r=(0,n.vE)(r,"card-body"),(0,c.jsx)(t,{ref:a,className:l()(s,r),...i})}));i.displayName="CardBody";const o=i},96040:(e,a,s)=>{s.d(a,{Z:()=>t});const r=s(72791).createContext(null);r.displayName="CardHeaderContext";const t=r},80473:(e,a,s)=>{s.d(a,{Z:()=>m});var r=s(52007),t=s.n(r),l=s(72791),n=s(81694),c=s.n(n),i=s(80184);const o={"aria-label":t().string,onClick:t().func,variant:t().oneOf(["white"])},d=l.forwardRef(((e,a)=>{let{className:s,variant:r,"aria-label":t="Close",...l}=e;return(0,i.jsx)("button",{ref:a,type:"button",className:c()("btn-close",r&&"btn-close-".concat(r),s),"aria-label":t,...l})}));d.displayName="CloseButton",d.propTypes=o;const m=d},47022:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(81694),t=s.n(r),l=s(72791),n=s(10162),c=s(80184);const i=l.forwardRef(((e,a)=>{let{bsPrefix:s,fluid:r=!1,as:l="div",className:i,...o}=e;const d=(0,n.vE)(s,"container"),m="string"===typeof r?"-".concat(r):"-fluid";return(0,c.jsx)(l,{ref:a,...o,className:t()(i,r?"".concat(d).concat(m):d)})}));i.displayName="Container";const o=i},42076:(e,a,s)=>{s.d(a,{Z:()=>x});var r=s(81694),t=s.n(r),l=s(72791),n=s(10162),c=s(96882),i=s(91991),o=s(80184);const d=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="span",...c}=e;return r=(0,n.vE)(r,"input-group-text"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...c})}));d.displayName="InputGroupText";const m=d,f=l.forwardRef(((e,a)=>{let{bsPrefix:s,size:r,hasValidation:c,className:d,as:m="div",...f}=e;s=(0,n.vE)(s,"input-group");const x=(0,l.useMemo)((()=>({})),[]);return(0,o.jsx)(i.Z.Provider,{value:x,children:(0,o.jsx)(m,{ref:a,...f,className:t()(d,s,r&&"".concat(s,"-").concat(r),c&&"has-validation")})})}));f.displayName="InputGroup";const x=Object.assign(f,{Text:m,Radio:e=>(0,o.jsx)(m,{children:(0,o.jsx)(c.Z,{type:"radio",...e})}),Checkbox:e=>(0,o.jsx)(m,{children:(0,o.jsx)(c.Z,{type:"checkbox",...e})})})},91991:(e,a,s)=>{s.d(a,{Z:()=>t});const r=s(72791).createContext(null);r.displayName="InputGroupContext";const t=r},27472:(e,a,s)=>{s.d(a,{Z:()=>c});var r=s(72791),t=s(81694),l=s.n(t),n=s(80184);const c=e=>r.forwardRef(((a,s)=>(0,n.jsx)("div",{...a,ref:s,className:l()(a.className,e)})))},3327:()=>{}}]);
//# sourceMappingURL=5914.f6c4b863.chunk.js.map