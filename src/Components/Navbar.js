import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Logo from "../Assets/Img/logo.svg";
import { useEffect } from "react";
import {
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaBehanceSquare,
} from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <nav
        className={colorChange ? "navbar colorChange" : "navbar"}
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <div className="navbar-container lg:pl-20 lg:pr-20">
          <div className="navbar-logo">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Connect
              </NavLink>
            </li>
          </ul>
          <div className="header-icons-box">
            <a href="https://instagram.com/princedynamic">
              <FaInstagramSquare
                className="text-white header-icons"
                style={{ color: "#A70296" }}
              />
            </a>
            <a href="https://pinterest.com/opeoluwaonafadeji/">
              <FaPinterestSquare
                className="text-white header-icons"
                style={{ color: "#970000" }}
              />
            </a>
            <a href="https://twitter.com/princedynamic__">
              <FaTwitterSquare
                className="text-white header-icons"
                style={{ color: "#51CBFF" }}
              />
            </a>
            <a href="https://behance.net/princedynamic">
              <FaBehanceSquare className="text-white header-icons" />
            </a>
          </div>
          <div className="menu-icon text-white" onClick={handleClick}>
            {click ? <FaTimes /> : <HiMenuAlt1 />}
          </div>
        </div>
      </nav>
    </>
  );
}
