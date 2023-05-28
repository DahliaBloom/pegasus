<script setup>
defineProps({
  username: String
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="px-10 flex flex-col justify-center items-center flex-grow">
      <img src="@/assets/404-error.png" alt="404 Error" class="w-52" />
      <p class="text-2xl text-center">
        Sorry, but we could not find the user <i>{{ username }}</i
        >.<br />Perhaps you have mistyped?
      </p>
      <button class="btn btn-outline btn-primary m-6 gap-3" @click="$router.push('/')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Go back home
      </button>
    </div>
    <div class="text-xs ml-auto mr-2 mb-1 text-right">
      <a href="https://www.flaticon.com/free-icons/404-error" title="404 error icons"
        >404 error icons created by Ghozi Muhtarom - Flaticon</a
      >
    </div>
  </div>
</template>
