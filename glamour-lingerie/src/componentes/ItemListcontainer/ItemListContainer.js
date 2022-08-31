import React, { useEffect, useState } from "react";
import ItemCard from "../itemCard/ItemCards";






let stockProductos = [
    {

        id: 1,
        nombre: "Bata",
        tipo: "Bata",
        precio: 500,
        talle: "L",
        stock: 5,
        imgURL: "./imagenes/batas/bata-beige.jpeg"
    },
    {
        id: 2,
        nombre: "Corpiño",
        tipo: 'corpiño',
        precio: 300,
        talle: "xs",
        stock: 9,
        imgURL: "./imagenes/batas/bata-beige.jpeg"
    },
    {

        id: 3,
        nombre: "Medias",
        tipo: "medias",
        precio: 100,
        talle: "M",
        stock: 8,
        imgURL: "./imagenes/pantuflas/pantufla-gris.jpeg"
    },
    {

        id: 4,
        nombre: "bombacha",
        tipo: "ropa interior",
        precio: 500,
        talle: "M",
        stock: 10,
        imgURL: "./imagenes/pantuflas/pantufla-gris.jpeg"
    },
    {

        id: 5,
        nombre: "Botxer",
        tipo: "ropa interior",
        precio: 1000,
        talle: "XL",
        stock: 4,
        imgURL: "./imagenes/pijamas/only-face.jpeg"
    },
    {
        id: 6,
        nombre: "Camison",
        tipo: "camison",
        precio: 1500,
        talle: "XXL",
        stock: 7,
        imgURL: "./imagenes/hombre/interior.jpeg"
    },
]



const ItemListcontainer = () => {

    const [data, setData] = useState([])



    const getData = () => {
        const error = false;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!error) {
                    resolve(stockProductos)
                } else {
                    reject("hay un error")
                }

            },5000 )
        })
    }

    useEffect(() => {
        getData()
            .then(res => setData(res))
            .catch(error => console.log(error))

    }, [])


    return (
        <div className="row">
            {
                data.map(product => (

                    <div className="col-4  " >
                        <ItemCard key={product.id} nombre={product.nombre} tipo={product.tipo} precio={product.precio} talle={product.talle} stock={product.stock} imgURL={product.imgURL} />
                    </div>
                ))
            }
        </div>
    )
}
export default ItemListcontainer;

