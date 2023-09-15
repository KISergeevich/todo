import PropTypes from 'prop-types'

import NewTaskForm from '../new-task-form/new-task-form'

export default function Header({ onNewToDo }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onNewToDo={(name, min, sec) => onNewToDo(name, min, sec)} />
    </header>
  )
}

Header.propTypes = {
  onNewToDo: PropTypes.func,
}

Header.defaultProps = {
  onNewToDo: () => {},
}
