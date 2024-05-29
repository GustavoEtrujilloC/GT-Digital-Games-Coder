import React, { useContext, useState } from "react";
import CartView from "../CartView/CartView";
import { CartContext } from "../../../context/CartContext";
import "../Cart/Cart.css";
import { TbShoppingBagX } from "react-icons/tb";
import Button1 from "../Buttons/Button1";
import { Link } from "react-router-dom";

const CartDrawer = ({ opened, close }) => {
  const { cart } = useContext(CartContext);

  return (
    <section className="cart_container_drawer">
      {!cart.length ? (
        <div className="emptyCartContainer">
          <p className="emptyCart">
            {" "}
            El carrito esta vacio <TbShoppingBagX fontSize={50} />{" "}
          </p>
          <Link to="/store">
            <Button1 onClick={close}>Ir a la tienda</Button1>
          </Link>
        </div>
      ) : (
        <CartView opened={opened} close={close} />
      )}
    </section>
  );
};

export default CartDrawer;
