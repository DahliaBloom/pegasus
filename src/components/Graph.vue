<script>
import Chart from 'chart.js/auto';

export default{
    name: "Graph",
    props:{},
    mounted(){

        const ctx = document.getElementById("Graph");
        const Graph = new Chart(ctx,{
            type: "line",
            data: {
                labels:["","",""],
                datasets: [{ 
                    data: [65, 59, 80],
                    fill: true,
                    borderColor: 'rgb(0,0,0)',
                }]},
            options: {
                plugins:{
                legend: {
                display: false,
                        },
                    }}
        })
        Graph;
    }
}


</script>

<template>
    <div class="chart-container" style="position: relative; height:30vh; width:50vw">
    <canvas id = "Graph"></canvas>
    </div>
</template>

<style scoped></style>