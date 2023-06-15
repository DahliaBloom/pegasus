<template>
  <div class="flex items-center overflow-hidden h-screen w-full flex-row py-8">
    <div class="flex flex-row h-full items-center basis-2/3 bg-base-200 w-full">
      <EvalBar ref="evalBar" :evaluation="score" class="h-full"></EvalBar>
      <div class="h-full flex flex-col">
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-1 px-2 border-solid border-secondary border-2 my-2 overflow-hidden">
          <UserAnalyzeBar :profilePicture="'src\assets\magnusCarlsen.png'" :color="true" :rating="1245"
            :username="'Magnus Carlsen'" />
        </div>
        <chess-board @onMovePlayed="onMovePlayed" v-model:fen="fen" :size="520" />
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-1 px-2 border-solid border-secondary border-2 my-2 overflow-hidden">
          <UserAnalyzeBar :profilePicture="'src\assets\magnusCarlsen.png'" :color="false" :rating="1316"
            :username="'Ding Liren'" />
        </div>
      </div>
      <div class="mx-4 h-full w-24 border-2 border-secondary grid grid-rows-6">
        <EvalCircle :evaluation="0" />
      </div>
    </div>
  </div>
</template>

<script>
import { evaluate } from '../utils/analyze/Eval'
import { ChessBoard } from '@ibrahimdeniz/vue-chessboard'
import '@ibrahimdeniz/vue-chessboard/dist/style.css'
import EvalBar from '../components/EvalBar.vue'
import UserAnalyzeBar from '../components/UserAnalyzeBar.vue'
import EvalCircle from "../components/EvalCircle.vue"

export default {
  data() {
    return {
      fen: '',
      score: 0,
      stockfish: null,
      custom: 0.0,
      size: 600
    }
  },
  methods: {
    evaluatePosition() {
      evaluate(this.fen, (score) => {
        console.log('Received score:', score)
        this.score = score
      })
    },
    onMovePlayed({ move, game }) {
      game.makeMove(move)
      console.log("FEEEEEEEEEEEEEEEEEEN:" + game.fen)
      this.fen = game.fen;
      this.evaluatePosition()
    }
  },
  components: {
    EvalBar,
    ChessBoard,
    UserAnalyzeBar,
    EvalCircle
  }
}
</script>
