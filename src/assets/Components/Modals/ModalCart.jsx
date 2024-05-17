import React from "react";
import "../Modals/ModalCart.css";
import CartView from "../CartView/CartView";

const ModalCart = ({ isOpen, toggleOpen, children }) => {
  return (
    <div className={`overlay ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
      <div className="modal">
        <CartView />
      </div>
    </div>
  );
};

export default ModalCart;
