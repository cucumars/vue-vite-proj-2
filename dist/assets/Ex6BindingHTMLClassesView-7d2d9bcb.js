import{_ as w,j as o,l as f,m as E,o as t,c as l,a as n,s as m,F as s,g as u,e as H,t as a,x as O}from"./index-c9739e97.js";const L={key:0},N={__name:"Ex6BindingHTMLClassesView",setup(T){const b=o(!0),p=o(!0),x=f({active:!0,"text-danger":!1}),C=o(!0),v=o(null),A=E(()=>({active:C.value&&!v.value,"text-danger":v.value&&v.value.type==="fatal"})),c=o([{message:"Foo"},{message:"Bar"}]),y=f({title:"How to do lists in Vue",author:"Jane Doe",publishedAt:"2016-04-10"}),V=o([{name:"萬鹿狂奔",isComplete:!1},{name:"舞鹿亂滑",isComplete:!0},{name:"一鹿狂飆",isComplete:!1}]),_=o("");_.value=c.value.filter(r=>r.message.match(/Foo/));const j=o([[1,2,3,4,5],[6,7,8,9,10]]);function k(r){return r.filter(i=>i%2===0)}const B=o("Vue.js");function F(r){alert(`Hello ${B.value}!`),r&&alert(r.target.tagName)}function g(r,i){i&&i.preventDefault(),alert(r)}return(r,i)=>(t(),l(s,null,[n("div",{class:m({active:b.value})},"aaaa",2),n("div",{class:m(["static",{active:b.value,"text-danger":p.value,red:p.value}])},"bbbbb ",2),n("div",{class:m(x)},"classObject",2),n("div",{class:m(A.value)},"classObject2",2),(t(!0),l(s,null,u(c.value,e=>(t(),l("li",null,a(e.message),1))),256)),(t(!0),l(s,null,u(c.value,({message:e})=>(t(),l("li",null,a(e),1))),256)),(t(!0),l(s,null,u(c.value,({message:e},d)=>(t(),l("li",null,a(e)+" "+a(d),1))),256)),H(" AAAA "),(t(!0),l(s,null,u(c.value,e=>(t(),l("div",null," of "+a(e.message),1))),256)),(t(!0),l(s,null,u(c.value,({message:e})=>(t(),l("li",null," ssss"+a(e),1))),256)),n("ul",null,[(t(!0),l(s,null,u(y,e=>(t(),l("li",null,a(e),1))),256))]),(t(),l(s,null,u(10,e=>n("span",null,a(e),1)),64)),n("ul",null,[(t(!0),l(s,null,u(c.value,e=>(t(),l("li",null,a(e.message),1))),256))]),(t(!0),l(s,null,u(V.value,e=>(t(),l(s,{key:e.name},[e.isComplete?O("",!0):(t(),l("li",L,a(e.name)+" 尚未完成 ",1))],64))),128)),n("div",null," AAAA "+a(_.value),1),(t(!0),l(s,null,u(j.value,e=>(t(),l("ul",null,[(t(!0),l(s,null,u(k(e),d=>(t(),l("li",null,a(d),1))),256))]))),256)),n("button",{onClick:F},"Greet"),n("button",{onClick:i[0]||(i[0]=e=>g("Form cannot be submitted yet.",e))}," Submit "),n("button",{onClick:i[1]||(i[1]=e=>g("Form cannot be submitted yet.",e))}," Submit ")],64))}},M=w(N,[["__scopeId","data-v-c3bd2d32"]]);export{M as default};
