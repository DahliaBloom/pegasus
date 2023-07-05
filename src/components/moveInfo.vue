<script>
import { findOpeningName } from '../utils/analyze/Opening';
export default {
    props: {
        bestmove: {
            required: true
        },
        moves: { required: true }
    },
    data() {
        return {
            opening: { m: "Startin Position", t: [], a: [] },
        }
    },
    methods: {
        update() {
            console.log("MOOOOOOOOOOOOOVES" + this.moves)
            if (this.moves != []) {
                let tmp = (findOpeningName(this.moves))
                if (tmp != null) {
                    this.opening = tmp
                }
            }
        }
    },
    beforeMount() {
        this.update();
    },
    updated() {
        this.update()
    }
}
</script>

<template>
    <div class="bg-base-300 rounded-lg h-full w-full p-2 overflow-hidden">
        {{ opening.m }}
        <br>
        <div v-for="( item, index ) in  opening.a " :key="index">
            <div class="badge badge-accent font-bold mr-2">{{ item }}</div>
        </div>
        {{ bestmove }}

    </div>
</template>

<style scoped></style>
