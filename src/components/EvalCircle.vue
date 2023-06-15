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
            height: 50.0,
            heightString: "50deg"
        }
    },
    methods: {
        update() {
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
    <div class="h-20 w-20 m-2 flex items-center justify-center chart">
        <div class="h-12 w-12 bg-base-100 rounded-full"></div>
    </div>
</template>

<style scoped>
.chart {
    background: conic-gradient(theme('colors.accent') 36deg 120deg, #475569 36deg);
    border-radius: 50%;
}
</style>
