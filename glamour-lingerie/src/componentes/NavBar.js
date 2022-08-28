import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillCartPlusFill} from 'react-icons/bs';
import '../hojas-de-estilos/NavBar.css' 

function ColorSchemesExample() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
         <img src={require('../img/logo/glamoure.jpeg')}alt='foro de la Marca' className='Marca' />
         
         <Navbar.Brand href="#home"   className='mx-2'>  Glamour Lingerie</Navbar.Brand>
         <Nav className="me-auto"> 
           <Nav.Link href="#home">Tienda</Nav.Link>
           <Nav.Link href="#features">lo mas Vendido</Nav.Link>
           <Nav.Link href="#pricing">Precios  </Nav.Link>
           <Nav.Link href="#pricing"> < BsFillCartPlusFill  size='2rem' color='blue'  className='mx-4' /> </Nav.Link>
           
         </Nav>  
       </Container>
     </Navbar>
   </>
      
 );
} 

export default ColorSchemesExample;