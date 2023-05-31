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
            heightString: "50%"
        }
    },
    methods: {
        update() {
            console.log("update")
            if (this.evaluation === 0.0) {
                this.height = 50.0
                this.heightString = this.height + "%"
                return
            }
            let tmp = this.evaluation
            if (tmp < 0.0) {
                tmp = (-1) * tmp
            }
            if (tmp < 1.0) {
                this.height = 50.0 + tmp * 10
            }
            else if (tmp < 3.0) {
                this.height = 50.0 + tmp * 8
            }
            else if (tmp < 6.0) {
                this.height = 50.0 + tmp * 6
            }
            else if (tmp < 9.0) {
                this.height = 50.0 + tmp * 5
            }
            else {
                this.height = 60.0
            }
            this.heightString = this.height + "%";
            console.log(this.heightString)
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
    <div class=" bg-black w-12 h-full text-white text-center m-4 static font-bold">
        <div v-if="this.evaluation < 0.0">{{ this.evaluation }}</div>
        <div class=" bg-white w-12 text-center text-black m-4 absolute bottom-0 left-0 evalWhite">
            <span class="absolute bottom-0 left-1/4" v-if="this.evaluation >= 0.0">{{ this.evaluation }}</span>
        </div>
    </div>
    {{ this.heightString }}
</template>

<style scoped>
.evalWhite {
    height: v-bind(heightString);
}
</style>