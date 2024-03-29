// Header.js

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import gainupLogo from './images/gainup-indutries-logo.png';

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const location = useLocation(); // Get current location
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const Infrastructure = () => {
    navigate('/Video');
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img className="size" src={gainupLogo} alt="GainUp Logo" />
        </Link>

        <div>
          <ul id="navbar" className={clicked ? 'active' : ''}>
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/ContentWithBackground" className={location.pathname === '/our-group' ? 'active' : ''} onClick={handleClick}>
                Our Group
              </Link>
            </li>
            <li>
              <Link to="/ContentWithBackground" className={location.pathname === '/products' ? 'active' : ''} onClick={handleClick}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/Video" className={location.pathname === '/Video' ? 'active' : ''} onClick={Infrastructure}>
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/ContentWithBackground" className={location.pathname === '/accolades' ? 'active' : ''} onClick={handleClick}>
                Accolades
              </Link>
            </li>
            <li>
              <Link to="/ContentWithBackground" className={location.pathname === '/contact' ? 'active' : ''} onClick={handleClick}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/ContentWithBackground" className={location.pathname === '/career' ? 'active' : ''} onClick={handleClick}>
                Career
              </Link>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <i
            id="bar"
            className={clicked ? 'fas fa-times' : 'fas fa-align-right'}
            onClick={handleClick}
          ></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
