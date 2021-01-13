import { Link } from "react-router-dom";
import logo from "../img/logoLetras.png";
import waiter from "../img/waiter.png"
import { useHistory } from "react-router";
import { getDataUser } from "../Utils.js";
//----------------------------------------------

const Nav = () => {
    let history = useHistory();
    let user = getDataUser();
    if (!user)
        history.push('/login');
return (<div>
    <img className="logoNav" src ={logo} alt=""/>
        <img className="waiterNav" src ={user.photoURL} alt=""/>
        <p>{user.displayName}</p>
        <ul>
            <li><Link className="linkNav" to= "/selecttable">Select Table</Link></li>
            <li><Link className="linkNav" to= "/status">Status Order</Link></li>
            <li><Link className="linkNav" to= "/stock">Stock</Link></li>
            <li><Link className="linkNav" to= "/bill">Bill</Link></li>
            
        </ul>

<Link to="/login">
            <span>Cerrar Sesión</span>
        </Link>
    </div>
    )}

export default Nav;