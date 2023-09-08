import React, { Component } from 'react'
import { formatDistanceToNow, format } from 'date-fns'
import './task.css'
import PropTypes from 'prop-types'

export default class Task extends Component {
  onChange() {
    const { onChange, task } = this.props
    onChange(task)
  }

  onDelete() {
    const { onDelete, task } = this.props
    onDelete(task)
  }

  render() {
    const { task } = this.props
    const { date, spent } = task
    return (
      <li className={task.completed ? 'completed' : ''}>
        <div className="view">
          <input
            id={date.toString()}
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => this.onChange()}
          />
          <label htmlFor={date.toString()}>
            <span className="description">{task.name}</span>
            <span className="spent">{format(spent, 'mm:ss')}</span>
            <span className="created">{formatDistanceToNow(task.date, { addSuffix: true })}</span>
          </label>
          <button type="button" aria-label="edit" className="icon icon-edit" />
          <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => this.onDelete()} />
        </div>
      </li>
    )
  }
}

Task.defaultProps = {
  onChange: () => {},
  onDelete: () => {},
  task: {},
}

Task.propTypes = {
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  task: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
  }),
}
