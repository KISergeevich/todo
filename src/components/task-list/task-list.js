import { Task } from "../task/task";
import './task-list.css';
import PropTypes from 'prop-types';


export function TaskList({ list, onDelete, onChange }) {

    const elements = list.map((task) => {
        return (
            <Task key={task.date.toString()}
                task={task}
                onDelete={(task) => onDelete(task)}
                onChange={(task) => onChange(task)}
            />
        );
    })


    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
}

TaskList.propTypes = {
    list: PropTypes.array,
    onDelete: PropTypes.func,
    onChange: PropTypes.func
}

TaskList.defaultProps = {
    list: [],
    onChange: () => { },
    onDelete: () => { }
}