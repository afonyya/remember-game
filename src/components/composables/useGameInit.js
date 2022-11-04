import { ref, onBeforeMount } from 'vue'
import { CELL, DIFFICULTY } from '@/configs'

export default (cellsQuantity) => {
  const difficulty = ref(DIFFICULTY)
  const cells = ref([])

  const init = () => {
    cells.value = []

    for (let i = 0; i < cellsQuantity; i++) {
      cells.value.push({
        id: i,
        clicked: false,
        value: CELL.EMPTY
      })
    }
  }

  onBeforeMount(init)

  return {
    difficulty,
    cells,
    init
  }
}
