import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from "reactstrap";
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
                <img src={imgURL} />
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