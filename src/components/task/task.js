/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react'
import { formatDistanceToNow, format } from 'date-fns'
import './task.css'
import PropTypes from 'prop-types'

export default class Task extends Component {
  onCompletedChange() {
    const { onCompletedChange, task } = this.props
    onCompletedChange(task)
  }

  onDelete() {
    const { onDelete, task } = this.props
    onDelete(task)
  }

  onPlay() {
    const { onPlay, task } = this.props
    onPlay(task)
  }

  onPause() {
    const { onPause, task } = this.props
    onPause(task)
  }

  render() {
    const { task } = this.props
    const { name, date, rest, isStarted } = task
    return (
      <li className={task.completed ? 'completed' : ''}>
        <div className="view">
          <input
            id={date.toString()}
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => this.onCompletedChange()}
          />
          <label htmlFor={date.toString()}>
            <span className="title">{name}</span>
            <span className="description">
              <button type="button" aria-label="play" onClick={() => this.onPlay()} className="icon icon-play" />
              <button
                type="button"
                disabled={!isStarted}
                aria-label="pause"
                onClick={() => this.onPause()}
                className="icon icon-pause"
              />
              {format(rest, 'mm:ss')}
            </span>
            <span className="created description">{formatDistanceToNow(date, { addSuffix: true })}</span>
          </label>
          <button type="button" aria-label="edit" className="icon icon-edit" />
          <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => this.onDelete()} />
        </div>
      </li>
    )
  }
}

Task.defaultProps = {
  onCompletedChange: () => {},
  onDelete: () => {},
  task: {},
}

Task.propTypes = {
  onCompletedChange: PropTypes.func,
  onDelete: PropTypes.func,
  task: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    completed: PropTypes.bool,
  }),
}
