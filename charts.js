


const ctx = document.getElementById('temp-canvas').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {},
    options: {
        plugins: {
            title: {
                display: false
            },
            legend: {
                labels: {
                    color: '#cdd9e5',
                }
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
                        // locale: 'de'
                    }
                },
                title: {
                    display: true,
                    color: '#cdd9e5',
                    text: 'Date',
                },
                ticks: {
                    color: '#cdd9e5',
                },
                grid: {
                    color: '#484848'
                }
            },
            y: {
                title: {
                    display: true,
                    color: '#cdd9e5',
                    fontColor: '#ffff00'
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

/* --- fetch available sensors and fill sensor picker --- */
fetch('data/sensors')
.then(resp => resp.json())
.then(sensors => {
    sensors.forEach(sensor => {
        let opt = document.createElement('option');
        opt.innerText = `${sensor.name} (${sensor.device})`;
        opt.dataset.sensorName = sensor.name;
        opt.dataset.device = sensor.device;

        document.querySelector('#selectedSensor').appendChild(opt);
    });

    document.querySelector('#selectedSensor').selectedIndex = 3;
});

updateDatepicker(1000*60*60*24, 8);

fetchAndUpdateChart('Temperature', 'SHTC3', 
    new Date(document.querySelector('#startRange').value).getTime(),
    new Date(document.querySelector('#endRange').value).getTime(),
    document.querySelector('#stepsRange').value
);


function formatToDatepicker(date) {
    return date.toISOString().slice(0, -5);
}

/**
 * Given a time range (given in milliseconds), this functions sets both the start- and end-datetimepicker
 * accordingly, so that the end-datetimepicker displays the current datetime and the start-datetimepicker
 * displays the (current datetime - given range).
 * 
 * For example, calling updateDatepicker(1000*60*60*24, 8) sets the end-datetimepicker to the current datetime 
 * and the start-datetimepicker to one day before current datetime (1000*60*60*24 is the amount of milliseconds
 * in one day).
 */
function updateDatepicker(range, steps) {
    let date = new Date();
    date.setHours(date.getHours()+2); // TODO: fix timezone problem (current datetimepicker only supports UTC)

    // always set the end date to the current date
    document.querySelector('#endRange').value = formatToDatepicker(date);

    // set the start date according to the selected range
    document.querySelector('#startRange').value = formatToDatepicker(new Date(date.getTime() - range));

    // update steps
    document.querySelector('#stepsRange').value = steps;
}

function fetchAndUpdateChart(sensor, device, startRange, endRange, steps) {
    // update the chart values
    fetch(`data/measurements/${sensor}/${device}?start=${startRange}&end=${endRange}&steps=${steps}`)
    .then(resp => resp.json())
    .then(json => {
        let data = {};
        data.labels = [];

        data.datasets = [];
        let dataset = { label: `${sensor} (${device})`, backgroundColor: '#ff0000', borderColor: '#aa1111', data: []};

        for (const measurement of json) {
            // add axis label
            data.labels.push(new Date(measurement.sendTime));

            // add measurement
            dataset.data.push(measurement.value);
        }

        data.datasets.push(dataset);

        myChart.data = data;
        myChart.options.scales.y.title.text = json[0].unit;
        
        myChart.update();

    });
}


$('#updateButton').click(function () {
    // read out field values
    const selectedSensorOption = document.querySelector('#selectedSensor').selectedOptions[0];
    const sensor = selectedSensorOption.dataset.sensorName;
    const device = selectedSensorOption.dataset.device;
    const startRange = new Date(document.querySelector('#startRange').value).getTime();
    const endRange = new Date(document.querySelector('#endRange').value).getTime();
    const steps = document.querySelector('#stepsRange').value;

    fetchAndUpdateChart(sensor, device, startRange, endRange, steps);
});