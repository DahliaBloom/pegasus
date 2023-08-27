<template>
  <HomeButton />
  <div v-if="this.chess === null" class="grid place-content-center min-h-screen text-secondary font-mono">
    Invalide PGN
  </div>
  <div v-else class="flex items-center justify-between h-screen flex-row py-3 space-x-4 px-2">
    <div class="h-full basis-1/2 flex">
      <div class="flex flex-grow flex-col py-3 space-y-4 justify-center">
        <UserAnalyzeBar :color="!playerIsWhite" :elo="playerIsWhite ? blackElo : whiteElo"
          :username="playerIsWhite ? blackPlayer : whitePlayer" @turnBoard="turnBoard" />
        <div class="flex h-full relative">
          <EvalBar ref="evalBar" :evaluation="score" :whiteBottom="playerIsWhite" class="h-full"></EvalBar>
          <Chessboard @move="handleMove" :fen="fen" :orientation="playerIsWhite ? 'white' : 'black'" />
          <Annotation :square="this.annotatedPosition" :annotation="this.annotatedMove"></Annotation>
        </div>
        <UserAnalyzeBar :color="playerIsWhite" :elo="playerIsWhite ? whiteElo : blackElo"
          :username="playerIsWhite ? whitePlayer : blackPlayer" @turnBoard="turnBoard" />
      </div>
    </div>
    <div class="h-full w-full bg-base-100 m-2 flex flex-row basis-1/2 space-x-2">
      <div class="h-full basis-1/2 flex flex-col space-y-2">
        <div v-if="!this.graphEvaled"
          class="w-full basis-1/4 bg-base-300 rounded-lg p-2 justify-center items-center flex relative">
          <img src="../assets/pegasus-graph-golden-coin-game.png" class="">
          <div class="absolute inset-0 flex items-center justify-center">
            <button v-if="this.i == 0" class="px-4 py-2 btn btn-secondary btn-outline" @click="goThrough">Load
              Graph</button>
            <div v-else class="px-4 py-2 bg-secondary rounded-lg"><img src="../assets/loading.svg" /></div>
          </div>
        </div>
        <div v-else class="w-full basis-1/6 bg-base-300 rounded-lg p-2">
          <graph :data="this.evals" />
        </div>
        <div class="w-full flex-grow basis-1/4">
          <div v-if="this.i == 0" class="bg-base-300 rounded-lg h-full w-full p-2 flex items-center justify-center">
            <button class="px-4 py-2 btn btn-secondary btn-outline" @click="goThrough">Load
              Analysis</button>

          </div>

          <moveInfo v-else :moves="this.historyStack" :bestmove="this.bestmove"></moveInfo>
        </div>
        <div class="basis-2/3 bg-base-300 w-full rounded-lg p-2 flex justify-center flex-col">
          <div class="w-full flex flex-row h-1/3 ">
            <GameSummaryUser :accuracy="whiteCPLoss" :color="true" :elo="whiteElo" :username="whitePlayer">
            </GameSummaryUser>
            <div class="divider-vertical w-[1px] bg-slate-500 h-2/3 rounded-lg"></div>
            <GameSummaryUser :accuracy="blackCPLoss" :color="false" :elo="blackElo" :username="blackPlayer">
            </GameSummaryUser>
          </div>
          <div class="flex-grow">
            <div class="flex-content">
              <div class="p-4 w-full flex flex-col items-center scrollable-content-wrapper">
                <div class="flex flex-row gap-10 py-1 text-orange-800 min-h-8 h-[10%]">
                  <p>{{ bookMoves[0] }}</p><img src="/anotations/bookMove.png">
                  <p>{{ bookMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-secondary min-h-8 h-[10%]">
                  <p>-</p><img src="/anotations/brilliant.png">
                  <p>-</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-pink-300 min-h-8 h-[10%]">
                  <p>-</p><img src="/anotations/great.png">
                  <p>-</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-green-500 min-h-8 h-[10%]">
                  <p>{{ bestMoves[0] }}</p><img src="/anotations/bestmove.png">
                  <p>{{ bestMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-green-800 min-h-8 h-[10%]">
                  <p>{{ goodMoves[0] }}</p><img src="/anotations/goodMove.png">
                  <p>{{ goodMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-green-300 min-h-8 h-[10%]">
                  <p>{{ okMoves[0] }}</p><img src="/anotations/okmove.png">
                  <p>{{ okMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-yellow-400 min-h-8 h-[10%]">
                  <p>{{ innacurateMoves[0] }}</p><img src="/anotations/inaccuracy.png">
                  <p>{{ innacurateMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-orange-600 min-h-8 h-[10%]">
                  <p>{{ mistakeMoves[0] }}</p><img src="/anotations/mistake.png">
                  <p>{{ mistakeMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-red-600 min-h-8 h-[10%]">
                  <p>{{ blunderMoves[0] }}</p><img src="/anotations/blunder.png">
                  <p>{{ blunderMoves[1] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="h-full flex flex-col overflow-hidden basis-1/2 space-y-2">
        <div class="w-full" style="flex-basis: 45%">
          <StockfishPanel />
        </div>
        <div class="w-full basis-1/4 bg-base-300 rounded-lg p-2 flex justify-around flex-col">
          <div class="grid grid-cols-3 w-full place-items-center">
            <EvalCircle :evaluation="this.pawnEvaluation" :typee="'pawn'" />
            <EvalCircle :evaluation="20" :typee="'NotPawn'" />
            <EvalCircle :evaluation="40" :typee="'AlsoNotPawn'" />
            <button class="btn-primary btn" @click="evaluatePawns">Eval Pawns</button>
          </div>
        </div>
        <div class="w-full bg-base-300 rounded-lg flex flex-col p-2 space-y-2" style="flex-basis: 55%">
          <div class="flex-grow">
            <div class="flex-content">
              <div class="scrollable-content-wrapper scroll-fade">
                <div v-for="(move, index) in this.moves" :key="index" class="w-full items-center justify-center">
                  <div v-if="2 * index + 2 == this.historyStack.length || 2 * index + 1 == this.historyStack.length"
                    class="my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl bg-accent">
                    <div v-if="this.graphEvaled" class="flex justify-center">
                      <div v-if="this.annotationPairs[index][0] == 'bookMove'"
                        class="badge bg-orange-900 text-slate-200 border-slate-200">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'bestmove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'goodMove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'okmove'"
                        class="badge bg-green-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'inaccuracy'"
                        class="badge bg-yellow-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'mistake'"
                        class="badge bg-orange-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'blunder'"
                        class="badge bg-red-700 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else class="badge bg-slate-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                    </div>
                    <div v-else class="flex justify-center">
                      <div class="badge bg-slate-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                    </div>
                    <div v-if="this.graphEvaled" class="flex justify-center">
                      <div v-if="this.annotationPairs[index][1] == 'bookMove'"
                        class="badge bg-orange-900 text-slate-200 border-slate-200">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'bestmove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'goodMove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'okmove'"
                        class="badge bg-green-300 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'inaccuracy'"
                        class="badge bg-yellow-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'mistake'"
                        class="badge bg-orange-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'blunder'"
                        class="badge bg-red-700 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else class="badge bg-slate-900 text-slate-100 border-slate-100">
                        {{ move[1] }}
                      </div>
                    </div>
                    <div v-else class="flex justify-center">
                      <div class="badge bg-slate-900 text-slate-100 border-slate-100">
                        {{ move[1] }}
                      </div>
                    </div>
                  </div>
                  <div v-else class="my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl">
                    <div v-if="this.graphEvaled" class="flex justify-center">
                      <div v-if="this.annotationPairs[index][0] == 'bookMove'"
                        class="badge bg-orange-900 text-slate-200 border-slate-200">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'bestmove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'goodMove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'okmove'"
                        class="badge bg-green-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'inaccuracy'"
                        class="badge bg-yellow-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'mistake'"
                        class="badge bg-orange-500 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][0] == 'blunder'"
                        class="badge bg-red-700 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else class="badge bg-slate-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                    </div>
                    <div v-else class="flex justify-center">
                      <div class="badge bg-slate-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                    </div>
                    <div v-if="this.graphEvaled" class="flex justify-center">
                      <div v-if="this.annotationPairs[index][1] == 'bookMove'"
                        class="badge bg-orange-900 text-slate-200 border-slate-200">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'bestmove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'goodMove'"
                        class="badge bg-green-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'okmove'"
                        class="badge bg-green-300 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'inaccuracy'"
                        class="badge bg-yellow-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'mistake'"
                        class="badge bg-orange-500 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else-if="this.annotationPairs[index][1] == 'blunder'"
                        class="badge bg-red-700 text-slate-900 border-slate-900">
                        {{ move[1] }}
                      </div>
                      <div v-else class="badge bg-slate-900 text-slate-100 border-slate-100">
                        {{ move[1] }}
                      </div>
                    </div>
                    <div v-else class="flex justify-center">
                      <div class="badge bg-slate-900 text-slate-100 border-slate-100">
                        {{ move[1] }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-3 w-full h-12 grid grid-cols-5 gap-x-1">
            <button class="btn-accent btn">
              <span class="material-symbols-outlined" @click="completeBack"> keyboard_double_arrow_left </span>
            </button>
            <button class="btn-accent btn">
              <span class="material-symbols-outlined" @click="backMove"> chevron_left </span>
            </button>
            <button class="btn-accent btn">
              <span class="material-symbols-outlined" @click="goThrough"> auto_awesome </span>
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
</template>

<script>
import { evaluate, message, restart } from '../utils/analyze/Eval'
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
import GameSummaryUser from '../components/GameSummaryUser.vue'
import Annotation from '../components/Annotation.vue'
import HomeButton from '../components/HomeButton.vue'

export default {
  mounted() {
    document.body.classList.add('hide-overflow')
  },
  unmounted() {
    document.body.classList.remove('hide-overflow')
  },

  data() {
    return {
      playerIsWhite: true,
      fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
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
      bestmove: '',
      moves: [],
      historyStack: [],
      board: null,
      pawnStructure: 0,
      //fens = [[eval, fen, bestmove, anotation, lastmove]]
      fens: [[0.0, 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'e4e5', 'bookMove', '']],
      i: 0,
      evals: [],
      historyConstant: [],
      graphEvaled: false,
      annotatedMove: '',
      annotatedPosition: '',
      bookMoves: [0, 0],
      bestMoves: [0, 0],
      goodMoves: [0, 0],
      okMoves: [0, 0],
      innacurateMoves: [0, 0],
      mistakeMoves: [0, 0],
      blunderMoves: [0, 0],
      pawnEvaluation: 50,
      annotationPairs: [],
      moveNumberManual: 0,
      whiteCPLoss: 0,
      blackCPLoss: 0,
    }
  },
  created() {
    try {
      this.pgn = (useRoute().query.pgn ?? undefined).toString()
      console.log("initial pgn:")
      console.log(this.pgn)
      this.chess.loadPgn(this.pgn)
      this.history = this.chess.history()

      let chessTmp = new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
      for (const move of this.history) {
        chessTmp.move(move, false)
        this.fens.push([0.0, chessTmp.fen(), "", "", move])
      }

      console.log("The this.fens after initialization")
      console.log(JSON.parse(JSON.stringify(this.fens)))

      this.moves = []
      let i = 0
      if (this.history[0].endsWith('5') || this.history[0].endsWith('6')) {
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

      this.history = [].concat(...this.moves).reverse()
      this.historyConstant = JSON.parse(JSON.stringify(this.history));

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


      this.i = 0
      console.log('finished setup')
    } catch {
      this.chess = null
    }
  },
  methods: {
    turnBoard() {
      this.playerIsWhite = !this.playerIsWhite
    },
    evaluatePosition() {
      console.log('evaluating!' + this.fen)
      evaluate(this.fen, (scoree, bestmovee) => {
        console.log('Received score:' + scoree)
        console.log('Received Bestmove:' + bestmovee)
        this.score = scoree
        this.bestmove = bestmovee
      })
    },
    evaluatePositionQuick(fen = undefined) {
      if (fen == undefined) {
        fen = this.fen
      }
      evaluate(fen, (scoree, bestmovee) => {
        console.log('Received score: from quick eval' + scoree)
        console.log('Received Bestmove: from quick eval' + bestmovee)
        console.log(console.log(JSON.parse(JSON.stringify(this.fens[this.i]))))
        console.log(fen)
        console.log(console.log(JSON.parse(JSON.stringify(this.fens))))
        if (this.fens[this.i][1] === fen) {
          this.fens[this.i] = [scoree, fen, bestmovee, "", this.fens[this.i][4]]
          console.log("Overwriting...")
        }
        else {
          if (this.i < this.fens.length) {
            this.fens[this.i + 1] = [scoree, fen, bestmovee, "", this.fens[this.i + 1][4]]
            console.log("New FEN")
            this.i++
          }

        }
      }, 1000)
    },
    async goThrough() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.evaluatePosition()
      await new Promise((resolve) => setTimeout(resolve, 3500));
      for (let fen of this.fens) {
        this.evaluatePositionQuick(fen[1])
        await new Promise((resolve) => setTimeout(resolve, 1200));

      }
      console.log("The fens after Evaluating every fen for graph")
      console.log(console.log(JSON.parse(JSON.stringify(this.fens))))
      let j = 0
      for (let x of this.fens) {
        this.evals.push(x[0])
        j++
      }
      console.log(this.evals)
      this.graphEvaled = true
      this.annotateMoves()
      restart()
    },
    annotateMoves() {
      let movesTmp = []
      let prevOpening = []
      let k = 0
      for (let f of this.fens) {
        if (k == 0) {
          k++
        }
        else {
          movesTmp.push(f[4])
          try {
            // BOOKMOVE:
            let op = findOpeningName(movesTmp).t
            if (op.length > prevOpening.length || op.length >= movesTmp.length - 1) {
              this.fens[k][3] = 'bookMove'
              this.bookMoves[(k + 1) % 2]++
              prevOpening = op
            }
            else {
              //BESTMOVE
              if (this.fens[k - 1][2].endsWith(f[4])) {
                this.fens[k][3] = 'bestmove'
                this.bestMoves[(k + 1) % 2]++
              }

              // GOODMOVE
              else if (this.fens[k - 1][0] - f[0] < 0.3 && this.fens[k - 1][0] - f[0] > -0.3) {
                this.fens[k][3] = 'goodMove'
                this.goodMoves[(k + 1) % 2]++
              }

              // OK Move
              else if (this.fens[k - 1][0] - f[0] < 0.7 && this.fens[k - 1][0] - f[0] > -0.7) {
                this.fens[k][3] = 'okmove'
                this.okMoves[(k + 1) % 2]++
              }

              // Innacuracy
              else if (this.fens[k - 1][0] - f[0] < 1.0 && this.fens[k - 1][0] - f[0] > -1.0) {
                this.fens[k][3] = 'inaccuracy'
                this.innacurateMoves[(k + 1) % 2]++
              }

              // Mistake
              else if (this.fens[k - 1][0] - f[0] < 2.5 && this.fens[k - 1][0] - f[0] > -2.5) {
                this.fens[k][3] = 'mistake'
                this.mistakeMoves[(k + 1) % 2]++
              }

              // Blunder
              else {
                this.fens[k][3] = 'blunder'
                this.blunderMoves[(k + 1) % 2]++
              }

            }
          }
          catch (err) { console.log(err) }
          k++
        }
      }

      console.log("The this.fens after annotating them")
      console.log(console.log(JSON.parse(JSON.stringify(this.fens))))
      let x = 1;
      while (x <= this.fens.length) {
        try {
          this.annotationPairs.push([this.fens[x][3], this.fens[x + 1][3]])
        }
        catch {
          this.annotationPairs.push([this.fens[x][3], ''])
        }
        x += 2;
      }
      this.calculateCP()
    },
    calculateCP() {
      let x = 1
      while (x < this.fens.length) {
        if (x % 2 == 1) {
          this.whiteCPLoss += this.fens[x - 1][0] - this.fens[x][0]
        }
        else {
          this.blackCPLoss -= this.fens[x - 1][0] - this.fens[x][0]
        }
        x++
      }
      this.whiteCPLoss = (this.whiteCPLoss / (this.fens.length / 2)).toFixed(2);
      this.blackCPLoss = (this.blackCPLoss / (this.fens.length / 2)).toFixed(2);
    },
    extractDestinationSquare(chessMove) {
      const pattern = /[a-h][1-8]$/;
      const isMatch = pattern.test(chessMove);
      return isMatch ? chessMove.match(pattern)[0] : '';
    },
    handleMove(move) {
      this.fen = move.after
      this.evaluatePosition()
    },
    updateEverythingAfterButtonPress() {
      console.log("FEN:")
      console.log(this.fens[this.moveNumberManual][1])
      this.annotatedPosition = this.extractDestinationSquare(this.fens[this.moveNumberManual][4])
      console.log(this.fens[this.moveNumberManual])
      this.annotatedMove = this.fens[this.historyStack.length + 1][3] + ".png"
      this.chess.move(this.fens[this.moveNumberManual][4], false)
      this.fen = this.fens[this.moveNumberManual][1]
      this.evaluatePosition()
    },
    moveCall() {
      console.log('moveCall')
      if (!this.chess.isGameOver()) {
        this.moveNumberManual += 1
        this.updateEverythingAfterButtonPress()
      }
    },
    backMove() {
      console.log("backMove")
      this.moveNumberManual -= 1
      this.updateEverythingAfterButtonPress()
    },
    completeBack() {
      console.log("Back to the Start call")
      this.moveNumberManual = 0
      this.updateEverythingAfterButtonPress()
    },
    completeEnd() {
      console.log("All the way to end of game")
      this.moveNumberManual = this.fens.length - 1
      this.updateEverythingAfterButtonPress()
    },
    evaluatePawns() {
      let feen = this.extractPawnsAndKingsFromFEN(this.chess.fen())
      console.log('evaluating Pawns! ' + feen)
      evaluate(feen, (scoree, bestmovee) => {
        this.pawnEvaluation = 50 - scoree * 5;
      }, 1000)
    },
    extractPawnsAndKingsFromFEN(fen) {
      const [board, activeColor, castling, enPassant, halfMoveClock] = fen.split(" ");

      // Filter out pieces other than pawns ('p' and 'P') and kings ('k' and 'K')
      const filteredBoard = board.replace(/[^pkPK1-8/]/g, "_");

      // Replace the count of consecutive empty squares with the correct number
      let validBoard = "";
      let emptySquareCount = 0;
      for (let i = 0; i < filteredBoard.length; i++) {
        const char = filteredBoard.charAt(i);
        if (char === "_") {
          emptySquareCount++
        }
        else {
          if (emptySquareCount > 0) {
            validBoard += emptySquareCount
            emptySquareCount = 0
          }
          validBoard += char;
        }
      }
      if (emptySquareCount > 0) {
        validBoard += emptySquareCount
      }
      // Reconstruct the valid FEN string
      const validFEN = [validBoard, activeColor, "-", enPassant, halfMoveClock].join(" ");
      return validFEN;
    }
  },
  components: {
    StockfishPanel,
    EvalBar,
    UserAnalyzeBar,
    EvalCircle,
    Chessboard,
    Graph,
    moveInfo,
    GameSummaryUser,
    Annotation,
    HomeButton
  }
}
</script>
