import{u as t,a as e}from"./products-CgIHsDBi.js";const s=t(),{searchDuplicates:c}=s,u=e(),{searchDuplicatesProducts:o}=u,i={checkStringName:r=>{if(!r.trim())return"Обязательное поле";if(c())return"Этот пользователь уже существует"},checkStringProduct:r=>{if(!r.trim())return"Обязательное поле";if(o())return"Этот продукт уже существует"},checkNumber:r=>r?r>=0?!0:"Стоимость должна быть больше 0":"Это поле обязательно"};export{i as r};