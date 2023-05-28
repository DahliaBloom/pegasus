<script setup>
import { chessApi } from '@/utils/chessApi'
import { onBeforeMount, ref } from 'vue'
import GamePreview from './GamePreview.vue'

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
  gamesInMonth.value = undefined
  const [year, month] = playedGamesArchive.value[activeMonth.value].split('/')
  chessApi.getPlayerCompleteMonthlyArchives(props.username, year, month).then((data) => {
    gamesInMonth.value = data.body.games.filter((game) => game.pgn !== undefined)
  })
}
</script>

<template>
  <div v-if="playedGamesArchive === undefined">
    <progress class="progress progress-primary w-48"></progress>
  </div>
  <div v-else class="flex flex-row space-x-5" style="width: 80vw">
    <ul class="menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2 h-min">
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
    <div class="menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2 h-mi w-full">
      <div v-if="gamesInMonth === undefined" class="text-center py-3">
        <progress class="progress progress-primary w-48"></progress>
      </div>
      <li v-else v-for="game in gamesInMonth" :key="game.uuid">
        <a><GamePreview :game-data="game" :username="username" /></a>
      </li>
    </div>
  </div>
</template>
