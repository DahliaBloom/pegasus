<template>
  <div class="flex items-center overflow-hidden h-screen w-full flex-row py-8">
    <div class="basis-1/12 h-full"></div>
    <div class="flex flex-row h-full items-center basis-2/3 w-full">
      <EvalBar ref="evalBar" :evaluation="score" class="h-full"></EvalBar>
      <div class="h-full flex flex-col">
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg">
          <UserAnalyzeBar :profilePicture="'src\assets\magnusCarlsen.png'" :color="true" :rating="1245"
            :username="'Magnus Carlsen'" />
        </div>
        <chess-board @onMovePlayed="onMovePlayed" v-model:fen="fen" :size="520" />
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg">
          <UserAnalyzeBar :profilePicture="'src\assets\magnusCarlsen.png'" :color="false" :rating="1316"
            :username="'Ding Liren'" />
        </div>
      </div>
      <div
        class="mx-4 h-full w-fit border-2 border-secondary flex flex-col items-center justify-center bg-base-200 rounded-lg">
        <div class="grid grid-rows-3 w-full h-full place-items-center">
          <EvalCircle :evaluation="90" />
          <EvalCircle :evaluation="20" />
          <EvalCircle :evaluation="40" />
        </div>
        <div class="w-16 mx-4 h-0 border border-secondary"></div>
        <div class="grid grid-rows-3 h-full w-full place-items-center">
          <EvalCircle :evaluation="90" />
          <EvalCircle :evaluation="20" />
          <EvalCircle :evaluation="40" />
        </div>
      </div>
      <div class="h-full w-full bg-base-100 m-2 flex flex-col">
        <div class="w-full h-1/3 p-2">
          <div class="bg-primary border-8 rounded-lg h-full w-full"></div>
        </div>
        <div class="w-full h-1/4 p-2">
          <div class="bg-secondary border-8 rounded-lg h-full w-full"></div>
        </div>
        <div class="w-full h-1/2 p-2">
          <div class="bg-base-300 rounded-lg h-full w-full"></div>
        </div>
        <div class="bottom-3 w-full h-12 grid grid-cols-5 gap-x-1">
          <button class="btn-accent btn">
            <span class="material-symbols-outlined">
              keyboard_double_arrow_left
            </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined">
              chevron_left
            </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined">
              auto_awesome
            </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined">
              chevron_right
            </span>
          </button>
        </div>
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
