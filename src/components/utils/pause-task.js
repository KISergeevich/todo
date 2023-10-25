export default function pauseTask(updateTask, list) {
  return list.map((item) => {
    if (item === updateTask) {
      return {
        ...item,
        isStarted: false,
      }
    }
    return item
  })
}
