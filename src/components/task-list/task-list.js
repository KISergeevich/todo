import { Task } from "../task/task";
import './task-list.css';

export function TaskList({ list }) {

    const elements = list.map((task) => {
        return (
            <Task task={task} />
        );
    })


    return (
        <ul class="todo-list">
            {elements}
        </ul>
    );
}