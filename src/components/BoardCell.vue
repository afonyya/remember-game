<template>
  <figure
    :class="[
      'cell',
      { 'cell-active': isCellActive }
    ]"
    @click="selectCell"
  />
</template>

<script>
import { computed } from 'vue'
import { CELL, GAME_STATUSES } from '@/configs'

export default {
  name: 'BoardCell',

  props: {
    cell: {
      type: Object,
      required: true
    },

    gameStatus: {
      type: Number,
      default: GAME_STATUSES.NONE
    }
  },

  setup (props) {
    const isCellActive = computed(() => {
      return (
        props.cell.value === CELL.FILLED &&
        props.gameStatus === GAME_STATUSES.PREVIEW
      ) || props.cell.clicked
    })

    return {
      isCellActive
    }
  },
  methods: {
    selectCell () {
      if (this.gameStatus === GAME_STATUSES.STARTED) {
        this.$emit('selectCell', this.cell.id)
      }
    }
  }
}
</script>

<style scoped>
  .cell {
    position: relative;
    width: 50px;
    height: 50px;
    background: #ccc;
    margin: 5px;
    cursor: pointer;
    transition: .5s;
    transform-style: preserve-3d;
  }

  .cell-active {
    background: #42b983cc;
    transform: rotateX(180deg);
  }
</style>
