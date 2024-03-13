import './App.css';
import '../reset.css';
import NavBar from '/src/assets/Components/NavBar/NavBar';



import './assets/Components/ItemCount/ItemCount.css';
import ItemListContainer from './assets/Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './assets/Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <NavBar />
{/*     <ItemListContainer />
 */}    <ItemDetailContainer/>
    
    </>
  );
}

export default App
