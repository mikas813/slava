import React from 'react';
import './LayoutStart.scss';
import { Link } from 'react-router-dom';
import { SocialNetworks } from '../../components/SocialNetworks/SocialNetworks';
import {listImages} from '../../redux/actions/imageActions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const LayoutStart = () => {
    const imagesList = useSelector((state) => state.imagesList);
    const { images, loading, error } = imagesList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listImages());
    }, []);

    console.log('', images);
    return (
        <div
            // style={{backgroundImage: `url(${})`}}
            className="layout_start">
            <div className="layout_start-text">
                {/*<p>photographer</p>*/}

                {/*<h1>*/}
                {/*    <Link onClick={() => console.log('dsds')} to={'/home'}>*/}
                {/*        Iaroslav Lasiichuk*/}
                {/*    </Link>*/}
                {/*</h1>*/}

                {/*<SocialNetworks />*/}
            </div>
        </div>
    );
};

export default LayoutStart;
