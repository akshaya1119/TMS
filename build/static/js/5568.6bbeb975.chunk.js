"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5568],{85568:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ye});var r=n(72791),a=n(47022),s=n(89743),l=n(2677),c=n(29795),o=n(52007),i=n.n(o),d=n(83722),u=n(89181),m=n(90165),p=n(78633),h=n(25666),x=n(80184);const v=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j=["activeKey","getControlledId","getControllerId"],y=["as"];function f(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function b(e){let{active:t,eventKey:n,mountOnEnter:a,transition:s,unmountOnExit:l,role:c="tabpanel",onEnter:o,onEntering:i,onEntered:d,onExit:u,onExiting:h,onExited:x}=e,y=f(e,v);const b=(0,r.useContext)(m.Z);if(!b)return[Object.assign({},y,{role:c}),{eventKey:n,isActive:t,mountOnEnter:a,transition:s,unmountOnExit:l,onEnter:o,onEntering:i,onEntered:d,onExit:u,onExiting:h,onExited:x}];const{activeKey:N,getControlledId:E,getControllerId:g}=b,w=f(b,j),Z=(0,p.h)(n);return[Object.assign({},y,{role:c,id:E(n),"aria-labelledby":g(n)}),{eventKey:n,isActive:null==t&&null!=Z?(0,p.h)(N)===Z:t,transition:s||w.transition,mountOnEnter:null!=a?a:w.mountOnEnter,unmountOnExit:null!=l?l:w.unmountOnExit,onEnter:o,onEntering:i,onEntered:d,onExit:u,onExiting:h,onExited:x}]}const N=r.forwardRef(((e,t)=>{let{as:n="div"}=e,r=f(e,y);const[a,{isActive:s,onEnter:l,onEntering:c,onEntered:o,onExit:i,onExiting:d,onExited:u,mountOnEnter:v,unmountOnExit:j,transition:N=h.Z}]=b(r);return(0,x.jsx)(m.Z.Provider,{value:null,children:(0,x.jsx)(p.Z.Provider,{value:null,children:(0,x.jsx)(N,{in:s,onEnter:l,onEntering:c,onEntered:o,onExit:i,onExiting:d,onExited:u,mountOnEnter:v,unmountOnExit:j,children:(0,x.jsx)(n,Object.assign({},a,{ref:t,hidden:!s,"aria-hidden":!s}))})})})}));N.displayName="TabPanel";const E=e=>{const{id:t,generateChildId:n,onSelect:a,activeKey:s,defaultActiveKey:l,transition:c,mountOnEnter:o,unmountOnExit:i,children:h}=e,[v,j]=(0,d.$c)(s,l,a),y=(0,u.gP)(t),f=(0,r.useMemo)((()=>n||((e,t)=>y?"".concat(y,"-").concat(t,"-").concat(e):null)),[y,n]),b=(0,r.useMemo)((()=>({onSelect:j,activeKey:v,transition:c,mountOnEnter:o||!1,unmountOnExit:i||!1,getControlledId:e=>f(e,"tabpane"),getControllerId:e=>f(e,"tab")})),[j,v,c,o,i,f]);return(0,x.jsx)(m.Z.Provider,{value:b,children:(0,x.jsx)(p.Z.Provider,{value:j||null,children:h})})};E.Panel=N;const g=E;var w=n(72709);function Z(e){return"boolean"===typeof e?e?w.Z:h.Z:e}const C=e=>{let{transition:t,...n}=e;return(0,x.jsx)(g,{...n,transition:Z(t)})};C.displayName="TabContainer";const T=C;var S=n(81694),k=n.n(S),O=n(10162);const P=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...s}=e;return r=(0,O.vE)(r,"tab-content"),(0,x.jsx)(a,{ref:t,className:k()(n,r),...s})}));P.displayName="TabContent";const R=P,I=r.forwardRef(((e,t)=>{let{bsPrefix:n,transition:r,...a}=e;const[{className:s,as:l="div",...c},{isActive:o,onEnter:i,onEntering:d,onEntered:u,onExit:h,onExiting:v,onExited:j,mountOnEnter:y,unmountOnExit:f,transition:N=w.Z}]=b({...a,transition:Z(r)}),E=(0,O.vE)(n,"tab-pane");return(0,x.jsx)(m.Z.Provider,{value:null,children:(0,x.jsx)(p.Z.Provider,{value:null,children:(0,x.jsx)(N,{in:o,onEnter:i,onEntering:d,onEntered:u,onExit:h,onExiting:v,onExited:j,mountOnEnter:y,unmountOnExit:f,children:(0,x.jsx)(l,{...c,ref:t,className:k()(s,E,o&&"active")})})})})}));I.displayName="TabPane";const K=I,A={eventKey:i().oneOfType([i().string,i().number]),title:i().node.isRequired,disabled:i().bool,tabClassName:i().string,tabAttrs:i().object},D=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};D.propTypes=A;const _=Object.assign(D,{Container:T,Content:R,Pane:K});var L=n(43360),q=n(62591),z=n(55294),M=n(36704);const F=e=>{let{departments:t,handleEdit:n,handleEditSubmit:r,newDepartment:a,setNewDepartment:s,editItem:l,searchQuery:o}=e;return(0,x.jsx)("div",{className:"container py-5",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-7 mx-auto bg-white rounded shadow",children:(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"table-header mt-3",children:[(0,x.jsx)("th",{scope:"col",className:"col-3",children:"SNo."}),(0,x.jsx)("th",{scope:"col",className:"col-6",children:"Department"}),(0,x.jsx)("th",{scope:"col",className:"col-3",children:"Actions"})]})}),(0,x.jsx)("tbody",{children:t.filter((e=>{var t;return null===(t=e.departmentName)||void 0===t?void 0:t.toLowerCase().includes(o.toLowerCase())})).map((e=>(0,x.jsxs)("tr",{className:"table-row mt-1",children:[(0,x.jsx)("td",{className:"col col-3","data-label":"S.No",children:e.id}),(0,x.jsx)("td",{className:"col col-6","data-label":"Department",children:e.departmentName}),(0,x.jsx)("td",{className:"col col-3","data-label":"Actions",children:l&&l.id===e.id?(0,x.jsxs)(c.Z,{onSubmit:t=>r(t,e.id,a),children:[(0,x.jsx)("input",{className:"form-control",type:"text",value:a||e.departmentName,onChange:e=>s(e.target.value)}),(0,x.jsx)(L.Z,{type:"submit",variant:"success",size:"sm",children:"Save"})]}):(0,x.jsx)(L.Z,{variant:"outline-primary",size:"sm",onClick:()=>n(e),children:(0,x.jsx)("i",{className:"fa-solid fa-pencil"})})})]},e.id)))})]})})})})})};var B=n(17858);const V=e=>{let{newDepartment:t,setNewDepartment:n,handleCreateDepartment:r,openCreateDepartment:a}=e;return(0,x.jsx)(B.Z,{in:a,children:(0,x.jsx)("div",{id:"create-department-collapse",children:(0,x.jsx)("div",{className:"mt-3",children:(0,x.jsxs)("div",{className:"glassmorphism-card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("div",{className:"text-header fw-bold fs-3",style:{color:"#5856d6"},children:"Create Department"})}),(0,x.jsx)("div",{className:"card-body ",children:(0,x.jsxs)(c.Z,{onSubmit:r,children:[(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{htmlFor:"department",children:"Enter New Department:"}),(0,x.jsx)("input",{required:"",className:"form-control",name:"department",id:"department",type:"text",value:t,onChange:e=>n(e.target.value)})]}),(0,x.jsx)(L.Z,{type:"submit",className:"btn",children:"Submit"})]})})]})})})})},Q=e=>{let{roles:t,handleEdit:n,handleEditSubmitRole:r,newRoles:a,setNewRoles:s,editItem:l,searchQuery:o}=e;return(0,x.jsx)("div",{className:"container py-5",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-7 mx-auto bg-white rounded shadow",children:(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"table-header mt-3",children:[(0,x.jsx)("th",{scope:"col",className:"col-3",children:"S.No"}),(0,x.jsx)("th",{scope:"col",className:"col-6",children:"Roles"}),(0,x.jsx)("th",{scope:"col",className:"col-3",children:"Actions"})]})}),(0,x.jsx)("tbody",{children:t.filter((e=>{var t;return null===(t=e.role)||void 0===t?void 0:t.toLowerCase().includes(o.toLowerCase())})).map((e=>(0,x.jsxs)("tr",{className:"table-row mt-1",children:[(0,x.jsx)("td",{className:"col col-3","data-label":"SNo.",children:e.roleId}),(0,x.jsx)("td",{className:"col col-6","data-label":"Roles",children:e.role}),(0,x.jsx)("td",{className:"col col-3","data-label":"Actions",children:l&&l.roleId===e.roleId?(0,x.jsxs)(c.Z,{onSubmit:t=>r(t,e.roleId,a),children:[(0,x.jsx)("input",{className:"form-control",type:"text",value:a||e.role,onChange:e=>s(e.target.value)}),(0,x.jsx)(L.Z,{type:"submit",variant:"success",size:"sm",children:"Save"})]}):(0,x.jsx)(L.Z,{variant:"outline-primary",size:"sm",onClick:()=>n(e),children:(0,x.jsx)("i",{className:"fa-solid fa-pencil"})})})]},e.roleId)))})]})})})})})},U=e=>{let{newRoles:t,setNewRoles:n,handleCreateRole:r,openCreateRole:a}=e;return(0,x.jsx)(B.Z,{in:a,children:(0,x.jsx)("div",{id:"create-department-collapse",children:(0,x.jsxs)("div",{className:"mt-3",children:[" ",(0,x.jsxs)("div",{className:"glassmorphism-card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("div",{className:"text-header fw-bold fs-3",style:{color:"#5856d6"},children:"Create Role"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)(c.Z,{onSubmit:r,children:[(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{htmlFor:"role",children:"Enter New Role:"}),(0,x.jsx)("input",{required:"",className:"form-control",name:"role",id:"role",type:"text",value:t,onChange:e=>n(e.target.value)})]}),(0,x.jsx)(L.Z,{type:"submit",className:"btn",children:"Submit"})]})})]})]})})})},W=e=>{let{newTicketType:t,setNewTicketType:n,handleCreateTicketType:r,openTicketType:a}=e;return(0,x.jsx)(B.Z,{in:a,children:(0,x.jsx)("div",{id:"create-TicketType-collapse",children:(0,x.jsxs)("div",{className:"mt-3",children:[" ",(0,x.jsxs)("div",{className:"glassmorphism-card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("div",{className:"text-header fw-bold fs-3",style:{color:"#5856d6"},children:"Create TicketType"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)(c.Z,{onSubmit:r,children:[(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{htmlFor:"TicketType",children:"Enter New TicketType:"}),(0,x.jsx)("input",{required:"",className:"form-control",name:"TicketType",id:"TicketType",type:"text",value:t,onChange:e=>n(e.target.value)})]}),(0,x.jsx)(L.Z,{type:"submit",className:"btn",children:"Submit"})]})})]})]})})})},$=e=>{let{newProject:t,setNewProject:n,handleCreateProjectType:r,openProject:a}=e;return(0,x.jsx)(B.Z,{in:a,children:(0,x.jsx)("div",{id:"create-Project-collapse",children:(0,x.jsxs)("div",{className:"mt-3",children:[" ",(0,x.jsxs)("div",{className:"glassmorphism-card",children:[(0,x.jsx)("div",{className:"card-header",children:(0,x.jsx)("div",{className:"text-header fw-bold fs-3",style:{color:"#5856d6"},children:"Create Project"})}),(0,x.jsx)("div",{className:"card-body",children:(0,x.jsxs)(c.Z,{onSubmit:r,children:[(0,x.jsxs)("div",{className:"form-group",children:[(0,x.jsx)("label",{htmlFor:"project",children:"Enter New Project:"}),(0,x.jsx)("input",{required:"",className:"form-control",name:"project",id:"project",type:"text",value:t,onChange:e=>n(e.target.value)})]}),(0,x.jsx)(L.Z,{type:"submit",className:"btn",children:"Submit"})]})})]})]})})})},H=e=>{let{project:t,newProject:n,setNewProject:r,handleEdit:a,handleEditSubmitProject:s,editItem:l,searchQuery:o}=e;return(0,x.jsx)("div",{className:"container py-5",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-7 mx-auto bg-white rounded shadow",children:(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table ",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"table-header mt-3",children:[(0,x.jsx)("th",{scope:"col",className:"col-3",children:"S.No"}),(0,x.jsx)("th",{scope:"col",className:"col-6",children:"Project Type"}),(0,x.jsx)("th",{scope:"col",className:"col-3",children:"Actions"})]})}),(0,x.jsx)("tbody",{children:t.filter((e=>{var t;return null===(t=e.projectTypes)||void 0===t?void 0:t.toLowerCase().includes(o.toLowerCase())})).map((e=>(0,x.jsxs)("tr",{className:"table-row mt-1",children:[(0,x.jsx)("td",{className:"col col-3","data-label":"SNo.",children:e.id}),(0,x.jsx)("td",{className:"col col-6","data-label":"Project",children:e.projectTypes}),(0,x.jsx)("td",{className:"col col-3","data-label":"Actions",children:l&&l.id===e.id?(0,x.jsxs)(c.Z,{onSubmit:t=>s(t,e.id,n),children:[(0,x.jsx)("input",{className:"form-control",type:"text",value:n||e.projectTypes,onChange:e=>r(e.target.value)}),(0,x.jsx)(L.Z,{type:"submit",variant:"success",size:"sm",children:"Save"})]}):(0,x.jsx)(L.Z,{variant:"outline-primary",size:"sm",onClick:()=>a(e),children:(0,x.jsx)("i",{className:"fa-solid fa-pencil"})})})]},e.id)))})]})})})})})},Y=e=>{let{ticketType:t,handleEdit:n,handleEditSubmitTicketType:r,newTicketType:a,setNewTicketType:s,editItem:l,searchQuery:o}=e;return(0,x.jsx)("div",{className:"container py-5",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-7 mx-auto bg-white rounded shadow",children:(0,x.jsx)("div",{className:"table-responsive",children:(0,x.jsxs)("table",{className:"table ",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"table-header mt-3",children:[(0,x.jsx)("th",{scope:"col",className:"col-3",children:"S.No"}),(0,x.jsx)("th",{scope:"col",className:"col-6",children:"Ticket Type"}),(0,x.jsx)("th",{scope:"col",className:"col-3",children:"Actions"})]})}),(0,x.jsx)("tbody",{children:t.filter((e=>{var t;return null===(t=e.ticketType)||void 0===t?void 0:t.toLowerCase().includes(o.toLowerCase())})).map((e=>(0,x.jsxs)("tr",{className:"table-row mt-1",children:[(0,x.jsx)("td",{className:"col col-3","data-label":"SNo.",children:e.id}),(0,x.jsx)("td",{className:"col col-6","data-label":"TicketType",children:e.ticketType}),(0,x.jsx)("td",{className:"col col-3","data-label":"Actions",children:l&&l.id===e.id?(0,x.jsxs)(c.Z,{onSubmit:t=>r(t,e.id,a),children:[(0,x.jsx)("input",{className:"form-control",type:"text",value:a||e.ticketType,onChange:e=>s(e.target.value)}),(0,x.jsx)(L.Z,{type:"submit",variant:"success",size:"sm",children:"Save"})]}):(0,x.jsx)(L.Z,{variant:"outline-primary",size:"sm",onClick:()=>n(e),children:(0,x.jsx)("i",{className:"fa-solid fa-pencil"})})})]},e.id)))})]})})})})})};var G=n(80239),J=(n(33573),n(41337)),X=n(5715),ee=n(96040);const te=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...s}=e;return r=(0,O.vE)(r,"nav-item"),(0,x.jsx)(a,{ref:t,className:k()(n,r),...s})}));te.displayName="NavItem";const ne=te;var re=n(16445),ae=n(24787);const se=r.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:a=re.Z,active:s,eventKey:l,disabled:c=!1,...o}=e;n=(0,O.vE)(n,"nav-link");const[i,d]=(0,ae.v)({key:(0,p.h)(l,o.href),active:s,disabled:c,...o});return(0,x.jsx)(a,{...o,...i,ref:t,disabled:c,className:k()(r,n,c&&"disabled",d.isActive&&"active")})}));se.displayName="NavLink";const le=se,ce=r.forwardRef(((e,t)=>{const{as:n="div",bsPrefix:a,variant:s,fill:l=!1,justify:c=!1,navbar:o,navbarScroll:i,className:d,activeKey:u,...m}=(0,G.Ch)(e,{activeKey:"onSelect"}),p=(0,O.vE)(a,"nav");let h,v,j=!1;const y=(0,r.useContext)(X.Z),f=(0,r.useContext)(ee.Z);return y?(h=y.bsPrefix,j=null==o||o):f&&({cardHeaderBsPrefix:v}=f),(0,x.jsx)(J.Z,{as:n,ref:t,activeKey:u,className:k()(d,{[p]:!j,["".concat(h,"-nav")]:j,["".concat(h,"-nav-scroll")]:j&&i,["".concat(v,"-").concat(s)]:!!v,["".concat(p,"-").concat(s)]:!!s,["".concat(p,"-fill")]:l,["".concat(p,"-justified")]:c}),...m})}));ce.displayName="Nav";const oe=Object.assign(ce,{Item:ne,Link:le});var ie=n(11701);function de(e){let t;return(0,ie.Ed)(e,(e=>{null==t&&(t=e.props.eventKey)})),t}function ue(e){const{title:t,eventKey:n,disabled:r,tabClassName:a,tabAttrs:s,id:l}=e.props;return null==t?null:(0,x.jsx)(ne,{as:"li",role:"presentation",children:(0,x.jsx)(le,{as:"button",type:"button",eventKey:n,disabled:r,id:l,className:a,...s,children:t})})}const me=e=>{const{id:t,onSelect:n,transition:r,mountOnEnter:a=!1,unmountOnExit:s=!1,variant:l="tabs",children:c,activeKey:o=de(c),...i}=(0,G.Ch)(e,{activeKey:"onSelect"});return(0,x.jsxs)(g,{id:t,activeKey:o,onSelect:n,transition:Z(r),mountOnEnter:a,unmountOnExit:s,children:[(0,x.jsx)(oe,{...i,role:"tablist",as:"ul",variant:l,children:(0,ie.UI)(c,ue)}),(0,x.jsx)(R,{children:(0,ie.UI)(c,(e=>{const t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,x.jsx)(K,{...t})}))})]})};me.displayName="Tabs";const pe=me,he="http://api1.chandrakala.co.in/api/Departments",xe="http://api1.chandrakala.co.in/api/Roles",ve="http://api1.chandrakala.co.in/api/TicketTypes",je="http://api1.chandrakala.co.in/api/ProjectType",ye=()=>{const[e,t]=(0,r.useState)("departments"),[n,o]=(0,r.useState)([]),[i,d]=(0,r.useState)(""),[u,m]=(0,r.useState)(!1),[p,h]=(0,r.useState)([]),[v,j]=(0,r.useState)(""),[y,f]=(0,r.useState)(!1),[b,N]=(0,r.useState)([]),[E,g]=(0,r.useState)(""),[w,Z]=(0,r.useState)(!1),[C,T]=(0,r.useState)([]),[S,k]=(0,r.useState)(""),[O,P]=(0,r.useState)(!1),[R,I]=(0,r.useState)(""),[K,A]=(0,r.useState)(null),[D,B]=(0,r.useState)("");(0,r.useEffect)((()=>{(async()=>{try{const e=await z.Z.get(he);o(e.data)}catch(e){console.error("Error fetching departments:",e)}})()}),[]),(0,r.useEffect)((()=>{(async()=>{try{const e=await z.Z.get(xe);h(e.data)}catch(e){console.error("Error fetching roles:",e)}})()}),[]);const G=e=>{I(e.target.value)},J=e=>{console.log("Edit item:",e),A(e)},X=async(e,t,n)=>{if(e.preventDefault(),""!==n&&null!==n&&void 0!==n)try{await z.Z.put("".concat(he,"/").concat(t),{id:t,departmentName:n}),o((e=>e.map((e=>e.id===t?{...e,departmentName:n}:e))))}catch(r){console.error("Error updating item:",r)}A(null),d("")},ee=async(e,t,n)=>{e.preventDefault();try{await z.Z.put("".concat(xe,"/").concat(t),{roleId:t,role:n}),h((e=>e.map((e=>e.roleId===t?{...e,role:n}:e)))),A(null),j("")}catch(r){console.error("Error updating role:",r)}},te=async(e,t,n)=>{e.preventDefault();try{await z.Z.put("".concat(ve,"/").concat(t),{id:t,ticketType:n}),T((e=>e.map((e=>e.id===t?{...e,ticketType:n}:e)))),A(null),k("")}catch(r){console.error("Error updating ticket type:",r)}},ne=async(e,t,n)=>{e.preventDefault();try{await z.Z.put("".concat(je,"/").concat(t),{id:t,projectTypes:n}),N((e=>e.map((e=>e.id===t?{...e,projectTypes:n}:e)))),A(null),g("")}catch(r){console.error("Error updating project:",r)}};(0,r.useEffect)((()=>{(async()=>{try{const e=await z.Z.get(je);N(e.data)}catch(e){console.error("Error fetching projects:",e)}})()}),[]),(0,r.useEffect)((()=>{(async()=>{try{const e=await z.Z.get(ve);T(e.data)}catch(e){console.error("Error fetching ticket types:",e)}})()}),[]);const re=async e=>{if(e.preventDefault(),""!==i.trim()){if(n.some((e=>e.departmentName===i)))return void B("Department name must be unique.");try{const e=await z.Z.post(he,{departmentName:i});o([...n,e.data]),d("")}catch(t){console.error("Error creating department:",t)}}},ae=async e=>{if(e.preventDefault(),""!==v.trim()){if(p.some((e=>e.role===v)))return void B("Role must be unique.");try{const e=await z.Z.post(xe,{role:v});h([...p,e.data]),j("")}catch(t){console.error("Error creating Role:",t)}}},se=async e=>{if(e.preventDefault(),""!==E.trim()){if(b.some((e=>e.projectTypes===E)))return void B("Project name must be unique.");try{const e=await z.Z.post(je,{projectTypes:E});N([...b,e.data]),g("")}catch(t){console.error("Error creating Project Name:",t)}}},le=async e=>{if(e.preventDefault(),""!==S.trim()){if(C.some((e=>e.ticketType===S)))return void B("Ticket Type must be unique.");try{const e=await z.Z.post(ve,{ticketType:S});T([...C,e.data]),k("")}catch(t){console.error("Error creating Ticket Type:",t)}}};return(0,x.jsx)(M.Z,{children:r=>{let{hasPermission:o}=r;return(0,x.jsx)(a.Z,{children:(0,x.jsx)(s.Z,{children:(0,x.jsxs)(l.Z,{md:12,children:[(0,x.jsxs)("div",{className:"row mb-3 justify-content-between display flex",children:[(0,x.jsx)("h4",{className:"col-sm-3",children:"Categories"}),(0,x.jsx)(c.Z,{className:"col-sm-3",children:(0,x.jsx)(c.Z.Control,{type:"text",placeholder:"Search",value:R,onChange:G})})]}),(0,x.jsx)("div",{className:"col-md-6",children:(0,x.jsxs)(pe,{defaultActiveKey:"departments",id:"tab-example",className:"mb-3",onSelect:e=>t(e),justify:!0,children:[o(3,"canViewOnly")&&(0,x.jsx)(_,{eventKey:"departments",title:"Departments"}),o(4,"canViewOnly")&&(0,x.jsx)(_,{eventKey:"roles",title:"Roles"}),o(5,"canViewOnly")&&(0,x.jsx)(_,{eventKey:"ticketType",title:"Ticket Types"}),o(6,"canViewOnly")&&(0,x.jsx)(_,{eventKey:"project",title:"Projects"})]})}),(0,x.jsxs)(a.Z,{children:["departments"===e&&(0,x.jsxs)(s.Z,{children:[o(3,"canViewOnly")&&(0,x.jsx)(l.Z,{md:6,children:(0,x.jsx)(F,{departments:n,handleEdit:J,handleEditSubmit:X,newDepartment:i,setNewDepartment:d,editItem:K,searchQuery:R})}),o(3,"canAddOnly")&&(0,x.jsxs)(l.Z,{md:6,className:"position-relative",children:[(0,x.jsx)(L.Z,{onClick:()=>m(!u),"aria-controls":"create-department-collapse","aria-expanded":u,className:"mb-3 position-absolute top-0 end-0",children:"Create"}),(0,x.jsx)(V,{newDepartment:i,setNewDepartment:d,handleCreateDepartment:re,openCreateDepartment:u})]})]}),"roles"===e&&(0,x.jsxs)(s.Z,{children:[o(4,"canViewOnly")&&(0,x.jsx)(l.Z,{md:6,children:(0,x.jsx)(Q,{roles:p,handleEdit:J,handleEditSubmitRole:ee,newRoles:v,setNewRoles:j,editItem:K,searchQuery:R})}),o(4,"canAddOnly")&&(0,x.jsxs)(l.Z,{md:6,className:"position-relative",children:[(0,x.jsx)(L.Z,{onClick:()=>f(!y),"aria-controls":"create-role-collapse","aria-expanded":y,className:"mb-3 position-absolute top-0 end-0",children:"Create"}),(0,x.jsx)(U,{newRoles:v,setNewRoles:j,handleCreateRole:ae,openCreateRole:y})]})]}),"ticketType"===e&&(0,x.jsxs)(s.Z,{children:[o(5,"canViewOnly")&&(0,x.jsx)(l.Z,{md:6,children:(0,x.jsx)(Y,{ticketType:C,handleEdit:J,handleEditSubmitTicketType:te,newTicketType:S,setNewTicketType:k,editItem:K,searchQuery:R})}),o(5,"canAddOnly")&&(0,x.jsxs)(l.Z,{md:6,className:"position-relative",children:[(0,x.jsx)(L.Z,{onClick:()=>P(!O),"aria-controls":"create-tickettype-collapse","aria-expanded":O,className:"mb-3 position-absolute top-0 end-0",children:"Create"}),(0,x.jsx)(W,{newTicketType:S,setNewTicketType:k,handleCreateTicketType:le,openTicketType:O})]})]}),"project"===e&&(0,x.jsxs)(s.Z,{children:[o(6,"canViewOnly")&&(0,x.jsx)(l.Z,{md:6,children:(0,x.jsx)(H,{project:b,handleEdit:J,handleEditSubmitProject:ne,newProject:E,setNewProject:g,editItem:K,searchQuery:R})}),o(6,"canAddOnly")&&(0,x.jsxs)(l.Z,{md:6,className:"position-relative",children:[(0,x.jsx)(L.Z,{onClick:()=>Z(!w),"aria-controls":"create-role-collapse","aria-expanded":w,className:"mb-3 position-absolute top-0 end-0",children:"Create"}),(0,x.jsx)($,{newProject:E,setNewProject:g,handleCreateProjectType:se,openProject:w})]})]})]}),(0,x.jsxs)(_.Content,{children:[(0,x.jsx)(_.Pane,{eventKey:"departments",children:(0,x.jsx)(q.Z,{responsive:!0,hover:!0,bordered:!0,striped:!0})}),(0,x.jsx)(_.Pane,{eventKey:"roles",children:(0,x.jsx)(q.Z,{responsive:!0,hover:!0,bordered:!0,striped:!0})}),(0,x.jsx)(_.Pane,{eventKey:"ticketType",children:(0,x.jsx)(q.Z,{responsive:!0,hover:!0,bordered:!0,striped:!0})}),(0,x.jsx)(_.Pane,{eventKey:"project",children:(0,x.jsx)(q.Z,{responsive:!0,hover:!0,bordered:!0,striped:!0})})]})]})})})}})}},53649:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(72791);function a(){const[,e]=(0,r.useReducer)((e=>!e),!1);return e}},71306:(e,t,n)=>{n.d(t,{$F:()=>l,PB:()=>s});const r="data-rr-ui-",a="rrUi";function s(e){return"".concat(r).concat(e)}function l(e){return"".concat(a).concat(e)}},41337:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(13808),a=n(72791),s=n(53649),l=n(73201),c=n(74784),o=n(78633),i=n(90165),d=n(71306),u=n(24787),m=n(80184);const p=["as","onSelect","activeKey","role","onKeyDown"];const h=()=>{},x=(0,d.PB)("event-key"),v=a.forwardRef(((e,t)=>{let{as:n="div",onSelect:u,activeKey:v,role:j,onKeyDown:y}=e,f=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,p);const b=(0,s.Z)(),N=(0,a.useRef)(!1),E=(0,a.useContext)(o.Z),g=(0,a.useContext)(i.Z);let w,Z;g&&(j=j||"tablist",v=g.activeKey,w=g.getControlledId,Z=g.getControllerId);const C=(0,a.useRef)(null),T=e=>{const t=C.current;if(!t)return null;const n=(0,r.Z)(t,"[".concat(x,"]:not([aria-disabled=true])")),a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const s=n.indexOf(a);if(-1===s)return null;let l=s+e;return l>=n.length&&(l=0),l<0&&(l=n.length-1),n[l]},S=(e,t)=>{null!=e&&(null==u||u(e,t),null==E||E(e,t))};(0,a.useEffect)((()=>{if(C.current&&N.current){const e=C.current.querySelector("[".concat(x,"][aria-selected=true]"));null==e||e.focus()}N.current=!1}));const k=(0,l.Z)(t,C);return(0,m.jsx)(o.Z.Provider,{value:S,children:(0,m.jsx)(c.Z.Provider,{value:{role:j,activeKey:(0,o.h)(v),getControlledId:w||h,getControllerId:Z||h},children:(0,m.jsx)(n,Object.assign({},f,{onKeyDown:e=>{if(null==y||y(e),!g)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=T(-1);break;case"ArrowRight":case"ArrowDown":t=T(1);break;default:return}t&&(e.preventDefault(),S(t.dataset[(0,d.$F)("EventKey")]||null,e),N.current=!0,b())},ref:k,role:j}))})})}));v.displayName="Nav";const j=Object.assign(v,{Item:u.Z})},74784:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n(72791).createContext(null);r.displayName="NavContext";const a=r},24787:(e,t,n)=>{n.d(t,{Z:()=>h,v:()=>m});var r=n(72791),a=n(39007),s=n(74784),l=n(78633),c=n(15341),o=n(71306),i=n(90165),d=n(80184);const u=["as","active","eventKey"];function m(e){let{key:t,onClick:n,active:c,id:d,role:u,disabled:m}=e;const p=(0,r.useContext)(l.Z),h=(0,r.useContext)(s.Z),x=(0,r.useContext)(i.Z);let v=c;const j={role:u};if(h){u||"tablist"!==h.role||(j.role="tab");const e=h.getControllerId(null!=t?t:null),n=h.getControlledId(null!=t?t:null);j[(0,o.PB)("event-key")]=t,j.id=e||d,v=null==c&&null!=t?h.activeKey===t:c,!v&&(null!=x&&x.unmountOnExit||null!=x&&x.mountOnEnter)||(j["aria-controls"]=n)}return"tab"===j.role&&(j["aria-selected"]=v,v||(j.tabIndex=-1),m&&(j.tabIndex=-1,j["aria-disabled"]=!0)),j.onClick=(0,a.Z)((e=>{m||(null==n||n(e),null!=t&&p&&!e.isPropagationStopped()&&p(t,e))})),[j,{isActive:v}]}const p=r.forwardRef(((e,t)=>{let{as:n=c.ZP,active:r,eventKey:a}=e,s=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,u);const[i,p]=m(Object.assign({key:(0,l.h)(a,s.href),active:r},s));return i[(0,o.PB)("active")]=p.isActive,(0,d.jsx)(n,Object.assign({},s,i,{ref:t}))}));p.displayName="NavItem";const h=p},25666:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(39007),a=n(73201),s=n(72791);const l=function(e){let{children:t,in:n,onExited:l,mountOnEnter:c,unmountOnExit:o}=e;const i=(0,s.useRef)(null),d=(0,s.useRef)(n),u=(0,r.Z)(l);(0,s.useEffect)((()=>{n?d.current=!0:u(i.current)}),[n,u]);const m=(0,a.Z)(i,t.ref),p=(0,s.cloneElement)(t,{ref:m});return n?p:o||!d.current&&c?null:p}},78633:(e,t,n)=>{n.d(t,{Z:()=>s,h:()=>a});var r=n(72791);const a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=e?String(e):t||null},s=r.createContext(null)},90165:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(72791).createContext(null)},83722:(e,t,n)=>{n.d(t,{$c:()=>a});var r=n(72791);function a(e,t,n){const a=(0,r.useRef)(void 0!==e),[s,l]=(0,r.useState)(t),c=void 0!==e,o=a.current;return a.current=c,!c&&o&&s!==t&&l(t),[c?e:s,(0,r.useCallback)((function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];const[a,...s]=t;let c=null==n?void 0:n(a,...s);return l(a),c}),[n])]}},13808:(e,t,n)=>{n.d(t,{Z:()=>a});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},33573:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n(46054),s=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},46054:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,s,l){var c=a||"<<anonymous>>",o=l||r;if(null==n[r])return t?new Error("Required "+s+" `"+o+"` was not specified in `"+c+"`."):null;for(var i=arguments.length,d=Array(i>6?i-6:0),u=6;u<i;u++)d[u-6]=arguments[u];return e.apply(void 0,[n,r,c,s,o].concat(d))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},43360:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81694),a=n.n(r),s=n(72791),l=n(15341),c=n(10162),o=n(80184);const i=s.forwardRef(((e,t)=>{let{as:n,bsPrefix:r,variant:s="primary",size:i,active:d=!1,disabled:u=!1,className:m,...p}=e;const h=(0,c.vE)(r,"btn"),[x,{tagName:v}]=(0,l.FT)({tagName:n,disabled:u,...p}),j=v;return(0,o.jsx)(j,{...x,...p,ref:t,disabled:u,className:a()(m,h,d&&"active",s&&"".concat(h,"-").concat(s),i&&"".concat(h,"-").concat(i),p.href&&u&&"disabled")})}));i.displayName="Button";const d=i},96040:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n(72791).createContext(null);r.displayName="CardHeaderContext";const a=r},17858:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(81694),a=n.n(r),s=n(75427),l=n(72791),c=n(65090),o=n(71380);const i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>null!=e)).reduce(((e,t)=>{if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var d=n(67202),u=n(85007),m=n(80184);const p={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,t){const n=t["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],r=p[e];return n+parseInt((0,s.Z)(t,r[0]),10)+parseInt((0,s.Z)(t,r[1]),10)}const x={[c.Wj]:"collapse",[c.Ix]:"collapsing",[c.d0]:"collapsing",[c.cn]:"collapse show"},v=l.forwardRef(((e,t)=>{let{onEnter:n,onEntering:r,onEntered:s,onExit:c,onExiting:p,className:v,children:j,dimension:y="height",in:f=!1,timeout:b=300,mountOnEnter:N=!1,unmountOnExit:E=!1,appear:g=!1,getDimensionValue:w=h,...Z}=e;const C="function"===typeof y?y():y,T=(0,l.useMemo)((()=>i((e=>{e.style[C]="0"}),n)),[C,n]),S=(0,l.useMemo)((()=>i((e=>{const t="scroll".concat(C[0].toUpperCase()).concat(C.slice(1));e.style[C]="".concat(e[t],"px")}),r)),[C,r]),k=(0,l.useMemo)((()=>i((e=>{e.style[C]=null}),s)),[C,s]),O=(0,l.useMemo)((()=>i((e=>{e.style[C]="".concat(w(C,e),"px"),(0,d.Z)(e)}),c)),[c,w,C]),P=(0,l.useMemo)((()=>i((e=>{e.style[C]=null}),p)),[C,p]);return(0,m.jsx)(u.Z,{ref:t,addEndListener:o.Z,...Z,"aria-expanded":Z.role?f:null,onEnter:T,onEntering:S,onEntered:k,onExit:O,onExiting:P,childRef:j.ref,in:f,timeout:b,mountOnEnter:N,unmountOnExit:E,appear:g,children:(e,t)=>l.cloneElement(j,{...t,className:a()(v,j.props.className,x[e],"width"===C&&"collapse-horizontal")})})}))},47022:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81694),a=n.n(r),s=n(72791),l=n(10162),c=n(80184);const o=s.forwardRef(((e,t)=>{let{bsPrefix:n,fluid:r=!1,as:s="div",className:o,...i}=e;const d=(0,l.vE)(n,"container"),u="string"===typeof r?"-".concat(r):"-fluid";return(0,c.jsx)(s,{ref:t,...i,className:a()(o,r?"".concat(d).concat(u):d)})}));o.displayName="Container";const i=o},5715:(e,t,n)=>{n.d(t,{Z:()=>a});const r=n(72791).createContext(null);r.displayName="NavbarContext";const a=r},62591:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(81694),a=n.n(r),s=n(72791),l=n(10162),c=n(80184);const o=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,striped:s,bordered:o,borderless:i,hover:d,size:u,variant:m,responsive:p,...h}=e;const x=(0,l.vE)(n,"table"),v=a()(r,x,m&&"".concat(x,"-").concat(m),u&&"".concat(x,"-").concat(u),s&&"".concat(x,"-").concat("string"===typeof s?"striped-".concat(s):"striped"),o&&"".concat(x,"-bordered"),i&&"".concat(x,"-borderless"),d&&"".concat(x,"-hover")),j=(0,c.jsx)("table",{...h,className:v,ref:t});if(p){let e="".concat(x,"-responsive");return"string"===typeof p&&(e="".concat(e,"-").concat(p)),(0,c.jsx)("div",{className:e,children:j})}return j}))},89181:(e,t,n)=>{n.d(t,{gP:()=>d});var r=n(72791);const a={prefix:String(Math.round(1e10*Math.random())),current:0},s=r.createContext(a),l=r.createContext(!1);let c=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),o=new WeakMap;function i(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useContext)(s),n=(0,r.useRef)(null);if(null===n.current&&!e){var a,l;let e=null===(l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===l||null===(a=l.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let n=o.get(e);null==n?o.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,o.delete(e))}n.current=++t.current}return n.current}const d="function"===typeof r.useId?function(e){let t=r.useId(),[n]=(0,r.useState)("function"===typeof r.useSyncExternalStore?r.useSyncExternalStore(p,u,m):(0,r.useContext)(l)),s=n?"react-aria":"react-aria".concat(a.prefix);return e||"".concat(s,"-").concat(t)}:function(e){let t=(0,r.useContext)(s);t!==a||c||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=i(!!e),l="react-aria".concat(t.prefix);return e||"".concat(l,"-").concat(n)};function u(){return!1}function m(){return!0}function p(e){return()=>{}}}}]);
//# sourceMappingURL=5568.6bbeb975.chunk.js.map