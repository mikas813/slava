import Axios from 'axios';
import Cookie from 'js-cookie';
import {
    USER_LOGOUT,
    USER_SIGN_IN_FAILURE,
    USER_SIGN_IN_REQUEST,
    USER_SIGN_IN_SUCCESS,
} from '../constans/userConstans';

const signIn = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGN_IN_REQUEST, payload: { email, password } });
    try {
        const { data } = await Axios.post('/api/users/signin', {
            email,
            password,
        });
        dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (e) {
        dispatch({ type: USER_SIGN_IN_FAILURE, payload: e.message });
    }
};

const logout = () => (dispatch) => {
    Cookie.remove('userInfo');
    dispatch({ type: USER_LOGOUT });
};

export { signIn, logout };
