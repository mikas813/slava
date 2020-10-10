import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Auxilary } from '../../hoc/Auxilary';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import './AboutPage.scss';
import img from '../../images/image1.jpg';

const AboutPage = () => {
    return (
        <Auxilary>
            <Header />
            <ContentWrapper>
                <div className="about_wrapper">
                    <img src={img} alt="" />

                    <div className="about_wrapper-text">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus ad adipisci, architecto consequatur
                            exercitationem inventore quibusdam repellat unde
                            voluptatibus. A culpa deserunt facere id magni,
                            natus omnis qui quia veniam?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus accusantium, at deleniti deserunt
                            eum in necessitatibus nihil nobis placeat quaerat
                            similique suscipit ullam unde veniam, voluptas?
                            Doloribus eius illo optio.
                        </p>
                    </div>
                </div>
            </ContentWrapper>
            <Footer />
        </Auxilary>
    );
};

export default AboutPage;
