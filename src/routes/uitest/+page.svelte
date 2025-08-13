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

<section class="p-8 bg-base-200 text-base-content">
	<h1 class="mb-2 text-3xl font-bold">Card Test Page</h1>
	<p class="mb-8 opacity-80">This is a simple placeholder at /card-test.</p>

	<h2 class="mb-6 text-xl font-semibold">Cards</h2>

	<!-- Card grid -->
	<div class="mb-8 gap-4 grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
		{#each items as item (item.name)}
			<div class="shadow-md card border border-base-300 bg-base-100">
				<div class="p-4 card-body">
					<h5 class="mb-2 font-medium card-title">{item.name}</h5>
					<p class="mb-2 opacity-80">{item.description}</p>
					<p class="opacity-60">text-foreground</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="mb-6 rounded-lg p-6 border border-base-300 bg-base-100">
		<h5 class="mb-2 text-lg font-semibold">h5 text-primary</h5>
		<p class="mb-2 opacity-80">text-gray-800 dark:text-white</p>
		<p class="opacity-60">p text-secondary</p>
	</div>

	<div class="gap-4 flex flex-col">
		<a href="/" class="btn btn-wide rounded-full btn-primary">Home</a>
	</div>

	<!-- Card with hamburger menu -->
	<div class="gap-4 flex flex-col">
		<div class="relative max-w-sm shadow-md card border border-base-300 bg-base-100">
			<!-- Hamburger menu at true top-right of the card -->
			<button class="absolute top-2 right-2 p-2 rounded-full hover:bg-base-200 focus:outline-none z-20" aria-label="Menu" on:click={() => showMenu = !showMenu}>
				<MenuIcon />
			</button>
			{#if showMenu}
				<div class="absolute right-2 top-12 w-32 bg-base-100 border border-base-300 rounded shadow-lg z-30">
					<button class="block w-full text-left px-4 py-2 hover:bg-base-200" on:click={handleEdit}>Edit</button>
					<button class="block w-full text-left px-4 py-2 hover:bg-base-200" on:click={handleDelete}>Delete</button>
				</div>
			{/if}
			<div class="p-4 card-body">
				<h5 class="mb-2 font-medium card-title">Card header</h5>
				<p class="mb-2 opacity-80">Card with hamburger menu</p>
			</div>
		</div>
	</div>
</section>
