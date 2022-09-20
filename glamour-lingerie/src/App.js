import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from './componentes/ItemListcontainer/ItemListContainer.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.js';
import NavBar from './componentes/NavBar.js';
import Cart from "./componentes/cart/Cart.js";
import { CartProvider } from './context/CartContext'





const App = () => {




  return (
  

    <CartProvider>



      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/data/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to="" />} />
        </Routes>





      </BrowserRouter>

    </CartProvider>

    // </div>
  );
}

export default App;