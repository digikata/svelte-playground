<script lang="ts">
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

<div class="container mx-auto space-y-8 p-8">
	<header>
		<h1 class="h1 font-bold">Card Test Page</h1>
		<p class="text-surface-600-300-token">
			This is a simple placeholder demonstrating SkeletonUI cards.
		</p>
	</header>

	<section>
		<h2 class="mb-6 h2 font-semibold">SkeletonUI Cards</h2>

		<!-- Card grid -->
		<div class="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{#each items as item (item.name)}
				<div class="preset-filled-surface rounded-lg shadow-lg">
					<header class="border-b border-surface-200-800 p-4">
						<h3 class="h4 font-medium">{item.name}</h3>
					</header>
					<section class="p-4">
						<p class="text-surface-600-300-token">{item.description}</p>
					</section>
					<footer class="border-t border-surface-200-800 p-4">
						<button
							class="preset-filled-primary hover:preset-tonal-primary rounded px-3 py-1 text-sm"
							>Action</button
						>
					</footer>
				</div>
			{/each}
		</div>
	</section>

	<section>
		<div class="preset-filled-secondary rounded-lg shadow-lg">
			<header class="border-b border-surface-200-800 p-4">
				<h3 class="h3">Typography Examples</h3>
			</header>
			<section class="space-y-2 p-4">
				<h4 class="h4">Heading 4</h4>
				<p class="text-surface-600-300-token">Secondary text using SkeletonUI color tokens</p>
				<p class="text-surface-500-400-token">Muted text with proper contrast</p>
			</section>
		</div>
	</section>

	<section class="flex flex-wrap gap-4">
		<a href="/" class="preset-filled-primary hover:preset-tonal-primary rounded-lg px-4 py-2"
			>Home (Primary)</a
		>
		<a href="/" class="preset-filled-secondary hover:preset-tonal-secondary rounded-lg px-4 py-2"
			>Home (Secondary)</a
		>
		<a
			href="/"
			class="preset-outlined-surface hover:preset-tonal-surface rounded-lg border border-surface-500 px-4 py-2"
			>Home (Outline)</a
		>
		<a href="/" class="hover:preset-tonal-surface rounded-lg px-4 py-2">Home (Ghost)</a>
	</section>
</div>
