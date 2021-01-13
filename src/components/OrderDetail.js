import Client from "./Client";
import { useHistory } from "react-router";
import { createOrder } from "../functions-firebase.js";
import { getDataUser } from "../Utils.js";

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
                <td>{item.name}
                <div className="divDetalleItem"><p>Detalle:</p>
                {item.custom.map((itemCustom,idxItem)=>{
                return(
                <div key={"custom-"+idxItem}>
                <p> { itemCustom.name } </p></div>)})}</div>
                </td>
                <td><button onClick={()=>props.modifyOrder({key:"subtract", value:item.id})}>-</button>
                {item.quantity} 
                <button onClick={()=>props.modifyOrder({key:"add", value:item.id})}>+</button>
                <button onClick={()=>props.modifyOrder({key:"delete", value:item.id})}>Delete</button>
                </td>
                <td>${totalItem}</td>
            </tr>)
    })

    return(<div>
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
        
        <p>Total: $ {totalAux} USD</p>
        <button onClick={()=>{
            console.log('orden que se va a crear',props.detailOrder)
            createOrder(props.detailOrder).then(() =>history.push('/selecttable'));
            }} >Enviar a Cocina</button>
        <button onClick={()=>{
            props.modifyOrder({key:"cancel", value:""});
            history.push('/selecttable');
            }}>Cancelar</button>
    </div>);


}

export default OrderDetail;
