import{i as y,j as H,r as o,o as a,c as _,w as t,a as e,u as d,e as P,t as N,f as h,F,h as z,g as E,p as J,k as K,l as $,b as Q,d as R}from"./index-Cq_syG26.js";import{a as M,u as W}from"./products-DxJ9vKC2.js";import{r as D}from"./commonValidators-Br4sVbup.js";import{_ as X,a as Y}from"./BackBtn-dW8mpQol.js";const Z=s=>(J("data-v-78193229"),s=s(),K(),s),ee={key:1,class:"ml-3"},te=Z(()=>$("div",{style:{width:"100%","text-align":"start"}}," Кто ел: ",-1)),oe={__name:"ListItemProduct",props:{item:Object},setup(s){const V=M(),{removeProduct:m,getProductsFromLocaleStorage:g,updateProduct:x}=V,w=W(),{users:f,getUsersFromLocaleStorage:S}=w,b=s,r=y(!1),i=y("mdi-chevron-down");function c(){r.value=!r.value,i.value=r.value?"mdi-chevron-up":"mdi-chevron-down"}const p=y([]),I=l=>{x({...b.item,usersAte:l})},C=f.map(l=>l.name),v=y(""),U=l=>{x({...b.item,userPayer:l})};return H(()=>{S(),g()!=null&&g().forEach(l=>{l.id==b.item.id&&(v.value=l.userPayer,p.value=l.usersAte)})}),(l,u)=>{const j=o("v-text-field"),k=o("v-col"),A=o("v-btn"),L=o("v-row"),B=o("v-chip"),O=o("v-select"),T=o("v-checkbox"),q=o("v-list-item");return a(),_(q,null,{default:t(()=>[e(L,{align:"center",justify:"center"},{default:t(()=>[e(k,{cols:"5"},{default:t(()=>[e(j,{modelValue:s.item.name,"onUpdate:modelValue":u[0]||(u[0]=n=>s.item.name=n),label:"Название",placeholder:"Введите название позиции",variant:"underlined",rules:[d(D).checkStringProduct]},null,8,["modelValue","rules"])]),_:1}),e(k,{cols:"5"},{default:t(()=>[e(j,{modelValue:s.item.price,"onUpdate:modelValue":u[1]||(u[1]=n=>s.item.price=n),label:"Цена",placeholder:"Введите цену продукта",variant:"underlined",type:"number",rules:[d(D).checkNumber]},null,8,["modelValue","rules"])]),_:1}),e(k,{cols:"1"},{default:t(()=>[e(A,{icon:"mdi-window-close",density:"compact",variant:"text",onClick:u[2]||(u[2]=n=>d(m)(s.item.id))})]),_:1}),e(k,{cols:"1"},{default:t(()=>[e(A,{size:"x-large",density:"compact",variant:"text",onClick:c,icon:i.value},null,8,["icon"])]),_:1})]),_:1}),v.value!=""?(a(),_(L,{key:0,class:"mb-5 ml-1"},{default:t(()=>[e(B,{density:"comfortable",size:"small",color:"green"},{default:t(()=>[P(N(v.value),1)]),_:1}),(a(!0),h(F,null,z(p.value,n=>(a(),_(B,{key:n.id,density:"comfortable",size:"small"},{default:t(()=>[P(N(n.name),1)]),_:2},1024))),128))]),_:1})):E("",!0),r.value?(a(),h("div",ee,[e(L,null,{default:t(()=>[e(O,{modelValue:v.value,"onUpdate:modelValue":[u[3]||(u[3]=n=>v.value=n),U],variant:"solo-inverted",style:{width:"100%"},label:"Платит",items:d(C)},null,8,["modelValue","items"]),te,(a(!0),h(F,null,z(d(f),n=>(a(),_(T,{key:n.id,class:"pl-1 checkbox",modelValue:p.value,"onUpdate:modelValue":[u[4]||(u[4]=G=>p.value=G),I],label:n.name,value:n},null,8,["modelValue","label","value"]))),128))]),_:1})])):E("",!0)]),_:1})}}},le=X(oe,[["__scopeId","data-v-78193229"]]),ce={__name:"PageAddProducts",setup(s){const V=M(),{products:m,addProductInList:g,saveProductsForm:x,summPrice:w,getProductsFromLocaleStorage:f,searchDuplicatesProducts:S}=V,b=Q(()=>{const r=m.some(c=>c.name.trim()==""||c.price.trim()==""||c.price<=0),i=S();return r||i});return f()!=null&&f().forEach(r=>{m.findIndex(c=>c.id===r.id)===-1&&m.push(r)}),(r,i)=>{const c=o("v-col"),p=o("v-btn"),I=o("v-row"),C=o("v-list"),v=o("v-card"),U=o("v-form");return a(),_(U,{onSubmit:i[0]||(i[0]=R(()=>{},["prevent"])),class:"mt-5"},{default:t(()=>[e(v,{class:"mx-auto text-center","max-width":"600px","min-height":"100px"},{default:t(()=>[e(I,{"no-gutters":"",align:"center",justify:"center"},{default:t(()=>[e(c,{cols:"auto"},{default:t(()=>[e(Y,{url:"/"})]),_:1}),e(c,null,{default:t(()=>[e(p,{block:"","prepend-icon":"mdi-plus",density:"comfortable",variant:"outlined",size:"large",onClick:d(g)},{default:t(()=>[P(" Добавить позицию ")]),_:1},8,["onClick"])]),_:1})]),_:1}),e(C,null,{default:t(()=>[(a(!0),h(F,null,z(d(m),l=>(a(),_(le,{key:l.id,item:l},null,8,["item"]))),128))]),_:1}),$("div",null,"Общий счет: "+N(d(w)()),1),d(m).length!=0?(a(),_(p,{key:0,class:"mt-2",block:"",density:"comfortable",type:"submit",size:"large",onClick:d(x),disabled:b.value},{default:t(()=>[P(" Перейти к результатам ")]),_:1},8,["onClick","disabled"])):E("",!0)]),_:1})]),_:1})}}};export{ce as default};