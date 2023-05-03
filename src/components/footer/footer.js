import { TasksFilter } from "../tasks-filter/tasks-filter";
import './footer.css';

export function Footer() {
    return (
        <footer class="footer">
            <span class="todo-count">1 items left</span>
            <TasksFilter />
        </footer>
    );
}