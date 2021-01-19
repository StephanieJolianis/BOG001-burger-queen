import React from 'react';
import { Link } from 'react-router-dom';
import logoBQNav from '../img/logoBQNav.png';
import iconoMesas from '../img/iconoTomarPedido.png';
import logout from '../img/logout.png';

const NavBar = () => {
        return (
            <div className = "navBar-color">
                    <div>
                        <Link to="/">
                            <img src ={logoBQNav} alt=""/>
                            <div>
                            <img src ={logout} alt=""/>
                            <span>Cerrar Sesión</span>
                            </div>
                        </Link>
                        <Link to="/mesas">
                            <img src ={iconoMesas} alt=""/>
                            <span>Tomar Pedidos</span>
                        </Link>
                    </div>
            </div>
        )
    }


export default NavBar;
