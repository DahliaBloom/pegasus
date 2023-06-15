<template>
    <div class="h-full w-full flex relative">
        <img class="w-8 h-8 border-2 mr-2" src="src\assets\magnusCarlsen.png" alt="" v-if="color"
            style="border-color: white;">
        <img class="w-8 h-8 border-2 mr-2" src="src\assets\magnusCarlsen.png" alt="" v-else="color"
            style="border-color: black;">
        <div class="flex flex-row items-baseline">
            <h2 class="text-xl font-bold">{{ username }}</h2>
            <p class="text-xs px-3">{{ rating }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        color: {
            type: Boolean,
            required: true
        }
    }
};
</script>