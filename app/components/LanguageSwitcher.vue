<template>
	<div class="language-switcher">
		<UDropdownMenu
			:items="languageItems"
			size="lg"
			:modal="false"
			:content="{ side: 'left' }"
			:ui="dropdownUi"
		>
			<UButton
				:icon="currentFlagIcon"
				color="neutral"
				variant="ghost"
				size="xl"
				:aria-label="t('accessibility.changeLanguage')"
				:ui="{
					base: 'bg-transparent hover:bg-[#CA8D4F]/10 active:bg-[#CA8D4F]/10',
					leadingIcon: 'size-10 rounded-full ring-2 ring-[#CA8D4F]',
				}"
			/>
		</UDropdownMenu>
	</div>
</template>

<script setup lang="ts">
	import type { DropdownMenuItem } from "@nuxt/ui";

	const { t, locale, setLocale } = useI18n();
	const { isDark } = useTheme();

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

	const dropdownUi = computed(() => ({
		content: isDark.value
			? 'w-52 bg-[#1A252B]/95 backdrop-blur-sm border border-[#2E3D46]'
			: 'w-52 bg-white/95 backdrop-blur-sm border border-[#DAD6CC]',
		item: 'hover:bg-[#CA8D4F]/10 p-3 text-base flex items-center',
		itemLeadingIcon: 'size-8 rounded-full ring-2 ring-[#CA8D4F]',
		itemLabel: isDark.value ? 'text-[#F8F6F2] font-medium' : 'text-[#1A252B] font-medium',
	}));
</script>

<style scoped>
	.language-switcher {
		display: flex;
		align-items: center;
	}
</style>
