(this["webpackJsonpusing-pre-built-react-components"]=this["webpackJsonpusing-pre-built-react-components"]||[]).push([[0],{42:function(e,t,n){e.exports=n(53)},48:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),o=n(38),u=n(21),i=n(34),m=n.n(i);n(48);var E=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(m.a,null)," Keeper",l.a.createElement("span",null,".io")))};var f=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright Alain Box \u24d2 ",e))},s=n(36),p=n.n(s);var d=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(p.a,null)))},v=n(25),b=n(32),h=n(37),j=n.n(h),O=n(70),g=n(71);var k=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),r=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(v.a)({},n,a))}))}var i=Object(a.useState)(!1),m=Object(u.a)(i,2),E=m[0],f=m[1];return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},l.a.createElement("input",{name:"title",onChange:o,value:r.title,placeholder:"Title",style:{display:E?"initial":"none"}}),l.a.createElement("textarea",{name:"content",onChange:o,value:r.content,placeholder:"Take a note...",rows:E?"3":"1",onClick:function(){f(!0)}}),l.a.createElement(g.a,{in:E},l.a.createElement(O.a,{color:"primary","aria-label":"add",onClick:function(t){e.onAdd(r),c({title:"",content:""}),t.preventDefault()}},l.a.createElement(j.a,null)))))};var y=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(d,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(f,null))};c.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.23096a18.chunk.js.map