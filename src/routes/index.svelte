<script context="module">
	export const prerender = true;
</script>

<script>
	import TemperatureChart from '$lib/charts/TemperatureChart.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Weatherstation Dashboard</h1>

	<!-- <SensorTable /> -->
	<TemperatureChart />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
		margin: 0.8rem 0px;
	}
	h2 {
		font-size: 2em;
		margin: 0.8rem 0px 1.6rem 0px;
	}

</style>
