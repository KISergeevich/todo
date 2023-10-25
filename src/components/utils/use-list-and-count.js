import { useState } from 'react'

import filterFunction from './filter-function'

export default function useListAndCount() {
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  return {
    list,
    count,
    setList: (newList) => {
      setList(newList)
      setCount(filterFunction(newList, 'Active').length)
    },
  }
}
