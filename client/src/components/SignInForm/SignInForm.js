import React, { useState, useEffect } from 'react';
import './SignInForm.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/actions/userActions';
import { withRouter } from 'react-router-dom';

const SignInForm = (props) => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    const userSignIn = useSelector((state) => state.userSignIn);

    const { loading, userInfo, error } = userSignIn;
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push('/manage');
        }

        return () => {
            //
        };
        // eslint-disable-next-line
    }, [userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        dispatch(signIn(email, password));
        await axios.post('/api/users/signin', { email, password });
    };

    return (
        <div className="signin_form">
            <form action="" onSubmit={(e) => submitHandler(e)}>
                {loading && <div>Loading...</div>}
                {error && (
                    <div className="error">Invalid email or password</div>
                )}

                <div className="contact_form-email">
                    <label htmlFor="email">Enter your email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="contact_form-password">
                    <label htmlFor="password">Enter your password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="contact_form-button">
                    SignIn
                </button>
            </form>
        </div>
    );
};

export default withRouter(SignInForm);
