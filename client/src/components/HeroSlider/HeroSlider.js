import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const SimpleSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoPlay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className="overflow-hidden"
            style={{height: '600px'}}
        >
            <Slider {...settings}>

                <div>
                    <img src="/images/image2.jpg" alt=""/>
                </div>
                <div>
                    <img src="/images/image3.jpg" alt=""/>
                </div>
                <div>
                    <img src="/images/image4.jpg" alt=""/>
                </div>
            </Slider>
        </div>
    );
};

