import React, { useState } from "react";
import ButtonArea from "./ButtonArea";
import BoardArea from "./BoardArea";

const DiceGame = () => {
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [userWinScore, setUserWinScore] = useState(0);
    const [comWinScore, setComWinScore] = useState(0);

    const handleRoll = () => {
        const newUserScore = parseInt(Math.random() * 6) + 1;
        const newComScore = parseInt(Math.random() * 6) + 1;

        if (newUserScore > newComScore) {
            setUserWinScore(userWinScore + 1);
        } else if (newComScore > newUserScore) {
            setComWinScore(comWinScore + 1);
        } else {
            alert("무승부 !");
        }

        setUserScore(newUserScore);
        setComScore(newComScore);
    };

    const handleReset = () => {
        setUserScore(0);
        setComScore(0);
        setUserWinScore(0);
        setComWinScore(0);
    };

    return (
        <div className="container">
            <h1>주사위 게임</h1>
            <ButtonArea onRoll={handleRoll} onReset={handleReset} />
            <BoardArea userState={{ userScore, userWinScore }} comState={{ comScore, comWinScore }} />
        </div>
    );
};

export default DiceGame;
