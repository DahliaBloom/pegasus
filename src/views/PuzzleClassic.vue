<template>
    <div class="h-screen flex justify-center items-center">
        <div class="w-1/2 relative flex h-full">
            <Chessboard @move="handleMove" :fen="fen" :orientation="isWhite ? 'white' : 'black'">
            </Chessboard>
            <Checkmark :square="square" ref="checkMark" :white="isWhite" />
        </div>
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
            square: ''
        }
    },
    async created() {
        await this.getNewPuzzle()
    },
    methods: {
        async getNewPuzzle() {
            this.puzzle = await getPuzzleByRating(this.difficulty, 25)
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
            if (this.correctMoves[this.moveNumber] == move.from + move.to) {
                this.square = move.to
                if (this.moveNumber == this.correctMoves.length - 1) {
                    var audio = new Audio("/src/assets/success_sound.wav");
                    audio.play();

                    this.difficulty += 100
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

                await this.makeFirstMove()
            }
        },
    },
    components: {
        Chessboard,
        Checkmark
    }
}
</script>