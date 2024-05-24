import React, { useContext, useState } from "react";
import CartViewDrawner from "../CartView/CartViewDrawner";
import { CartContext } from "../../../context/CartContext";
import "../Cart/CartDrawner.css";
import { TbShoppingBagX } from "react-icons/tb";
import Button1 from "../Buttons/Button1";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <section className="cart_container_drawner">
      {!cart.length ? (
        <div className="emptyCartContainer_drawner">
          <p className="emptyCart_drawner">
            {" "}
            El carrito esta vacio <TbShoppingBagX fontSize={40} />{" "}
          </p>
          <Link to="/store">
            <Button1>Ir a la tienda</Button1>
          </Link>
        </div>
      ) : (
        <CartViewDrawner />
      )}
    </section>
  );
};

export default Cart;
