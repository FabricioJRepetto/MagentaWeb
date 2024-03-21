import React from "react";

interface CardProps {
    title: string;
    text: string;
    image: string;
}

const Card: React.FunctionComponent<CardProps> = ({ title, text, image }) => {
    return (
        <div className="card">
            <p>{title}</p>
            <div className="cardcontent">
                <img src={image} />
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Card;
