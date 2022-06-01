<script>

	import { onMount, tick } from 'svelte'
	
	
	onMount(async () => {
        console.log('hi');
        console.log(jQuery);

        const data = {
            labels: [
                new Date('Sat May 28 2022 18:28:24 GMT+0200'),
                new Date('Sat May 28 2022 18:29:24 GMT+0200'),
                new Date('Sat May 28 2022 18:30:25 GMT+0200'),
                new Date('Sat May 28 2022 18:31:25 GMT+0200'),
                new Date('Sat May 28 2022 18:32:25 GMT+0200'),
                new Date('Sat May 28 2022 18:33:25 GMT+0200'),
                new Date('Sat May 28 2022 18:34:26 GMT+0200'),
                new Date('Sat May 28 2022 18:35:26 GMT+0200'),
                new Date('Sat May 28 2022 18:36:26 GMT+0200'),
                new Date('Sat May 28 2022 18:37:26 GMT+0200'),
                new Date('Sat May 28 2022 18:38:26 GMT+0200'),
                new Date('Sat May 28 2022 18:39:27 GMT+0200')
            ],

            datasets: [ 
                {
                    label: 'Test Temp Sensor',
                    backgroundColor: '#ff0000',
                    borderColor: '#aa1111',
                    data: [22.6, 22.5, 22.3, 22.3, 22.2, 22.0, 22.0, 21.9, 21.6, 21.7, 21.5, 21.5 ]
                }

            ]
        };

		const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    title: {
                        text: 'Temperature chart',
                        display: true
                    }
                },
                legend: {
                    labels: {
                        fontColor: '#ff0000'
                    }
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            // Luxon format string
                            // tooltipFormat: ''
                        },
                        adapters: {
                            date: {
                                locale: 'de'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Date',
                        },
                        ticks: {
                            color: '#cdd9e5'
                        },
                        grid: {
                            color: '#484848'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temp in °C'
                        },
                        ticks: {
                            color: '#cdd9e5'
                        },
                        grid: {
                            color: '#484848'
                        }
                    }
                },
            },
        });
        
        
        
        
        
        
        
        
        
        // {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255, 99, 132, 1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });

	})
</script>

<input hidden type="button" value="" >
<canvas id="myChart" width="400" height="200"></canvas>

<div>
<style>

</style>
</div>