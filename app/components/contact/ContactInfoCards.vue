<template>
	<div class="contact-info-cards">
		<p class="contact-description">{{ t("contact.description") }}</p>

		<UCard class="contact-info-card">
			<div class="contact-info-content">
				<h3 class="contact-info-title">{{ t("contact.emailTitle") }}</h3>
				<p class="contact-info-data">{{ t("contact.info.email") }}</p>
				<CtaButton
					:to="`mailto:${t('contact.info.email')}`"
					icon="i-heroicons-envelope"
				>
					{{ t("contact.writeMe") }}
				</CtaButton>
			</div>
		</UCard>

		<UCard class="contact-info-card">
			<div class="contact-info-content">
				<h3 class="contact-info-title">{{ t("contact.phoneTitle") }}</h3>
				<p class="contact-info-data">{{ t("contact.info.phone") }}</p>
				<CtaButton
					:to="`tel:${t('contact.info.phone')}`"
					icon="i-heroicons-phone"
				>
					{{ t("contact.callMe") }}
				</CtaButton>
			</div>
		</UCard>

		<UCard class="contact-info-card">
			<div class="contact-info-content">
				<h3 class="contact-info-title">{{ t("contact.addressTitle") }}</h3>
				<p class="contact-info-data">{{ t("contact.info.address") }}</p>
				<CtaButton
					to="https://maps.google.com/?q=Lindenstraße+2,+97839+Esslebach"
					target="_blank"
					icon="i-heroicons-map-pin"
				>
					{{ t("contact.viewLocation") }}
				</CtaButton>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
</script>

<style scoped>
	.contact-info-cards {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.contact-description {
		font-size: 1.125rem;
		line-height: 1.6;
		color: var(--color-text);
		margin-bottom: 0.75rem;
	}

	.contact-info-card {
		background-color: var(--color-body-bg);
		border-radius: 0.75rem;
		padding: 1.25rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.contact-info-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	.contact-info-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-info-title {
		font-size: 1.375rem;
		font-weight: 600;
		color: var(--color-title);
		margin: 0;
	}

	.contact-info-data {
		font-size: 1.0625rem;
		color: var(--color-text);
		margin: 0;
		margin-bottom: 0.75rem;
	}
</style>
