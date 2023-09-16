<template>
    <div class="h-screen flex justify-center items-center">
        <div class="basis-1/4 flex flex-col h-full p-4 items-center">
            <BurgerMenuHorizontal class="w-full "></BurgerMenuHorizontal>
            <input type="range" min="400" max="3000" v-model="difficulty" class=" range range-accent mt-4" />
            <p class="text-xl mt-2">{{ difficulty }}</p>
            <div class="flex w-full justify-between p-4">
                <div class="relative w-1/2 scale-110">
                    <div class="radial-progress bg-primary text-primary-content border-4 border-primary"
                        :style="'--value:' + accuracy.percent">{{ accuracy.percent }}</div>
                </div>
                <div class="ml-36 relative w-1/2 scale-[3] flex items-center justify-center">
                    <img src="../assets/fire_icon.svg" class="absolute z-10" />
                    <div class="absolute z-20 text-black font-bold mt-5 text-xs">{{ streak }}</div>
                </div>
            </div>
            <div class="border-accent border-4 rounded-xl m-4 w-full h-1/2">
                <div class="flex-grow w-full h-full">
                    <div class="flex-content">
                        <div class="scrollable-content-wrapper">
                            <div v-for="(row) in history2" class="flex flex-row justify-around my-8">
                                <div v-for="item in row"><img v-if="item == 0" class="scale-150"
                                        src="../assets/award_star.svg" />
                                    <img v-if="item > 0" class="scale-150" src="../assets/skull.svg" />
                                    <img v-else class="scale-150 invisible" src="../assets/award_star.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[8%] overflow-hidden">
                <div class="h-full w-full flex flex-wrap">
                    <div v-for="chip in puzzle.Themes">
                        <div class="badge-secondary badge p-1 mx-1">{{ chip }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-1/2 relative flex h-full">
            <Chessboard @board-created="(api) => (boardAPI = api)" @move="handleMove" :fen="fen"
                :orientation="isWhite ? 'white' : 'black'" ref="chessboard">
            </Chessboard>
            <Checkmark :square="square" ref="checkMark" :white="isWhite" />
        </div>
        <div class="basis-1/4 h-full w-full py-4 flex justify-around"><button @click="makeHint"
                class="btn w-1/4 btn-primary mr-2 tooltip tooltip-bottom" data-tip="Hint"><span
                    class="material-symbols-outlined">
                    lightbulb
                </span></button><button class="btn w-1/4 btn-primary btn-square mr-2 tooltip tooltip-bottom"
                data-tip="Solution" @click="makeSolution"><span class="material-symbols-outlined">
                    saved_search
                </span></button><button class="btn w-1/4 btn-primary btn-square mr-2 tooltip-bottom tooltip" data-tip="Skip"
                @click="skip"><span class="material-symbols-outlined">
                    skip_next
                </span></button>
        </div>
    </div>
</template>
<script>
import { getPuzzleByRating } from '../utils/databaseApi'
import { Chess } from 'chess.js'
import Chessboard from '../components/Chessboard.vue'
import Checkmark from '../components/checkMark.vue'
import BurgerMenuHorizontal from '../components/BurgerMenuHorizontal.vue'

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
            puzzle: { Themes: [] },
            correctMoves: [],
            moveNumber: 0,
            square: '',
            wrongAttempts: 0,
            history: [0],
            accuracy: { total: 0, right: 0, percent: 100 },
            streak: 0,
            history2: [[-1, -1, -1, -1, -1]],
            boardAPI: null,
            offset: 0,
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
            this.puzzle.Themes = this.puzzle.Themes.split(" ")
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
                        this.difficulty += (20 + this.streak + Math.floor(Math.random() * 10))
                        this.accuracy.right++
                        this.streak++
                        this.difficulty -= this.offset
                    }
                    if (this.wrongAttempts == 1) {
                        this.difficulty -= (5 + Math.floor(Math.random() * 10))
                        this.streak = 0
                    }
                    if (this.wrongAttempts > 1) {
                        this.difficulty -= (15 + Math.floor(Math.random() * 10))
                        this.streak = 0
                    }

                    if (this.difficulty > 3000) {
                        this.difficulty = 3000
                    }

                    this.history.push(this.wrongAttempts)

                    if (this.history2[this.history2.length - 1][4] != -1) {
                        this.history2.push([-1, -1, -1, -1, -1])
                    }
                    this.history2[this.history2.length - 1][this.history2[this.history2.length - 1].indexOf(-1)] = this.wrongAttempts

                    this.accuracy.percent = Math.floor(this.accuracy.right / this.accuracy.total * 100)

                    this.wrongAttempts = 0

                    await this.getNewPuzzle()
                }

                else {
                    var audio = new Audio("/src/assets/click_double.wav");
                    audio.play();
                    this.$refs.checkMark.activate()

                    const chess = new Chess(this.fen)
                    chess.move(move.from + move.to)
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
        async skip() {
            this.accuracy.total++
            this.difficulty -= (15 + Math.floor(Math.random() * 10))
            this.streak = 0

            this.history.push(5)

            if (this.history2[this.history2.length - 1][4] != -1) {
                this.history2.push([-1, -1, -1, -1, -1])
            }
            this.history2[this.history2.length - 1][this.history2[this.history2.length - 1].indexOf(-1)] = 5

            this.accuracy.percent = Math.floor(this.accuracy.right / this.accuracy.total * 100)

            this.wrongAttempts = 0

            await this.getNewPuzzle()
        },
        makeHint() {
            console.log(this.correctMoves[this.moveNumber])
            this.boardAPI.board.selectSquare(this.correctMoves[this.moveNumber][0] + this.correctMoves[this.moveNumber][1])
            this.offset = 10
        },
        async makeSolution() {
            this.$refs.checkMark.deactivate()
            const chess = new Chess(this.fen)
            chess.move(this.correctMoves[this.moveNumber])
            this.moveNumber++
            this.fen = chess.fen()
            this.wrongAttempts = 2
            if (this.moveNumber == this.correctMoves.length) {
                this.accuracy.total++
                var audio = new Audio("/src/assets/success_sound.wav");
                audio.play();
                await this.sleep(1000)

                if (this.wrongAttempts == 0) {
                    this.difficulty += (20 + this.streak + Math.floor(Math.random() * 10))
                    this.accuracy.right++
                    this.streak++
                }
                if (this.wrongAttempts == 1) {
                    this.difficulty -= (5 + Math.floor(Math.random() * 10))
                    this.streak = 0
                }
                if (this.wrongAttempts > 1) {
                    this.difficulty -= (15 + Math.floor(Math.random() * 10))
                    this.streak = 0
                }

                if (this.difficulty > 3000) {
                    this.difficulty = 3000
                }

                this.history.push(this.wrongAttempts)

                if (this.history2[this.history2.length - 1][4] != -1) {
                    this.history2.push([-1, -1, -1, -1, -1])
                }
                this.history2[this.history2.length - 1][this.history2[this.history2.length - 1].indexOf(-1)] = this.wrongAttempts

                this.accuracy.percent = Math.floor(this.accuracy.right / this.accuracy.total * 100)

                this.wrongAttempts = 0

                await this.getNewPuzzle()
            }

            else {
                var audio = new Audio("/src/assets/click_double.wav");
                audio.play();

                await this.sleep(1000)

                const chess = new Chess(this.fen)
                chess.move(this.correctMoves[this.moveNumber])
                this.moveNumber++
                this.fen = chess.fen()
            }
        }
    },
    watch: {
        difficulty(newVal) {
            this.difficulty = Number(newVal);
        },
    },
    components: {
        Chessboard,
        Checkmark,
        BurgerMenuHorizontal
    }
}
</script>
