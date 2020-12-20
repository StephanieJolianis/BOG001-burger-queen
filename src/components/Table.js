import data from "../data/dataTables.json";
// import { Redirect } from "react-router-dom";
//-----------------------------------------


const Table = () => {
return(
data.map((table)=>{
return (
<button className="buttonTable" onClick={()=>TakeOrder(table.id) } key={table.id}>
    {table.name}
</button>)

}));
}

const TakeOrder = (id) =>{
    window.location.href = "/order/" + id;
}


export default Table;