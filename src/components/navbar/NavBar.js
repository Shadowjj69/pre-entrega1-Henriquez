import CartWidget from "../cartwidget/CartWidget";
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar =() => {
    return(
        <nav className="navbar">  
          <div className="navbar__nombre"> 
          <Link to ='/'><h1>Tu Mascota </h1> </Link>
            
          </div>
          <div className="navbar__categorias"> 
            <Link to={`category/alimentos`}>Alimentos</Link>
            <Link to={`category/juguete`}>juguete</Link>
            <Link to={`category/cuidado`}>cuidado</Link>
          </div>   
            <CartWidget />
        </nav>
    )
}
export default NavBar