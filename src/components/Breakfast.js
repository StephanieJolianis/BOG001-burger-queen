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
                <div className="divImgLunch"><img className="imgBtnLunch" src={item.img} /></div>
                <p className="nameLunch">{ item.name }</p>
            </button>
        )
    })
    return (
        <div className="divLunch">
        {DataBreakFast}
        </div>);
}

export default Breakfast;