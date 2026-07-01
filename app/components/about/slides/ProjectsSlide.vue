<template>
	<div class="slide-container">
		<div class="slide-header">
			<UIcon name="i-heroicons-chart-bar-square" class="slide-icon" />
			<h3 class="slide-title">{{ t("about.slides.projects.title") }}</h3>
		</div>
		<div class="slide-content">
			<div class="cases-grid">
				<div
					v-for="(item, index) in caseKeys"
					:key="index"
					class="case-card"
				>
					<h4 class="case-title">{{ t(`projects.items.${index}.title`) }}</h4>
					<div class="case-row">
						<span class="case-label label-situation">{{ t("projects.labels.situation") }}</span>
						<p class="case-text">{{ t(`projects.items.${index}.situation`) }}</p>
					</div>
					<div class="case-row">
						<span class="case-label label-action">{{ t("projects.labels.action") }}</span>
						<p class="case-text">{{ t(`projects.items.${index}.action`) }}</p>
					</div>
					<div class="case-row">
						<span class="case-label label-result">{{ t("projects.labels.result") }}</span>
						<p class="case-text case-result">{{ t(`projects.items.${index}.result`) }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();

	const caseKeys = [0, 1, 2, 3];
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
	}

	.cases-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.case-card {
		background-color: var(--color-body-bg);
		border-radius: 1rem;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.875rem;
	}

	.case-title {
		font-size: 1.125rem;
		font-weight: 700;
		color: var(--color-title);
		margin: 0 0 0.25rem 0;
		line-height: 1.3;
	}

	.case-row {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.case-label {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		padding: 0.2rem 0.5rem;
		border-radius: 0.25rem;
		width: fit-content;
	}

	.label-situation {
		background-color: rgba(202, 141, 79, 0.18);
		color: var(--color-primary);
	}

	.label-action {
		background-color: rgba(202, 141, 79, 0.18);
		color: var(--color-primary);
	}

	.label-result {
		background-color: rgba(202, 141, 79, 0.18);
		color: var(--color-primary);
	}

	.case-text {
		font-size: 0.95rem;
		line-height: 1.6;
		color: var(--color-text);
		margin: 0;
	}

	.case-result {
		font-weight: 600;
		color: var(--color-title);
	}

	@media (max-width: 768px) {
		.slide-container {
			padding: 2rem;
			min-height: 350px;
		}

		.slide-title {
			font-size: 1.5rem;
		}

		.cases-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
