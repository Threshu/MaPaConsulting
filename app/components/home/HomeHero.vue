<template>
	<div class="home-content">
		<div class="home-text">
			<p class="home-greeting">{{ t("home.greeting") }}</p>
			<h1 class="home-name">{{ t("home.name") }}</h1>
			<p class="home-roles">{{ t("home.roles") }}</p>
			<p class="home-subtitle">{{ t("home.subtitle") }}</p>
			<p class="home-description">{{ t("home.description") }}</p>
			<div class="desktop-cta">
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
		grid-template-columns: 1fr auto;
		gap: 2rem;
		align-items: center;
		margin-top: 3rem;
		margin-bottom: 3rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.home-text {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.home-greeting {
		font-size: 1.25rem;
		color: var(--color-text);
		font-weight: 400;
		margin: 0;
	}

	.home-name {
		font-size: 4.5rem;
		font-weight: 700;
		color: var(--color-title);
		line-height: 1.1;
		margin: 0;
	}

	.home-roles {
		font-size: 1.5rem;
		color: var(--color-primary);
		font-weight: 600;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.home-subtitle {
		font-size: 1.25rem;
		color: var(--color-text);
		font-weight: 500;
		margin: 0;
	}

	.home-description {
		font-size: 1.125rem;
		color: var(--color-text);
		line-height: 1.8;
		margin: 0;
		margin-bottom: 0.5rem;
	}

	.home-image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.portrait {
		width: 100%;
		max-width: 400px;
		height: auto;
		border-radius: 2rem;
	}

	.desktop-cta {
		display: block;
	}

	@media (max-width: 768px) {
		.home-content {
			grid-template-columns: 1fr;
			gap: 2rem;
			margin-bottom: 2rem;
		}

		.home-name {
			font-size: 2.5rem;
		}

		.home-roles {
			font-size: 1.125rem;
		}

		.portrait {
			max-width: 300px;
		}

		.desktop-cta {
			display: none;
		}
	}
</style>
