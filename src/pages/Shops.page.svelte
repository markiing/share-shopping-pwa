<script>
	import { get, EVENT_TYPES } from '../services/data'
	import {headerText} from '../store'
	import { link } from "svelte-routing";
	import {Card} from '../components/'
	let shops = [];
	get(EVENT_TYPES.ON, `${__app.env.DB_ROUTE_SHOPS}`, data => shops = data)
	headerText.update(() => "Minhas Listas")
</script>

<main>
	{#each shops as {key, value}, i}
		<Card cardStyle="fullfiled">
			<h3><a href="/shop/{key}" use:link>{value.name}</a></h3>
		</Card>
	{/each}
</main>

<style>
	main {
		text-align: right;
		padding: 1em;
		margin: 0 auto;
	}
	a {
		color: currentColor
	}
</style>
