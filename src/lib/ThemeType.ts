// this still needs to reflect the loaded themes from DaisyUI in app.css
//
// /* @plugin "daisyui"; */
// @plugin "daisyui" {
// 	themes:
// 		light --default,
// 		dark --prefersdark,
// 		aqua,
// 		cupcake,
// 		forest,
// 		lofi,
// 		dracula,
// 		caramellatte,
// 		abyss,
// 		nord;
// }

export const availableThemes = [
	{ name: 'Light', value: 'light' },
	{ name: 'Dark', value: 'dark' },
	{ name: 'Aqua', value: 'aqua' },
	{ name: 'Cupcake', value: 'cupcake' },
	{ name: 'Forest', value: 'forest' },
	{ name: 'Lofi', value: 'lofi' },
	{ name: 'Dracula', value: 'dracula' },
	{ name: 'Caramel Latte', value: 'caramellatte' },
	{ name: 'Abyss', value: 'abyss' },
	{ name: 'Nord', value: 'nord' }
] as const; // Important: 'as const' for literal types

export type Theme = (typeof availableThemes)[number]['value'];
