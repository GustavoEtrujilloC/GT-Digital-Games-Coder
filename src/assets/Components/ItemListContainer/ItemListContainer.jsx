import {useState, useEffect} from 'react'
import {getProducts} from '../../../mock/fakeApi'
import ItemList from '../../Components/ItemList/ItemList'
import {useParams} from 'react-router-dom'


function ItemListContainer(props) {

    const {greeting} = props

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=> {
            if (categoryId){
                setProductos(res.filter((prod)=>prod.category === categoryId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.error('Error al obtener productos:', error))

    },[categoryId])

    return(

        <div>
            <h1 className='Title'>{props.greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )

    
}

export default ItemListContainer