<script>
	import { Router, Route } from "svelte-routing";
	import ThemeContext from "./context/ThemeContext.svelte";
	import {Shop, Shops} from './pages'

	let url = ""
</script>

<ThemeContext>
	<Router url="{url}">
		<nav>
		</nav>
		<div>
			<Route path="shop/:id" component="{Shop}" let:params> 
				<Shop id={params.id}/>
			</Route>
			<Route path="/"><Shops /></Route>
		</div>
	</Router>
</ThemeContext>

