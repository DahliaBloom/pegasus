<script setup>
import { TheChessboard } from 'vue3-chessboard'
import { watch } from 'vue'
import 'vue3-chessboard/style.css'

const props = defineProps(['fen', 'orientation'])

const boardConfig = {

}

let boardAPI

watch(
  () => props.fen,
  () => {
    boardAPI.setPosition(props.fen)
  }
)
</script>

<template>
  <div class="w-full h-full grid items-center">
    <TheChessboard
      @move="
        (move) => {
          $emit('move', move)
        }
      "
      @board-created="(api) => (boardAPI = api)"
      :board-config="boardConfig"
    />
  </div>
</template>

<style>
.main-wrap {
  width: 100%;
}
</style>
