<template>
	<div class="error-page">
		<UContainer>
			<div class="error-content">
				<div class="error-code">{{ statusCode }}</div>
				<h1 class="error-title">{{ errorTitle }}</h1>
				<p class="error-description">{{ errorDescription }}</p>

				<div class="error-button">
					<CtaButton :to="localePath('/')" icon="i-heroicons-home" size="lg">
						{{ errorButton }}
					</CtaButton>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
	import { usePageSeo } from "./composables/usePageSeo";

	const props = defineProps({
		error: {
			type: Object,
			required: true,
		},
	});

	const { t } = useI18n();
	const localePath = useLocalePath();

	const statusCode = computed(() => props.error.statusCode || 500);
	const is404 = computed(() => statusCode.value === 404);

	const errorTitle = computed(() =>
		is404.value ? t("error.404.title") : t("error.general.title")
	);

	const errorDescription = computed(() =>
		is404.value ? t("error.404.description") : t("error.general.description")
	);

	const errorButton = computed(() =>
		is404.value ? t("error.404.button") : t("error.general.button")
	);

	usePageSeo({
		title: errorTitle.value,
		description: errorDescription.value,
		noindex: true,
	});
</script>

<style scoped>
	.error-page {
		min-height: 100vh;
		background-color: var(--color-section-bg);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4rem 0;
	}

	.error-content {
		text-align: center;
		max-width: 600px;
		margin: 0 auto;
	}

	.error-code {
		font-size: 8rem;
		font-weight: 700;
		color: var(--color-primary);
		line-height: 1;
		margin-bottom: 1rem;
		opacity: 0.8;
	}

	.error-title {
		font-size: 2.5rem;
		font-weight: 600;
		color: var(--color-title);
		margin-bottom: 1.5rem;
	}

	.error-description {
		font-size: 1.125rem;
		line-height: 1.7;
		color: var(--color-text);
		margin-bottom: 3rem;
	}

	.error-button {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 768px) {
		.error-code {
			font-size: 5rem;
		}

		.error-title {
			font-size: 1.75rem;
			margin-bottom: 1rem;
		}

		.error-description {
			font-size: 1rem;
			margin-bottom: 2rem;
		}
	}
</style>
