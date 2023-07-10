<template>
  <div class="flex justify-center items-center">
    <img
      class="w-8 h-8 border-2 mr-2 rounded-lg border-slate-300"
      :src="user.avatar"
      alt=""
      v-if="color"
    />
    <img
      class="w-8 h-8 border-2 mr-2 rounded-lg border-slate-700"
      :src="user.avatar"
      alt=""
      v-else="color"
    />
    <div class="flex flex-row items-baseline">
      <h2 class="text-xl font-bold">{{ user.username }}</h2>
      <p class="text-xs px-3">{{ this.elo }}</p>
    </div>
    <button class="rounded-full p-2 text-white" @click="$emit('turnBoard')">↻</button>
  </div>
</template>

<script>
import { chessApi } from '@/utils/chessApi'
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    elo: {
      type: String,
      required: true
    },
    color: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      user: { name: 'N', avatar: '/src/assets/standard-avatar.png' }
    }
  },
  beforeMount() {
    this.updateUser()
  },
  watch: {
    color() {
      this.updateUser()
    }
  },
  methods: {
    updateUser() {
      chessApi
        .getPlayer(this.username)
        .then((data) => {
          this.user = data.body
        })
        .catch(() => {
          isError.value = true
        })
        .finally(() => {
          console.log(this.user)
        })
    }
  }
}
</script>
