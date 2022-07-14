$.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
        const done = data[0] == '✅';
        
        if ($('#checkBoxHideDone').is(':checked')) {
            return !done;
        } else {
            return true;
        }
    }
);

$(document).ready(function () {
    const tbody = document.querySelector('table tbody');

    function addRow(data) {
        const tr = document.createElement('tr');

        const nameTd = document.createElement('td');
        const valueTd = document.createElement('td');
        const unitTd = document.createElement('td');
        const deviceTd = document.createElement('td');
        const lastMeasurementTd = document.createElement('td');

        nameTd.className = 'td-name';
        valueTd.className = 'td-value';
        unitTd.className = 'td-unit';
        deviceTd.className = 'td-device';
        lastMeasurementTd.className = 'td-lastMeasurement';

        nameTd.innerText = data.name;
        valueTd.innerText = data.lastValue;
        unitTd.innerText = data.unit;
        deviceTd.innerText = data.device;
        lastMeasurementTd.innerText = new Date(data.lastMeasurement).toLocaleString(undefined, { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' });
        // timestampTd.dataset.sort = new Date(data.timestamp).toISOString();

        tr.appendChild(nameTd);
        tr.appendChild(valueTd);
        tr.appendChild(unitTd);
        tr.appendChild(deviceTd);
        tr.appendChild(lastMeasurementTd);

        tbody.appendChild(tr);
    }

    fetch('data/sensors')
        .then(resp => resp.json())
        .then(json => {
            for (const entry of json) {
                addRow(entry);
            }

            // $('#lastTimestamp').text(new Date(json.timestamp).toLocaleString());

            $('table').DataTable({
                searching: false,
                paging: false,
                info: false,
                pageLength: 25
            });
        });
});

$('#checkBoxHideDone').change(function () {
    $('table').DataTable().draw();
});