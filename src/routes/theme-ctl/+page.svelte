<script lang="ts">
    let currentTheme: string = 'light';
    const availableThemes = [
        { name: 'Light', value: 'light' },
        { name: 'Dark', value: 'dark' },
        { name: 'Cupcake', value: 'cupcake' },
        { name: 'Forest', value: 'forest' },
        { name: 'Lofi', value: 'lofi' },
        { name: 'Dracula', value: 'dracula' },
        { name: 'Caramel Latte', value: 'caramellatte' }
    ];

    function setTheme(theme: string) {
        currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
    }

    // Keep <html data-theme> in sync when currentTheme changes (e.g., via theme-controller radios)
    $: typeof document !== 'undefined' && document.documentElement.setAttribute('data-theme', currentTheme);
</script>

<!-- Removed dropdown: showing open radio group in the card below -->

<!-- Theme-Responsive Elements -->
  <div class="max-w-4xl mx-auto space-y-6">
    <!-- Card Example -->
    <div class="card bg-base-200 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-primary">Theme Demonstration</h2>
        <div class="flex items-center gap-4">
          <p class="text-base-content">
            Current theme: <span class="font-bold text-accent">{currentTheme}</span>
          </p>
          <fieldset class="fieldset flex flex-wrap gap-3 bg-base-300/50 rounded-box p-3">
            {#each availableThemes as theme}
              <label class="flex gap-2 cursor-pointer items-center">
                <input
                  type="radio"
                  name="theme-radios"
                  class="radio radio-sm theme-controller"
                  value={theme.value}
                  bind:group={currentTheme}
                />
                {theme.name}
              </label>
            {/each}
          </fieldset>
        </div>
        <p>This card's background and text colors will automatically adapt to the selected theme.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Primary Button</button>
          <button class="btn btn-secondary">Secondary Button</button>
          <button class="btn btn-accent">Accent Button</button>
        </div>
      </div>
    </div>

    <!-- Alert Examples -->
    <div class="space-y-3">
      <div class="alert alert-info">
        <span>This is an info alert—check it out!</span>
      </div>
      <div class="alert alert-success">
        <span>This is a success alert—nice work!</span>
      </div>
      <div class="alert alert-warning">
        <span>This is a warning alert—be careful!</span>
      </div>
      <div class="alert alert-error">
        <span>This is an error alert—oh no!</span>
      </div>
    </div>

    <!-- Progress Bars -->
    <div class="space-y-2">
      <div class="text-sm font-medium">Progress Examples</div>
      <progress class="progress progress-primary w-full" value="40" max="100"></progress>
      <progress class="progress progress-secondary w-full" value="60" max="100"></progress>
      <progress class="progress progress-accent w-full" value="80" max="100"></progress>
    </div>

    <!-- Toggle Example -->
    <div class="flex items-center space-x-4">
      <div class="text-sm font-medium">Theme-Sensitive Toggle</div>
      <input type="checkbox" class="toggle toggle-primary" checked />
      <input type="checkbox" class="toggle toggle-secondary" checked />
      <input type="checkbox" class="toggle toggle-accent" checked />
    </div>

    <!-- Radial Progress -->
    <div class="flex justify-around py-4">
      <div class="radial-progress text-primary" style="--value:70;">70%</div>
      <div class="radial-progress text-secondary" style="--value:85;">85%</div>
      <div class="radial-progress text-accent" style="--value:55;">55%</div>
    </div>
  </div>
