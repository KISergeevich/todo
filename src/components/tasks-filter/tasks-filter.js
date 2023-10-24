import './tasks-filter.css'
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function TasksFilter({ filter, clearComplete, onChange }) {
  return (
    <>
      <ul className="filters">
        <li>
          <button type="button" className={classNames({ selected: filter === 'All' })} onClick={() => onChange('All')}>
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classNames({ selected: filter === 'Active' })}
            onClick={() => onChange('Active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classNames({ selected: filter === 'Completed' })}
            onClick={() => onChange('Completed')}
          >
            Completed
          </button>
        </li>
      </ul>{' '}
      <button type="button" className="clear-completed" onClick={() => clearComplete()}>
        Clear completed
      </button>
    </>
  )
}

TasksFilter.defaultProps = {
  onChange: () => {},
  clearComplete: () => {},
}

TasksFilter.propTypes = {
  onChange: PropTypes.func,
  clearComplete: PropTypes.func,
}
