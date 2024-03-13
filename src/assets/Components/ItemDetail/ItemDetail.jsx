import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({producto}) => {
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
                <ItemCount stock={producto.stock} />
            </article>
        </section>

  )
}

export default ItemDetail