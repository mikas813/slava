import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
    return (
                <div className="about_wrapper pos-rel container m-auto">
                    <img className="m-auto" src='/images/about.jpg' alt="" />
                    <div className="text-center p-5">
                        <h3>About Me</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusamus ad adipisci, architecto consequatur
                            exercitationem inventore quibusdam repellat unde
                            voluptatibus. A culpa deserunt facere id magni,
                            natus omnis qui quia veniam?
                        </p>
                    </div>
                </div>
    );
};

export default AboutPage;
