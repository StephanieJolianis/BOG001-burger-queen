import Table from "./Table";
//-----------------------------



const SelectTable = () =>{
    let user = JSON.parse(localStorage.getItem("user"));
    return (<div className="containerDivTables">
        <div className="containerTables">
        <p> {user.displayName}, por favor selecciona una mesa para continuar</p>
<Table />
        </div>
        </div>
    )
}


export default SelectTable;