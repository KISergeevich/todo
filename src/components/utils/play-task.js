export default function playTask(updateTask, list) {
  return list.map((item) => {
    if (item === updateTask) {
      return {
        ...item,
        isStarted: true,
      }
    }
    return item
  })
}
