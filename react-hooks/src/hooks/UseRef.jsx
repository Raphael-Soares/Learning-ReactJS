import {useEffect, useState, useRef} from "react";

function UseRef() {
    const [value, setValue] = useState("");
    const changes = useRef(0);
    const input = useRef();

    useEffect(() => {
        changes.current = changes.current + 1;
    }, [value]);

    function focusInput() {
        input.current.focus();
    }
    return (
        <div>
            <h1>useRef</h1>
            <input type="text" ref={input} onChange={(e) => setValue(e.target.value)} />
            <h5>VALUE: {value}</h5>
            <h6>CHANGES: {changes.current} </h6>
            <button onClick={focusInput}>FOCUS</button>
        </div>
    );
}

export default UseRef;
