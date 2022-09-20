import React from "react";
import ItemCard from "../itemCard/ItemCards";
import 'bootstrap/dist/css/bootstrap.min.css';





const Item = ({ data }) => {

    return (
        <div className="col-4 "  >
           
           
            <ItemCard   nombre={data.nombre} tipo={data.tipo}
                precio={data.precio}
                talle={data.talle}
                stock={data.stock}
                 imgURL={data.imgURL} alt='imagenes de productos'
                id={data.id} />
            
                
            
        </div>
    )
}

export default Item;