import React from 'react';
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';
import './footer.css';

const Footer = () => (
  <footer>
    <a className="footer__logo" href="#home">
      VAHAN
    </a>
    <ul className="permalinks">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/vahan-khachvankian/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://angel.co/u/vahan-khachvankian" target="_blank" rel="noreferrer">
        <FaAngellist />
      </a>
      <a href="https://github.com/Gegardus" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://medium.com/@stgegard/my-journey-in-the-software-development-ocean-c37ca96b6da"
        target="_blank"
        rel="noreferrer">
        <BsMedium />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Vahan Khachvankian portfolio. All rights reserved. </small>
      <small>Design was inspired by EGATOR designer</small>
    </div>
  </footer>
);

export default Footer;
