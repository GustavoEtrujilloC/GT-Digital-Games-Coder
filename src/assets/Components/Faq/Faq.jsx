import { Container, Accordion } from "@mantine/core";
import classes from "./FaqSimple.module.css";
import "./Faq.css";

const Faq = ({ greeting }) => {
  return (
    <section id="faq" className="background_faq">
      <h1 className="Title">{greeting}</h1>

      <Accordion variant="separated">
        <section className="accordion_container">
          <div className="accordion">
            <h2>Preguntas generales</h2>
            <Accordion.Item className={classes.item} value="general">
              <Accordion.Control>
                <h3 className="faq_h3">¿Qué es una cuenta Primaria?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Al comprar un juego primario en GT DIGITAL GAMES te enviaremos
                  un usuario y contraseña para que lo actives en tu Ps4/Ps5. Una
                  cuenta primaria es una cuenta que incluye el juego que estas
                  comprando, solo puede ser usada para activarla en una única
                  Ps4/Ps5, así podrás disfrutar del juego que incluye la cuenta
                  en cualquier otra cuenta que este conectada a dicha Ps4/Ps5
                  luego de ser activada no debe ser utilizada nunca más. No
                  necesitaras tener acceso a internet desde la consola para
                  poder jugar el juego luego de ser descargado e instalado.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="secundaria">
              <Accordion.Control>
                <h3 className="faq_h3">¿Qué es una cuenta secundaria?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Al comprar un juego secundario en GT DIGITAL GAMES te
                  enviaremos un usuario y contraseña, con el cual podrás acceder
                  al juego comprado en cualquier Ps4/Ps5. Una cuenta secundaria
                  es una cuenta que incluye el juego que estas comprando, solo
                  puede ser usada para jugar desde el mismo usuario que te
                  enviamos y no podrá ser activada en ninguna Ps4/Ps5, sin
                  embargo, con esta cuenta secundaria podrás jugar en cualquier
                  Ps4/Ps5. Adicionalmente necesitaras tener acceso a internet en
                  la consola ya que debes estar conectado a la cuenta para poder
                  acceder al juego.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="compartir">
              <Accordion.Control>
                <h3 className="faq_h3">¿Puedo compartir mi cuenta primaria?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  No, no podrás compartir la cuenta primaria ya que solo se
                  podrá activar en una única consola. Luego de ser activada si
                  podrás jugar con cualquier usuario desde la consola activada.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              className={classes.item}
              value="compartir_secundaria"
            >
              <Accordion.Control>
                <h3 className="faq_h3">
                  ¿Puedo compartir mi cuenta secundaria?
                </h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  No, la cuenta secundaria solo puede ser usada por un usuario a
                  la vez en cualquier Ps4/Ps5 con acceso a internet.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="descarga">
              <Accordion.Control>
                <h3 className="faq_h3">
                  ¿Cómo activo, descargo, instalo los juegos comprados en GT
                  DIGITAL GAMES?
                </h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Luego de realizar tu compra y el pago sea procesado, te
                  enviaremos un correo con tu usuario y contraseña, además de
                  toda la información necesaria para que disfrutes de tu juego,
                  ya sea con cuenta primaria o secundaria.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="games-property">
              <Accordion.Control>
                <h3 className="faq_h3">
                  ¿Los juegos que compro en GT DIGITAL GAMES, son realmente
                  míos?
                </h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Si, los juegos que compres con nosotros siempre serán tuyos,
                  se te dará el usuario y contraseña que serán de tu propiedad,
                  en caso de algún problema nuestro equipo de soporte siempre
                  podrá ayudarte.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="garantia">
              <Accordion.Control>
                <h3 className="faq_h3">
                  ¿Tienen garantía los juegos comprados en GT DIGITAL GAMES?
                </h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Si, te ayudaremos durante todo el proceso hasta que tengas el
                  juego activo en tu consola, nuestro equipo de soporte siempre
                  estará para ayudarte por las diferentes formas de contacto que
                  tenemos para ti.
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </div>

          <div className="accordion2">
            <h2>Preguntas acerca de la compra</h2>
            <Accordion.Item className={classes.item} value="buy">
              <Accordion.Control>
                <h3 className="faq_h3">¿Cómo comprar?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Deberás acceder a nuestra tienda online, elegir una categoría,
                  y el producto de tu elección, luego tendrás que añadirlo al
                  carrito de compras, ir a la pasarela de pago donde se pedirán
                  algunos datos para procesar la compra y ya está! Luego nos
                  encargamos nosotros de hacerte llegar tu compra a tu correo
                  electrónico.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>
                <h3 className="faq_h3">¿Cómo pagar?</h3>{" "}
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Contamos con una pasarela de pago muy segura gestionada por
                  Paypal, con la cuel puedes pagar con diferentes métodos de
                  pago como pueden ser Paypal y tarjeta de débito/crédito.
                  Tambien tenemos disponible el pago en Bs. mediante Pago
                  Móvill.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="paypal">
              <Accordion.Control>
                <h3 className="faq_h3">¿Necesito tener cuenta Paypal?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  No, no necesitas tener cuenta Paypal para pagar con Tarjeta de
                  débito/crédito.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="pagomovil">
              <Accordion.Control>
                <h3 className="faq_h3">¿Cómo pago mediante Pago Móvil?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Para realizar el pago mediante Pago Móvil deberás elegir en
                  nuestra pasarela de pago la opción correspondiente a este
                  método de pago “Pago Móvil”, luego recibirás un correo
                  electrónico con la confirmación del pedido, luego de esto te
                  enviaremos los datos para que realices el pago.
                </p>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="soporte">
              <Accordion.Control>
                <h3 className="faq_h3">¿Cómo contacto con soporte?</h3>
              </Accordion.Control>
              <Accordion.Panel>
                <p className="faq_p">
                  Aquí tienes las diferentes formas de comunicarte con nuestro
                  equipo de soporte.
                </p>
              </Accordion.Panel>
            </Accordion.Item>
          </div>
        </section>
      </Accordion>
    </section>
  );
};

export default Faq;
