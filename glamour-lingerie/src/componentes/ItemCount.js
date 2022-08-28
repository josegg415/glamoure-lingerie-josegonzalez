import React from 'react';
import { useState } from 'react';


const ItemCount = ({max})  => {

 

     const [contador, setContador] = useState(0)



    const handleSumar = () => {

        setContador( contador + 1)
        
    }
    const handleRestar = () => {
        if (contador > 0 ) {
        setContador(contador - 1)
        }
   
    }


    return (
        <div className='container my-5'>
            <h2> Contador</h2>
            <hr/>

           <button onClick={handleRestar} className='btn  btn-outline-primary' >-</button>
            <span className='mx-2'>{contador}</span>
            <button  onClick={handleSumar} className='btn  btn-primary' >+</button>

        </div>
    )
}

export default  ItemCount

