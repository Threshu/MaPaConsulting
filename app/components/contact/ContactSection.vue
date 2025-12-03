<template>
	<section id="contact" class="contact-section">
		<UContainer>
			<h2 class="contact-title">{{ t("contact.title") }}</h2>

			<div class="contact-container">
				<ContactInfoCards />

				<ContactForm />
			</div>
		</UContainer>
	</section>
</template>

<script setup lang="ts">
	const { t } = useI18n();
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
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.contact-title {
			font-size: 2rem;
		}

		.contact-container {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}
</style>
