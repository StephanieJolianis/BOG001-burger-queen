import { Link } from "react-router-dom";
import logo from "../img/logoLetras.png";
import table from "../img/iconTakeOrder.png";
import statusOrder from "../img/chef1.png";
import { useHistory } from "react-router";
import { getDataUser } from "../Utils.js";
import logout from "../img/logout.png"
//----------------------------------------------

const Nav = () => {
    let history = useHistory();
    let user = getDataUser();
    if (!user)
        history.push('/login');

return (<div>
    <img className="logoNav" src ={logo} alt=""/>
        <img className="waiterNav" src ={user.photoURL} alt=""/>
        <p className="usernameNav">{user.displayName}</p>
        <ul className="ulNav">
            {user.type != 'CHEF' && (<li className="liNav"><Link className="linkNav" to= "/selecttable"><img className="tablesImgNav" src ={table}/></Link></li>)}
            <li className="liNav1"><Link className="linkNav" to= "/status"><img className= "statusImgNav" src = {statusOrder}/></Link></li>
            
        </ul>

<Link to="/login" className="logout">
    <div><img className="logoutNav" src={logout} />
            <p className="cerrarSesion">Cerrar Sesión</p></div>
        </Link>
    </div>
    )}

export default Nav;