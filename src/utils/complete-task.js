export default function completeTask(task, list) {
  return list.map((item) => {
    if (item === task) {
      return {
        ...item,
        completed: !item.completed,
      }
    }
    return item
  })
}
