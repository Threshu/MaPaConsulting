<template>
	<div ref="container" class="turnstile-container" />
</template>

<script setup lang="ts">
	// Cloudflare Turnstile widget, rendered explicitly. The script is loaded only
	// when this component mounts, which ContactForm does on the first interaction
	// with the form – visitors who never use the form never contact Cloudflare.

	interface TurnstileApi {
		render: (el: HTMLElement, options: Record<string, unknown>) => string;
		reset: (id: string) => void;
		remove: (id: string) => void;
	}

	const SCRIPT_SRC =
		"https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
	const TOKEN_WAIT_MS = 15000;

	const props = defineProps<{ siteKey: string }>();

	const { locale } = useI18n();
	const container = ref<HTMLElement | null>(null);
	const token = ref<string | null>(null);
	let widgetId: string | null = null;
	let waiters: Array<(value: string | null) => void> = [];

	const getApi = () =>
		(window as unknown as { turnstile?: TurnstileApi }).turnstile;

	let scriptPromise: Promise<void> | null = null;
	const loadScript = () => {
		if (getApi()) return Promise.resolve();
		scriptPromise ??= new Promise<void>((resolve, reject) => {
			const script = document.createElement("script");
			script.src = SCRIPT_SRC;
			script.async = true;
			script.onload = () => resolve();
			script.onerror = () => {
				scriptPromise = null;
				reject(new Error("Turnstile script failed to load"));
			};
			document.head.appendChild(script);
		});
		return scriptPromise;
	};

	const setToken = (value: string | null) => {
		token.value = value;
		if (value) {
			waiters.forEach((resolve) => resolve(value));
			waiters = [];
		}
	};

	onMounted(async () => {
		try {
			await loadScript();
		} catch (error) {
			console.error(error);
			return;
		}
		const api = getApi();
		if (!api || !container.value) return;
		widgetId = api.render(container.value, {
			sitekey: props.siteKey,
			language: locale.value,
			theme: "auto",
			size: "flexible",
			appearance: "interaction-only",
			callback: (value: string) => setToken(value),
			"expired-callback": () => setToken(null),
			"error-callback": () => setToken(null),
		});
	});

	onBeforeUnmount(() => {
		const api = getApi();
		if (api && widgetId) api.remove(widgetId);
		waiters.forEach((resolve) => resolve(null));
		waiters = [];
	});

	// Resolves with a token, waiting briefly if the challenge is still running.
	const getToken = () => {
		if (token.value) return Promise.resolve(token.value);
		return new Promise<string | null>((resolve) => {
			waiters.push(resolve);
			setTimeout(() => {
				waiters = waiters.filter((w) => w !== resolve);
				resolve(null);
			}, TOKEN_WAIT_MS);
		});
	};

	// Tokens are single-use – call after every submit attempt.
	const reset = () => {
		token.value = null;
		const api = getApi();
		if (api && widgetId) api.reset(widgetId);
	};

	defineExpose({ getToken, reset });
</script>

<style scoped>
	.turnstile-container:empty {
		display: none;
	}
</style>
