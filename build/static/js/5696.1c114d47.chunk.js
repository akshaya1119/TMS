(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[5696],{24220:(e,t,a)=>{"use strict";a.d(t,{R:()=>r});var s=a(72791),i=a(89704),n=a.n(i);const l={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_ARCHIEVED:"http://api1.chandrakala.co.in/api/Tickets/ArchivedByUser",REACT_APP_API_CHANGE_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ChangePassword",REACT_APP_API_DEPARTMENTS:"http://api1.chandrakala.co.in/api/Departments",REACT_APP_API_DESIGNATION:"http://api1.chandrakala.co.in/api/Designation",REACT_APP_API_FORGOT_PASSWORD:"http://api1.chandrakala.co.in/api/Login/ForgetPassword",REACT_APP_API_LOGIN:"http://api1.chandrakala.co.in/api/Login",REACT_APP_API_MODULE:"http://api1.chandrakala.co.in/api/Modules",REACT_APP_API_PERMISSION:"http://api1.chandrakala.co.in/api/Permission",REACT_APP_API_PROJECTTYPE:"http://api1.chandrakala.co.in/api/ProjectType",REACT_APP_API_TICKET:"http://api1.chandrakala.co.in/api/Tickets",REACT_APP_API_TICKETFLOW:"http://api1.chandrakala.co.in/api/TicketFlow",REACT_APP_API_TICKETFLOW_BY_COMMENTS:"http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId",REACT_APP_API_TICKETTYPE:"http://api1.chandrakala.co.in/api/TicketTypes",REACT_APP_API_TICKET_COMPLETED:"http://api1.chandrakala.co.in/api/Tickets/MarkCompleted",REACT_APP_API_UPLOAD:"http://api1.chandrakala.co.in/api/Users/upload",REACT_APP_API_USERS:"http://api1.chandrakala.co.in/api/Users",REACT_APP_API_USER_BY_ID:"http://api1.chandrakala.co.in/api/Users",REACT_APP_BASE_API_URL:"http://api1.chandrakala.co.in/api",REACT_APP_BASE_URL:"http://api1.chandrakala.co.in",REACT_APP_MY_SERVER:"http://test1.chandrakala.co.in"}.REACT_APP_SECRET_KEY||"ghjsfysdg123",c=(0,s.createContext)({encrypt:e=>{console.log("Data to encrypt:",e);const t=n().AES.encrypt(e.toString(),l).toString();return console.log("Encrypted data:",t),t.replace(/\//g,";")},decrypt:e=>{if("string"!==typeof e)return e;e=e.replace(/;/g,"/");return n().AES.decrypt(e,l).toString(n().enc.Utf8)}}),r=()=>(0,s.useContext)(c)},20141:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var s=a(72791),i=a(55294),n=a(57689),l=a(43360),c=a(89743),r=a(2677),o=a(17612),d=a(29795),m=a(9806),h=a(11632),p=a(583),u=a(66770),x=a.n(u),j=(a(86009),a(24220)),g=a(80184);const T="http://api1.chandrakala.co.in",k=[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],Z=()=>{const{user:e}=(0,p.a)(),{ticketId:t}=(0,n.UO)(),{decrypt:a}=(0,j.R)(),u=a(t),[Z,P]=(0,s.useState)({ticketId:"",email:"",priority:"",title:"",department:"",ticketType:"",status:"",project:"",dueDate:"",description:"",assigneeEmail:"",userAssigneeEmail:"",userTicketType:"",userStatus:"",userPriority:"",userComment:""}),[A,_]=(0,s.useState)(!1),[y,b]=(0,s.useState)([]),[C,S]=(0,s.useState)(""),[E,v]=(0,s.useState)(null),[N,w]=(0,s.useState)(null),[f,I]=(0,s.useState)([]),[R,L]=(0,s.useState)([]),[D,F]=(0,s.useState)(null),[O,U]=(0,s.useState)(!0),[G,M]=(0,s.useState)(!1),[W,B]=(0,s.useState)(!1),[H,K]=(0,s.useState)(null),[Y,q]=(0,s.useState)(!1);(0,s.useEffect)((()=>{!async function(){try{const[e,t,a,s]=await Promise.all([i.Z.get("".concat("http://api1.chandrakala.co.in/api/Tickets","/").concat(u)),i.Z.get("".concat("http://api1.chandrakala.co.in/api/TicketFlow/CommentsByTicketId","/").concat(u)).catch((()=>({data:[]}))),i.Z.get("http://api1.chandrakala.co.in/api/Users"),i.Z.get("http://api1.chandrakala.co.in/api/TicketTypes")]);P(e.data),console.log(e.data),w(e.data),b(t.data),I(a.data),L(s.data)}catch(e){console.error("Error fetching Ticket, Comments, Assignees, and Ticket Types:",e),console.log("Error details:",e.response),console.log("Status code:",e.response.status),v("Error fetching ticket, comments, assignees, and ticket types. Please try again.")}}(),F((new Date).toLocaleString())}),[u]);const V=e=>{const{name:t,value:a,type:s}=e.target;P((i=>({...i,[t]:"file"===s?e.target.files:a})))},z=()=>{M(!1)};return(0,g.jsxs)("div",{className:"container mt-3",children:[(0,g.jsxs)("div",{className:"d-flex justify-content-between ",children:[(0,g.jsx)("h4",{children:"Ticket Section"}),e.email===Z.email&&(0,g.jsxs)(l.Z,{onClick:async()=>{try{const e=await i.Z.put("".concat("http://api1.chandrakala.co.in/api/Tickets/MarkCompleted","/").concat(u),{status:"Completed"});console.log("Response:",e),200===e.status||204===e.status?(P((e=>({...e,status:"Completed"}))),v("Ticket marked as completed successfully!")):v("Error marking ticket as completed. Please try again.")}catch(e){console.error("Error marking ticket as completed:",e),v("Error marking ticket as completed.")}},disabled:"Completed"===Z.status,onMouseEnter:()=>{q(!0)},onMouseLeave:()=>{q(!1)},children:[Y?(0,g.jsx)(m.G,{icon:h.LEp}):" ","Completed"===Z.status?"Completed":"Mark as Completed"]})]}),(0,g.jsxs)(c.Z,{children:[(0,g.jsxs)(r.Z,{children:[(0,g.jsx)("label",{htmlFor:"email",className:"col-form-label text-end",children:"CreatorID:"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("input",{type:"text",className:"form-control",id:"email",name:"email",value:Z.email,required:!0,disabled:!0})})]}),(0,g.jsxs)(r.Z,{children:[(0,g.jsx)("label",{htmlFor:"title",className:"col-form-label text-end",children:"Title:"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:Z.title,required:!0,onChange:V,disabled:!0})})]}),(0,g.jsxs)(r.Z,{children:[(0,g.jsx)("label",{htmlFor:"department",className:"col-form-label text-end",children:"Department:"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("input",{type:"text",className:"form-control",id:"department",name:"department",value:Z.department,required:!0,onChange:V,disabled:!0})})]}),(0,g.jsxs)(r.Z,{children:[(0,g.jsx)("label",{htmlFor:"project",className:"col-form-label text-end",children:"Project:"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("input",{type:"text",className:"form-control",id:"project",name:"project",value:Z.project,required:!0,onChange:V,disabled:!0})})]}),(0,g.jsxs)(r.Z,{children:[(0,g.jsx)("label",{htmlFor:"dueDate",className:"col-form-label text-end",children:"Due Date:"}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("input",{type:"text",className:"form-control",id:"dueDate",name:"dueDate",value:Z.dueDate?Z.dueDate.split("T")[0]:"",required:!0,onChange:V,disabled:!0})})]}),(0,g.jsxs)(o.Z,{show:G,onHide:z,children:[(0,g.jsx)(o.Z.Header,{closeButton:!0,children:(0,g.jsx)(o.Z.Title,{children:"Attachment"})}),(0,g.jsx)(o.Z.Body,{children:W&&(0,g.jsx)("img",{src:"".concat(T,"/").concat(Z.attachment.replace("wwwroot/","")),alt:"Attachment",className:"img-fluid"})}),(0,g.jsx)(o.Z.Footer,{children:(0,g.jsx)(l.Z,{variant:"secondary",onClick:z,children:"Close"})})]})]}),(0,g.jsxs)("h5",{className:"mt-3 d-flex align-items-center justify-content-between",children:[(0,g.jsxs)("div",{children:["Discussion Forum",(0,g.jsx)(l.Z,{className:"ms-2 btn-sm",onClick:()=>{const e=[...y].sort(((e,t)=>new Date(t.timestamp)-new Date(e.timestamp)));b(e)},children:"Sort by Newest"}),(0,g.jsx)(l.Z,{className:"ms-2 btn-sm",onClick:()=>{const e=[...y].sort(((e,t)=>new Date(e.timestamp)-new Date(t.timestamp)));b(e)},children:"Sort by Oldest"})]}),(0,g.jsx)("div",{children:(0,g.jsx)(l.Z,{onClick:()=>{U(!O)},children:O?(0,g.jsx)("i",{className:"fa-solid fa-angles-left"}):(0,g.jsx)("i",{className:"fa-solid fa-angles-right"})})})]}),E&&(0,g.jsx)("div",{className:"alert ".concat(E.includes("successfully")?"alert-success":"alert-danger"),role:"alert",children:E}),(0,g.jsxs)(c.Z,{children:[(0,g.jsxs)(r.Z,{md:O?12:9,children:[(0,g.jsxs)(c.Z,{children:[(0,g.jsxs)(r.Z,{md:7,children:[(0,g.jsxs)("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[(0,g.jsx)("label",{htmlFor:"description",className:"col-form-label text-end",children:"Description:"}),(0,g.jsx)(m.G,{icon:h.Z6I,className:"me-2",onClick:()=>{if(y.length>0){const e=y[y.length-1];P({...Z,userAssigneeEmail:e.newAssigneeEmail,userTicketType:e.newTicketType,userStatus:e.newStatus,userPriority:e.newPriority})}else P({...Z,userAssigneeEmail:Z.assigneeEmail,userTicketType:Z.ticketType,userStatus:Z.status,userPriority:Z.priority});_(!A)}})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)("textarea",{className:"form-control",id:"description",name:"description",value:Z.description,required:!0,onChange:V,rows:"6",disabled:!0}),Z.attachment&&(0,g.jsx)(r.Z,{children:(0,g.jsxs)(l.Z,{className:"mt-3",onClick:()=>{Z.attachment.toLowerCase().endsWith(".png")||Z.attachment.toLowerCase().endsWith(".jpg")||Z.attachment.toLowerCase().endsWith(".jpeg")||Z.attachment.toLowerCase().endsWith(".gif")||Z.attachment.toLowerCase().endsWith(".bmp")?(B(!0),M(!0)):window.open("".concat(T,"/").concat(Z.attachment.replace("wwwroot/","")),"_blank")},children:[(0,g.jsx)(m.G,{icon:h.Alc,className:"me-2"}),"Show Attachment"]})})]})]}),(0,g.jsxs)(r.Z,{md:5,children:[(0,g.jsx)("h5",{className:"mb-3",children:"Ticket Information"}),(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Assignee:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.assigneeEmail,onChange:V,name:"assigneeEmail",disabled:!0,children:[(0,g.jsx)("option",{value:"",children:"Select Assignee"}),f.map((e=>(0,g.jsx)("option",{value:e.email,children:e.email},e.id)))]})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Ticket Type:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.ticketType,onChange:V,name:"ticketType",disabled:!0,children:[(0,g.jsx)("option",{value:"",children:"Select Ticket Type"}),R.map((e=>(0,g.jsx)("option",{value:e.ticketType,children:e.ticketType},e.ticketTypeId)))]})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Status:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.status,onChange:V,name:"status",disabled:!0,children:[(0,g.jsx)("option",{value:"Open",children:"Open"}),(0,g.jsx)("option",{value:"Pending",children:"Pending"}),(0,g.jsx)("option",{value:"Unassigned",children:"Unassigned"}),(0,g.jsx)("option",{value:"Completed",children:"Completed"})]})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Priority:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.priority,onChange:V,name:"priority",disabled:!0,children:[(0,g.jsx)("option",{value:"high",children:"High"}),(0,g.jsx)("option",{value:"medium",children:"Medium"}),(0,g.jsx)("option",{value:"low",children:"Low"})]})})]})]})]})]}),A&&(0,g.jsxs)(c.Z,{children:[(0,g.jsxs)(r.Z,{md:7,children:[(0,g.jsxs)("div",{className:"mt-3",children:[(0,g.jsx)("label",{htmlFor:"userComment",className:"col-form-label text-end",children:"Your Comment:"}),(0,g.jsx)("div",{className:"mb-3",children:(0,g.jsx)(x(),{value:C,onChange:e=>{S(e)},modules:{toolbar:k}})})]}),(0,g.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{htmlFor:"attachedFile",children:"Attach File"}),(0,g.jsx)(d.Z.Control,{type:"file",id:"attachedFile",name:"attachedFile",onChange:e=>{K(e.target.files[0])}})]})]}),(0,g.jsxs)(r.Z,{md:5,children:[(0,g.jsx)(c.Z,{className:"mt-3",children:(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Assignee:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.userAssigneeEmail,onChange:V,name:"userAssigneeEmail",children:[(0,g.jsx)("option",{value:"",children:"Select Assignee Email"}),f.map((e=>(0,g.jsx)("option",{value:e.email,children:e.email},e.id)))]})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Ticket Type:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.userTicketType,onChange:V,name:"userTicketType",children:[(0,g.jsx)("option",{value:"",children:"Select Ticket Type"}),console.log(R),R.map((e=>(0,g.jsx)("option",{value:e.ticketTypeId,children:e.ticketType},e.ticketTypeId)))]})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Status:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.userStatus,onChange:V,name:"userStatus",children:[(0,g.jsx)("option",{value:"",children:"Select Status"}),(0,g.jsx)("option",{value:"Open",children:"Open"}),(0,g.jsx)("option",{value:"Pending",children:"Pending"}),(0,g.jsx)("option",{value:"Unassigned",children:"Unassigned"}),(0,g.jsx)("option",{value:"Completed",children:"Completed"})]})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Priority:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsxs)(d.Z.Select,{value:Z.userPriority,onChange:V,name:"userPriority",children:[(0,g.jsx)("option",{value:"",children:"Select Priority"}),(0,g.jsx)("option",{value:"high",children:"High"}),(0,g.jsx)("option",{value:"medium",children:"Medium"}),(0,g.jsx)("option",{value:"low",children:"Low"})]})})]})]})}),(0,g.jsx)(l.Z,{className:"mt-3",onClick:async t=>{t.preventDefault();const a=e.email===Z.email,s=e.email===Z.assigneeEmail,n=e.email===Z.userAssigneeEmail;if(a||s||n)try{const t={firstName:e.firstName,prev:Z.priority,pre:Z.status,newp:Z.userPriority,pret:Z.ticketTypeId,newt:Z.userTicketType,newa:Z.userAssigneeEmail,news:Z.userStatus,prep:Z.priority,ticketid:Z.ticketId,timestamp:(new Date).toISOString(),comment:C},a="".concat("http://api1.chandrakala.co.in/api/TicketFlow","?").concat(new URLSearchParams(t).toString());let s=new FormData;H&&s.append("attachment",H,H.name),console.log("FormData:",s),console.log("File uploaded:",H);const n=await i.Z.post(a,s,{headers:{"Content-Type":"multipart/form-data"}});console.log("Response:",n.data),b([...y,n.data]),S(""),v("Comment submitted successfully!"),w(Z)}catch(l){console.error("Error submitting comment:",l),console.log("Error details:",l.response),console.log("Status code:",l.response.status),v("Error submitting comment. Please try again.")}else v("You are not authorized to comment on this ticket.")},children:"Submit Your Comment"})]})]}),y.map(((e,t)=>(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(c.Z,{className:"border p-2 align-items-center",children:[(0,g.jsxs)(r.Z,{md:7,children:[(0,g.jsx)("div",{className:"d-flex align-items-center justify-content-between mb-3",children:(0,g.jsx)("label",{htmlFor:"description",className:"col-form-label text-end",children:(0,g.jsxs)("p",{children:["Comment by ",e.firstName," at ",new Date(e.timestamp).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})]})})}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:e.comment}}),e.attachment&&(0,g.jsxs)("div",{children:[(0,g.jsx)("strong",{}),(0,g.jsx)("a",{href:"".concat(T,"/").concat(e.attachment.replace("wwwroot/","")),target:"_blank",rel:"noopener noreferrer",children:"View Attachment"})]})]})]}),(0,g.jsx)(r.Z,{md:5,children:(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Assignee:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsx)(d.Z.Select,{name:"assigneeEmail",disabled:!0,children:(0,g.jsx)("option",{value:"",children:e.newAssigneeEmail})})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Ticket Type:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsx)(d.Z.Select,{name:"ticketType",disabled:!0,children:(0,g.jsx)("option",{value:"",children:e.newTicketType})})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Status:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsx)(d.Z.Select,{name:"status",disabled:!0,children:(0,g.jsx)("option",{value:"",children:e.newStatus})})})]}),(0,g.jsxs)(d.Z.Group,{as:c.Z,className:"mb-3",children:[(0,g.jsx)(d.Z.Label,{column:!0,sm:4,children:"Priority:"}),(0,g.jsx)(r.Z,{sm:8,children:(0,g.jsx)(d.Z.Select,{name:"priority",disabled:!0,children:(0,g.jsx)("option",{value:"",children:e.newPriority})})})]})]})})]},t)})))]}),!O&&(0,g.jsx)(r.Z,{md:3,className:"border-start border-end border-2",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("h5",{className:"mb-3",children:"Progress Tracker"}),(0,g.jsx)("ul",{className:"list-group",children:y.map(((e,t)=>(0,g.jsxs)("li",{className:"list-group-item",children:[(0,g.jsx)("strong",{children:new Date(e.timestamp).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}),(0,g.jsx)("br",{}),e.newAssigneeEmail&&(0,g.jsxs)("span",{children:["Assigned to: ",e.newAssigneeEmail]})]},t)))})]})})]})]})}},42480:()=>{}}]);
//# sourceMappingURL=5696.1c114d47.chunk.js.map