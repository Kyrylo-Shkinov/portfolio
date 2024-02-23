import React, {useState} from "react";
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    const [showModal, setShowModal] = useState(true);
    function onClickHideModal () {
        setShowModal(false);
    };
    return (
        <>
            <div className="counter-wrapper">
                <h2 className="counter-header">Counter</h2>
                <p className="counter-text">{count}</p>
                <div className="counter-button-wrapper">
                    <button className="counter-button minus" onClick={decrement}>-</button>
                    <button className="counter-button reset" onClick={reset}>Reset</button>
                    <button className="counter-button plus" onClick={increment}>+</button>
                </div>
            </div>
            {
                showModal ? <div className="undermodal">
                    <div className="undermodal-gray"onClick={onClickHideModal}></div>
                <div className="modal">
                    <h3 className="modal-counter-title">Counter</h3>
                    <p className="modal-counter-text">This is a basic example of using "useState" in a React project. And this part took me the least amount of time. <br /> <span> Usage:</span> everything is simple here. Just click <span> "+" </span>and the number increases, click <span>"-"</span> and the number decreases. The RESET button, as you might guess, resets the number to 0.</p>
                        <button className="modal-close" onClick={onClickHideModal}>Let`s see</button>
                </div>
            </div> : ''
            }
        </>
    );
};
export default Counter;
