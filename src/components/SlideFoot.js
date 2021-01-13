const SlideFoot = (props) => {
    if(props.type == 'WAITER')
    return(
        <div>
            <button onClick={()=>props.setStatusFilter('COCINA') }>En Cocina</button>
            <button onClick={()=>props.setStatusFilter('PROCESO') }>En Progreso</button>
            <button onClick={()=>props.setStatusFilter('SERVIR') }>Para Servir</button>
            <button onClick={()=>props.setStatusFilter('CAJA') }>Enviado a caja</button>
        </div>
    );
    else
    return(
        <div>
            <button onClick={()=>props.setStatusFilter('COCINA') }>En Cocina</button>
            <button onClick={()=>props.setStatusFilter('PROCESO') }>En Progreso</button>
            <button onClick={()=>props.setStatusFilter('SERVIR') }>Para Servir</button>
        </div>
    );

}

export default SlideFoot;
