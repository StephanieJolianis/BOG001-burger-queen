(this["webpackJsonpburger-queen-tmp"]=this["webpackJsonpburger-queen-tmp"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"breakfast":[{"id":1,"name":"Caf\xe9 americano","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2F9.png?alt=media&token=fa170f45-0ef9-447a-8f9c-447fee968b3a","price":5},{"id":2,"name":"Caf\xe9 con leche","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2F2.png?alt=media&token=940edc9e-4b25-4955-bae6-9a2ffd1ea24b","price":7},{"id":3,"name":"Sandwich de jam\xf3n y queso","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2F10.png?alt=media&token=2af8d40e-912b-442f-b848-18b14ace559a","price":10},{"id":4,"name":"Jugos","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2F6.png?alt=media&token=a4e81039-757c-48d4-ac0f-b24c65a81e73","price":0,"custom":{"type":[{"id":41,"name":"Naranja","price":7},{"id":42,"name":"Mandarina","price":7},{"id":43,"name":"Fresa","price":7},{"id":44,"name":"Mango","price":7}]}}],"lunch":[{"id":5,"name":"Hamburguesa Sencilla","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2FimgBurger.png?alt=media&token=ab3c5781-a9fd-45c1-aed1-b04a0558266b","price":10,"custom":{"protein":[{"id":51,"name":"Pollo","price":0},{"id":52,"name":"Carne","price":0},{"id":53,"name":"Veggie","price":0}],"adicional":[{"id":54,"name":"Queso","price":1},{"id":55,"name":"Huevo","price":1}]}},{"id":6,"name":"Hamburguesa Doble","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2Fhamburguesadoble.png?alt=media&token=657f6f64-ccf1-4738-9931-3d675653deb0","price":15,"custom":{"protein":[{"id":61,"name":"Pollo","price":0},{"id":62,"name":"Carne","price":0},{"id":63,"name":"Veggie","price":0}],"adicional":[{"id":64,"name":"Queso","price":1},{"id":65,"name":"Huevo","price":1}]}},{"id":7,"name":"Acompa\xf1amientos","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2Fpotatos.png?alt=media&token=93257333-34d0-41ba-97f6-87aeb1bf364c","custom":{"type":[{"id":71,"name":"Papas Fritas","price":5},{"id":72,"name":"Aros de Cebolla","price":5}]}}],"drinks":[{"id":8,"name":"Agua","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2F3.png?alt=media&token=f06bc155-20c1-47b1-b065-4f7ce108f779","price":0,"custom":{"type":[{"id":81,"name":"Agua 500ml","price":5},{"id":82,"name":"Agua 750ml","price":7}]}},{"id":9,"name":"Gaseosa","img":"https://firebasestorage.googleapis.com/v0/b/burguer-queen-f77ac.appspot.com/o/img%2F8.png?alt=media&token=74732875-d8b2-4de8-9de6-9d2bc3150d15","price":0,"custom":{"type":[{"id":91,"name":"Gaseosa 500ml","price":7},{"id":92,"name":"Gaseosa 750ml","price":10}]}}]}')},39:function(e){e.exports=JSON.parse('[{"id":1,"name":"Mesa 1","status":false},{"id":2,"name":"Mesa 2","status":false},{"id":3,"name":"Mesa 3","status":false},{"id":4,"name":"Mesa 4","status":false},{"id":5,"name":"Mesa 5","status":false},{"id":6,"name":"Mesa 6","status":false},{"id":7,"name":"Mesa 7","status":false},{"id":8,"name":"Mesa 8","status":false},{"id":9,"name":"Mesa 9","status":false},{"id":10,"name":"Mesa 10","status":false}]')},46:function(e,t,a){},47:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(4),r=a.n(n),i=a(37),s=a.n(i),d=(a(46),a(47),a.p+"static/media/logoBQLogin.5c6648fa.png"),o=a(12),l=a.n(o),u=a(18),m=a(16);a(35),a(51),a(52);m.a.initializeApp({apiKey:"AIzaSyCwrlBuYJwWaVLbtIJwEELHMRwcJYR0bL0",authDomain:"burguer-queen-f77ac.firebaseapp.com",databaseURL:"https://burguer-queen-f77ac.firebaseio.com",projectId:"burguer-queen-f77ac",storageBucket:"burguer-queen-f77ac.appspot.com",messagingSenderId:"600440303838",appId:"1:600440303838:web:a3a359ee03f71ca562924f"});var j={auth:m.a.auth(),database:m.a.firestore(),storage:m.a.storage().ref(),timeStamp:m.a.firestore.FieldValue.serverTimestamp(),arrayUnionFunction:function(e){return m.a.firestore.FieldValue.arrayUnion(e)},arrayRemoveFunction:function(e){return m.a.firestore.FieldValue.arrayRemove(e)},firebase:m.a},b=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.database.collection("orderCollection").doc().set(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.database.collection("orderCollection").get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.database.collection("users").doc(t).get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.database.collection("orderCollection").doc(t).update({status:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.auth.signInWithEmailAndPassword(t.email,t.password);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=a(5),v=function(){var e=Object(x.f)();return Object(c.jsx)("div",{className:"login-container",children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"login-container-logoForm",children:[Object(c.jsx)("div",{className:"login-img-logo",children:Object(c.jsx)("img",{src:d,alt:""})}),Object(c.jsxs)("form",{className:"form-group",onSubmit:function(t){t.preventDefault(),console.log("usuario",t.target.elements[0].value),console.log("password",t.target.elements[1].value),f({email:t.target.elements[0].value,password:t.target.elements[1].value}).then((function(t){O(t.user.uid).then((function(e){console.log("user rupaul",e.data()),localStorage.setItem("user",JSON.stringify(e.data()))})),e.push("/selecttable")})).catch((function(t){console.log("no valido",t),e.push("/login")}))},children:[Object(c.jsx)("label",{children:"Usuario"}),Object(c.jsx)("input",{name:"user",type:"name",placeholder:"Nombre",onChange:function(e){localStorage.setItem("waiter",e.target.value)},required:!0}),Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{name:"password",placeholder:"password",type:"password"}),Object(c.jsx)("button",{type:"submit",children:"INGRESAR"})]})]})})})},g=a(17),N=a(39),C=function(){var e=Object(x.f)();return N.map((function(t){return Object(c.jsx)("button",{className:"buttonTable",onClick:function(){return a=t.id,void e.push("/order/"+a);var a},children:t.name},t.id)}))},y=a(26),A=a(11),S=a(20),k=function(e){var t=S.breakfast.map((function(t){return Object(c.jsxs)("button",{onClick:function(){return function(t){var a=S.breakfast.filter((function(e){return e.id==t}));e.statusProduct(a),e.showModal(!0)}(t.id)},children:[Object(c.jsx)("div",{className:"divImgLunch",children:Object(c.jsx)("img",{className:"imgBtnLunch",src:t.img})}),Object(c.jsx)("p",{className:"nameLunch",children:t.name})]},t.id)}));return Object(c.jsx)("div",{className:"divLunch",children:t})},w=function(e){var t=S.lunch.map((function(t){return Object(c.jsxs)("button",{onClick:function(){return function(t){var a=S.lunch.filter((function(e){return e.id==t}));e.statusProduct(a),e.showModal(!0)}(t.id)},children:[Object(c.jsx)("div",{className:"divImgLunch",children:Object(c.jsx)("img",{className:"imgBtnLunch",src:t.img})}),Object(c.jsx)("p",{className:"nameLunch",children:t.name})]},t.id)})),a=S.drinks.map((function(t){return Object(c.jsxs)("button",{onClick:function(){return function(t){var a=S.drinks.filter((function(e){return e.id==t}));e.statusProduct(a),e.showModal(!0)}(t.id)},children:[Object(c.jsx)("div",{className:"divImgLunch",children:Object(c.jsx)("img",{className:"imgBtnLunch",src:t.img})}),Object(c.jsx)("p",{className:"nameLunch",children:t.name})]},t.id)}));return Object(c.jsxs)("div",{className:"divLunch",children:[t,a]})},I=function(e){var t=Object(n.useState)(""),a=Object(A.a)(t,2),r=a[0],i=a[1];return Object(c.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.modifyName({key:"client",value:r})}(t)},children:[Object(c.jsx)("input",{className:"inputClient",type:"text",name:"client",onChange:function(e){return i(e.target.value)}}),Object(c.jsx)("input",{type:"submit"})]})},P=function(){return JSON.parse(localStorage.getItem("user"))},E=function(e){var t=Object(x.f)(),a=P();a||t.push("/login");var n=0,r=e.detailOrder.itemsOrder.map((function(t,a){var r=0;t.custom.length&&(r=t.custom.map((function(e){return e.price})).reduce((function(e,t){return e+t})));var i=0;return i=t.price?r+t.price:r,n+=i*t.quantity,Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{className:"itemNameTable",children:t.name}),Object(c.jsxs)("div",{className:"divDetalleItem",children:[Object(c.jsx)("p",{className:"detalleItemTable",children:"Detalle:"}),t.custom.map((function(e,t){return Object(c.jsx)("div",{className:"divDetalleItem",children:Object(c.jsxs)("p",{className:"itemNameTableDetail",children:[" ",e.name," "]})},"custom-"+t)}))]})]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("button",{className:"btnSumaTble",onClick:function(){return e.modifyOrder({key:"subtract",value:t.id})},children:"-"}),t.quantity,Object(c.jsx)("button",{className:"btnSumaTble",onClick:function(){return e.modifyOrder({key:"add",value:t.id})},children:"+"}),Object(c.jsx)("button",{className:"btnDeleteTble",onClick:function(){return e.modifyOrder({key:"delete",value:t.id})},children:"Delete"})]}),Object(c.jsxs)("td",{children:["$",i]})]},"item-"+a)}));return Object(c.jsxs)("div",{className:"divOrderDetailBig",children:[Object(c.jsxs)("div",{className:"divHeadOrder",children:[Object(c.jsxs)("div",{className:"divHead1",children:[Object(c.jsx)("p",{className:"pdivHead1",children:"Mesero:"}),Object(c.jsx)("p",{className:"pdivHead2",children:a.displayName})]}),Object(c.jsxs)("div",{className:"divHead2",children:[Object(c.jsx)("p",{className:"pdivHead1",children:"Mesa:"})," ",Object(c.jsx)("p",{className:"pdivHead2",children:e.tableSelected})]})]}),Object(c.jsxs)("div",{className:"divClientOrder",children:[Object(c.jsx)("div",{className:"divClient1",children:Object(c.jsx)("p",{className:"pdivHead1",children:"Cliente:"})}),Object(c.jsx)("div",{className:"divClient2",children:Object(c.jsx)(I,{modifyName:e.modifyOrder})})]}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Item"}),Object(c.jsx)("th",{children:"Cant."}),Object(c.jsx)("th",{children:"Precio c/u"})]})}),Object(c.jsx)("tbody",{children:r})]}),Object(c.jsx)("div",{className:"divTotal",children:Object(c.jsxs)("p",{className:"pDivTotal",children:["Total:  $",n," USD"]})}),Object(c.jsxs)("div",{className:"btnFinalOrder",children:[Object(c.jsx)("button",{className:"btnEnviarCocina",onClick:function(){console.log("orden que se va a crear",e.detailOrder),b(e.detailOrder).then((function(){return t.push("/selecttable")}))},children:"Enviar a Cocina"}),Object(c.jsx)("button",{className:"btnCancelarOrden",onClick:function(){e.modifyOrder({key:"cancel",value:""}),t.push("/selecttable")},children:"Cancelar"})]})]})},R=function(e,t,a){var c={name:t.name,price:t.price,idItem:t.id,property:t.property},n=[];return n=a?e.custom.filter((function(e){return e.property!==t.property})):e.custom.filter((function(e){return e.idItem!==t.id})),0==e.custom.filter((function(e){return e.idItem===t.id})).length&&n.push(c),e.custom=n,e},q=function(e){var t,a,n,r={id:"",name:"",price:0,protein:[],adicional:[],extra:[],type:[]},i={id:"",idProduct:"",name:"",quantity:1,price:0,custom:[],preferency:""};e.detailProduct[0]&&(r.idProduct=e.detailProduct[0].id,r.name=e.detailProduct[0].name,r.price=e.detailProduct[0].price,i.name=r.name,i.price=r.price,i.idProduct=r.idProduct,e.detailProduct[0].custom&&(e.detailProduct[0].custom.protein&&(r.protein=e.detailProduct[0].custom.protein),e.detailProduct[0].custom.adicional&&(r.adicional=e.detailProduct[0].custom.adicional),e.detailProduct[0].custom.type&&(r.type=e.detailProduct[0].custom.type))),t=r.protein.map((function(e){return Object(c.jsx)("button",{onClick:function(){return R(i,{name:e.name,price:e.price,id:e.id,property:"protein"},!0)},children:e.name},e.id)})),a=r.adicional.map((function(e){return Object(c.jsxs)("button",{onClick:function(){return R(i,{name:e.name,price:e.price,id:e.id,property:"adicional"},!1)},children:[e.name,e.price]},e.id)})),n=r.type.map((function(e){return Object(c.jsxs)("button",{onClick:function(){return R(i,{name:e.name,price:e.price,id:e.id,property:"type"},!0)},children:[e.name,e.price]},e.id)}));var s=e.show&&Object(c.jsx)("div",{className:"overlay",children:Object(c.jsxs)("div",{className:"popup",children:[Object(c.jsx)("h1",{children:"Modal"}),Object(c.jsx)("h1",{children:i.name}),Object(c.jsx)("h3",{children:i.price}),Object(c.jsxs)("div",{children:[t,a,n]}),Object(c.jsx)("button",{onClick:function(){e.modifyOrder({key:"create",value:i}),e.close(!1)},children:"Agregar"}),Object(c.jsx)("button",{onClick:function(){return e.close(!1)},children:"Cancelar"})]})});return Object(c.jsx)("div",{children:s})},F=function(){var e=Object(n.useState)({}),t=Object(A.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),s=Object(A.a)(i,2),d=s[0],o=s[1],l=Object(x.g)().id,u=Object(n.useState)(!1),m=Object(A.a)(u,2),j=m[0],b=m[1],p=Object(n.useState)([]),O=Object(A.a)(p,2),h=O[0],f=O[1],v=Object(n.useState)(!0),g=Object(A.a)(v,2),N=g[0],C=g[1],S={date:Date.now(),itemsOrder:[],client:"",table:l,status:"COCINA",waiter:localStorage.getItem("waiter")},I=Object(n.useReducer)((function(e,t){var a={date:e.date,itemsOrder:Object(y.a)(e.itemsOrder),client:e.client,table:e.table,status:e.status,waiter:e.waiter},c=-1;switch(t.key){case"client":a.client=t.value;break;case"create":t.value.id=a.itemsOrder.length,a.itemsOrder.push(t.value),console.log("nueva orden",a.itemsOrder);break;case"delete":(c=a.itemsOrder.map((function(e){return e.id})).indexOf(t.value))>-1&&a.itemsOrder.splice(c,1);break;case"subtract":if((c=a.itemsOrder.map((function(e){return e.id})).indexOf(t.value))>-1){var n={id:a.itemsOrder[c].id,idProduct:a.itemsOrder[c].idProduct,name:a.itemsOrder[c].name,preferency:a.itemsOrder[c].preferency,price:a.itemsOrder[c].price,quantity:a.itemsOrder[c].quantity-1,custom:Object(y.a)(a.itemsOrder[c].custom)};n.quantity<=0?a.itemsOrder.splice(c,1):a.itemsOrder.splice(c,1,n)}break;case"add":if((c=a.itemsOrder.map((function(e){return e.id})).indexOf(t.value))>-1){var r={id:a.itemsOrder[c].id,idProduct:a.itemsOrder[c].idProduct,name:a.itemsOrder[c].name,preferency:a.itemsOrder[c].preferency,price:a.itemsOrder[c].price,quantity:a.itemsOrder[c].quantity+1,custom:Object(y.a)(a.itemsOrder[c].custom)};a.itemsOrder.splice(c,1,r)}break;case"cancel":a.date=Date.now(),a.itemsOrder=[],a.client=""}return console.log(a),a}),S),P=Object(A.a)(I,2),R=P[0],F=P[1];return Object(c.jsxs)("div",{className:"containerTaking",children:[Object(c.jsxs)("div",{className:"menuInTaking",children:[Object(c.jsx)("button",{className:N?"clicked":"noclicked",onClick:function(){C(!0),o(!0)},children:"Desayuno"}),Object(c.jsx)("button",{className:N?"noclicked":"clicked",onClick:function(){C(!1),o(!1)},children:"Almuerzo y Cena"}),Object(c.jsx)(q,{show:j,close:b,detailProduct:a,setDetailProduct:r,detailOrder:R,modifyOrder:F,stylesBtn:h,setStylesBtn:f}),d?Object(c.jsx)(k,{statusProduct:r,showModal:b}):Object(c.jsx)(w,{statusProduct:r,showModal:b})]}),Object(c.jsx)("div",{className:"orderInTaking",children:Object(c.jsx)(E,{detailOrder:R,modifyOrder:F,tableSelected:l})})]})},H=a(40),T=function(e){var t=Object(x.f)(),a=0,n="PROCESO",r=P();switch(e.showStatus){case"COCINA":n="PROCESO";break;case"PROCESO":n="SERVIR";break;case"SERVIR":n="ENTREGADA";break;case"ENTREGADA":case"CAJA":n="CAJA"}var i=Object(c.jsx)("div",{children:Object(c.jsx)("p",{className:"pSeleccionOrden",children:"Selecciona una orden"})});return e.order.itemsOrder&&(i=e.order.itemsOrder.map((function(i,s){var d=0;i.custom.length&&(d=i.custom.map((function(e){return e.price})).reduce((function(e,t){return e+t})));var o=0;return o=i.price?d+i.price:d,a+=o*i.quantity,Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"divHeadOrder",children:[Object(c.jsxs)("div",{className:"divHead1",children:[Object(c.jsx)("p",{className:"pdivHead1",children:"Mesero:"}),Object(c.jsx)("p",{className:"pdivHead2",children:r.displayName})]}),Object(c.jsxs)("div",{className:"divHead2",children:[Object(c.jsx)("p",{className:"pdivHead1",children:"Mesa:"})," ",Object(c.jsx)("p",{className:"pdivHead2",children:e.order.table})]})]}),Object(c.jsxs)("div",{className:"divHeadOrder",children:[Object(c.jsx)("p",{className:"pdivHead1",children:"Cliente:"}),Object(c.jsx)("p",{className:"pdivHead2",children:e.order.client})]})]}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Item"}),Object(c.jsx)("th",{children:"Cant."}),Object(c.jsx)("th",{children:"Precio c/u"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[i.name,Object(c.jsxs)("div",{className:"divDetalleItem",children:[Object(c.jsx)("p",{children:"Detalle:"}),i.custom.map((function(e,t){return Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:[" ",e.name," "]})},"custom-"+t)}))]})]},"item-"+i.id),Object(c.jsx)("td",{children:i.quantity}),Object(c.jsxs)("td",{children:["$",o]})]})})]},"item-"+s),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{children:["Total: $ ",a," USD"]}),Object(c.jsx)("button",{onClick:function(){h(e.order.id,n).then((function(){return t.push("/selecttable")}))},children:n})]})]})}))),Object(c.jsx)("div",{className:"divDetailOrder",children:i})},B=function(e){var t=Object(n.useState)(2),a=Object(A.a)(t,2),r=a[0],i=a[1];return"WAITER"==e.type?Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:2==r?"btnCocinaWaiter":"btnSinEstilo",onClick:function(){i(2),e.setStatusFilter("COCINA")},children:"En Cocina"}),Object(c.jsx)("button",{className:3==r?"btnProcesoWaiter":"btnSinEstilo",onClick:function(){i(3),e.setStatusFilter("PROCESO")},children:"En Progreso"}),Object(c.jsx)("button",{className:4==r?"btnServirWaiter":"btnSinEstilo",onClick:function(){i(4),e.setStatusFilter("SERVIR")},children:"Para Servir"}),Object(c.jsx)("button",{className:5==r?"btnEntregadaWaiter":"btnSinEstilo",onClick:function(){i(5),e.setStatusFilter("ENTREGADA")},children:"Orden Entregada"}),Object(c.jsx)("button",{className:6==r?"btnCajaWaiter":"btnSinEstilo",onClick:function(){i(6),e.setStatusFilter("CAJA")},children:"Enviado a caja"})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"btnCocinaChef",onClick:function(){return e.setStatusFilter("COCINA")},children:"En Cocina"}),Object(c.jsx)("button",{className:"btnProcesoChef",onClick:function(){return e.setStatusFilter("PROCESO")},children:"En Progreso"}),Object(c.jsx)("button",{className:"btnServirChef",onClick:function(){return e.setStatusFilter("SERVIR")},children:"Para Servir"})]})},L=function(){var e=Object(n.useState)([]),t=Object(A.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),s=Object(A.a)(i,2),d=s[0],o=s[1],m=Object(n.useState)("COCINA"),j=Object(A.a)(m,2),b=j[0],O=j[1];Object(n.useEffect)((function(){h()}),[]);var h=function(){var e=Object(u.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,p();case 3:(c=e.sent).docs.forEach((function(e){console.log(e.id," => ",e.data()),t.push(e.data())})),n=c.docs.map((function(e){return Object(H.a)({id:e.id},e.data())})),r(n),console.log(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=a.map((function(e,t){if(e.status==b)return Object(c.jsxs)("li",{className:"liDetalleOrder",children:[" ",e.id," Estado:",e.status,Object(c.jsx)("button",{className:"btnLidetalleOrden",onClick:function(){return o(e)},children:"Detalle"})]},"order-"+t)}));return Object(c.jsxs)("div",{className:"divOrderStatus",children:[Object(c.jsxs)("div",{className:"contentOrderStatus",children:[Object(c.jsx)("ul",{className:"ulOrderStatus",children:f}),Object(c.jsx)(T,{order:d,showStatus:b})]}),Object(c.jsx)(B,{type:"WAITER",setStatusFilter:O})]})},D=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Aqui La vista de Stock de productos"}),Object(c.jsx)("button",{onClick:function(){return window.location.href="/selecttable"},children:"Regresar a Selecci\xf3n de mesa"})]})},Q=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Aqui va la vista de cuenta cliente"}),Object(c.jsx)("button",{onClick:function(){return window.location.href="/selecttable"},children:"Regresar a Selecci\xf3n de mesa"})]})},M=function(){var e=Object(x.f)(),t=P();return console.log("usuario que retorna",t),t||e.push("/login"),Object(c.jsx)("div",{className:"containerDivTables",children:Object(c.jsxs)("div",{className:"containerTables",children:[Object(c.jsxs)("p",{children:[" ",t.displayName,", por favor selecciona una mesa para continuar"]}),Object(c.jsx)(C,{})]})})},U=function(e){e.cualquiercosa;return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"P\xe1gina no encontrada 404"})})},V=a.p+"static/media/logoLetras.65e147f4.png",z=a.p+"static/media/chef1.294509d6.png",G=a.p+"static/media/logout.70cbe3cb.png",J=function(){var e=Object(x.f)(),t=P();return t||e.push("/login"),Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"logoNav",src:V,alt:""}),Object(c.jsx)("img",{className:"waiterNav",src:t.photoURL,alt:""}),Object(c.jsx)("p",{className:"usernameNav",children:t.displayName}),Object(c.jsxs)("ul",{className:"ulNav",children:[Object(c.jsx)("li",{className:"liNav",children:Object(c.jsx)(g.b,{className:"linkNav",to:"/selecttable",children:Object(c.jsx)("img",{className:"tablesImgNav",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ4SURBVHgB7ZdvbBNlHMe/z/Xftna03RgtE/+wuSVsxCHZEmBmKpOBBh3BBBNFIolMYwyERN+gUeMLo3GvZEYTNSbEF/LCF/4hLrBgCApmkGXz3xTcAHV269j6d2t7vd7xe0pWaHdrIbkrAe6TbLddr899+rvf832eAgYGBga3DUw5hregBSbIUPAvJHzLHsbFudPhH7A4GRO2CgK8sgIBGsCU43QrbQnTiC+wNnw51WvaxaB007lF0BA9pDmTEQltyYTQz4ByaIwmj0uFKgvYAT2EOXpJQ5GxGjqhmzT41NQJPaV146aUNqOIbO9uxETAmveaZ9f7sKN9HO9/dRcOD1Si+/mzaFoezbpmnnRCssBqksBY/iSUUgzBGXP66LJLKLHKKITXlaDf+cd1lKQyR487oXpNVk4nUyYcPNWKqvIQHqwfRolFVH2Tb9qGDw9V4+TwIoiSgAcagti75T8scSUz18REhniSQQ+yKu0POzFwYXm62lAYOhqH5lU8EDVj76c1+Pv/ssy5I4MV8LpF7OkcQzHIkk7JAkTZBImO3ww1I07yTzSdzhI/cNSTJTzH6EQpCvHTsBPRmHoSel0immqu9O7QOQfGqf9bG0KZllGVXuoKoKbSj78mqtPivb+tQim1yIaGXzLiJ+jGatRVx1CIjw4tW3AidqyeypI+PFCRnohed4GJaDGlsH3NcXx8bAPGghWQqUW+HmzB1Iwd21p+honJsNtS8254Z1UCm1suohBb1/oRjatXujbnQ6+jCnuo+vwJ5KK6YZqaceCDvscwHnZlznWuOoX7qv9A1/56+INXqrWEBn37mfNorotkjaHnRFxwlzdN4j1HNyEcK8PdiyfRf8aFCd8ITEocL20eg82swElRxx+dWtzdEGkOr3iAfgQliq6eRppEwNPtIl7eNAihQI6rSfOeXqg95mil+Fy3IpTu6aFz5dhBi43Hnd0ieVfESnsUgXAKuz+phUWYxcY1TpwJrKQ+t2ALtUuhBSgXnh6FVkQPLUBcmqcHF+cTNFc6b6V901bs6qlHMGLBuztHcX9tHJ+feAh/+pbhcYrCjqtSJRe1SnORQvCJxyVHfKXpp3Lv0hjsOZG3oDR/0x6qsEzL9GvbLtBsDpMgMCtacfD0WvSP1mPjykF05uR4PmmtUG2PyZAFr39xT7rC7z03khHmlFlFPNV8kvYdDhz5vQkOWxyPrPgVxURV+ry/BJFZM/a/eJZaIjrvdS6+u/17fPbjemqVO65ZOt8uj/fuq0/+k/n/unZ5nBbK3O/ezC9iEmR0tfXhesi3y8tdqq95l6cleva08XWrWBjSxcKQLhZmCryd0AhJRpUosTcoQx0p+XLc0d9RgWFfSpYj0AhNg1RRwAK9wis06j6yddIxRMd33I/K3QzarQeapz+ZsUgf6iQJHpuAkbIO+LQUNjC4FbkEbyi5RVieLpEAAAAASUVORK5CYII="})})}),Object(c.jsx)("li",{className:"liNav1",children:Object(c.jsx)(g.b,{className:"linkNav",to:"/status",children:Object(c.jsx)("img",{className:"statusImgNav",src:z})})})]}),Object(c.jsx)(g.b,{to:"/login",className:"logout",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"logoutNav",src:G}),Object(c.jsx)("p",{className:"cerrarSesion",children:"Cerrar Sesi\xf3n"})]})})]})},K=function(e){return Object(c.jsxs)("div",{className:"divLayout",children:[Object(c.jsx)("div",{className:"divNav",children:Object(c.jsx)(J,{})}),Object(c.jsx)("div",{className:"divChildren",children:e.children})]})},W=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(g.a,{children:Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/login",component:v}),Object(c.jsx)(x.a,{path:"/",children:Object(c.jsxs)(K,{children:[Object(c.jsx)(x.a,{exact:!0,path:"/table",component:C}),Object(c.jsx)(x.a,{exact:!0,path:"/order/:id",component:F}),Object(c.jsx)(x.a,{exact:!0,path:"/status",component:L}),Object(c.jsx)(x.a,{exact:!0,path:"/bill",component:Q}),Object(c.jsx)(x.a,{exact:!0,path:"/selecttable",component:M}),Object(c.jsx)(x.a,{exact:!0,path:"/stock",component:D})]})}),Object(c.jsx)(x.a,{path:"*",component:U})]})})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),X()}},[[57,1,2]]]);
//# sourceMappingURL=main.a19f0619.chunk.js.map