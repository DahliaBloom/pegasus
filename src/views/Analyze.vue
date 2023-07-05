<template>
  <div v-if="this.chess === null" class="grid place-content-center min-h-screen text-secondary font-mono">
    Invalide PGN
  </div>
  <div v-else class="flex items-center overflow-hidden h-screen w-full flex-row py-8">
    <div class="basis-1/12 h-full border-red-500 border-4"></div>
    <div class="flex flex-row h-full items-center basis-10/12 w-full  border-blue-500 border-2">
      <EvalBar ref="evalBar" :evaluation="score" class="h-full  border-green-500 border-2"></EvalBar>
      <div class="h-full flex flex-col  border-purple-500 border-2">
        <div
          class="bg-base-300 w-full h-full basis-1/12 py-2 px-2 border-solid border-secondary border-2 my-2 overflow-hidden rounded-lg">
          <UserAnalyzeBar :color="false" :elo="this.blackElo" :username="this.blackPlayer" />
        </div>
        <chessyboardy />
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
      <div class="h-full w-full bg-base-100 m-2 flex flex-row  border-yellow-500 border-2">
        <div class="h-full w-1/2 flex flex-col border-lime-500 border-2">
          <div class="w-full basis-1/3 overflow-hidden p-2">
            <div class="bg-slate-500 border-8 rounded-lg h-full w-full">
              <graph />
            </div>
          </div>
          <div class="w-full basis-1/4 overflow-hidden p-2">
            <moveInfo :moves="this.chess.history()" :bestmove="this.bestmove"></moveInfo>
          </div>
          <div class="border-2 basis-5/12 border-orange-500"></div>
        </div>
        <div class="basis-6/12 h-full border-indigo-500 border-2 flex flex-col">
          <div class="border-primary border-2 basis-1/2 w-full">
            <StockfishPanel />
          </div>
          <div class="border-secondary border-2 basis-5/12 w-full overflow-hidden ">
            <div class="w-full h-full p-2">
              <div class="bg-base-300 rounded-lg h-full w-full p-2 overflow-y-scroll items-center justify-center">
                <div v-for="( move, index ) in  this.moves " :key="index" class="w-full items-center justify-center">
                  <div class="my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl">
                    <div class="flex justify-center">
                      <div v-if="2 * index == this.historyStack.length"
                        class="badge bg-green-300 text-slate-900 border-slate-900">{{ move[0] }}</div>
                      <div v-else class="badge bg-slate-300 text-slate-900 border-slate-900">{{ move[0] }}
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <div v-if="2 * index + 1 == this.historyStack.length"
                        class=" badge bg-green-800 text-gray-200 border-gray-200">{{ move[1] }}</div>
                      <div v-else class=" badge bg-gray-800 text-gray-200 border-gray-200">{{ move[1] }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full basis-1/12">
            <div class="bottom-3 w-full h-12 grid grid-cols-5 gap-x-1">
              <button class="btn-accent btn">
                <span class="material-symbols-outlined" @click="completeBack"> keyboard_double_arrow_left </span>
              </button>
              <button class="btn-accent btn">
                <span class="material-symbols-outlined" @click="backMove"> chevron_left </span>
              </button>
              <button class="btn-accent btn">
                <span class="material-symbols-outlined"> auto_awesome </span>
              </button>
              <button class="btn-accent btn">
                <span class="material-symbols-outlined" @click="moveCall"> chevron_right </span>
              </button>
              <button class="btn-accent btn">
                <span class="material-symbols-outlined" @click="completeEnd"> keyboard_double_arrow_right </span>
              </button>
            </div>
          </div>
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
import { findOpeningName } from '../utils/analyze/Opening'
import chessyboardy from '../components/chessyboardy.vue'
import StockfishPanel from '../components/StockfishPanel.vue'
import Graph from '../components/Graph.vue'
import moveInfo from '../components/moveInfo.vue'

export default {
  created() {
    try {
      this.pgn = (useRoute().query.pgn ?? undefined).toString()
      console.log(this.pgn)
      this.chess.loadPgn(this.pgn)
      this.history = this.chess.history()
      console.log(this.history)
      this.moves = []
      let i = 0;
      while (i < this.history.length) {
        this.moves.push([this.history[i], this.history[i + 1]])
        i += 2;
      }

      this.history = this.history.reverse()

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
      bestmove: "",
      moves: [],
      historyStack: [],
      board: null,
      pawnStructure: 0,
    }
  },
  methods: {
    evaluatePosition() {
      console.log("evaluating!" + this.fen)
      evaluate(this.fen, (scoree, bestmovee) => {
        console.log('Received score:' + scoree)
        console.log('Received Bestmove:' + bestmovee)
        this.score = scoree
        this.bestmove = bestmovee
      })
      setTimeout(() => { this.stockfishWorking = false; console.log("back!") }, 1000)
    },
    evaluatePawns() {
      console.log("evaluating!" + this.fen)
      evaluate(this.fen, (scoree, bestmovee) => {
        console.log('Received score:' + scoree)
        console.log('Received Bestmove:' + bestmovee)
        this.score = scoree
        this.bestmove = bestmovee
      })
      setTimeout(() => { this.stockfishWorking = false; console.log("back!") }, 1000)
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
        console.log(console.log(this.history))
        let tmp = this.history.pop()
        this.chess.move(tmp)
        this.historyStack.push(tmp)
        this.fen = this.chess.fen()
        this.evaluatePosition()
      }
    },
    backMove() {
      console.log(this.historyStack)
      if (!this.stockfishWorking && this.historyStack.length != 0) {
        this.stockfishWorking = true
        this.chess.undo()
        this.history.push(this.historyStack.pop())
        this.fen = this.chess.fen()
        this.evaluatePosition()
      }
    },
    completeBack() {
      if (!this.stockfishWorking) {
        while (this.chess.fen() != "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1") {
          this.chess.undo()
          this.history.push(this.historyStack.pop())
          this.fen = this.chess.fen()
        }
        this.stockfishWorking = true
        this.evaluatePosition()
      }
    },
    completeEnd() {
      if (!this.stockfishWorking) {
        while (this.history.length != 0) {
          this.historyStack.push(this.history.pop())
        }
        this.chess.loadPgn(this.pgn)
        this.fen = this.chess.fen()
      }
    }
  },
  components: {
    StockfishPanel,
    EvalBar,
    UserAnalyzeBar,
    EvalCircle,
    chessyboardy,
    Graph,
    moveInfo
  }
}
</script>
