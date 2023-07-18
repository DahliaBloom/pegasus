<template>
    <div v-if="this.annotation != ''" :style="annotationStyle" class="annotation">
        <img :src="this.getPath" alt="Annotation" />
    </div>
</template>

<script>
export default {
    props: {
        square: {
            type: String,
            required: true,
        },
        annotation: {
            type: String,
            required: true,
        },
    },
    computed: {
        annotationStyle() {
            if (this.annotation == '') {
                return
            }
            // Compute the CSS styles to position the annotation precisely on the chessboard square
            const [file, rank] = this.square.split('');
            const fileIndex = file.charCodeAt(0) - 97; // Convert 'a' to 0, 'b' to 1, and so on.
            const rankIndex = 8 - parseInt(rank, 10); // Convert 1 to 7, 2 to 6, and so on.

            return {
                position: 'absolute',
                left: `${fileIndex * 10 + 25}%`, // Adjust the percentage as needed for proper positioning.
                top: `${rankIndex * 13}%`, // Adjust the percentage as needed for proper positioning.
                transform: 'translate(-50%, -50%)', // Center the annotation on the square.
            };
        },
        getPath() {
            console.log(this.annotation)
            // @Felix Please fix UwU
            return `src/assets/anotations/${this.annotation}`
        }
    },
};
</script>
  
<style>
.annotation {
    display: inline-block;
    position: absolute;
    width: 50px;
    /* Adjust the width and height of the annotation image as needed. */
    height: 50px;
}
</style>
  