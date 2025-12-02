<template>
	<div class="contact-form-wrapper">
		<UForm
			:state="formState"
			:schema="formSchema"
			class="contact-form"
			@submit="onSubmit"
		>
			<UFormField :label="t('contact.form.name')" name="name" required>
				<UInput
					v-model="formState.name"
					:placeholder="t('contact.form.name')"
					color="white"
					variant="outline"
				/>
			</UFormField>

			<UFormField :label="t('contact.form.email')" name="email" required>
				<UInput
					v-model="formState.email"
					type="email"
					:placeholder="t('contact.form.email')"
					color="white"
					variant="outline"
				/>
			</UFormField>

			<UFormField :label="t('contact.form.subject')" name="subject" required>
				<UInput
					v-model="formState.subject"
					:placeholder="t('contact.form.subject')"
					color="white"
					variant="outline"
				/>
			</UFormField>

			<UFormField :label="t('contact.form.message')" name="message" required>
				<UTextarea
					v-model="formState.message"
					:placeholder="t('contact.form.message')"
					:rows="5"
					color="white"
					variant="outline"
				/>
			</UFormField>

			<CtaButton type="submit" icon="i-heroicons-paper-airplane">
				{{ t("contact.form.send") }}
			</CtaButton>
		</UForm>
	</div>
</template>

<script setup lang="ts">
	const { t } = useI18n();
	const { formState, formSchema, onSubmit } = useContactForm();
</script>

<style scoped>
	.contact-form-wrapper {
		background-color: var(--color-box-bg);
		border-radius: 0.75rem;
		padding: 1.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.contact-form :deep(label) {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-title);
	}

	.contact-form :deep(input),
	.contact-form :deep(textarea) {
		font-size: 1.0625rem;
		background-color: white;
		border: 1px solid var(--color-border);
	}

	@media (max-width: 768px) {
		.contact-form-wrapper {
			padding: 1.5rem;
		}
	}
</style>
