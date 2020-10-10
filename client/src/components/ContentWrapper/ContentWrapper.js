import React from 'react';
import './ContentWrapper.scss';

const ContentWrapper = (props) => {
    return <div className="content_wrapper">{props.children}</div>;
};

export default ContentWrapper;
