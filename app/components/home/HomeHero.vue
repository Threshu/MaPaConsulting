<template>
	<div class="home-content">
		<div class="home-text">
			<img src="/mapa-logo-card.svg" alt="MaPa Consulting" class="home-logo" />
			<p class="home-eyebrow">{{ t("home.greeting") }}</p>
			<h1 class="home-name">{{ t("home.name") }}</h1>
			<p class="home-roles">{{ t("home.roles") }}</p>
			<p class="home-description">{{ t("home.description") }}</p>
			<div class="home-cta">
				<CtaButton icon="i-heroicons-envelope" @click="scrollToContact">
					{{ t("home.cta") }}
				</CtaButton>
				<a class="cta-secondary" :href="ctaSecondaryHref">
					{{ t("home.ctaSecondary") }}
				</a>
			</div>
		</div>

		<div class="home-image">
			<NuxtImg
				src="/assets/img/portrait_tranparent.png"
				alt="Mario Pape"
				width="726"
				height="1090"
				format="webp"
				quality="85"
				densities="1"
				class="portrait"
				fetchpriority="high"
				sizes="300px md:400px"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const { scrollToContact } = useScrollTo();

	const ctaSecondaryHref = computed(() => {
		const subject = encodeURIComponent(t("home.ctaSecondarySubject"));
		return `mailto:info@mapa-unternehmensberatung.de?subject=${subject}`;
	});
</script>

<style scoped>
	.home-content {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 2rem;
		align-items: center;
		margin-top: 2rem;
		margin-bottom: 2rem;
		max-width: 1200px;
		margin-left: auto;
		margin-right: auto;
	}

	.home-text {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.home-logo {
		width: 100%;
		max-width: 520px;
		height: auto;
		margin-bottom: 1.25rem;
	}

	.home-eyebrow {
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.15em;
		color: var(--color-primary);
		text-transform: uppercase;
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

	.home-cta {
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		margin-top: 0.5rem;
	}

	.cta-secondary {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-primary);
		background: transparent;
		border: 2px solid var(--color-primary);
		border-radius: 0.5rem;
		padding: 0.6rem 1.25rem;
		cursor: pointer;
		transition: background 0.2s ease, color 0.2s ease;
		white-space: nowrap;
	}

	.cta-secondary:hover {
		background: var(--color-primary);
		color: #ffffff;
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
	}
</style>
