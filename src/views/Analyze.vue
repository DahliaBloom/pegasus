<template>
  <div
    v-if="this.chess === null"
    class="grid place-content-center min-h-screen text-secondary font-mono"
  >
    Invalide PGN
  </div>
  <div v-else class="flex items-center justify-between h-screen flex-row py-3 space-x-4 px-2">
    <div class="h-full basis-1/2 flex">
      <EvalBar ref="evalBar" :evaluation="score" class="h-full"></EvalBar>
      <div class="flex flex-grow flex-col justify-between py-3 space-y-2">
        <UserAnalyzeBar :color="false" :elo="this.blackElo" :username="this.blackPlayer" />
        <Chessboard @move="handleMove" :fen="this.fen" />
        <UserAnalyzeBar :color="true" :elo="this.whiteElo" :username="this.whitePlayer" />
      </div>
    </div>
    <div class="h-full w-full bg-base-100 m-2 flex flex-row basis-1/2 space-x-2">
      <div class="h-full basis-1/2 flex flex-col space-y-2">
        <div class="w-full basis-1/4 bg-base-300 rounded-lg p-2">
          <graph />
        </div>
        <div class="w-full flex-grow">
          <moveInfo :moves="this.historyStack" :bestmove="this.bestmove"></moveInfo>
        </div>
        <div class="w-full basis-1/4 bg-base-300 rounded-lg p-2 flex justify-around flex-col">
          <div class="grid grid-cols-3 w-full place-items-center">
            <EvalCircle :evaluation="90" />
            <EvalCircle :evaluation="20" />
            <EvalCircle :evaluation="40" />
          </div>
          <div class="grid grid-cols-3 w-full place-items-center">
            <EvalCircle :evaluation="90" />
            <EvalCircle :evaluation="20" />
            <EvalCircle :evaluation="40" />
          </div>
        </div>
      </div>
      <div class="h-full flex flex-col overflow-hidden basis-1/2 space-y-2">
        <div class="w-full" style="flex-basis: 45%">
          <StockfishPanel />
        </div>
        <div
          class="w-full bg-base-300 rounded-lg flex flex-col p-2 space-y-2"
          style="flex-basis: 55%"
        >
          <div class="flex space-x-2">
            <button class="bg-accent rounded-full px-4 text-white flex-1" @click="completeBack">
              &laquo;
            </button>
            <button class="bg-accent rounded-full py-1 px-4 text-white flex-1" @click="backMove">
              &lsaquo;
            </button>
            <button class="bg-accent rounded-full py-1 px-4 text-white flex-1">🌟</button>
            <button class="bg-accent rounded-full py-1 px-4 text-white flex-1" @click="moveCall">
              &rsaquo;
            </button>
            <button class="bg-accent rounded-full py-1 px-4 text-white flex-1" @click="completeEnd">
              &raquo;
            </button>
          </div>
          <div class="flex-grow">
            <div class="flex-content">
              <div class="scrollable-content-wrapper scroll-fade">
                <div
                  v-for="(move, index) in this.moves"
                  :key="index"
                  class="w-full items-center justify-center"
                >
                  <div class="my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl">
                    <div class="flex justify-center">
                      <div
                        v-if="2 * index == this.historyStack.length"
                        class="badge bg-green-300 text-slate-900 border-slate-900"
                      >
                        {{ move[0] }}
                      </div>
                      <div v-else class="badge bg-slate-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <div
                        v-if="2 * index + 1 == this.historyStack.length"
                        class="badge bg-green-300 text-gray-200 border-gray-200"
                      >
                        {{ move[1] }}
                      </div>
                      <div v-else class="badge bg-gray-800 text-gray-200 border-gray-200">
                        {{ move[1] }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import Chessboard from '../components/Chessboard.vue'
import StockfishPanel from '../components/StockfishPanel.vue'
import Graph from '../components/Graph.vue'
import moveInfo from '../components/moveInfo.vue'

export default {
  mounted() {
    document.body.classList.add('hide-overflow')
  },
  unmounted() {
    document.body.classList.remove('hide-overflow')
  },
  created() {
    try {
      this.pgn = (useRoute().query.pgn ?? undefined).toString()
      console.log(this.pgn)
      this.chess.loadPgn(this.pgn)
      this.history = this.chess.history()
      console.log('Hiii')
      console.log(this.history)
      this.moves = []
      let i = 0
      if (this.history[0].endsWith('5') || this.history[0].endsWith('6')) {
        console.log('...')
        while (i < this.history.length) {
          this.moves.push([this.history[i + 1], this.history[i]])
          i += 2
        }
      } else {
        while (i < this.history.length) {
          this.moves.push([this.history[i], this.history[i + 1]])
          i += 2
        }
      }

      console.log(this.moves)
      this.history = [].concat(...this.moves).reverse()

      this.chess.reset()
      const extractBlackElo = (input) => {
        const regex = /\[BlackElo "(.*?)"]/
        const match = regex.exec(input)
        if (match && match.length >= 2) {
          return match[1]
        }
        return null // Return null if no match is found
      }
      this.blackElo = extractBlackElo(this.pgn)

      const extractWhiteElo = (input) => {
        const regex = /\[WhiteElo "(.*?)"]/
        const match = regex.exec(input)
        if (match && match.length >= 2) {
          return match[1]
        }
        return null // Return null if no match is found
      }
      this.whiteElo = extractWhiteElo(this.pgn)

      const extractWhitePlayer = (input) => {
        const regex = /\[White "(.*?)"]/
        const match = regex.exec(input)
        if (match && match.length >= 2) {
          return match[1]
        }
        return null // Return null if no match is found
      }
      this.whitePlayer = extractWhitePlayer(this.pgn)

      const extractBlackPlayer = (input) => {
        const regex = /\[Black "(.*?)"]/
        const match = regex.exec(input)
        if (match && match.length >= 2) {
          return match[1]
        }
        return null // Return null if no match is found
      }
      this.blackPlayer = extractBlackPlayer(this.pgn)

      console.log('finished setup')
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
      pgn: '',
      blackElo: '',
      whiteElo: '',
      blackPlayer: '',
      whitePlayer: '',
      positionInfo: null,
      stockfishWorking: false,
      bestmove: '',
      moves: [],
      historyStack: [],
      board: null,
      pawnStructure: 0
    }
  },
  methods: {
    evaluatePosition() {
      console.log('evaluating!' + this.fen)
      evaluate(this.fen, (scoree, bestmovee) => {
        console.log('Received score:' + scoree)
        console.log('Received Bestmove:' + bestmovee)
        this.score = scoree
        this.bestmove = bestmovee
      })
      setTimeout(() => {
        this.stockfishWorking = false
        console.log('back!')
      }, 1000)
    },
    evaluatePawns() {
      console.log('evaluating!' + this.fen)
      evaluate(this.fen, (scoree, bestmovee) => {
        console.log('Received score:' + scoree)
        console.log('Received Bestmove:' + bestmovee)
        this.score = scoree
        this.bestmove = bestmovee
      })
      setTimeout(() => {
        this.stockfishWorking = false
        console.log('back!')
      }, 1000)
    },
    handleMove(move) {
      this.fen = move.after
      this.evaluatePosition()
    },
    moveCall() {
      console.log('moveCall')
      if (!this.chess.isGameOver() && !this.stockfishWorking) {
        this.stockfishWorking = true
        console.log(this.history)
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
        while (this.chess.fen() != 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') {
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
    Chessboard,
    Graph,
    moveInfo
  }
}
</script>
