<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';

	// Static JSON array of objects
	const items = [
		{ name: 'Alpha', description: 'First item description' },
		{ name: 'Beta', description: 'Second item description' },
		{ name: 'Gamma', description: 'Third item description' },
		{ name: 'Delta', description: 'Fourth item description' }
	] as const;
</script>

<svelte:head>
	<title>Card Test Page</title>
	<meta name="description" content="Placeholder for Card Test Page" />
</svelte:head>

<section style="padding: 2rem;">
	<h1>Card Test Page</h1>
	<p>This is a simple placeholder at /card-test.</p>

	<h2 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">Cards</h2>

	<!-- Card grid -->
	<div
		style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem;"
	>
		{#each items as item (item.name)}
			<Card>
				<h5 class="text-foreground">{item.name} aa</h5>
				<p class="text-gray-800 dark:text-white">{item.description}</p>
				<p class="text-foreground">text-foreground</p>
			</Card>
		{/each}
	</div>

	<div class="bg-app">
		<h5 class="text-primary">h5 text-primary</h5>
		<p class="text-gray-800 dark:text-white">text-gray-800 dark:text-white</p>
		<p class="text-secondary">p text-secondary</p>
	</div>

	<div>
		<Button href="/" color="alternative" pill class="fb-btn-primary !fb-text">Home</Button>
	</div>

	<div>
		<Button href="/" color="alternative" pill class="fb-btn-primary test-foreground">Home</Button>
	</div>
</section>
