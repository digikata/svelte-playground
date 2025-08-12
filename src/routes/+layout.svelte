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

<div class="min-h-screen bg-app">
	<!-- Sidebar: reserved left column -->
	<aside class="bg-surface border-default border-r h-screen fixed left-0 top-0 w-64 flex flex-col justify-between">
		<nav class="overflow-auto p-2">
			<Sidebar class="flowbite-sidebar !bg-surface bg-transparent">
				<SidebarGroup>
					<SidebarItem class="text-primary hover:bg-surface-elevated" label="Home" href="/" />
					{#each routes as route (route)}
						<SidebarItem class="text-primary hover:bg-surface-elevated" label="-- {route}" href={route} />
					{/each}
					<SidebarItem class="text-primary hover:bg-surface-elevated" label="Toggle Theme" onclick={toggleTheme} />
				</SidebarGroup>
			</Sidebar>
		</nav>
	</aside>

	<!-- Main content: offset by sidebar width -->
	<main class="ml-64 bg-app text-primary min-h-screen">
		{@render children?.()}
	</main>
</div>
