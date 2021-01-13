const SlideFoot = (props) => {
    if(props.type == 'WAITER')
    return(
        <div>
            <button className="btnCocinaWaiter" onClick={()=>props.setStatusFilter('COCINA') }>En Cocina</button>
            <button className="btnProcesoWaiter" onClick={()=>props.setStatusFilter('PROCESO') }>En Progreso</button>
            <button className="btnServirWaiter" onClick={()=>props.setStatusFilter('SERVIR') }>Para Servir</button>
            <button className="btnEntregadaWaiter" onClick={()=>props.setStatusFilter('ENTREGADA') }>Orden Entregada</button>
            <button className="btnCajaWaiter" onClick={()=>props.setStatusFilter('CAJA') }>Enviado a caja</button>
        </div>
    );
    else
    return(
        <div>
            <button className="btnCocinaChef" onClick={()=>props.setStatusFilter('COCINA') }>En Cocina</button>
            <button className="btnProcesoChef" onClick={()=>props.setStatusFilter('PROCESO') }>En Progreso</button>
            <button className="btnServirChef" onClick={()=>props.setStatusFilter('SERVIR') }>Para Servir</button>
        </div>
    );

}

export default SlideFoot;
