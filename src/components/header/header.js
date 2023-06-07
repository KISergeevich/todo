import PropTypes from 'prop-types'

import NewTaskForm from '../new-task-form/new-task-form'

export default function Header({ onInputChange }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onInputChange={(inputValue) => onInputChange(inputValue)} />
    </header>
  )
}

Header.propTypes = {
  onInputChange: PropTypes.func,
}

Header.defaultProps = {
  onInputChange: () => {},
}
