import { getOrders } from "../functions-firebase.js";
import React, { useState, useEffect } from 'react';
import OrderResume from './OrderResume.js';
import SlideFoot from './SlideFoot.js';

const OrderStatus = () => {
    const [orderList, setOrderList] = useState([]);
    const [detailOrder, setDetailOrder] = useState({});
    const [showStatus, setShowStatus] = useState('COCINA');

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
            let arrayAux2 = data.docs.map(doc => 
                ({id: doc.id, ...doc.data()})
                );
                
            setOrderList(arrayAux2);
            console.log(orderList);
        }

    
    
    let listOrders = orderList.map((ord, idx) => {
        if (ord.status == showStatus)
        return(
            <li key={"order-"+idx}> { ord.id} Estado:{ord.status} 
            <button onClick={()=>setDetailOrder(ord)}>Detalle</button>
            </li>
            )});


    return (<div className="divOrderStatus">
        <div className="contentOrderStatus">
            <ul className="ulOrderStatus">
                {listOrders}
            </ul>
                <OrderResume order={detailOrder} showStatus={showStatus}></OrderResume>
                    </div>
                <SlideFoot type="WAITER" setStatusFilter={setShowStatus}></SlideFoot>
            </div>);

}
export default OrderStatus;