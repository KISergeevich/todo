import PropTypes from 'prop-types'

import Task from '../task/task'

import './task-list.css'

export default function TaskList({ list, onDelete, onChange }) {
  const elements = list.map((task) => {
    return (
      <Task
        key={task.date.toString()}
        task={task}
        onDelete={(taskToDelete) => onDelete(taskToDelete)}
        onChange={(taskToChange) => onChange(taskToChange)}
      />
    )
  })

  return <ul className="todo-list">{elements}</ul>
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      completed: PropTypes.bool,
    })
  ),
  onDelete: PropTypes.func,
  onChange: PropTypes.func,
}

TaskList.defaultProps = {
  list: [],
  onChange: () => {},
  onDelete: () => {},
}
