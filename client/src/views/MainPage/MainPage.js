import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {SimpleSlider} from '../../components/HeroSlider/HeroSlider';

const MainPage = () => {
    return (
        <>
            <Header/>
            <main className="container my-20 m-auto">
                <SimpleSlider/>
            </main>
            <Footer/>
        </>
    );
};

export default MainPage;
