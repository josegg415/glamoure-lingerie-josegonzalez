
import './App.css';
import {BrowserRouter,Navigate, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// importacion de los documentos creados 
import about from './components/about';
import contacto from './components/contacto';
import home from './components/home';
import NavBarExample from './components/layouts/NavBar';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={ <NavBarExample/> }>
      <Route index element={ <home />} />
      <Route path='about' element={<about />} />
      <Route path='contacto' element={ <contacto /> } />

        <Route path='*' element={<Navigate replace to='/' />} />


      </Route>
     </Routes>
     </BrowserRouter> 

    </div>
  );
}

export default App;
