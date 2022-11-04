export default (cells) => {
  const selectCell = (id) => {
    const index = cells.value.findIndex(cell => cell.id === id)

    if (index > -1) {
      cells.value[index].clicked = true
    }
  }

  return {
    selectCell
  }
}
