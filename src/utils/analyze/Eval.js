let stockfish = undefined;
let score = 0.0; // Declare score variable outside the listener function

console.log('Starting stockfish');
Stockfish().then((s) => {
  s.postMessage('setoption name use nnue value true');
  s.addMessageListener(listener);
  stockfish = s;
  console.log('Stockfish started');
});

function listener(message) {
  //console.log(message)
  if (message.startsWith('Final')) {
    const regex = /Final evaluation\s+([+-]?\d+\.\d+)/;
    const match = regex.exec(message);
    score = parseFloat(match[1]); // Update the score variable
    console.log("Pegasus Final Score: " + score);
  }
}

export async function evaluate(fen, callback) {
  if (stockfish === undefined) return 0.0;
  stockfish.postMessage(`position fen ${fen}`);
  stockfish.postMessage(`eval`);
  setTimeout(() => {
    callback(score);
  }, 100);
  
}