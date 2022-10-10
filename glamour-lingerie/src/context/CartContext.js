import {  useState,createContext, useContext } from "react";
import Swal from "sweetalert2";



export const cartContext = createContext()



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const addToCart = (item) => {
      setCart([...cart, item])
  
    }
  
    const removeItem = (id) => {
      setCart(cart.filter((item) => item.id !== id))

    }
  
    const isInCart = (id) => {
      return cart.some((item) => item.id === id)
    }
    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0 )
    }

    const cartTotal = () => {
      return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
      Swal.fire({
        title: 'Estas Seguro ?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
        }
      })
      
    }

    const terminarCompra = (id) => {

    setCart([id]) 
    }

    const terminarCompraConSwal = (id) => {

      Swal.fire({
        title: 'Aprobado!',
        text: `Tu numero de orden es: ${id}`,
        icon: 'success',
      
        confirmButtonText: 'Excelente',
      })
      setCart([]) 
    }


    return(
       
    <cartContext.Provider value={ {
        cart,
        addToCart,
        isInCart,
        cartQuantity,
        cartTotal,
        emptyCart,
        removeItem,
        terminarCompra,
        terminarCompraConSwal
      } } >
         {children}

        </cartContext.Provider>
    )
    }
export const useCartContext = () => { 
  return useContext(cartContext)
}