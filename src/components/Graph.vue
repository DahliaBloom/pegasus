<script>
import Chart from 'chart.js/auto'

export default {
  name: 'Graph',
  props: {},
  mounted() {
    const data = [65, -59, 80, 55, 10]
    const ctx = document.getElementById('Graph')
    let label = []
    let x = []
    let number = data.length
    for (let i = 0; i < number; i++) {
      label.push('')
      x.push(0)
    }

    const Graph = new Chart(ctx, {
      type: 'line',
      data: {
        labels: label,
        datasets: [
          {
            data: data,
            fill: {
              target: 'origin',
              below: '#334155',
              above: '#cbd5e1'
            },
            borderWidth: 0,
            pointRadius: 0,
            tension: 0.4
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            ticks: {
              color: 'rgb(255,255,255)'
            }
          }
        }
      }
    })
    Graph
  }
}
</script>

<template>
  <div class="chart-container h-full w-full">
    <canvas id="Graph"></canvas>
  </div>
</template>

<style scoped></style>
