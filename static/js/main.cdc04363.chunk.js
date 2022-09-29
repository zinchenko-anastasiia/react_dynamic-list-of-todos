(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),r=c(4),l=c(2),i=c(3),d=c.n(i),o=c(1),j=(c(13),c(14),c(6)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.selectedTodoIdId,s=e.setselectedTodoId,a=function(){s(0)};return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.completed,r=e.title;return Object(b.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(b.jsx)("td",{className:"is-vcentered",children:t}),Object(b.jsx)("td",{className:"is-vcentered",children:n&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:u()("is-vcentered",{"is-expanded":!n}),children:Object(b.jsx)("p",{className:u()("has-text-success",{"has-text-danger":!n}),children:r})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:c===t?a:function(){return function(e){s(e)}(t)},children:c===t?Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye-slash"})}):Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})};!function(e){e.ACTIVE="active",e.COMPLETED="completed",e.ALL="all"}(s||(s={}));var m=function(e){var t=e.setFilterBy,c=e.filterBy,a=e.setQuery,n=e.query;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){"all"===e.target.value&&t(s.ALL),"active"===e.target.value&&t(s.ACTIVE),"completed"===e.target.value&&t(s.COMPLETED)},children:[Object(b.jsx)("option",{value:s.ALL,children:"All"}),Object(b.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(b.jsx)("option",{value:s.COMPLETED,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:n.length>0&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button","aria-label":"delete",className:"delete",onClick:function(){return a("")}})})]})]})},O=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})});function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var f=function(e){var t=e.selectedTodoId,c=e.setselectedTodoId,s=e.todos,a=Object(o.useState)(),n=Object(l.a)(a,2),i=n[0],j=n[1],u=s.find((function(e){return e.id===t}));Object(o.useEffect)((function(){var e=function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=5;break}return e.next=3,c=u.userId,x("/users/".concat(c));case 3:t=e.sent,j(t);case 5:case"end":return e.stop()}var c}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var h=s.filter((function(e){return e.id===t})),m=function(){c(0)};return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),i?Object(b.jsx)("div",{className:"modal-card",children:h.map((function(e){var t=e.id,c=e.title,s=e.completed;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t)}),Object(b.jsx)("button",{type:"button","aria-label":"delete",className:"delete","data-cy":"modal-close",onClick:m})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:c}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===s?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:Sincere@april.biz",children:i.name})]})]})]})}))}):Object(b.jsx)(O,{})]})};var p=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(0),i=Object(l.a)(n,2),j=i[0],u=i[1],p=Object(o.useState)(s.ALL),v=Object(l.a)(p,2),N=v[0],y=v[1],g=Object(o.useState)(""),T=Object(l.a)(g,2),L=T[0],I=T[1],k=Object(o.useState)(!0),C=Object(l.a)(k,2),w=C[0],E=C[1];Object(o.useEffect)((function(){var e=function(){var e=Object(r.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/todos");case 2:t=e.sent,E(!1),a(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var S=function(e,t,c){return e.filter((function(e){switch(t){case"active":return!e.completed;case"completed":return e.completed;default:return e}})).filter((function(e){return e.title.toLocaleLowerCase().includes(c.toLocaleLowerCase())}))}(c,N,L);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{setFilterBy:y,filterBy:N,setQuery:function(e){I(e)},query:L})}),Object(b.jsx)("div",{className:"block",children:w?Object(b.jsx)(O,{}):Object(b.jsx)(h,{todos:S,selectedTodoIdId:j,setselectedTodoId:function(e){u(e)}})})]})})}),j&&Object(b.jsx)(f,{todos:c,selectedTodoId:j,setselectedTodoId:function(e){u(e)}})]})};n.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.cdc04363.chunk.js.map