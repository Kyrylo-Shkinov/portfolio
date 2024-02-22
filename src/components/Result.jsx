import React from "react";
import image from '../img/resultat-image.svg';

function Result(props) {
    props.setProgress(100);


    return (
        <div className="result">
            <img src={image} className="result-image" alt="Congratulations"/>
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