import React, { useState } from "react";
import Logo from "./../../assets/travigoLogo.svg";
import { FiXSquare, FiAlignJustify } from "react-icons/fi";
import "./header.css";
import "./navbar";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-links">
        <div className="header-links-navbar">
          <div className="navbar-link">
            <a href="#home">Home</a>
          </div>
          <div className="navbar-link">
            <a href="#about">About</a>
          </div>
          <div className="navbar-link">
            <a href="#pricing">Pricing</a>
          </div>
          <div className="navbar-link">
            <a href="#contact">Contact</a>
          </div>
          <div className="navbar-link">
            <a href="#blog">Blog</a>
          </div>
          <div className="bar animation"></div>
        </div>
        <div className="header-links-sign">
          <p>Login</p>
          <button type="button">Register</button>
        </div>
      </div>
      <div className="header-menu">
        {toggleMenu ? (
          <FiXSquare
            color="var(--secondary-color)"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FiAlignJustify
            color="var(--secondary-color)"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="header-menu-box">
            <div className="header-menu-box-links">
              <a href="#home">Home</a>

              <a href="#about">About</a>

              <a href="#pricing">Pricing</a>

              <a href="#contact">Contact</a>

              <a href="#blog">Blog</a>
            </div>
            <div className="header-menu-box-sign">
              <p>Login</p>
              <button type="button">Register</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// const anchor = document.querySelectorAll("header-links-navbar navbar-link a");

// anchor.forEach(anchor => anchor.addEventListener("click", onClick));

// function onClick(e) {
//   anchor.forEach(anchor => anchor.classList.remove("active"));
//   e.target.classList.add("active");
// }

export default Header;
