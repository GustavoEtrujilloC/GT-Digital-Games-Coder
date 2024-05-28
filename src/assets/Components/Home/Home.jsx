import React from "react";
import "./Home.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { ImInfinite } from "react-icons/im";
import CardsCarousel from "../Carrousel/CardsCarousel";

const Home = () => {
  return (
    <>
      <section id="principal" className="contenedor-main">
        <CardsCarousel />
      </section>
      <section id="service" className="contenedor-service">
        <div className="service">
          <FaEarthAmericas fontSize={125} />
          <h2>ENTREGA INMEDIATA</h2>
          <p>
            Tenemos las mejores opciones para que puedas realizar tus pagos de
            forma segura y eficiente.
          </p>
        </div>
        <div className="service">
          <MdDiscount fontSize={125} />
          <h2>OFERTAS</h2>
          <p>
            Nuestras entregas son tramitadas luego de la comprobación de pago.
          </p>
        </div>
        <div className="service">
          <FaShieldAlt fontSize={125} />
          <h2>PAGO SEGURO</h2>
          <p>
            Contamos con los mejores precios y ofertas, al seguir nuestras redes
            sociales o registrarte en nuestro Newsletter, te enteraras de todo!
          </p>
        </div>
        <div className="service">
          <ImInfinite fontSize={125} />
          <h2>GARANTIA</h2>
          <p>
            Los juegos que compres en GT Digital Games siempre serán tuyos, en
            caso de algún problema, nuestro equipo de soporte estará para ti!
          </p>
        </div>
      </section>
      <section id="newsletter" className="contenedor-newsletter">
        <div className="contenedor_form">
          <div>
            <h2>Newsletter</h2>
            <p>
              Suscribete para recibir actualizaciones de ofertas, cupones de
              descuento y promociones.
            </p>
          </div>
          <div>
            <form action="">
              <input
                className="imput-name"
                type="name"
                name="Nombre"
                placeholder="Nombre"
                required
              />
              <input
                className="imput-email"
                type="email"
                name="correo electronico"
                placeholder="Email"
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
