<script>

	import { onMount, tick } from 'svelte'
	
	
	onMount(async () => {
        console.log(jQuery);

        jQuery('#example').DataTable()
		// load().then(rows => {
		// 	table.rows.add(rows).draw()
		// })
	})


</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.0/css/jquery.dataTables.min.css" />

    <script defer src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script defer src="https://cdn.datatables.net/1.12.0/js/jquery.dataTables.min.js"></script>
</svelte:head>

<input type="button" value="penis" >

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
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
        </tr>
        <tr>
            <td>Penis</td>
            <td>Penis</td>
            <td>Penis</td>
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