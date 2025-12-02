<template>
	<div class="home-content">
		<div class="home-text">
			<h1 class="home-title">{{ t("home.title") }}</h1>
			<p class="home-subtitle">{{ t("home.subtitle") }}</p>
			<p class="home-description">{{ t("home.description") }}</p>
			<div>
				<CtaButton icon="i-heroicons-user-circle" @click="scrollToAbout">
					{{ t("home.cta") }}
				</CtaButton>
			</div>
		</div>

		<div class="home-image">
			<NuxtImg
				src="/assets/img/portrait_tranparent.png"
				alt="Mario Pape"
				class="portrait"
				loading="lazy"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const { scrollToAbout } = useScrollTo();
</script>

<style scoped>
	.home-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		margin-bottom: 4rem;
	}

	.home-text {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.home-title {
		font-size: 3.5rem;
		font-weight: 700;
		color: var(--color-title);
		line-height: 1.2;
		margin: 0;
	}

	.home-subtitle {
		font-size: 1.5rem;
		color: var(--color-primary);
		font-weight: 500;
		margin: 0;
	}

	.home-description {
		font-size: 1.125rem;
		color: var(--color-text);
		line-height: 1.8;
		margin: 0;
	}

	.home-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.portrait {
		width: 100%;
		max-width: 500px;
		height: auto;
		border-radius: 2rem;
	}

	@media (max-width: 768px) {
		.home-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.home-title {
			font-size: 2.5rem;
		}

		.home-subtitle {
			font-size: 1.25rem;
		}

		.portrait {
			max-width: 350px;
		}
	}
</style>
