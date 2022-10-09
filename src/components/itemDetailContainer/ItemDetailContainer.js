import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import './itemDetailContainer.css'
const ItemDetailContainer = () => {
    const[product, setProduct] = useState({})
    const {productId} = useParams()
    useEffect(() => {
            getProduct (productId).then(product => {
            setProduct(product)
            })
        }, [])
        console.log(product)
        return (
        <div className="itemdetail__container">
            <h1>Detalle de producto</h1>
        <div className="itemdetail__product">
            <h1>{product.name}</h1>
            <h2>{product.category}</h2> 
            <img className="img__product" src={product.img} alt={'img'} />  
            <h3>{product.price}</h3>
            </div>
        </div>

    )

}
export default ItemDetailContainer