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
</script>

<template>
  <div class="w-full grid items-center">
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

@media (orientation: landscape) {
	.main-wrap {
		width: 100%;
	}
}

cg-board {
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOng9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA4IDgiIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PGcgaWQ9ImYiPjxnIGlkPSJlIj48ZyBpZD0iZCI+PGcgaWQ9ImMiPjxwYXRoIGZpbGw9IiNjYmQ1ZTEiIGlkPSJhIiBkPSJNMCAwaDF2MUgweiIvPjx1c2UgeD0iMSIgeT0iMSIgaHJlZj0iI2EiIHg6aHJlZj0iI2EiLz48cGF0aCBmaWxsPSIjMzM0MTU1IiBpZD0iYiIgZD0iTTAgMWgxdjFIMHoiLz48dXNlIHg9IjEiIHk9Ii0xIiBocmVmPSIjYiIgeDpocmVmPSIjYiIvPjwvZz48dXNlIHg9IjIiIGhyZWY9IiNjIiB4OmhyZWY9IiNjIi8+PC9nPjx1c2UgeD0iNCIgaHJlZj0iI2QiIHg6aHJlZj0iI2QiLz48L2c+PHVzZSB5PSIyIiBocmVmPSIjZSIgeDpocmVmPSIjZSIvPjwvZz48dXNlIHk9IjQiIGhyZWY9IiNmIiB4OmhyZWY9IiNmIi8+PC9zdmc+)
}
</style>
