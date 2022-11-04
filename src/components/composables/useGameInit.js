import { ref, watch, onBeforeMount } from 'vue'
import { CELL, DEFAULT_DIFFICULTY, MAX_DIFFICULTY } from '@/configs'

export default (cellsQuantity) => {
  const difficulty = ref(DEFAULT_DIFFICULTY)
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

  watch(difficulty, (newDifficulty) => {
    if (newDifficulty > MAX_DIFFICULTY) {
      difficulty.value = MAX_DIFFICULTY
    }
  })

  onBeforeMount(init)

  return {
    difficulty,
    cells,
    init
  }
}
