import { Link } from "react-router-dom";
import "../Item/Item.css";

const Item = ({ producto }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="imgBx">
          <img src={producto.imagenPortada}></img>
        </div>
        <div className="contentBx">
          <h2>{producto.titulo}</h2>
          <div className="consola">
            <h3>
              Plataforma:<span>{producto.plataforma}</span>
            </h3>
          </div>
          <h3 className="price">Precio: {producto.precio}$</h3>
          <Link to={`/item/${producto.id}`}>Comprar</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
