/*import adapter from '@sveltejs/adapter-auto';*/
import vercel from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
sveltePreprocess({
  replace: [
		['import.meta.VITE_CLIENT_ID', JSON.stringify(process.env.VITE_CLIENT_ID)],
		['import.meta.VITE_CLIENT_SECRET', JSON.stringify(process.env.VITE_CLIENT_SECRET)]],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	preprocess: sveltePreprocess({
	  replace: [
			['import.meta.VITE_CLIENT_ID', JSON.stringify(process.env.VITE_CLIENT_ID)],
			['import.meta.VITE_CLIENT_SECRET', JSON.stringify(process.env.VITE_CLIENT_SECRET)]],
	})
};

export default config;
