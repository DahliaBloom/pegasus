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
      this.heightString = this.height + "%";
      console.log("update")
      if (this.evaluation === "0.0" || this.evaluation === "0") {
        this.height = 50.0
        this.heightString = this.height + "%"
        return
      }
      let tmp = Number(this.evaluation)
      console.log("TMP:" + tmp)
      if (tmp >= 100) {
        this.height = 100
        this.heightString = "100%"
        return
      }
      if (tmp < -100) {
        this.height = 0
        this.heightString = "0%"
        return
      }
      if (tmp > 0) {
        if (Math.abs(tmp) < 1.0) {
          this.height = 50.0 + tmp * 10
          console.log("-1< x <1")
        }
        else if (Math.abs(tmp) < 3) {
          this.height = 50.0 + tmp * 8
          console.log("-3< x <3")
        }
        else if (Math.abs(tmp) < 6.0) {
          this.height = 70.0 + tmp * 2
          console.log("-6< x <6")
        }
        else if (Math.abs(tmp) < 11.0) {
          this.height = 80.0 + tmp
          console.log("-9< x <9")
        }
        else if (tmp > 11.0) {
          this.height = 50 + Math.log(Math.abs(tmp)) * 30
        }
      }
      if (tmp < 0) {
        if (Math.abs(tmp) < 1.0) {
          this.height = 50.0 + tmp * 10
          console.log("-1< x <1")
        }
        else if (Math.abs(tmp) < 3) {
          this.height = 50.0 + tmp * 8
          console.log("-3< x <3")
        }
        else if (Math.abs(tmp) < 6.0) {
          this.height = 30.0 + tmp * 2
          console.log("-6< x <6")
        }
        else if (Math.abs(tmp) < 11.0) {
          this.height = 20.0 + tmp
          console.log("-9< x <9")
        }
        else if (tmp < -11.0) {
          this.height = 50 - Math.log(Math.abs(tmp)) * 30
        }
      }



      if (this.height > 96) {
        this.height = 96
      }
      if (this.height < 4) {
        this.height = 4
      }
      this.heightString = this.height + "%";
      //console.log(this.heightString)
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
  <div class="w-12 h-full relative flex-none border-accent border-2 m-4 rounded-lg">
    <div class="bg-black text-white text-center font-bold h-full rounded-lg">
      <div v-if="this.evaluation < 0.0">{{ this.evaluation }}</div>
      <div
        class=" bg-white w-full text-center text-black absolute bottom-0 left-0 evalWhite rounded-b-lg transition-transform">
        <span class="absolute bottom-0 left-1/4" v-if="this.evaluation >= 0.0">{{ this.evaluation }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.evalWhite {
  height: v-bind(heightString);
}
</style>
