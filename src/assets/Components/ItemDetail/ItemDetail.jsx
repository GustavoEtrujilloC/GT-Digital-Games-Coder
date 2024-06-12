import { CartContext } from "../../../context/CartContext";
import { useContext, useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import Button1 from "../Buttons/Button1";
import { NativeSelect } from "@mantine/core";
import { PriceContext } from "../../../context/PriceContext";
import { AccountContext } from "../../../context/AccountContext";

const ItemDetail = ({ producto }) => {
  const [buy, setBuy] = useState(false);
  const { addItem } = useContext(CartContext);
  const [value, setValue] = useState("Cuenta");
  const { precioSeleccionado, setPrecioSeleccionado } =
    useContext(PriceContext);
  const { account, setAccount } = useContext(AccountContext);

  useEffect(() => {
    if (producto) {
      setPrecioSeleccionado(
        value === "Cuenta Primaria"
          ? producto.precioPrimario
          : value === "Cuenta Secundaria"
          ? producto.precioSecundario
          : 0
      );
    }
  }, [value, producto, setPrecioSeleccionado]);

  useEffect(() => {
    setAccount(value);
  }, [value, setAccount]);

  console.log(precioSeleccionado);
  console.log(account);

  const onAdd = (quantity) => {
    if (quantity > 0) {
      addItem(producto, quantity);
      setBuy(true);
    } else {
      alert("Debes seleccionar una cantidad válida");
      return;
    }
  };

  return (
    <section className="content">
      <article className="gallery">
        <img
          className="gallery__image-container"
          src={producto.imagenPortada}
          alt={`${producto.titulo} portada`}
        />
      </article>
      <article className="details">
        <div className="details_date_container">
          <h4>Fecha de Salida: {producto.salida}</h4>
          <h4>Plataforma: {producto.plataforma}</h4>
        </div>
        <h2 className="details__company">{producto.desarrollador}</h2>
        <h2 className="details__title">{producto.titulo}</h2>
        <p className="details__description">{producto.descripcion}</p>
        <div className="details__prices">
          <div>
            <NativeSelect
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              data={["Cuenta", "Cuenta Primaria", "Cuenta Secundaria"]}
              label="Tipo de cuenta"
              withAsterisk
            />

            <p>Antes</p>
            <p className="details__before">{producto.precioOriginal}$</p>
          </div>
          <div>
            <p>Ahora</p>
            <p className="details__now">
              {value === "Cuenta"
                ? 0
                : value === "Cuenta Primaria"
                ? producto.precioPrimario
                : producto.precioSecundario}
              $
            </p>
          </div>

          <p>{producto.finOferta}</p>
        </div>
        {buy ? (
          <div className="btnCenter">
            <NavLink to="/cart">
              <Button1>Ir al carrito</Button1>
            </NavLink>
          </div>
        ) : (
          <ItemCount
            producto={producto.titulo}
            stock={producto.stock}
            precioPrimario={producto.precioPrimario}
            precioSecundario={producto.precioSecundario}
            onAdd={onAdd}
            account={account}
          />
        )}
        {producto.stock === 3 && <p>Últimos 3 disponibles!!</p>}
        {producto.stock === 2 && <p>Últimos 2 disponibles!!</p>}
        {producto.stock === 1 && <p>Última unidad disponible!!</p>}
      </article>
    </section>
  );
};

export default ItemDetail;
