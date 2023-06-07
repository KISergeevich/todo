export default function createToDoItem(inputValue) {
  return {
    name: inputValue,
    date: new Date(),
    completed: false,
  }
}
