import React from 'react';
import './Cards.scss';
import { Add, Text } from '../../IconsSvg';
import { Title } from '../Title/Title';
import { Link } from 'react-router-dom';

export const Cards = () => {
    return (
        <div className="card_inner">
            <Link to={'/add_image'}>
                <div className="card-container">
                    <Add />
                    <Title title="Add new photos or Edit All Photos" />
                </div>
            </Link>

            <Link to={'/edit_text'}>
                <div className="card-container">
                    <Text />
                    <Title title="Edit text content" />
                </div>
            </Link>
        </div>
    );
};
