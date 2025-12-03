<template>
	<div class="slide-container">
		<div class="slide-header">
			<UIcon name="i-heroicons-light-bulb" class="slide-icon" />
			<h3 class="slide-title">{{ t("about.slides.projects.title") }}</h3>
		</div>
		<div class="slide-content">
			<div class="projects-list">
				<div
					v-for="(project, index) in projects"
					:key="index"
					class="project-item"
				>
					<UIcon :name="project.icon" class="project-icon" />
					<p class="project-text">{{ t(project.titleKey) }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();

	const projects = [
		{
			icon: "i-heroicons-building-office",
			titleKey: "projects.items.0.title",
		},
		{
			icon: "i-heroicons-arrow-path-rounded-square",
			titleKey: "projects.items.1.title",
		},
		{
			icon: "i-heroicons-chart-bar-square",
			titleKey: "projects.items.2.title",
		},
		{
			icon: "i-heroicons-computer-desktop",
			titleKey: "projects.items.3.title",
		},
		{
			icon: "i-heroicons-document-chart-bar",
			titleKey: "projects.items.4.title",
		},
		{
			icon: "i-heroicons-trophy",
			titleKey: "projects.items.5.title",
		},
	];
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

	.projects-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
	}

	.project-item {
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

	.project-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	.project-icon {
		font-size: 3rem;
		flex-shrink: 0;
		color: var(--color-primary);
	}

	.project-text {
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

		.projects-list {
			grid-template-columns: 1fr;
		}
	}
</style>
