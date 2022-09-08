import React from "react";
// import { NavLink} from "react-router-dom";
import ItemCard from "../itemCard/ItemCards";



const Item = ({ data }) => {

    return (
        <div className="col-4  " >
            <ItemCard nombre={data.nombre} tipo={data.tipo}
                precio={data.precio}
                talle={data.talle}
                stock={data.stock}
                imgURL={data.imgURL} alt='imagenes de productos'
                id={data.id} />
            
                
         {/* <NavLink  to={`/item/${data.id}`} className='btn  btn-primary' style={{ width: "200%", marginTop: "0.1rem" }}> Ver Mas </NavLink> */}
            
        </div>
    )
}

export default Item;