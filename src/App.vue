<template>
  <main class="app">
    <img
      src="@/assets/logo.png"
      alt="Vue logo"
      class="logo"
    />
    <h1>Remember Game</h1>
    <p>Remember and open all green cells</p>
    <GameBoard />
  </main>
</template>

<script>
import GameBoard from '@/components/GameBoard'

export default {
  name: 'App',
  components: {
    GameBoard
  }
}
</script>

<style scoped>
  .app {
    font-family: Helvetica, sans-serif;
    margin-top: 40px;
    text-align: center;
  }
  .logo {
    width: 100px;
  }
</style>

