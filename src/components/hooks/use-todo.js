import { useState, useEffect } from 'react'

import completeTask from '../utils/complete-task'
import pauseTask from '../utils/pause-task'
import filterFunction from '../utils/filter-function'
import createToDoItem from '../utils/create-todo-item'
import playTask from '../utils/play-task'
import tick from '../utils/tick'

export default function useToDo() {
  const [listCount, setListCount] = useState({ list: [], count: 0 })
  const [filter, setFilter] = useState('All')

  const updateListAddNew = (name, min, sec) => {
    setListCount((oldListCount) => ({
      list: [...oldListCount.list, createToDoItem(name, min, sec)],
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  const updateListRemove = (task) => {
    setListCount((oldListCount) => ({
      list: oldListCount.list.filter((item) => item !== task),
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  const updateListPause = (updateTask) => {
    setListCount((oldListCount) => ({
      list: pauseTask(updateTask, oldListCount.list),
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  const updateListComplete = (task) => {
    setListCount((oldListCount) => ({
      list: completeTask(task, oldListCount.list),
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  const updateListPlay = (updateTask) => {
    setListCount((oldListCount) => ({
      list: playTask(updateTask, oldListCount.list),
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  const updateListClear = () => {
    setListCount((oldListCount) => ({
      list: oldListCount.list.filter((item) => item.completed === false),
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  const addNew = (name, min, sec) => updateListAddNew(name, min, sec)
  const remove = (task) => updateListRemove(task)
  const pause = (updateTask) => updateListPause(updateTask)
  const complete = (task) => updateListComplete(task)
  const play = (updateTask) => updateListPlay(updateTask)
  const clear = () => updateListClear()

  const updateListTick = () => {
    setListCount((oldListCount) => ({
      list: tick(oldListCount.list),
      count: filterFunction(oldListCount.list, 'Active').length,
    }))
  }

  useEffect(() => {
    const timer = setInterval(() => updateListTick(), 1000)
    return () => {
      clearInterval(timer)
    }
  })
  return {
    listCount,
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
