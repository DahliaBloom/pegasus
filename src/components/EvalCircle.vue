<script>
export default {
    props: {
        evaluation: {
            type: Number,
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
            this.styleString = "background: conic-gradient(#F741B8 36deg " + 360 * (this.height / 100) + "deg, #475569 36deg); border-radius: 50%;"
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
    <div class="h-20 w-20 m-2 flex items-center justify-center" :style=styleString>
        <div class="h-12 w-12 bg-base-100 rounded-full"></div>
    </div>
</template>
