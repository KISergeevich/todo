import { TasksFilter } from "../tasks-filter/tasks-filter";
import './footer.css';

export function Footer({ filter, onFilterChange }) {
    return (
        <footer className="footer">
            <span className="todo-count">1 items left</span>
            <TasksFilter filter={filter}
                onChange={(filterValue) => onFilterChange(filterValue)} />
        </footer>
    );
}