import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import  ItemListContainer from './componentes/ItemListcontainer/ItemListContainer.js';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer.js';
import NavBar from './componentes/NavBar.js';



function App() {
  return ( 
    <div className="App">


      
      <BrowserRouter>
      <NavBar />

        <Routes>
            <Route  path='/' element={<ItemListContainer />} />
            <Route  path='/data/:categoryId' element={ <ItemListContainer /> } />
            <Route  path='/detail/:itemId' element={ <ItemDetailContainer/> } />
            <Route  path='*' element={ <Navigate to=""/>} />
        </Routes>

    



      </BrowserRouter>


    </div>
  );
}

export default App;