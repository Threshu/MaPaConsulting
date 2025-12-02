<template>
	<div class="language-switcher">
		<UDropdownMenu
			:items="languageItems"
			size="lg"
			:modal="false"
			:content="{
				side: 'left',
			}"
			:ui="{
				content: 'w-52 bg-white/95 backdrop-blur-sm',
				item: 'hover:bg-primary/10 p-3 text-base flex items-center',
				itemLeadingIcon: 'size-8 rounded-full ring-2 ring-[var(--color-title)]',
				itemLabel: 'text-[var(--color-title)] font-medium',
			}"
		>
			<UButton
				:icon="currentFlagIcon"
				color="neutral"
				variant="ghost"
				size="xl"
				class="language-button"
				:ui="{
					base: 'bg-transparent hover:bg-white/10 active:bg-white/10',
					leadingIcon: 'size-10 rounded-full ring-2 ring-[var(--color-title)]',
				}"
			/>
		</UDropdownMenu>
	</div>
</template>

<script setup lang="ts">
	import type { DropdownMenuItem } from "@nuxt/ui";

	const { locale, setLocale } = useI18n();

	const languages = [
		{ code: "de", name: "Deutsch", icon: "i-circle-flags-de" },
		{ code: "en", name: "English", icon: "i-circle-flags-gb" },
		{ code: "pl", name: "Polski", icon: "i-circle-flags-pl" },
	];

	const currentFlagIcon = computed(() => {
		const current = languages.find((lang) => lang.code === locale.value);
		return current?.icon || "i-circle-flags-de";
	});

	const languageItems = computed<DropdownMenuItem[]>(() =>
		languages.map((lang) => ({
			label: lang.name,
			icon: lang.icon,
			onSelect: () => setLocale(lang.code as "de" | "en" | "pl"),
		}))
	);
</script>

<style scoped>
	.language-switcher {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 1000;
	}
</style>
