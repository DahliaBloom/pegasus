<template>
    <div v-if="this.active" :style="annotationStyle" class="annotation z-50">
        <svg class="checkmark absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
            <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
    </div>
</template>

<script>
export default {
    mounted() {
        document.body.classList.add('hide-overflow')
    },
    unmounted() {
        document.body.classList.remove('hide-overflow')
    },

    props: {
        square: {
            type: String,
            required: true,
        },
        white: {
            type: Boolean,
            required: true,
        },
    },

    data() {
        return {
            active: false
        }
    },
    methods: {
        async activate() {
            console.log("activate")
            this.active = false
            await this.sleep(100)
            this.active = true
        },
        async sleep(milliseconds) {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        },
        deactivate() {
            this.active = false
        },
    },
    computed: {
        annotationStyle() {
            console.log(this.square)
            // Compute the CSS styles to position the annotation precisely on the chessboard square
            const [file, rank] = this.square.split('');
            const fileIndex = this.white ? (file.charCodeAt(0) - 97) : (8 - (file.charCodeAt(0) - 97)); // Convert 'a' to 0, 'b' to 1, and so on.
            const rankIndex = this.white ? (8 - parseInt(rank, 10)) : (parseInt(rank, 10)); // Convert 1 to 7, 2 to 6, and so on.

            const overflow = (value, threshold) => { console.log(value); return value > threshold ? value : threshold }

            return {
                position: 'absolute',
                left: `${(fileIndex + 1) * (this.white ? 11 : 11.5) + (this.white ? 3 : -10)}%`, // Adjust the percentage as needed for proper positioning.
                top: `${overflow(rankIndex * (this.white ? 12.5 : 12) + (this.white ? 0 : -10), 1)}%`, // Adjust the percentage as needed for proper positioning.
                transform: 'translate(-50%, -50%)', // Center the annotation on the square.
            };
        }
    }
}
</script>

<style>
.annotation {
    display: inline-block;
    position: absolute;
    width: 50px;
    /* Adjust the width and height of the annotation image as needed. */
    height: 50px;
    z-index: 1000;
    scale: 70%;
}

.checkmark__circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 5;
    stroke-miterlimit: 10;
    stroke: #3fd91b;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards
}

.checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 5;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #3fd91b;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
}

.checkmark__check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards
}

@keyframes stroke {
    100% {
        stroke-dashoffset: 0
    }
}

@keyframes scale {

    0%,
    100% {
        transform: none
    }

    50% {
        transform: scale3d(1.1, 1.1, 1)
    }
}

@keyframes fill {
    100% {
        box-shadow: inset 0px 0px 0px 30px #3fd91b
    }
}
</style>