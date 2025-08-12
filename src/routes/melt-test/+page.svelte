<script lang="ts">
	import { Card } from '@skeletonlabs/skeleton-svelte';
	import { Menu, MenuButton, MenuItem, MenuList } from '@melt-ui/svelte';
</script>

<div class="container mx-auto p-8">
	<Card class="card variant-filled-surface">
		<header class="card-header flex justify-between items-center">
			<h5 class="h5">Header line</h5>
			<Menu>
				<MenuButton class="btn btn-icon">
					<i class="fa-solid fa-bars"></i>
				</MenuButton>
				<MenuList>
					<MenuItem on:click={() => alert('Option 1 selected')}>Option 1</MenuItem>
					<MenuItem on:click={() => alert('Option 2 selected')}>Option 2</MenuItem>
					<MenuItem on:click={() => alert('Option 3 selected')}>Option 3</MenuItem>
				</MenuList>
			</Menu>
		</header>
		<section class="p-4">
			<p>This is the first line of text under the header.</p>
			<p>This is the second line of text under the header.</p>
		</section>
	</Card>
</div>
