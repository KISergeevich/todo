import { useState, useEffect } from 'react'

import completeTask from '../utils/complete-task'
import pauseTask from '../utils/pause-task'
import filterFunction from '../utils/filter-function'
import createToDoItem from '../utils/create-todo-item'
import playTask from '../utils/play-task'
import tick from '../utils/tick'

export default function useToDo() {
  const [list, setList] = useState([])
  const [filter, setFilter] = useState('All')
  const [count, setCount] = useState(0)

  const updateList = (newList) => {
    setList(() => newList)
    setCount(() => filterFunction(newList, 'Active').length)
  }
  const addNew = (name, min, sec) => updateList([...list, createToDoItem(name, min, sec)])
  const remove = (task) => updateList(list.filter((item) => item !== task))
  const pause = (updateTask) => updateList(pauseTask(updateTask, list))
  const complete = (task) => updateList(completeTask(task, list))
  const play = (updateTask) => updateList(playTask(updateTask, list))
  const clear = () => updateList(list.filter((item) => item.completed === false))

  useEffect(() => {
    const timer = setInterval(() => updateList(tick(list)), 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return {
    list,
    count,
    filter,
    setFilter,
    pause,
    addNew,
    remove,
    complete,
    play,
    clear,
  }
}
