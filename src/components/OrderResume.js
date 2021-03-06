import { Switch, useHistory } from "react-router";
import React, { useState, useEffect } from 'react';
import { udpOrderStatus } from "../functions-firebase.js";
import { getDataUser } from "../Utils.js";

const OrderResume = (props) => {
    let history = useHistory();
    let totalAux = 0;
    let nextStatus = 'PROCESO';
    let user =  getDataUser();
    switch (props.showStatus) {
        case 'COCINA':
            nextStatus = 'PROCESO';
            break;
        case 'PROCESO':
            nextStatus = 'SERVIR';
            break;
        case 'SERVIR':
            nextStatus = 'ENTREGADA';
            break;
        case 'ENTREGADA':
            nextStatus = 'CAJA';
            break;
        case 'CAJA':
            nextStatus = 'CAJA';
            break;            
        default:
            break;
    }  
    let detailItem = (<div><p className="pSeleccionOrden">Selecciona una orden</p></div>);
    if(props.order.itemsOrder){
        detailItem =  props.order.itemsOrder.map((item,index)=>{
            let itemPrice = 0;
            if(item.custom.length){
            itemPrice = item.custom.map((itemCustom)=>{
                return itemCustom.price;
            }).reduce((previus, current) =>{ return previus + current });
        }
            let totalItem = 0
            if(item.price){
                totalItem = itemPrice + item.price;
            }else {
                totalItem = itemPrice;
            }
            totalAux = totalAux + (totalItem * item.quantity);
            return (<div>
                <div>
                    <div className="divHeadOrder">
                    <div className="divHead1"><p className="pdivHead1">Mesero:</p><p className="pdivHead2">{user.displayName}</p></div>
                    <div className="divHead2"><p className="pdivHead1">Mesa:</p> <p className="pdivHead2">{props.order.table}</p></div>
                    </div>
        <div className="divHeadOrder"><p className="pdivHead1">Cliente:</p><p className="pdivHead2">{props.order.client}</p></div>
    </div>
                <table key={"item-" + index}>
                    <thead>
                        <tr>
                        <th>Item</th>
                        <th>Cant.</th>
                        <th>Precio c/u</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td key={"item-" + item.id}>{item.name}
                                <div className="divDetalleItem"><p>Detalle:</p>
                                {item.custom.map((itemCustom,idxItem)=>{
                                return(
                                <div key={"custom-"+idxItem}>
                                <p> { itemCustom.name } </p></div>)})}</div>
                            </td>
                            <td>
                                {item.quantity} 
                            </td>
                            <td>${totalItem}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                <p>Total: $ {totalAux} USD</p>
                <button onClick={()=> {
            udpOrderStatus(props.order.id, nextStatus).then(() =>history.push('/selecttable'));
            }} >{nextStatus}</button>
                </div></div>
            );
        });
    }
    return(<div className="divDetailOrder">
{detailItem}
    </div>
        );
}

export default OrderResume;