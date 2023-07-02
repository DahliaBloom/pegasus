let stockfish = undefined
let score = 0.0 // Declare score variable outside the listener function
let callbackMethod = null;
let feen = "";


console.log('Starting stockfish')
Stockfish().then((s) => {
  s.addMessageListener(listener)
  s.postMessage('uci')
  s.postMessage('setoption name use nnue value true')
  s.postMessage('setoption name Threads value 16')
  s.postMessage('setoption name Hash value 128')
  s.postMessage('setoption name UCI_AnalyseMode value true')
  s.postMessage('ucinewgame')

  stockfish = s
  console.log('Stockfish started')
})

function listener(message) {
  console.log(message)
  if (message.startsWith('info depth')) {
    const regex = / cp (-?\d+)/
    const match = regex.exec(message)
    if (match===null){
      const regex = /score mate (\d+)/
      const match = regex.exec(message)
      score = parseFloat(match[1])*100
    }
    else {
      score = parseFloat(match[1])/100 // Update the score variable
    }
    const pvregex = / pv (.+)/
    const pvMatch = pvregex.exec(message);
    console.log("bestmove: " + pvMatch[1])
    console.log('Pegasus Final Score: ' + score)
    if (feen.split(" ")[1]=="w"){
      callbackMethod(score, pvMatch[1])
    }
    else {
      callbackMethod(-score, pvMatch[1])
    }
  }
}

export async function evaluate(fen, callback) {
  if (stockfish === undefined) callback(0.0, "stockfish undefined")
  
  feen=fen
  stockfish.postMessage(`position fen ${fen}`)
  stockfish.postMessage('go movetime 1000')
  callbackMethod=callback;
}
