import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config.js';



const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setloading] = useState(true)



    const {itemId} = useParams()


    useEffect(() => {
        setloading(true)
      const itemRef = doc( db, 'productos', itemId )
      getDoc(itemRef)
        .then((doc) => {
            setItem({id: doc.id, ...doc.data()})
        })
        .finally(() => {
            setloading(false)
        })

    }, [itemId])

    return (
        <div>
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail item={item} />
            }

        </div>
    )
}

export default ItemDetailContainer;