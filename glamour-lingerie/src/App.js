
import './App.css';
import {BrowserRouter,Navigate, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// importacion de los documentos creados 
import NavBarExample from './components/layouts/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Contacto from './components/contacto/Contacto.js';
import CartWidget from './components/contenedor/CartWidget.js'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={ <NavBarExample/> } />
      <Route path='ItemListContainer' element={ <ItemListContainer/> } />
      <Route path='./CartWidget' element={ <CartWidget/> } />
      <Route index element={ <Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contacto' element={ <Contacto /> } />

        <Route path='*' element={<Navigate replace to='/' />} />


      
     </Routes>
     </BrowserRouter>
      

    </div>
  );
}

export default App;
