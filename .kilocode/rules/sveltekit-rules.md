# sveltekit-rules.md

This project runs sveltekit and should keep to the modern sveltekit and typescript
guidelines.

There are a set of packages installed, Tailwind, SkeletonUI and lucide/svelte Icons
which should be used when it makes sense. The guidelines below give more information
on the available components and where to get information from them.

## Guidelines

- when generating code using #each loops, also define a key when possible
- To check code, run format, check and lint all together "npm run format && npm run check && npm run lint" to get a comprehensive list of issues to fix to maintain clean code

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

- The list of @lucide/svelte icons is extensive, and can be summarized by `ls node_modules/@lucide/svelte/dist/icons/*.svelte`



