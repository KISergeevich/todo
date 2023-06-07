import React, { Component } from 'react'

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

  onDelete(task) {
    const { list } = this.state
    const newArr = list.filter((item) => item !== task)
    this.setList(newArr)
  }

  onChange(task) {
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

  addItem(inputValue) {
    const newItem = createToDoItem(inputValue)
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
        <Header onInputChange={(inputValue) => this.addItem(inputValue)} />
        <section className="main">
          <TaskList
            list={filteredlist}
            onDelete={(task) => this.onDelete(task)}
            onChange={(task) => this.onChange(task)}
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
