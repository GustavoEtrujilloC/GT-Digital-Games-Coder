import React from "react";
import "./Home.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdDiscount } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import { ImInfinite } from "react-icons/im";

const Home = () => {
  return (
    <>
      <section id="principal" class="contenedor-main">
        <div class="carrousel_h1">
          <div class="pre">
            <h1>Juegos digitales para</h1>
          </div>
          <div class="out">
            <div class="inner">
              <div class="element">
                <h1>PlayStation 4</h1>
              </div>
              <div class="element">
                <h1>PlayStation 5</h1>
              </div>
              <div class="element">
                <h1>PlayStation 4</h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="./pages/store.html">
            <img
              class="imgMenu imgMenu-1"
              src="./assets/img/tienda.png"
              alt="store"
            />
          </a>
        </div>
        <div>
          <a href="./pages/ps4.html">
            <img
              class="imgMenu imgMenu-2"
              src="./assets/img/ps4.png"
              alt="playstation-4"
            />
          </a>
        </div>
        <div>
          <a href="./pages/ps5.html">
            <img
              class="imgMenu imgMenu-3"
              src="./assets/img/ps5.png"
              alt="playstation-5"
            />
          </a>
        </div>
        <div>
          <a href="#">
            <img
              class="imgMenu imgMenu-4"
              src="./assets/img/preventa.png"
              alt="preventa"
            />
          </a>
        </div>
        <div class="contenedor-columnaImgLateral">
          <a href="#">
            <img
              class="imgMenuLateral imgMenu1-1"
              src="./assets/img/novedades.png"
              alt="novedades"
            />
          </a>
          <a href="./pages/faq.html">
            <img
              class="imgMenuLateral imgMenu1-2"
              src="./assets/img/faq.png"
              alt="preguntas-frecuentes"
            />
          </a>
        </div>
      </section>
      <section id="service" class="contenedor-service">
        <div class="service">
          <FaEarthAmericas fontSize={125} />
          <h2>ENTREGA INMEDIATA</h2>
          <p>
            Tenemos las mejores opciones para que puedas realizar tus pagos de
            forma segura y eficiente.
          </p>
        </div>
        <div class="service">
          <MdDiscount fontSize={125} />
          <h2>OFERTAS</h2>
          <p>
            Nuestras entregas son tramitadas luego de la comprobación de pago.
          </p>
        </div>
        <div class="service">
          <FaShieldAlt fontSize={125} />
          <h2>PAGO SEGURO</h2>
          <p>
            Contamos con los mejores precios y ofertas, al seguir nuestras redes
            sociales o registrarte en nuestro Newsletter, te enteraras de todo!
          </p>
        </div>
        <div class="service">
          <ImInfinite fontSize={125} />
          <h2>GARANTIA</h2>
          <p>
            Los juegos que compres en GT Digital Games siempre serán tuyos, en
            caso de algún problema, nuestro equipo de soporte estará para ti!
          </p>
        </div>
      </section>
      <section id="newsletter" class="contenedor-newsletter">
        <div class="contenedor_form">
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
                class="imput-name"
                type="name"
                name="Nombre"
                placeholder="Nombre"
                required
              />
              <input
                class="imput-email"
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
