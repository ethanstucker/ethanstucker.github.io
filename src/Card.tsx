import React from 'react';
import './Card.css';

interface CardProps {
    image: string;
    text: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, text, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={image} alt={text} />
            <p>{text}</p>
        </div>
    );
};

export default Card;