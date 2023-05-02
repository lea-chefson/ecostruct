import React from "react";
import "./Footer.css";
// assets
import linkedin from "../../assets/icons/linkedinLogo.png";
import youtube from "../../assets/icons/youtubeLogo.png";
import facebook from "../../assets/icons/facebookLogo.png";
import instagram from "../../assets/icons/instagramLogo.png";
import twitter from "../../assets/icons/twitterLogo.png";
import reddit from "../../assets/icons/redditLogo.png";
import discord from "../../assets/icons/discordLogo.png";
import logo from "../../assets/images/logo.png";
import Jump from "react-reveal/Jump";
// 
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="cs_container">
          <div className="cs_row footer_row">
            <div className="footer_left">
              <img src={logo} alt="Crypteco" />
            </div>
            <div className="footer_nav_col">
              <h4>Site Map</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/whoweare">Who we are</Link>
                </li>
                <li>
                  <Link to="/business/gaiaswap">GAIASWAP </Link>
                </li>
                <li>
                  <Link to="/news-blog">News & Blogs</Link>
                </li>
                <li>
                  <Link to="/business/ecoInvestments">Eco-Investments</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
