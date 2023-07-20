import PriorityQueue from 'js-priority-queue'
import { ref } from 'vue'

let stockfish = undefined
let score = 0.0 // Declare score variable outside the listener function
let callbackMethod = null
let feen = ''
let activeCm = undefined

const queue = new PriorityQueue({
  comparator: (a, b) => {
    return b.priority - a.priority
  }
})

export const running = ref(false)
export const movetime = ref(3000)
export const msgHistory = ref([])

start()

function Message(msg, stockfish = true) {
  this.msg = msg
  this.stockfish = stockfish
}

function Command(commands, priority, callback, resolve, reject) {
  this.commands = commands
  this.priority = priority
  this.callback = callback
  this.resolve = resolve
  this.reject = reject
}

function start() {
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
}

function dequeue() {
  if (queue.length > 0) {
    const cm = queue.dequeue()
    //console.log('Dequeue: ' + cm.commands)
    for (let msg of cm.commands) {
      msgHistory.value.push(new Message(msg, false))
      stockfish.postMessage(msg)
      if (cm.callback !== undefined) {
        callbackMethod = cm.callback
      }
    }
    activeCm = cm
  } else {
    activeCm = undefined
  }
}

function eventHandler(msg) {
  msgHistory.value.push(new Message(msg))

  if (!msg.startsWith('info') && activeCm != undefined) {
    activeCm.resolve(msg)
    dequeue()
  }

  switch (msg) {
    case 'uciok':
      running.value = true
      break

    default:
      break
  }
}

function listener(message) {
  eventHandler(message)

  console.log(message)
  if (message.startsWith('info depth')) {
    const regex = / cp (-?\d+)/
    const match = regex.exec(message)
    if (match === null) {
      const regex = /score mate (\d+)/
      const match = regex.exec(message)
      score = parseFloat(match[1]) * 100
    } else {
      score = parseFloat(match[1]) / 100 // Update the score variable
    }
    const pvregex = / pv (.+)/
    const pvMatch = pvregex.exec(message)
    console.log('bestmove: ' + pvMatch[1])
    console.log('Pegasus Final Score: ' + score)
    if (feen.split(' ')[1] == 'w') {
      callbackMethod(score, pvMatch[1])
    } else {
      callbackMethod(-score, pvMatch[1])
    }
  }
}

export function evaluate(fen, callback, movetimee = 0, priority = 0) {
  if (stockfish === undefined) callback(0.0, 'stockfish undefined')

  if (movetimee == 0) {
    movetimee = movetime.value
  }

  feen = fen
  callbackMethod = callback

  return message([`position fen ${fen}`, `go movetime ${movetimee}`], undefined, priority)
}

export function restart() {
  running.value = false
  start()
}

export function message(msg, callback = undefined, priority = 0) {
  if (msg.constructor !== Array) msg = [msg]
  console.log(msg)
  if (stockfish !== undefined) {
    let resolve = undefined
    let reject = undefined
    const p = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })
    queue.queue(new Command(msg, priority, callback, resolve, reject))
    if (activeCm === undefined) {
      dequeue()
    }
    return p
  } else {
    msgHistory.value.push(new Message('Stockfish not running'))
    return new Promise((_, rej) => rej('Stockfish not running'))
  }
}
