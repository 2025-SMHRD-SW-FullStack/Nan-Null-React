import React from "react";
import Dice from "./Dice";

const Board = ({ player, currentScore, winScore }) => {
    return (
        <div>
            <h4>{player}</h4>
            <Dice player={player} score={currentScore} />
            <div>
                <p>승리 횟수:</p>
                <p>{winScore}</p>
            </div>
        </div>
    );
};

export default Board;
