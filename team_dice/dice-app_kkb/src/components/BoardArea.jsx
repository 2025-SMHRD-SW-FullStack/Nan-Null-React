import React from "react";
import Board from "./Board";

const BoardArea = ({ userState, comState }) => {
    return (
        <div className="board-area">
            <Board player={"나"} currentScore={userState.userScore} winScore={userState.userWinScore} />
            <Board player={"컴퓨터"} currentScore={comState.comScore} winScore={comState.comWinScore} />
        </div>
    );
};

export default BoardArea;
