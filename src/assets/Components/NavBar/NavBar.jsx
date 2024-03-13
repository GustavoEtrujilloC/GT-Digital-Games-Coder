import React from 'react';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
  return (
    <React.StrictMode>
<header  className="contenedor-header">
    <div className="contenedor-imgLogo">
      <Logo />
    </div>
    <nav>
      <ul className="navbar">
        <li><a className="active" href="index.html">Inicio</a></li>
        <li><a href="#">Tienda</a></li>
        <li><a href="#">Ps4</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contacto</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Faq</a></li>
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