import {
  serverTimestamp,
  addDoc,
  doc,
  collection,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import "../Checkout/Checkout.css";
import { useContext, useState } from "react";
import { db } from "../../../Services/firebase";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Button1 from "../Buttons/Button1";
import { LiaFileInvoiceSolid } from "react-icons/lia";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState("");
  const { cart, totalBuy, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  const userData = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const checkout = (e) => {
    e.preventDefault();
    if (!user.name) {
      alert("Por favor, ingresa tu nombre");
    } else if (!user.lastname) {
      alert("Por favor, ingresa tu apellido");
    } else if (!user.email) {
      alert("Por favor, ingresa tu correo electrónico");
    } else if (!user.phone) {
      alert("Por favor, ingresa tu número de teléfono");
    } else if (user.email !== validateEmail) {
      alert("El correo electrónico no es válido");
    } else if (user.phone.length >= 10) {
      alert("El número de teléfono no debe tener más de 10 dígitos");
    } else {
      let order = {
        user,
        item: cart,
        Total: totalBuy(),
        Date: serverTimestamp(),
      };
      const sales = collection(db, "orders");
      addDoc(sales, order)
        .then((res) => {
          //act Stock
          /*                 cart.foreach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                    .then((dbdoc)=> {
                        updateDoc(docRef, {stock: dbdoc.data().stock - item.quantity})
                    })
                })
 */ setOrderId(res.id);
          clearCart();
        })
        .catch((error) => {
          console.error("Error al procesar el pedido:", error);
          alert(
            "Hubo un error al procesar el pedido. Por favor, inténtalo de nuevo más tarde."
          );
        });
    }
  };

  return (
    <div>
      {orderId !== "" ? (
        <div className="thanksContainer">
          <h4>{user.name}, gracias por confiar en GT Digital Games</h4>
          <h5>
            Tu numero de pedido es el {orderId}, pronto te enviaremos un correo
            con todos los datos de tu compra.
          </h5>
          <Link to="/">
            <Button1>Volver a Inicio</Button1>
          </Link>
        </div>
      ) : (
        <div className="checkoutContainer">
          <form className="dataUsersContainer">
            <h2>
              Detalles de facturación <LiaFileInvoiceSolid />
            </h2>

            <label className="dataUsers__name">
              <input
                name="name"
                placeholder="Nombre"
                type="text"
                value={user.name || ""}
                onChange={userData}
              />
              <input
                name="lastname"
                placeholder="Apellidos"
                type="text"
                value={user.lastname || ""}
                onChange={userData}
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={user.email || ""}
                onChange={userData}
              />
              <input
                name="second-email"
                placeholder="Ingresa de nuevo tu email"
                type="email"
                value={validateEmail}
                onChange={(e) => setValidateEmail(e.target.value)}
              />
              <input
                name="phone"
                placeholder="Telefono"
                type="text"
                value={user.phone || ""}
                onChange={userData}
              />
            </label>
            <div className="textarea_checkout">
              <h4>Informacion adicional (Opcional)</h4>
              <textarea
                rows="4"
                cols="50"
                name="note"
                placeholder="Notas del pedido"
                value={user.note || ""}
                onChange={userData}
              />
            </div>
          </form>
          <div className="ordersContainer">
            <div className="orderDetails">
              <h2>Tu pedido</h2>
              <div className="orderDetails__title">
                <h2>Juego</h2>
                <h2>Nombre</h2>
                <h2>Precio</h2>
              </div>
              {cart.map((buy) => (
                <div className="orderDetails__resume" key={buy.id}>
                  <img src={buy.image} alt="" />
                  <h3>{buy.name}</h3>
                  <h3>{buy.price}$</h3>
                </div>
              ))}
              <div className="orderDetails__totalContainer">
                <h3>
                  Total a pagar:{" "}
                  <span className="orderDetails__span">{totalBuy()}$</span>
                </h3>
                <Link to="/cart">
                  <Button1>Volver a Carrito</Button1>
                </Link>
                <Button1 font="20px" onClick={checkout}>
                  Pagar
                </Button1>
              </div>
            </div>
            <div className="orderPayout"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
