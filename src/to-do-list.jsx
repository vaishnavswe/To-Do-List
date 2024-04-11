import { useState } from "react";

function ToDoList() {
    const [task, setTask] = useState([]);

    function addTask() {
        const inputValue = document.getElementById("task_input").value;
        setTask(t => [...t, inputValue]);
        document.getElementById("task_input").value = "";
    }

    function removeTask(index) {
        setTask(task.filter(t => t != task[index]))
    }

    function MoveUp(index) {
        if (index > 0) {
            let tempTask = [...task];
            let t = tempTask[index]
            tempTask[index] = tempTask[index - 1]
            tempTask[index - 1] = t
            setTask(tempTask)
        }
    }

    function MoveDown(index) {
        if (index < task.length - 1) {
            let tempTask = [...task];
            let t = tempTask[index]
            tempTask[index] = tempTask[index + 1]
            tempTask[index+1] = t
            setTask(tempTask)
        }
    }

    return(
        <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input type="text" id="task_input"/>
        <button className="add-bttn" onClick={addTask}>Add Task</button>
        <ul className="text">
            {task.map((t,index) => <li key={index}><span className="text">{t}</span> 
            <button className="del-bttn" onClick={() => removeTask(index)}>Delete</button>
            <button className="move-bttn" onClick={() => MoveUp(index)}>Move Up</button>
            <button className="move-bttn" onClick={() => MoveDown(index)}>Move Down</button>
            </li>)}
        </ul>
        </div>
    );
}
export default ToDoList