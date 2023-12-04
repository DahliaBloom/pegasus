<script setup>
import UserNotFound from './UserNotFound.vue'
import Loading from './Loading.vue'
import UserInfo from '@/components/UserInfo.vue'
import { chessApi } from '@/utils/chessApi'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import HomeButton from '../components/HomeButton.vue'
import PlayedGamesTable from '../components/PlayedGamesTable.vue'

let user = undefined
const isLoading = ref(true)
const isError = ref(false)

onBeforeMount(() => {
  const username = (useRoute().query.username ?? '').toString()
  const fetcher = (tries) => {
    chessApi
      .getPlayer(username)
      .then((data) => {
        user = data.body
        tries = 10
      })
      .catch(() => {
        if (tries > 9) {
          user = username
          isError.value = true
        } else {
          fetcher(++tries)
        }
      })
      .finally(() => {
        if (tries > 9) {
          isLoading.value = false
        }
      })
  }
  fetcher(0)
})
</script>

<template>
  <Loading v-if="isLoading" />
  <UserNotFound :username="user" v-else-if="isError" />
  <div v-else>
    <HomeButton />
    <div class="p-5 flex flex-col items-center space-y-8 min-h-screen">
      <div>
        <UserInfo :data="user" />
      </div>
      <div>
        <PlayedGamesTable :username="user.username" />
      </div>
      <div class="text-xs ml-auto text-right flex-grow flex items-end">
        <a target="_blank" href="https://icons8.com/icon/57992/laurel-wreath">Laurel Wreath</a>&nbsp;icon by&nbsp;
        <a target="_blank" href="https://icons8.com">Icons8</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a target="_blank" href="https://icons8.com/icon/KI9OU8UQdUam/sword">Sword</a>&nbsp;icon
        by&nbsp;
        <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  </div></template>
