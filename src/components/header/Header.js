import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={classes.header_container}>
            <header>
                <div className={classes.logo_container}>
                    <h4>LOGO</h4>
                </div>
                <nav>
                    <ul>
                        <li><Link className={classes.active} to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/quote">Get a free Quote</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;