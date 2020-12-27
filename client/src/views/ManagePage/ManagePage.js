import React, { useState, useEffect } from 'react';
import { Auxilary } from '../../hoc/Auxilary';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import './ManagePage.scss';
import { Title } from '../../components/Title/Title';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';
import {
    Aperture,
    Camera,
    Keyword,
    Lens,
    Location,
    Params,
    Shutter,
    Zoom,
} from '../../IconsSvg';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteImage,
    listImages,
    saveImage,
} from '../../redux/actions/imageActions';

//TODO: Move all js to different componetn
const ManagePage = () => {
    const [showFullImage, setShowFullImage] = useState(false);
    const [fullImageUrl, setFullImageUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState('');
    const [id, setId] = useState('');
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [camera, setCamera] = useState('');
    const [lens, setLens] = useState('');
    const [zoom, setZoom] = useState('');
    const [aperture, setAperture] = useState('');
    const [shutter, setShutter] = useState('');
    const [iso, setIso] = useState('');
    const imageSave = useSelector((state) => state.imageSave);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = imageSave;
    const imageDelete = useSelector((state) => state.imageDelete);
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = imageDelete;
    const [uploading, setUploading] = useState(false);
    const imagesList = useSelector((state) => state.imagesList);
    const { images, loading, error } = imagesList;

    const dispatch = useDispatch();

    const openModal = (image) => {
        setModalVisible(!modalVisible);
        setImage(image.image);
        setId(image._id);
        setKeyword(image.keyword);
        setLocation(image.location);
        setCamera(image.camera);
        setLens(image.lens);
        setZoom(image.zoom);
        setAperture(image.aperture);
        setShutter(image.shutter);
        setIso(image.iso);
    };

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setUploading(true);
        axios
            .post('/api/uploads', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setImage(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveImage({
                _id: id,
                image,
                keyword,
                location,
                camera,
                lens,
                zoom,
                aperture,
                shutter,
                iso,
            })
        );
    };

    const handleFullImage = (e) => {
        setShowFullImage(!showFullImage);
        setFullImageUrl(e.target.src);
    };

    const deleteHandler = (image) => {
        dispatch(deleteImage(image._id));
    };

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(listImages());
    }, [successSave, successDelete]);

    return (
        <Auxilary>
            <ContentWrapper>
                <div>
                    <Title
                        title={
                            modalVisible
                                ? 'Add new images or'
                                : 'Manage your content or'
                        }
                    />

                    <div>
                        <button onClick={() => openModal({})}>
                            {modalVisible
                                ? 'Edit all images'
                                : 'Upload new image'}
                        </button>
                    </div>
                    <div>
                        {modalVisible ? null : loading ? (
                            <Loader />
                        ) : error ? (
                            <div className="error_message">Error!</div>
                        ) : (
                            <div className="edit-content_wrapper">
                                <div className="p-2">
                                    You have{' '}
                                    <span className="success">
                                        {images.length}
                                    </span>{' '}
                                    pictures in your gallery!
                                </div>
                                {images.map((image, index) => (
                                    <div
                                        key={image._id}
                                        className="edit-content_item"
                                    >
                                        <img
                                            src={image.image}
                                            alt={image.keyword}
                                            onClick={(e) => handleFullImage(e)}
                                        />

                                        <div className="edit-content_item-params">
                                            <Camera />
                                            <div>{image.camera}</div>
                                            <Lens />
                                            <div>{image.lens}</div>
                                            <Zoom />
                                            <div>{image.zoom}</div>
                                            <Aperture />
                                            <div>{image.aperture}</div>
                                            <Shutter />
                                            <div>{image.shutter}</div>
                                            <Params />
                                            <div>{image.iso}</div>
                                        </div>

                                        <div className="edit-content_item-keywords">
                                            <div>
                                                <Location />
                                            </div>
                                            <div>
                                                Location: {image.location}
                                            </div>
                                            <div>
                                                <Keyword />
                                            </div>
                                            <div>Keywords: {image.keyword}</div>
                                        </div>

                                        <span className="image-index">
                                            {index + 1}
                                        </span>
                                        <a
                                            className="edit-image"
                                            onClick={() => openModal(image)}
                                        >
                                            . . .
                                        </a>
                                        <a
                                            className="remove-image"
                                            onClick={() => deleteHandler(image)}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {showFullImage ? (
                    <div
                        className="fullscreen_wrapper"
                        onClick={() => setShowFullImage(false)}
                    >
                        <img className="fullscreen_image" src={fullImageUrl} />
                    </div>
                ) : null}

                {modalVisible && (
                    <div className="add-page_inputs">
                        <Title title="Upload new photos" />
                        <form
                            onSubmit={submitHandler}
                            encType="multipart/form-data"
                        >
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && (
                                <div className="error">
                                    Invalid email or password
                                </div>
                            )}

                            <label htmlFor="image">Add new photo</label>
                            <input
                                name="image"
                                type="text"
                                readOnly
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                name="addImage"
                                type="file"
                                onChange={uploadFileHandler}
                            />
                            {uploading && <div>Uploading...</div>}

                            <label htmlFor="keyword">
                                Add keywords (max 3 words)
                            </label>
                            <input
                                name="addKeywords"
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />

                            <label htmlFor="location">
                                Add location (country)
                            </label>
                            <input
                                name="location"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />

                            <label htmlFor="camera">
                                <span>
                                    <Camera />
                                    Camera
                                </span>
                            </label>
                            <input
                                name="camera"
                                type="text"
                                value={camera}
                                onChange={(e) => setCamera(e.target.value)}
                            />

                            <label htmlFor="lens">
                                <span>
                                    <Lens />
                                    Lens
                                </span>
                            </label>
                            <input
                                name="lens"
                                type="text"
                                value={lens}
                                onChange={(e) => setLens(e.target.value)}
                            />

                            <label htmlFor="zoom">
                                <span>
                                    <Zoom />
                                    Zoom
                                </span>
                            </label>
                            <input
                                name="zoom"
                                type="text"
                                value={zoom}
                                onChange={(e) => setZoom(e.target.value)}
                            />

                            <label htmlFor="aperture">
                                <span>
                                    <Aperture />
                                    Aperture
                                </span>
                            </label>
                            <input
                                name="aperture"
                                type="text"
                                value={aperture}
                                onChange={(e) => setAperture(e.target.value)}
                            />

                            <label htmlFor="shutter">
                                <span>
                                    <Shutter />
                                    Shutter
                                </span>
                            </label>
                            <input
                                name="shutter"
                                type="text"
                                value={shutter}
                                onChange={(e) => setShutter(e.target.value)}
                            />

                            <label htmlFor="iso">
                                <span>
                                    <Params />
                                    ISO
                                </span>
                            </label>
                            <input
                                name="iso"
                                type="text"
                                value={iso}
                                onChange={(e) => setIso(e.target.value)}
                            />
                            <button type="submit">
                                {id ? 'Update' : 'Create'}
                            </button>
                        </form>
                    </div>
                )}
            </ContentWrapper>
        </Auxilary>
    );
};

export default ManagePage;
