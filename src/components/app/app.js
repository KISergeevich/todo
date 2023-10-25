import React, { useState, useEffect } from 'react'

import createToDoItem from '../utils/create-todo-item'
import filterFunction from '../utils/filter-function'
import Header from '../header/header'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer'
import './app.css'
import useListAndCount from '../utils/use-list-and-count'
import tick from '../utils/tick'
import completeTask from '../utils/complete-task'
import play from '../utils/play'
import pause from '../utils/pause'

export default function App() {
  const [filter, setFilter] = useState('All')
  const { list, count, setList } = useListAndCount()
  useEffect(() => {
    const timer = setInterval(() => setList(tick(list)), 1000)
    return () => {
      clearInterval(timer)
    }
  })

  const filteredlist = filterFunction(list, filter)
  return (
    <section className="todoapp">
      <Header onNewToDo={(name, min, sec) => setList([...list, createToDoItem(name, min, sec)])} />
      <section className="main">
        <TaskList
          list={filteredlist}
          onDelete={(task) => setList(list.filter((item) => item !== task))}
          onCompletedChange={(task) => setList(completeTask(task, list))}
          onPlay={(updateTask) => setList(play(updateTask, list))}
          onPause={(updateTask) => setList(pause(updateTask, list))}
        />
        <Footer
          filter={filter}
          onFilterChange={(filterValue) => setFilter(filterValue)}
          count={count}
          clearComplete={() => setList(list.filter((item) => item.completed === false))}
          key={list.date}
        />
      </section>
    </section>
  )
}
