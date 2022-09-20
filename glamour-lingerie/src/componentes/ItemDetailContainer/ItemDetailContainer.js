import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData.js";
import ItemDetail from "../ItemDetail/ItemDetail.js";



const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setloading] = useState(true)



    const {itemId} = useParams()


    useEffect(() => {
        setloading(true)
        getData()
        .then((res) => {
            setItem(res.find((produc) => produc.id === Number(itemId) ) )
        })
        .catch(error => console.log(error))
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