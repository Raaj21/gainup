import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import gainupLogo from './images/gainup-indutries-logo.png';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [clicked, setClicked] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <header>
            <nav>
                <a><img className='size' src={gainupLogo} alt="GainUp Logo" /></a>

                <div>
                    <ul id="navbar" className={clicked ? "active" : ""}>
                        <li><Link className="active" to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/our-group" onClick={toggleMenu}>Our Group</Link></li>
                        <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
                        <li>
                            <Link to="/sublink1" onClick={toggleMenu}>Infrastructure</Link>
                        </li>
                        <li><Link to="/accolades" onClick={toggleMenu}>Accolades</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                        <li><Link to="/career" onClick={toggleMenu}>Career</Link></li>
                    </ul>
                </div>
                <div id="mobile">
                    <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-align-right'} onClick={handleClick}></i>
                </div>
            </nav>
        </header>
    );
}

export default Header;
