// Function to get all top-level routes dynamically using import.meta.glob
export function getTopLevelRoutes(): string[] {
	// This uses Vite's import.meta.glob to get all top-level +page.svelte files
	const routes = import.meta.glob('/src/routes/*/+page.svelte', { eager: false });

	// Extract route names from the file paths
	const routeNames: string[] = [];

	for (const path in routes) {
		// Convert file path to route path
		// Example: /src/routes/ctest/+page.svelte -> ctest
		// const match = path.match(/\/src\/routes\/([^\/]+)\/\+page\.svelte$/);
		const match = path.match(/\/src\/routes\/([^/]+)\/\+page\.svelte$/);
		if (match) {
			routeNames.push(match[1]);
		}
	}

	return routeNames;
}
