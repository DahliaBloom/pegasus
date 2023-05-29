<script setup>
import { onBeforeMount } from 'vue'
import { Chess } from 'chess.js'
import UserInfoGame from './UserInfoGame.vue'
import Clock from './svg/Clock.vue'
import Calendar from './svg/Calendar.vue'
import LaurelWreath from '@/assets/laurel-wreath.png'
import Sword from '@/assets/sword.png'

const props = defineProps({
  gameData: Object,
  username: String
})

let userHover = true

const game = new Chess()

onBeforeMount(() => {
  game.loadPgn(props.gameData.pgn)
})

function getResultImage() {
  const white = props.gameData.white
  const black = props.gameData.black
  if (white.username.toLowerCase() === props.username.toLowerCase()) {
    if (white.result === 'win') {
      return LaurelWreath
    }
  } else if (black.result === 'win') {
    return LaurelWreath
  }
  return Sword
}
</script>

<template>
  <div
    class="w-full flex flex-row justify-between"
    @click="
      () => {
        if (userHover) $router.push('/analyze?id=' + props.gameData.url.split('/').pop())
      }
    "
  >
    <div class="flex items-center space-x-8">
      <div class="flex">
        <Calendar class="mr-2" />
        {{ game._header.EndDate }}
      </div>
      <div class="flex">
        <Clock class="mr-2" />
        {{ game._header.EndTime }}
      </div>
      <img :src="getResultImage()" class="h-9" />
    </div>
    <div class="text-right">
      <UserInfoGame
        @mouseenter="userHover = false"
        @mouseleave="userHover = true"
        :username="
          username.toLowerCase() === game._header.White.toLowerCase()
            ? game._header.Black
            : game._header.White
        "
      />
    </div>
  </div>
</template>
