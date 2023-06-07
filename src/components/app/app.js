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
      rawList: [],
      count: 0,
    }
  }

  onDelete(task) {
    this.setState((state) => {
      const newArr = state.rawList.filter((item) => item !== task)
      return {
        ...state,
        rawList: newArr,
        list: filterFunction(newArr, state.filter),
        count: filterFunction(newArr, 'Active').length,
      }
    })
  }

  onChange(task) {
    this.setState((state) => {
      const newArr = state.rawList.map((item) => {
        if (item === task) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
      return {
        ...state,
        rawList: newArr,
        list: filterFunction(newArr, state.filter),
        count: filterFunction(newArr, 'Active').length,
      }
    })
  }

  onFilterChange(filterValue) {
    this.setState((state) => ({
      ...state,
      list: filterFunction(state.rawList, filterValue),
      filter: filterValue,
    }))
  }

  addItem(inputValue) {
    const newItem = createToDoItem(inputValue)
    this.setState((state) => {
      const newArr = [...state.rawList, newItem]
      return {
        ...state,
        rawList: newArr,
        list: filterFunction(newArr, state.filter),
        count: filterFunction(newArr, 'Active').length,
      }
    })
  }

  clearComplete() {
    this.setState((state) => {
      const newArr = state.rawList.filter((item) => item.completed === false)
      return {
        ...state,
        rawList: newArr,
        list: filterFunction(newArr, state.filter),
      }
    })
  }

  render() {
    const { count, filter, list } = this.state
    return (
      <section className="todoapp">
        <Header list={list} onInputChange={(inputValue) => this.addItem(inputValue)} />
        <section className="main">
          <TaskList list={list} onDelete={(task) => this.onDelete(task)} onChange={(task) => this.onChange(task)} />
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
