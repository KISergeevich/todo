import './tasks-filter.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class TasksFilter extends Component {
  onClick(filterValue) {
    const { onChange } = this.props
    onChange(filterValue)
  }

  clearComplete() {
    const { clearComplete } = this.props
    clearComplete()
  }

  render() {
    const { filter } = this.props
    return (
      <>
        <ul className="filters">
          <li>
            <button
              type="button"
              className={classNames({ selected: filter === 'All' })}
              onClick={() => this.onClick('All')}
            >
              All
            </button>
          </li>
          <li>
            <button
              type="button"
              className={classNames({ selected: filter === 'Active' })}
              onClick={() => this.onClick('Active')}
            >
              Active
            </button>
          </li>
          <li>
            <button
              type="button"
              className={classNames({ selected: filter === 'Completed' })}
              onClick={() => this.onClick('Completed')}
            >
              Completed
            </button>
          </li>
        </ul>{' '}
        <button type="button" className="clear-completed" onClick={() => this.clearComplete()}>
          Clear completed
        </button>
      </>
    )
  }
}

TasksFilter.defaultProps = {
  onChange: () => {},
  clearComplete: () => {},
}

TasksFilter.propTypes = {
  onChange: PropTypes.func,
  clearComplete: PropTypes.func,
}
