<script setup>
import PerlinNoiseCircle from '@/components/PerlinNoiseCircle.vue'
import UsernameInput from '@/components/UsernameInput.vue'
import { onBeforeUnmount, onMounted } from 'vue'

onMounted(() => {
  document.body.classList.add('hide-overflow')
})

onBeforeUnmount(() => {
  document.body.classList.remove('hide-overflow')
})
</script>

<template>
  <div class="px-10 flex flex-col justify-center items-center min-h-screen space-y-10">
    <img src="@/assets/pegasus-font-logo.svg" alt="Pegasus logo" />
    <span>XXX</span>
    <UsernameInput />
    <PerlinNoiseCircle class="absolute -z-10" />
  </div>
</template>
