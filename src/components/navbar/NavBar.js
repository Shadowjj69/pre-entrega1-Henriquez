import CartWidget from "../cartwidget/CartWidget";
import './NavBar.css'
function NavBar(){
    return(
        <nav className="navbar">  
          <div className="navbar__nombre"> 
           <h1> Tu Mascota </h1>
          </div>
          <div className="navbar__categorias"> 
            <button>Alimentos</button>
            <button>Juguetes</button>
            <button>Cuidados</button>
          </div>   
            <CartWidget />
        </nav>
    )
}
export default NavBar
