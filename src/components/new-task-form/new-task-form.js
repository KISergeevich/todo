import React, { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default class NewTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      dirty: false,
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const { onInputChange } = this.props
    const { value } = this.state
    if (value.trim() !== '') {
      onInputChange(value.trim())
      this.setState({ value: '', dirty: false })
    }
  }

  onInputChange(e) {
    this.setState({ value: e.target.value, dirty: true })
  }

  render() {
    const { value, dirty } = this.state
    return (
      <form className="form-class" onSubmit={(e) => this.onSubmit(e)}>
        <input
          className={classNames('new-todo', { 'new-todo--alarm': value.trim() === '' && dirty })}
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => this.onInputChange(e)}
        />
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  onInputChange: () => {},
}

NewTaskForm.propTypes = {
  onInputChange: PropTypes.func,
}
