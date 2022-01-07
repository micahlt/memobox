<script>
	import Following from '../components/Following.svelte';
</script>

<svelte:head>
	<title>Inbox | Memobox</title>
</svelte:head>
<div class="template">
	<nav>
		<a href="/"><img src="/assets/wordmark.svg" alt="Memobox logo" /></a>
	</nav>
	<main>
		<Following />
	</main>
</div>

<style>
	.template {
		height: 100vh;
		width: 100%;
		background: var(--primary);
		background: linear-gradient(360deg, rgba(47, 163, 106, 1) 0%, rgba(107, 255, 182, 1) 100%);
		font-family: 'Readex Pro', sans-serif;
	}
	main {
		padding: 1em;
		padding-top: calc(60px + 1em);
	}
</style>
