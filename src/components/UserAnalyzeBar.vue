<template>
    <div class="flex relative">
        <img class="w-8 h-8 border-2 mr-2 rounded-lg" :src="user.avatar" alt="" v-if="color" style="border-color: white;">
        <img class="w-8 h-8 border-2 mr-2 rounded-lg" :src="user.avatar" alt="" v-else="color" style="border-color: black;">
        <div class="flex flex-row items-baseline">
            <h2 class="text-xl font-bold">{{ user.username }}</h2>
            <p class="text-xs px-3">{{ this.elo }}</p>
        </div>
    </div>
</template>
  
<script>
import { chessApi } from '@/utils/chessApi'
export default {
    props: {
        username: {
            type: String,
            required: true
        },
        elo: {
            type: String,
            required: true
        },
        color: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            user: { name: "N", avatar: "/src/assets/magnusCarlsen.png" }
        }
    },
    beforeMount() {
        chessApi
            .getPlayer(this.username)
            .then((data) => {
                this.user = data.body
            })
            .catch(() => {
                isError.value = true
            })
            .finally(() => {
                console.log(this.user)
            })
    }
};
</script>