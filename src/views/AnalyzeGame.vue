<template>
    <div>
        <input v-model="fen" type="text" placeholder="Enter FEN string" />
        <button @click="evaluatePosition">Evaluate</button>
        <div v-if="score !== null">Evaluation score: {{ score }}</div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            fen: '',
            score: null,
            stockfish: null,
        };
    },
    methods: {
        async initializeStockfish() {
            this.stockfish = await Stockfish();
            this.stockfish.postMessage('setoption name use nnue value true');
        },
        async evaluatePosition() {
            await this.initializeStockfish();

            this.stockfish.onmessage = function (event) { console.log("Hello World"); };
            this.stockfish.postMessage(`position fen ${this.fen}`);
            this.stockfish.postMessage('eval');

        },
    }
}
</script>