import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Auxilary } from '../../hoc/Auxilary';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
    return (
        <Auxilary>
            <Header />
            <ContentWrapper>
                <h3>Hello Admin!</h3>
                <SignInForm />
            </ContentWrapper>
            <Footer />
        </Auxilary>
    );
};

export default SignInPage;
