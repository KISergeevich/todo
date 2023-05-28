import PropTypes from 'prop-types'

import TasksFilter from '../tasks-filter/tasks-filter'
import './footer.css'

export default function Footer({ filter, onFilterChange, count, clearComplete, key }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter
        filter={filter}
        onChange={(filterValue) => onFilterChange(filterValue)}
        clearComplete={() => clearComplete()}
        key={key}
      />
    </footer>
  )
}

Footer.defaultProps = {
  filter: 'All',
  onFilterChange: () => {},
  count: 0,
  clearComplete: () => {},
  key: new Date(),
}

Footer.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  count: PropTypes.number,
  clearComplete: PropTypes.func,
  key: PropTypes.instanceOf(Date),
}
