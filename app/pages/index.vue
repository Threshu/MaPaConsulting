<template>
	<div>
		<HomeSection />
		<AboutSection />
		<ContactSection />
	</div>
</template>

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
