import React from "react";

const ButtonArea = ({ onRoll, onReset }) => {
    return (
        <div>
            <button onClick={onRoll}>Roll</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default ButtonArea;
