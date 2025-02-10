import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
               <Link to='/'><img src={logo} alt="Company Logo" className="navbar-logo-image"/></Link> 
            </div>

            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/shop" className="navbar-link">Shop</Link>
                <Link to="/sell" className="navbar-link">Sell</Link>
                <Link to="/guide" className="navbar-link">Guide</Link>
                <Link to="/quality-check" className="navbar-link">Quality Check</Link> {/* Added link */}
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;