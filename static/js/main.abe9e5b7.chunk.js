(this["webpackJsonpuppgift-2"]=this["webpackJsonpuppgift-2"]||[]).push([[0],{15:function(t,e,c){},17:function(t,e,c){"use strict";c.r(e);var s=c(0),o=c(1),n=c.n(o),i=c(7),a=c.n(i),d=(c(15),c(3)),l=c(9),r=c(8),j=c.n(r),u=function(t){var e=t.todos,c=t.setTodos,n=Object(o.useState)(""),i=Object(d.a)(n,2),a=i[0],r=i[1],u=Object(o.useState)(!0),b=Object(d.a)(u,2),m=b[0],O=b[1];return Object(s.jsxs)("div",{className:"todo-form",children:[Object(s.jsx)("h1",{className:"text-center mt-4 fw-bold",children:"to-do..."}),Object(s.jsx)("form",{children:Object(s.jsxs)("div",{className:"row mt-3 justify-content-center align-items-center g-2",children:[Object(s.jsx)("div",{className:"col-12 col-sm-9 col-xl-8",children:Object(s.jsx)("input",{type:"text",id:"todo-input",className:"form-control",placeholder:"Something to do...",onChange:function(t){t.target.value.length>=2?O(!1):O(!0),r(t.target.value)},value:a})}),Object(s.jsx)("div",{className:"col-12 col-sm-2",children:Object(s.jsx)("button",{type:"submit",id:"submit-todo",className:"btn w-100",onClick:function(t){t.preventDefault(),c([].concat(Object(l.a)(e),[{name:a,active:!0,id:j()()}])),r(""),O(!0),document.getElementById("todo-input").focus()},disabled:m,children:"Add"})})]})})]})},b=c(6),m=function(t){var e=t.todo,c=t.todos,o=t.setTodos;return Object(s.jsxs)("li",{className:"list-group-item p-0 ".concat(e.active?"":"completed"),children:[Object(s.jsxs)("div",{className:"w-100 p-2",onClick:function(){o(c.map((function(t){return t.id===e.id?Object(b.a)(Object(b.a)({},t),{},{active:!t.active}):t})))},children:[Object(s.jsx)("i",{class:"fas fa-check"}),e.name]}),Object(s.jsx)("button",{className:"btn fas fa-times",onClick:function(){o(c.filter((function(t){return t.id!==e.id})))}})]})},O=function(t){var e=t.todos,c=t.setTodos;return Object(s.jsx)("div",{className:"todo-list",children:Object(s.jsx)("div",{className:"row mt-3 justify-content-center gx-2 gy-2",children:Object(s.jsx)("div",{className:"col-12 col-sm-11 col-xl-10",children:Object(s.jsx)("ul",{className:"list-group list-group-flush",children:e.map((function(t){return Object(s.jsx)(m,{todo:t,todos:e,setTodos:c},t.id)}))})})})})};var f=function(){var t=Object(o.useState)([]),e=Object(d.a)(t,2),c=e[0],n=e[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("main",{className:"container-md",children:[Object(s.jsx)(u,{todos:c,setTodos:n}),Object(s.jsx)(O,{todos:c,setTodos:n})]})})};c(16);a.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.abe9e5b7.chunk.js.map