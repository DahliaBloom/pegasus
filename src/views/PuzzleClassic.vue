<template>
    <div class="w-full h-screen flex items-center justify-center">{{ this.difficulty }}</div>
</template>
<script>
import { getPuzzleByRating } from '../utils/databaseApi'
export default {
    mounted() {
        document.body.classList.add('hide-overflow')
    },
    unmounted() {
        document.body.classList.remove('hide-overflow')
    },

    data() {
        return {
            difficulty: 100,
        }
    },
    created() {
        getPuzzleByRating(1000, 10)
    }
}
</script>