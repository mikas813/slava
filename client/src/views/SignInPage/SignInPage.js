import React from 'react';
import { Auxilary } from '../../hoc/Auxilary';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
    return (
        <Auxilary>
            <ContentWrapper>
                <h3>Hello Admin!</h3>
                <SignInForm />
            </ContentWrapper>
        </Auxilary>
    );
};

export default SignInPage;
