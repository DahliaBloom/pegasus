<template>
    <div class="flex flex-col justify-center items-center h-screen w-full">
        <div class="w-1/5 h-2/3 bg-amber-300 rounded-lg flex justify-center items-center"><button
                class="btn-primary btn">USER</button></div>
        <PerlinNoiseCircle class="absolute -z-10" />
    </div>
</template>
<script>
import { Chess } from 'chess.js'
import BurgerMenuHorizontal from '../components/BurgerMenuHorizontal.vue'
import { chessApi } from '@/utils/chessApi'
import PerlinNoiseCircle from '../components/PerlinNoiseCircle.vue'

export default {
    mounted() {
    },
    unmounted() {

    },

    data() {
        return {
            user: null,
            username: "BambooTheBear",
            games: [],
            gamesInMonth: undefined,
            playedGamesArchive: undefined,
            activeMonth: 0,
            year: 2023,
            month: 1
        }
    },
    async created() {
        this.user = await this.getUser()
        await this.getGames()
        console.log(this.playedGamesArchive)
        console.log(this.games)
    },
    methods: {
        async getUser() {
            const fetcher = (tries) => {
                chessApi
                    .getPlayer(this.username)
                    .then((data) => {
                        this.user = data.body
                        tries = 10
                    })
                    .catch(() => {
                        if (tries > 9) {
                            this.user = undefined
                        } else {
                            fetcher(++tries)
                        }
                    }).finally(
                        () => {
                            console.log(this.user)
                        }
                    )
            }
            fetcher(0)
            console.log(this.user)
        },
        async getGames() {
            await chessApi.getPlayerMonthlyArchives(this.username).then((data) => {
                this.playedGamesArchive = data.body.archives
                    .map((url) => url.match(/\d{4}\/\d{2}$/)[0]).filter((s) => s.split("/")[0] == "2023")
            })
            for (let i = 0; i < this.playedGamesArchive.length; i++) {
                this.activeMonth = i
                await this.getGamesOfMonth()

            }
        },
        async getGamesOfMonth() {
            this.gamesInMonth = undefined
            this.year = this.playedGamesArchive[this.activeMonth].split('/')[0]
            this.month = this.playedGamesArchive[this.activeMonth].split('/')[1]
            console.log("getGamesOfMonth Called" + this.month)
            await chessApi.getPlayerCompleteMonthlyArchives(this.username, this.year, this.month).then((data) => {
                this.games.push(JSON.parse(JSON.stringify(data.body.games.filter((game) => game.pgn !== undefined).reverse())))
            })
        }
    },
    watch: {
        difficulty(newVal) {
        },
    },
    components: {
        BurgerMenuHorizontal,
        PerlinNoiseCircle
    }
}
</script>
