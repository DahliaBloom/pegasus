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
        async evaluatePosition() {
            this.stockfish = await Stockfish();
            this.stockfish.postMessage('setoption name use nnue value true');
            this.stockfish.postMessage(`position fen ${this.fen}`);
            this.stockfish.postMessage('eval');
            var received = [];
            this.stockfish.addMessageListener((line) => {
                received.push(line);
                console.log("LINE: " + line);
            })
            console.log(received);
            var evaluationString = received[10];
            console.log("EVAL STRING:" + evaluationString);
            const regex = /Final evaluation\s+([+-]?\d+\.\d+)/;
            const match = regex.exec(evaluationString);

            if (match && match.length > 1) {
                const evaluationNumber = parseFloat(match[1]);
                console.log("SCORE:" + evaluationNumber);
                this.score = evaluationNumber;
            }
        },
    }
}
</script>