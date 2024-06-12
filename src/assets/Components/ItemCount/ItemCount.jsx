import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import "./ItemCount.css";
import Button1 from "../Buttons/Button1";
import { notifications } from "@mantine/notifications";

const ItemCount = ({
  stock,
  account,
  onAdd,
  producto,
  precio,
  tipoCuenta,
  precioPrimario,
  precioSecundario,
}) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count === 0) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) setCount(count - 1);
  };

  const sendQuantity = () => {
    const precio =
      account === "Cuenta Primaria" ? precioPrimario : precioSecundario;

    if (count !== 1 || precio === 0) {
      alert("Selecciona una cantidad");
      return;
    }
    if (account === "Cuenta") {
      alert("Selecciona una cuenta");
      return;
    }
    if (precio === undefined || precio === null) {
      alert("Producto no disponible");
      return;
    }

    onAdd(
      count,
      precio,
      account,
      notifications.show({
        title: "Carrito",
        color: "orange",
        autoClose: 5000,
        style: { fontWeight: "bold", color: "black" },
        message: `Agregaste ${producto} al carrito `,
      })
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
