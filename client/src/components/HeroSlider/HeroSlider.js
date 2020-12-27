import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {listImages} from '../../redux/actions/imageActions';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

export const SimpleSlider = () => {

    const imagesList = useSelector((state) => state.imagesList);
    const {images, loading, error} = imagesList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listImages());
    }, []);

    const settings = {
        fade: true,
        lazyLoad: true,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
    };
    return (
        <Slider {...settings}>
            {images && images.map(image => (
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${image.image})`,
                                height: '100vh',
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}>
                        </div>
                    </div>
                ))}
        </Slider>
    );
};

