export default function createToDoItem(name, min, sec) {
  return {
    name,
    date: new Date(),
    completed: false,
    rest: new Date(0, 1, 0, 0, min, sec, 0),
    isStarted: false,
  }
}
