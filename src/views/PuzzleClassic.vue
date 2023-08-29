<template>
    <div class="h-screen flex justify-center items-center">
        <div class="basis-1/4 flex flex-col h-full p-6 items-center">
            <input type="range" min="400" max="3000" v-model="difficulty" class=" range range-accent" />
            <p class="text-xl mt-2">{{ difficulty }}</p>
            <div class="flex w-full justify-between p-4">
                <div class="relative w-1/2 scale-110">
                    <div class="radial-progress bg-primary text-primary-content border-4 border-primary"
                        :style="'--value:' + accuracy.percent">{{ accuracy.percent }}</div>
                </div>
                <div class="ml-36 relative w-1/2 scale-[3] flex items-center justify-center">
                    <img src="../assets/fire_icon.svg" class="absolute z-10" />
                    <div class="absolute z-20 text-black font-bold mt-5 text-xs">5</div>
                </div>
            </div>
        </div>
        <div class="w-1/2 relative flex h-full">
            <Chessboard @move="handleMove" :fen="fen" :orientation="isWhite ? 'white' : 'black'">
            </Chessboard>
            <Checkmark :square="square" ref="checkMark" :white="isWhite" />
        </div>
        <div class="basis-1/4">Slider</div>
    </div>
</template>
<script>
import { getPuzzleByRating } from '../utils/databaseApi'
import { Chess } from 'chess.js'
import Chessboard from '../components/Chessboard.vue'
import Checkmark from '../components/checkMark.vue'
export default {
    mounted() {
        document.body.classList.add('hide-overflow')
    },
    unmounted() {
        document.body.classList.remove('hide-overflow')
    },

    data() {
        return {
            difficulty: 1000,
            fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            isWhite: false,
            puzzle: null,
            correctMoves: [],
            moveNumber: 0,
            square: '',
            wrongAttempts: 0,
            history: [],
            accuracy: { total: 0, right: 0, percent: 100 }
        }
    },
    async created() {
        await this.getNewPuzzle()
    },
    methods: {
        async getNewPuzzle() {
            this.puzzle = await getPuzzleByRating(this.difficulty, Math.floor(Math.random() * 25))
            console.log(this.puzzle)
            this.fen = "" + this.puzzle.FEN
            this.correctMoves = this.puzzle.Moves.split(" ")
            this.isWhite = (this.fen.split(" ")[1] == "b")
            await this.makeFirstMove()
        },
        async sleep(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        },
        async makeFirstMove() {
            this.fen = "" + this.puzzle.FEN
            this.$refs.checkMark.deactivate()
            await this.sleep(500)
            const chess = new Chess(this.fen)
            chess.move(this.correctMoves[0])
            this.fen = chess.fen()
            this.moveNumber = 1
        },
        async handleMove(move) {
            console.log(move)
            if (this.correctMoves[this.moveNumber] == move.from + move.to) { //Promotion doenst work
                this.square = move.to
                if (this.moveNumber == this.correctMoves.length - 1) {
                    this.accuracy.total++
                    var audio = new Audio("/src/assets/success_sound.wav");
                    audio.play();

                    if (this.wrongAttempts == 0) {
                        this.difficulty += 20
                        this.accuracy.right++
                    }
                    if (this.wrongAttempts == 1) {
                        this.difficulty -= 5
                    }
                    if (this.wrongAttempts > 1) {
                        this.difficulty -= 15
                    }

                    if (this.difficulty > 3000) {
                        this.difficulty = 3000
                    }

                    this.history.push(this.wrongAttempts)
                    this.accuracy.percent = Math.floor(this.accuracy.right / this.accuracy.total * 100)

                    this.wrongAttempts = 0

                    await this.getNewPuzzle()
                }

                else {
                    var audio = new Audio("/src/assets/click_double.wav");
                    audio.play();
                    this.$refs.checkMark.activate()

                    const chess = new Chess(this.fen)
                    chess.move(move)
                    chess.move(this.correctMoves[this.moveNumber + 1])
                    this.fen = chess.fen()
                    this.moveNumber += 2
                }
            }
            else {
                var audio = new Audio("/src/assets/puzzle_fail.wav");
                audio.play()
                this.$refs.checkMark.deactivate()

                this.wrongAttempts++

                await this.makeFirstMove()
            }
        },
    },
    watch: {
        difficulty(newVal) {
            this.difficulty = Number(newVal);
        },
    },
    components: {
        Chessboard,
        Checkmark
    }
}
</script>