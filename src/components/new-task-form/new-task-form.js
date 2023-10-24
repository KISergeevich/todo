import React, { useState } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default function NewTaskForm({ onNewToDo }) {
  const [name, setName] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  return (
    <form
      className="new-todo-form"
      onSubmit={(e) => {
        e.preventDefault()
        if (name.trim() !== '' && !Number.isNaN(Number(min)) && !Number.isNaN(Number(sec))) {
          onNewToDo(name.trim(), Number(min), Number(sec))
          setName('')
          setMin('')
          setSec('')
        }
      }}
    >
      <input
        className="new-todo"
        required
        type="text"
        placeholder="Task"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="new-todo-form__timer"
        required
        type="text"
        placeholder="Min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        className="new-todo-form__timer"
        required
        type="text"
        placeholder="Sec"
        value={sec}
        onChange={(e) => setSec(e.target.value)}
      />
      <button type="submit" className="button-new-form">
        создать
      </button>
    </form>
  )
}

NewTaskForm.defaultProps = {
  onNewToDo: () => {},
}

NewTaskForm.propTypes = {
  onNewToDo: PropTypes.func,
}
