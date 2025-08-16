import { writable } from 'svelte/store';
import { type Theme } from '$lib/ThemeType';

const isBrowser = typeof localStorage !== 'undefined';

const STORAGE_KEY = 'theme';
const DEFAULT_THEME: Theme = 'dark';

function getInitial(): Theme {
	if (!isBrowser) return DEFAULT_THEME;
	const v = localStorage.getItem(STORAGE_KEY) as Theme | null;
	return v ?? DEFAULT_THEME;
}

export const theme = writable<Theme>(getInitial());

theme.subscribe((t) => {
	if (!isBrowser) return;
	localStorage.setItem(STORAGE_KEY, t);
});
