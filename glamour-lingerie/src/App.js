import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemCount from './componentes/ItemCount.js';


function App () {
  return (
    <div className="App">
      <NavBar/>
     <ItemCount/>
     <ItemCount/>
     <ItemCount/>
  
    </div>
  );
}

export default App;