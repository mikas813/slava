import React from 'react';
import {GalleryItems} from './GalleryItems/GalleryItems';
import SimpleReactLightbox from 'simple-react-lightbox';

const GalleryPage = () => {
    return (
        <SimpleReactLightbox>
            <main>
                <GalleryItems/>
            </main>
        </SimpleReactLightbox>
    );
};

export default GalleryPage;
