(this["webpackJsonpquestion2-http-request"]=this["webpackJsonpquestion2-http-request"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),r=s(5),c=s.n(r),i=(s(11),s(4)),j=s.n(i),u=s(6),l=s(2),d=(s(13),s(0)),o=function(e){for(var t=e.usersPerPage,s=e.totalUsers,a=e.paginate,n=[],r=1;r<=Math.ceil(s/t);r++)n.push(r);return Object(d.jsx)("div",{className:"wrapper paginator",children:Object(d.jsx)("div",{className:"data-pagination",children:Object(d.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(d.jsx)("li",{className:"page-item",children:Object(d.jsx)("a",{onClick:function(){return a(e)},href:"!#",className:"page-link",children:e})},e)}))})})})},p=function(e){var t=e.users;return e.loading?Object(d.jsx)("p",{children:"loading..."}):Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsxs)("div",{className:"row-heading",children:[Object(d.jsx)("div",{children:"Id"}),Object(d.jsx)("div",{children:"Name"}),Object(d.jsx)("div",{children:"Email id"})]}),t.map((function(e){return Object(d.jsxs)("div",{className:"row-data",children:[Object(d.jsx)("div",{children:e.id}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:e.avatar,className:"profile-pic",alt:e.first_name,title:e.first_name}),e.first_name," ",e.last_name]}),Object(d.jsx)("div",{children:e.email})]},e.id)}))]})};var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(!0),c=Object(l.a)(r,2),i=c[0],b=c[1],h=Object(a.useState)(1),O=Object(l.a)(h,2),f=O[0],m=O[1],x=Object(a.useState)(6),v=Object(l.a)(x,1)[0];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://reqres.in/api/users?page=2 ",e.next=3,fetch("https://reqres.in/api/users?page=2 ");case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,n(s.data),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var g=f*v,N=g-v,w=s.slice(N,g);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{users:w,loading:i}),Object(d.jsx)(o,{usersPerPage:v,totalUsers:s.length,paginate:function(e){return m(e)}})]})};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.8d602668.chunk.js.map