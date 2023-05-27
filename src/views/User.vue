<script setup>
import UserNotFound from './UserNotFound.vue'
import Loading from './Loading.vue'
import { getPlayer } from '@/utils/chessApi'
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

let user = undefined
const isLoading = ref(true)
const isError = ref(false)

onBeforeMount(() => {
  const username = (useRoute().query.username ?? '').toString()
  const userResp = getPlayer(username)
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
  <div v-else>Hi</div>
</template>
