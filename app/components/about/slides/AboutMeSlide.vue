<template>
	<div class="slide-container">
		<div class="slide-header">
			<UIcon name="i-heroicons-user-circle" class="slide-icon" />
			<h3 class="slide-title">{{ t("about.slides.aboutMe.title") }}</h3>
		</div>
		<div class="slide-content">
			<p class="slide-text">{{ t("about.slides.aboutMe.intro") }}</p>
			<p class="slide-text">{{ t("about.slides.aboutMe.expertise") }}</p>
			<p class="slide-text">{{ t("about.slides.aboutMe.approach") }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
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

	@media (max-width: 768px) {
		.slide-container {
			padding: 2rem;
			min-height: 350px;
		}

		.slide-title {
			font-size: 1.5rem;
		}
	}
</style>
