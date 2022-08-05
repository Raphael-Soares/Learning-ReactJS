import {useReducer, useState} from "react";

function reducer(state, payload) {
    switch (payload.type) {
        case "add-task":
            return {tasks: [...state.tasks, {id: Date.now(), name: payload.data, completed: false}]};
        case "delete-task":
            return {tasks: [...state.tasks.filter((task) => task.id !== payload.data.id)]};
        case "toggle-complete":
            return {tasks: [...state.tasks.map((task) => (task.id === payload.data.id ? {...task, completed: !task.completed} : task))]};
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {tasks: []});
    const [inputTask, setInputTask] = useState("");

    return (
        <div>
            <input type="text" value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
            <button
                onClick={() => {
                    dispatch({type: "add-task", data: inputTask});
                    setInputTask("");
                }}
            >
                Add
            </button>

            <ul>
                {state.tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.id}</span>
                        <input type="checkbox" checked={task.completed} onChange={() => dispatch({type: "toggle-complete", data: task})} />
                        <span>{task.name}</span>
                        <button onClick={() => dispatch({type: "delete-task", data: task})}>Delete</button>
                        {task.completed && <span>Completed</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
