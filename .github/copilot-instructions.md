# Copilot Instructions for Svelte5-Test Project

## Overview
This project is a SvelteKit application leveraging SkeletonUI and MeltUI for UI components and styling. It uses TailwindCSS for utility-first styling and integrates modern Svelte features. The project is structured to support modular development with a focus on reusable components and dynamic routing.
It uses @lucide/svelte for icons.

## Key Directories and Files
- **`src/routes/`**: Contains all the route-specific components. Each folder represents a route, and files like `+page.svelte` define the page content.
  - Example: `src/routes/melt-test/+page.svelte` demonstrates a card with a dropdown menu using SkeletonUI and MeltUI.
- **`src/lib/`**: Houses reusable utilities and assets.
  - Example: `src/lib/routeUtils.ts` provides helper functions for route management.
- **`src/app.css`**: Centralized styling file importing TailwindCSS and SkeletonUI themes.
- **`svelte.config.js`**: Configures SvelteKit with the static adapter and preprocessors.
- **`vite.config.ts`**: Configures Vite for development and build processes.

## Developer Workflows
### Development
Start the development server:
```sh
npm run dev
```
This serves the app locally at `http://localhost:5173/`.

### Building for Production
To build the app for production:
```sh
npm run build
```
Preview the production build:
```sh
npm run preview
```

### Testing
End-to-end tests are located in the `e2e/` directory and use Playwright:
```sh
npm run test:e2e
```

## Project-Specific Conventions
- **UI Components**: Use SkeletonUI for most components. MeltUI is used for interactive elements like dropdowns.
  - Example: A card with a dropdown menu is implemented in `src/routes/melt-test/+page.svelte`.
- **Styling**: TailwindCSS is used for utility classes, and SkeletonUI themes are imported in `src/app.css`.
- **Routing**: Dynamic routing is supported. Use `+layout.svelte` for shared layouts and `+page.svelte` for individual pages.
- MeltUI provides a set of components and utilities for building interactive UIs.
- SkeletonUI uses some Tailwind css classes for the following ui items
    - badges
    - buttons
    - cards
    - chiops
    - dividers
    - forms
    - placeholders
    - tables
- SkeletonUI provides the following functional components and subcomponents.
  They are located in `node_modules/@skeletonlabs/skeleton-svelte/dist/components`
    - Accordion/Accordion.svelte
    - Accordion/AccordionItem.svelte
    - AppBar/AppBar.svelte
    - Avatar/Avatar.svelte
    - Combobox/Combobox.svelte
    - FileUpload/FileUpload.svelte
    - Modal/Modal.svelte
    - Navigation/NavBar.svelte
    - Navigation/NavRail.svelte
    - Navigation/NavTile.svelte
    - Pagination/Pagination.svelte
    - Popover/Popover.svelte
    - Progress/Progress.svelte
    - ProgressRing/ProgressRing.svelte
    - Rating/Rating.svelte
    - Segment/Segment.svelte
    - Segment/SegmentItem.svelte
    - Slider/Slider.svelte
    - Switch/Switch.svelte
    - Tabs/Tabs.svelte
    - Tabs/TabsControl.svelte
    - Tabs/TabsPanel.svelte
    - TagsInput/TagsInput.svelte
    - Toast/Toast.svelte
    - Toast/Toaster.svelte
    - Tooltip/Tooltip.svelte

## External Dependencies
- **Shadcn**: Provides a set of components and utilities for building modern UIs.
- **TailwindCSS**: Utility-first CSS framework.
- **Playwright**: Used for end-to-end testing.
- **@lucide/svelte**: Provides a collection of icons for use in the application.

## Examples
### Adding a New Page
To add a new page with a SkeletonUI card:
1. Create a new folder in `src/routes/` (e.g., `new-page/`).
2. Add a `+page.svelte` file with the following content:
   ```svelte
   <script lang="ts">
       import { Card } from '@skeletonlabs/skeleton-svelte';
   </script>

   <div class="container mx-auto p-8">
       <Card class="card variant-filled-surface">
           <header class="card-header">
               <h5 class="h5">New Page</h5>
           </header>
           <section class="p-4">
               <p>Welcome to the new page!</p>
           </section>
       </Card>
   </div>
   ```

### Using MeltUI Dropdown
To add a dropdown menu:
1. Import MeltUI components:
   ```svelte
   import { Menu, MenuButton, MenuItem, MenuList } from '@melt-ui/svelte';
   ```
2. Add the dropdown to your component:
   ```svelte
   <Menu>
       <MenuButton class="btn btn-icon">
           <i class="fa-solid fa-bars"></i>
       </MenuButton>
       <MenuList>
           <MenuItem on:click={() => alert('Option 1')}>Option 1</MenuItem>
           <MenuItem on:click={() => alert('Option 2')}>Option 2</MenuItem>
       </MenuList>
   </Menu>
   ```
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
