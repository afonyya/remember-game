<template>
  <section class="board-wrapper">
    <div class="board">
      <BoardCell
        v-for="cell in cells"
        :key="`cell-${cell.id}`"
        :cell="cell"
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
import { onBeforeMount, ref } from 'vue'
import BoardCell from '@/components/BoardCell'

export default {
  name: 'GameBoard',

  components: {
    BoardCell
  },

  setup () {
    const difficulty = ref(3)
    const cells = ref([])
    const cellsQuantity = 25

    const init = () => {
      cells.value = []

      for (let i = 0; i < cellsQuantity; i++) {
        cells.value.push({
          id: i,
          isClicked: false,
          value: false
        })
      }
    }

    onBeforeMount(init)

    return {
      difficulty,
      cells,
      cellsQuantity,
      init
    }
  },

  methods: {
    getRandom (min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },

    prepareGame () {
      for (let i = 0; i < this.difficulty; i++) {
        const index = this.getRandom(0, this.cellsQuantity - 1)

        if (!this.cells[index].value) {
          this.cells[index].value = true
        } else {
          i--
        }
      }
    },

    startGame () {
      this.init()
      this.prepareGame()
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
