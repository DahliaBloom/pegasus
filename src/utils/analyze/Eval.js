let stockfish = undefined
console.log('Starting stockfish')
Stockfish().then((s) => {
  s.postMessage('setoption name use nnue value true')
  s.addMessageListener(listener)
  stockfish = s
  console.log('Stockfish started')
})

function listener(message) {
  if (message.startsWith('info depth')) {
    const scoreMatch = message.match(/score cp (-?\d+)/)
    if (scoreMatch) {
      const score = parseInt(scoreMatch[1])
      console.log(score)
    }
  }
}

export async function evaluate(fen, depth) {
  if (stockfish === undefined) return false
  stockfish.postMessage(`position fen ${fen}`)
  stockfish.postMessage(`go depth ${depth}`)
  return true
}
