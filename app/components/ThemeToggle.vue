<template>
	<button
		class="theme-toggle"
		:aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
		@click="toggle"
	>
		<UIcon
			:name="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'"
			class="theme-icon"
		/>
	</button>
</template>

<script setup lang="ts">
	const { isDark, toggle, init } = useTheme();
	onMounted(init);
</script>

<style scoped>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.8rem;
		height: 2.8rem;
		border-radius: 9999px;
		border: 2px solid #ca8d4f;
		background: transparent;
		cursor: pointer;
		transition: background 0.2s ease;
		padding: 0;
		flex-shrink: 0;
	}

	.theme-toggle:hover {
		background: rgba(202, 141, 79, 0.1);
	}

	.theme-icon {
		width: 1.75rem;
		height: 1.75rem;
		color: #ca8d4f;
	}
</style>
