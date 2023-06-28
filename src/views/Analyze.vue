<template>
  <div v-if="this.chess === null" class="grid place-content-center min-h-screen text-secondary font-mono">
    Invalide PGN
  </div>
  <div v-else class="flex items-center overflow-hidden h-screen w-full flex-row py-8">
    <div class="basis-1/12 h-full"></div>
    <div class="flex flex-row h-full items-center basis-2/3 w-full">
      <EvalBar ref="evalBar" :evaluation="score" class="h-full"></EvalBar>
      <div class="h-full flex flex-col">
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg">
          <UserAnalyzeBar :color="false" :elo="this.blackElo" :username="this.blackPlayer" />
        </div>
        <chessboard/>
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg">
          <UserAnalyzeBar :color="true" :elo="this.whiteElo" :username="this.whitePlayer" />
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
          <div class="bg-base-300 rounded-lg h-full w-full p-2">
            {{ opening }}
          </div>
        </div>
        <div class="w-full h-1/2 p-2">
          <div class="bg-base-300 rounded-lg h-full w-full"></div>
        </div>
        <div class="bottom-3 w-full h-12 grid grid-cols-5 gap-x-1">
          <button class="btn-accent btn">
            <span class="material-symbols-outlined"> keyboard_double_arrow_left </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined"> chevron_left </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined"> auto_awesome </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined" @click="moveCall"> chevron_right </span>
          </button>
          <button class="btn-accent btn">
            <span class="material-symbols-outlined"> keyboard_double_arrow_right </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { evaluate } from '../utils/analyze/Eval'
import EvalBar from '../components/EvalBar.vue'
import UserAnalyzeBar from '../components/UserAnalyzeBar.vue'
import EvalCircle from '../components/EvalCircle.vue'
import { useRoute } from 'vue-router'
import { Chess } from 'chess.js'
import {chessboard} from 'vue-chessboard'
import 'vue-chessboard/dist/vue-chessboard.css'
import { findOpeningName } from '../utils/analyze/Opening'

export default {
  created() {
    try {
      this.pgn = (useRoute().query.pgn ?? undefined).toString()
      console.log(this.pgn)
      this.chess.loadPgn(this.pgn)
      this.history = this.chess.history().reverse()
      this.chess.reset()
      const extractBlackElo = (input) => {
        const regex = /\[BlackElo "(.*?)"]/;
        const match = regex.exec(input);
        if (match && match.length >= 2) {
          return match[1];
        }
        return null; // Return null if no match is found
      }
      this.blackElo = extractBlackElo(this.pgn);

      const extractWhiteElo = (input) => {
        const regex = /\[WhiteElo "(.*?)"]/;
        const match = regex.exec(input);
        if (match && match.length >= 2) {
          return match[1];
        }
        return null; // Return null if no match is found
      }
      this.whiteElo = extractWhiteElo(this.pgn);

      const extractWhitePlayer = (input) => {
        const regex = /\[White "(.*?)"]/;
        const match = regex.exec(input);
        if (match && match.length >= 2) {
          return match[1];
        }
        return null; // Return null if no match is found
      }
      this.whitePlayer = extractWhitePlayer(this.pgn);

      const extractBlackPlayer = (input) => {
        const regex = /\[Black "(.*?)"]/;
        const match = regex.exec(input);
        if (match && match.length >= 2) {
          return match[1];
        }
        return null; // Return null if no match is found
      }
      this.blackPlayer = extractBlackPlayer(this.pgn);
    } catch {
      this.chess = null
    }
  },
  data() {
    return {
      fen: '',
      chess: new Chess(),
      score: 0,
      stockfish: null,
      custom: 0.0,
      size: 600,
      history: null,
      pgn: "",
      blackElo: "",
      whiteElo: "",
      blackPlayer: "",
      whitePlayer: "",
      positionInfo: null,
      stockfishWorking: false,
      opening: "Startin Position"
    }
  },
  methods: {
    evaluatePosition() {
      this.opening = (findOpeningName(this.chess.history()))
      evaluate(this.fen, (score) => {
        console.log('Received score:', score)
        this.score = score
      })
      setTimeout(() => { this.stockfishWorking = false; }, 1000)
    },
    onMovePlayed({ move, game }) {
      game.makeMove(move)
      console.log('FEEEEEEEEEEEEEEEEEEN:' + game.fen)
      this.fen = game.fen
      this.evaluatePosition()
    },
    moveCall() {
      console.log("moveCall")
      if (!this.chess.isGameOver() && !this.stockfishWorking) {
        this.stockfishWorking = true
        console.log("Next Move load:")
        this.chess.move(this.history.pop())
        this.fen = this.chess.fen()
        this.evaluatePosition()
      }
    }
  },
  components: {
    EvalBar,
    ChessBoard,
    UserAnalyzeBar,
    EvalCircle,
    chessboard
  }
}
</script>
