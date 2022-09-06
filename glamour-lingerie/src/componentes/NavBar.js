import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom"
import CartWidget from './cartWidget/CartWidget.js';
import '../hojas-de-estilos/NavBar.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={require('../img/logo/glamoure.jpeg')} alt='foto-de-la-marca' className='Marca' />

          <NavLink to="/" className='mx-2'>  Glamour Lingerie</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" >Tienda</NavLink>
            <NavLink to="./data/lomasvendido">lo mas Vendido</NavLink>
            <NavLink to="./data/mujer"> Mujer  </NavLink>
            {/* esta es la manera correcta pero no me toma la imagen  */}
            <NavLink to="./data/hombre"> Hombre  </NavLink>
            <NavLink to="./data/cart"> < CartWidget /></ NavLink>

          </Nav>
        </Container>
      </Navbar>
    </>

  );
}

export default ColorSchemesExample;