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

<section class="bg-app p-8">
	<h1 class="text-primary text-3xl font-bold mb-2">Card Test Page</h1>
	<p class="text-secondary mb-8">This is a simple placeholder at /card-test.</p>

	<h2 class="text-primary text-xl font-semibold mb-6">Cards</h2>

	<!-- Card grid -->
	<div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mb-8">
		{#each items as item (item.name)}
			<Card class="bg-surface-elevated border-default">
				<h5 class="text-primary font-medium mb-2">{item.name} aa</h5>
				<p class="text-secondary mb-2">{item.description}</p>
				<p class="text-muted">text-foreground</p>
			</Card>
		{/each}
	</div>

	<div class="bg-surface border-default border rounded-lg p-6 mb-6">
		<h5 class="text-primary text-lg font-medium mb-2">h5 text-primary</h5>
		<p class="text-secondary mb-2">text-gray-800 dark:text-white</p>
		<p class="text-muted">p text-secondary</p>
	</div>

	<div class="space-y-4">
		<Button href="/" color="alternative" pill class="fb-btn-primary">Home</Button>
		<Button href="/" color="alternative" pill class="fb-btn-primary">Home</Button>
	</div>
</section>
