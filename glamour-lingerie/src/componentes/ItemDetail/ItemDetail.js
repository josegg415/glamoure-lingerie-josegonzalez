import ItemCount from "../itemCount/ItemCount";
import { useState } from 'react';
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './ItemDetail.css';






const ItemDetail = ({ item }) => {

    const { addToCart, isInCart } = useCartContext()


    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            imgURL: item.imgURL,
            precio: item.precio,
            nombre: item.nombre,
            cantidad


        }


        addToCart(itemToCart)


    }



    return (
        <div className="contenedor conten">
            <div className="carta">
                <img className="foto" src={item.imgURL} alt="imagenes de productos" />
                <h1 className="h1" >{item.nombre}</h1>
                <p >{item.tipo}</p>
                <h3  > El stock disponnible es:{item.stock}</h3>
                <p  >{item.category}</p>
                <h4  >{item.precio}</h4>




                {isInCart(item.id) && <p> El item ya se agrego </p>}

                {
                    isInCart(item.id)
                        ? <Link to="/cart" className="btn btn-success my-4"> Finalizar mi compra</Link>

                        : <ItemCount className='contador'
                            max={item.stock}
                            contador={cantidad }
                            setContador={setCantidad}
                            handleAgregar={handleAgregar} />
                }



            </div>


        </div>
    )
}
export default ItemDetail;
