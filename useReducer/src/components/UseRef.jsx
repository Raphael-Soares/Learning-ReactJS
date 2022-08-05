import {useRef} from "react";

/**
 * useRef - Exercise 1
 *
 * Implement `handleClick1` and `handleClick2`
 * such that when either is clicked the corresponding
 * input element is focused
 */

function UseRef() {
    const inputRef1 = useRef();
    const inputRef2 = useRef();

    const handleClick1 = () => {
        inputRef1.current.focus();
    };

    const handleClick2 = () => {
        inputRef2.current.focus();
    };

    return (
        <div className="App">
            <input ref={inputRef1} /> <button onClick={handleClick1}>Focus me</button>
            <br />
            <br />
            <input ref={inputRef2} /> <button onClick={handleClick2}>Focus me</button>
        </div>
    );
}
export default UseRef;
