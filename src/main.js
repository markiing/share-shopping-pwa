import App from './App.svelte';
import Bootstrap from './bootstrap'


Bootstrap()
const app = new App({
	target: document.body,
	hydrate: true
});

export default app;