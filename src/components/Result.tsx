import React from "react";

function Result(props) {
    const image = require('../img/resultat-image.svg').default as string;
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