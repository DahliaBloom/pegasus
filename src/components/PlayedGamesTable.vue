<script setup>
import { onBeforeMount, ref } from 'vue'
import { chessApi } from '@/utils/chessApi'

const props = defineProps({
  username: String
})

const playedGamesArchive = ref(undefined)
const activeMonth = ref(0)
const gamesInMonth = ref(undefined)

onBeforeMount(() => {
  chessApi.getPlayerMonthlyArchives(props.username).then((data) => {
    playedGamesArchive.value = data.body.archives
      .map((url) => url.match(/\d{4}\/\d{2}$/)[0])
      .reverse()
    getGamesOfMonth()
  })
})

function getGamesOfMonth() {
  const [year, month] = playedGamesArchive.value[activeMonth.value].split('/')
  chessApi.getPlayerCompleteMonthlyArchives(props.username, year, month).then((data) => {
    gamesInMonth.value = data.body
  })
}
</script>

<template>
  <div v-if="playedGamesArchive === undefined">
    <progress class="progress progress-primary w-48"></progress>
  </div>
  <div v-else class="flex flex-row space-x-5">
    <ul class="menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2">
      <li v-for="(month, index) in playedGamesArchive" :key="index">
        <a
          :class="{ active: index === activeMonth }"
          @click="
            () => {
              activeMonth = index
              getGamesOfMonth()
            }
          "
          >{{ month }}</a
        >
      </li>
    </ul>
    <div class="w-96 bg-base-100 shadow-2xl rounded-md">{{ gamesInMonth }}</div>
  </div>
</template>
