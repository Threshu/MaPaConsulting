<template>
	<section id="about" class="about-section">
		<UContainer>
			<h2 class="about-title">{{ t("about.title") }}</h2>

			<UCarousel
				v-slot="{ item }"
				:items="slides"
				:ui="{
					container: 'rounded-2xl',
					item: 'basis-full px-2',
					prev: 'start-4 top-1/2 -translate-y-1/2 mobile-hide',
					next: 'end-4 top-1/2 -translate-y-1/2 mobile-hide',
					dots: 'mt-4 gap-2',
					dot: 'bg-gray-300 data-[active=true]:bg-primary w-2.5 h-2.5',
				}"
				:prev="{
					color: 'primary',
					variant: 'solid',
					size: 'xl',
					icon: 'i-heroicons-chevron-left',
					class: 'text-white shadow-lg',
				}"
				:next="{
					color: 'primary',
					variant: 'solid',
					size: 'xl',
					icon: 'i-heroicons-chevron-right',
					class: 'text-white shadow-lg',
				}"
				arrows
				indicators
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

	@media (max-width: 768px) {
		.about-title {
			font-size: 2.25rem;
			margin-top: 2rem;
		}

		:deep(.mobile-hide) {
			display: none !important;
		}
	}
</style>
