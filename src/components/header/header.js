import { NewTaskForm } from "../new-task-form/new-task-form";


export function Header({ list, onInputChange }) {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm list={list}
                onInputChange={(inputValue) => onInputChange(inputValue)} />
        </header>
    );
}

