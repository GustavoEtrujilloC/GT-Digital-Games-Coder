import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <section id="login" className="container-login">
      <div className="box">
        <form action="">
          <h1>Login</h1>
          <div className="input">
            <input type="text" placeholder="Usuario" required />
          </div>
          <div className="input">
            <input type="password" placeholder="Contraseña" />
          </div>
          <div className="recordar">
            <label htmlFor="recordar">
              <input type="checkbox" id="recordar" />
              Recordar
            </label>
            <a href="#">Olvide Contraseña</a>
          </div>
          <button type="submit" className="btn_login">
            Acceder
          </button>
          <div className="registrate">
            <p>
              No tienes cuenta? <a href="#">Registrate</a>
            </p>
          </div>
        </form>
      </div>
      <div className="animation_loginX cuadrado"></div>
      <div className="animation_loginY cuadrado"></div>
      <div className="animation_loginY cuadrado"></div>
      <div className="animation_loginX cuadrado"></div>
      <div className="animation_loginY cuadrado"></div>
      <div className="animation_loginX cuadrado"></div>
      <div className="animation_loginY cuadrado"></div>
      <div className="animation_loginY cuadrado"></div>
    </section>
  );
};

export default Login;
