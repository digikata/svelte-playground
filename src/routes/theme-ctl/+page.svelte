<script lang="ts">
	import { availableThemes } from '$lib/ThemeType';
	import { theme } from '$lib/store/theme';
</script>

<!-- Removed dropdown: showing open radio group in the card below -->

<!-- Theme-Responsive Elements -->
<div class="mx-auto max-w-4xl space-y-6">
	<!-- Card Example -->
	<div class="card bg-base-200 shadow-xl">
		<div class="card-body">
			<h2 class="card-title text-primary">Theme Demonstration</h2>
			<div class="flex items-center gap-4">
				<p class="text-base-content">
					Current theme: <span class="font-bold text-accent">{$theme}</span>
				</p>
				<fieldset class="fieldset flex flex-wrap gap-3 rounded-box bg-base-300/50 p-3">
					{#each availableThemes as atheme (atheme.value)}
						<label class="flex cursor-pointer items-center gap-2">
							<input
								type="radio"
								name="theme-radios"
								class="theme-controller radio radio-sm"
								value={atheme.value}
								checked={$theme === atheme.value}
								onchange={() => ($theme = atheme.value)}
							/>
							{atheme.name}
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
		<progress class="progress w-full progress-primary" value="40" max="100"></progress>
		<progress class="progress w-full progress-secondary" value="60" max="100"></progress>
		<progress class="progress w-full progress-accent" value="80" max="100"></progress>
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

	<!-- Text Input Examples -->
	<div class="card bg-base-200 shadow-xl">
		<div class="card-body">
			<h3 class="card-title text-primary">Text Input Examples</h3>
			<p class="mb-4 text-base-content">
				These input fields automatically adapt to the selected theme using semantic color classes.
			</p>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<!-- Regular Inputs -->
				<div class="space-y-3">
					<div class="text-sm font-medium text-base-content">Regular Input Fields</div>
					<input type="text" placeholder="Default input" class="input-bordered input w-full" />
					<input type="text" placeholder="Primary input" class="input w-full input-primary" />
					<input type="text" placeholder="Secondary input" class="input w-full input-secondary" />
					<input type="text" placeholder="Accent input" class="input w-full input-accent" />
				</div>

				<!-- Ghost and Bordered Styles -->
				<div class="space-y-3">
					<div class="text-sm font-medium text-base-content">Styled Input Fields</div>
					<input type="text" placeholder="Ghost style" class="input w-full input-ghost" />
					<input type="text" placeholder="Success input" class="input w-full input-success" />
					<input type="text" placeholder="Warning input" class="input w-full input-warning" />
					<input type="text" placeholder="Error input" class="input w-full input-error" />
				</div>
			</div>

			<!-- Background Color Variations -->
			<div class="mt-6">
				<div class="mb-3 text-sm font-medium text-base-content">Input Background Variations</div>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div class="rounded-lg border border-base-300 bg-base-100 p-4">
						<div class="mb-2 text-xs font-medium text-base-content">Base-100 Background</div>
						<input
							type="text"
							placeholder="Primary border"
							class="input-bordered input w-full input-primary"
						/>
					</div>
					<div class="rounded-lg bg-base-200 p-4">
						<div class="mb-2 text-xs font-medium text-base-content">Base-200 Background</div>
						<input
							type="text"
							placeholder="Secondary border"
							class="input-bordered input w-full input-secondary"
						/>
					</div>
					<div class="rounded-lg bg-base-300 p-4">
						<div class="mb-2 text-xs font-medium text-base-content">Base-300 Background</div>
						<input
							type="text"
							placeholder="Accent border"
							class="input-bordered input w-full input-accent"
						/>
					</div>
					<div class="rounded-lg border border-primary/20 bg-primary/10 p-4">
						<div class="mb-2 text-xs font-medium text-base-content">Primary Tinted</div>
						<input
							type="text"
							placeholder="Primary border"
							class="input-bordered input w-full input-primary"
						/>
					</div>
					<div class="rounded-lg border border-secondary/20 bg-secondary/10 p-4">
						<div class="mb-2 text-xs font-medium text-base-content">Secondary Tinted</div>
						<input
							type="text"
							placeholder="Secondary border"
							class="input-bordered input w-full input-secondary"
						/>
					</div>
					<div class="rounded-lg border border-accent/20 bg-accent/10 p-4">
						<div class="mb-2 text-xs font-medium text-base-content">Accent Tinted</div>
						<input
							type="text"
							placeholder="Accent border"
							class="input-bordered input w-full input-accent"
						/>
					</div>
				</div>
			</div>

			<!-- Input Background Range -->
			<div class="mt-6">
				<div class="mb-3 text-sm font-medium text-base-content">Input Background Color Range</div>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					<div class="space-y-2">
						<div class="text-xs font-medium text-base-content">Primary Backgrounds</div>
						<input
							type="text"
							placeholder="Primary bg"
							class="input w-full bg-primary text-primary-content"
						/>
						<input
							type="text"
							placeholder="Primary/80"
							class="input w-full bg-primary/80 text-primary-content"
						/>
						<input
							type="text"
							placeholder="Primary/60"
							class="input w-full bg-primary/60 text-base-content"
						/>
						<input
							type="text"
							placeholder="Primary/40"
							class="input w-full bg-primary/40 text-base-content"
						/>
						<input
							type="text"
							placeholder="Primary/20"
							class="input w-full bg-primary/20 text-base-content"
						/>
					</div>
					<div class="space-y-2">
						<div class="text-xs font-medium text-base-content">Secondary Backgrounds</div>
						<input
							type="text"
							placeholder="Secondary bg"
							class="input w-full bg-secondary text-secondary-content"
						/>
						<input
							type="text"
							placeholder="Secondary/80"
							class="input w-full bg-secondary/80 text-secondary-content"
						/>
						<input
							type="text"
							placeholder="Secondary/60"
							class="input w-full bg-secondary/60 text-base-content"
						/>
						<input
							type="text"
							placeholder="Secondary/40"
							class="input w-full bg-secondary/40 text-base-content"
						/>
						<input
							type="text"
							placeholder="Secondary/20"
							class="input w-full bg-secondary/20 text-base-content"
						/>
					</div>
					<div class="space-y-2">
						<div class="text-xs font-medium text-base-content">Accent Backgrounds</div>
						<input
							type="text"
							placeholder="Accent bg"
							class="input w-full bg-accent text-accent-content"
						/>
						<input
							type="text"
							placeholder="Accent/80"
							class="input w-full bg-accent/80 text-accent-content"
						/>
						<input
							type="text"
							placeholder="Accent/60"
							class="input w-full bg-accent/60 text-base-content"
						/>
						<input
							type="text"
							placeholder="Accent/40"
							class="input w-full bg-accent/40 text-base-content"
						/>
						<input
							type="text"
							placeholder="Accent/20"
							class="input w-full bg-accent/20 text-base-content"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Content Color Examples -->
	<div class="card bg-base-200 shadow-xl">
		<div class="card-body">
			<h3 class="card-title text-primary">Content Color Examples</h3>
			<p class="mb-4 text-base-content">
				These examples show *-content colors that provide proper contrast on their corresponding
				backgrounds.
			</p>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				<!-- Primary Content -->
				<div class="space-y-2">
					<div class="text-xs font-medium text-base-content">Primary Content Colors</div>
					<div class="rounded-lg bg-primary p-3">
						<span class="text-primary-content">Primary background with primary-content text</span>
					</div>
					<div class="rounded-lg bg-primary/80 p-3">
						<span class="text-primary-content">Primary/80 with primary-content text</span>
					</div>
				</div>

				<!-- Secondary Content -->
				<div class="space-y-2">
					<div class="text-xs font-medium text-base-content">Secondary Content Colors</div>
					<div class="rounded-lg bg-secondary p-3">
						<span class="text-secondary-content"
							>Secondary background with secondary-content text</span
						>
					</div>
					<div class="rounded-lg bg-secondary/80 p-3">
						<span class="text-secondary-content">Secondary/80 with secondary-content text</span>
					</div>
				</div>

				<!-- Accent Content -->
				<div class="space-y-2">
					<div class="text-xs font-medium text-base-content">Accent Content Colors</div>
					<div class="rounded-lg bg-accent p-3">
						<span class="text-accent-content">Accent background with accent-content text</span>
					</div>
					<div class="rounded-lg bg-accent/80 p-3">
						<span class="text-accent-content">Accent/80 with accent-content text</span>
					</div>
				</div>

				<!-- Neutral Content -->
				<div class="space-y-2">
					<div class="text-xs font-medium text-base-content">Neutral Content Colors</div>
					<div class="rounded-lg bg-neutral p-3">
						<span class="text-neutral-content">Neutral background with neutral-content text</span>
					</div>
					<div class="rounded-lg bg-neutral/80 p-3">
						<span class="text-neutral-content">Neutral/80 with neutral-content text</span>
					</div>
				</div>

				<!-- Base Content -->
				<div class="space-y-2">
					<div class="text-xs font-medium text-base-content">Base Content Colors</div>
					<div class="rounded-lg border bg-base-100 p-3">
						<span class="text-base-content">Base-100 with base-content text</span>
					</div>
					<div class="rounded-lg bg-base-200 p-3">
						<span class="text-base-content">Base-200 with base-content text</span>
					</div>
					<div class="rounded-lg bg-base-300 p-3">
						<span class="text-base-content">Base-300 with base-content text</span>
					</div>
				</div>

				<!-- Status Content -->
				<div class="space-y-2">
					<div class="text-xs font-medium text-base-content">Status Content Colors</div>
					<div class="rounded bg-info p-2">
						<span class="text-sm text-info-content">Info content</span>
					</div>
					<div class="rounded bg-success p-2">
						<span class="text-sm text-success-content">Success content</span>
					</div>
					<div class="rounded bg-warning p-2">
						<span class="text-sm text-warning-content">Warning content</span>
					</div>
					<div class="rounded bg-error p-2">
						<span class="text-sm text-error-content">Error content</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
