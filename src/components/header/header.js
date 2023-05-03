import { NewTaskForm } from "../new-task-form/new-task-form";


export function Header() {
    return (
        <header class="header">
            <h1>todos</h1>
            <NewTaskForm />
        </header>
    );
}

