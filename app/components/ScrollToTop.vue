<template>
	<Transition
		enter-active-class="transition-opacity duration-300"
		leave-active-class="transition-opacity duration-300"
		enter-from-class="opacity-0"
		leave-to-class="opacity-0"
	>
		<UButton
			v-show="isVisible"
			icon="i-heroicons-arrow-up"
			color="primary"
			size="xl"
			class="fixed bottom-8 right-4 z-1000 shadow-lg"
			:ui="{
				base: 'rounded-full',
				leadingIcon: 'size-6 text-white',
			}"
			@click="scrollToTop"
		/>
	</Transition>
</template>

<script setup lang="ts">
	const isVisible = ref(false);
	const { scrollToTop } = useScrollTo();

	const handleScroll = () => {
		isVisible.value = window.scrollY > 300;
	};

	onMounted(() => {
		window.addEventListener("scroll", handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener("scroll", handleScroll);
	});
</script>
