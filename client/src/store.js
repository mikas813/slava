import thunk from 'redux-thunk';
import { userSignInReducer } from './redux/reducers/userReducer';
import Cookie from 'js-cookie';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
    imageDeleteReducer,
    imageListReducer,
    imageSaveReducer,
} from './redux/reducers/imageReducer';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
    userSignIn: { userInfo },
};

const reducer = combineReducers({
    imagesList: imageListReducer,
    userSignIn: userSignInReducer,
    imageSave: imageSaveReducer,
    imageDelete: imageDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
