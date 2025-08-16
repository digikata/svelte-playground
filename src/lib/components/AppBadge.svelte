<script lang="ts">
	// This component ends up being wrapped in a couple of different ways
	// to provide for consistency, this binds an icon and label together
	// so that they can be treated as a single unit
	import { Home as HomeIcon } from '@lucide/svelte';

	// prettier-ignore
	let {
        containerClass = '',
        iconClass = '',
        textClass = ''
    } = $props();

    let cont_class = $derived(containerClass == '' ? 'flex flex-shrink-0 items-center px-2 min-w-[3rem]' : containerClass);
	let icon_class = $derived(iconClass == '' ? 'h-6 w-6' : iconClass);
    let text_class = $derived(textClass == '' ? 'bold px-3' : textClass);
</script>

<div class={cont_class} aria-label="Application logo">
	<HomeIcon class={icon_class} aria-hidden="true" />
	<span class={text_class}>My App</span>
</div>
