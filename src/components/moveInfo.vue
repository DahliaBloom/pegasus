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
            oldMoves: []
        }
    },
    watch: {
        moves(n, o) {
            console.log("UPDATE MOVES")
            this.update()
        },
        bestmove(n, o) {
            console.log("BESTMOVE update")
            console.log(this.moves)
            this.update()
        }
    },
    methods: {
        update() {
            console.log("updated called")
            if (this.oldMoves.length != this.moves.length) {
                console.log("MOOOOOOOOOOOOOVES" + this.moves)
                if (this.moves != []) {
                    let tmp = (findOpeningName(this.moves))
                    if (tmp != null) {
                        this.opening = tmp
                    }
                }
                this.oldMoves = JSON.parse(JSON.stringify(this.moves));
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
    <div class="bg-base-300 rounded-lg h-full w-full p-2">
        {{ opening.m }}
        <br>
        <div v-for="( item, index ) in  opening.a " :key="index">
            <div class="badge badge-accent font-bold mr-2">{{ item }}</div>
        </div>
        {{ bestmove }}

    </div>
</template>

<style scoped></style>
