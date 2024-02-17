import React, { useContext, useState } from "react";
import "../Assets/styles/Navbar.scss";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import ModalDialog from "../ModalDialog/ModalDialog";
import { Context } from "../../Context/Products";

const Navbar = () => {
  const [{ lang, basket }, dispatch] = useContext(Context);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const changeLang = () => {
    const setLang = lang === "sq" ? "en" : "sq";
    localStorage.setItem("lang", setLang);
    dispatch({
      type: "LANG",
      payland: { lang: setLang }
    })
  }

  console.log("Lang", lang)
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <NavLink to="/" className="logo-link">
          <h1>
            Sneak<span>Peak</span>
          </h1>
        </NavLink>

        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>


        

        <ul className={`nav-links ${menuVisible ? "active" : ""}`}>
          
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          
          <li>
            <NavLink to="/shopall">Shop</NavLink>
          </li>
          
          &nbsp;&nbsp;&nbsp;
          
          <li className="shopallicon">
            <span onClick={() => setModal(true)} className="shopall-icon-circle">
            <ShoppingCartIcon />
              {(basket.length > 0) && <span>{basket.length}</span>}
              
            </span>
          </li>
        </ul>

      </div>
      <ModalDialog open={modal && (basket.length > 0)} handleClose={() => setModal(false)} />
    </div>
  );
};

export default Navbar;
