import Client from "./Client";
import { useHistory } from "react-router";
import { createOrder } from "../functions-firebase.js";


const OrderDetail = (props)=>{
    let history = useHistory();
    let totalAux = 0;
    let detailItem = props.detailOrder.itemsOrder.map((item,index)=>{
        let itemPrice = item.custom.map((itemCustom)=>{
            return itemCustom.price;
        }).reduce((previus, current) =>{ return previus + current });
        let totalItem = 0
        if(item.price){
            totalItem = itemPrice + item.price;
        }else {
            totalItem = itemPrice;
        }
        totalAux = totalAux + (totalItem * item.quantity);
        return (
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
            </tr>
                </tbody>
        </table>)
    })

    return(<div>
        <div>
        <div><h3>Mesero:</h3><p>{localStorage.getItem("waiter")}</p></div>
        <div><h3>Mesa:</h3> <p>{props.tableSelected}</p></div>
        </div>
        <div><h3>Cliente:</h3>
        <Client modifyName={props.modifyOrder}/>
        </div>
        {detailItem}
        <p>Total: $ {totalAux} USD</p>
        <button onClick={()=>{
            createOrder(props.detailOrder).then(() =>history.push('/selecttable'));
            }} >Enviar a Cocina</button>
        <button onClick={()=>{
            props.modifyOrder({key:"cancel", value:""});
            history.push('/selecttable');
            }}>Cancelar</button>
    </div>);


}

export default OrderDetail;
