import PropTypes from 'prop-types'

import NewTaskForm from '../new-task-form/new-task-form'

export default function Header({ list, onInputChange }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm list={list} onInputChange={(inputValue) => onInputChange(inputValue)} />
    </header>
  )
}

Header.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      completed: PropTypes.bool,
    })
  ),
  onInputChange: PropTypes.func,
}

Header.defaultProps = {
  list: [],
  onInputChange: () => {},
}
