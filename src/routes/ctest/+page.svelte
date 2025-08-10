<script lang="ts">
	import { Card, Dropdown, DropdownItem } from 'flowbite-svelte';

	// Static JSON array of objects
	const items = [
		{ name: 'Alpha', description: 'First item description' },
		{ name: 'Beta', description: 'Second item description' },
		{ name: 'Gamma', description: 'Third item description' },
		{ name: 'Delta', description: 'Fourth item description' }
	] as const;

	function onView(item: (typeof items)[number]) {
		console.log('view', item);
	}

	function onDelete(item: (typeof items)[number]) {
		console.log('delete', item);
	}
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
		{#each items as item}
			<Card class="fb-card relative !shadow-md">
				<!-- Dropdown trigger in top-right corner -->
				<div class="absolute top-2 right-2">
					<Dropdown placement="bottom-end" class="fb-dropdown inline-block">
						<!-- Trigger content placed directly as children to avoid slot typing issues -->
						<div
							class="cursor-pointer rounded p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:outline-none"
							aria-label="Open menu"
						>
							<svg
								class="h-5 w-5 text-gray-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</div>

						<!-- Dropdown items -->
						<ul class="py-1 text-sm text-gray-700" role="menu">
							<li>
								<button type="button" class="w-full text-left" on:click={() => onView(item)}>
									<DropdownItem class="fb-dropdown-item">view</DropdownItem>
								</button>
							</li>
							<li>
								<button type="button" class="w-full text-left" on:click={() => onDelete(item)}>
									<DropdownItem class="fb-dropdown-item text-red-600">delete</DropdownItem>
								</button>
							</li>
						</ul>
					</Dropdown>
				</div>

				<!-- Only show the name as requested; add margin around the text -->
				<h3 class="m-4 text-lg font-semibold">{item.name}</h3>
			</Card>
		{/each}
	</div>
</section>
