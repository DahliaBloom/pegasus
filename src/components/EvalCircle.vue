<script>
export default {
    props: {
        evaluation: {
            type: Number,
            required: true
        },
        typee: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            height: 40.0,
            styleString: "background: conic-gradient(#F741B8 36deg 60deg, #475569 36deg); border-radius: 50%;",
        }
    },
    methods: {
        update() {
            this.height = this.evaluation
            this.styleString = "background: conic-gradient(#18181B 36deg " + 360 * (this.height / 100) + "deg, #F5F5F4 36deg); border-radius: 50%;"
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
    <div v-if="this.typee == 'pawn'" class="h-20 w-20 m-2 flex items-center justify-center tooltip tooltip-bottom"
        :style=styleString data-tip="Pawn Structure">
        <div class="h-12 w-12 bg-base-100 rounded-full flex items-center justify-center">
            <img src="../assets/pawnKingIcon.png" class="h-2/3" />
        </div>
    </div>
</template>
