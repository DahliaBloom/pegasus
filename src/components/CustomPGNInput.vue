<script setup>
import { ref } from 'vue'

const pgn = ref('')
</script>

<template>
  <input
    type="text"
    v-model="pgn"
    placeholder="PGN"
    class="input input-bordered input-primary w-full max-w-md text-center focus:outline-none rounded-2xl mt-5"
    @keyup.enter="$router.push('/analyze?pgn=' + encodeURI(pgn))"
  />
</template>
