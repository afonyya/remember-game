<template>
  <section class="board-wrapper">
    <div class="board">
      <BoardCell
        v-for="cell in cells"
        :key="`cell-${cell.id}`"
        :cell="cell"
        :gameStatus="gameStatus"
        @selectCell="selectCell($event)"
      />
    </div>

    <p>
      <span>Difficulty: </span>
      <span class="difficulty">{{ difficulty }}</span>
    </p>

    <p
      v-if="isWin"
      class="win"
    >
      Congrats! Let's keep playing!
    </p>

    <p
      v-else-if="isFail"
      class="fail"
    >
      You lose. Try again!
    </p>

    <button
      @click="startGame"
      :disabled="!canStartGame"
    >
      Start
    </button>
  </section>
</template>

<script>
import { ref } from 'vue'
import {
  useGameInit,
  useGameStart,
  useGameProcess
} from '@/components/composables'
import { GAME_STATUSES } from '@/configs'
import BoardCell from '@/components/BoardCell'

export default {
  name: 'GameBoard',

  components: {
    BoardCell
  },

  setup () {
    const cellsQuantity = 25
    const gameStatus = ref(GAME_STATUSES.NONE)

    const { difficulty, cells, init } = useGameInit(cellsQuantity)

    const { canStartGame, startGame } = useGameStart(
      init,
      cells,
      difficulty,
      cellsQuantity,
      gameStatus
    )

    const { isWin, isFail, selectCell } = useGameProcess(
      cells,
      gameStatus,
      difficulty,
      startGame
    )

    return {
      difficulty,
      cells,
      cellsQuantity,
      gameStatus,
      canStartGame,
      isWin,
      isFail,
      startGame,
      selectCell,
      init
    }
  }
}
</script>

<style scoped>
  .board-wrapper {
    margin-bottom: 100px;
  }

  .board {
    width: 310px;
    box-sizing: border-box;
    padding: 5px;
    background: #eee;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
  }

  .difficulty {
    font-weight: 600;
  }

  button {
    background: #42b983cc;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: 10px 30px;
    margin: 10px 0;
    cursor: pointer;
    outline: none
  }

  button:hover {
    background: #42b983;
  }

  button:disabled {
    opacity: .5;
  }

  .win {
    color: #42b983cc;
  }

  .fail {
    color: #ff000055
  }
</style>
