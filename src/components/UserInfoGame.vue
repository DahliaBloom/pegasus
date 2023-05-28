<script setup>
import standardAvatar from '@/assets/standard-avatar.png'
import { onBeforeMount, ref } from 'vue'
import { chessApi } from '@/utils/chessApi'

const props = defineProps({
  username: String
})

const user = ref(undefined)

onBeforeMount(() => {
  const fetcher = (tries) => {
    chessApi
      .getPlayer(props.username)
      .then((data) => {
        user.value = data.body
      })
      .catch(() => {
        if (tries < 10) {
          fetcher(tries++)
        }
      })
  }
  fetcher(0)
})
</script>

<template>
  <div v-if="user !== undefined">
    <router-link :to="'/user?username=' + username">
      <div class="stats">
        <div class="stat">
          <div class="stat-figure">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img :src="user.avatar ?? standardAvatar" />
              </div>
            </div>
          </div>
          <div class="stat-value text-lg">{{ user.name ?? user.username }}</div>
          <div class="stat-title text-right text-base">{{ user.username }}</div>
        </div>
        <div class="stat">
          <flag :iso="user.country.split('/').pop()" class="stat-figure rounded-lg text-3xl" />
        </div>
      </div>
    </router-link>
  </div>
  <p v-else>{{ username }}</p>
</template>
