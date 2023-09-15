export default function createToDoItem(name, rest) {
  return {
    name,
    date: new Date(),
    completed: false,
    rest,
    isStarted: false,
  }
}
