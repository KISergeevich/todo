import { Task } from "../task/task";

export function TaskList(props) {
    return (
        <ul class="todo-list">
            <Task task={props.list[0]} />
            <li class="editing">
                <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>
                        <span class="description">Editing task</span>
                        <span class="created">created 5 minutes ago</span>
                    </label>
                    <button class="icon icon-edit"></button>
                    <button class="icon icon-destroy"></button>
                </div>
                <input type="text" class="edit" value="Editing task" />
            </li>
            <li>
                <div class="view">
                    <input class="toggle" type="checkbox" />
                    <label>
                        <span class="description">Active task</span>
                        <span class="created">created 5 minutes ago</span>
                    </label>
                    <button class="icon icon-edit"></button>
                    <button class="icon icon-destroy"></button>
                </div>
            </li>
        </ul>
    );
}