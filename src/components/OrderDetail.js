import Client from "./Client";
import { useHistory } from "react-router";
import { createOrder } from "../functions-firebase.js";
import { getDataUser } from "../Utils.js";
import logoSuma from "../img/plus.png"

const OrderDetail = (props)=>{
    let history = useHistory();
    let userData = getDataUser();
    if (!userData)
        history.push('/login');
    let totalAux = 0;
    let detailItem = props.detailOrder.itemsOrder.map((item,index)=>{
        //console.log('este sera el item de la discordia?',item.custom);
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
        return (
            <tr key={"item-" + index}>
                <td><p className="itemNameTable">{item.name}</p>
                <div className="divDetalleItem"><p className="detalleItemTable">Detalle:</p>
                {item.custom.map((itemCustom,idxItem)=>{
                return(
                <div className="divDetalleItem" key={"custom-"+idxItem}>
                <p className="itemNameTableDetail"> { itemCustom.name } </p></div>)})}</div>
                </td>
                <td><button className="btnSumaTble" onClick={()=>props.modifyOrder({key:"subtract", value:item.id})}>-</button>  
                {item.quantity} 
                <button className="btnSumaTble" onClick={()=>props.modifyOrder({key:"add", value:item.id})}>+</button>
                <button className="btnDeleteTble" onClick={()=>props.modifyOrder({key:"delete", value:item.id})}>Delete</button>
                </td>
                <td>${totalItem}
                </td>
            </tr>)
    })

    return(<div className="divOrderDetailBig">
        <div className="divHeadOrder">
        <div className="divHead1"><p className="pdivHead1">Mesero:</p><p className="pdivHead2">{userData.displayName}</p></div>
        <div className="divHead2"><p className="pdivHead1">Mesa:</p> <p className="pdivHead2">{props.tableSelected}</p></div>
        </div>
        <div className="divClientOrder">
            <div className="divClient1"><p className="pdivHead1">Cliente:</p></div>
            <div className="divClient2"><Client modifyName={props.modifyOrder}/></div>
        </div>
        <table>
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Cant.</th>
                    <th>Precio c/u</th>
                    </tr>
                </thead>
                <tbody>
                {detailItem}
                </tbody>
                
        </table>
        <div className="divTotal"><p className="pDivTotal">Total:  ${totalAux} USD</p></div>
        <div className="btnFinalOrder">
        <button className="btnEnviarCocina" onClick={()=>{
            createOrder(props.detailOrder).then(() =>history.push('/selecttable'));
            }} >Enviar a Cocina</button>
        <button className="btnCancelarOrden" onClick={()=>{
            props.modifyOrder({key:"cancel", value:""});
            history.push('/selecttable');
            }}>Cancelar</button>
        </div>
    </div>);


}

export default OrderDetail;
