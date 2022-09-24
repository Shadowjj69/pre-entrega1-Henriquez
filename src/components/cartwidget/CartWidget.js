import carrito from "../assets/carrito.png";
import './CartWidget.css'
function CartWidget (){
    return(
    <div>
        <img className="cartwidget__carrito" src={carrito} alt="carrito" />
        2    
    </div>
    )
}
export default CartWidget 