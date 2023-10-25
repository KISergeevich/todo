export default function playTask(task, list) {
  return list.map((item) => {
    if (item === task) {
      return {
        ...item,
        isStarted: true,
      }
    }
    return item
  })
}
