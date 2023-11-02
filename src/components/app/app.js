import React from 'react'

import filterFunction from '../../utils/filter-function'
import Header from '../header/header'
import TaskList from '../task-list/task-list'
import Footer from '../footer/footer'
import './app.css'
import useToDo from '../../hooks/use-todo'

export default function App() {
  const { listCount, filter, setFilter, pause, addNew, remove, complete, play, clear } = useToDo()

  const filteredlist = filterFunction(listCount.list, filter)
  return (
    <section className="todoapp">
      <Header onNewToDo={addNew} />
      <section className="main">
        <TaskList list={filteredlist} onDelete={remove} onCompletedChange={complete} onPlay={play} onPause={pause} />
        <Footer
          filter={filter}
          onFilterChange={setFilter}
          count={listCount.count}
          clearComplete={clear}
          key={listCount.list.date}
        />
      </section>
    </section>
  )
}
