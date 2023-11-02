export default function filterFunction(arr, filterValue) {
  return arr.filter((item) => {
    if (filterValue === 'All') {
      return true
    }
    if (filterValue === 'Active') {
      return !item.completed
    }
    if (filterValue === 'Completed') {
      return item.completed
    }
    return false
  })
}
