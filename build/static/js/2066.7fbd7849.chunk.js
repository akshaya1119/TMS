"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[2066],{95914:(e,a,s)=>{s.r(a),s.d(a,{default:()=>N});var r=s(72791),t=s(47022),l=s(29795),c=s(30018),n=s(27098),d=s(89743),i=s(2677),o=s(43360),m=s(55294),x=(s(3327),s(11087)),f=s(32445),u=s(80184);const N=()=>{const e="#FFC727",[a,s]=(0,r.useState)(""),[N,h]=(0,r.useState)(""),[v,b]=(0,r.useState)(""),[p,g]=(0,r.useState)(!1),j=async()=>{if(a)try{g(!0);const e=await m.Z.put("http://api1.chandrakala.co.in/api/Login/ForgetPassword",{email:a,password:"password"});e&&e.data?b("Password has been sent to your email successfully"):console.error("Invalid API response",e)}catch(e){console.error("Error while resetting password:",e)}finally{g(!1)}else h("Email is required")};return(0,u.jsx)(f.Z,{bgimg:"bgimgforgotpass",theme:e,children:(0,u.jsx)(t.Z,{children:(0,u.jsxs)(l.Z,{onSubmit:e=>{e.preventDefault(),j()},children:[(0,u.jsx)("h1",{className:"text-center",children:"Forgot Password"}),(0,u.jsx)("p",{className:"text-center",children:"Enter your email address to reset your password"}),v&&(0,u.jsx)(c.Z,{variant:"success",children:v}),(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsxs)(n.Z,{hasValidation:!0,children:[(0,u.jsx)(l.Z.Control,{placeholder:"Email Address",autoComplete:"email",value:a,onChange:e=>{return a=e.target.value,s(a),void h(a?"":"Email is required");var a},type:"email",isInvalid:!!N,required:!0}),(0,u.jsx)(l.Z.Control.Feedback,{type:"invalid",children:N})]})}),(0,u.jsxs)(d.Z,{children:[(0,u.jsx)(i.Z,{xs:6,className:"align-items-start",children:(0,u.jsx)(o.Z,{type:"submit",color:"primary",className:"px-4",style:{backgroundColor:e},disabled:p,children:p?"Loading...":"Reset Password"})}),(0,u.jsx)(i.Z,{xs:6,className:"text-end fs-5",children:(0,u.jsx)(x.rU,{to:"/Login",style:{color:e},className:"px-4",children:"Login"})})]})]})})})}},32445:(e,a,s)=>{s.d(a,{Z:()=>N});var r=s(72791),t=s(47022),l=s(89743),c=s(2677),n=s(81694),d=s.n(n),i=s(10162),o=s(80184);const m=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...l}=e;return r=(0,i.vE)(r,"card-group"),(0,o.jsx)(t,{ref:a,className:d()(s,r),...l})}));m.displayName="CardGroup";const x=m;var f=s(54694),u=s(99033);const N=e=>{let{children:a,bgimg:s,theme:r}=e;return(0,o.jsx)("div",{children:(0,o.jsx)("main",{className:"blur-5",children:(0,o.jsx)("div",{className:"bg-body-tertiary min-vw-100 min-vh-100 d-flex align-items-center blur-5",children:(0,o.jsx)(t.Z,{fluid:!0,className:"align-items-center loginbg ",children:(0,o.jsxs)(l.Z,{className:"align-items-center justify-content-center",children:[(0,o.jsx)(c.Z,{md:8,lg:6,className:"d-flex vh-100 d-none d-lg-block ".concat(s," border-end border-4")}),(0,o.jsx)(c.Z,{sm:8,md:7,lg:6,className:"d-flex vh-100 align-items-center blur-5 shadow-left",children:(0,o.jsxs)(x,{className:"container  p-md-5 flex-column",children:[(0,o.jsx)(f.Z,{className:"d-flex flex-row align-items-center justify-content-center gap-3 rounded mb-4 text-primary",children:(0,o.jsx)("h1",{style:{color:r},children:"CUPL-Ticketing System"})}),(0,o.jsx)(f.Z,{className:"p-4 container rounded ",children:(0,o.jsx)(u.Z,{className:"m-6",children:a})})]})})]})})})})})}},43360:(e,a,s)=>{s.d(a,{Z:()=>o});var r=s(81694),t=s.n(r),l=s(72791),c=s(15341),n=s(10162),d=s(80184);const i=l.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:l="primary",size:i,active:o=!1,disabled:m=!1,className:x,...f}=e;const u=(0,n.vE)(r,"btn"),[N,{tagName:h}]=(0,c.FT)({tagName:s,disabled:m,...f}),v=h;return(0,d.jsx)(v,{...N,...f,ref:a,disabled:m,className:t()(x,u,o&&"active",l&&"".concat(u,"-").concat(l),i&&"".concat(u,"-").concat(i),f.href&&m&&"disabled")})}));i.displayName="Button";const o=i},54694:(e,a,s)=>{s.d(a,{Z:()=>_});var r=s(81694),t=s.n(r),l=s(72791),c=s(10162),n=s(99033),d=s(80184);const i=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...n}=e;return r=(0,c.vE)(r,"card-footer"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));i.displayName="CardFooter";const o=i;var m=s(96040);const x=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:n="div",...i}=e;const o=(0,c.vE)(s,"card-header"),x=(0,l.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,d.jsx)(m.Z.Provider,{value:x,children:(0,d.jsx)(n,{ref:a,...i,className:t()(r,o)})})}));x.displayName="CardHeader";const f=x,u=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:l,as:n="img",...i}=e;const o=(0,c.vE)(s,"card-img");return(0,d.jsx)(n,{ref:a,className:t()(l?"".concat(o,"-").concat(l):o,r),...i})}));u.displayName="CardImg";const N=u,h=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...n}=e;return r=(0,c.vE)(r,"card-img-overlay"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));h.displayName="CardImgOverlay";const v=h,b=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="a",...n}=e;return r=(0,c.vE)(r,"card-link"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));b.displayName="CardLink";const p=b;var g=s(27472);const j=(0,g.Z)("h6"),y=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=j,...n}=e;return r=(0,c.vE)(r,"card-subtitle"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));y.displayName="CardSubtitle";const Z=y,w=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="p",...n}=e;return r=(0,c.vE)(r,"card-text"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));w.displayName="CardText";const C=w,P=(0,g.Z)("h5"),E=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=P,...n}=e;return r=(0,c.vE)(r,"card-title"),(0,d.jsx)(l,{ref:a,className:t()(s,r),...n})}));E.displayName="CardTitle";const R=E,k=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:l,text:i,border:o,body:m=!1,children:x,as:f="div",...u}=e;const N=(0,c.vE)(s,"card");return(0,d.jsx)(f,{ref:a,...u,className:t()(r,N,l&&"bg-".concat(l),i&&"text-".concat(i),o&&"border-".concat(o)),children:m?(0,d.jsx)(n.Z,{children:x}):x})}));k.displayName="Card";const _=Object.assign(k,{Img:N,Title:R,Subtitle:Z,Body:n.Z,Link:p,Text:C,Header:f,Footer:o,ImgOverlay:v})},99033:(e,a,s)=>{s.d(a,{Z:()=>i});var r=s(72791),t=s(81694),l=s.n(t),c=s(10162),n=s(80184);const d=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:t="div",...d}=e;return r=(0,c.vE)(r,"card-body"),(0,n.jsx)(t,{ref:a,className:l()(s,r),...d})}));d.displayName="CardBody";const i=d},96040:(e,a,s)=>{s.d(a,{Z:()=>t});const r=s(72791).createContext(null);r.displayName="CardHeaderContext";const t=r},42391:e=>{var a=function(){};e.exports=a},3327:()=>{}}]);
//# sourceMappingURL=2066.7fbd7849.chunk.js.map