import React, { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const { onInputChange } = this.props
    const { value } = this.state
    if (value.trim() !== '') {
      onInputChange(value.trim())
      this.setState({ value: '' })
    }
  }

  onInputChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    const { value } = this.state
    return (
      <form className="form-class" onSubmit={(e) => this.onSubmit(e)}>
        <input
          className="new-todo"
          required
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
