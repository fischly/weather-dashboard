<script>
// @ts-nocheck
	import { onMount, tick } from 'svelte'
    import { myVar, inc, start, addCallback } from '../websocket-manager/WebSocketManager';

    function daCb(v) {
        console.log('FROM COMPONENT: ', v);

        document.querySelector('#kekw').value = 'penis ' + v;
    }
	
	onMount(async () => {
        console.log(jQuery);
        console.log(myVar);
        start();
        addCallback(daCb);


        jQuery('#example').DataTable({
            paging: false,
            searching: false
        });
	});
</script>

<input hidden id="kekw" type="button" value="" on:click="{() => inc()}"/>

<table id="example" class="display" style="width:100%" >
    <thead>
        <tr>
            <th>Name</th>
            <th>Last measurement</th>
            <th>Last measurement time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Test Temp Sensor</td>
            <td>21.5 °C</td>
            <td>28.05.2022 18:39:27</td>
        </tr>
        <tr>
            <td>Test Humidity Sensor</td>
            <td>58%</td>
            <td>28.05.2022 18:38:57</td>
        </tr>
        <tr>
            <td>Test Pressure Sensor</td>
            <td>1014 mBar</td>
            <td>28.05.2022 17:23:12</td>
        </tr>
    </tbody>
</table>

<div>
<style>
    table.dataTable thead tr{
        color: rgb(173, 186, 199);
    }
    table.dataTable tfoot tr{
        color: rgb(173, 186, 199);
    }
    table.dataTable tbody tr {
        color: rgb(173, 186, 199);
    }

    .dataTables_wrapper .dataTables_info {
        color: rgb(173, 186, 199) !important;
    }

    .dataTables_length {
        color: rgb(173, 186, 199) !important;
    }



    .dataTables_wrapper .dataTables_paginate .paginate_button.disabled,
    .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,
    .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
        color: white !important;

    }

    .dataTables_wrapper .dataTables_paginate a {
        color: white !important;
    }
</style>
</div>