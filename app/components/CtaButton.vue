<template>
	<UButton
		:to="to"
		:target="target"
		:type="type"
		:size="size"
		:leading-icon="icon"
		style="color: white !important"
		class="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 [&_svg]:text-white!"
		:ui="{ base: 'gap-3', leadingIcon: 'size-5' }"
		@click="handleClick"
	>
		<slot />
	</UButton>
</template>

<script setup lang="ts">
	interface Props {
		to?: string;
		target?: string;
		type?: "button" | "submit" | "reset";
		icon?: string;
		size?: "xs" | "sm" | "md" | "lg" | "xl";
	}

	withDefaults(defineProps<Props>(), {
		to: undefined,
		target: undefined,
		type: "button",
		icon: undefined,
		size: "xl",
	});

	const emit = defineEmits<{
		click: [event: MouseEvent];
	}>();

	const handleClick = (event: MouseEvent) => {
		emit("click", event);
	};
</script>
