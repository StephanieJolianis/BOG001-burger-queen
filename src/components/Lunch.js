import dataMenu from "../data/dataMenu.json";

const Lunch = (props) =>{

    const itemProductLunch = (id)=>{
        const result = dataMenu.lunch.filter(item => item.id == id);
            props.statusProduct(result);
            props.showModal(true);
        }

        const DataLunch = dataMenu.lunch.map((item)=>{
            return(
                <button onClick={()=> itemProductLunch(item.id)} key={item.id}>
                    <div className="divImgLunch"><img className="imgBtnLunch" src={item.img} /></div>
                    <p className="nameLunch">{ item.name }</p>
                </button>
            )
        })

        const itemProductDrinks = (id)=>{
            const result = dataMenu.drinks.filter(item => item.id == id);
                props.statusProduct(result);
                props.showModal(true);
            }
        
        const DataDrinks = dataMenu.drinks.map((item)=>{
            return(
                <button onClick={()=> itemProductDrinks(item.id)} key={item.id}>
                    <div className="divImgLunch"><img className="imgBtnLunch" src={item.img} /></div>
                    <p className="nameLunch">{ item.name }</p>
                </button>
            )
        })


    return (
<div className="divLunch">
    {DataLunch}
    {DataDrinks}
</div>
    )
}

export default Lunch;