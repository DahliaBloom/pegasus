const stockfish = undefined

async function startStockfish() {
  if (stockfish === undefined) {
    stockfish = await Stockfish()
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
  }
}

export async function evaluate(fen, depth) {
  await startStockfish()
  stockfish.postMessage(`position fen ${fen}`)
  stockfish.postMessage(`go depth ${depth}`)
}
