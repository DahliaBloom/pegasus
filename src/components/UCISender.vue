<script setup>
import { ref } from 'vue'
import { message } from '../utils/analyze/Eval'

const command = ref('')

function send() {
  message(command.value)
}
</script>

<template>
  <input
    type="text"
    placeholder="UCI command"
    class="input w-full h-9"
    v-model="command"
    @keyup.enter="send"
  />
  <button @click="send" class="bg-secondary h-fit min-w-fit rounded-full py-1 px-4 text-white">
    Send message
  </button>
</template>
