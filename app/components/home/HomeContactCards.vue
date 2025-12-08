<template>
	<div class="contact-grid">
		<UCard
			v-for="(info, index) in contactInfo"
			:key="index"
			class="contact-card"
			:ui="{
				root: 'bg-transparent shadow-none ring-0',
				body: 'p-2',
			}"
		>
			<ULink
				v-if="info.href"
				:to="info.href"
				:target="info.target"
				class="contact-link"
				:external="!!info.target"
			>
				<div class="contact-content">
					<UIcon :name="info.icon" class="contact-icon" />
					<div class="contact-text">
						<h3 class="contact-title">{{ info.title }}</h3>
						<p class="contact-value">{{ info.value }}</p>
					</div>
				</div>
			</ULink>
			<div v-else class="contact-content">
				<UIcon :name="info.icon" class="contact-icon" />
				<div class="contact-text">
					<h3 class="contact-title">{{ info.title }}</h3>
					<p class="contact-value">{{ info.value }}</p>
				</div>
			</div>
		</UCard>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();

	interface ContactInfo {
		icon: string;
		title: string;
		value: string;
		href?: string;
		target?: string;
	}

	const contactInfo = computed<ContactInfo[]>(() => [
		{
			icon: "i-heroicons-phone",
			title: t("home.contactInfo.phone"),
			value: t("home.contactInfo.phoneValue"),
			href: `tel:${t("home.contactInfo.phoneValue")}`,
		},
		{
			icon: "i-heroicons-envelope",
			title: t("home.contactInfo.email"),
			value: t("home.contactInfo.emailValue"),
			href: `mailto:${t("home.contactInfo.emailValue")}`,
		},
		{
			icon: "i-heroicons-map-pin",
			title: t("home.contactInfo.location"),
			value: t("home.contactInfo.locationValue"),
		},
		{
			icon: "i-heroicons-briefcase",
			title: t("home.contactInfo.linkedin"),
			value: t("home.contactInfo.linkedinValue"),
			href: "https://www.linkedin.com/in/mario-pape-b481a165/",
			target: "_blank",
		},
	]);
</script>

<style scoped>
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
		margin-top: 1rem;
		justify-content: space-between;
	}

	.contact-link {
		text-decoration: none;
		color: inherit;
	}

	.contact-content {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.contact-icon {
		font-size: 3rem;
		color: var(--color-primary);
		flex-shrink: 0;
	}

	.contact-text {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.contact-title {
		font-size: 1.25rem;
		color: var(--color-primary);
		margin: 0;
		font-weight: 500;
	}

	.contact-value {
		font-size: 1.125rem;
		color: var(--color-title);
		margin: 0;
		font-weight: 600;
		word-break: break-word;
	}

	.contact-card:hover .contact-icon {
		transform: scale(1.1);
		transition: transform 0.2s ease;
	}

	@media (max-width: 968px) {
		.contact-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.contact-card :deep(.u-card-body) {
			padding: 1rem !important;
		}

		.contact-content {
			gap: 0.75rem;
		}

		.contact-icon {
			font-size: 2.5rem;
		}

		.contact-title {
			font-size: 1.125rem;
		}

		.contact-value {
			font-size: 1.125rem;
		}
	}

	@media (max-width: 480px) {
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 0.75rem;
			margin-top: 1rem;
		}

		.contact-content {
			gap: 0.75rem;
		}

		.contact-icon {
			font-size: 2.25rem;
		}

		.contact-title {
			font-size: 1rem;
		}

		.contact-value {
			font-size: 1rem;
		}
	}
</style>
