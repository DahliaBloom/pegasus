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
  const userResp = chessApi.getPlayer(username)
  userResp
    .then((data) => {
      user = data.body
    })
    .catch(() => {
      user = username
      isError.value = true
    })
    .finally(() => {
      isLoading.value = false
    })
})
</script>

<template>
  <Loading v-if="isLoading" />
  <UserNotFound :username="user" v-else-if="isError" />
  <div v-else>
    <HomeButton />
    <div class="p-5 flex flex-col items-center space-y-8">
      <div><UserInfo :data="user" /></div>
      <div><PlayedGamesTable :username="user.username" /></div>
    </div>
  </div>
</template>
