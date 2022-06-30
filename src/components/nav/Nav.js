import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './nav.css';

function Nav() {
  const [activeNav, setActiveNav] = useState('');
  const setActive = (path) => {
    setActiveNav(path);
  };

  return (
    <nav>
      <a href="#home" className={activeNav === '#home' ? 'active' : ''} path="/">
        <button type="button" onClick={() => setActive('#home')}>
          <AiOutlineHome />
        </button>
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''}>
        <button type="button" onClick={() => setActive('#about')}>
          <AiOutlineUser />
        </button>
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''}>
        <button type="button" onClick={() => setActive('#contact')}>
          <BiMessageSquareDetail />
        </button>
      </a>
    </nav>
  );
}

export default Nav;
