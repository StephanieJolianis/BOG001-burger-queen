import React, { useState } from 'react';

const SlideFoot = (props) => {


    const [colorBtnSlide, setcolorBtnSlide] = useState(2);


    if(props.type == 'WAITER')
    return(
        <div>
            <button className={ colorBtnSlide==2 ? "btnCocinaWaiter" : "btnSinEstilo"}   onClick={()=>{ setcolorBtnSlide(2) ;props.setStatusFilter('COCINA')} }>En Cocina</button>
            <button className={ colorBtnSlide==3 ? "btnProcesoWaiter" : "btnSinEstilo"}  onClick={()=>{setcolorBtnSlide(3) ;props.setStatusFilter('PROCESO')} }>En Progreso</button>
            <button className={ colorBtnSlide==4 ? "btnServirWaiter" : "btnSinEstilo"}  onClick={()=>{setcolorBtnSlide(4) ;props.setStatusFilter('SERVIR')} }>Para Servir</button>
            <button className={ colorBtnSlide==5 ? "btnEntregadaWaiter" : "btnSinEstilo"}  onClick={()=>{setcolorBtnSlide(5) ;props.setStatusFilter('ENTREGADA')} }>Orden Entregada</button>
            <button className={ colorBtnSlide==6 ? "btnCajaWaiter" : "btnSinEstilo"}  onClick={()=>{setcolorBtnSlide(6) ;props.setStatusFilter('CAJA')} }>Enviado a caja</button>
        </div>
    );
    else
    return(
        <div>
            <button className={ colorBtnSlide==2 ? "btnServirWaiter" : "btnSinEstilo"} onClick={()=>{ setcolorBtnSlide(2) ;props.setStatusFilter('COCINA')} }>En Cocina</button>
            <button className={ colorBtnSlide==3 ? "btnProcesoWaiter" : "btnSinEstilo"} onClick={()=>{setcolorBtnSlide(3) ;props.setStatusFilter('PROCESO')} }>En Progreso</button>
            <button className={ colorBtnSlide==4 ? "btnCocinaWaiter" : "btnSinEstilo"} onClick={()=>{setcolorBtnSlide(4) ;props.setStatusFilter('SERVIR')} }>Para Servir</button>
        </div>
    );

}

export default SlideFoot;
