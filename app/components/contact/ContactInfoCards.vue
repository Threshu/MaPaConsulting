<template>
	<div class="contact-info-cards">
		<p class="contact-description">{{ t("contact.description") }}</p>

		<UCard
			v-for="card in contactCards"
			:key="card.titleKey"
			class="contact-info-card"
		>
			<div class="contact-info-content">
				<div class="contact-info-text">
					<h3 class="contact-info-title">{{ t(card.titleKey) }}</h3>
					<p class="contact-info-data">{{ card.data ?? t(card.dataKey!) }}</p>
				</div>
				<CtaButton :to="card.link" :target="card.target" :icon="card.icon">
					{{ t(card.buttonKey) }}
				</CtaButton>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const { address: emailAddress, mailto } = useProtectedEmail();

	interface ContactCard {
		titleKey: string;
		dataKey?: string;
		data?: string;
		buttonKey: string;
		link?: string;
		icon: string;
		target?: string;
	}

	const contactCards = computed<ContactCard[]>(() => [
		{
			titleKey: "contact.emailTitle",
			data: emailAddress.value,
			buttonKey: "contact.writeMe",
			link: mailto(),
			icon: "i-heroicons-envelope",
		},
		{
			titleKey: "contact.phoneTitle",
			dataKey: "contact.info.phone",
			buttonKey: "contact.callMe",
			link: `tel:${t("contact.info.phone")}`,
			icon: "i-heroicons-phone",
		},
		{
			titleKey: "contact.addressTitle",
			dataKey: "contact.info.address",
			buttonKey: "contact.viewLocation",
			link: "https://maps.google.com/?q=Lindenstraße+2,+97839+Esselbach",
			icon: "i-heroicons-map-pin",
			target: "_blank",
		},
	]);
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
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.contact-info-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	.contact-info-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}

	.contact-info-text {
		flex: 1;
	}

	.contact-info-title {
		font-size: 1.375rem;
		font-weight: 600;
		color: var(--color-title);
		margin: 0 0 0.25rem 0;
	}

	.contact-info-data {
		font-size: 1.0625rem;
		color: var(--color-text);
		margin: 0;
	}

	@media (max-width: 768px) {
		.contact-info-content {
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
		}

		.contact-info-title {
			font-size: 1.125rem;
		}

		.contact-info-data {
			font-size: 0.9375rem;
		}
	}
</style>
