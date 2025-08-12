# sveltekit-rules.md

This project runs sveltekit and should keep to the modern sveltekit and typescript
guidelines.

There are a set of packages installed, Tailwind, ShadCn (svelte ui) and lucide/svelte Icons
which should be used when it makes sense. The guidelines below give more information
on the available components and where to get information from them.

## Guidelines

- when generating code using #each loops, also define a key when possible
- To check code, run format, check and lint all together "npm run format && npm run check && npm run lint" to get a comprehensive list of issues to fix to maintain clean code

- The list of @lucide/svelte icons is extensive, and can be summarized by `ls node_modules/@lucide/svelte/dist/icons/*.svelte`

## Using Lucide Icons
To use Lucide icons in your project:
1. Import the desired icon from `@lucide/svelte`:
   ```svelte
   import { LucideName as LucideNameIcon } from '@lucide/svelte';
   ```
   use `as LucideNameIcon` to rename the icon because many of the icon names
   are generic and can be confused with other elements.
2. Add the icon to your component:
   ```svelte
   <LucideNameIcon class="icon-class" />
   ```