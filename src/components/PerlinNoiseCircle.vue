<script setup>
import p5 from 'p5'
import { onBeforeUnmount } from 'vue'
import { onMounted } from 'vue'

let p5Obj = undefined

onMounted(() => {
  const sketch = (p5) => {
    const bgcolor = p5.color(15, 23, 42)
    const primaryColor = p5.color(56, 189, 248)

    const maxSizeWin = () => {
      return p5.windowWidth < p5.windowHeight ? p5.windowHeight : p5.windowWidth
    }

    let zoff = 0
    let phase = 0

    p5.setup = () => {
      p5.createCanvas(p5.displayWidth, p5.displayHeight)
      p5.stroke(primaryColor)
      p5.noFill()
      p5.strokeWeight(1)
      p5.frameRate(20)
    }

    p5.draw = () => {
      p5.background(bgcolor)
      p5.translate(p5.width / 2, p5.height / 2)
      for (let i = 0; i < 5; i++) {
        p5.beginShape()
        const inc = p5.TWO_PI / 10
        for (let a = -inc; a <= p5.TWO_PI + inc; a += inc) {
          const xoff = p5.map(p5.cos(a + phase), -1, 1, 0, 2)
          const yoff = p5.map(p5.sin(a + phase), -1, 1, 0, 2)
          const r = p5.map(p5.noise(xoff, yoff, zoff + 0.5 * i), 0, 1, 100, maxSizeWin() * 0.8)
          const x = r * p5.cos(a)
          const y = r * p5.sin(a)
          p5.curveVertex(x, y)
        }
        p5.endShape()
      }
      zoff += 0.004
      phase += 0.007
    }

    p5.windowResized = () => {
      p5.resizeCanvas(p5.displayWidth, p5.displayHeight)
    }
  }

  p5Obj = new p5(sketch, document.getElementById('PerlinNoiseCircleCanvas'))
})

onBeforeUnmount(() => {
  p5Obj.remove()
})
</script>

<template>
  <div id="PerlinNoiseCircleCanvas"></div>
</template>
