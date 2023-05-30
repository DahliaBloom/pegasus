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
    async evaluatePosition() {
      evaluate(this.fen, 5)
      return

      this.stockfish = await Stockfish()
      this.stockfish.postMessage('setoption name use nnue value true')
      this.stockfish.postMessage(`position fen ${this.fen}`)
      this.stockfish.postMessage('eval')
      function waitForEvaluation(st) {
        return new Promise((resolve) => {
          st.addMessageListener((line) => {
            received.push(line)
            //console.log("LINE: " + line);
            if (line.startsWith('Final')) {
              resolve()
            }
          })
        })
      }

      // Call the async function using await
      async function evaluate2(st) {
        await waitForEvaluation(st)
        //console.log(received);
        var evaluationString = received[received.length - 2]
        console.log('EVAL STRING: ' + evaluationString)
        const regex = /Final evaluation\s+([+-]?\d+\.\d+)/
        const match = regex.exec(evaluationString)

        if (match && match.length > 1) {
          const evaluationNumber = parseFloat(match[1])
          console.log('EVAL Number: ' + evaluationNumber)
          return evaluationNumber
        }
      }

      evaluate(this.stockfish).then((evaluationNumber) => (this.score = evaluationNumber))
      var received = []
      this.stockfish.addMessageListener((line) => {
        received.push(line)
        //console.log("LINE: " + line);
      })
      //console.log(received);
    }
  }
}
</script>
