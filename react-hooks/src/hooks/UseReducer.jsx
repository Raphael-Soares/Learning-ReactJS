import {useEffect, useState, useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return {counter: state.counter + 1};
        case "decrement":
            return {counter: state.counter - 1};
        default:
            return state;
    }
};

function UseReducer() {
    const [state, payload] = useReducer(reducer, {counter: 0});

    return (
        <div>
            <h1>useReducer</h1>
            <p>VALOR:{state.counter}</p>
            <button
                onClick={() => {
                    payload({type: "increment"});
                }}
            >
                INCREMENT
            </button>
            <button
                onClick={() => {
                    payload({type: "decrement"});
                }}
            >
                DECREMENT
            </button>
        </div>
    );
}

export default UseReducer;
