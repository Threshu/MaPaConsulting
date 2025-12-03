<template>
	<div class="slide-container">
		<div class="slide-header">
			<UIcon name="i-heroicons-briefcase" class="slide-icon" />
			<h3 class="slide-title">{{ t("about.slides.services.title") }}</h3>
		</div>
		<div class="slide-content">
			<p class="slide-text">{{ t("about.slides.services.intro") }}</p>
			<div class="services-grid">
				<div
					v-for="(service, index) in services"
					:key="index"
					class="service-card"
				>
					<UIcon :name="service.icon" class="service-icon" />
					<h4 class="service-title">{{ t(service.titleKey) }}</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();

	const services = [
		{
			icon: "i-heroicons-building-office-2",
			titleKey: "services.items.0.title",
		},
		{
			icon: "i-heroicons-chart-bar",
			titleKey: "services.items.1.title",
		},
		{
			icon: "i-heroicons-cog-6-tooth",
			titleKey: "services.items.2.title",
		},
		{
			icon: "i-heroicons-light-bulb",
			titleKey: "services.items.3.title",
		},
		{
			icon: "i-heroicons-cpu-chip",
			titleKey: "services.items.4.title",
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

	.slide-text {
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--color-text);
		margin: 0;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		margin-top: 1rem;
	}

	.service-card {
		background-color: var(--color-body-bg);
		padding: 1.5rem;
		border-radius: 1rem;
		text-align: center;
		transition: transform 0.2s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	.service-card:hover {
		transform: translateY(-4px);
	}

	.service-icon {
		font-size: 2.5rem;
		color: var(--color-primary);
		flex-shrink: 0;
	}

	.service-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-title);
		margin: 0;
		line-height: 1.4;
	}

	@media (max-width: 768px) {
		.slide-container {
			padding: 2rem;
			min-height: 350px;
		}

		.slide-title {
			font-size: 1.5rem;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
