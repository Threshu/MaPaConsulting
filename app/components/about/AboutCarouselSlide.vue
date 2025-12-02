<template>
	<div class="slide-container">
		<div class="slide-header">
			<UIcon :name="slide.icon" class="slide-icon" />
			<h3 class="slide-title">{{ slide.title }}</h3>
		</div>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<div class="slide-content" v-html="slide.content" />
	</div>
</template>

<script setup lang="ts">
	interface CarouselSlide {
		icon: string;
		title: string;
		content: string;
	}

	defineProps<{
		slide: CarouselSlide;
	}>();
</script>

<style scoped>
	.slide-container {
		background-color: var(--color-box-bg);
		border-radius: 1.5rem;
		padding: 3rem;
		min-height: 400px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.slide-header {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.slide-icon {
		font-size: 2.5rem;
		color: var(--color-primary);
	}

	.slide-title {
		font-size: 2.25rem;
		font-weight: 600;
		color: var(--color-title);
		margin: 0;
	}

	.slide-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	/* Text styles for content */
	.slide-content :deep(.slide-text) {
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--color-text);
		margin: 0;
	}

	/* Services grid */
	.slide-content :deep(.services-grid) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.slide-content :deep(.service-card) {
		background-color: var(--color-body-bg);
		padding: 1.5rem;
		border-radius: 1rem;
		text-align: center;
		transition: transform 0.2s ease;
	}

	.slide-content :deep(.service-card:hover) {
		transform: translateY(-4px);
	}

	.slide-content :deep(.service-icon) {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.slide-content :deep(.service-title) {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-title);
		margin: 0;
	}

	/* Projects list */
	.slide-content :deep(.projects-list) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.slide-content :deep(.project-item) {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 1rem;
		padding: 1.5rem;
		background-color: var(--color-body-bg);
		border-radius: 1rem;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.slide-content :deep(.project-item:hover) {
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	.slide-content :deep(.project-icon) {
		font-size: 3rem;
		flex-shrink: 0;
	}

	.slide-content :deep(.project-text) {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text);
		margin: 0;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.slide-container {
			padding: 2rem;
			min-height: 350px;
		}

		.slide-title {
			font-size: 1.5rem;
		}

		.slide-content :deep(.services-grid) {
			grid-template-columns: 1fr;
		}

		.slide-content :deep(.projects-list) {
			grid-template-columns: 1fr;
		}
	}
</style>
