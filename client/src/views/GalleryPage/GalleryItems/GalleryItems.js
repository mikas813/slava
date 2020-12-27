import React, { useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './GalleryItems.scss';
import { useDispatch, useSelector } from 'react-redux';
import {Camera, Lens, Params} from '../../../IconsSvg';
import {listImages} from '../../../redux/actions/imageActions';
import {Loader} from '../../../components/Loader/Loader';
import {Title} from '../../../components/Title/Title';

export const GalleryItems = () => {
    const options = {
        settings: {
            autoplaySpeed: 2500,
            disableWheelControls: true,
            hideControlsAfter: 2000,
            disablePanzoom: false,
        },
        buttons: {
            backgroundColor: 'rgba(30,30,36,0.8)',
            iconColor: 'rgba(255, 255, 255, 0.8)',
            iconPadding: '5px',
            showAutoplayButton: true,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: true,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: false,
            size: '40px',
        },
        caption: {
            captionColor: '#b8860b',
            captionFontFamily: 'Raleway, sans-serif',
            captionFontWeight: '300',
            captionTextTransform: 'uppercase',
        },
        progressBar: {
            showProgressBar: false,
        },
        thumbnails: {
            showThumbnails: false,
        },
        translations: {
            autoplayText: 'Play',
            closeText: 'Close',
            downloadText: 'Download',
            fullscreenText: 'Full screen',
            nextText: 'Next',
            pauseText: 'Pause',
            previousText: 'Previous',
            thumbnailsText: 'Hide thumbnails',
            zoomOutText: 'Zoom Out',
        },
    };
    const customCaptions = [];
    const imagesList = useSelector((state) => state.imagesList);
    const { images, loading, error } = imagesList;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listImages());
    }, []);

    if (loading) {
        customCaptions.push('');
    } else {
        images.map((image, index) => {
            customCaptions.push({
                id: index,
                caption: (
                    <div key={image.id} className="params">
                        <span className="params_item">
                            <Camera />
                            {image.camera}
                        </span>

                        <span className="params_item">
                            <Lens />
                            {image.lens}
                        </span>

                        <span className="params_item">
                            <Params />
                            ISO {image.iso} ƒ/ {image.aperture} s{' '}
                            {image.shutter}
                        </span>
                    </div>
                ),
            });
        });
    }

    return loading ? (
        //TODO: Fix Loader position
        <Loader className="params" />
    ) : error ? (
        <div className="error_message">Error!</div>
    ) :
    (<SRLWrapper options={options} customCaptions={customCaptions}>
            <div className="gallery_items">
                {
                    images.length === 0
                        ? <Title title={'There is no images yet'}/>
                        : images.map((image) => {
                    return (
                        <div key={image.id} className="gallery_item">
                            <img src={image.image} alt={image.keyword} />

                            <p>{image.keyword}</p>
                        </div>
                    );
                })}
            </div>
        </SRLWrapper>
    );
};
