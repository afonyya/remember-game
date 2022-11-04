import { computed } from 'vue'
import { CELL, GAME_STATUSES, GAME_SPEED } from '@/configs'

export default (init, cells, difficulty, cellsQuantity, gameStatus) => {
  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }

  const prepareGame = () => {
    gameStatus.value = GAME_STATUSES.PREVIEW

    for (let i = 0; i < difficulty.value; i++) {
      const index = getRandom(0, cellsQuantity - 1)

      if (cells.value[index].value !== CELL.FILLED) {
        cells.value[index].value = CELL.FILLED
      } else {
        i--
      }
    }

    setTimeout(() => {
      gameStatus.value = GAME_STATUSES.STARTED
    }, GAME_SPEED)
  }

  const startGame = () => {
    init()
    prepareGame()
  }

  const canStartGame = computed(() => {
    return gameStatus.value !== GAME_STATUSES.PREVIEW &&
      gameStatus.value !== GAME_STATUSES.WIN
  })

  return {
    canStartGame,
    startGame
  }
}
