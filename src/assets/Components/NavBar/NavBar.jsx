import React, {useState} from 'react';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';




const NavBar = () => {

  return (
    <>
<header  className="contenedor-header">
    <div className="contenedor-imgLogo">
      <Logo />
    </div>
    <nav>
      <ul className="navbar">
        <li><NavLink to="/home">Inicio</NavLink></li>
        <li><NavLink to="/store">Tienda</NavLink></li>
        <li><NavLink to="/categories/reserva">Reserva</NavLink></li>
        <li><NavLink to="/categories/novedades">Novedades</NavLink></li>
        <li><NavLink to="/categories/ofertas">Ofertas</NavLink></li>
{/*         <li><NavLink to="/contacto">Contacto</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/faq">Faq</NavLink></li>
 */}      </ul>
    </nav>
    <div className="CartWidget" >
      <NavLink to="/cart" >
      <CartWidget counter={15} />
      </NavLink>
      
    </div>
</header>
</>
  )
}

export default NavBar