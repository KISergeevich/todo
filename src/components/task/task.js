import { formatDistanceToNow } from "date-fns";
import './task.css';

export function Task({ task }) {

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
    );
    // return (
    //     <li class="editing">
    //             <div class="view">
    //                 <input class="toggle" type="checkbox" />
    //                 <label>
    //                     <span class="description">Editing task</span>
    //                     <span class="created">created 5 minutes ago</span>
    //                 </label>
    //                 <button class="icon icon-edit"></button>
    //                 <button class="icon icon-destroy"></button>
    //             </div>
    //             <input type="text" class="edit" value="Editing task" />
    //         </li>
    // );
}
