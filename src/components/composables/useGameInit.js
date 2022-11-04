import { ref, onBeforeMount } from 'vue'

export default (cellsQuantity) => {
  const difficulty = ref(3)
  const cells = ref([])

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
    init
  }
}
