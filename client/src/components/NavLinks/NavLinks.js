import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.scss';
import { logout } from '../../redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';

const NavLinks = (props) => {
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        props.history.push('/');
    };

    return (
        <ul className="nav-links flex w-50">
            {userInfo && (
                <div className="admin-panel">
                    <p className="success">Hi {userInfo.name}</p>
                    <ul>
                        <li>
                            <Link to="/manage">Manage</Link>
                        </li>
                        <li>
                            <Link to="/signin" onClick={() => handleLogout()}>
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            <li className="mr-5">|</li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>

            <li className="ml-5">
                <Link to="/about">About</Link>
            </li>

            <li className="ml-5">
                <Link to="/contacts">Contacts</Link>
            </li>
            <li className="ml-5">|</li>
        </ul>
    );
};

export default withRouter(NavLinks);
