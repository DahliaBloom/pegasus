const stockfish = await Stockfish()
stockfish.postMessage('setoption name use nnue value true')
console.log('Hi')
export default evaluate = (fen) => {
    return new Promise((resolve) => {
      stockfish.postMessage(`position fen ${fen}`);
      stockfish.postMessage('eval');
      
      stockfish.onmessage = (event) => {
        const message = event.data;
        if (message.startsWith('info depth')) {
          const scoreMatch = message.match(/score cp (-?\d+)/);
          if (scoreMatch) {
            const score = parseInt(scoreMatch[1]);
            resolve(score);
          }
        }
      };
    });
  };