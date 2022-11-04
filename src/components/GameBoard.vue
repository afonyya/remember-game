<template>
  <div class="board-wrapper">
    <div class="board">
      <BoardItem
        v-for="item in 25"
        :key="`item-${item}`"
      />
    </div>

    <p>
      <span>Difficulty: </span>
      <span class="difficulty">{{ difficulty }}</span>
    </p>

    <button class="btn">Start</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import BoardItem from '@/components/BoardItem'

export default {
  name: 'GameBoard',
  components: {
    BoardItem
  },
  setup () {
    const difficulty = ref(1)

    return {
      difficulty
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
