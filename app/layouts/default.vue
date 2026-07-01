<template>
	<div class="min-h-screen">
		<div class="top-controls">
			<LanguageSwitcher />
			<ThemeToggle />
		</div>
		<ScrollToTop />
		<slot />
	</div>
</template>

<style scoped>
	.top-controls {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>
