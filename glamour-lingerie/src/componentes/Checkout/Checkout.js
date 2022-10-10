import React, { useState } from "react";
import "reactstrap";
import { useCartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import { addDoc, collection, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';



const Checkout = () => {

    const { cart, cartTotal, terminarCompra, terminarCompraConSwal } = useCartContext()

    const [orderId, setOrdenId] = useState(null)

    const [values, SetValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleinputChange = (e) => {
        SetValues({
            ...values,
            [e.target.name]: e.target.value

        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        const orden = {

            comprador: values,
            items: cart,
            total: cartTotal()


        }




        if (values.nombre.length < 4) {
            alert('ingrese un nombre real!!!')
            return
        }

        if (values.email.length < 2) {
            alert('Email incorrecto')
            return
        }
        const batch = writeBatch(db)
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')


        const q = query(productosRef, where(documentId(), 'in', cart.map((item) => item.id)))

        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const itemIncart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemIncart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemIncart.cantidad
                })

            } else {
                outOfStock.push(itemIncart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            console.log(doc.id)

                            setOrdenId(doc.id)
                            terminarCompra()
                            terminarCompraConSwal(doc.id)
                        })
                })
        } else {
            alert('hay items sin Stock')

        }
    }
    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Compra exitosa</h2>
                <hr></hr>
                <p className="mx-3">Tu numero de orden es: <strong>{orderId}</strong></p>


            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to='/' />
    }

    return (
        <div className="container my-5">
            <div>

                <h2>Checkout</h2>
                <hr />
            </div>

            <form onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    onChange={handleinputChange}
                    value={values.nombre}
                    type={'text'}
                    className='from-control mx-2'
                    placeholder="Tu Nombre" />

                <input
                    name="email"
                    onChange={handleinputChange}
                    value={values.email}
                    type={'email'}
                    className='from-control mx-2'
                    placeholder="Email" />

                <input
                    name="direccion"
                    onChange={handleinputChange}
                    value={values.direccion}
                    type={'text'}
                    className='from-control mx-2'
                    placeholder="Direccion" />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

        </div>
    )

}

export default Checkout;
