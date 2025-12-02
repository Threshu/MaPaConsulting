// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
	rules: {
		// Vue-specific rules
		"vue/multi-word-component-names": "off", // Allow single-word component names
		"vue/no-multiple-template-root": "off", // Allow multiple root elements in template

		// TypeScript rules
		"@typescript-eslint/no-explicit-any": "warn", // Warn about 'any' types

		// General rules
		"no-console": "warn", // Warn about console.log (but allow in development)
		"no-debugger": "warn", // Warn about debugger statements
	},
});
