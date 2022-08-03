import {useEffect, useState, useReducer} from "react";

function reducer(state, action) {
    switch (action.type) {
        case "add-task":
            return {...state, tasks: [...state.tasks, {name: action.payload}]};
        case "delete-task":
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.payload),
            };
        default:
            state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, {tasks: []});
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <h1>useReducer2</h1>

            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => dispatch({type: "add-task", payload: inputValue})}>Add</button>

            {state.tasks.map((task, index) => (
                <li key={index}>
                    {task.name}
                    <button
                        onClick={() => {
                            dispatch({type: "delete-task", payload: index});
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </div>
    );
}

export default UseReducer;
