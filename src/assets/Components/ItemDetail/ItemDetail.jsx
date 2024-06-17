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
          : "00.00"
      );
    }
  }, [value, producto, setPrecioSeleccionado]);

  useEffect(() => {
    setAccount(value);
  }, [value, setAccount]);

  const onAdd = (quantity) => {
    if (quantity > 0 && quantity < 2) {
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
        <h2 className="details__company">{producto.desarrollador}</h2>
        <h2 className="details__title">{producto.titulo}</h2>
        <div className="details__prices_container">
          <div className="details__prices">
            <div>
              <NativeSelect
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                data={["Cuenta", "Cuenta Primaria", "Cuenta Secundaria"]}
                label="Tipo de cuenta"
                size="md"
                withAsterisk
              />
            </div>
            <div className="details__before_now">
              <p>Antes</p>
              <p className="details__before">{producto.precioOriginal}$</p>
            </div>
            <div className="details__before_now">
              <p>Ahora</p>
              <p className="details__now">
                {value === "Cuenta"
                  ? "00.00"
                  : value === "Cuenta Primaria"
                  ? producto.precioPrimario
                  : producto.precioSecundario}
                $
              </p>
            </div>
          </div>
          <div className="account_info">
            {value === "Cuenta" ? null : value === "Cuenta Primaria" ? (
              <p>
                Una cuenta primaria es una cuenta que incluye el juego que estas
                comprando, solo puede ser usada para activarla en una única
                Ps4/Ps5, así podrás disfrutar del juego que incluye la cuenta en
                cualquier otra cuenta que este conectada a dicha Ps4/Ps5. Luego
                de ser activada no debe ser utilizada nunca más. No necesitaras
                tener acceso a internet desde la consola para poder jugar el
                juego luego de ser descargado e instalado.
              </p>
            ) : (
              <p>
                Una cuenta secundaria es una cuenta que incluye el juego que
                estas comprando, solo puede ser usada para jugar desde el mismo
                usuario que te enviamos y no podrá ser activada en ninguna
                Ps4/Ps5.
              </p>
            )}
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
          <p>{producto.finOferta}</p>
        </div>
        <p className="details__description">{producto.descripcion}</p>
      </article>
    </section>
  );
};

export default ItemDetail;
