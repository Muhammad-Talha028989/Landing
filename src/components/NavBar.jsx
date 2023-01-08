import React, { useState } from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (!window.scrollY >= 50) {
      setNav(false);
      return;
    }
    if (window.scrollY < 50) {
      setNav(false);
      return;
    }
    setNav(true);
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <React.Fragment>
      <nav className={nav ? "nav active" : "nav"}>
        <a href="" className="logo">
          <img src={logo} alt="" />
        </a>
        <input
          type="checkbox"
          name="menu-btn"
          id="menu-btn"
          className="menu-btn"
        />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li className="">
            <a href="" className="">
              Home
            </a>
          </li>
          <li className="">
            <a href="#features" className="">
              Features
            </a>
          </li>
          <li className="">
            <a href="#about" className="">
              About
            </a>
          </li>
          <li className="#download">
            <a href="" className="">
              Download
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
