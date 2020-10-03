<script>
	import { onMount } from "svelte";
	import Calculator from "./components/Calculator.svelte";
	import Corner from "./components/Corner.svelte";
	import { url } from "./stores";
	import { calculate } from "./helpers";

	onMount(() => {
		let params = new URLSearchParams(window.location.search);

		if (params.get("url")) {
			$url = params.get("url");

			calculate($url);
		}
	});
</script>

<style>
	.container {
		height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
</style>

<div class="container">
	<div>
		<h1>Reddit Award Calculator</h1>

		<Calculator />
	</div>
</div>

<Corner />
