import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import "./ItemCount.css";
import Button1 from "../Buttons/Button1";
import { notifications } from "@mantine/notifications";
import { VscError } from "react-icons/vsc";
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
      notifications.show({
        color: "red",
        title: "Error",
        message: "Debes seleccionar una cantidad",
        autoClose: 5000,
        icon: <VscError size={100} />,
      });
      return;
    }
    if (account === "Cuenta") {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Debes seleccionar una cuenta",
        autoClose: 5000,
        icon: <VscError size={100} />,
      });
      return;
    }
    if (precio === undefined || precio === null) {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Producto no disponible",
        autoClose: 5000,
        icon: <VscError size={100} />,
      });
      return;
    }

    onAdd(
      count,
      precio,
      account,
      notifications.show({
        title: "Carrito",
        color: "green",
        autoClose: 5000,
        message: `Agregaste ${producto} al carrito `,
      })
    );
  };

  return (
    <div className="input">
      <div className="quantityContainer">
        <p>Cantidad</p>
        <div className="inputNumberContainer">
          <FaMinusSquare className="input__minus" onClick={restar} />
          <span className="input__number">{count}</span>
          <FaPlusSquare className="input__plus" onClick={sumar} />
        </div>
      </div>
      <div className="btnContainer">
        <Button1 width={200} onClick={sendQuantity}>
          Comprar
        </Button1>
      </div>
    </div>
  );
};

export default ItemCount;
