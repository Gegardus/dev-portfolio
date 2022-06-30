import React from 'react';
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';
import { FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
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
);

export default HeaderSocials;
