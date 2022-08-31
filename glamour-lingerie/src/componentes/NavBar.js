import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './cartWidget/CartWidget.js';
import '../hojas-de-estilos/NavBar.css';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img src={require('../img/logo/glamoure.jpeg')} alt='foto de la Marca' className='Marca' />

          <Navbar.Brand href="#home" className='mx-2'>  Glamour Lingerie</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Tienda</Nav.Link>
            <Nav.Link href="#features">lo mas Vendido</Nav.Link>
            <Nav.Link href="#pricing">Precios  </Nav.Link>
            <Nav.Link href="#pricing"> < CartWidget /></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>

  );
}

export default ColorSchemesExample;