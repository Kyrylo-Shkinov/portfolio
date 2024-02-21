import React, {useState} from "react";
import Questions from "./Questions";
import Result from "./Result";

function Quiz() {
    const [isFinnished, setIsFinnished] = useState(false);
    const [result, setresult] = useState(0);
    const [quizLenght, setQuizLenght] = useState();
    const [questionIndex, setQuestionIndex] = useState(0);
    

    return (
        <div className="quiz">
            {isFinnished ?
                <Result result={result} quizLenght={quizLenght} setresult={setresult} setIsFinnished={setIsFinnished} setQuestionIndex={setQuestionIndex} /> :
                <Questions setIsFinnished={setIsFinnished} setQuizLenght={setQuizLenght} setresult={setresult} result={result} setQuestionIndex={setQuestionIndex} questionIndex={questionIndex} />}
            

        </div>
    );
}

export default Quiz;