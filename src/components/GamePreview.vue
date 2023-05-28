<script setup>
import { onBeforeMount } from 'vue'
import { Chess } from 'chess.js'
import standardAvatar from '@/assets/standard-avatar.png'
import UserInfoGame from './UserInfoGame.vue'

const props = defineProps({
  gameData: Object,
  username: String
})

const game = new Chess()

onBeforeMount(() => {
  game.loadPgn(props.gameData.pgn)
})
</script>

<template>
  <div class="w-full flex flex-row justify-between">
    {{ game._header.EndDate }} :::: {{ game._header.EndTime }}
    <div class="text-right">
      <UserInfoGame
        :username="
          username.toLowerCase() === game._header.White.toLowerCase()
            ? game._header.Black
            : game._header.White
        "
      />
    </div>
  </div>
</template>
