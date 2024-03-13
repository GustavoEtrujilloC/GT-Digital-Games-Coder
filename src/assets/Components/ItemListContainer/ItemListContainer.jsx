import {useState, useEffect} from 'react'
import {getProducts} from '../../../mock/fakeApi'
import ItemList from '../../Components/ItemList/ItemList'


function ItemListContainer() {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        getProducts()
        .then((res)=> setProductos(res))
        .catch((error)=> console.error('Error al obtener productos:', error));

    },[])

    return(


        <div>
        <ItemList productos={productos}/>
        </div>
    )

    
}

export default ItemListContainer