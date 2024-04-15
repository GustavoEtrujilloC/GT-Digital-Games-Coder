import { CartContext } from '../../../context/CartContext'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { NavLink } from 'react-router-dom'



const ItemDetail = ({producto}) => {
    const [buy, setBuy] = useState(false)
    const {addItem} = useContext(CartContext)
    const [quantityAdded, setQuantityAdded] = useState(0)
    const [count, setCount] = useState(1)
    
    
    const onAdd = (quantity) => {
      
      addItem(producto, quantity)
        
        setBuy(true)
        if (count > 0 || stock === 0){
          console.log("Puedes comprar", quantity)
          
        }
        else {
          alert('Debes seleccionar una cantidad')
        }
      
  }



   

  return (
    

    <section className="content">
            <article className="gallery">
                <img className="gallery__image-container" src={producto.image}></img>
                <div className="gallery__thumbnails">
                    <img id="1" className="gallery__thumbnail" src={producto.image} alt="thumbnail"></img>
                    <img id="2" className="gallery__thumbnail" src={producto.image} alt="thumbnail"></img>
                    <img id="3" className="gallery__thumbnail" src={producto.image} alt="thumbnail"></img>
                    <img id="4" className="gallery__thumbnail" src={producto.image} alt="thumbnail"></img>
                </div>
            </article>
            <article className="details">
                <h2 className="details__company">{producto.company}</h2>
                <h2 className="details__title">{producto.name}</h2>
                <p className="details__description">{producto.description}</p>
                <div className="details__prices">
                    <p className="details__now">{producto.price}$</p>
                </div>
                <div className="details__product-quantity">
                </div>
                {buy ? <NavLink to="/cart" ><button className="details__button">Ir al carrito</button></NavLink> :  <ItemCount stock={producto.stock} onAdd={onAdd} />}
                
                {producto.stock === 3 && <p>Ultimos 3 disponibles!!</p>}
                {producto.stock === 2 && <p>Ultimos 2 disponibles!!</p>}
                {producto.stock === 1 && <p>Ultima unidad disponible!!</p>}


            </article>
        </section>

  )
}


export default ItemDetail