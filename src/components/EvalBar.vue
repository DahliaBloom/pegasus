<script>
export default {
  props: {
    evaluation: {
      type: Number,
      required: true
    },
    whiteBottom: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      height: 50.0,
      heightString: '50%'
    }
  },
  methods: {
    update() {
      this.heightString = this.height + '%'
      console.log('update')
      if (this.evaluation === '0.0' || this.evaluation === '0') {
        this.height = 50.0
        this.heightString = this.height + '%'
        return
      }
      let tmp = Number(this.evaluation)
      console.log('TMP:' + tmp)
      if (tmp >= 100) {
        this.height = 100
        this.heightString = '100%'
        return
      }
      if (tmp < -100) {
        this.height = 0
        this.heightString = '0%'
        return
      }
      if (tmp > 0) {
        if (Math.abs(tmp) < 1.0) {
          this.height = 50.0 + tmp * 10
          console.log('-1< x <1')
        } else if (Math.abs(tmp) < 3) {
          this.height = 50.0 + tmp * 8
          console.log('-3< x <3')
        } else if (Math.abs(tmp) < 6.0) {
          this.height = 70.0 + tmp * 2
          console.log('-6< x <6')
        } else if (Math.abs(tmp) < 11.0) {
          this.height = 80.0 + tmp
          console.log('-9< x <9')
        } else if (tmp > 11.0) {
          this.height = 50 + Math.log(Math.abs(tmp)) * 30
        }
      }
      if (tmp < 0) {
        if (Math.abs(tmp) < 1.0) {
          this.height = 50.0 + tmp * 10
          console.log('-1< x <1')
        } else if (Math.abs(tmp) < 3) {
          this.height = 50.0 + tmp * 8
          console.log('-3< x <3')
        } else if (Math.abs(tmp) < 6.0) {
          this.height = 30.0 + tmp * 2
          console.log('-6< x <6')
        } else if (Math.abs(tmp) < 11.0) {
          this.height = 20.0 + tmp
          console.log('-9< x <9')
        } else if (tmp < -11.0) {
          this.height = 50 - Math.log(Math.abs(tmp)) * 30
        }
      }

      if (this.height > 96) {
        this.height = 96
      }
      if (this.height < 4) {
        this.height = 4
      }
      this.heightString = this.height + '%'
      //console.log(this.heightString)
    }
  },
  beforeMount() {
    this.update()
  },
  updated() {
    this.update()
  }
}
</script>

<template>
  <div class="h-full w-24 flex flex-row flex-none pr-3 items-center space-x-3">
    <div
      class="badge flex-grow border-none"
      :class="[
        evaluation >= 0 ? 'bg-slate-300' : 'bg-slate-700',
        evaluation >= 0 ? 'text-sla' : 'text-slate-300'
      ]"
    >
      {{ Math.abs(evaluation) }}
    </div>
    <div class="w-4 h-full relative">
      <div class="h-full rounded-lg bg-slate-700">
        <div
          class="w-full absolute left-0 evalWhite transition-transform bg-slate-300"
          :class="[whiteBottom ? 'bottom-0' : 'top-0', whiteBottom ? 'rounded-b-lg' : 'rounded-t-lg']"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.evalWhite {
  height: v-bind(heightString);
}
</style>
