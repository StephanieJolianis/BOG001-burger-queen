import data from "../data/dataTables.json";
import { useHistory } from "react-router";
// import { Redirect } from "react-router-dom";
//-----------------------------------------


const Table = () => {
    let history = useHistory();

    const TakeOrder = (id) =>{
        history.push('/order/' + id);
    }
    return(
    data.map((table)=>{
    return (
    <button className="buttonTable" onClick={()=>TakeOrder(table.id) } key={table.id}>
        {table.name}
    </button>)

    }));
}




export default Table;