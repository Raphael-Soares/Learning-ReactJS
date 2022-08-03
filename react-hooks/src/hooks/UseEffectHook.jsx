import {useEffect, useState} from "react";

function UseEffectHook() {
    const [tasks, setTasks] = useState([]);
    const [manyTasks, setManyTasks] = useState(7);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${manyTasks}`)
            .then((tasks) => tasks.json())
            .then((tasksJson) => setTasks([...tasks, tasksJson]));
    }, [manyTasks]);

    return (
        <div>
            <h1>useEffect</h1>
            <input type="number" name="" id="" onChange={(e) => setManyTasks(e.target.value)} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.id}-{task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UseEffectHook;
