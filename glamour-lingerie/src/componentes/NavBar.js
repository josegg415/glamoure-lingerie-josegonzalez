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
        <Container >
          <img src={require('../img/logo/glamoure.jpeg')} alt='foto-de-la-marca' className='Marca' />

          <NavLink to="/" className='mx-2 titulos'>  Glamour Lingerie</NavLink>
          <Nav className="me-auto">
            <NavLink size='2rem' color='blue'  className='mx-4 titulos' to="/" >Tienda</NavLink>
            <NavLink size='2rem' color='blue'  className='mx-4  titulos' to="/data/lomasvendido">lo mas Vendido</NavLink>
            <NavLink size='2rem' color='blue'  className='mx-4 titulos' to="/data/mujer"> Mujer  </NavLink>
            <NavLink size='2rem' color='blue'  className='mx-4 titulos' to="/data/hombre"> Hombre  </NavLink>
            <NavLink size='2rem' color='blue'  className='mx-4 titulos' to="/data/pijamas"> Pijamas  </NavLink>
            < CartWidget />

          </Nav>
        </Container>
      </Navbar>
    </>

  );
}

export default ColorSchemesExample;