import { isBefore, addSeconds } from 'date-fns'

export default function tick(list) {
  return list.map((item) => {
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
}
