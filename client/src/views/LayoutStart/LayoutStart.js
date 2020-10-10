import React from 'react';
import './LayoutStart.scss';
import { Link } from 'react-router-dom';
import { SocialNetworks } from '../../components/SocialNetworks/SocialNetworks';

const LayoutStart = () => {
    return (
        <div className="layout_start">
            <div className="layout_start-text">
                <p>photographer</p>

                <h1>
                    <Link onClick={() => console.log('dsds')} to={'/home'}>
                        Iaroslav Lasiichuk
                    </Link>
                </h1>

                <SocialNetworks />
            </div>
        </div>
    );
};

export default LayoutStart;
