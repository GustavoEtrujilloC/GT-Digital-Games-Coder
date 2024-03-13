import {useState, useEffect} from 'react'
import {getProducts} from '../../../mock/fakeApi.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})


    useEffect(() => {
        getProducts()
        .then((res)=> setProducto(res.find((item=> item.id === '5'))))
        .catch((error)=> console.error('Error al obtener productos:', error));
    },[]);

  return (
    
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer