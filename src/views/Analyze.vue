<template>
  <div>
    <input v-model="fen" type="text" placeholder="Enter FEN string" />
    <button @click="evaluatePosition">Evaluate</button>
    <div v-if="score !== 0">Evaluation score: {{ score }}</div>
    <p>rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1</p>
    <p>Open console to see score!</p>
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
        console.log('Received score:', score);
        this.score = score
      });
    }
  }
}
</script>
