"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[3517],{33517:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var c=t(72791),n=t(42443),l=t(583),a=t(55294),r=t(88890),i=t.n(r),o=t(57689),d=t(80184);const u="http://api1.chandrakala.co.in/api/Users",h="http://api1.chandrakala.co.in/api/Tickets",m=()=>{const{userId:e}=(0,o.UO)(),s=((0,c.useRef)(null),(0,c.useRef)(null)),t=(0,c.useRef)(null),[r,m]=(0,c.useState)({}),{user:x}=(0,l.a)(),p=e||x.userId,[j,f]=(0,c.useState)(!1),[g,N]=(0,c.useState)(null),[b,v]=(0,c.useState)(!1),[P,w]=(0,c.useState)(null),[k,T]=(0,c.useState)(null);(0,c.useEffect)((()=>{p&&fetch("".concat(u,"/").concat(p)).then((e=>e.json())).then((e=>{console.log("Fetched user details:",e),m(e)})).catch((e=>{console.error("Error fetching user details:",e)}))}),[p]),(0,c.useEffect)((()=>{null!==r&&void 0!==r&&r.email&&(C(),E())}),[null===r||void 0===r?void 0:r.email]),(0,c.useEffect)((()=>{null!==P&&y(s,P)}),[P]),(0,c.useEffect)((()=>{null!==k&&y(t,k)}),[k]);const y=(e,s)=>{let t=0;const c=s/50,n=setInterval((()=>{t+=c,t>=s&&(t=s,clearInterval(n)),i()(e.current).find(".counter-value").text(Math.ceil(t.toString()))}),40)},C=async()=>{try{const e=await fetch("".concat(h,"/status-count?email=").concat(r.email));if(!e.ok)throw new Error("Error fetching assigned tickets count: ".concat(e.status));const s=await e.json(),t=(null===s||void 0===s?void 0:s.openCount)+s.pendingCount+s.selfassignedCount+s.completedCount;w(t),console.log("Assigned Tickets Count:",t)}catch(e){console.error("Error fetching assigned tickets count:",e)}},E=async()=>{try{const e=await fetch("".concat(h,"/status-count?email=").concat(r.email));if(!e.ok)throw new Error("Error fetching resolved tickets count: ".concat(e.status));const s=(await e.json()).completedCount;T(s),console.log("Resolved Tickets Count:",s)}catch(e){console.error("Error fetching resolved tickets count:",e)}};return(0,d.jsx)("section",{style:{backgroundColor:"#f8f9fa",padding:"20px"},children:(0,d.jsx)(n.L5,{className:"py-5",children:(0,d.jsxs)(n.uZ,{children:[(0,d.jsxs)(n.TK,{lg:"4",children:[(0,d.jsxs)(n.Yl,{className:"mb-4",children:[(0,d.jsx)("div",{children:(0,d.jsxs)(n.H7,{className:"text-center d-flex flex-column align-items-center position-relative",children:[(0,d.jsx)("div",{className:"rounded-circle overflow-hidden position-relative  border border-2 border-primary",style:{width:"150px",height:"150px",overflow:"hidden"},children:(0,d.jsx)(n.PH,{id:"previewImage",src:null!==r&&void 0!==r&&r.profilePicturePath?"".concat("http://api1.chandrakala.co.in","/").concat(r.profilePicturePath,"?timestamp=").concat(Date.now()):"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp",alt:"avatar",className:"w-100 h-100",fluid:!0})}),(0,d.jsx)("label",{htmlFor:"fileInput",className:"position-absolute bottom-0 end-0 m-2",children:(0,d.jsx)(n.vm,{icon:"pen",className:"text-dark"})}),(0,d.jsx)("input",{type:"file",id:"fileInput",className:"d-none",onChange:e=>{const s=e.target.files[0];N(s),f(!0);const t=URL.createObjectURL(s);document.getElementById("previewImage").src=t}})]})}),j&&(0,d.jsx)("button",{className:"btn btn-sm btn-primary",onClick:()=>{if(g){v(!0);const e=new FormData;e.append("image",g),a.Z.post("".concat(u,"/upload/").concat(p),e).then((e=>{m((s=>({...s,profilePicturePath:e.data.filePath}))),f(!1)})).catch((e=>{console.error("Error updating profile picture:",e)})).finally((()=>{v(!1),f(!1),C(),E()}))}},disabled:b,children:b?"Loading...":"Submit"})]}),(0,d.jsx)(n.Yl,{className:"mb-4 mb-lg-0",children:(0,d.jsx)(n.H7,{className:"p-0",children:(0,d.jsxs)(n.d8,{flush:"true",classNa:!0,me:"rounded-3",children:[(0,d.jsxs)(n.FQ,{className:"d-flex justify-content-between align-items-center p-3 fs-5",ref:s,style:{backgroundColor:"#FA8247"},children:[(0,d.jsx)(n.Pp,{className:"counter-value fw-bold fs-3",children:P}),(0,d.jsx)(n.Pp,{children:"Total Tickets Assigned"})]}),(0,d.jsxs)(n.FQ,{className:"d-flex justify-content-between align-items-center p-3 fs-5",ref:t,style:{backgroundColor:"#83F28F"},children:[(0,d.jsx)(n.Pp,{className:"counter-value fw-bold fs-3",children:k}),(0,d.jsx)(n.Pp,{children:"Tickets Resolved"})]})]})})})]}),(0,d.jsxs)(n.TK,{lg:"8",children:[console.log("userDetails:",r),console.log("firstName:",null===r||void 0===r?void 0:r.profilePicturePath),r?(0,d.jsx)(n.Yl,{className:"mb-4",children:(0,d.jsxs)(n.H7,{children:[(0,d.jsxs)(n.uZ,{children:[(0,d.jsx)(n.TK,{sm:"3",children:(0,d.jsx)(n.Pp,{children:"Full Name"})}),(0,d.jsx)(n.TK,{sm:"9",children:(0,d.jsx)(n.Pp,{className:"text-muted",children:"".concat(r.firstName," ").concat(r.lastName)||"N/A"})})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)(n.uZ,{children:[(0,d.jsx)(n.TK,{sm:"3",children:(0,d.jsx)(n.Pp,{children:"Email"})}),(0,d.jsx)(n.TK,{sm:"9",children:(0,d.jsx)(n.Pp,{className:"text-muted",children:r.email||"N/A"})})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)(n.uZ,{children:[(0,d.jsx)(n.TK,{sm:"3",children:(0,d.jsx)(n.Pp,{children:"Designation"})}),(0,d.jsx)(n.TK,{sm:"9",children:(0,d.jsx)(n.Pp,{className:"text-muted",children:r.role||"N/A"})})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)(n.uZ,{children:[(0,d.jsx)(n.TK,{sm:"3",children:(0,d.jsx)(n.Pp,{children:"Department"})}),(0,d.jsx)(n.TK,{sm:"9",children:(0,d.jsx)(n.Pp,{className:"text-muted",children:r.departmentName||"N/A"})})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)(n.uZ,{children:[(0,d.jsx)(n.TK,{sm:"3",children:(0,d.jsx)(n.Pp,{children:"Mobile"})}),(0,d.jsx)(n.TK,{sm:"9",children:(0,d.jsx)(n.Pp,{className:"text-muted",children:r.mobileNo||"N/A"})})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)(n.uZ,{children:[(0,d.jsx)(n.TK,{sm:"3",children:(0,d.jsx)(n.Pp,{children:"Address"})}),(0,d.jsx)(n.TK,{sm:"9",children:(0,d.jsx)(n.Pp,{className:"text-muted",children:r.address||"N/A"})})]})]})}):(0,d.jsx)("p",{children:"Loading..."})]})]})})})}}}]);
//# sourceMappingURL=3517.84a54656.chunk.js.map