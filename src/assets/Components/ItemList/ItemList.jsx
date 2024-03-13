import Item from '../../Components/Item/Item';
import '../ItemList/ItemList.css'

const ItemList = ({productos}) => {
  return (
    <div className='cardContainer'>
        {productos.map((producto) =><Item key={producto.id} producto={producto}/>)}
    </div>
  );
}

export default ItemList;
