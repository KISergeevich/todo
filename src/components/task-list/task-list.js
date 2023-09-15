import PropTypes from 'prop-types'

import Task from '../task/task'

import './task-list.css'

export default function TaskList({ list, onDelete, onCompletedChange, onPlay, onPause }) {
  const elements = list.map((task) => {
    return (
      <Task
        key={task.date.toString()}
        task={task}
        onDelete={(taskToDelete) => onDelete(taskToDelete)}
        onCompletedChange={(taskToChange) => onCompletedChange(taskToChange)}
        onPlay={(updateTask) => onPlay(updateTask)}
        onPause={(updateTask) => onPause(updateTask)}
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
  onCompletedChange: PropTypes.func,
}

TaskList.defaultProps = {
  list: [],
  onCompletedChange: () => {},
  onDelete: () => {},
}
