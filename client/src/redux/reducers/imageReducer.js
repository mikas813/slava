import {
    IMAGE_SAVE_REQUEST,
    IMAGE_SAVE_SUCCESS,
    IMAGE_SAVE_FAIL,
    IMAGE_LIST_REQUEST,
    IMAGE_LIST_SUCCESS,
    IMAGE_LIST_FAIL,
    IMAGE_DELETE_REQUEST,
    IMAGE_DELETE_SUCCESS,
    IMAGE_DELETE_FAIL,
} from '../constans/userConstans';

function imageListReducer(state = { images: [] }, action) {
    switch (action.type) {
        case IMAGE_LIST_REQUEST:
            return { loading: true };

        case IMAGE_LIST_SUCCESS:
            return { loading: false, success: true, images: action.payload };

        case IMAGE_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

function imageSaveReducer(state = { image: {} }, action) {
    switch (action.type) {
        case IMAGE_SAVE_REQUEST:
            return { loading: true };

        case IMAGE_SAVE_SUCCESS:
            return { loading: false, success: true, image: action.payload };

        case IMAGE_SAVE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

function imageDeleteReducer(state = { image: {} }, action) {
    switch (action.type) {
        case IMAGE_DELETE_REQUEST:
            return { loading: true };

        case IMAGE_DELETE_SUCCESS:
            return { loading: false, success: true, image: action.payload };

        case IMAGE_DELETE_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export { imageSaveReducer, imageListReducer, imageDeleteReducer };
