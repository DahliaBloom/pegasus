<script setup>
import { ref } from 'vue'
import homePrimary from '@/assets/home-primary.png'
import homeBg from '@/assets/home-bg.png'
import router from '@/router'

defineProps({
  username: String
})

const homeIconUrl = ref(homePrimary)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="px-10 flex flex-col justify-center items-center flex-grow">
      <img src="@/assets/404-error.png" alt="404 Error" class="w-52" />
      <p class="text-2xl text-center">
        Sorry, but we could not find the user <i>{{ username }}</i
        >.<br />Perhaps you have mistyped?
      </p>
      <button
        class="btn btn-outline btn-primary m-6 gap-3"
        @mouseenter="homeIconUrl = homeBg"
        @mouseleave="homeIconUrl = homePrimary"
        @click="router.push('/')"
      >
        <img :src="homeIconUrl" class="h-6 w-6" />
        Go back home
      </button>
    </div>
    <div class="ml-auto mr-2 mb-1 text-right">
      <a href="https://www.flaticon.com/free-icons/404-error" title="404 error icons"
        >404 error icons created by Ghozi Muhtarom - Flaticon</a
      >
      <br />
      <a href="https://www.flaticon.com/free-icons/home-button" title="home button icons"
        >Home button icons created by Freepik - Flaticon</a
      >
    </div>
  </div>
</template>
