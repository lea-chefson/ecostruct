import React, { useState, useEffect } from "react";
import "./Header.css";
// assets
import logo from "../../assets/images/logo.png";
import logoNav from "../../assets/images/logoNav.png";
import { Link } from "react-router-dom";

// ================= Header =======================
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <>
      <header className={`header`}>
        <div className="cs_container">
          <div className="cs_row header_row">
            <Link onClick={closeMenu} className="nav_logo" to="/">
              <img src={logoNav} alt="" />
            </Link>
            <nav className={`menu_list ${menuOpen ? " menuOpened" : ""}`}>
              <img src={logo} alt="" />
              <ul>
                <li>
                  <Link onClick={closeMenu} to="/news">
                    Our News
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="header_menu_btn"
            >
              {menuOpen ? (
                <i className="fa fa-times" area-hidden="true"></i>
              ) : (
                <i className="fa fa-bars" area-hidden="true"></i>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="header_backdrop" onClick={closeMenu}></div>
        )}
      </header>
    </>
  );
};

export default Header;
