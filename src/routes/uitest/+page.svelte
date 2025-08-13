<script lang="ts">
	import { Menu as MenuIcon } from '@lucide/svelte';
	// Static JSON array of objects
	const items = [
		{ name: 'Alpha', description: 'First item description' },
		{ name: 'Beta', description: 'Second item description' },
		{ name: 'Gamma', description: 'Third item description' },
		{ name: 'Delta', description: 'Fourth item description' }
	] as const;

	// Hamburger menu state for last card
	let showMenu = false;
	function handleEdit() {
		alert('Edit clicked');
		showMenu = false;
	}
	function handleDelete() {
		alert('Delete clicked');
		showMenu = false;
	}
</script>

<svelte:head>
	<title>Card Test Page</title>
	<meta name="description" content="Placeholder for Card Test Page" />
</svelte:head>

<section class="bg-base-200 p-8 text-base-content">
	<h1 class="mb-2 text-3xl font-bold">Card Test Page</h1>
	<p class="mb-8 opacity-80">This is a simple placeholder at /card-test.</p>

	<h2 class="mb-6 text-xl font-semibold">Cards</h2>

	<!-- Card grid -->
	<div class="mb-8 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
		{#each items as item (item.name)}
			<div class="card border border-base-300 bg-base-100 shadow-md">
				<div class="card-body p-4">
					<h5 class="mb-2 card-title font-medium">{item.name}</h5>
					<p class="mb-2 opacity-80">{item.description}</p>
					<p class="opacity-60">text-foreground</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- class text check -->
	<div class="mb-6 rounded-lg border border-base-300 bg-base-100 p-6">
		<h5 class="mb-2 text-lg font-semibold">h5 text-primary</h5>
		<p class="mb-2 opacity-80">text-gray-800 dark:text-white</p>
		<p class="opacity-60">p text-secondary</p>
	</div>

	<!-- Button to Home, simple button -->
	<div class="flex flex-col gap-4">
		<a href="/" class="btn btn-wide rounded-full btn-primary">Home</a>
	</div>

	<!-- Card with hamburger menu -->
	<div class="flex flex-col gap-4">
		<div class="card relative max-w-sm border border-base-300 bg-base-100 shadow-md">
			<!-- Hamburger menu at true top-right of the card -->
			<button
				class="absolute top-2 right-2 z-20 rounded-full p-2 hover:bg-base-200 focus:outline-none"
				aria-label="Menu"
				on:click={() => (showMenu = !showMenu)}
			>
				<MenuIcon />
			</button>
			{#if showMenu}
				<div
					class="absolute top-12 right-2 z-30 w-32 rounded border border-base-300 bg-base-100 shadow-lg"
				>
					<button class="block w-full px-4 py-2 text-left hover:bg-base-200" on:click={handleEdit}
						>Edit</button
					>
					<button class="block w-full px-4 py-2 text-left hover:bg-base-200" on:click={handleDelete}
						>Delete</button
					>
				</div>
			{/if}
			<div class="card-body p-4">
				<h5 class="mb-2 card-title font-medium">Card header</h5>
				<p class="mb-2 opacity-80">Card with hamburger menu</p>
			</div>
		</div>
	</div>
</section>
