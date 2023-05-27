<script setup>
import router from '@/router'
import { ref } from 'vue'

const username = ref('')
</script>

<template>
  <input
    type="text"
    v-model="username"
    placeholder="Enter a chess.com username"
    class="input input-bordered input-primary w-full max-w-md text-center focus:outline-none rounded-2xl"
    @keyup.enter="router.push('/user?username=' + username)"
  />
</template>
