<script setup>
import { watch } from 'vue'
import { msgHistory } from '../utils/analyze/Eval'

watch(
  msgHistory,
  () => {
    let container = document.getElementById('stockfishPanelSlider')
    container.scrollTop = container.scrollHeight
  },
  { deep: true, flush: 'post' }
)
</script>

<template>
  <div class="rounded-lg bg-slate-800 flex-content">
    <div class="scrollable-content-wrapper rounded-lg" id="stockfishPanelSlider">
      <div
        v-for="(msg, i) in msgHistory"
        class="flex space-x-3 items-center p-2"
        :class="{ 'bg-slate-700': !msg.stockfish }"
      >
        <div>{{ i }}</div>
        <div class="divider divider-horizontal"></div>
        <div class="font-mono" style="overflow-wrap: anywhere">{{ msg.msg }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.flex-content {
  flex-grow: 1;
  position: relative;
  width: 100%;
  height: 100%;
}

.scrollable-content-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
}
</style>
