<template>
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
          <moveInfo :moves="this.historyStack" :bestmove="this.bestmove"></moveInfo>
        </div>
        <div class="basis-2/3 bg-base-300 w-full rounded-lg p-2 flex justify-center flex-col">
          <div class="w-full flex flex-row h-1/3 ">
            <GameSummaryUser :accuracy="100" :color="true" :elo="whiteElo" :username="whitePlayer"></GameSummaryUser>
            <div class="divider-vertical w-[1px] bg-slate-500 h-2/3 rounded-lg"></div>
            <GameSummaryUser :accuracy="100" :color="false" :elo="blackElo" :username="blackPlayer"></GameSummaryUser>
          </div>
          <div class="flex-grow">
            <div class="flex-content">
              <div class="p-4 w-full flex flex-col items-center scrollable-content-wrapper">
                <div class="flex flex-row gap-10 py-1 text-orange-800 min-h-8 h-[10%]">
                  <p>{{ bookMoves[0] }}</p><img src="../assets/anotations/bookMove.png">
                  <p>{{ bookMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-secondary min-h-8 h-[10%]">
                  <p>1</p><img src="../assets/anotations/brilliant.png">
                  <p>0</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-pink-300 min-h-8 h-[10%]">
                  <p>2</p><img src="../assets/anotations/great.png">
                  <p>3</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-green-500 min-h-8 h-[10%]">
                  <p>{{ bestMoves[0] }}</p><img src="../assets/anotations/bestmove.png">
                  <p>{{ bestMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-green-800 min-h-8 h-[10%]">
                  <p>{{ goodMoves[0] }}</p><img src="../assets/anotations/goodMove.png">
                  <p>{{ goodMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-green-300 min-h-8 h-[10%]">
                  <p>{{ okMoves[0] }}</p><img src="../assets/anotations/okmove.png">
                  <p>{{ okMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-yellow-400 min-h-8 h-[10%]">
                  <p>{{ innacurateMoves[0] }}</p><img src="../assets/anotations/inaccuracy.png">
                  <p>{{ innacurateMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-orange-600 min-h-8 h-[10%]">
                  <p>{{ mistakeMoves[0] }}</p><img src="../assets/anotations/mistake.png">
                  <p>{{ mistakeMoves[1] }}</p>
                </div>
                <div class="flex flex-row gap-10 py-1 text-red-600 min-h-8 h-[10%]">
                  <p>{{ blunderMoves[0] }}</p><img src="../assets/anotations/blunder.png">
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
            <EvalCircle :evaluation="90" />
            <EvalCircle :evaluation="20" />
            <EvalCircle :evaluation="40" />
          </div>
        </div>
        <div class="w-full bg-base-300 rounded-lg flex flex-col p-2 space-y-2" style="flex-basis: 55%">
          <div class="flex-grow">
            <div class="flex-content">
              <div class="scrollable-content-wrapper scroll-fade">
                <div v-for="(move, index) in this.moves" :key="index" class="w-full items-center justify-center">
                  <div class="my-2 grid grid-cols-2 gap-1 border border-slate-700 p-1 rounded-2xl">
                    <div class="flex justify-center">
                      <div v-if="2 * index == this.historyStack.length"
                        class="badge bg-green-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                      <div v-else class="badge bg-slate-300 text-slate-900 border-slate-900">
                        {{ move[0] }}
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <div v-if="2 * index + 1 == this.historyStack.length"
                        class="badge bg-green-300 text-gray-200 border-gray-200">
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

      console.log('finished setup')
    } catch {
      this.chess = null
    }
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
      fens: [[0.0, 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 'e4e5', '']],
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
      blunderMoves: [0, 0]
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
        console.log('Received score:' + scoree)
        console.log('Received Bestmove:' + bestmovee)
        console.log(this.fens[this.i])
        console.log(fen)
        console.log(this.i)
        if (this.fens[this.i][1] === fen) {
          this.fens[this.i] = [scoree, fen, bestmovee, ""]
          console.log("Overwriting...")
        }
        else {
          this.fens.push([scoree, fen, bestmovee, ""])
          console.log("New FEN")
          this.i++
        }
      }, 1000)
    },
    async goThrough() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.evaluatePosition()
      await new Promise((resolve) => setTimeout(resolve, 3500));
      let chessy = new Chess();
      console.log("Hello")
      let tmp = JSON.parse(JSON.stringify(this.historyConstant.reverse()))
      console.log(tmp)
      chessy.reset()
      for (let m of tmp) {
        if (m !== undefined && m !== null) {
          console.log(m)
          chessy.move(m);
          console.log("madeMove")
          this.evaluatePositionQuick(chessy.fen())
          await new Promise((resolve) => setTimeout(resolve, 1200));
        }
      }
      console.log("FEEEEEEEEEEEEEEEEEENS")
      console.log(this.fens)
      let j = 0
      for (let x of this.fens) {
        console.log(x)
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
        movesTmp.push("" + this.historyConstant[k])
        if (k == 0) {
          k++
        }
        else {
          if (true) {
            try {
              // BOOKMOVE:
              let op = findOpeningName(movesTmp).t
              console.log("The Opening:")
              console.log(op)
              console.log("The previous Opening:")
              console.log(prevOpening)
              console.log("The Moves")
              console.log(movesTmp)
              if (op.length > prevOpening.length || op.length >= movesTmp.length - 1) {
                console.log("bookMove")
                this.fens[k][3] = 'bookMove'
                this.bookMoves[(k + 1) % 2]++
                prevOpening = op
              }
              else {
                //BESTMOVE
                let posBefore = this.fens[k - 1][1]
                let posAfter = f[1]
                let chessTmp = new Chess(posBefore)
                chessTmp.move(this.fens[k - 1][2].split(" ")[0], false)
                if (chessTmp.fen() == posAfter) {
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
                else if (this.fens[k - 1][0] - f[0] < 7.0 && this.fens[k - 1][0] - f[0] > -7.0) {
                  this.fens[k][3] = 'blunder'
                  this.blunderMoves[(k + 1) % 2]++
                }

              }
            }
            catch { }
          }
          k++
        }
        console.log(f)
      }

      for (let x of this.fens) {
        console.log(x[3])
      }
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
    moveCall() {
      console.log('moveCall')
      if (!this.chess.isGameOver()) {
        console.log(this.history)
        let tmp = this.history.pop()
        this.annotatedPosition = this.extractDestinationSquare(tmp)
        console.log("_____________")
        console.log(this.fens[this.historyStack.length])
        this.annotatedMove = this.fens[this.historyStack.length + 1][3] + ".png"
        this.chess.move(tmp)
        this.historyStack.push(tmp)
        this.fen = this.chess.fen()
        this.evaluatePosition()
      }
    },
    backMove() {
      console.log(this.historyStack)
      if (this.historyStack.length != 0) {
        this.chess.undo()
        this.history.push(this.historyStack.pop())
        this.fen = this.chess.fen()
        this.evaluatePosition()
      }
    },
    completeBack() {
      console.log(this.pgn)
      this.chess.loadPgn(this.pgn)
      this.history = this.chess.history()
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
      this.evaluatePosition()

    },
    completeEnd() {
      while (this.history.length != 0) {
        this.historyStack.push(this.history.pop())
      }
      this.chess.loadPgn(this.pgn)
      this.fen = this.chess.fen()
      this.evaluatePosition()
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
    Annotation
  }
}
</script>
