(this.webpackJsonpcoladgray=this.webpackJsonpcoladgray||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"data":[{"id":"1","EmployeeName":"Temitope","Gender":"Male","EmpEmailid":"ab@gmail.com","LeaveType":"annual leave","postingDate":"2020-10-15","LeaveDateStart":"2020-22-10","LeaveDateEnd":"2021-10-2","LeaveDescription":"This is the appropriate time to take a leave sir","LeaveStatus":"Approved","AdminRemark":"Your leave is granted. You are free to go","AdminActionDate":"2020-12-1","Contact":"0905678543"},{"id":"2","EmployeeName":"Osunlana Tosin","Gender":"Male","EmpEmailid":"ab@gmail.com","LeaveType":"annual leave","postingDate":"2020-10-15","LeaveDateStart":"2020-22-10","LeaveDateEnd":"2021-10-2","LeaveDescription":"This is the appropriate time to take a leave sir","LeaveStatus":"Approved","AdminRemark":"Your leave is granted. You are free to go","AdminActionDate":"2020-12-1","Contact":"0905678543"},{"id":"3","EmployeeName":"Adeola Samson","Gender":"Male","EmpEmailid":"ab@gmail.com","LeaveType":"annual leave","postingDate":"2020-10-15","LeaveDateStart":"2020-22-10","LeaveDateEnd":"2021-10-2","LeaveDescription":"This is the appropriate time to take a leave sir","LeaveStatus":"Approved","AdminRemark":"Your leave is granted. You are free to go","AdminActionDate":"2020-12-1","Contact":"0905678543"}]}')},26:function(e,a,t){},27:function(e,a,t){},32:function(e,a,t){e.exports=t(46)},38:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(28),m=t.n(c),r=(t(37),t(38),t(3)),s=t(12),i=t(2),o=t(14),d=t(16),E=t(30),u=t(17);var p=function(e){var a=e.children,t=Object(l.useState)(!1),c=Object(s.a)(t,2),m=c[0],r=c[1],p=Object(l.useState)(!1),v=Object(s.a)(p,2),N=v[0],b=v[1],h=Object(l.useState)(!1),y=Object(s.a)(h,2),g=y[0],f=y[1];return n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",id:"check",className:"headerinput"}),n.a.createElement("div",{className:"header"},n.a.createElement("label",{htmlFor:"check",className:"headerlabel"},n.a.createElement(o.a,{className:"headericon",id:"sidebar_btn"})),n.a.createElement("div",{className:"left_area"},n.a.createElement("h3",null,"Colad",n.a.createElement("span",null,"Gray"))),n.a.createElement("div",{className:"right_area"},n.a.createElement(i.b,{to:"/",className:"logout_btn"},"Logout"))),n.a.createElement("div",{className:"sidebar"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(i.b,{to:"/admin_dashboard",exact:!0,className:"sidebar-navlink"},n.a.createElement(d.a,{className:"sidebar-icons"}),n.a.createElement("span",null,"Dashboard"))),n.a.createElement("li",{onClick:function(){r(!m)}},n.a.createElement(i.b,{to:"#",exact:!0,className:"sidebar-navlink sidebarsub"},n.a.createElement(E.a,{className:"sidebar-icons"}),n.a.createElement("span",null,"Department",n.a.createElement(u.a,{className:"sub-menu-icon"}))),n.a.createElement("div",{className:m?"show-subnav":"no-showsubnav",id:"department"},n.a.createElement(i.b,{to:"/add_department",exact:!0,className:"sub-menu-navlink"},"add department"),n.a.createElement(i.b,{to:"/manage_department",exact:!0,className:"sub-menu-navlink"},"Manage Department"))),n.a.createElement("li",{onClick:function(){b(!N)}},n.a.createElement(i.b,{to:"#",exact:!0,className:"sidebar-navlink sidebarsub"},n.a.createElement(d.b,{className:"sidebar-icons"}),n.a.createElement("span",null,"Leave type",n.a.createElement(u.a,{className:"sub-menu-icon"})," ")),n.a.createElement("div",{className:N?"show-subnav":"no-showsubnav",id:"department"},n.a.createElement(i.b,{to:"/add_leave",exact:!0,className:"sub-menu-navlink"},"Add Leave"),n.a.createElement(i.b,{to:"/manage_leave",exact:!0,className:"sub-menu-navlink"},"Manage Leave"))),n.a.createElement("li",{onClick:function(){f(!g)}},n.a.createElement(i.b,{to:"#",exact:!0,className:"sidebar-navlink sidebarsub"},n.a.createElement(d.c,{className:"sidebar-icons"}),n.a.createElement("span",null,"Employees",n.a.createElement(u.a,{className:"sub-menu-icon"})," ")),n.a.createElement("div",{className:g?"show-subnav":"no-showsubnav",id:"department"},n.a.createElement(i.b,{to:"/add_employee",exact:!0,className:"sub-menu-navlink"},"Add Employee"),n.a.createElement(i.b,{to:"/manage_employee",exact:!0,className:"sub-menu-navlink"},"Manage Employee"))),n.a.createElement("li",null,n.a.createElement(i.b,{to:"/admin_login",exact:!0,className:"sidebar-navlink"},n.a.createElement(o.b,{className:"sidebar-icons"}),n.a.createElement("span",null,"Signout"))))),n.a.createElement("div",{className:"content"},a))},v=(t(26),t(19)),N=function(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){var e=v.data;c(e)}),[t]),n.a.createElement("div",null,n.a.createElement(p,null,n.a.createElement("div",{className:"admin-header"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},n.a.createElement("div",{className:""},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-title"},"Total Regd employee"),n.a.createElement("div",{className:"card-number"},"4")))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-title"},"Listed Department"),n.a.createElement("div",{className:"card-number"},"4"))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-title"},"Listed Leave"),n.a.createElement("div",{className:"card-number"},"4")))),n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Employee Name"),n.a.createElement("th",{scope:"col"},"Leave Type"),n.a.createElement("th",{scope:"col"},"Posting Date"),n.a.createElement("th",{scope:"col"},"Status"),n.a.createElement("th",{scope:"col"},"Action"))),t.map((function(e){return n.a.createElement("tbody",{key:e.id},n.a.createElement("tr",null,n.a.createElement("td",null,e.id),n.a.createElement("td",{style:{color:"#38bbc8",fontWeight:"bold"}},e.EmployeeName," ",n.a.createElement("br",null),e.EmpEmailid),n.a.createElement("td",null,e.LeaveType),n.a.createElement("td",null,e.postingDate),n.a.createElement("td",null,e.LeaveStatus),n.a.createElement("td",{className:""},n.a.createElement(i.b,{to:"/admin_dashboard/dashboard_view/".concat(e.id),className:"view-button"},"View"))))}))))))},b=t(8),h=t(9),y=t(11),g=t(10),f=function(e){Object(y.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(p,null,n.a.createElement("div",{className:"content-start"},n.a.createElement("div",{className:"maincontentlogin"},n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"}),n.a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12"},n.a.createElement("div",{className:"admin-center"},n.a.createElement("h5",{className:""}," Add Department"),n.a.createElement("div",{className:"admin-add"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Department Name")),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Department short Name")),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Department Code")),n.a.createElement("div",{className:""},n.a.createElement(i.b,{to:"/add_department",className:"nav-button"},"Add"))))),n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"}))))))}}]),t}(l.Component),x=t(5);var w=function(){return n.a.createElement(p,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""}," Manage Department"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Department Info"),n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Dept Name"),n.a.createElement("th",{scope:"col"},"Dept short name"),n.a.createElement("th",{scope:"col"},"Dept code"),n.a.createElement("th",{scope:"col"},"Creation Date"),n.a.createElement("th",{scope:"col"},"Action"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Human Resources"),n.a.createElement("td",null,"Hr"),n.a.createElement("td",null,"hr001"),n.a.createElement("td",null,"20-12-2020"),n.a.createElement("td",null,n.a.createElement(x.a,null))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Information Technology"),n.a.createElement("td",null,"IT"),n.a.createElement("td",null,"IT001"),n.a.createElement("td",null,"20-12-2020"),n.a.createElement("td",null,n.a.createElement(x.a,null))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Sales"),n.a.createElement("td",null,"sl"),n.a.createElement("td",null,"sl001"),n.a.createElement("td",null,"20-12-2020"),n.a.createElement("td",null,n.a.createElement(x.a,null))))))))},L=function(e){Object(y.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(p,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""},"Add Employee"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Employee Info"),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"text",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"text",className:"inputlabel"},"Employee Code(Must be unique"))),n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"text",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"text",className:"inputlabel"},"Gender"))),n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"text",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"text",className:"inputlabel"},"Birthday"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"firstname",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"firstname",className:"inputlabel"},"First Name"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"lastname",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"lastname",className:"inputlabel"},"Last name"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"department",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"department",className:"inputlabel"},"Department"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"address",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"address",className:"inputlabel"},"Address"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Email"))),n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"country",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"country",className:"inputlabel"},"Country"))),n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"city",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"city",className:"inputlabel"},"Phone number"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"password",name:"password",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"password",className:"inputlabel"},"Password"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"password",name:"cpassword",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"cpassword",className:"inputlabel"},"No of leave per day"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"password",name:"cpassword",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"cpassword",className:"inputlabel"},"confirm Password"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("button",{type:"submit",value:"submit",className:"nav-button"},"Add")))))))}}]),t}(l.Component);var k=function(){return n.a.createElement(p,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""},"Manage Employee"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Employee Info"),n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Sr no"),n.a.createElement("th",{scope:"col"},"full Name"),n.a.createElement("th",{scope:"col"},"Department"),n.a.createElement("th",{scope:"col"},"Reg Date"),n.a.createElement("th",{scope:"col"},"Action"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Akanni"),n.a.createElement("td",null,"Humanresources"),n.a.createElement("td",null,"12-2"),n.a.createElement("td",null,n.a.createElement(x.b,null),n.a.createElement("span",null,n.a.createElement(x.a,null)))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Akanni"),n.a.createElement("td",null,"Humanresources"),n.a.createElement("td",null,"12-2"),n.a.createElement("td",null,n.a.createElement(x.b,null),n.a.createElement("span",null,n.a.createElement(x.a,null)))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Akanni"),n.a.createElement("td",null,"Humanresources"),n.a.createElement("td",null,"12-2"),n.a.createElement("td",null,n.a.createElement(x.b,null),n.a.createElement("span",null,n.a.createElement(x.a,null)))))))))},D=function(e){Object(y.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(p,null,n.a.createElement("div",{className:"content-start"},n.a.createElement("div",{className:"maincontentlogin"},n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"}),n.a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12"},n.a.createElement("div",{className:"admin-center"},n.a.createElement("h5",{className:""}," Add Leave type"),n.a.createElement("div",{className:"admin-add"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"text",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"text",className:"inputlabel"},"Leave Type")),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("textarea",{name:"description",id:"",cols:"1",rows:"1",className:"textarea input",required:""}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Description")),n.a.createElement("div",{className:""},n.a.createElement(i.b,{to:"/add_leave",className:"nav-button"},"Add"))))),n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"}))))))}}]),t}(l.Component);var A=function(){return n.a.createElement(p,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""}," Manage Leave Type"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Leave type Info"),n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Leave type"),n.a.createElement("th",{scope:"col"},"Description"),n.a.createElement("th",{scope:"col"},"creation Date"),n.a.createElement("th",{scope:"col"},"Action"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Casual leave"),n.a.createElement("td",null,"casual leave"),n.a.createElement("td",null,"20-12-2020"),n.a.createElement("td",null,n.a.createElement(x.a,null))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Medical leave"),n.a.createElement("td",null,"Medical leave test"),n.a.createElement("td",null,"20-12-2020"),n.a.createElement("td",null,n.a.createElement(x.a,null))),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"3"),n.a.createElement("td",null,"Restricted holidays"),n.a.createElement("td",null,"Restricted holiday"),n.a.createElement("td",null,"20-12-2020"),n.a.createElement("td",null,n.a.createElement(x.a,null))))))))},j=function(e){var a=Object(l.useState)({id:"",EmployeeName:"",Gender:"",EmpEmailid:"",LeaveType:"",postingDate:"",LeaveDateStart:"",LeaveDateEnd:"",LeaveDescription:"",LeaveStatus:"",AdminRemark:"",AdminActionDate:"",Contact:""}),t=Object(s.a)(a,2),c=t[0],m=t[1],r=Object(l.useState)("true"),i=Object(s.a)(r,2),o=(i[0],i[1]);Object(l.useEffect)((function(){var a=e.match.params.postId,t=v.data.find((function(e){return e.id===a}));m(t),o(a)}),[c,e.match.params.postId]);var d=Object(l.useState)(!1),E=Object(s.a)(d,2),u=E[0],N=E[1];return n.a.createElement(p,null,n.a.createElement("div",{className:"content-start"},n.a.createElement("div",{className:"maincontentlogin"},n.a.createElement("h5",{className:""}," Leave Details"),n.a.createElement("div",{className:"",style:{marginLeft:"20px",paddingBottom:"40px"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Employee Name: ",n.a.createElement("span",null,c.EmployeeName))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Emp Id: ",n.a.createElement("span",null,c.id))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Gender: ",n.a.createElement("span",null,c.Gender)))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Emp Contact No: ",n.a.createElement("span",null,c.Contact))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Emp Email Id: ",n.a.createElement("span",null,c.EmpEmailid))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"}))))),n.a.createElement("div",{className:"col-lg-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Leave Type: ",n.a.createElement("span",null,c.Contact))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Leave Date: ",n.a.createElement("span",null,"From ",c.LeaveDateStart," to ",c.LeaveDateEnd))),n.a.createElement("div",{className:"col-lg-4 col-md-4 col-12-"},n.a.createElement("div",{className:"leavedetails-title"},"Posting Date: ",n.a.createElement("span",null,c.postingDate)))))),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"leavedetails-title"},"Posting Date: ",n.a.createElement("span",null,c.LeaveDescription)))),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"leavedetails-title"},"Leave status: ",n.a.createElement("span",null,c.LeaveStatus)))),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"leavedetails-title"},"Admin Remark: ",n.a.createElement("span",null,c.AdminRemark)))),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},n.a.createElement("div",{className:"viewdetails-col"},n.a.createElement("div",{className:"leavedetails-title"},"Admin Action taken date: ",n.a.createElement("span",null,c.AdminActionDate)))),n.a.createElement("div",{className:""},n.a.createElement("button",{type:"submit",value:"submit",onClick:function(){N(!u)}},"Take Action"),n.a.createElement("div",{className:u?"show":"no-show"},n.a.createElement("div",{className:"view-takeaction-container"},n.a.createElement("h5",{className:""}," Leave Details"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("select",{className:"form-control",id:""},n.a.createElement("option",null,"Choose your option"),n.a.createElement("option",null,"Approved"),n.a.createElement("option",null,"Not approved"))),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("textarea",{name:"description",id:"",cols:"10",rows:"1",placeholder:"Description",className:"textarea input",required:""})),n.a.createElement("div",{className:"inputdiv text-right"},n.a.createElement("a",{href:"/admin_dashboard/dashboard_view/".concat(c.id),className:"nav-button"},"Submit")))))))))))},_=t(23);var O=function(e){var a=e.children;return n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",id:"check",className:"headerinput"}),n.a.createElement("div",{className:"header"},n.a.createElement("label",{htmlFor:"check",className:"headerlabel"},n.a.createElement(o.a,{className:"headericon",id:"sidebar_btn"})),n.a.createElement("div",{className:"left_area"},n.a.createElement("h3",null,"Colad",n.a.createElement("span",null,"Gray"))),n.a.createElement("div",{className:"right_area"},n.a.createElement(i.b,{to:"/",className:"logout_btn"},"Logout"))),n.a.createElement("div",{className:"sidebar"},n.a.createElement("ul",{style:{paddingTop:"50px"}},n.a.createElement("li",{style:{marginBottom:"30px"}},n.a.createElement(i.b,{to:"/",exact:!0,className:"sidebar-navlink"},n.a.createElement(_.b,{className:"sidebar-icons"}),n.a.createElement("span",null,"Employee Login"))),n.a.createElement("li",null,n.a.createElement(i.b,{to:"/admin_login",exact:!0,className:"sidebar-navlink"},n.a.createElement(_.a,{className:"sidebar-icons"}),n.a.createElement("span",null,"Admin Login"))))),n.a.createElement("div",{className:"content"},a))},F=function(e){Object(y.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(O,null,n.a.createElement("div",{className:"maincontentlogin"},n.a.createElement("h2",{className:"text-center"}," Employee Leave management system | Admin Login"),n.a.createElement("div",{className:""},n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"}),n.a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12"},n.a.createElement("div",{className:"content-input"},n.a.createElement("h5",{className:"text-left"},"Admin Login"),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Email")),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"password",name:"password",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"password",className:"inputlabel"},"Password")),n.a.createElement("div",{className:"text-right"},n.a.createElement(i.b,{to:"./admin_dashboard",className:"nav-button"},"Login")))),n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"})))))))}}]),t}(l.Component),q=(t(44),function(e){Object(y.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:""},n.a.createElement(O,null,n.a.createElement("div",{className:"content-start"},n.a.createElement("div",{className:"maincontentlogin"},n.a.createElement("h2",{className:"text-center"}," Welcome to Employee Leave management system"),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"}),n.a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12"},n.a.createElement("div",{className:"content-input"},n.a.createElement("h5",{className:"text-left"},"Employee Login"),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Email")),n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"password",name:"password",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"password",className:"inputlabel"},"Password")),n.a.createElement("div",{className:"text-right"},n.a.createElement(i.b,{to:"/employee_profile",className:"nav-button"},"Login")))),n.a.createElement("div",{className:"col-lg-3 col-md-2 col-sm-12"})))))))}}]),t}(l.Component)),C=t(31);var S=function(e){var a=e.children,t=Object(l.useState)(!1),c=Object(s.a)(t,2),m=c[0],r=c[1];return n.a.createElement("div",null,n.a.createElement("input",{type:"checkbox",id:"check",className:"headerinput"}),n.a.createElement("div",{className:"header"},n.a.createElement("label",{htmlFor:"check",className:"headerlabel"},n.a.createElement(o.a,{className:"headericon",id:"sidebar_btn"})),n.a.createElement("div",{className:"left_area"},n.a.createElement("h3",null,"Colad",n.a.createElement("span",null,"Gray"))),n.a.createElement("div",{className:"right_area"},n.a.createElement(i.b,{to:"/",className:"logout_btn"},"Logout"))),n.a.createElement("div",{className:"sidebar"},n.a.createElement("div",{className:"user-sidebar text-center",style:{marginBottom:"20px",color:"#38bbc8"}},n.a.createElement("div",null,"welcome temitope"),n.a.createElement("div",null,"No of leaves in days: 20"),n.a.createElement("div",null,"No of leaves remaining: 5")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(i.b,{to:"/employee_profile",exact:!0,className:"sidebar-navlink"},n.a.createElement(C.a,{className:"sidebar-icons"}),n.a.createElement("span",null,"My profile"))),n.a.createElement("li",null,n.a.createElement(i.b,{to:"",exact:!0,className:"sidebar-navlink"},n.a.createElement(d.b,{className:"sidebar-icons"}),n.a.createElement("span",null,"Change password"))),n.a.createElement("li",{onClick:function(){r(!m)}},n.a.createElement(i.b,{to:"#",className:"sidebar-navlink sidebarsub"},n.a.createElement(d.b,{className:"sidebar-icons"}),n.a.createElement("span",null,"Leave",n.a.createElement(u.a,{className:"sub-menu-icon"}))),n.a.createElement("div",{className:m?"show-subnav":"no-showsubnav"},n.a.createElement(i.b,{to:"/apply_leave",exact:!0,className:"sub-menu-navlink"},"Apply Leave"),n.a.createElement(i.b,{to:"/Leave_history",exact:!0,className:"sub-menu-navlink"},"Leave History"))),n.a.createElement("li",null,n.a.createElement(i.b,{to:"/",exact:!0,className:"sidebar-navlink"},n.a.createElement(o.b,{className:"sidebar-icons"}),n.a.createElement("span",null,"Sign Out"))))),n.a.createElement("div",{className:"content"},a))},T=(t(27),function(e){Object(y.a)(t,e);var a=Object(g.a)(t);function t(){return Object(b.a)(this,t),a.apply(this,arguments)}return Object(h.a)(t,[{key:"render",value:function(){return n.a.createElement(S,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""}," Apply for leave"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Apply for leave"),n.a.createElement("div",{className:""},n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("select",null,n.a.createElement("option",{value:"1"},"select Leave type"),n.a.createElement("option",{value:"2"},"Casual leave"),n.a.createElement("option",{value:"3"},"medical leave"),n.a.createElement("option",{value:"4"},"maternity leave"),n.a.createElement("option",{value:"4"},"others")))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"fromdate",required:"",className:"input",placeholder:"dd/mm/yy"}),n.a.createElement("label",{htmlFor:"fromdate",className:"inputlabel"},"From Date"))),n.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"toDate",required:"",className:"input",placeholder:"dd/mm/yy"}),n.a.createElement("label",{htmlFor:"todate",className:"inputlabel"},"To Date"))),n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("textarea",{name:"description",id:"",cols:"10",rows:"1",placeholder:"",className:"textarea input",required:""}),n.a.createElement("label",{htmlFor:"code",className:"inputlabel"},"Description"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("button",{type:"submit",value:"submit",className:"nav-button"},"Apply"))))))))}}]),t}(l.Component));var I=function(){return n.a.createElement("div",null,n.a.createElement(S,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""}," Update employee"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Update Employee Info"),n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"code",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"code",className:"inputlabel"},"Employee Code"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"code",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"code",className:"inputlabel"},"Employee Code"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"birth",required:"",className:"input",placeholder:"dd/mm/yy"}),n.a.createElement("label",{htmlFor:"birth",className:"inputlabel"},"Date of birth"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"firstname",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"firstname",className:"inputlabel"},"First Name"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"lastname",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"lastname",className:"inputlabel"},"Last Name"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"department",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"department",className:"inputlabel"},"Department"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"address",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"address",className:"inputlabel"},"Address"))),n.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"email",name:"email",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"email",className:"inputlabel"},"Email"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"city",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"city",className:"inputlabel"},"City/Town"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"text",name:"country",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"country",className:"inputlabel"},"Country"))),n.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},n.a.createElement("div",{className:"inputdiv"},n.a.createElement("input",{type:"phone",name:"phone",required:"",className:"input"}),n.a.createElement("label",{htmlFor:"phone",className:"inputlabel"},"Phone number"))),n.a.createElement("div",{className:"col-lg-3 col-md-6 col-sm-6"},n.a.createElement("button",{type:"submit",value:"submit",className:"nav-button"},"Update"))))))))};var M=function(){return n.a.createElement(S,null,n.a.createElement("div",{className:"employee-header"},n.a.createElement("h4",{className:""}," Leave History"),n.a.createElement("div",{className:"employee-profile"},n.a.createElement("h2",null,"Leave history"),n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Leave type"),n.a.createElement("th",{scope:"col"},"from"),n.a.createElement("th",{scope:"col"},"to"),n.a.createElement("th",{scope:"col"},"description"),n.a.createElement("th",{scope:"col"},"PostingDate"),n.a.createElement("th",{scope:"col"},"Admin remark"),n.a.createElement("th",{scope:"col"},"status"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Annual leave"),n.a.createElement("td",null,"5dec2020"),n.a.createElement("td",null,"15 jan 2021"),n.a.createElement("td",null,"I want to take my eacrly annual; leave  coa i wan to travel with m y family and enjoy ourselves"),n.a.createElement("td",null,"5 oct 2020"),n.a.createElement("td",null,"your leave is granted, bring something for us"),n.a.createElement("td",null,"Approved")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"2"),n.a.createElement("td",null,"Medical leave"),n.a.createElement("td",null,"5dec2020"),n.a.createElement("td",null,"15 jan 2021"),n.a.createElement("td",null,"I want to take my eacrly annual; leave  coa i wan to travel with m y family and enjoy ourselves"),n.a.createElement("td",null,"5 oct 2020"),n.a.createElement("td",null,"your leave is granted, bring something for us"),n.a.createElement("td",null,"Not approved")),n.a.createElement("tr",null,n.a.createElement("th",{scope:"row"},"1"),n.a.createElement("td",null,"Annual leave"),n.a.createElement("td",null,"5dec2020"),n.a.createElement("td",null,"15 jan 2021"),n.a.createElement("td",null,"I want to take my eacrly annual; leave  coa i wan to travel with m y family and enjoy ourselves"),n.a.createElement("td",null,"5 oct 2020"),n.a.createElement("td",null,"your leave is granted, bring something for us"),n.a.createElement("td",null,"Waiting for approval")))))))},R=function(){return n.a.createElement(r.c,null,n.a.createElement(r.a,{exact:!0,path:"/coladgray",component:q}),n.a.createElement(r.a,{exact:!0,path:"/",component:q}),n.a.createElement(r.a,{exact:!0,path:"/admin_login",component:F}),n.a.createElement(r.a,{exact:!0,path:"/admin_dashboard",component:N}),n.a.createElement(r.a,{exact:!0,path:"/admin_dashboard/dashboard_view/:postId",component:j}),n.a.createElement(r.a,{path:"/dashboard_view",component:j}),n.a.createElement(r.a,{exact:!0,path:"/add_department",component:f}),n.a.createElement(r.a,{exact:!0,path:"/manage_department",component:w}),n.a.createElement(r.a,{exact:!0,path:"/add_leave",component:D}),n.a.createElement(r.a,{exact:!0,path:"/manage_leave",component:A}),n.a.createElement(r.a,{exact:!0,path:"/employee_profile",component:I}),n.a.createElement(r.a,{exact:!0,path:"/apply_leave",component:T}),n.a.createElement(r.a,{exact:!0,path:"/leave_history",component:M}),n.a.createElement(r.a,{exact:!0,path:"/add_employee",component:L}),n.a.createElement(r.a,{exact:!0,path:"/manage_employee",component:k}))};var G=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(R,null))};t(45);m.a.render(n.a.createElement(i.a,null,n.a.createElement(G,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c02b1ccf.chunk.js.map