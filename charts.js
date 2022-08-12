


const ctx = document.getElementById('temp-canvas').getContext('2d');
let myChart = null;

fetch('data/sensors')
.then(resp => resp.json())
.then(sensors => {
    sensors.forEach(sensor => {
        console.log(sensor);
        let opt = document.createElement('option');
        opt.innerText = `${sensor.name} (${sensor.device})`;
        opt.dataset.sensorName = sensor.name;
        opt.dataset.device = sensor.device;

        document.querySelector('#selectedSensor').appendChild(opt);
    });
});


fetch('data/measurements/Pressure/BMP280?steps=200')
.then(resp => resp.json())
.then(json => {
    let data = {};
    data.labels = [];

    data.datasets = [];
    let dataset = { label: 'TestSensor x', backgroundColor: '#ff0000', borderColor: '#aa1111', data: []};

    for (const measurement of json) {
        // add axis label
        data.labels.push(new Date(measurement.sendTime));

        // add measurement
        dataset.data.push(measurement.value);
    }

    data.datasets.push(dataset);

    myChart = new Chart(ctx, {
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

});


function formatToDatepicker(date) {
    return date.toISOString().slice(0, -5);
}

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


$('#updateButton').click(function () {
    // read out field values
    const selectedSensorOption = document.querySelector('#selectedSensor').selectedOptions[0];
    const sensor = selectedSensorOption.dataset.sensorName;
    const device = selectedSensorOption.dataset.device;
    const startRange = new Date(document.querySelector('#startRange').value).getTime();
    const endRange = new Date(document.querySelector('#endRange').value).getTime();
    const steps = document.querySelector('#stepsRange').value;

    console.log('updateButton clicked, sensor = ', sensor, ' startRange = ', startRange, ' endRange = ', endRange, ' steps = ', steps);

    // update the chart values
    fetch(`data/measurements/${sensor}/${device}?start=${startRange}&end=${endRange}&steps=${steps}`)
    .then(resp => resp.json())
    .then(json => {
        let data = {};
        data.labels = [];

        data.datasets = [];
        let dataset = { label: 'TestSensor x', backgroundColor: '#ff0000', borderColor: '#aa1111', data: []};

        for (const measurement of json) {
            // add axis label
            data.labels.push(new Date(measurement.sendTime));

            // add measurement
            dataset.data.push(measurement.value);
        }

        data.datasets.push(dataset);

        myChart.data = data;
        myChart.update();

    });

});