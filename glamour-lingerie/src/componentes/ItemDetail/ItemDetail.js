import React from "react";

const ItemDetail = ( {item}) => {

    return(
        <div className="container">
            <img src={item.img}/>
            <h1>{item.nombre}</h1>
            <p>{item.tipo}</p>
            <p>{item.talle}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>


        </div>
    )
}
 export default ItemDetail;
