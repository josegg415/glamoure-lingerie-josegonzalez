import React from 'react';
import { useState } from 'react';


const ItemCount = ({stock}) => {



    const [contador, setContador] = useState(0)



    const handleSumar = () => {
        if (contador < stock) {

            setContador(contador + 1)
        }

    }
    const handleRestar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }

    }


    return (
        <div className='container my-5'>
            

            <button onClick={handleRestar} className='btn  btn-outline-primary' >-</button>
            <span className='mx-2'>{contador}</span>
            <button onClick={handleSumar} className='btn  btn-primary' >+</button>
            {/* <button style={{width: "100%", margintop:"1rem"}} disabled={stock <= 0}>añadir al carrito </button> */}
         <button className='btn  btn-primary' style={{width: "100%", marginTop:"1rem"}}> Añadir al carrito </button>

        </div>
    )
}

export default ItemCount

