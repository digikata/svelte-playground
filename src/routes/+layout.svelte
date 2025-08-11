<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { Sidebar, SidebarGroup, SidebarItem } from 'flowbite-svelte';
	import { getTopLevelRoutes } from '$lib/routeUtils';

	const routes = getTopLevelRoutes();

	let { children } = $props();

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

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen">
	<!-- Sidebar: reserved left column -->
	<aside class="fb-sidebar fixed top-0 left-0 flex h-screenflex-col justify-between">
		<nav class="overflow-auto p-2">
			<Sidebar>
				<SidebarGroup>
					<SidebarItem class="fb-sidebar-item" label="Home" href="/" />
					{#each routes as route (route)}
						<SidebarItem class="fb-sidebar-item" label="-- {route}" href={route} />
					{/each}
					<SidebarItem class="fb-sidebar-item" label="Toggle Theme" onclick={toggleTheme} />
				</SidebarGroup>
			</Sidebar>
		</nav>
	</aside>

	<!-- Main content: offset by sidebar width -->
	<main class="ml-64 p-6">
		{@render children?.()}
	</main>
</div>