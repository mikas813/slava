import React from 'react';
import './index.scss';
import { Route, Switch, withRouter} from 'react-router-dom';
import MainPage from './views/MainPage/MainPage';
import AboutPage from './views/AboutPage/AboutPage';
import ContactPage from './views/ContactPage/ContactPage';
import SignInPage from './views/SignInPage/SignInPage';
import GalleryPage from './views/GalleryPage/GalleryPage';
import ManagePage from './views/ManagePage/ManagePage';
import Header from './components/Header/Header';
import {useEffect} from 'react';
import Footer from './components/Footer/Footer';

//TODO: Set title for every page
const App = () => {

    useEffect(() => {
        if (document.location.pathname === '/') {
            document.querySelector('.header').style.position = 'fixed';
            document.querySelector('.footer').style.display = 'none';
        }
        else {
            document.querySelector('.header').style.position = 'relative';
            document.querySelector('.footer').style.display = 'block';
        }
    });
    return (
        <>
            <Header/>
            <Switch>
                <Route exact component={MainPage} path={'/'}/>
                <Route component={AboutPage} path={'/about'}/>
                <Route component={ContactPage} path={'/contacts'}/>
                <Route component={SignInPage} path={'/signin'}/>
                <Route component={GalleryPage} path={'/gallery'}/>
                <Route component={ManagePage} path={'/manage'}/>
            </Switch>
            <Footer/>
        </>

    );
};

export default withRouter(App);
