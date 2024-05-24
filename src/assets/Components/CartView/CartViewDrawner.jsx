import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Button1 from "../Buttons/Button1";
import ButtonX from "../Buttons/ButtonX";
import "../Cart/CartDrawner.css";
import { RiShoppingCartLine } from "react-icons/ri";

const CartView = () => {
  const { cart, removeItem, totalBuy, clearCart } = useContext(CartContext);

  return (
    <div className="cartViewContainer_drawner">
      <div className="cartTitle_drawner">
        <h2>
          Carrito <RiShoppingCartLine color="black" />
        </h2>
        <Button1 onClick={clearCart}>Vaciar Carrito</Button1>
      </div>

      <div className="mapContainer_drawner">
        {cart.map((buy) => (
          <div className="cartItems_drawner" key={buy.id}>
            <img src={buy.image} alt="productImg" />
            <div className="gameTitleContainer_drawner">
              <h2>Juego</h2>
              <h3>{buy.name}</h3>
            </div>
            <div className="gameQuantityContainer_drawner">
              <h2>Cantidad</h2>
              <h3>{buy.quantity}</h3>
            </div>
            <div className="cartPriceContainer_drawner">
              <h2>Precio</h2>
              <h3>{buy.price}$</h3>
              <ButtonX onClick={() => removeItem(buy.id)}>
                <span className="text">Delete</span>
              </ButtonX>
            </div>
          </div>
        ))}
      </div>
      <div className="cartTotalContainer_drawner">
        <h3>
          Precio Total: <span>{totalBuy()}$</span>
        </h3>
        <Link to="/Checkout">
          <Button1>
            <RiShoppingCartLine color="white" /> Finalizar Compra
          </Button1>
        </Link>
        <Link to="/Store">
          <Button1>Seguir comprando</Button1>
        </Link>
      </div>
    </div>
  );
};

export default CartView;
