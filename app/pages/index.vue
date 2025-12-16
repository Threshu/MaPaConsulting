<template>
	<div>
		<HomeSection />
		<LazyAboutSection hydrate-on-visible />
		<LazyContactSection hydrate-on-visible />
	</div>
</template>

<script setup lang="ts">
	import { usePageSeo } from "~/composables/usePageSeo";

	const { t } = useI18n();

	usePageSeo({
		title: t("meta.title"),
		description: t("meta.description"),
		type: "website",
	});

	useSchemaOrg();
</script>
