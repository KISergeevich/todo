import { formatDistanceToNow } from "date-fns";

export function Task(props) {
    const task = props.task;

    return (
        <li className={task.completed ? 'completed' : ''}>
            <div class="view">
                <input class="toggle" type="checkbox" />
                <label>
                    <span class="description">{task.name}</span>
                    <span class="created">{formatDistanceToNow(task.date, { addSuffix: true })}</span>
                </label>
                <button class="icon icon-edit"></button>
                <button class="icon icon-destroy"></button>
            </div>
        </li>
    )
}
