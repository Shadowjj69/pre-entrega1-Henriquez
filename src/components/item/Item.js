import { Link } from "react-router-dom"
import './item.css'
const Item =({prod}) => {

    return (
        <div className="item__item">
        <h1> {prod.name}</h1> 
        <h2>$ {prod.price} </h2>
        <img className="item__img" src={prod.img} alt={'img'} />
        <Link className="item__detalle" to={`/detail/${prod.id}` }>ver detalle</Link>
     </div>
    )
}
export default Item