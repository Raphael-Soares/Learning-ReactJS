import {useState} from "react";

import "./App.css";

function App() {
    const [tasks, setTasks]: [object[], Function] = useState([]);
    let inputTask: string = document.querySelector("#inputTask").value;

    function addTask(task: string) {
        setTasks([...tasks, {name: task, done: false}]);
    }

    return (
        <div className="App">
            <h1>ToDo List</h1>
            <input id="inputTask" value={inputTask} onChange={(e) => (inputTask = e.target.value)} />
            <button onClick={() => addTask(inputTask)}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
