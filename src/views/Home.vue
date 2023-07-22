<script setup>
import PerlinNoiseCircle from '@/components/PerlinNoiseCircle.vue'
import UsernameInput from '@/components/UsernameInput.vue'
import CustomPGNInput from '@/components/CustomPGNInput.vue'
import pegasusAnimation from '../components/pegasusAnimation.vue'
import { onBeforeUnmount, onMounted } from 'vue'
import BurgerMenu from '../components/BurgerMenu.vue'

onMounted(() => {
  document.body.classList.add('hide-overflow')
})

onBeforeUnmount(() => {
  document.body.classList.remove('hide-overflow')
})
</script>

<template>
  <BurgerMenu class="absolute top-0 left-0"></BurgerMenu>
  <div class="px-10 flex flex-col justify-center items-center min-h-screen">
    <div class="w-1/3 flex flex-col space-y-10 justify-center items-center">
      <pegasusAnimation />
      <div class="flex flex-col items-center justify-center min-w-full">
        <UsernameInput />
        <label for="pgnTextInput"><i class="mt-3 link text-sm">Use own PGN</i></label>
      </div>
    </div>
    <PerlinNoiseCircle class="absolute -z-10" />
  </div>
  <input type="checkbox" id="pgnTextInput" class="modal-toggle" />
  <label for="pgnTextInput" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <div class="flex pl-2 pr-2 justify-between">
        <h3 class="text-lg font-bold">🌎 🛸</h3>
        <label for="pgnTextInput" class="cursor-pointer">✕</label>
      </div>
      <CustomPGNInput />
    </label>
  </label>
  <p class="absolute bottom-0 text-center w-full text-primary">By <a href="https://github.com/DahliaBloom">Felix
      Steinbrecht</a> & <a href="https://github.com/BambooTheBear">Benno Kolar</a></p>
</template>
