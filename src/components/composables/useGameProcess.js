import { computed, nextTick } from 'vue'
import { CELL, DEFAULT_DIFFICULTY, GAME_SPEED, GAME_STATUSES } from '@/configs'

export default (cells, gameStatus, difficulty, startGame) => {
  const checkGame = () => {
    const errorIndex = cells.value
      .findIndex(cell => cell.clicked && cell.value === CELL.EMPTY)

    if (errorIndex > -1) {
      setGameOver()
      return
    }

    const notFoundCellIndex = cells.value
      .findIndex(cell => !cell.clicked && cell.value === CELL.FILLED)

    if (notFoundCellIndex === -1) {
      setWin()
    }
  }

  const setGameOver = () => {
    gameStatus.value = GAME_STATUSES.FAIL
    difficulty.value = DEFAULT_DIFFICULTY
  }

  const setWin = () => {
    gameStatus.value = GAME_STATUSES.WIN

    setTimeout(async () => {
      difficulty.value += 1

      await nextTick()

      startGame()
    }, GAME_SPEED)
  }

  const selectCell = (id) => {
    const index = cells.value.findIndex(cell => cell.id === id)

    if (index > -1 && !cells.value[index].clicked) {
      cells.value[index].clicked = true

      checkGame()
    }
  }

  const isWin = computed(() => gameStatus.value === GAME_STATUSES.WIN)

  const isFail = computed(() => gameStatus.value === GAME_STATUSES.FAIL)

  return {
    isWin,
    isFail,
    selectCell
  }
}
