<template>
	<div class="legal-page">
		<UContainer>
			<div class="legal-content">
				<div class="back-button-wrapper">
					<CtaButton
						:to="localePath('/')"
						icon="i-heroicons-arrow-left"
						size="md"
					>
						{{ t("common.backToHome") }}
					</CtaButton>
				</div>

				<h1 class="legal-title">{{ t("impressum.title") }}</h1>

				<div class="legal-sections">
					<section class="legal-section">
						<h2>{{ t("impressum.company.title") }}</h2>
						<p v-html="t('impressum.company.content')"></p>
					</section>

					<section class="legal-section">
						<h2>{{ t("impressum.contact.title") }}</h2>
						<p v-html="t('impressum.contact.content')"></p>
					</section>

					<section class="legal-section">
						<h2>{{ t("impressum.tax.title") }}</h2>
						<p v-html="t('impressum.tax.content')"></p>
					</section>

					<section class="legal-section">
						<h2>{{ t("impressum.activity.title") }}</h2>
						<p v-html="t('impressum.activity.content')"></p>
					</section>

					<section class="legal-section">
						<h2>{{ t("impressum.responsible.title") }}</h2>
						<p v-html="t('impressum.responsible.content')"></p>
					</section>

					<section class="legal-section">
						<h2>{{ t("impressum.liability.title") }}</h2>
						<p v-html="t('impressum.liability.content')"></p>
					</section>

					<section class="legal-section">
						<h2>{{ t("impressum.copyright.title") }}</h2>
						<p v-html="t('impressum.copyright.content')"></p>
					</section>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const localePath = useLocalePath();

	useHead({
		title: t("impressum.title"),
		meta: [
			{ name: "description", content: t("impressum.meta.description") },
			{ name: "robots", content: "noindex, follow" },
		],
	});
</script>

<style scoped>
	.legal-page {
		min-height: 100vh;
		background-color: var(--color-section-bg);
		padding: 6rem 0 4rem;
	}

	.legal-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.back-button-wrapper {
		margin-bottom: 2rem;
	}

	.legal-title {
		font-size: 3rem;
		font-weight: 600;
		color: var(--color-title);
		margin-bottom: 3rem;
	}

	.legal-sections {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
	}

	.legal-section h2 {
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--color-title);
		margin-bottom: 1rem;
	}

	.legal-section p {
		font-size: 1.0625rem;
		line-height: 1.8;
		color: var(--color-text);
		white-space: pre-line;
	}

	.legal-section :deep(strong) {
		font-weight: 600;
		color: var(--color-title);
	}

	@media (max-width: 768px) {
		.legal-page {
			padding: 4rem 0 3rem;
		}

		.legal-title {
			font-size: 2rem;
			margin-bottom: 2rem;
		}

		.legal-section h2 {
			font-size: 1.375rem;
		}

		.legal-section p {
			font-size: 1rem;
		}
	}
</style>
