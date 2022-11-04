<template>
  <figure :class="['cell', { 'cell-active': cell.value }]" />
</template>

<script>
export default {
  name: 'BoardCell',

  props: {
    cell: {
      type: Object,
      required: true
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
