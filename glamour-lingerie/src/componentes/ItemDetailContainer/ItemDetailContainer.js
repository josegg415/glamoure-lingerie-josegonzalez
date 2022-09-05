import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
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
      

    }, [])

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