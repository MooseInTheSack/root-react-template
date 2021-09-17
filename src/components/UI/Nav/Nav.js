import React, { useState, useEffect } from 'react';

import Link from '../Link/Link';
import './Nav.css';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
          <span>TKO Pics</span>
          <i className='fas fa-circle ml-1' />
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <div class="wrap">
            <div class="search">
              <input type="text" class="searchTerm" id="input_text"></input>
              <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>

          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
