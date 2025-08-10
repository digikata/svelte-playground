<script lang="ts">
	import { onMount } from 'svelte';
	import { Sidebar, SidebarGroup, SidebarItem } from 'flowbite-svelte';
	import { getTopLevelRoutes } from '$lib/routeUtils';

	const routes = getTopLevelRoutes();

	let dark = false;

	onMount(() => {
		const stored = localStorage.getItem('theme');
		if (stored === 'dark') dark = true;
		else if (stored === 'light') dark = false;
		else dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		applyTheme();
	});

	function applyTheme() {
		if (dark) document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
		localStorage.setItem('theme', dark ? 'dark' : 'light');
	}

	function toggleTheme() {
		dark = !dark;
		applyTheme();
	}
</script>

<div class="min-h-screen">
	<!-- Sidebar: reserved left column -->
	<aside class="fb-sidebar fixed top-0 left-0 flex h-screen w-64 flex-col justify-between">
		<nav class="overflow-auto p-2">
			<Sidebar>
				<SidebarGroup>
					{#each routes as route}
						<SidebarItem class="fb-sidebar-item" label={route} href={route} />
					{/each}
					<SidebarItem class="fb-sidebar-item" label="Toggle Theme" onclick={toggleTheme} />
				</SidebarGroup>
			</Sidebar>
		</nav>
	</aside>

	<!-- Main content: offset by sidebar width -->
	<main class="ml-64 p-6">
		<h1>Welcome to SvelteKit</h1>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>

		<h2>Available Pages</h2>
		<ul>
			{#each routes as route}
				<li><a href={route}>{route}</a></li>
			{/each}
		</ul>
	</main>
</div>
