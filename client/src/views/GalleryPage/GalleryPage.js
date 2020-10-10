import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Auxilary } from '../../hoc/Auxilary';
import { GalleryItems } from '../../components/GalleryItems/GalleryItems';
import SimpleReactLightbox from 'simple-react-lightbox';

const GalleryPage = () => {
    return (
        <Auxilary>
            <Header />

            <SimpleReactLightbox>
                <GalleryItems />
            </SimpleReactLightbox>

            <Footer />
        </Auxilary>
    );
};

export default GalleryPage;
