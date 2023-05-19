import { NewTaskForm } from "../new-task-form/new-task-form";
import PropTypes from 'prop-types';

export function Header({ list, onInputChange }) {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm list={list}
                onInputChange={(inputValue) => onInputChange(inputValue)} />
        </header>
    );
}

Header.propTypes = {
    list: PropTypes.array,
    onInputChange: PropTypes.func
}

Header.defaultProps = {
    list: [],
    onInputChange: () => { }
}