import React from "react";
 import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ( {item}) => {

    

    return(
        <div className="container my-5">
             <img src={item.imgURL} alt="imagenes de productos"/> 
            <h1>{item.nombre}</h1>
            <p>{item.tipo}</p>
            <p>{item.talle}</p>
            <p>{item.category}</p>
             <ItemCount />
            <h4>{item.precio}</h4>
            


        </div>
    )
}
 export default ItemDetail;
