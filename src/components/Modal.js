import { withRouter } from "react-router";
import React, { useState } from 'react';

// -------- Modal ------------->
const Modal = (props) => {
    //let order = props.detailOrder;
    // let setStylesBtns = props.setStylesBtn;
    // let stylesBtns = props.stylesBtn;
    let DetailProtein=[];
    let DetailAdicional=[];
    let DetailType = [];


    //----------- objeto para construir el modal --------->
    const objectProps = {
        id: "",
        name: "",
        price:0,
        protein:[],
        adicional:[],
        extra:[],
        type:[]
    }

    //------------- Objeto para enviar a la orden--------->
    const objectOrder = {
        id:"",
        idProduct:"",
        name:"",
        quantity:1,
        price:0,
        custom:[],
        preferency:""
    }


    if(props.detailProduct[0]){
        objectProps.idProduct = props.detailProduct[0].id;
        objectProps.name = props.detailProduct[0].name;
        objectProps.price = props.detailProduct[0].price;
        objectOrder.name = objectProps.name;
        objectOrder.price = objectProps.price;
        objectOrder.idProduct = objectProps.idProduct;
        if(props.detailProduct[0].custom){
            if(props.detailProduct[0].custom.protein)
            objectProps.protein = props.detailProduct[0].custom.protein;

            if(props.detailProduct[0].custom.adicional)
                objectProps.adicional = props.detailProduct[0].custom.adicional;

            if(props.detailProduct[0].custom.type)
                objectProps.type = props.detailProduct[0].custom.type;
        }
    }

    const [changeColorBtn, setChangeColorBtn] = useState(1);
    const [changeColorBtn1, setChangeColorBtn1] = useState(1);
    const [changeColorBtn2, setChangeColorBtn2] = useState(1);


    DetailProtein = objectProps.protein.map((item)=>{
        return (<button className={ changeColorBtn==item.id ? "btnModalClicked" : "btnModalUnClicked" }  onClick={()=> { setChangeColorBtn(item.id) ;addCustom(objectOrder, {name: item.name, price: item.price, id: item.id, property: "protein"}, true)}}  key={item.id} >{item.name}</button>)
    })



    
    const changeDoubleClick = (algo) =>{
        let doubleClickColor = changeColorBtn1!== 1 ? 1 : algo
        return doubleClickColor;
    }

    DetailAdicional = objectProps.adicional.map((item)=>{
        return (<button  className={ changeColorBtn1==item.id ? "btnModalClicked" : "btnModalUnClicked" }onClick={()=> {setChangeColorBtn1(changeDoubleClick(item.id)) ;addCustom(objectOrder, {name: item.name, price: item.price, id: item.id, property: "adicional"}, false)}}key={item.id}>{item.name}{item.price}</button>)
    })

    DetailType = objectProps.type.map((item)=>{
        return (<button className={ changeColorBtn2==item.id ? "btnModalClicked" : "btnModalUnClicked" }onClick={()=> {setChangeColorBtn2(item.id) ;addCustom(objectOrder, {name: item.name, price: item.price, id: item.id, property: "type"}, true)}} key={item.id}>{item.name}{item.price}</button>)
    })

    let conditionProtein = objectProps.protein.length !== 0 ? "Selecciona" : "";
    let conditionAdd = objectProps.adicional.length !== 0 ? "Adicional" : "";
    let conditionType = objectProps.type.length !== 0 ? "Selecciona" : "";


    const DivModal = props.show && ( 
    <div className="overlay">
        <div className="popup">
            <p className="nameItemModal">{objectOrder.name}</p>
            <p className="priceItemModal">{objectOrder.price}</p>
            <p className="pSeleccionModal">{conditionProtein}</p>
            <div>
                {DetailProtein}
                <p className="pSeleccionModal">{conditionAdd}</p>
                {DetailAdicional}
                <p className="pSeleccionModal">{conditionType}</p>
                {DetailType}
            </div>
                <button className="btnAddModal" onClick={()=> {
                    props.modifyOrder({key:"create", value:objectOrder})
                    // order.push(objectOrder);
                    // props.setDetailProduct(order);
                    props.close(false);
                }}>Agregar</button>
                <button className="btnCancelModal" onClick={()=> props.close(false)}>Cancelar</button>
        </div>
    </div>);

    return(
    <div>
        {DivModal}
    </div>
)}

//----------- Función añadir preferencia ------------->

const addCustom=(orderObject, customFood, selSingle)=>{
    let newObject={
        name:customFood.name,
        price:customFood.price,
        idItem: customFood.id,
        property: customFood.property
    }

    let filterItem = [];
    if (selSingle)
    filterItem = orderObject.custom.filter(item => item.property !== customFood.property);
    else
    filterItem = orderObject.custom.filter(item => item.idItem !== customFood.id);
    
    const filterId = orderObject.custom.filter(item => item.idItem === customFood.id);
    if(filterId.length == 0){
        filterItem.push(newObject);
    }

    orderObject.custom = filterItem;
    return orderObject;
}


// ---------- Style Buttons -------------->
// const styleButtonCustom = (boolean, styleBtn) => {
//     console.log(styleBtn);
//     console.log(boolean);
//     if(boolean==false){
//         styleBtn.background = "red";
//         boolean = true;
//     }else{
//         styleBtn.background = "yellow";
//         boolean=false;
//     }
//     return styleBtn;
// }

// const styleButtonCustom = (algo) => {
// if(algo.background == "yellow"){
//     algo.background = "red"
// }else{
//     algo.background = "yellow"
// }
// return algo;
// }



export default Modal; 