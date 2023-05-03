import './tasks-filter.css';


export function TasksFilter() {
    return (
        <><ul class="filters">
            <li>
                <button class="selected">All</button>
            </li>
            <li>
                <button>Active</button>
            </li>
            <li>
                <button>Completed</button>
            </li>
        </ul><button class="clear-completed">Clear completed</button></>
    );
}