import {useState} from "react";

function UseStateHook() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTask(task) {
        if (task.length > 0) {
            setTasks([...tasks, task]);
            setNewTask("");
            document.getElementById("input").value = "";
        } else {
            console.log("Task is empty");
        }
    }

    return (
        <div>
            <h1>Tasks</h1>
            <input type="text" id="input" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={() => addTask(newTask)}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default UseStateHook;
