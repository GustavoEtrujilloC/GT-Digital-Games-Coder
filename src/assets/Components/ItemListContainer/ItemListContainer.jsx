import {useState, useEffect} from 'react'
import {getProducts} from '../../../mock/fakeApi'
import ItemList from '../../Components/ItemList/ItemList'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../Services/firebase'
import AddGames from '../../../../AddGames/AddGames'


function ItemListContainer(props) {

    const {greeting} = props
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

/*     useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=> {
            if (categoryId){
                setProductos(res.filter((prod)=>prod.category === categoryId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> console.error('Error al obtener productos:', error))
        .finally(()=> setLoading(false))

    },[categoryId])
 */
    //Firebase

    useEffect(()=>{
        setLoading(true)
        const itemcollection = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')
        getDocs(itemcollection)
        .then((res)=> {
           const list = res.docs.map((products)=>{
            return {
                id:products.id,
               ...products.data()
            }
           })
        setProductos(list)        
    })
    .catch((error)=> console.error('Error al obtener productos:', error))
    .finally(()=> setLoading(false))
        
    },[categoryId])

    if(loading) {
        return <Loader />
    }

    return(

        <div>
            <h1 className='Title'>{props.greeting}</h1>
            
            <ItemList productos={productos}/>
        </div>
    )

    
}

export default ItemListContainer