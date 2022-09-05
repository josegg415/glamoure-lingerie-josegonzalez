import React from "react";
import { Card, CardBody, CardFooter,  CardText, CardTitle } from "reactstrap";
import ItemCount from "../itemCount/ItemCount";





const ItemCard = (props) => {
    const { nombre, tipo, precio, talle, stock, imgURL } = props;




    return (
        <>
            <Card
                className="my-2"
                style={{
                    width: '18rem',
    
                }}
            >
                <img src={imgURL} alt='imagen' />
                <CardBody>
                    <CardTitle tag="h5">
                        {nombre.id}
                    </CardTitle>
                    <CardText>
                        {tipo}
                    </CardText>
                    <CardText>
                        {talle}
                    </CardText>
                    <CardText>
                        {stock}
                    </CardText>
                    <ItemCount stock={stock}/>
            <button className='btn  btn-primary' style={{ width: "100%", marginTop: "1rem" }}> Ver Mas </button>
                </CardBody>
                <CardFooter>
                    Stock {stock}
                   $ {precio}
                </CardFooter>
            </Card>
        </>
    );
}

export default ItemCard;