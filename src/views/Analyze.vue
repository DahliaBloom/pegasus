<script setup>
import EvalBar from '../components/EvalBar.vue'
</script>

<template>
  <div class="flex" style="height: 90vb">
    <EvalBar ref="evalBar" class="flex-none border-accent border-2" :evaluation="score"></EvalBar>
    <div>
      <input v-model="fen" type="text" placeholder="Enter FEN string" />
      <button @click="evaluatePosition">Evaluate</button>
      <div v-if="score !== 0">Evaluation score: {{ score }}</div>
      <p>r1b1k1nr/pppp1ppp/2n2q2/2b1p3/2B1P1Q1/2N5/PPPP1PPP/R1B1K1NR w KQkq - 6 5</p>
    </div>
  </div>
</template>

<script>
import { evaluate } from '../utils/analyze/Eval'

export default {
  data() {
    return {
      fen: '',
      score: 0,
      stockfish: null
    }
  },
  methods: {
    evaluatePosition() {
      evaluate(this.fen, (score) => {
        console.log('Received score:', score)
        this.score = score
      })
    }
  },
  components: {
    EvalBar
  }
}
</script>
