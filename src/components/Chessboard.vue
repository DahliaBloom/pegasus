<script setup>
import { TheChessboard } from 'vue3-chessboard'
import { watch } from 'vue'
import 'vue3-chessboard/style.css'

const props = defineProps(['fen', 'orientation'])

const boardConfig = {
  orientation: props.orientation,

}

let boardAPI

watch(
  () => props.fen,
  () => {
    boardAPI.setPosition(props.fen)
  }
)
watch(
  () => props.orientation,
  () => {
    boardAPI.toggleOrientation()
  }
)
</script>

<template>
  <div class="w-full grid items-center h-full">
    <TheChessboard @move="(move) => {
      $emit('move', move)
    }
      " @board-created="(api) => (boardAPI = api)" :board-config="boardConfig" />
  </div>
</template>

<style>
.main-wrap {
  width: 90%;
}

@media (orientation: landscape) {
  .main-wrap {
    width: 90%;
  }
}
</style>
