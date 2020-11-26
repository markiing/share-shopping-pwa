<script>
	import { Router, Route } from "svelte-routing";
	import ThemeContext from "./context/ThemeContext.svelte";
	import {Shop, Shops} from './pages'
	import { Header } from './components'

	let url = ""
</script>

<ThemeContext>
	<Header/>
	<Router url="{url}">
		<div>
			<Route path="shop/:id" component="{Shop}" let:params> 
				<Shop id={params.id}/>
			</Route>
			<Route path="/"><Shops /></Route>
		</div>
	</Router>
</ThemeContext>

