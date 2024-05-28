import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Button1 from "../Buttons/Button1";
import ButtonX from "../Buttons/ButtonX";
import "../CartView/CartView.css";
import { RiShoppingCartLine } from "react-icons/ri";

const CartView = (opened, close) => {
  const { cart, removeItem, totalBuy, clearCart } = useContext(CartContext);

  return (
    <div className="cartViewContainer">
      <div className="cartTitle">
        <h2>
          Carrito <RiShoppingCartLine color="black" />
        </h2>
        <Button1 onClick={clearCart}>Vaciar Carrito</Button1>
      </div>

      <div className="mapContainer">
        {cart.map((buy) => (
          <div className="cartItems" key={buy.id}>
            <img src={buy.image} alt="productImg" />
            <div className="gameTitleContainer">
              <h2>Juego</h2>
              <h3>{buy.name}</h3>
            </div>
            <div className="gameQuantityContainer">
              <h2>Cantidad</h2>
              <h3>{buy.quantity}</h3>
            </div>
            <div className="cartPriceContainer">
              <h2>Precio</h2>
              <h3>{buy.price}$</h3>
              <ButtonX onClick={() => removeItem(buy.id)}>
                <span className="text">Quitar</span>
              </ButtonX>
            </div>
          </div>
        ))}
      </div>
      <div className="cartTotalContainer">
        <h3>
          Precio Total: <span>{totalBuy()}$</span>
        </h3>
        <Link to="/Checkout">
          <Button1 onClick={close}>
            <RiShoppingCartLine color="white" /> Finalizar Compra
          </Button1>
        </Link>
        <Link to="/Store">
          <Button1 onClick={close}>Seguir comprando</Button1>
        </Link>
      </div>
    </div>
  );
};

export default CartView;
