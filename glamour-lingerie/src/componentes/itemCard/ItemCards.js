import React from "react";
import { Card, CardBody, CardFooter,  CardText, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import './ItemCard.css';


 





const ItemCard = (props) => {
    const { nombre, tipo, precio, talle, stock, imgURL, id } = props;

  



    return (
        < >
            <Card
                className=" card "
                style={{
                    width: '18rem',
    
                }}
            >
                <img src={imgURL} alt='imagen' />
                <CardBody className="contenido"  >
                    <CardTitle tag="h5" className="h1" >
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
                     
            <Link to={`/detail/${id}`}><Button className='btn  btn-primary' style={{ width: "100%", marginTop: "1rem" }}> Ver Mas</Button> </Link>
                    
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