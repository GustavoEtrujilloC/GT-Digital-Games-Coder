import React, { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { IoIosHome, IoIosWarning } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidDiscount } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose, FaUser, FaQuestionCircle } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const NavBar = ({ onClickModal }) => {
  const [menu, setMenu] = useState(true);

  const handleClick = () => {
    setMenu(!menu);
  };

  const [menuVisible, setMenuVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = currentScrollPos < prevScrollPos;

      setMenuVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const links = [
    { to: "/", text: "Inicio", icon: <IoIosHome className="iconMenu" /> },
    {
      to: "/store",
      text: "Tienda",
      icon: <GiConsoleController className="iconMenu" />,
    },
    {
      to: "/categories/reserva",
      text: "Reserva",
      icon: <IoIosWarning className="iconMenu" />,
    },
    {
      to: "/categories/novedades",
      text: "Novedades",
      icon: <FaTruckFast className="iconMenu" />,
    },
    {
      to: "/categories/ofertas",
      text: "Ofertas",
      icon: <BiSolidDiscount className="iconMenu" />,
    },
    {
      to: "/faq",
      text: "FAQ",
      icon: <FaQuestionCircle className="iconMenu" />,
    },
    {
      to: "/contacto",
      text: "Contacto",
      icon: <MdContactPhone className="iconMenu" />,
    },

    { to: "/login", text: "Login", icon: <FaUser className="iconMenu" /> },
  ];

  return (
    <>
      <header className={`contenedor-header ${menuVisible ? "" : "hide"}`}>
        <div className="contenedor-imgLogo">
          <Logo />
        </div>
        <nav>
          <ul
            className={menu ? "navBar" : "navBar active"}
            onClick={handleClick}
          >
            {links.map((links, index) => (
              <li key={index}>
                <NavLink className="navLinks" to={links.to}>
                  {links.icon}
                  {links.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="CartWidget" onClick={onClickModal}>
          <CartWidget onClickModal={onClickModal} />

          <i className="menuIcon" onClick={handleClick}>
            {menu ? (
              <IoMenu className="menuIconO" color="#f4f4f4" />
            ) : (
              <FaRegWindowClose className="menuIconC" color="#f4f4f4" />
            )}
          </i>
        </div>
      </header>
    </>
  );
};

export default NavBar;
