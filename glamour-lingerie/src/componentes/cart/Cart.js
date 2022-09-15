// import React, { useContext } from 'react';
import {   useCartContext } from '../../context/CartContext';
import {BsFillTrashFill}  from 'react-icons/bs'

const Cart = () => {

  const { cart, cartTotal , emptyCart , removeItem} = useCartContext() 

   return (

    <div className='container my-5'>
        
        
         { cart.map((item) => (
            <div key={item.id}>
                 <h3>{item.imgURL}</h3>
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
              <button onClick={emptyCart} className='btn btn-danger'>Vaciar carrito</button>
    </div>


   )
}

export default Cart;