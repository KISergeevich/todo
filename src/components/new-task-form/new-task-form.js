import React, { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      min: '',
      sec: '',
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const { onNewToDo } = this.props
    const { name, min, sec } = this.state
    if (name.trim() !== '' && !Number.isNaN(Number(min)) && !Number.isNaN(Number(sec))) {
      onNewToDo(name.trim(), Number(min), Number(sec))
      this.setState({ name: '', min: '', sec: '' })
    }
  }

  onInputChange(e) {
    this.setState((state) => ({
      ...state,
      name: e.target.value,
    }))
  }

  onInputChangeMin(e) {
    this.setState((state) => ({
      ...state,
      min: e.target.value,
    }))
  }

  onInputChangeSec(e) {
    this.setState((state) => ({
      ...state,
      sec: e.target.value,
    }))
  }

  render() {
    const { name, min, sec } = this.state
    return (
      <form className="new-todo-form" onSubmit={(e) => this.onSubmit(e)}>
        <input
          className="new-todo"
          required
          type="text"
          placeholder="Task"
          value={name}
          onChange={(e) => this.onInputChange(e)}
        />
        <input
          className="new-todo-form__timer"
          required
          type="text"
          placeholder="Min"
          value={min}
          onChange={(e) => this.onInputChangeMin(e)}
        />
        <input
          className="new-todo-form__timer"
          required
          type="text"
          placeholder="Sec"
          value={sec}
          onChange={(e) => this.onInputChangeSec(e)}
        />
        <button type="submit" className="button-new-form">
          создать
        </button>
      </form>
    )
  }
}

NewTaskForm.defaultProps = {
  onNewToDo: () => {},
}

NewTaskForm.propTypes = {
  onNewToDo: PropTypes.func,
}
