import React, { useState, useReducer } from 'react';
import { useParams } from "react-router-dom";
//----------Componentes------------------------------
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import OrderDetail from "./OrderDetail";
import Modal from "./Modal";


const TakingOrder = () => {
    // Estado que recibe el producto seleccionado en el menu y se le pasa al modal
    const [detailProduct, setDetailProduct] = useState({});
    // Muestra y oculta los menus seleccionados
    const [show, setShow] = useState(true);
    // Parametro que se pasa a través del router para identificar la mesa seleccionada 
    const { id } = useParams();
    //Estado que se modifica al seleccionar un producto en el menu y se le pasa al modal para que se visualice
    const [ open, setOpen ] = useState(false);
    // Captura el objeto creado en el modal y es recibido en OrderDetail
    //const [ order, setOrder ] = useState([]);
    // Estado para los estilos dinámicos de los botones del modal
    const [styleBtn, setStyleBtn] = useState([]);
    //--------------------------------------------------------------------------->
    const updateOrder = (state, action) =>{
        const ordenLocal = {
            id: state.id,
            date: state.date,
            itemsOrder: [...state.itemsOrder],
            client: state.client,
            table: state.table,
            waiter: state.waiter
        };
        let itemIndex = -1;
        switch (action.key) {
            case "client":
                ordenLocal.client = action.value;
                break;
            case "create":
                action.value.id = ordenLocal.itemsOrder.length;
                ordenLocal.itemsOrder.push(action.value);
                console.log("nueva orden", ordenLocal.itemsOrder);
                break;
            case "delete":
                itemIndex = ordenLocal.itemsOrder.map((element)=>{return element.id}).indexOf(action.value);
                if (itemIndex>-1){
                    ordenLocal.itemsOrder.splice(itemIndex, 1);
                }
                break;
            case "subtract":
                itemIndex = ordenLocal.itemsOrder.map((element)=>{return element.id}).indexOf(action.value);
                if (itemIndex>-1){
                    let itemCopy = {
                        id: ordenLocal.itemsOrder[itemIndex].id,
                        idProduct: ordenLocal.itemsOrder[itemIndex].idProduct,
                        name: ordenLocal.itemsOrder[itemIndex].name,
                        preferency: ordenLocal.itemsOrder[itemIndex].preferency,
                        price: ordenLocal.itemsOrder[itemIndex].price,
                        quantity: ordenLocal.itemsOrder[itemIndex].quantity -1,
                        custom: [...ordenLocal.itemsOrder[itemIndex].custom]
                    }
                    if(itemCopy.quantity <= 0)
                    ordenLocal.itemsOrder.splice(itemIndex, 1);
                    else
                    ordenLocal.itemsOrder.splice(itemIndex, 1, itemCopy);
                }
                break;
            case "add":
                itemIndex = ordenLocal.itemsOrder.map((element)=>{return element.id}).indexOf(action.value);
                if (itemIndex>-1){
                    let itemCopy = {
                        id: ordenLocal.itemsOrder[itemIndex].id,
                        idProduct: ordenLocal.itemsOrder[itemIndex].idProduct,
                        name: ordenLocal.itemsOrder[itemIndex].name,
                        preferency: ordenLocal.itemsOrder[itemIndex].preferency,
                        price: ordenLocal.itemsOrder[itemIndex].price,
                        quantity: ordenLocal.itemsOrder[itemIndex].quantity + 1,
                        custom: [...ordenLocal.itemsOrder[itemIndex].custom]
                    }
                    ordenLocal.itemsOrder.splice(itemIndex, 1, itemCopy);
                }
                break;
            default:
                break;
        }
        console.log(ordenLocal);
        return ordenLocal;
    }

    const orderInitial = {
        date: Date.now(),
        itemsOrder: [],
        client:"",
        table:id,
        waiter:localStorage.getItem("waiter")
    }

    const [order, setOrder] = useReducer(updateOrder, orderInitial);

    return (<div className="containerTaking">
        <div className="menuInTaking">
        <button onClick= {()=>{setShow(true)}}>Desayuno</button>
        <button onClick= {()=>{setShow(false)}}>Almuerzo y Cena</button>
        <Modal show={open} close={setOpen} detailProduct={detailProduct} setDetailProduct={setDetailProduct} detailOrder={order} modifyOrder={setOrder} stylesBtn={ styleBtn } setStylesBtn={ setStyleBtn }/>
        {show ? (<Breakfast statusOrder = {setDetailProduct} />) : (<Lunch statusProduct = {setDetailProduct} showModal={setOpen}/>) }
        </div>
        <div className="orderInTaking">
                <OrderDetail detailOrder={order} modifyOrder={setOrder} tableSelected={id}/>
        </div>
            </div>);
}


export default TakingOrder;