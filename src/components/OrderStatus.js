import { getOrders } from "../functions-firebase.js";
import React, { useState, useEffect } from 'react';
import OrderResume from './OrderResume.js';
import SlideFoot from './SlideFoot.js';
import { useHistory } from "react-router";
import { getDataUser } from "../Utils.js";

const OrderStatus = () => {
    const [orderList, setOrderList] = useState([]);
    const [detailOrder, setDetailOrder] = useState({});
    const [showStatus, setShowStatus] = useState('COCINA');
    let history = useHistory();
    let user = getDataUser();
    if (!user)
        history.push('/login');

    useEffect(() => {
        obtenerDatos();
    }, [])

    const obtenerDatos = async () => {
            const data = await getOrders();
            let arrayAux = data.docs.map(doc => 
                ({id: doc.id, ...doc.data()})
                );
                
            setOrderList(arrayAux);
        }

    
    let listOrders = orderList.map((ord, idx) => {
        if (ord.status == showStatus)
        return(
            <li className="liDetalleOrder" key={"order-"+idx}> Orden # { ord.number } Estado:{ord.status} 
            <button className="btnLidetalleOrden" onClick={()=>setDetailOrder(ord)}>Detalle</button>
            </li>
            )});


    return (<div className="divOrderStatus">
        <div className="contentOrderStatus">
            <ul className="ulOrderStatus">
                {listOrders}
            </ul>
                <OrderResume order={detailOrder} showStatus={showStatus}></OrderResume>
                    </div>
                <SlideFoot type={user.type} setStatusFilter={setShowStatus}></SlideFoot>
            </div>);

}
export default OrderStatus;