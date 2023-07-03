<script>
import Chart from 'chart.js/auto';

export default{
    name: "Graph",
    props:{},
    mounted(){
        const data = [65, 59, 80,55,10];
        const ctx = document.getElementById("Graph");
        let label = [];
        let number = data.length;
        for(let i = 0;i<number;i++){
            label.push("");
        } 
        const Graph = new Chart(ctx,{
            type: "line",
            data: {
                labels:label,
                datasets: [{ 
                    data: data ,
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