import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import LoginRegisterMenu from "./LoginRegisterMenu"

const RoleNavbar=({isLoggedIn})=>{
    const logout=e=>{
        dispatch({type:'LogOut'})
        sessionStorage.clear();
        history.push("/");
    }
    const state=useSelector((state)=>state);
    const history=useHistory()
    const dispatch=useDispatch()
    console.log(sessionStorage.getItem("role"),isLoggedIn)
    if(!isLoggedIn) {
         return (
        <LoginRegisterMenu/>
        )
    }
    else if(sessionStorage.getItem("role")==="customer"){
    return (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
            <Link className="nav-link" to="/cart" style={{color:"white"}}>View Cart {state.cart.length===0 ? '' : 
            <span className="badge badge-primary p-2">{state.cart.map(x=>x.qty).reduce((a,b)=>parseInt(a)+parseInt(b))}</span>}</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/cprofile " style={{color:"white"}}>Profile</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/myorders" style={{color:"white"}}>My Orders</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" onClick={logout} to="#"style={{color:"white"}}>Logout</Link>
        </li>        
        </ul>
    )
    }
    else if(sessionStorage.getItem("role")==="seller"){
        return (
            <ul className="navbar-nav ml-auto"> 
            <li className="nav-item active">
                <Link className="nav-link" to="/sprofile" style={{color:"white"}}>Profile</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/add-product" style={{color:"white"}}>Add Vehicle</Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/myproducts" style={{color:"white"}}>Vehicle</Link>
            </li>          
            <li className="nav-item active">
                <Link className="nav-link" onClick={logout} to="#" style={{color:"white"}}>Logout</Link>
            </li>        
            </ul>
        )
    }
    return (
        <ul className="navbar-nav ml-auto">             
        <li className="nav-item active">
            <Link className="nav-link" to="/aprofile" style={{color:"white"}}>Profile</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/sellers" style={{color:"white"}}>Sellers</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/customers" style={{color:"white"}}>Customers</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/orders" style={{color:"white"}}>Orders</Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" onClick={logout} to="#" style={{color:"white"}}>Logout</Link>
        </li>        
        </ul>
    )

}



export default RoleNavbar;