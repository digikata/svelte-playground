export type Theme =
	| 'light'
	| 'dark'
	| 'cupcake'
	| 'forest'
	| 'lofi'
	| 'dracula'
	| 'caramellatte'
	| 'abyss'
	| 'nord';

export const availableThemes: { name: string; value: Theme }[] = [
	{ name: 'Light', value: 'light' },
	{ name: 'Dark', value: 'dark' },
	{ name: 'Cupcake', value: 'cupcake' },
	{ name: 'Forest', value: 'forest' },
	{ name: 'Lofi', value: 'lofi' },
	{ name: 'Dracula', value: 'dracula' },
	{ name: 'Caramel Latte', value: 'caramellatte' },
	{ name: 'Abyss', value: 'abyss' },
	{ name: 'Nord', value: 'nord' }
];
