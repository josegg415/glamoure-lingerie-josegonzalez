import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Item from "../Item/Item";


const ItemList = ( { data = [] } ) => {

    return (
        <div  className="col-4">

            { data.map((product) => < Item  data={product}  key={product.id}  />)}

        </div>
    )
}

export default ItemList;