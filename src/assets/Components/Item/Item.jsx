import { Link } from 'react-router-dom';
import '../Item/Item.css';


const Item = ({producto}) => {

  return (
    
    <div className='cardContainer'>

        <div className="card">
            <div className="imgBx">
                <img src={producto.image}></img>
            </div>
            <div className="contentBx">
                <h2>{producto.name}</h2>
                <div className="consola">
                <h3>Plataforma:<span>{producto.Plataform}</span></h3>

            </div>
                <h3 className="price">Precio: {producto.price}$</h3>
                <Link to={`/item/${producto.id}`} >Comprar</Link>
            </div>    
        </div>

    </div>
)
}

export default Item;