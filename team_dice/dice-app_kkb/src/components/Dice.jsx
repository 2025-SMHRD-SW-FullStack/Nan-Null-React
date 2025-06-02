import React from "react";

const Dice = ({ player, score }) => {
    let imageName;
    if (player === "나") {
        imageName = `u${score}.png`;
    } else {
        imageName = `c${score}.png`;
    }

    const imageUrl = `/src/assets/img/${imageName}`;

    return <img src={imageUrl} alt={`${player} 주사위 ${score}`} />;
};

export default Dice;
