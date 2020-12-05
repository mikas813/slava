import './HeroSlider.scss';
import React, { useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';

const HeroSlider = () => {
    const [index, set] = useState(0);
    const slides = [
        { id: 0, url: '/images/image1.jpg' },
        { id: 1, url: '/images/image2.jpg' },
        { id: 2, url: '/images/image3.jpg' },
        { id: 3, url: '/images/image4.jpg' },
    ];
    const transitions = useTransition(slides[index], (item) => item.id, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: config.molasses,
    });

    useEffect(() => {
        void setInterval(() => set((state) => (state + 1) % 4), 6000);
    }, []);

    return transitions.map(({ item, props, key }) => (
        <animated.div
            key={key}
            className="bg"
            style={{ ...props, backgroundImage: `url(${item.url})` }}
        />
    ));
};

export default HeroSlider;
