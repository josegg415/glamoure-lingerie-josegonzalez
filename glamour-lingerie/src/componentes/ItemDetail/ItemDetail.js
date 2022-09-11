import React from "react";
import ItemCount from "../itemCount/ItemCount";
import Select from "../Select/Select";
import { useState } from 'react';






const ItemDetail = ( {item}) => {


    const [cantidad, setCantidad] = useState(0)
    const [talle, setTalle] = useState(item.options[0].value)
    const [colores, setColores] = useState(item.colores[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            imgURL: item.imgURL,
            precio: item.precio,
            nombre: item.nombre,
            talle,
            cantidad,
            colores


        }
        console.log(itemToCart)
    

    }

    

    return(
        <div className="container my-5 ">
             <img src={item.imgURL} alt="imagenes de productos"/> 
            <h1  >{item.nombre}</h1>
            <p>{item.tipo}</p>
            {/* <h2>{item.talle}</h2> */}
            <h3 > El stock disponnible es:{item.stock}</h3>
            <p  >{item.category}</p>
            <h4 >{item.precio}</h4>
            <hr/>
            <Select options={item.options}  onSelect={setTalle}/>
            <Select options={item.colores}  onSelect={setColores}/>
            <hr/>
               <ItemCount  max={item.stock}
               contador={cantidad}
               setContador={setCantidad}
               handleAgregar={handleAgregar}/>
               
            
              


        </div>
    )
}
 export default ItemDetail;
