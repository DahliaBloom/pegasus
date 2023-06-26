<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const pgn = ref('')
let router = undefined

onBeforeMount(() => {
  router = useRouter()
})

function dropHandler(e) {
  e.preventDefault()

  if (e.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    ;[...e.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === 'file') {
        const reader = new FileReader()
        reader.onload = function (ev) {
          router.push('/analyze?pgn=' + ev.target.result)
        }
        reader.readAsText(item.getAsFile())
      }
    })
  } else {
    // Use DataTransfer interface to access the file(s)
    ;[...e.dataTransfer.files].forEach((file, i) => {
      const reader = new FileReader()
        reader.onload = function (ev) {
          router.push('/analyze?pgn=' + ev.target.result)
        }
        reader.readAsText(file)
    })
  }
}
</script>

<template>
  <div
    @drop="dropHandler($event)"
    @dragover.prevent
    @dragenter.prevent
    class="w-full h-64 input-primary input rounded-2xl mt-5 grid place-content-center"
  >
    <h3 class="text-lg font-bold">Drag PGN file here ✌️</h3>
  </div>
</template>
