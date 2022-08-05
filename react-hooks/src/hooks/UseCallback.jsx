import {useState} from "react";

function UseCallback() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = () => {
        return [number, number + 1, number + 2];
    };

    const theme = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    };

    return (
        <div>
            <h1>useCallback</h1>
            <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(!dark)}>Toggle theme</button>

            <ul
                style={{
                    ...theme,
                }}
            >
                {getItems().map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseCallback;
