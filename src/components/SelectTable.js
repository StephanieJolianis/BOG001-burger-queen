import Table from "./Table";
//-----------------------------



const SelectTable = () =>{
    return (<div className="containerDivTables">
        <div className="containerTables">
        <p> {localStorage.getItem("waiter")}, por favor selecciona una mesa para continuar</p>
<Table />
        </div>
        </div>
    )
}


export default SelectTable;