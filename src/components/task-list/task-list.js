import { Task } from "../task/task";
import './task-list.css';

export function TaskList({ list, onDelete }) {

    const elements = list.map((task) => {
        return (
            <Task key={task.date.toString()} task={task} onDelete={(task) => onDelete(task)} />
        );
    })


    return (
        <ul class="todo-list">
            {elements}
        </ul>
    );
}