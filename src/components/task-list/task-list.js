import { Task } from "../task/task";
import './task-list.css';

export function TaskList({ list, onDelete, onChange }) {

    const elements = list.map((task) => {
        return (
            <Task key={task.date.toString()} task={task} onDelete={(task) => onDelete(task)} onChange={(task) => onChange(task)} />
        );
    })


    return (
        <ul class="todo-list">
            {elements}
        </ul>
    );
}