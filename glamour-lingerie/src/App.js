import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ItemListcontainer from './componentes/ItemListcontainer/ItemListContainer.js';
import NavBar from './componentes/NavBar.js';



function App() {
  return (
    <div className="App">


      
      <BrowserRouter>
      <NavBar />

        <Routes>
            <Route  path='/' element={<ItemListcontainer />} />
            <Route  path='/data/:categoryId' element={<ItemListcontainer />} />
            <Route  path='*' element={ <Navigate to=""/>} />
        </Routes>

    



      </BrowserRouter>


    </div>
  );
}

export default App;