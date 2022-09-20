import React from 'react';




const ItemCount = ({max, contador,setContador, handleAgregar }) => {

    const handleSumar = () => {
        if (contador < max) {

            setContador(contador + 1)
        }

    }
    const handleRestar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }

    }


    return (
        <div className='container my-5'>
            

            <button onClick={handleRestar} className='btn  btn-outline-primary' >-</button>
            <span className='mx-2'>{contador}</span>
            <button onClick={handleSumar} className='btn  btn-primary' >+</button>
            <hr/>

           <button onClick={handleAgregar} className='btn btn-success mx-3'>
                Agregar al carrito
            </button>
         

        </div>
    )
}

export default ItemCount;

