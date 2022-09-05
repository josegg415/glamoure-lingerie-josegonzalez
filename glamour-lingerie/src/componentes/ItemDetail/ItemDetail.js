import React from "react";

const ItemDetail = ( {item}) => {

    return(
        <div className="container">
            <img src={item.imgURL}/>
            <h3>{item.nombre}</h3>
            <p>{item.tipo}</p>
            <p>{item.talle}</p>
            <p>{item.category}</p>
            <h4>{item.precio}</h4>


        </div>
    )
}
export default ItemDetail;
