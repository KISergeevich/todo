import { TasksFilter } from "../tasks-filter/tasks-filter";
import './footer.css';

export function Footer({ filter, onFilterChange, count }) {
    return (
        <footer className="footer">
            <span className="todo-count">{count} items left</span>
            <TasksFilter filter={filter}
                onChange={(filterValue) => onFilterChange(filterValue)} />
        </footer>
    );
}