export default function pauseTask(task, list) {
  return list.map((item) => {
    if (item === task) {
      return {
        ...item,
        isStarted: false,
      }
    }
    return item
  })
}
