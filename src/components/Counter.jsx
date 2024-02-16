import React from "react";
function Counter() {
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div className="counter-wrapper">
            <h2 className="counter-header">Counter</h2>
            <p className="counter-text">{count}</p>
            <div className="counter-button-wrapper">
                <button className="counter-button minus" onClick={decrement}>-</button>
                <button className="counter-button reset" onClick={reset}>Reset</button>
                <button className="counter-button plus" onClick={increment}>+</button>
                
            </div>
        </div>
    );
};
export default Counter;
