import React, {useState} from "react";
import questionsJSON from '../quiz.json';

function Questions(props) {
    const questions = questionsJSON.questions;
    const [isAnswered, setIsAnswered] = useState();
    const question = questions[props.questionIndex];
    const progress = Math.round((props.questionIndex) / questions.length * 100);
    props.setQuizLenght(questions.length);
    
    function onClickAnswerHandle(index) {
        if (isAnswered) {
            return;
        } else if (question.correctAnswer == index) { 
            props.setresult(props.result + 1);
        }
        setIsAnswered(true);
           
    }

    return (
        <div className="questions">
            <div className="questions-progressbar">
                <div className="questions-progressbar-filler" style={{width: progress + '%'}}></div>
            </div>
            <div className="quiz-question">
                <p className="quiz-question-text">{question.title}</p>
            </div>
            <ul className="quiz-answer-wrapper">
                {question.answers.map((answer, index) => {
                    if (index == question.correctAnswer) {
                        return (
                            <li className={`quiz-answer ${isAnswered? 'correct': ''}`} key={index} onClick={() => onClickAnswerHandle(index)}>
                                {answer}
                            </li>
                        )
                    } else {
                        return (
                        <li key={index} className={`quiz-answer ${isAnswered? 'incorrect': ''}`} onClick={() => {
                            onClickAnswerHandle(index);
                        }}>
                            {answer}
                        </li>
                    )
                    }
                    
                
                })}
            
            </ul>
            <button className="questions-next-button" onClick={() => {
                
                if (props.questionIndex < questions.length - 1) {
                    props.setQuestionIndex(props.questionIndex + 1);
                }
                if (props.questionIndex == questions.length - 1) {
                    props.setIsFinnished(true);
                }
                setIsAnswered(false);
            }}>Next question!</button>      
        </div>
    );
}
export default Questions;