import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../helpers/getData";
import ItemList from "../ItemLis/ItemList";


const ItemListcontainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getData()
            .then((res) => {
                if(!categoryId){
                 setData(res)
                } else {
                    setData(res.filter((produc) => produc.category === categoryId))
                }

             })
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false)

            })
    }, [categoryId])

    return (

        <div>

            {
                loading ? 
                <h2>Cargando...</h2>
                : <ItemList data={data} />
            }
                
        </div>
    )
}
export default ItemListcontainer;

