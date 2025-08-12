<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	import { getTopLevelRoutes } from '$lib/routeUtils';
	import { afterNavigate } from '$app/navigation';

	const { Rail, Tile } = Navigation;

	const routes = getTopLevelRoutes();
	const bottomNavItems = [
		{ label: 'UI Ref', href: 'https://www.skeleton.dev/docs/get-started/introduction' },
		{ label: 'Lucide Icons', href: 'https://lucide.dev/icons/' },
		{ label: 'UI Card', href: 'https://www.skeleton.dev/docs/tailwind/cards' },
	];
	let { children } = $props();

	let drawerOpen = $state(false);

	function toggleDrawer() {
		drawerOpen = !drawerOpen;
		console.log('Drawer toggled. Open state:', drawerOpen);
	}

	function closeDrawer() {
		drawerOpen = false;
		console.log('Drawer closed');
	}

	// Close drawer when navigating to a new page
	afterNavigate(() => {
		closeDrawer();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<!-- App Bar -->
	<header class="preset-filled-surface border-b border-surface-200-800">
		<div class="container mx-auto flex items-center justify-between px-4 py-3">
			<div class="flex items-center space-x-4">
				<button class="hover:preset-tonal-surface rounded-lg p-2 md:hidden" onclick={toggleDrawer}>
					☰
				</button>
				<strong class="text-xl uppercase">SkeletonUI App</strong>
			</div>
			<div class="flex items-center space-x-4">
				<!-- Placeholder for theme switcher -->
				<button class="hover:preset-tonal-surface rounded-lg p-2"> 🌓 </button>
			</div>
		</div>
	</header>

	<div class="flex flex-1">
		<!-- NavRail (Sidebar) -->
		<aside class="hidden md:block">
			<Rail>
				{#snippet tiles()}
					<Tile label="Home" title="Home" href="/">🏠</Tile>
					{#each routes as route (route)}
						<Tile
							label={route.replace('/', '') || 'Home'}
							title={route.replace('/', '') || 'Home'}
							href={route}
						>
							📄
						</Tile>
					{/each}
					{#each bottomNavItems as item (item.href)}
						<Tile label={item.label} title={item.label} href={item.href}>
						</Tile>
					{/each}
				{/snippet}
			</Rail>
		</aside>

		<!-- Mobile Drawer -->
		{#if drawerOpen}
			<div
				class="fixed inset-0 z-50 md:hidden"
				role="dialog"
				aria-modal="true"
				aria-labelledby="drawer-title"
			>
				<div
					class="bg-opacity-50 fixed inset-0 bg-black"
					onclick={closeDrawer}
					onkeydown={(e) => e.key === 'Escape' && closeDrawer()}
					role="button"
					tabindex="0"
					aria-label="Close drawer"
				></div>
				<div class="preset-filled-surface fixed top-0 left-0 h-full w-64 shadow-lg">
					<div class="flex items-center justify-between border-b border-surface-200-800 p-4">
						<strong id="drawer-title" class="text-lg">Menu</strong>
						<button
							onclick={closeDrawer}
							class="hover:preset-tonal-surface rounded-lg bg-red-500 p-2 text-xl font-bold text-white"
							aria-label="Close menu"
						>
							✕
						</button>
					</div>
					<nav class="p-4" aria-label="Mobile navigation">
						<ul class="space-y-2">
							<li>
								<a
									href="/"
									onclick={closeDrawer}
									class="hover:preset-tonal-surface flex items-center space-x-3 rounded-lg p-3"
								>
									<span>🏠</span>
									<span>Home</span>
								</a>
							</li>
							{#each routes as route (route)}
								<li>
									<a
										href={route}
										onclick={closeDrawer}
										class="hover:preset-tonal-surface flex items-center space-x-3 rounded-lg p-3"
									>
										<span>📄</span>
										<span>{route.replace('/', '') || 'Home'}</span>
									</a>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		{/if}

		<!-- Main Content -->
		<main class="flex-1 p-4 md:p-6">
			{@render children?.()}
		</main>
	</div>
</div>
