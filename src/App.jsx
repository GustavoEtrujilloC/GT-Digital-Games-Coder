import './App.css';
import '../reset.css';
import NavBar from '/src/assets/Components/NavBar/NavBar';
import './assets/Components/ItemCount/ItemCount.css';
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>

    <Route path='/' element={<ItemListContainer greeting="Tienda de Juegos Digitales"/>} />
    <Route path='/categories/:categoryId' element={<ItemListContainer/>} />
    <Route path='/store' element={<ItemListContainer/>} /> 
    <Route path='/item/:itemId' element={<ItemDetailContainer/>} /> 
 

    </Routes>
    </BrowserRouter>
  );
}

export default App
