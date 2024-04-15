import './App.css';
import '../reset.css';
import NavBar from '/src/assets/Components/NavBar/NavBar';
import Cart from './assets/Components/Cart/Cart';
import './assets/Components/ItemCount/ItemCount.css';
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Checkout from './assets/Components/Checkout/Checkout';
import AddGames from '../AddGames/AddGames';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Tienda de Juegos Digitales"/>} />
          <Route path='/categories/:categoryId' element={<ItemListContainer greeting = 'categoria:'/>} />
          <Route path='/store' element={<ItemListContainer/>} /> 
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} /> 
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/addgames' element={<AddGames/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
