import React from "react";
import "./Footer.css";
// assets
import logo from "../../assets/images/logo.png";
// 
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="">
          <div className=" footer_row">
            <div className="footer_left">
              <img src={logo} alt="Crypteco" />
            </div>
            <div className="footer-text">
            <div className="footer_nav_col">
              <h4>Site Map</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/news-blog">News & Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
            <h4>Contact</h4>
            <p><strong>Ecostruct Holdings</strong></p>
            <p>Craigmuir Chambers<br/> Road Town, Tortola<br/> VG 1110<br/> British Virgin Islands</p>
            <a className="email"href="mailto:info@ecostructholdings.com">info@ecostructholdings.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
