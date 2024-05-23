import React from "react";
import "./Contacto.css";

const Contacto = ({ greeting }) => {
  return (
    <section id="contacto" className="contenedor-contacto">
      <form action="">
        <h1 className="title">{greeting}</h1>
        <div className="informacion">
          <input type="text" id="nombre" placeholder="Nombre" required />
          <input type="text" id="apellido" placeholder="Apellido" required />
          <input type="email" id="email" placeholder="Email" required />
          <input type="number" id="movil" placeholder="Movil" required />
          <textarea required name="" id="" cols="30" rows="10">
            Escribe tu mensaje
          </textarea>
          <div className="button_contacto">
            <input type="submit" id="button" value="Enviar" required />
          </div>
        </div>
        <div className="contacto_horario">
          <div>
            <h3>telefono</h3>
            <p>555-55-55-55</p>
          </div>
          <div>
            <h3>email</h3>
            <p>soporte@gtdigitalgames.com</p>
          </div>
          <div>
            <h3>horario de atencion y soporte</h3>
            <p>
              Lunes a Viernes: de 10 hrs a 18 hrs. <br />
              Sabados: 10 hrs a 14 hrs. <br />
              Domingos: No laborable.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
