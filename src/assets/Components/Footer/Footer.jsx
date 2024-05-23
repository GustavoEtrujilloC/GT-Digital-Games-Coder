import React from "react";
import "./Footer.css";
import { Menu, Button } from "@mantine/core";
import { IoIosHome } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { FaUser, FaQuestionCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FaYoutube, FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer_container">
        <section className="logo_container">
          <Logo />
        </section>
        <section className="time_container">
          <IconContext.Provider value={{ className: "time_icon_css" }}>
            <MdAccessTime />
          </IconContext.Provider>
          <h3>Atención y Soporte Técnico</h3>
          <p>
            Lunes a Viernes: de 10 hrs a 18 hrs. <br />
            Sabados: 10 hrs a 14 hrs. <br />
            Domingos: No laborable.
          </p>
        </section>
        <IconContext.Provider value={{ className: "social_icon_css" }}>
          <section className="social_container">
            <h2>Redes Sociales</h2>
            <div className="social_icons">
              <NavLink to="http://www.youtube.com">
                <FaYoutube />
              </NavLink>
              <NavLink to="http://www.facebook.com">
                <FaFacebookSquare />
              </NavLink>
              <NavLink to="http://www.whatsapp.com">
                <IoLogoWhatsapp />
              </NavLink>
              <NavLink to="http://www.x.com">
                <FaSquareXTwitter />
              </NavLink>
            </div>
          </section>
        </IconContext.Provider>
      </footer>
      <div id="foot" className="foot">
        <p>Todos los derechos reservados</p>
      </div>
    </>
  );
};

<section>
  <div id="foot" className="foot">
    <p>Todos los derechos reservados</p>
  </div>
</section>;

export default Footer;

{
  /* <Menu className="menu_button" shadow="md" width={200}>
      <Menu.Target>
        <Button>Menu</Button>
      </Menu.Target>

      <Menu.Dropdown className="menu_container">
        <Menu.Label className="menu_label">Menu</Menu.Label>
        <NavLink className="navLinks_menu" to="/">
          <Menu.Item className="item_menu">
            Inicio <IoIosHome className="iconMenu" />
          </Menu.Item>
        </NavLink>
        <NavLink className="navLinks_menu" to="/store">
          <Menu.Item className="item_menu">
            Tienda <GiConsoleController className="iconMenu" />
          </Menu.Item>
        </NavLink>
        <NavLink className="navLinks_menu" to="/faq">
          <Menu.Item className="item_menu">
            F.A.Q <FaQuestionCircle className="iconMenu" />
          </Menu.Item>
        </NavLink>
        <NavLink className="navLinks_menu" to="/contacto">
          <Menu.Item className="item_menu">
            Contacto <FaUser className="iconMenu" />
          </Menu.Item>
        </NavLink>
        <Menu.Divider />
        <NavLink className="navLinks_menu" to="/login">
          <Menu.Item className="item_menu">
            Login <FaUser className="iconMenu" />
          </Menu.Item>
        </NavLink>
      </Menu.Dropdown>
    </Menu>

 */
}
