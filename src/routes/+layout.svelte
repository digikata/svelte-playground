<script lang="ts">
	// import { Sun, Moon } from '@lucide/svelte';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	// import { onMount } from 'svelte';
	import { getTopLevelRoutes } from '$lib/routeUtils';

	const routes = getTopLevelRoutes();

	// link routes
	const linkItems = [
		{ name: 'DaisyUI', url: 'https://daisyui.com/components/accordion/' },
		{ name: 'DaisyUI Util CSS', url: 'https://daisyui.com/docs/utilities/' },
		{ name: 'Lucide Icons', url: 'https://lucide.dev/icons' },
		{ name: 'SvelteKit', url: 'https://svelte.dev/docs/kit/introduction' }
	] as const;

	let { children } = $props();

	// let dark = $state(false);

	// onMount(() => {
	// 	const stored = localStorage.getItem('theme');
	// 	if (stored === 'dark') dark = true;
	// 	else if (stored === 'light') dark = false;
	// 	else dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	// 	applyTheme();
	// });

	// function applyTheme() {
	// 	// Keep Tailwind dark: variants working
	// 	if (dark) document.documentElement.classList.add('dark');
	// 	else document.documentElement.classList.remove('dark');
	// 	// Set DaisyUI theme so base-* and content tokens switch correctly
	// 	document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
	// 	localStorage.setItem('theme', dark ? 'dark' : 'light');
	// }

	// function toggleTheme() {
	// 	dark = !dark;
	// 	applyTheme();
	// }

	let sb_wide = '42';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-base-200">
	<!-- Sidebar: reserved left column -->
	<aside
		class="fixed top-0 left-0 flex h-screen w-48 flex-col border-r border-base-300 bg-base-200"
	>
		<nav class="overflow-auto p-2">
			<ul class="menu menu-vertical w-full rounded-box">
				<li>
					<a href="/">Home</a>
				</li>
				{#each routes as route (route)}
					<li>
						<a href={route}>-- {route}</a>
					</li>
				{/each}
				<!-- <li>
					<button type="button" class="text-sm justify-start opacity-70" onclick={toggleTheme}>
						{#if dark}<Moon size={18}/>{:else}<Sun size={18}/>{/if}
					</button>
				</li> -->
				<li class="menu-title"><span>Links</span></li>
				{#each linkItems as item (item.name)}
					<li>
						<a href={item.url} target="_blank" rel="noopener noreferrer">-- {item.name}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>

	<!-- Main content: offset by sidebar width -->
	<main class="ml-48 min-h-screen bg-base-200 text-base-content">
		{@render children?.()}
	</main>
</div>
