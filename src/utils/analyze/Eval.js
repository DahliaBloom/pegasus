const stockfish = await Stockfish()
stockfish.postMessage('setoption name use nnue value true')
stockfish.addMessageListener((message) => {
  if (message.startsWith('info depth')) {
    const scoreMatch = message.match(/score cp (-?\d+)/)
    if (scoreMatch) {
      const score = parseInt(scoreMatch[1])
      console.log(score)
    }
  }
})

export function evaluate(fen, depth) {
  stockfish.postMessage(`position fen ${fen}`)
  stockfish.postMessage(`go depth ${depth}`)
}
