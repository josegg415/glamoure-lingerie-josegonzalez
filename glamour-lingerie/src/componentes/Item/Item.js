import React from "react";
import ItemCard from "../itemCard/ItemCards";

const Item = ({ data }) => {

    return (
        <div className="col-4  " >
            <ItemCard nombre={data.nombre} tipo={data.tipo}
                precio={data.precio}
                talle={data.talle}
                stock={data.stock}
                imgURL={data.imgURL} />
            
        </div>
    )
}

export default Item;