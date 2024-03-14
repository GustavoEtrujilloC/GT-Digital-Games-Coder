import React from 'react';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <React.StrictMode>
<header  className="contenedor-header">
    <div className="contenedor-imgLogo">
      <Logo />
    </div>
    <nav>
      <ul className="navbar">
        <li><NavLink to="index.html">Inicio</NavLink></li>
        <li><NavLink to="/store">Tienda</NavLink></li>
        <li><NavLink to="/categories/ps4">Ps4</NavLink></li>
        <li><NavLink to="/categories/reserva">Reserva</NavLink></li>
        <li><NavLink to="/categories/novedades">Novedades</NavLink></li>
        <li><NavLink to="/categories/ofertas">Ofertas</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/faq">Faq</NavLink></li>
      </ul>
    </nav>
      <div className="CartWidget">
        <CartWidget />
      
      </div>
</header>
</React.StrictMode>
  )
}

export default NavBar