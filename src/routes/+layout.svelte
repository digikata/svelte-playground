<script lang="ts">
	// from time to time, something with `npm run dev` hot loading can
	// cause the side drawer menu to become unresponsive, usually when
	// editing this layout file.
	// npm run dev and refreshing the page seems to clear the problem
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { getTopLevelRoutes } from '$lib/routeUtils';
	import { theme } from '$lib/store/theme';
	import AppBadge from '$lib/components/AppBadge.svelte';
	import { ExternalLink as ExternalLinkIcon } from '@lucide/svelte';
	const routes = getTopLevelRoutes();

	// link routes
	const linkItems = [
		{ name: 'DaisyUI', url: 'https://daisyui.com/components/accordion/' },
		{ name: 'DaisyUI Util CSS', url: 'https://daisyui.com/docs/utilities/' },
		{ name: 'Lucide Icons', url: 'https://lucide.dev/icons' },
		{ name: 'SvelteKit', url: 'https://svelte.dev/docs/kit/introduction' }
	] as const;

	let { children } = $props();
	$effect(() => {
		const t = $theme;
		if (typeof document === 'undefined') return;
		// apply DaisyUI data-theme
		document.documentElement.setAttribute('data-theme', t ?? 'dark');
	});

	// close the drawer when a sidebar link is clicked (mobile)
	function handleNavClick(e: MouseEvent) {
		if (typeof document === 'undefined') return;
		const target = e.target as HTMLElement | null;
		if (!target) return;
		const anchor = target.closest('a');
		if (!anchor) return;
		const cb = document.getElementById('app-drawer') as HTMLInputElement | null;
		if (cb) cb.checked = false;
	}
	// keyboard counterpart to satisfy a11y lint: handle Enter / Space
	function handleNavKeyDown(e: KeyboardEvent) {
		if (typeof document === 'undefined') return;
		if (e.key !== 'Enter' && e.key !== ' ') return;
		const target = e.target as HTMLElement | null;
		if (!target) return;
		const anchor = target.closest('a');
		if (!anchor) return;
		const cb = document.getElementById('app-drawer') as HTMLInputElement | null;
		if (cb) cb.checked = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- redundant w/ import app.css? -->
	<!-- <link href="/src/app.css" rel="stylesheet" /> -->
</svelte:head>

<div class="drawer min-h-screen lg:drawer-open">
	<!-- Drawer toggle checkbox -->
	<input id="app-drawer" type="checkbox" class="drawer-toggle" />

	<!-- Main content -->
	<div class="drawer-content flex flex-col">
		<!-- Mobile navbar -->
		<div class="navbar w-full bg-base-300 lg:hidden">
			<div class="flex-none">
				<!-- Hamburger toggles drawer -->
				<label for="app-drawer" class="btn btn-ghost">
					<AppBadge />
				</label>
			</div>
			<!-- <div class="mx-2 flex-1 px-2 font-bold">My App</div> -->
		</div>

		<!-- Page content -->
		<div class="flex-1 p-6">
			{@render children?.()}
		</div>
	</div>

	<!-- Sidebar -->
	<div class="drawer-side sm:w-64">
		<!-- Overlay: clicking outside closes drawer on mobile -->
		<label for="app-drawer" class="drawer-overlay"></label>

		<!-- Sidebar content -->
		<aside class="menu min-h-full w-64 bg-base-200 p-4">
			<label for="app-drawer" class="mb-4 cursor-pointer text-xl font-bold">
				<AppBadge
					containerClass="btn btn-ghost"
					onclick={handleNavClick}
					onkeydown={handleNavKeyDown}
				/>
			</label>
			<ul>
				<li>
					<a href="/" onclick={handleNavClick} onkeydown={handleNavKeyDown}>Home</a>
				</li>
				{#each routes as route (route)}
					<li>
						<a href={route} onclick={handleNavClick} onkeydown={handleNavKeyDown}>-- {route}</a>
					</li>
				{/each}
				<li class="menu-title"><span>Links</span></li>
				{#each linkItems as item (item.name)}
					<li>
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							onclick={handleNavClick}
							onkeydown={handleNavKeyDown}
							>-- {item.name}
							<ExternalLinkIcon class="inline-block h-3 w-3" /></a
						>
					</li>
				{/each}
			</ul>
		</aside>
	</div>
</div>
