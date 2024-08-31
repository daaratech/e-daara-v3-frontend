<template>
    <div id="chart">
        <apexchart
            type="line"
            height="150"
            :options="chartOptions"
            :series="series"
        ></apexchart>
    </div>
</template>
<script>
export default {
    data: () => ({
        series: [
            {
                name: 'Absence(s)',
                data: [1, 5, 4, 0, 9, 3, 1]
            }
        ],
        chartOptions: {
            chart: {
                // height: '30px',
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Absence par jour',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', '#858784'], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: ['Lun', 'Mar', 'Mer', 'Jeu', 'May', 'Ven', 'Sam']
            }
        }
    })
};
</script>
