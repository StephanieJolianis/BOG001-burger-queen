import dataMenu from "../data/dataMenu.json";

const Breakfast = (props) =>{
    const itemProductBreakfast = (id)=>{
        const result = dataMenu.breakfast.filter(item => item.id == id);
            props.statusProduct(result);
            props.showModal(true);
        }

    const DataBreakFast = dataMenu.breakfast.map((item)=>{
        return(
            <button onClick={()=> itemProductBreakfast(item.id)} key={item.id}>
                <img className="imgBtnLunch" src={item.img} />
                { item.name }
            </button>
        )
    })
    return (
        <div className="divLunch">
        {DataBreakFast}
        </div>);
}

export default Breakfast;