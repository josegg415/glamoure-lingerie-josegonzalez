import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemLis/ItemList";
import { collection,  getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/config.js';
import UncontrolledExample from '../carrucel/Carrucel.js';


const ItemListcontainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId
                 ?  query(productosRef, where('category', '==', categoryId))
                 : productosRef
         getDocs(q)
              .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                  

                   setData(productosDB)
              })
              .finally(() => {
                setLoading(false)
              })

    }, [categoryId])

    return (

        <div>
             <UncontrolledExample/>

            {
                 loading ? 
                 <h2>Cargando...</h2>
                :  <ItemList data={data} />
            }
                
        </div>
    )
}
export default ItemListcontainer;

