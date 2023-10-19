<template>
    <BurgerMenu class="absolute top-0 left-0"></BurgerMenu>
    <div class="h-screen w-full flex justify-center items-center overflow-hidden flex-col gap-6">
        <div
            class="w-1/2 h-32 rounded-2xl border border-primary p-2 hover:border-4 scale-100 hover:scale-110 transition-all hover:border-accent flex">
            <a @click="$router.push('/puzzle/classic')" class="w-full h-32 absolute top-0 left-0 "></a>
            <img class="h-full mr-8" src="../assets/puzzle_classic.svg" />
            <div class="h-full w-full">
                <h1 class="text-4xl text-yellow-800">Puzzle Classic</h1>
                <p class="text-[#C4A484]">Play the classic form of Puzzles, get streaks, climb the elo and become a tactical
                    mastermind</p>
            </div>
        </div>
        <div
            class="w-1/2 h-32 rounded-2xl border border-primary p-2 hover:border-4 scale-100 hover:scale-110 transition-all hover:border-accent flex">
            <a @click="$router.push('/puzzle/rush')" class="w-full h-32 absolute top-0 left-0 "></a>
            <img class="h-full mr-8" src="../assets/puzzle_fire.svg" />
            <div class="h-full w-full">
                <h1 class="text-4xl text-orange-400">Puzzle Rush</h1>
                <p class="text-[#ff9263]">Play against the Time and your Nerves! 3 Losses and you're out! No Skips, No Hints, just chess.</p>
            </div>
        </div>
    </div>
</template>
<script>
import BurgerMenu from '../components/BurgerMenu.vue'

export default {
    mounted() {
    },
    unmounted() {
    },

    data() {
    },
    async created() {

    },
    methods: {
    },
    components: {
        BurgerMenu
    }
}
</script>
