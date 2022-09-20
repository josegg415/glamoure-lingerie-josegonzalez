import {   useCartContext } from '../../context/CartContext';
import {BsFillTrashFill}  from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './cart.css';

const Cart = () => {

  const { cart, cartTotal , emptyCart , removeItem} = useCartContext() 
  
  if(cart.length === 0) {
    return (
      <div className='container my-5'>
        <h2>Tu carrito esta vacio!! No te podes ir sin llenarlo</h2>
        <hr/>
        <Link to='/' className='btn btn-primary mx-3'> Ir a Comprar </Link>




      </div>
    )
  }

   return (

    <div className=' cart'>
        
        
         { cart.map((item) => (
            <div  className='conten' key={item.id}>
                  <img  className='foto' src={item.imgURL} alt="imagenes de productos"/> 
                <h3>{item.nombre}</h3>
                <p> Precio: {item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
                <small>Talle:{item.talle}</small>
                <small>Color:{item.colores}</small>
                <button onClick={ () => removeItem(item.id)}  className='btn btn-danger mx-2'><BsFillTrashFill/></button>

            
                <hr/>

            </div>


        ))}

        
               <h4>Total: ${cartTotal()}</h4> 
              <button onClick={emptyCart} className='btn btn-danger btn-sm mx-2'>Vaciar carrito</button>
    </div>


   )
}

export default Cart;