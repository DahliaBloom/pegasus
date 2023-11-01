<template>
    <div class="h-screen flex flex-col w-full sm:flex-row justify-center">
        <div class="sm:basis-1/4 w-full flex flex-col sm:h-full p-2 sm:p-4 items-center">
            <BurgerMenuHorizontal class="w-full  h-0 sm:h-fit"></BurgerMenuHorizontal>
            <div class="w-full flex flex-row">
                <a to="/" class="tooltip tooltip-right rounded-lg block sm:hidden" data-tip="Home" @click="$router.push('/')">
                    <span class="material-symbols-outlined scale-150"> home </span>
                </a><input type="range" min="400" max="3000" v-model="difficulty"
                    class=" range range-accent mt-4 sm:scale-100 scale-75" />
                    <a class="tooltip tooltip-right rounded-lg block sm:hidden" data-tip="Puzzles" @click="$router.push('/puzzle')">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-7 scale-150">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                    </svg>

                </a>
            </div>
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
            <div class="border-accent block border-4 rounded-xl m-4 w-full sm:h-1/2 h-16">
                <div class="flex-grow w-full h-full">
                    <div class="flex-content">
                        <div class="scrollable-content-wrapper">
                            <div v-for="(row) in history2" class="flex flex-row justify-around my-4 sm:my-8">
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
            <div class="hidden sm:block w-full h-[8%] overflow-hidden">
                <div class="h-full w-full flex flex-wrap">
                    <div v-for="chip in puzzle.Themes">
                        <div class="badge-secondary badge p-1 mx-1">{{ chip }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full sm:w-1/2 relative flex h-full">
            <Chessboard @board-created="(api) => (boardAPI = api)" @move="handleMove" :fen="fen"
                :orientation="isWhite ? 'white' : 'black'" ref="chessboard">
            </Chessboard>
            <Checkmark :square="square" ref="checkMark" :white="isWhite" />
        </div>
        <div class="basis-1/4 w-full py-4 flex justify-around"><button @click="makeHint"
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
            const chessy = new Chess(this.fen)
            chessy.move(move)
            if (chessy.isCheckmate() || this.correctMoves[this.moveNumber] == move.from + move.to) { //Promotion doenst work
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
            if (chess.isCheckmate() || this.moveNumber == this.correctMoves.length) {
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
