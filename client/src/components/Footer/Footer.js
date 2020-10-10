import React from 'react';
import './Footer.scss';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social_networks-wrapper">
                Stay connected
                <SocialNetworks />
            </div>

            <div className="copyright">
                <div>
                    All images &copy; {new Date().getFullYear()}{' '}
                    <Link to="/signin">Iaroslav Lasiichuk</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
