<script setup lang="ts">
	const { t } = useI18n();

	useHead({
		title: t("meta.title"),
		meta: [
			{ name: "description", content: t("meta.description") },
			{ property: "og:title", content: t("meta.title") },
			{ property: "og:description", content: t("meta.description") },
			{ property: "og:type", content: "website" },
		],
	});
</script>

<template>
	<div>
		<section id="home" class="home-section">
			<UContainer>
				<HomeHero />
				<HomeContactCards />
			</UContainer>
		</section>

		<AboutSection />

		<ContactSection />
	</div>
</template>

<style>
	.home-section {
		min-height: 100vh;
		background-color: var(--color-body-bg);
		padding: 4rem 0;
		display: flex;
		align-items: center;
	}
</style>
