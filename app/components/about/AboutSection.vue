<template>
	<section id="about" class="about-section">
		<UContainer>
			<h2 class="about-title">{{ t("about.title") }}</h2>

			<UCarousel
				v-slot="{ item }"
				:items="slides"
				:ui="{
					root: 'relative',
					item: 'basis-full',
					container: 'rounded-2xl',
					arrows: {
						wrapper:
							'absolute inset-x-0 flex items-center justify-between px-4 pointer-events-none z-10',
						base: 'pointer-events-auto rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer disabled:opacity-0 disabled:cursor-not-allowed',
					},
				}"
				:prev="{
					color: 'primary',
					variant: 'solid',
					size: 'xl',
					ui: { base: 'text-white', leadingIcon: 'size-7' },
				}"
				:next="{
					color: 'primary',
					variant: 'solid',
					size: 'xl',
					ui: { base: 'text-white', trailingIcon: 'size-7' },
				}"
				arrows
				class="carousel-wrapper"
			>
				<AboutCarouselSlide :slide="item" />
			</UCarousel>

			<div class="contact-button-wrapper">
				<CtaButton icon="i-heroicons-envelope" @click="scrollToContact">
					{{ t("contact.button") }}
				</CtaButton>
			</div>
		</UContainer>
	</section>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const { scrollToContact } = useScrollTo();

	interface CarouselSlide {
		icon: string;
		title: string;
		content: string;
	}

	const slides = computed<CarouselSlide[]>(() => [
		{
			icon: "i-heroicons-user-circle",
			title: t("about.slides.aboutMe.title"),
			content: `
			<p class="slide-text">${t("about.slides.aboutMe.intro")}</p>
			<p class="slide-text">${t("about.slides.aboutMe.expertise")}</p>
			<p class="slide-text">${t("about.slides.aboutMe.approach")}</p>
		`,
		},
		{
			icon: "i-heroicons-briefcase",
			title: t("about.slides.services.title"),
			content: `
			<p class="slide-text">${t("about.slides.services.intro")}</p>
			<div class="services-grid">
				<div class="service-card">
					<div class="service-icon">🏭</div>
					<h4 class="service-title">${t("services.items.0.title")}</h4>
				</div>
				<div class="service-card">
					<div class="service-icon">📊</div>
					<h4 class="service-title">${t("services.items.1.title")}</h4>
				</div>
				<div class="service-card">
					<div class="service-icon">⚙️</div>
					<h4 class="service-title">${t("services.items.2.title")}</h4>
				</div>
				<div class="service-card">
					<div class="service-icon">💡</div>
					<h4 class="service-title">${t("services.items.3.title")}</h4>
				</div>
				<div class="service-card">
					<div class="service-icon">🤖</div>
					<h4 class="service-title">${t("services.items.4.title")}</h4>
				</div>
			</div>
		`,
		},
		{
			icon: "i-heroicons-light-bulb",
			title: t("about.slides.projects.title"),
			content: `
			<div class="projects-list">
				<div class="project-item">
					<div class="project-icon">🏗️</div>
					<p class="project-text">${t("projects.items.0.title")}</p>
				</div>
				<div class="project-item">
					<div class="project-icon">✈️</div>
					<p class="project-text">${t("projects.items.1.title")}</p>
				</div>
				<div class="project-item">
					<div class="project-icon">📈</div>
					<p class="project-text">${t("projects.items.2.title")}</p>
				</div>
				<div class="project-item">
					<div class="project-icon">🔧</div>
					<p class="project-text">${t("projects.items.3.title")}</p>
				</div>
				<div class="project-item">
					<div class="project-icon">🌱</div>
					<p class="project-text">${t("projects.items.4.title")}</p>
				</div>
				<div class="project-item">
					<div class="project-icon">🏆</div>
					<p class="project-text">${t("projects.items.5.title")}</p>
				</div>
			</div>
		`,
		},
	]);
</script>

<style scoped>
	.about-section {
		min-height: 100vh;
		background-color: var(--color-section-bg);
		padding: 4rem 0;
		display: flex;
		align-items: center;
	}

	.about-title {
		font-size: 3rem;
		font-weight: 600;
		color: var(--color-title);
		text-align: center;
		margin-bottom: 3rem;
	}

	.carousel-wrapper {
		margin-bottom: 2rem;
	}

	.contact-button-wrapper {
		display: flex;
		justify-content: center;
		margin-top: 3rem;
	}

	@media (max-width: 768px) {
		.about-title {
			font-size: 2.25rem;
		}
	}
</style>
