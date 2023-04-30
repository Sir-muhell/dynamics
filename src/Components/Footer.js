import React from "react";
import Logo from "../Assets/Img/logo.svg";
import {
  FaInstagramSquare,
  FaPinterestSquare,
  FaTwitterSquare,
  FaBehanceSquare,
} from "react-icons/fa";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="bg-secondary lg:p-20 p-10">
        <div className=" lg:grid lg:grid-cols-6">
          <a href="">
            <img src={Logo} alt="Logo" className="col-span-1 footer-logo" />
          </a>
          <div className="footer-text col-span-2 text-white">
            Let’s discuss your design project.
          </div>
          <div className="lg:col-span-1"></div>
          <div className="col-span-2 grid footer-icons-box">
            <a href="https://instagram.com/princedynamic">
              <FaInstagramSquare className="text-white footer-icons" />
            </a>
            <a href="https://pinterest.com/opeoluwaonafadeji/">
              <FaPinterestSquare className="text-white footer-icons" />
            </a>
            <a href="https://twitter.com/princedynamic__">
              <FaTwitterSquare
                className="text-white footer-icons"
                style={{ borderRadius: "2px" }}
              />
            </a>
            <a href="https://behance.net/princedynamic">
              <FaBehanceSquare className="text-white footer-icons" />
            </a>
          </div>
        </div>
        <hr color="white" className="mt-14 horizon-line" />
        <p className="copyright text-white pt-6">
          © 2020 by PrinceDynamic. All right reserved.
        </p>
      </section>
    </>
  );
}
