import{o as n,c as i,e as v,t as p,a as o,j as d,i as _,v as h,y as f,F as u,g as w,h as T}from"./index-c9739e97.js";const k={__name:"TodoItemAnother",props:["title"],emits:["remove"],setup(s){return(e,t)=>(n(),i("li",null,[v(p(s.title)+" ",1),o("button",{onClick:t[0]||(t[0]=a=>e.$emit("remove"))},"Remove")]))}},x=["onSubmit"],b=o("label",{for:"new-todo"},"Add a todo",-1),g=o("button",null,"Add",-1),$={__name:"EX7TodoListAnotherView",setup(s){const e=d(""),t=d([{id:1,title:"Do the dishes"},{id:2,title:"Take out the trash"},{id:3,title:"Mow the lawn"}]);let a=4;function c(){t.value.push({id:a++,title:e.value}),e.value=""}return(A,r)=>(n(),i(u,null,[o("form",{onSubmit:f(c,["prevent"])},[b,_(o("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>e.value=l),id:"new-todo",placeholder:"E.g. Feed the cat"},null,512),[[h,e.value]]),g],40,x),o("ul",null,[(n(!0),i(u,null,w(t.value,(l,m)=>(n(),T(k,{key:l.id,title:l.title,onRemove:B=>t.value.splice(m,1)},null,8,["title","onRemove"]))),128))])],64))}};export{$ as default};
