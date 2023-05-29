<script setup>
import { chessApi } from '@/utils/chessApi'
import { onBeforeMount, ref } from 'vue'
import GamePreview from './GamePreview.vue'

const props = defineProps({
  username: String
})

const playedGamesArchive = ref(undefined)
const activeMonth = ref(0)
const activeRange = ref(0)
const activeRangeInc = 6
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
    gamesInMonth.value = data.body.games.filter((game) => game.pgn !== undefined).reverse()
  })
}
</script>

<template>
  <div v-if="playedGamesArchive === undefined">
    <progress class="progress progress-primary w-48"></progress>
  </div>
  <div v-else>
    <div class="min-h-screen fixed top-0 flex flex-col justify-center" style="left: 10%;">
      <ul class="menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2 fixed">
        <li :class="{ disabled: activeRange <= 0 }">
          <a @click="() => {if (activeRange > 0) activeRange -= activeRangeInc}" class="flex justify-center">&raquo;</a>
        </li>
        <li
          v-for="(month, index) in playedGamesArchive.slice(
            activeRange,
            activeRange + activeRangeInc
          )"
        >
          <a
            :class="{ active: index + activeRange === activeMonth }"
            @click="
              () => {
                activeMonth = index + activeRange
                getGamesOfMonth()
              }
            "
            >{{ month }}</a
          >
        </li>
        <li :class="{ disabled: activeRange + activeRangeInc >= playedGamesArchive.length }">
          <a @click="() => {if (activeRange + activeRangeInc < playedGamesArchive.length) activeRange += activeRangeInc}" class="flex justify-center">&laquo;</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-row space-x-4" style="width: 80vw">
      <div class="p-14"></div>
      <div class="menu bg-base-100 shadow-2xl p-2 rounded-box space-y-2 h-mi w-full">
        <div
          v-if="gamesInMonth === undefined"
          class="flex justify-center items-center flex-col h-full"
        >
          <progress class="progress progress-primary w-48"></progress>
        </div>
        <li v-else v-for="game in gamesInMonth" :key="game.uuid">
          <a><GamePreview :game-data="game" :username="username" /></a>
        </li>
      </div>
    </div>
  </div>
</template>
