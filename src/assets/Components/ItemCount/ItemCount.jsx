import React from "react";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import "./ItemCount.css";
import Button1 from "../Buttons/Button1";
import { notifications } from "@mantine/notifications";

const ItemCount = ({ stock, onAdd, producto, precio }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  const sendQuantity = () => {
    if (
      precio === undefined || precio === null
        ? alert("Producto no disponible")
        : onAdd(
            count,
            notifications.show({
              title: "Carrito",
              color: "orange",
              autoClose: 5000,
              style: { fontWeight: "bold", color: "black" },

              message: `"Agregaste ${producto} al carrito "`,
            })
          )
    );
  };

  return (
    <div className="input">
      <div className="inputNumberContainer">
        <FaMinusSquare className="input__minus" onClick={restar} />
        <span className="input__number">{count}</span>
        <FaPlusSquare className="input__plus" onClick={sumar} />
      </div>
      <div className="btnContainer">
        <Button1 onClick={sendQuantity}>Comprar</Button1>
      </div>
    </div>
  );
};

export default ItemCount;
