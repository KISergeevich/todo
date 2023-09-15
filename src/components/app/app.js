import React, { Component } from 'react'
import { isBefore, addSeconds } from 'date-fns'

import createToDoItem from '../utils/create-todo-item'
import filterFunction from '../utils/filter-function'
import Header from '../header/header'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer'
import './app.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      filter: 'All',
      count: 0,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.onTick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onTick() {
    const { list } = this.state
    const newArr = list.map((item) => {
      if (item.isStarted) {
        const newTime = addSeconds(item.rest, -1)
        if (isBefore(newTime, new Date(0, 1, 0, 0, 0, 0, 0))) {
          return {
            ...item,
            rest: new Date(0, 1, 0, 0, 0, 0, 0),
            isStarted: false,
            completed: true,
          }
        }
        return {
          ...item,
          rest: newTime,
        }
      }
      return item
    })
    this.setList(newArr)
  }

  onPlay(updateTask) {
    const { list } = this.state
    const newArr = list.map((item) => {
      if (item === updateTask) {
        return {
          ...item,
          isStarted: true,
        }
      }
      return item
    })
    this.setList(newArr)
  }

  onPause(updateTask) {
    const { list } = this.state
    const newArr = list.map((item) => {
      if (item === updateTask) {
        return {
          ...item,
          isStarted: false,
        }
      }
      return item
    })
    this.setList(newArr)
  }

  onDelete(task) {
    const { list } = this.state
    const newArr = list.filter((item) => item !== task)
    this.setList(newArr)
  }

  onCompletedChange(task) {
    const { list } = this.state
    const newArr = list.map((item) => {
      if (item === task) {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item
    })
    this.setList(newArr)
  }

  onFilterChange(filterValue) {
    this.setState((state) => ({
      ...state,
      filter: filterValue,
    }))
  }

  setList(list) {
    this.setState((state) => {
      return {
        ...state,
        list,
        count: filterFunction(list, 'Active').length,
      }
    })
  }

  addItem(name, min, sec) {
    const rest = new Date(0, 1, 0, 0, min, sec, 0)
    const newItem = createToDoItem(name, rest)
    const { list } = this.state
    const newArr = [...list, newItem]
    this.setList(newArr)
  }

  clearComplete() {
    const { list } = this.state
    const newArr = list.filter((item) => item.completed === false)
    this.setList(newArr)
  }

  render() {
    const { count, filter, list } = this.state
    const filteredlist = filterFunction(list, filter)
    return (
      <section className="todoapp">
        <Header onNewToDo={(name, min, sec) => this.addItem(name, min, sec)} />
        <section className="main">
          <TaskList
            list={filteredlist}
            onDelete={(task) => this.onDelete(task)}
            onCompletedChange={(task) => this.onCompletedChange(task)}
            onPlay={(updateTask) => this.onPlay(updateTask)}
            onPause={(updateTask) => this.onPause(updateTask)}
          />
          <Footer
            filter={filter}
            onFilterChange={(filterValue) => this.onFilterChange(filterValue)}
            count={count}
            clearComplete={() => this.clearComplete()}
            key={list.date}
          />
        </section>
      </section>
    )
  }
}
