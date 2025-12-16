<template>
	<section id="contact" class="contact-section">
		<UContainer>
			<h2 class="contact-title">{{ t("contact.title") }}</h2>

			<div class="contact-container">
				<ContactInfoCards />

				<ContactForm />
			</div>

			<footer class="legal-footer">
				<NuxtLink :to="localePath('impressum')" class="footer-link">
					{{ t("footer.impressum") }}
				</NuxtLink>
				<span class="footer-separator">|</span>
				<NuxtLink :to="localePath('datenschutz')" class="footer-link">
					{{ t("footer.privacy") }}
				</NuxtLink>
			</footer>
		</UContainer>
	</section>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const localePath = useLocalePath();
</script>

<style scoped>
	.contact-section {
		min-height: 100vh;
		background-color: var(--color-section-bg);
		display: flex;
		align-items: center;
	}

	.contact-title {
		font-size: 3rem;
		font-weight: 600;
		color: var(--color-title);
		text-align: center;
		margin-bottom: 3rem;
	}

	.contact-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		max-width: 1300px;
		margin: 0 auto;
	}

	@media (max-width: 968px) {
		.contact-section {
			min-height: auto;
			padding: 2rem 0;
		}

		.contact-title {
			font-size: 2rem;
		}

		.contact-container {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	.legal-footer {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-border);
	}

	.footer-link {
		color: var(--color-text);
		font-size: 0.9375rem;
		text-decoration: none;
		transition: color 0.2s;
	}

	.footer-link:hover {
		color: var(--color-primary);
	}

	.footer-separator {
		color: var(--color-border);
	}

	@media (max-width: 768px) {
		.legal-footer {
			margin-top: 3rem;
			padding-top: 1.5rem;
		}

		.footer-link {
			font-size: 0.875rem;
		}
	}
</style>
