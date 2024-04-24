import React, {useState, useEffect} from 'react';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { IoIosHome, IoIosWarning } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";




const NavBar = () => {

  const [menu , setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > 100 ) {
        if(menuVisible)
        setMenuVisible(false);
      } else {
        if(!menuVisible)
        setMenuVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuVisible]); 

  const handleClickScroll = () => {
    setMenuVisible(!menuVisible);
  };

  

  const links = [
    {to:"/home", text:'Inicio', icon:<IoIosHome className='iconMenu'/>},
    {to:"/store", text:'Tienda', icon:<GiConsoleController className='iconMenu' />},
    {to:"/categories/reserva", text:'Reserva', icon:<IoIosWarning className='iconMenu' />},
    {to:"/categories/novedades", text:'Novedades', icon:<FaTruckFast className='iconMenu' />},
    {to:"/categories/ofertas", text:'Ofertas', icon:<BiSolidDiscount className='iconMenu' />}
  ] 
  
  return (
    <>
<header  className={`contenedor-header ${menuVisible ? '' : 'hide'}`}>
    <div className="contenedor-imgLogo">
      <Logo />
    </div>
    <nav>
      <ul className={menu ? "navBar" : "navBar active"} onClick={handleClick} >
          {links.map((links, index)=> (
        <li  key={index} >
          <NavLink className='navLinks' to={links.to}>{links.icon}{links.text}</NavLink>
        </li>
          ))}
      </ul>
    </nav>
        <div className="CartWidget" >
          <NavLink to="/cart" >
            <CartWidget  />
          </NavLink>
          <i className='menuIcon' onClick={handleClick}>
        { menu ? <IoMenu className='menuIconO' color='#f4f4f4' /> : <FaRegWindowClose className='menuIconC' color='#f4f4f4' /> }
          </i>
        </div>

      </header>
    </>
)}; 



      
      
          


export default NavBar