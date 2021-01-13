import Table from "./Table";
import { useHistory } from "react-router";
import { getDataUser } from "../Utils.js";
//-----------------------------



const SelectTable = () =>{
    let history = useHistory();
    let user =  getDataUser();
    console.log('usuario que retorna', user)
    if (!user)
        history.push('/login');
    return (<div className="containerDivTables">
        <div className="containerTables">
        <p> {user.displayName}, por favor selecciona una mesa para continuar</p>
<Table />
        </div>
        </div>
    )
}


export default SelectTable;