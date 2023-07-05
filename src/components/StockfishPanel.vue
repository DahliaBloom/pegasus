<script setup>
import { running, restart, movetime } from '../utils/analyze/Eval'
import UCISender from './UCISender.vue'
import StockfishMessages from './StockfishMessages.vue'
</script>

<template>
  <div
    class="h-fit w-full bg-base-300 rounded-lg p-5 flex justify-center items-center space-y-4 flex-col"
  >
    <div class="flex space-x-2 h-fit w-full">
      <div
        class="w-full h-fit text-white py-1 px-4 rounded-full text-center"
        :class="[running ? 'bg-green-300' : 'bg-yellow-200']"
      >
        Stockfish {{ running ? 'running' : 'paused' }}
      </div>
      <button
        @click="restart"
        class="bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white"
      >
        ↻ Restart
      </button>
    </div>
    <div class="w-full flex space-x-4">
      <p class="min-w-fit">Movetime: {{ movetime }}</p>
      <div class="w-full">
        <input
          type="range"
          min="500"
          max="10000"
          v-model="movetime"
          class="range range-secondary range-xs w-full"
        />
      </div>
    </div>
    <div class="w-full flex space-x-4 items-center">
      <UCISender />
    </div>
    <div
      class="flex max-w-lg max-h-96 flex-wrap items-center justify-center gap-2 overflow-x-hidden"
    >
      <StockfishMessages />
    </div>
  </div>
</template>
