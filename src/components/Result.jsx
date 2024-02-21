import React, { useState } from "react";
import image from '../img/resultat-image.svg';

function Result(props) {



    return (
        <div className="result">
            <img src={image} className="result-image" />
            <p className="result-congr">Congratulations!</p>
            <p className="result-text">Your result: {props.result} of {props.quizLenght}</p>
            <button className="result-button" onClick={() => {
                props.setresult(0);
                props.setIsFinnished(false);
                props.setQuestionIndex(0);
            }}>Restart</button>
        </div>
    )
}
export default Result;