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

				<h1 class="legal-title">{{ t("privacy.title") }}</h1>

				<div class="legal-sections">
					<!-- Section I -->
					<section class="legal-section">
						<h2>{{ t("privacy.section1.title") }}</h2>
						<p v-html="t('privacy.section1.content')"></p>
					</section>

					<!-- Section II -->
					<section class="legal-section">
						<h2>{{ t("privacy.section2.title") }}</h2>
						<p v-html="t('privacy.section2.content')"></p>
					</section>

					<!-- Section III -->
					<section class="legal-section">
						<h2>{{ t("privacy.section3.title") }}</h2>
						<div v-for="(item, index) in 3" :key="index" class="subsection">
							<h3>{{ t(`privacy.section3.subsection${index + 1}.title`) }}</h3>
							<p
								v-html="t(`privacy.section3.subsection${index + 1}.content`)"
							></p>
						</div>
					</section>

					<!-- Section IV -->
					<section class="legal-section">
						<h2>{{ t("privacy.section4.title") }}</h2>
						<div v-for="(item, index) in 5" :key="index" class="subsection">
							<h3>{{ t(`privacy.section4.subsection${index + 1}.title`) }}</h3>
							<p
								v-html="t(`privacy.section4.subsection${index + 1}.content`)"
							></p>
						</div>
					</section>

					<!-- Section V -->
					<section class="legal-section">
						<h2>{{ t("privacy.section5.title") }}</h2>
						<div v-for="(item, index) in 4" :key="index" class="subsection">
							<h3>{{ t(`privacy.section5.subsection${index + 1}.title`) }}</h3>
							<p
								v-html="t(`privacy.section5.subsection${index + 1}.content`)"
							></p>
						</div>
					</section>

					<!-- Section VI -->
					<section class="legal-section">
						<h2>{{ t("privacy.section6.title") }}</h2>
						<div v-for="(item, index) in 5" :key="index" class="subsection">
							<h3>{{ t(`privacy.section6.subsection${index + 1}.title`) }}</h3>
							<p
								v-html="t(`privacy.section6.subsection${index + 1}.content`)"
							></p>
						</div>
					</section>

					<!-- Section VII -->
					<section class="legal-section">
						<h2>{{ t("privacy.section7.title") }}</h2>
						<p v-html="t('privacy.section7.content')"></p>
					</section>

					<!-- Section VIII -->
					<section class="legal-section">
						<h2>{{ t("privacy.section8.title") }}</h2>
						<div v-for="(item, index) in 10" :key="index" class="subsection">
							<h3>{{ t(`privacy.section8.subsection${index + 1}.title`) }}</h3>
							<p
								v-html="t(`privacy.section8.subsection${index + 1}.content`)"
							></p>
						</div>
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
		title: t("privacy.title"),
		meta: [
			{ name: "description", content: t("privacy.meta.description") },
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
		gap: 3rem;
	}

	.legal-section h2 {
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--color-title);
		margin-bottom: 1.5rem;
	}

	.subsection {
		margin-bottom: 2rem;
	}

	.subsection h3 {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-title);
		margin-bottom: 0.75rem;
	}

	.legal-section p,
	.subsection p {
		font-size: 1.0625rem;
		line-height: 1.8;
		color: var(--color-text);
		white-space: pre-line;
	}

	.legal-section :deep(strong),
	.subsection :deep(strong) {
		font-weight: 600;
		color: var(--color-title);
	}

	.legal-section :deep(a),
	.subsection :deep(a) {
		color: var(--color-primary);
		text-decoration: underline;
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

		.subsection h3 {
			font-size: 1.125rem;
		}

		.legal-section p,
		.subsection p {
			font-size: 1rem;
		}
	}
</style>
