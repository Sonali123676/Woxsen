import React from "react";
import "./footer.css";
import inst from "./instagram.svg";
import twit from "./twitter.svg";
import face from "./facebook.svg";

const Footer = () => {
  return (
    <footer className="footer flex-between">
      <h3 className="footer__logo">
      <span>EnviroFeast</span> : Fostering Sustainable Dining
      </h3>

      <ul className="footer__nav">
        <li>
          <a href="#food">Menu</a>
        </li>
        <li>
          <a href="#menu">Food</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>

      <ul className="footer__social">
        <li className="flex-center">
          <img src={face} alt="facebook" />
        </li>
        <li className="flex-center">
          <img src={inst} alt="instagram" />
        </li>
        <li className="flex-center">
          <img src={twit} alt="twitter" />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
