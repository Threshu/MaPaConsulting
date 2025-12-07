<template>
	<section id="about" class="about-section">
		<UContainer>
			<h2 class="about-title">{{ t("about.title") }}</h2>

			<UCarousel
				v-slot="{ item }"
				:items="slides"
				auto-height
				:ui="{
					container: 'rounded-2xl transition-[height]',
					item: 'basis-full px-2',
					prev: 'start-4 top-1/2 -translate-y-1/2',
					next: 'end-4 top-1/2 -translate-y-1/2',
				}"
				:prev="{
					color: 'primary',
					variant: 'solid',
					size: 'xl',
					icon: 'i-heroicons-chevron-left',
					class: 'text-white shadow-lg carousel-arrow',
				}"
				:next="{
					color: 'primary',
					variant: 'solid',
					size: 'xl',
					icon: 'i-heroicons-chevron-right',
					class: 'text-white shadow-lg carousel-arrow',
				}"
				arrows
				class="carousel-wrapper"
			>
				<component :is="item.component" />
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
	import type { Component } from "vue";
	import AboutMeSlide from "./slides/AboutMeSlide.vue";
	import ServicesSlide from "./slides/ServicesSlide.vue";
	import ProjectsSlide from "./slides/ProjectsSlide.vue";

	const { t } = useI18n();
	const { scrollToContact } = useScrollTo();

	interface CarouselSlide {
		component: Component;
	}

	const slides: CarouselSlide[] = [
		{ component: AboutMeSlide },
		{ component: ServicesSlide },
		{ component: ProjectsSlide },
	];
</script>

<style scoped>
	.about-section {
		min-height: 100vh;
		background-color: var(--color-section-bg);
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

	@media (min-width: 969px) {
		:deep(.carousel-arrow:first-of-type) {
			left: -1rem !important;
		}

		:deep(.carousel-arrow:last-of-type) {
			right: -1rem !important;
		}
	}

	@media (max-width: 968px) {
		.about-section {
			min-height: auto;
			padding: 2rem 0;
		}

		.about-title {
			font-size: 2.25rem;
			margin-top: 2rem;
			margin-bottom: 1.5rem;
		}

		.carousel-wrapper {
			margin-bottom: 0;
		}

		.contact-button-wrapper {
			display: none;
		}

		:deep(.carousel-arrow:first-of-type) {
			left: -0.5rem !important;
		}

		:deep(.carousel-arrow:last-of-type) {
			right: 0.5rem !important;
		}
	}

	@media (max-width: 480px) {
		:deep(.carousel-arrow) {
			width: 2rem !important;
			height: 2rem !important;
			left: -0.25rem !important;
			padding: 0.25rem !important;
		}

		:deep(.carousel-arrow:last-of-type) {
			left: auto !important;
			right: -0.25rem !important;
		}
	}
</style>
