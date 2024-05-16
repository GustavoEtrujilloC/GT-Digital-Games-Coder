import { React, useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [acordeon, setAcordeon] = useState(null);

  return (
    <section className="background_faq">
      <section id="header_faq" className="faq_h1">
        <h1>
          <span>FAQ</span>
          <br />
          Preguntas Frecuentes
        </h1>
      </section>
      <section id="faq" className="container_faq">
        <div className="acordeon_1">
          <h2>Preguntas generales</h2>
          <details>
            <summary>
              <h3>¿Qué es una cuenta Primaria?</h3>
            </summary>
            <p>
              Al comprar un juego primario en GT DIGITAL GAMES te enviaremos un
              usuario y contraseña para que lo actives en tu Ps4/Ps5. Una cuenta
              primaria es una cuenta que incluye el juego que estas comprando,
              solo puede ser usada para activarla en una única Ps4/Ps5, así
              podrás disfrutar del juego que incluye la cuenta en cualquier otra
              cuenta que este conectada a dicha Ps4/Ps5 luego de ser activada no
              debe ser utilizada nunca más. No necesitaras tener acceso a
              internet desde la consola para poder jugar el juego luego de ser
              descargado e instalado.
            </p>
          </details>
          <div className="container_acordeon_1">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Qué es una cuenta secundaria?</h3>
              </summary>
              <p>
                Al comprar un juego secundario en GT DIGITAL GAMES te enviaremos
                un usuario y contraseña, con el cual podrás acceder al juego
                comprado en cualquier Ps4/Ps5. Una cuenta secundaria es una
                cuenta que incluye el juego que estas comprando, solo puede ser
                usada para jugar desde el mismo usuario que te enviamos y no
                podrá ser activada en ninguna Ps4/Ps5, sin embargo, con esta
                cuenta secundaria podrás jugar en cualquier Ps4/Ps5.
                Adicionalmente necesitaras tener acceso a internet en la consola
                ya que debes estar conectado a la cuenta para poder acceder al
                juego.
              </p>
            </details>
          </div>
          <div className="container_acordeon_1">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Puedo compartir mi cuenta primaria?</h3>
              </summary>
              <p>
                No, no podrás compartir la cuenta primaria ya que solo se podrá
                activar en una única consola. Luego de ser activada si podrás
                jugar con cualquier usuario desde la consola activada.
              </p>
            </details>
          </div>
          <div className="container_acordeon_1">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Puedo compartir mi cuenta secundaria?</h3>
              </summary>
              <p>
                No, la cuenta secundaria solo puede ser usada por un usuario a
                la vez en cualquier Ps4/Ps5 con acceso a internet.
              </p>
            </details>
          </div>
          <div className="container_acordeon_1">
            <details className="titulo_acordeon">
              <summary>
                <h3>
                  ¿Cómo activo, descargo, instalo los juegos comprados en GT
                  DIGITAL GAMES?
                </h3>
              </summary>
              <p>
                Luego de realizar tu compra y el pago sea procesado, te
                enviaremos un correo con tu usuario y contraseña, además de toda
                la información necesaria para que disfrutes de tu juego, ya sea
                con cuenta primaria o secundaria.
              </p>
            </details>
          </div>
          <div className="container_acordeon_1">
            <details className="titulo_acordeon">
              <summary>
                <h3>
                  ¿Los juegos que compro en GT DIGITAL GAMES, son realmente
                  míos?
                </h3>
              </summary>
              <p>
                Si, los juegos que compres con nosotros siempre serán tuyos, se
                te dará el usuario y contraseña que serán de tu propiedad, en
                caso de algún problema nuestro equipo de soporte siempre podrá
                ayudarte.
              </p>
            </details>
          </div>
          <div className="container_acordeon_1">
            <details className="titulo_acordeon">
              <summary>
                <h3>
                  ¿Tienen garantía los juegos comprados en GT DIGITAL GAMES?
                </h3>
              </summary>
              <p>
                Si, te ayudaremos durante todo el proceso hasta que tengas el
                juego activo en tu consola, nuestro equipo de soporte siempre
                estará para ayudarte por las diferentes formas de contacto que
                tenemos para ti.
              </p>
            </details>
          </div>
        </div>
        <div className="acordeon_2">
          <h2>Preguntas acerca de la compra</h2>
          <div className="container_acordeon_2">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Cómo comprar?</h3>
              </summary>
              <p>
                Deberás acceder a nuestra tienda online, elegir una categoría, y
                el producto de tu elección, luego tendrás que añadirlo al
                carrito de compras, ir a la pasarela de pago donde se pedirán
                algunos datos para procesar la compra y ya está! Luego nos
                encargamos nosotros de hacerte llegar tu compra a tu correo
                electrónico.
              </p>
            </details>
          </div>
          <div className="container_acordeon_2">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Cómo pagar?</h3>
              </summary>
              <p>
                Contamos con una pasarela de pago muy segura gestionada por
                Paypal, con la cuel puedes pagar con diferentes métodos de pago
                como pueden ser Paypal y tarjeta de débito/crédito. Tambien
                tenemos disponible el pago en Bs. mediante Pago Móvill.
              </p>
            </details>
          </div>
          <div className="container_acordeon_2">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Necesito tener cuenta Paypal?</h3>
              </summary>
              <p>
                No, no necesitas tener cuenta Paypal para pagar con Tarjeta de
                débito/crédito.
              </p>
            </details>
          </div>
          <div className="container_acordeon_2">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Cómo pago mediante Pago Móvil?</h3>
              </summary>
              <p>
                Para realizar el pago mediante Pago Móvil deberás elegir en
                nuestra pasarela de pago la opción correspondiente a este método
                de pago “Pago Móvil”, luego recibirás un correo electrónico con
                la confirmación del pedido, luego de esto te enviaremos los
                datos para que realices el pago.
              </p>
            </details>
          </div>
          <div className="container_acordeon_2">
            <details className="titulo_acordeon">
              <summary>
                <h3>¿Cómo contacto con soporte?</h3>
              </summary>
              <p>
                Aquí tienes las diferentes formas de comunicarte con nuestro
                equipo de soporte.
                <a href="./contacto.html">Contacto</a>
              </p>
            </details>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Faq;
