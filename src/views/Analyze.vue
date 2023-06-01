<template>
  <div class="flex" style="height: 90vb">
    <EvalBar ref="evalBar" :evaluation="score"></EvalBar>
    <div>
      <input v-model="fen" type="text" placeholder="Enter FEN string" />
      <button @click="evaluatePosition">Evaluate</button>
      <input v-model.number="custom" type="text" placeholder="Enter Custom Evaluation" />
      <button @click="this.score = this.custom">Submit</button>
      <div v-if="score !== 0">Evaluation score: {{ score }}</div>
      <p>r1b1k1nr/pppp1ppp/2n2q2/2b1p3/2B1P1Q1/2N5/PPPP1PPP/R1B1K1NR w KQkq - 6 5</p>
      <chess-board @onMovePlayed="onMovePlayed" v-model:fen="fen" :size="size"/>
    </div>
  </div>
</template>

<script>
import { evaluate } from '../utils/analyze/Eval'
import { ChessBoard } from '@ibrahimdeniz/vue-chessboard'
import '@ibrahimdeniz/vue-chessboard/dist/style.css'
import EvalBar from '../components/EvalBar.vue'

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
      this.evaluatePosition()
    }
  },
  components: {
    EvalBar,
    ChessBoard
  }
}
</script>
