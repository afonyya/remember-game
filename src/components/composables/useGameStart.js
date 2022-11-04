import { ref } from 'vue'

export default (init, cells, difficulty, cellsQuantity) => {
  const preview = ref(false)

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const prepareGame = () => {
    preview.value = true

    for (let i = 0; i < difficulty.value; i++) {
      const index = getRandom(0, cellsQuantity - 1)

      if (!cells.value[index].value) {
        cells.value[index].value = true
      } else {
        i--
      }
    }

    setTimeout(() => {
      preview.value = false
    }, 2000)
  }

  const startGame = () => {
    init()
    prepareGame()
  }

  return {
    preview,
    startGame
  }
}
