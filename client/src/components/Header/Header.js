import React  from 'react';
import './Header.scss';
import NavLinks from '../NavLinks/NavLinks';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="header text-bold">
            <div className="container m-auto flex items-center justify-between">
                <div className="logo">
                    <Link to="/">
                        <span>L</span>A
                    </Link>
                    <div className="sub-logo">
                        <div>La'mur</div>
                        <div>Photography</div>
                    </div>
                </div>
                <NavLinks/>
            </div>
        </header>
    );
};

export default Header;
