let stockfish = undefined
let score = 0.0 // Declare score variable outside the listener function
let callbackMethod = null;
let feen = "";

function init() {
console.log('Starting stockfish')
Stockfish().then((s) => {
  s.addMessageListener(listener)
  s.postMessage('uci')
  s.postMessage('setoption name use nnue value true')
  s.postMessage('setoption name Threads value 12')
  s.postMessage('setoption name Hash value 128')
  s.postMessage('setoption name UCI_AnalyseMode value true')

  stockfish = s
  console.log('Stockfish started')
})}
init()

function listener(message) {
  console.log(message)
  if (message.startsWith('info depth')) {
    const regex = /score cp (-?\d+)/
    const match = regex.exec(message)
    if (match===null){
      const regex = /score mate (\d+)/
      const match = regex.exec(message)
      score = parseFloat(match[1])*100
    }
    else {
      score = parseFloat(match[1])/100 // Update the score variable
    }
    console.log('Pegasus Final Score: ' + score)
    if (feen.split(" ")[1]=="w"){
      callbackMethod(score)
    }
    else {
      callbackMethod(-score)
    }
  }
}

export async function evaluate(fen, callback) {
  if (stockfish === undefined) return 0.0
  
  init()
  feen=fen
  console.log("Hello World I have been called")
  stockfish.postMessage('stop')
  stockfish.postMessage('ucinewgame')
  stockfish.postMessage(`position fen ${fen}`)
  stockfish.postMessage('go depth 20')
  callbackMethod=callback;
}
