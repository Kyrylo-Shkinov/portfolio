import React, {useState} from "react";
import Questions from "./Questions";
import Result from "./Result";

function Quiz() {
    const [isFinnished, setIsFinnished] = useState(false);
    const [result, setresult] = useState(0);
    const [quizLenght, setQuizLenght] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [showModal, setShowModal] = useState(true);
    function onClickHideModal () {
        setShowModal(false);
    };
    

    return (
        <>
            <div className="quiz-wrapper">
                <div className="quiz">
                    <div className="questions-progressbar">
                        <div className="questions-progressbar-filler" style={{width: progress + '%'}}></div>
                    </div>
                    {isFinnished ?
                        <Result result={result} quizLenght={quizLenght} setresult={setresult} setIsFinnished={setIsFinnished} setQuestionIndex={setQuestionIndex} setProgress={setProgress}/> :
                        <Questions setIsFinnished={setIsFinnished} setQuizLenght={setQuizLenght} setresult={setresult} result={result} setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} setProgress={setProgress} progress={progress} />}
                </div>
            </div>
            {
                showModal ? <div className="undermodal">
                    <div className="undermodal-gray"onClick={onClickHideModal}></div>
                <div className="modal">
                    <h3 className="modal-quiz-title">Quiz</h3>
                    <p className="modal-quiz-text">This is a little quiz about my experience with React. Here work with "State" is greater than in counter.
                        <br /> <span>Usage:</span> Answer the question by clicking one of the three options. After clicking, you will immediately see the correct answer, and after the last question - the final result. To go to the next question - press the button <span>"Next Question!"</span></p>
                        <button className="modal-close" onClick={onClickHideModal}>Let`s see</button>
                </div>
            </div> : ''
            }
        </>
    );
}

export default Quiz;