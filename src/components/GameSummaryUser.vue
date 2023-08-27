<template>
  <div v-if="color" class="rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2 ">
    <div class="flex flex-row items-center">
      <img class="w-8 h-8 border-2 mr-2 rounded-lg border-accent" :src="user.avatar" alt="" />
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-l font-bold">{{ user.username }}</h2>
        <p class="text-xs px-3">{{ this.elo }}</p>
      </div>
    </div>
    <div
      class="items-center flex justify-center border border-black border-solid rounded-lg w-10 h-10 mt-6 bg-white text-black tooltip-bottom tooltip"
      data-tip="avg. CP Loss">
      {{
        this.accuracy
      }}</div>
  </div>
  <div v-else="color" class="rounded-lg w-1/2 text-slate-100 flex flex-col mr-1 items-center pb-2 pl-2">
    <div class="flex flex-row items-center">
      <img class="w-8 h-8 border-2 mr-2 rounded-lg border-accent" :src="user.avatar" alt="" />
      <div class="flex flex-col justify-center items-center">
        <h2 class="text-l font-bold">{{ user.username }}</h2>
        <p class="text-xs px-3">{{ this.elo }}</p>
      </div>
    </div>
    <div
      class="items-center flex justify-center border border-white border-solid rounded-lg w-10 h-10 mt-6 bg-black tooltip-bottom tooltip"
      data-tip="avg. Pawn Loss">{{
        this.accuracy
      }}</div>
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
    },
    accuracy: { type: Number, required: true }
  },
  data() {
    return {
      user: { name: 'N', avatar: '/src/assets/standard-avatar.png' }
    }
  },
  beforeMount() {
    this.updateUser()
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
  