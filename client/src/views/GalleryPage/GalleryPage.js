import React from 'react';
import { Auxilary } from '../../hoc/Auxilary';
import { GalleryItems } from './GalleryItems/GalleryItems';
import SimpleReactLightbox from 'simple-react-lightbox';

const GalleryPage = () => {
    return (
            <SimpleReactLightbox>
                <GalleryItems />
            </SimpleReactLightbox>
    );
};

export default GalleryPage;
