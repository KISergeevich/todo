import React, { Component } from 'react'
import { formatDistanceToNow } from 'date-fns'
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
    return (
      <li className={task.completed ? 'completed' : ''}>
        <div className="view">
          <input
            id="label"
            className="toggle"
            type="checkbox"
            checked={task.completed}
            onChange={() => this.onChange()}
          />
          <label htmlFor="label">
            <span className="description">{task.name}</span>
            <span className="created">{formatDistanceToNow(task.date, { addSuffix: true })}</span>
          </label>
          <button type="button" aria-label="edit" className="icon icon-edit" />
          <button type="button" aria-label="delete" className="icon icon-destroy" onClick={() => this.onDelete()} />
        </div>
      </li>
    )
    // return (
    //     <li class="editing">
    //             <div class="view">
    //                 <input class="toggle" type="checkbox" />
    //                 <label>
    //                     <span class="description">Editing task</span>
    //                     <span class="created">created 5 minutes ago</span>
    //                 </label>
    //                 <button class="icon icon-edit"></button>
    //                 <button class="icon icon-destroy"></button>
    //             </div>
    //             <input type="text" class="edit" value="Editing task" />
    //         </li>
    // );
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
