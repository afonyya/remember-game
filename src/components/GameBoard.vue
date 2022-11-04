<template>
  <section class="board-wrapper">
    <div class="board">
      <BoardCell
        v-for="cell in cells"
        :key="`cell-${cell.id}`"
        :cell="cell"
        :preview="preview"
      />
    </div>

    <p>
      <span>Difficulty: </span>
      <span class="difficulty">{{ difficulty }}</span>
    </p>

    <button
      @click="startGame"
      class="btn"
    >
      Start
    </button>
  </section>
</template>

<script>
import { useGameInit, useGameStart } from '@/components/composables'
import BoardCell from '@/components/BoardCell'

export default {
  name: 'GameBoard',

  components: {
    BoardCell
  },

  setup () {
    const cellsQuantity = 25
    const { difficulty, cells, init } = useGameInit(cellsQuantity)
    const { preview, startGame } = useGameStart(init, cells, difficulty, cellsQuantity)

    return {
      difficulty,
      cells,
      cellsQuantity,
      preview,
      startGame,
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

.btn {
  background: #42b983cc;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 10px 30px;
  margin: 10px 0;
  cursor: pointer;
  outline: none
}

.btn:hover {
  background: #42b983;
}
</style>
