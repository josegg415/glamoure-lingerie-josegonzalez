import React from 'react';
import './App.css';
import ItemListcontainer from './componentes/ItemListcontainer/ItemListContainer';
import NavBar from './componentes/NavBar.js';
// import ItemCount from './componentes/itemCount/ItemCount.js';



function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListcontainer />

    </div>
  );
}

export default App;