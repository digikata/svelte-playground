<script lang="ts">
	import { Menu as MenuIcon } from '@lucide/svelte';
	// Static JSON array of objects
	const items = [
		{ name: 'Alpha', description: 'First item description' },
		{ name: 'Beta', description: 'Second item description' },
		{ name: 'Gamma', description: 'Third item description' },
		{ name: 'Delta', description: 'Fourth item description' }
	] as const;

	// // Add state for menu visibility
	// let isMenuOpen = false;

	// function toggleMenu() {
	// 	isMenuOpen = !isMenuOpen;
	// }

	// function closeMenu() {
	// 	isMenuOpen = false;
	// }

	function handleEdit() {
		// closeMenu();
		alert('Edit clicked');
	}
	function handleDelete() {
		// closeMenu();
		alert('Delete clicked');
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
			<!-- Card menu (daisyUI) details method (doesnt close on click when open)-->
			<!-- <details class="dropdown absolute top-2 right-2 z-20">
				<summary class="btn m-1"><MenuIcon /></summary>
				<ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
					<li><button role="menuitem" on:click={handleEdit}>Edit</button></li>
					<li><button role="menuitem" on:click={handleDelete}>Delete</button></li>
				</ul>
			</details> -->
			<!-- Card menu (daisyUI) css method-->
			<div class="dropdown absolute top-2 right-2 z-20">
				<div tabindex="-1" role="button" class="btn m-1 bg-base-100 btn-ghost"><MenuIcon /></div>
				<ul tabindex="-1" class="dropdown-content menu z-1 w-52 bg-base-100 p-2">
					<li><button role="menuitem" on:click={handleEdit}>Edit</button></li>
					<li><button role="menuitem" on:click={handleDelete}>Delete</button></li>
				</ul>
			</div>

			<div class="card-body p-4">
				<h5 class="mb-2 card-title font-medium">Card header</h5>
				<p class="mb-2 opacity-80">Card with hamburger menu</p>
			</div>
		</div>
	</div>
</section>
