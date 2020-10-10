import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryFilter.scss';

export const GalleryFilter = () => {
    return (
        <div className="gallery_filter">
            <Link to="/gallery">Location</Link>
            <Link to="/gallery">Date</Link>
            <Link to="/gallery">Time</Link>
        </div>
    );
};
