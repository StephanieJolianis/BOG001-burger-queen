import { getOrders } from "../functions-firebase.js";
import React, { useState, useEffect } from 'react';
import OrderResume from './OrderResume.js';
const OrderStatus = () => {
    const [orderList, setOrderList] = useState([]);
    const [detailOrder, setDetailOrder] = useState({});

    useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
            const arrayAux = [];
            const data = await getOrders();
            // getOrders().then(data =>{
            //     data.docs.forEach(function(doc) {
            //     //doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            //     arrayAux.push(doc);
            // });
            // setOrderList(arrayAux)

            data.docs.forEach(doc => {
                console.log(doc.id, " => ", doc.data());
                arrayAux.push(doc.data());
            });

            // arrayAux2 = data.docs.map(doc => 
            //     ({id: doc.id,
            //     client: doc.data().client,
            //     date: doc.data().date,
            //     itemsOrder: doc.data().itemsOrder,
            //     status: doc.data().status,
            //     table: doc.data().table,
            //     waiter: doc.data().waiter})
            //     );

            let arrayAux2 = data.docs.map(doc => 
                ({id: doc.id, ...doc.data()})
                );
                
            setOrderList(arrayAux2);
            console.log(orderList);
        }

    let listOrders = orderList.map((ord, idx) => {
        return(
            <li key={"order-"+idx}> { ord.id} Estado:{ord.status} 
            <button onClick={()=>setDetailOrder(ord)}>Detalle</button>
            </li>
            // <div key={"order-"+idx}>
            // <p> ID: { ord.id}</p> <p>Estado:{ord.status} </p>
            
            // </div>
            )});


    return (<div>
                <p>Vista Estados de pedidos</p>
                <ul>
                {listOrders}
                </ul>
                <OrderResume order={detailOrder}></OrderResume>
                <button onClick={()=>window.location.href = "/selecttable" }>Regresar a Selección de mesa</button>
            </div>);
}
export default OrderStatus;

// client: "fgffgfd"
// date: 1608495355355
// itemsOrder: [{…}]
// status: "COCINA"
// table: "8"
// waiter: "Stephanie"